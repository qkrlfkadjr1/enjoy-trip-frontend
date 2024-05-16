<script setup>
import { onMounted, ref } from "vue";
import { fetchAttractions } from "@/api/search.js";
import MaterialInput from "@/components/MaterialInput.vue";
import Layout from "@/layouts/sections/components/Layout.vue";
import setMaterialInput from "@/assets/js/material-input";
import { KakaoMap, KakaoMapCustomOverlay, KakaoMapMarker } from "vue3-kakao-maps";

const coordinate = {
  lat: 37.5012647456244,
  lng: 127.03958123605,
};

const width = ref("100%");
const attractions = ref([]);
const visibleMarkers = ref({});
const searchCriteria = ref({
  sidoCode: 0,
  contentTypeId: 0,
  keyword: "",
  latitude: coordinate.lat,
  longitude: coordinate.lng,
});

const searchAttractions = () => {
  fetchAttractions(
    searchCriteria.value,
    (response) => {
      attractions.value = response.data;
    },
    (error) => {
      console.error("Error fetching attractions:", error);
    }
  );
};

const toggleOverlay = (id) => {
  visibleMarkers.value[id] = !visibleMarkers.value[id];
};

onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <Layout title="관광지 정보 검색">
    <section class="page-section" id="tourinfo">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">여행 정보 검색하기</h2>
          <h3 class="section-subheading text-muted">
            원하시는 지역의 여행 정보를 선택해서 검색해보세요
          </h3>
          <form class="d-flex my-3 justify-content-center" @submit.prevent="searchAttractions">
            <select
              id="search-area"
              name="sidoCode"
              v-model="searchCriteria.sidoCode"
              class="form-select me-2"
            >
              <option value="0" selected>검색 할 지역 선택</option>
              <option value="1">서울</option>
              <option value="2">인천</option>
              <option value="3">대전</option>
              <option value="4">대구</option>
              <option value="5">광주</option>
              <option value="6">부산</option>
              <option value="7">울산</option>
              <option value="8">세종특별자치시</option>
              <option value="31">경기도</option>
              <option value="32">강원도</option>
              <option value="33">충청북도</option>
              <option value="34">충청남도</option>
              <option value="35">경상북도</option>
              <option value="36">경상남도</option>
              <option value="37">전라북도</option>
              <option value="38">전라남도</option>
              <option value="39">제주도</option>
            </select>

            <select
              id="search-content-id"
              name="contentTypeId"
              v-model="searchCriteria.contentTypeId"
              class="form-select me-2"
            >
              <option value="0" selected>관광지 유형</option>
              <option value="12">관광지</option>
              <option value="14">문화시설</option>
              <option value="15">축제공연행사</option>
              <option value="25">여행코스</option>
              <option value="28">레포츠</option>
              <option value="32">숙박</option>
              <option value="38">쇼핑</option>
              <option value="39">음식점</option>
            </select>

            <div class="row justify-space-between py-2 me-2">
              <div class="mx-auto">
                <MaterialInput
                  id="search-keyword"
                  class="input-group-dynamic"
                  :label="{ text: '검색어', class: 'form-label' }"
                  v-model="searchCriteria.keyword"
                  type="search"
                />
              </div>
            </div>

            <button class="w-auto my-auto col-1 btn btn-dark" id="btn-search" type="submit">
              검색
            </button>
          </form>
          <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :width="width">
            <KakaoMapMarker
              v-for="attraction in attractions"
              :key="attraction.contentId"
              :lat="attraction.latitude"
              :lng="attraction.longitude"
              :clickable="true"
              @onClickKakaoMapMarker="toggleOverlay(attraction.contentId)"
            />
            <KakaoMapCustomOverlay
              v-for="attraction in attractions"
              :key="attraction.contentId"
              :lat="attraction.latitude"
              :lng="attraction.longitude"
              :yAnchor="1.4"
              :visible="visibleMarkers[attraction.contentId] || false"
              :content="`
          <div style='padding: 10px; background-color: white; border: 1px solid #ccc; border-radius: 5px;'>
            <div style='font-weight: bold; margin-bottom: 5px'>${attraction.title}</div>
            <div style='display: flex'>
              <div style='margin-right: 10px'>
                <img src='${attraction.firstImage}' width='73' height='70' />
              </div>
              <div style='display: flex; flex-direction: column; align-items: flex-start'>
                <div style='overflow: hidden; text-overflow: ellipsis; white-space: nowrap'>${attraction.addr1}</div>
                <div style='overflow: hidden; text-overflow: ellipsis; white-space: nowrap'>${attraction.zipcode}</div>
                <div class='col-sm-3 col-6 ms-8'>
                  <!-- Button trigger modal -->
                  <MaterialButton
                    variant='gradient'
                    color='success'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    자세히 보기
                  </MaterialButton>
                </div>
              </div>
            </div>
          </div>
        `"
            />
          </KakaoMap>
        </div>
      </div>
    </section>
  </Layout>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <MaterialButton color="none" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </MaterialButton>
        </div>
        <div class="modal-body">
          Society has put up so many boundaries, so many limitations on what’s right and wrong that
          it’s almost impossible to get a pure thought out.
          <br /><br />
          It’s like a little kid, a little boy, looking at colors, and no one told him what colors
          are good, before somebody tells you you shouldn’t like pink because that’s for girls, or
          you’d instantly become a gay two-year-old.
        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton variant="gradient" color="dark" data-bs-dismiss="modal">
            Close
          </MaterialButton>
          <MaterialButton variant="gradient" color="success" class="mb-0">
            Save changes
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-menu {
  min-width: 100%;
}
</style>
