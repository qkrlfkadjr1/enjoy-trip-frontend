import { createApp } from "vue";
import { createPinia } from "pinia";
import { useKakao } from "vue3-kakao-maps/@utils";
import App from "./App.vue";
import router from "./router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Nucleo Icons
// import "./assets/css/nucleo-icons.css";
// import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";
const kakaoKey = "cc55be812fc2664b3d00f77239a5e165";
useKakao(kakaoKey, ["clusterer", "services", "drawing"]);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
