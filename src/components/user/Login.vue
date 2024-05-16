<script setup>
import { onMounted, ref } from "vue";
import MaterialInput from "@/components/MaterialInput.vue";

//  material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
    setMaterialInput();
});
import Layout from "@/layouts/sections/components/Layout.vue";
</script>
<template>
    <Layout title="로그인">
        <div class="container">
            <div class="row">
                <div class="input-form col-md-8 mx-auto">
                    <h4 class="mb-3">로그인</h4>
                    <form class="needs-validation " method="post" action="" novalidate>
                        <input type="hidden" name="action" value="signin">
                        <div class="col-md-12">
                            <MaterialInput class="input-group-dynamic mb-4"
                                :label="{ text: '아이디', class: 'form-label' }" type="text" />
                        </div>
                        <div class="col-md-12">
                            <MaterialInput class="input-group-dynamic mb-4"
                                :label="{ text: '비밀번호', class: 'form-label' }" type="text" />
                        </div>
                        <div class="mb-4 d-grid">
                            <button class="btn btn-primary btn-lg" type="submit">로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>
