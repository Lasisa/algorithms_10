/**
Дан массив монет и сумма. показать размен суммы указанными монетами если это возможно
количество монет ограничено

заготовка программы

const getCoins = (sum, coins) => {
  const result = [];
  // your code
  return result;
};

const main = () => {
  const penny = [1, 3, 4, 2];
  const amount = 5;
  res = getCoins(amount, penny);
  console.log(res);
};

main();

Разбор алгоритма с вебинара - https://docs.google.com/spreadsheets/d/1-XTZK4LrqfMgH5G2QT0G1JkduYmzV57glT1Iso7h6NM/edit?usp=sharing

 */


const getCoins = (sum, coins) => {
    const result = [];
    let remainingSum = sum;
    coins.sort((a, b) => b - a); 
  
    for (let i = 0; i < coins.length; i++) {
      const currentCoin = coins[i];
  
      while (remainingSum >= currentCoin && result[i] !== 0) {
        result[i] = (result[i] || 0) + 1;
        remainingSum -= currentCoin;
      }
    }
  
    if (remainingSum !== 0) {
      return []; 
    }
  
    return result;
  };
  
  const main = () => {
    const penny = [1, 3, 4, 2];
    const amount = 5;
    const res = getCoins(amount, penny);
    console.log(res);
  };
  
  main();
  


