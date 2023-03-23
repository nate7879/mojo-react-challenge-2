import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

import { Podcast } from '../../models';
import { StyledButton, StyledImg } from './SpotlightPodcast.style';

interface ComponentProps {
	podcast: Podcast;
}

export const SpotlightPodcast: React.FC<ComponentProps> = ({ podcast }) => {
	return (
		<StyledButton href={podcast.url}>
			<Stack direction="row" gap={1.5} alignItems="center">
				<StyledImg src={podcast.thumbnailUri} alt="podcast thumbnail" />

				{/* TODO: THE FONT REQUIRED FOR THIS IS MISSING */}
				<Typography variant="futuraParagraphSmallRegular">{podcast.title}</Typography>
			</Stack>
		</StyledButton>
	);
};
