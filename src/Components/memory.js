export class Memory{

    constructor(maxMemory){
        this.maxMemory = maxMemory;
        this.samples = new Array();
    }

    addSample(sample){
        this.sample.push(sample);
        if (this.samples.length > this.maxMemory) {
            this.samples.shift();
        }
    }

    sample(nSamples){
        return sampleSize(this.samples, nSamples);
    }

}