import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../theme';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const renderTestComponent = (component: React.ReactElement) => {
	return render(component, { wrapper: AppWrapper });
};
