<script setup>
import { ref, onMounted, watch } from "vue";
import { signup } from "@/api/users.js";
import { getSido, getGugun } from "@/api/sido-gugun.js";

import MaterialInput from "@/components/MaterialInput.vue";

//  material-input
import setMaterialInput from "@/assets/js/material-input";

const sidos = ref([]);
const selectSido = ref("");
const selectGugun = ref("");
const guguns = ref([]);
const user = ref({
  userId: "",
  userName: "",
  userPassword: "",
  emailId: "",
  emailDomain: "",
  sidoCode: "",
  gugunCode: "",
});

onMounted(() => {
  console.log(user.sidoCode);
  setMaterialInput();
  getSido(
    (response) => {
      sidos.value = response.data;
    },
    (error) => {
      console.error("Error fetching attractions:", error);
    }
  );
});

watch(user.sidoCode, () => {
  getGugun(
    selectSido.value,
    (response) => {
      guguns.value = response.data;
    },
    (error) => {
      console.error("문제 있다.", error);
    }
  );
});
</script>

<template>
  <!-- Main Content -->
  <!-- <div>qweqweqwe {{ user }}</div> -->
  <div class="col-md-9">
    <div class="input-form-backgroud row">
      <div class="input-form col-md-8 mx-auto">
        <h4 class="mb-3">회원수정</h4>
        <form class="needs-validation" method="post" action="" novalidate>
          <input type="hidden" name="action" value="update" />
          <div class="mb-3">
            <MaterialInput
              v-model="user.userName"
              class="input-group-dynamic mb-5"
              :label="{ text: '이름', class: 'form-label' }"
              type="text"
            />
            <div class="invalid-feedback">이름을 입력해주세요.</div>
          </div>
          <div class="mb-3">
            <MaterialInput
              class="input-group-dynamic mb-4 is-filled"
              :label="{ text: '아이디', class: 'form-label' }"
              placeholder="ssafy"
              type="text"
              isDisabled
              v-model="user.userId"
            />
            <div class="invalid-feedback">아이디를 입력해주세요.</div>
          </div>
          <div class="mb-3">
            <MaterialInput
              class="input-group-dynamic mb-4"
              :label="{ text: '비밀번호', class: 'form-label' }"
              type="password"
              v-model="user.userPassword"
            />
            <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
          </div>
          <div class="mb-3">
            <MaterialInput
              class="input-group-dynamic mb-4"
              :label="{ text: '비밀번호 확인', class: 'form-label' }"
              type="text"
            />
            <div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex">
                <MaterialInput
                  class="input-group-dynamic mb-4"
                  :label="{ text: '이메일', class: 'form-label' }"
                  type="text"
                  v-model="user.emailId"
                />
                <div class="pt-2 p-1">@</div>
                <MaterialInput
                  class="input-group-dynamic mb-4"
                  :label="{ text: '이메일 주소', class: 'form-label' }"
                  type="text"
                  v-model="user.emailDomain"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="sido" class="form-label ps-1">주소</label>
              <div class="has-validation">
                <select
                  class="form-select p-2"
                  id="sido"
                  name="sido-code"
                  v-model="user.sidoCode"
                  required
                >
                  <option value="" disabled selected>시도선택</option>
                  <option v-for="sido in sidos" :key="sido.sidoCode" :value="sido.sidoCode">
                    {{ sido.sidoName }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <label for="gugun" class="form-label ps-1">구군</label>
              <div class="has-validation">
                <select
                  class="form-select p-2"
                  id="gugun"
                  name="gugun-code"
                  required
                  v-model="user.gugunCode"
                >
                  <option value="" disabled selected>구군선택</option>
                  <option v-for="gugun in guguns" :key="gugun.gugunCode" :value="gugun.gugunCode">
                    {{ gugun.gugunName }}
                  </option>
                </select>
                <div class="invalid-feedback">주소를 입력해주세요</div>
              </div>
            </div>
          </div>

          <hr class="mb-4" />
          <div class="mb-4 d-grid">
            <button class="btn btn-primary btn-lg" type="submit">수정 하기</button>
            <button class="btn btn-primary btn-lg mt-3" onclick="location.href=''">
              탈퇴 하기
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @import "@/assets/css/user/member.css"; */
</style>
