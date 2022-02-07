import axios from "axios";

function signUp(formData) {
  const promise = axios.post(
    `${process.env.REACT_APP_API}/auth/sign-up`,
    formData
  );
  return promise;
}
function login(formData) {
  const promise = axios.post(
    `${process.env.REACT_APP_API}/auth/login`,
    formData
  );
  return promise;
}

function addWithdraw(data, token) {
  const promise = axios.post(
    `${process.env.REACT_APP_API}/home/withdraw`,
    data,
    token
  );
  return promise;
}

function addDeposit(data, token) {
  const promise = axios.post(
    `${process.env.REACT_APP_API}/home/deposit`,
    data,
    token
  );
  return promise;
}

function getTransaction(token) {
  const promise = axios.get(`${process.env.REACT_APP_API}/home`, token);
  return promise;
}

export { signUp, login, addWithdraw, addDeposit, getTransaction };
