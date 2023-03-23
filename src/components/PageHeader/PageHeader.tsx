import Container from '@mui/material/Container';
import React from 'react';

import { TopNav } from '../TopNav';
import { StyledBox } from './PageHeader.style';

interface ComponentProps {
	/**
	 * Optional component to render under the top nav bar inside of the page header section.
	 */
	afterNavBar?: React.ReactNode;
}

export const PageHeader: React.FC<ComponentProps> = ({ afterNavBar }) => {
	return (
		<StyledBox>
			<Container>
				<TopNav />
			</Container>

			{!!afterNavBar && <Container>{afterNavBar}</Container>}
		</StyledBox>
	);
};
