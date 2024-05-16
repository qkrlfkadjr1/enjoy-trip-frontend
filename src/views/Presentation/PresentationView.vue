<script setup>
import { onMounted, onUnmounted } from "vue";


//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";


//토글
import PresentationExample from "./Sections/PresentationExample.vue";
import Posts from "@/views/LandingPages/Author/Sections/AuthorPosts.vue";

//images
import vueMkHeader from "@/assets/image/header-bg.jpg";
import vueMkHeader2 from "@/assets/img/dg1.jpg";
import vueMkHeader3 from "@/assets/img/dg2.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation, Parallax];
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    }" speed="2500" loop="true" slidesPerView="auto" loopedSlides="5" observer="true" observeParents="true"
      :modules="modules" class="mySwiper">
      <swiper-slide>
        <div class="page-header min-vh-75" :style="{ backgroundImage: `url(${vueMkHeader})` }" loading="lazy">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 text-center mx-auto position-relative">
                <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block ' }" freeMode:false>
                  Enjoy Trip!
                </h1>
                <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
                  홈페이지 소개 문구
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page-header min-vh-75" :style="{ backgroundImage: `url(${vueMkHeader2})` }" loading="lazy"></div>
      </swiper-slide><swiper-slide>
        <div class="page-header min-vh-75" :style="{ backgroundImage: `url(${vueMkHeader3})` }" loading="lazy"></div>
      </swiper-slide>
    </swiper>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n4 z-index-1">
    <Posts />
  </div>
  <DefaultFooter />
</template>
<style scope>
.swpier-wrapper {
  transition-timing-function: linear;
}
</style>
