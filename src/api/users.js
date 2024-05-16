import axios from "axios";

const local = axios.create({
  baseURL: "http://localhost/users",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

function signup(user, success, fail) {
  console.log(user.value);
  local.post(``, JSON.stringify(user.value)).then(success).catch(fail);
}

function login(user, success, fail) {
  console.log(user.value);
  local.post(`/login`, JSON.stringify(user.value)).then(success).catch(fail);
}

export {
  signup,
  login,
  // registerAttraction,
  // updateAttraction,
  // deleteAttraction
};
