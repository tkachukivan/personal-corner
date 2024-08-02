import { Air } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function Apps() {
    return (
        <Card sx={{ width: 130 }} variant="outlined">
            <CardActionArea component={Link} to="/peak-flow">
                <CardContent>
                    <Grid container direction="column" sx={{ alignItems: 'center' }}>
                        <Air color="success" fontSize="large" />
                        <Typography component="div" gutterBottom variant="subtitle1">
                            Peak Flow
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
