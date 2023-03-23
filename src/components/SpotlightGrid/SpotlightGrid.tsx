import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import * as Models from '../../models';
import { LoadingSection } from '../LoadingSection';
import { SpotlightArticle } from '../SpotlightArticle';
import { SpotlightPodcast } from '../SpotlightPodcast';

interface ComponentProps {
	/**
	 * The articles to display in the grid.
	 */
	articles?: Models.SpotlightArticle[];
	/**
	 *  Display loading section.
	 */
	loading?: boolean;
	/**
	 * The podcasts to display in the grid.
	 */
	podcasts?: Models.Podcast[];
	/**
	 * The title of the grid section.
	 */
	title?: string;
}

export const SpotlightGrid: React.FC<ComponentProps> = ({ articles = [], loading = false, podcasts = [], title }) => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down('md'));
	const isLg = useMediaQuery(theme.breakpoints.down('lg'));

	const leadArticle = articles[0];
	const otherArticles = articles.slice(1);

	return (
		<Stack gap={4}>
			{!!title && <Typography variant="futuraTitleXSmall">{title}</Typography>}

			{loading ? (
				<LoadingSection />
			) : (
				<Stack
					direction={{ lg: 'row', xs: 'column' }}
					gap={3}
					divider={<Divider flexItem orientation={isLg ? 'horizontal' : 'vertical'} />}
				>
					{!!leadArticle && <SpotlightArticle featured article={articles[0]} />}

					{!!otherArticles.length || !!podcasts.length ? (
						<Stack
							direction={{ md: 'row', sm: 'column' }}
							gap={3}
							divider={<Divider flexItem orientation={isMd ? 'horizontal' : 'vertical'} />}
						>
							{!!otherArticles.length ? (
								<Stack gap={2.5} divider={<Divider flexItem orientation="horizontal" />}>
									{otherArticles.map(article => (
										<SpotlightArticle key={article.id} article={article} />
									))}
								</Stack>
							) : null}

							{!!podcasts.length ? (
								<Stack gap={2} divider={<Divider flexItem orientation="horizontal" />}>
									{podcasts.map(podcast => (
										<SpotlightPodcast key={podcast.id} podcast={podcast} />
									))}
								</Stack>
							) : null}
						</Stack>
					) : null}
				</Stack>
			)}
		</Stack>
	);
};
