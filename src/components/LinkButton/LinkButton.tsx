import { Typography } from '@mui/material';
import React from 'react';

import { StyledButton } from './LinkButton.style';

export interface ComponentProps {
	/**
	 * Optional flag to make button appear active.
	 */
	active?: boolean;
	/**
	 * Children to render inside the button.
	 */
	children: React.ReactNode;
	/**
	 * Link that the button will navigate to.
	 */
	href: string;
}

export const LinkButton: React.FC<ComponentProps> = ({ active = false, children, href }) => {
	return (
		<StyledButton href={href} active={active}>
			<Typography variant="futuraHeadingMedium">{children}</Typography>
		</StyledButton>
	);
};
