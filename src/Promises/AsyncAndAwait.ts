const numbers: number[] = [1, 2, 3];

let arrPromises: Promise<string>[] = [];

const builderPromises = (arr: number[]) => {
  arr.forEach((element, index) => {
    arrPromises.push(
      new Promise((resolve, reject) => {
        setTimeout(
          () =>
            index !== 2
              ? resolve(`Promises ${element} Resolved`)
              : reject(`Promises ${element} Reject`),
          element * 1000
        );
      })
    );
  });
};

const resolvePromisesFn = async () => {
  const [one, two, three] = arrPromises;

  try {
    console.log(":::: started");
    const resultOne = await one;
    console.log(":::: hey");
    const resultTwo = await two;
    console.log(":::: again");
    const resultThree = await three;
    console.log(":::: finished");

    console.log({
      resultOne: resultOne,
      resultTwo: resultTwo,
      resultThree: resultThree,
    });
  } catch (error) {
    console.log("::::", { error });
  }
};

export const SyncPromises = () => {
  builderPromises(numbers);
  resolvePromisesFn();
};
