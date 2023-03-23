import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDivider = styled(Divider)`
	padding-top: ${props => props.theme.spacing(5.5)};
	margin-bottom: ${props => props.theme.spacing(6.375)};
	max-width: ${props => props.theme.spacing(5.5)};
	margin-left: auto;
	margin-right: auto;
`;
