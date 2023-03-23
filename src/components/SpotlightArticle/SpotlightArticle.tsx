import { Stack, Typography } from '@mui/material';
import React from 'react';

import { StyledButton, StyledImg, StyledTypography } from './SpotlightArticle.style';
import * as Models from '../../models';

export interface ComponentProps {
	/**
	 * Whether the article is featured or not.
	 */
	featured?: boolean;
	/**
	 * The spotlight article to display.
	 */
	article: Models.SpotlightArticle;
}

export const SpotlightArticle: React.FC<ComponentProps> = ({ article, featured = false }) => {
	return (
		<StyledButton href={article.url} featured={featured}>
			<Stack gap={3.5} alignItems="flex-start">
				{featured && <StyledImg src={article.thumbnailUri} alt="article thumbnail" />}

				<Stack gap={1}>
					<Typography component="h2" variant={featured ? 'newYorkHeadingXSmall' : 'newYorkParagraphMedium'}>
						{article.title}
					</Typography>

					<StyledTypography variant={featured ? 'futuraParagraphSmallRegular' : 'futuraParagraphXSmallRegular'}>
						{article.description}
					</StyledTypography>
				</Stack>
			</Stack>
		</StyledButton>
	);
};
