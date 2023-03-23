import { ButtonUnstyled } from '@mui/base';
import { styled } from '@mui/material/styles';

import { ComponentProps } from './LinkButton';

export const StyledButton = styled(ButtonUnstyled)<ComponentProps>`
	text-decoration: none;
	color: ${props => props.theme.colors.black[600]};

	${props =>
		props.active &&
		`
        padding: 6px 16px;
        background: ${props.theme.colors.black[600]};
        border-radius: 24px;
        color: ${props.theme.colors.white[500]};
    `}
`;
