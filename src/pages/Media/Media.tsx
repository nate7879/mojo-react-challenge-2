import { gql, useQuery } from '@apollo/client';
import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

import { ArticlesGrid, SpotlightGrid } from '../../components';
import { useTitle } from '../../hooks';
import { ChevronLeft, ChevronRight } from '../../icons';
import * as Models from '../../models';
import { MainTemplate } from '../../templates';
import { StyledDivider } from './Media.style';

// This could be moved to a centralised config file.
const ARTICLES_PER_PAGE = 6;
const ARTICLES_COUNT = ARTICLES_PER_PAGE * 4; // Four pages of articles.
const SPOTLIGHT_ARTICLES_COUNT = 5;
const SPOTLIGHT_PODCASTS_COUNT = 6;

const GET_MEDIA = gql`
	query GetMedia {
		articles: media(type: article, limit: ${ARTICLES_COUNT}) {
			items {
				id
				description
				publishedAt
				source
				thumbnailUri
				title
				url
			}
		}
		spotlightArticles: media(type: article, featured: true, limit: ${SPOTLIGHT_ARTICLES_COUNT}) {
			items {
				id
				description
				thumbnailUri
				title
				url
			}
		}
		spotlightPodcasts: media(type: podcast, limit: ${SPOTLIGHT_PODCASTS_COUNT}) {
			items {
				id
				thumbnailUri
				title
				url
			}
		}
	}
`;

type MediaQueryResponse = {
	articles: {
		items: Models.Article[];
	};
	spotlightArticles: {
		items: Models.SpotlightArticle[];
	};
	spotlightPodcasts: {
		items: Models.Podcast[];
	};
};

export const Media: React.FC = () => {
	useTitle('Media');

	const [articlesPage, setArticlesPage] = React.useState(0);
	const { loading, data } = useQuery<MediaQueryResponse>(GET_MEDIA);

	const handleNextArticlesPage = () => {
		setArticlesPage(currentPage => currentPage + 1);
	};

	const handlePreviousArticlesPage = () => {
		setArticlesPage(currentPage => currentPage - 1);
	};

	const HeroContent = (
		<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ md: 5.5 }} alignItems="center">
			<img src="/images/media-header-hero.png" alt="mojo in the media" />

			<Stack spacing={1.5}>
				<Typography variant="futuraTitleSmall">Mojo in the media</Typography>
				<Typography variant="newYorkHeadingXSmall">Articles, videos and podcasts about Mojo</Typography>
			</Stack>
		</Stack>
	);

	const ArticlesActions =
		!loading && data?.articles ? (
			<>
				<IconButton disabled={articlesPage === 0} onClick={handlePreviousArticlesPage}>
					<ChevronLeft />
				</IconButton>
				<IconButton
					disabled={articlesPage === Math.ceil(data.articles.items.length / ARTICLES_PER_PAGE) - 1}
					onClick={handleNextArticlesPage}
				>
					<ChevronRight />
				</IconButton>
			</>
		) : null;

	return (
		<MainTemplate heroContent={HeroContent}>
			<SpotlightGrid
				title="Spotlight"
				loading={loading}
				articles={data?.spotlightArticles.items}
				podcasts={data?.spotlightPodcasts.items}
			/>

			<StyledDivider flexItem />

			<ArticlesGrid
				title="Articles"
				loading={loading}
				actions={ArticlesActions}
				articles={data?.articles.items.slice(
					articlesPage * ARTICLES_PER_PAGE,
					articlesPage * ARTICLES_PER_PAGE + ARTICLES_PER_PAGE,
				)}
			/>
		</MainTemplate>
	);
};
