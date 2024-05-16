<script setup>
import { onMounted, ref } from "vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import Layout from "@/layouts/sections/components/Layout.vue";
const coordinate = {
  lat: 37.5012647456244,
  lng: 127.03958123605,
};

import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <Layout>
    <RouterView></RouterView>
  </Layout>
</template>

<style scoped></style>
