import axios from 'axios';

const local = axios.create({
  baseURL: 'http://localhost'
});

function fetchAttractions(param, success, fail) {
  local.get(`/attractions`, { params: param }).then(success).catch(fail);
}

// function fetchAttractionDetails(attractionId, success, fail) {
//   local.get(`/attractions/${attractionId}`).then(success).catch(fail);
// }

// function registerAttraction(attraction, success, fail) {
//   console.log("registerAttraction", attraction);
//   local.post(`/attractions`, JSON.stringify(attraction)).then(success).catch(fail);
// }

// function updateAttraction(attraction, success, fail) {
//   local.patch(`/attractions/${attraction.id}`, JSON.stringify(attraction)).then(success).catch(fail);
// }

// function deleteAttraction(attractionId, success, fail) {
//   local.delete(`/attractions/${attractionId}`).then(success).catch(fail);
// }

export {
  fetchAttractions
  // fetchAttractionDetails,
  // registerAttraction,
  // updateAttraction,
  // deleteAttraction
};