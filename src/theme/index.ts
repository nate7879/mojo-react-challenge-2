import { createTheme } from '@mui/material/styles';

export interface ThemeTypographyVariants {
	futuraHeadingMedium: React.CSSProperties;
	futuraTitleSmall: React.CSSProperties;
	futuraTitleXSmall: React.CSSProperties;
	futuraParagraphSmallRegular: React.CSSProperties;
	futuraParagraphSmallBold: React.CSSProperties;
	futuraParagraphXSmallRegular: React.CSSProperties;
	newYorkHeadingXSmall: React.CSSProperties;
	newYorkParagraphSmall: React.CSSProperties;
	newYorkParagraphMedium: React.CSSProperties;
}

export interface ThemeColors {
	black: {
		200: string;
		500: string;
		600: string;
	};
	white: {
		500: string;
	};
	text2: string;
}

export const defaultTheme = createTheme({
	typography: {
		futuraHeadingMedium: {
			fontFamily: 'Futura MdCn BT',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '20px',
			lineHeight: '120%',
		},
		futuraTitleSmall: {
			fontFamily: 'Futura XBlk BT',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '44px',
			lineHeight: '120%',
			textTransform: 'uppercase',
		},
		futuraTitleXSmall: {
			fontFamily: 'Futura XBlk BT',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '32px',
			lineHeight: '120%',
			textTransform: 'uppercase',
		},
		futuraParagraphSmallRegular: {
			fontFamily: 'Futura Bk BT',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '12px',
			lineHeight: '16px',
			letterSpacing: '-0.4px',
		},
		futuraParagraphSmallBold: {
			fontFamily: 'Futura Bk BT',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '12px',
			lineHeight: '16px',
			letterSpacing: '-0.4px',
		},
		futuraParagraphXSmallRegular: {
			fontFamily: 'Futura Bk BT',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '10px',
			lineHeight: '12px',
			letterSpacing: '-0.4px',
		},
		newYorkHeadingXSmall: {
			fontFamily: 'New York Extra Large',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '24px',
			lineHeight: '28px',
		},
		newYorkParagraphSmall: {
			fontFamily: 'New York Extra Large',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '12px',
			lineHeight: '16px',
		},
		newYorkParagraphMedium: {
			fontFamily: 'New York Extra Large',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: '20px',
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					futuraParagraphSmallRegular: 'p',
					futuraTitleSmall: 'h1',
					futuraTitleXSmall: 'h2',
					futuraParagraphXSmallRegular: 'p',
					newYorkHeadingXSmall: 'h3',
					newYorkParagraphSmall: 'p',
					newYorkParagraphMedium: 'p',
				},
			},
		},
	},
	colors: {
		black: {
			200: '#CCCCCC',
			500: '#535555',
			600: '#303232',
		},
		white: {
			500: '#fff',
		},
		text2: '#8A8A8A',
	},
});
