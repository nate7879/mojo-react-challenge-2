import { Stack } from '@mui/material';
import React from 'react';

import * as Models from '../../models';
import { prettyDate } from '../../utils';
import { StyledButton, StyledDate, StyledImg, StyledPublication, StyledTitle, StyledTypography } from './Article.style';

interface ComponentProps {
	/**
	 * The article to display.
	 */
	article: Models.Article;
}

export const Article: React.FC<ComponentProps> = ({ article }) => {
	return (
		<StyledButton href={article.url}>
			<Stack gap={1}>
				<StyledDate variant="futuraParagraphSmallRegular">{prettyDate(new Date(article.publishedAt))}</StyledDate>
				<Stack gap={3} direction="row">
					<Stack gap={1}>
						<StyledTitle variant="newYorkHeadingXSmall">{article.title}</StyledTitle>
						<StyledTypography variant="newYorkParagraphSmall">{article.description}</StyledTypography>
					</Stack>
					<StyledImg src={article.thumbnailUri} alt="article thumbnail" />
				</Stack>
				<StyledPublication variant="futuraParagraphXSmallRegular">By {article.source}</StyledPublication>
			</Stack>
		</StyledButton>
	);
};
