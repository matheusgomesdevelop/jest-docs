export const sum = (num1: number, num2: number) => num1 + num2;

// Errors

export const errorMessage = "Deu um erro de exceção";

export const dispatchError = () => {
  throw new Error(errorMessage);
};

// Promises
export const fetchData = () => {
  return new Promise((resolve, reject) => {
    const data = "peanut butter";
    resolve(data);
  });
};
