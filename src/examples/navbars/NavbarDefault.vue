<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3': props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="props.transparent || props.light || props.dark ? 'container' : 'container-fluid px-0'"
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        <img
          class="navbar-brand d-block ms-2 img-fluid"
          src="@/assets/image/navbar-logo.png"
          alt="Navbar Logo"
          style="max-width: 150px"
        />
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="props.transparent || props.dark ? 'text-white' : 'font-weight-bolder ms-sm-3'"
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        <img
          class="navbar-brand d-block ms-2 img-fluid"
          src="@/assets/image/navbar-logo.png"
          alt="Navbar Logo"
          style="max-width: 150px"
        />
      </RouterLink>
      <div class="nav-item mx-2">
        <button class="btn btn-sm btn-primary mb-0 mx-1 d-lg-none">로그인</button>
        <button class="btn btn-sm btn-primary mb-0 mx-1 d-lg-none">회원가입</button>
        <button
          class="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
      </div>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item mx-2">
            <router-link
              :to="{ name: 'attractions-search' }"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">view_day</i>
              검색
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link
              :to="{ name: 'boards' }"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              aria-expanded="false"
            >
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
              게시판
            </router-link>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            ></div>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">article</i>
              여행 코스
            </a>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-grid d-none">
          <li class="nav-item">
            <router-link :to="{ name: 'users-login' }" aria-expanded="false">
              <button class="btn btn-m btn-primary mb-0 mx-2">로그인</button>
            </router-link>
            <router-link :to="{ name: 'users-signup' }" aria-expanded="false">
              <button class="btn btn-m btn-primary mb-0 me-4">회원가입</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
