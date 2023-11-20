export const SimplePromises = () => {
  const builderPromises = new Promise((resolve, reject) => {
    let soma = 1 + 3;
    soma === 4 ? resolve("All right") : reject("Bad");
  });

  builderPromises
    .then((res) => {
      console.log(`than value: ${res}`);
    })
    .catch((err) => {
      console.error(`catch value: ${err}`);
    })
    .finally(() => {
      console.log("I always be here!");
    });

  console.log("print before promise");
};
