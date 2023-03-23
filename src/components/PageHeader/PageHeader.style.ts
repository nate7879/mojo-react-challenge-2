import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: ${props => props.theme.spacing(4)};

	padding: 52px 0px 44px 0px;
	background: radial-gradient(98.66% 100% at 50% 0%, #ffce85 0%, #ffae33 100%);
`;
