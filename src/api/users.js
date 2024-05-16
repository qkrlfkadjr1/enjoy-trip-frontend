import axios from "axios";

const local = axios.create({
  baseURL: "http://localhost",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

function signup(user, success, fail) {
  console.log(user.value);
  local.post(`/users`, JSON.stringify(user.value)).then(success).catch(fail);
}

export {
  signup,
  // fetchAttractionDetails,
  // registerAttraction,
  // updateAttraction,
  // deleteAttraction
};
