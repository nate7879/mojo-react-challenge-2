import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface ComponentProps {
	/**
	 * Min height of the section.
	 * @default 250
	 */
	minHeight?: number;
}

export const LoadingSection: React.FC<ComponentProps> = ({ minHeight = 250 }) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight }}>
			<CircularProgress color="inherit" />
		</Box>
	);
};
