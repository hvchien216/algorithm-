const main = () => {
  let waterBottles = (numBottles: number, numExchange: number): number => {
    let result = numBottles;
    let emptyBottles = numBottles;
    let newBottle = numBottles;
    while (emptyBottles >= numExchange) {
      //exchange
      newBottle = Math.floor(emptyBottles / numExchange);
      emptyBottles = Math.floor(emptyBottles % numExchange);

      //drink
      result += newBottle;
      emptyBottles += newBottle;
    }

    return result;
  };
  console.log(waterBottles(9, 3));
  console.log(waterBottles(15, 4));
};

main();
