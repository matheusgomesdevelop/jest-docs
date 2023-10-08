import axios from "axios";

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

// Usando uma função de simulação

export const util_callback = (x: number) => 42 + x;
export function forEach(items: Array<number>, callback: (x: number) => void) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

// Users
export const users = async () => {
    const users = await axios.get("http://localhost:3000/users.json");

    return users.data;
};
