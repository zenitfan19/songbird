import birdsData from '../constants/birds';

const guessBird = (currentLvl) => {    
  const currentBirdList = birdsData[currentLvl].map((el) => el.id);
  const randomBird = Math.floor(Math.random() * currentBirdList.length);

  return currentBirdList[randomBird];
};

export default guessBird;