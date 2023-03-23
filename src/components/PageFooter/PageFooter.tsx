import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';

import { StyledBox, StyledDivider } from './PageFooter.style';

export const PageFooter: React.FC = () => {
	return (
		<StyledBox>
			<Container>
				<Stack direction="row" spacing={1.25} divider={<StyledDivider orientation="vertical" flexItem />}>
					{['Terms & Conditions', 'Privacy Policy', '© Copyright of Mojo Crowe 2022'].map(link => (
						<Typography key={link} variant="futuraParagraphSmallRegular">
							{link}
						</Typography>
					))}
				</Stack>
			</Container>
		</StyledBox>
	);
};
