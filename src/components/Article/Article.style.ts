import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)`
	text-transform: none;
	border-radius: 0px;
	padding: 0px;
	text-align: left;
`;

export const StyledDate = styled(Typography)`
	color: ${props => props.theme.colors.text2};
`;

export const StyledTitle = styled(Typography)`
	color: ${props => props.theme.palette.common.black};
`;

export const StyledTypography = styled(Typography)`
	color: ${props => props.theme.colors.black[500]};
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const StyledPublication = styled(Typography)`
	color: ${props => props.theme.colors.black[200]};
`;

export const StyledImg = styled('img')`
	filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.15));
	max-width: 150px;
	max-height: 100px;
`;
