<script setup>
import Layout from "@/layouts/sections/components/Layout.vue";
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <Layout title="마이페이지">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="height: 100vh;">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span class="fs-4">마이페이지</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'users-mypage' }">회원수정</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'article-list' }">회원수정</RouterLink>
              </li>
              <li>
                <a href="#" class="nav-link">
                  좋아요한 관광지
                </a>
              </li>
              <!-- Add more sidebar links here -->
            </ul>
            <hr />
            <!-- User Profile Dropdown -->
            <div class="dropdown">
              <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                <strong>mdo</strong>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <!-- <li>
                  <hr class="dropdown-divider" />
                </li> -->
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>

  </Layout>
</template>

<style scoped></style>