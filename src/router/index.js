import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";

import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
import AttractionSearch from "../components/attraction/Search.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import BoardView from "@/views/BoardView.vue";

//user
import Login from "@/components/user/Login.vue";
import Signup from "@/components/user/Signup.vue";
import Mypage from "@/components/user/Mypage.vue";
import User from "@/views/users/User.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },

    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/attractions/search",
      name: "attractions-search",
      component: AttractionSearch,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },

    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/boards",
      name: "boards",
      component: BoardView,
      redirect: { name: "boards-list" },
      children: [
        {
          path: "list",
          name: "boards-list",
          component: () => import("@/components/board/BoardList.vue"),
        },
      ],
    },

    {
      path: "/users/login",
      name: "users-login",
      component: Login,
    },
    {
      path: "/users/signup",
      name: "users-signup",
      component: Signup,
    },
    {
      path: "/users",
      name: "users",
      component: User,
      redirect: { name: "users-mypage" },
      children: [
        {
          path: "mypage",
          name: "users-mypage",
          component: Mypage,
        },
        {
          path: "list",
          name: "article-list",
          component: () => import("@/components/board/BoardList.vue"),
        },
      ],
    },
  ],
});

export default router;
