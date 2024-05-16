import axios from "axios";

const local = axios.create({
  baseURL: "http://localhost/address",
});

function getSido(success, fail) {
  local.get(`/getSido`).then(success).catch(fail);
}

function getGugun(sidoCode, success, fail) {
  local.get(`/getGugun/${sidoCode}`).then(success).catch(fail);
}

export {
  getSido,
  getGugun,
  // fetchAttractionDetails,
  // registerAttraction,
  // updateAttraction,
  // deleteAttraction
};
