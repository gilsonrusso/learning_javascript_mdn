const numbers: number[] = [1, 2, 3];

let arrPromises: Promise<string>[] = [];

const builderPromises = (arr: number[]) => {
  arr.forEach((element) => {
    arrPromises.push(
      new Promise((resolve, reject) => {
        resolve(`Promises ${element} Resolved`);
      })
    );
  });
};

export const AllPromises = () => {
  builderPromises(numbers);
  Promise.all([...arrPromises]).then((msgs) => console.log(msgs));
};
export const RacePromises = () => {
  builderPromises(numbers);
  Promise.race([...arrPromises]).then((msg) => console.log(msg));
};
