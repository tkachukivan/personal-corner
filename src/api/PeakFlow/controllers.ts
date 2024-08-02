import { Request, Response } from 'express';

import { PeakFlow } from './model.js';

export async function getUserPeakFlowRecords(req: Request, res: Response) {
    try {
        const peakFlowRecords = await PeakFlow.findAll();
        console.log(peakFlowRecords);

        res.send(peakFlowRecords);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
        res.send({ error: e });
    }
}
