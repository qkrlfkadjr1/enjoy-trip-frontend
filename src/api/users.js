import axios from "axios";

const local = axios.create({
  baseURL: "http://localhost/users",
});

function signup(user, success, fail) {
  local.post(``, JSON.stringify(user)).then(success).catch(fail);
}

export {
  signup,
  // fetchAttractionDetails,
  // registerAttraction,
  // updateAttraction,
  // deleteAttraction
};
