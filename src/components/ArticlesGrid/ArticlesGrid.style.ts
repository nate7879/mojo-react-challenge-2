import { Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)`
	color: ${props => props.theme.colors.black[600]};
`;

export const StyledDivider = styled(Divider)`
	padding-top: ${props => props.theme.spacing(4)};
	margin-bottom: ${props => props.theme.spacing(4)};
`;
