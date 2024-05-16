<script setup>
import { onMounted } from "vue";
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
    setMaterialInput();
    const list = document.getElementsByClassName("default-info");
    const sidoCode = list[0].value;
    const gugunCode = list[1].value;

    // 함수로 묶어주기
    function fetchGugunData(selectedSido) {
        fetch(`http://localhost/address/getGugun/${selectedSido}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // 기존 데이터 삭제
                gugunSelect.innerHTML = "";

                const option = document.createElement("option");
                option.value = "";
                option.textContent = "구군선택";
                option.setAttribute("class", "default-info");
                option.setAttribute("selected", true);
                option.setAttribute("disabled", true);
                gugunSelect.appendChild(option);
                const now = document.getElementsByClassName("default-info");
                data.forEach(function (item) {
                    const option = document.createElement("option");
                    if (selectedSido === sidoCode && gugunCode === item.gugunCode) {
                        option.setAttribute("selected", true);
                    }
                    option.value = item.gugunCode;
                    option.textContent = item.gugunName;
                    gugunSelect.appendChild(option);
                });
            });
    }

    fetch(`http://localhost/address/getSido`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const selectElement = document.getElementById("sido");
            selectElement.textContent = "";
            // 받은 데이터를 반복하며 옵션을 추가합니다.
            if (sidoCode === "") {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "시도선택";
                option.setAttribute("class", "default-info");
                option.setAttribute("selected", true);
                option.setAttribute("disabled", true);
                selectElement.appendChild(option);
            }
            data.forEach((item) => {
                const option = document.createElement("option");
                if (sidoCode === item.sidoCode) {
                    option.setAttribute("selected", true);
                    // 시도 선택이 변경될 때마다 해당 함수 호출
                    fetchGugunData(item.sidoCode);
                }
                option.value = item.sidoCode;
                option.textContent = item.sidoName;
                selectElement.appendChild(option);
            });
        });

    // 시도 선택 select 요소
    const sidoSelect = document.getElementById("sido");
    // 구군 선택 select 요소
    const gugunSelect = document.getElementById("gugun");

    // 시도 선택이 변경될 때의 이벤트 핸들러
    sidoSelect.addEventListener("change", function () {
        const selectedSido = this.value; // 선택된 시도의 값 가져오기

        // 시도 선택값을 이용하여 해당하는 구군을 가져오기
        fetchGugunData(selectedSido);
    });
});
import Layout from "@/layouts/sections/components/Layout.vue";
import MaterialInput from "@/components/MaterialInput.vue";
</script>

<template>
    <Layout title="회원가입">
        <div class="container">
            <div class="input-form-backgroud row">
                <div class="input-form col-md-8 mx-auto">
                    <h4 class="mb-3">회원가입</h4>
                    <form class="needs-validation" method="post" action="" novalidate>
                        <input type="hidden" name="action" value="update" />
                        <div class="mb-3">
                            <MaterialInput class="input-group-dynamic mb-4" :label="{ text: '이름', class: 'form-label' }"
                                type="text" />
                            <div class="invalid-feedback">이름을 입력해주세요.</div>
                        </div>
                        <div class="mb-3">
                            <MaterialInput class="input-group-dynamic mb-4"
                                :label="{ text: '아이디', class: 'form-label' }" type="text" />
                            <div class="invalid-feedback">아이디를 입력해주세요.</div>
                        </div>
                        <div class="mb-3">
                            <MaterialInput class="input-group-dynamic mb-4"
                                :label="{ text: '비밀번호', class: 'form-label' }" type="text" />
                            <div class="invalid-feedback">비밀번호를 입력해주세요.</div>
                        </div>
                        <div class="mb-3">
                            <MaterialInput class="input-group-dynamic mb-4"
                                :label="{ text: '비밀번호 확인', class: 'form-label' }" type="text" />
                            <div class="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex">
                                    <MaterialInput class="input-group-dynamic mb-4"
                                        :label="{ text: '이메일', class: 'form-label' }" type="text" />
                                    <div class="pt-2 p-1">@</div>
                                    <MaterialInput class="input-group-dynamic mb-4"
                                        :label="{ text: '이메일 주소', class: 'form-label' }" type="text" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <label for="sido" class="form-label ps-1">주소</label>
                                <div class="input-group has-validation">
                                    <select class="form-select p-2" id="sido" name="sido-code" required>
                                        <option class="default-info" value="" disabled selected></option>
                                        <option class="default-info " value="" disabled selected>시도선택</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="gugun" class="form-label ps-1">구군</label>
                                <div class="input-group has-validation">
                                    <select class="form-select p-2" id="gugun" name="gugun-code" required>
                                        <option class="default-info" value="" disabled selected></option>
                                        <option class="default-info" value="" disabled selected>구군선택</option>
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
    </Layout>
</template>
<style scoped></style>