import { Stack } from '@mui/material';
import React from 'react';

import { LinkButton } from '../LinkButton';

export const TopNav: React.FC = () => {
	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center">
			<img src="/images/logo.svg" alt="MojoCrowe logo" />

			<Stack direction="row" alignItems="center" spacing={4} display={{ xs: 'none', md: 'block' }}>
				{['Home', 'Course & App', 'Media', 'Merch', 'Contact us', 'My account'].map(link => (
					<LinkButton key={link} href="#" active={link === 'Media'}>
						{link}
					</LinkButton>
				))}
			</Stack>
		</Stack>
	);
};
