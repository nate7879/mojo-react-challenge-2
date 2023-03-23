import { ThemeColors, ThemeTypographyVariants } from './theme';

declare module '@mui/material/styles' {
	interface Theme {
		colors: ThemeColors;
	}

	interface ThemeOptions {
		colors: ThemeColors;
	}

	interface TypographyVariants extends ThemeTypographyVariants {}
	interface TypographyVariantsOptions extends ThemeTypographyVariants {}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		futuraHeadingMedium: true;
		futuraParagraphSmallBold: true;
		futuraParagraphSmallRegular: true;
		futuraParagraphXSmallRegular: true;
		futuraTitleSmall: true;
		futuraTitleXSmall: true;
		newYorkHeadingXSmall: true;
		newYorkParagraphMedium: true;
		newYorkParagraphSmall: true;
	}
}
