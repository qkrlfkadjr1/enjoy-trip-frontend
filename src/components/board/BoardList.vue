<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { listArticle } from "@/api/board.js";
import MaterialInput from "@/components/MaterialInput.vue";

// import VSelect from "@/components/common/VSelect.vue";
import BoardListItem from "@/components/board/item/BoardListItem.vue";
// import VPageNavigation from "@/components/common/VPageNavigation.vue";

const router = useRouter();

const selectOption = ref([
  { text: "검색조건", value: "" },
  { text: "글번호", value: "article_no" },
  { text: "제목", value: "subject" },
  { text: "작성자아이디", value: "user_id" },
]);

const articles = ref([]);
const currentPage = ref(1);
const totalPage = ref(0);
const { VITE_ARTICLE_LIST_SIZE } = import.meta.env;
const param = ref({
  pgno: currentPage.value,
  spp: VITE_ARTICLE_LIST_SIZE,
  key: "",
  word: "",
});

onMounted(() => {
  getArticleList();
});

const changeKey = (val) => {
  param.value.key = val;
};

const getArticleList = () => {
  listArticle(
    param.value,
    ({ data }) => {
      articles.value = data.articles;
      currentPage.value = data.currentPage;
      totalPage.value = data.totalPageCount;
    },
    (error) => {
      console.error(error);
    }
  );
};

const onPageChange = (val) => {
  currentPage.value = val;
  param.value.pgno = val;
  getArticleList();
};

const moveWrite = () => {
  router.push({ name: "article-write" });
};

import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <!-- <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글목록</mark>
        </h2> -->
        <h2 class="my-3 py-3 shadow-sm text-center">
          <div class="sky">글목록</div>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row align-self-center mb-2">
          <div class="col-md-2 text-start">
            <button type="button" class="btn btn-primary btn-sm" @click="moveWrite">글쓰기</button>
          </div>
          <div class="col-md-5 offset-5">
            <form class="d-flex">
              <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />
              <div class="input-group input-group-sm ms-1">
                <!-- <input
                  type="text"
                  class="form-control"
                  v-model="param.word"
                  placeholder="검색어..."
                /> -->
                <MaterialInput
                  class="input-group-dynamic form-control mb-2"
                  :label="{ text: '검색어', class: 'form-label' }"
                  v-model="param.word"
                  type="text"
                />
                <button class="btn btn-dark" type="button" @click="getArticleList">검색</button>
              </div>
            </form>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <th scope="row">3</th>
              <td class="text-start">
                <!-- <router-link
                  :to="{ name: 'article-view', params: { articleno: article.articleNo } }"
                  class="article-title link-dark"
                > -->
                3
                <!-- </router-link> -->
              </td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr class="text-center">
              <th scope="row">2</th>
              <td class="text-start">
                <!-- <router-link
                  :to="{ name: 'article-view', params: { articleno: article.articleNo } }"
                  class="article-title link-dark"
                > -->
                2
                <!-- </router-link> -->
              </td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr class="text-center">
              <th scope="row">1</th>
              <td class="text-start">
                <!-- <router-link
                  :to="{ name: 'article-view', params: { articleno: article.articleNo } }"
                  class="article-title link-dark"
                > -->
                1
                <!-- </router-link> -->
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <!-- <BoardListItem
              v-for="article in articles"
              :key="article.articleNo"
              :article="article"
            ></BoardListItem> -->
          </tbody>
        </table>
      </div>
      <VPageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      ></VPageNavigation>
    </div>
  </div>
</template>

<style scoped></style>
