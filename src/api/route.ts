import { Application } from 'express';

import peakFlowRoutes from './PeakFlow/index.js';

const mountRoutes = (app: Application) => {
    app.use('/api/peak-flow', peakFlowRoutes);
};

export default mountRoutes;
