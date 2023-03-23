import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)`
	color: ${props => props.theme.colors.white[500]};
	background: ${props => props.theme.colors.black[600]};
	padding-top: ${props => props.theme.spacing(5.5)};
	padding-bottom: ${props => props.theme.spacing(5.5)};
`;

export const StyledDivider = styled(Divider)`
	border-color: ${props => props.theme.colors.white[500]};
`;
