import { makeAutoObservable } from 'mobx';

class PeakFlow {
    loading = false;
    peakFlowList: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}
