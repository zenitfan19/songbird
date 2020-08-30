import birdsData from '../constants/birds';

export default class UserAnswers {
  constructor() {
    this.answers = birdsData.map((arr) => arr.map((el) => {
      return {
        id: el.id,
        isRight: null
      };
    }));
  }

  setAnswer(birdClassId, birdId, answer) {
    this.answers[birdClassId].find((el) => el.id === birdId).isRight = answer;
  }

  countWrongAnswers(birdClassId) {
    return this.answers[birdClassId].filter((el) => el.isRight === false).length;
  }
}