import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import * as Models from '../../models';
import { Article } from '../Article';
import { LoadingSection } from '../LoadingSection';
import { StyledDivider, StyledTypography } from './ArticlesGrid.style';

interface ComponentProps {
	/**
	 * Component to render to the right of the title.
	 */
	actions?: React.ReactNode;
	/**
	 * The articles to display in the grid.
	 */
	articles?: Models.Article[];
	/**
	 * Display loading section.
	 */
	loading?: boolean;
	/**
	 * The title of the grid section.
	 */
	title?: string;
}

export const ArticlesGrid: React.FC<ComponentProps> = ({ actions, articles = [], loading = false, title }) => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down('md'));

	const cols = isMd ? 1 : 2;

	return (
		<Stack gap={5}>
			<Stack direction="row" justifyContent="right">
				{!!title && (
					<StyledTypography flexGrow={1} variant="futuraTitleXSmall">
						{title}
					</StyledTypography>
				)}
				{actions}
			</Stack>

			{loading ? (
				<LoadingSection />
			) : !!articles.length ? (
				<Grid container columnSpacing={3}>
					{articles.map((article, index, { length }) => (
						<Grid key={article.id} item xs={12 / cols}>
							<Article article={article} />
							{index < length - cols && <StyledDivider flexItem />}
						</Grid>
					))}
				</Grid>
			) : null}
		</Stack>
	);
};
