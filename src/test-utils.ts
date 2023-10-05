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

// Initialize city databases
export const initializeCityDatabase = () => {
  const CITY_DATABASE = ["São vicente", "Praia Grande", "Santos", "Guarujá"];

  return CITY_DATABASE;
};

export const isCity = (cityList: Array<string>, name: string) => {
  return cityList.includes(name);
};
