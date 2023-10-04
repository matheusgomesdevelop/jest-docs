export const sum = (num1: number, num2: number) => num1 + num2;

export const errorMessage = "Deu um erro de exceção";
export const dispatchError = () => {
  throw new Error(errorMessage);
};
