import { Container, Stack } from '@mui/material';
import React from 'react';

import { PageFooter, PageHeader } from '../../components';

interface ComponentProps {
	/**
	 * Optional children to render as the main content of the template.
	 */
	children?: React.ReactNode;
	/**
	 * Optional hero content to render inside of the page header.
	 */
	heroContent?: React.ReactNode;
}

export const MainTemplate: React.FC<ComponentProps> = ({ children, heroContent }) => {
	return (
		<Stack gap={5.5}>
			<header>
				<PageHeader afterNavBar={heroContent} />
			</header>

			<main>
				<Container>{children}</Container>
			</main>

			<footer>
				<PageFooter />
			</footer>
		</Stack>
	);
};
