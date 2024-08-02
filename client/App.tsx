import { Box, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { StrictMode, useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AppHeader } from './components/AppHeader';
import { Apps, PeakFlow } from './pages';

export function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <AppHeader />
                <Box sx={{ paddingBottom: 3, paddingLeft: 6, paddingRight: 6, paddingTop: 3 }}>
                    <BrowserRouter basename="/">
                        <Routes>
                            <Route Component={Apps} path="/" />
                            <Route Component={PeakFlow} path="/peak-flow" />
                            <Route element={<Navigate to="/" />} path="*" />
                        </Routes>
                    </BrowserRouter>
                </Box>
            </ThemeProvider>
        </StrictMode>
    );
}
