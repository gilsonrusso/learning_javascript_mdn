const status: string = "triste";

const handleStatus = new Promise((resolve, reject) => {
  switch (status) {
    case "feliz":
      resolve("O cão está feliz!");
      break;
    default:
      reject("O cão está triste!");
      break;
  }
});

export const PromisesVsCallback = () => {
  handleStatus
    .then((result) => {
      console.log(`:::: Status: ${result}`);
    })
    .catch((erro) => {
      console.log(`:::: Status: ${erro}`);
    });
};
