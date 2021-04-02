import * as tf from '@tensorflow/tfjs';

export class Model{

    constructor(hiddenLayerSizeOrModel, numStates, numActions, batchSize){
        this.numStates = numStates;
        this.numActions = numActions;
        this.batchSize = batchSize;

        if(hiddenLayerSizeOrModel instanceof tf.LayersModel){
            this.network = hiddenLayerSizeOrModel;
            this.network.summary();
            this.network.compile({optimizer: 'adam', loss: 'meanSquaredError'});
        }
        else{
            this.defineModel(hiddenLayerSizeOrModel);
        }
    }

    defineModel(hiddenLayerSizes){
        if (!Array.isArray(hiddenLayerSizes)){
            hiddenLayerSizes = [hiddenLayerSizes]
        }
        this.network = tf.sequential();
        hiddenLayerSizes.forEach((hiddenLayerSize, i) => {
            this.network.add(tf.layers.dense({
                units: hiddenLayerSize,
                activation: 'relu',
                inputShape: i === 0 ? [this.numStates] : undefined
            }))
        })
        this.network.add(tf.layers.dense({units: this.numActions}));

        this.network.summary();
        this.network.compile({optimizer: 'adam', loss: 'meanSquaredError'});
    }

    //used as a garbage collector
    predict(states){
        return tf.tidy(() => this.network.predict(states));
    }

    async train(xBatch, yBatch){
        await this.network.fit(xBatch, yBatch);
    }

    chooseAction(state, eps){
        if(Math.random() < eps){
            return Math.floor(Math.random() * this.numActions);
        }
        else{
            return tf.tidy(() => {
                return this.network.predict(state).argMax(1).dataSync()[0];
            })
        }
    }


}