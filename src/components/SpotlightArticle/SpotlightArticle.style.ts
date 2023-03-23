import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)<{ featured: boolean }>`
	color: ${props => props.theme.colors.black[600]};
	padding: 0px;
	margin: 0px;
	text-transform: none;
	border-radius: 0px;
	height: 100%;
	display: flex;
	justify-content: start;

	${props => !props.featured && `min-width: 282px;`};
`;

export const StyledImg = styled('img')`
	width: 100%;
	max-width: 900px;
	border-radius: 2px;
	filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.15));
	margin: 0 auto;
`;

export const StyledTypography = styled(Typography)`
	color: ${props => props.theme.colors.text2};
`;
