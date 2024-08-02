import { SelfImprovement } from '@mui/icons-material';
import { AppBar, Link, Toolbar } from '@mui/material';

export function AppHeader() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <SelfImprovement sx={{ display: { md: 'flex', xs: 'none' }, mr: 1 }} />
                <Link color="white" href="/" underline="none" variant="h6">
                    Personal Corner
                </Link>
            </Toolbar>
        </AppBar>
    );
}
