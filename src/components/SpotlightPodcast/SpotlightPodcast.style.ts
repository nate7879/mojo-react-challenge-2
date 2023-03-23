import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)`
	color: ${props => props.theme.palette.common.black};
	padding: 0px;
	border-radius: 0px;
	text-transform: none;
	display: flex;
	justify-content: start;
	min-width: 282px;
`;

export const StyledImg = styled('img')`
	max-width: 64px;
	border-radius: 1px;
`;
