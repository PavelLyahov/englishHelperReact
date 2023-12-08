import lodash from 'lodash';

class PhraseTrainingManager {
  constructor(list) {
    this.trainingList = list;
    this.currentPhraseIndex = 0;
  }

  setTrainingList(newList) {
    if (Array.isArray(newList)) {
      this.trainingList = newList;
      this.currentPhraseIndex = 0; 
    } else {
      console.error('Invalid input. Please provide an array.');
    }
  }

  getTrainingList() {
    return this.trainingList;
  }

  randomizeList() {
    this.trainingList = lodash.shuffle(this.trainingList);
  }

  getNext() {
    if (this.trainingList.length > 0) {
      if (this.currentPhraseIndex >= this.trainingList.length) {
        this.currentPhraseIndex = 0;
      }

      const nextPhrase = this.trainingList[this.currentPhraseIndex];
      this.currentPhraseIndex++;

      return nextPhrase;
    } else {
      console.error('Training list is empty.');
      return null;
    }
  }
}

export default PhraseTrainingManager;
