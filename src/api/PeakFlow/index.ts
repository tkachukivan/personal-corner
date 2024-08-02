import Router from 'express-promise-router';

import * as controllers from './controllers.js';

const router = Router();

router.get('/', controllers.getUserPeakFlowRecords);

export default router;
