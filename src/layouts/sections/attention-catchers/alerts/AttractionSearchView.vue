<script setup>
import { onMounted, ref } from "vue";
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import Layout from "../../components/Layout.vue";
const coordinate = {
  lat: 37.5012647456244,
  lng: 127.03958123605,
};
const width = ref("100%");
onMounted(() => {});
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
          <form class="d-flex my-3" id="searchForm">
            <select id="search-area" class="form-select me-2">
              <option value="0" selected>검색 할 지역 선택</option>
            </select>
            <select id="search-content-id" class="form-select me-2">
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
            <input
              id="search-keyword"
              class="form-control me-2"
              type="search"
              placeholder="검색어"
              aria-label="검색어"
            />
            <button id="btn-search" class="btn btn-outline-success" type="submit">검색</button>
          </form>
          <!-- kakao map start -->
          <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true" :width="width">
            <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
          </KakaoMap>
          <!-- <div id="map" class="mt-3" style="width: 100%; height: 400px"></div>
          <div class="row">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>대표이미지</th>
                  <th>관광지명</th>
                  <th>주소</th>
                  <th>위도</th>
                  <th>경도</th>
                </tr>
              </thead>
              <tbody id="attraction-list">
              </tbody>
            </table>
          </div> -->
        </div>
      </div>
    </section>
  </Layout>
</template>
