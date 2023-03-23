import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDivider = styled(Divider)`
	padding-left: ${props => props.theme.spacing(3)};
	margin-right: ${props => props.theme.spacing(3)};
`;
