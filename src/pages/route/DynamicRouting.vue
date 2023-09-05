<template>
  <h4>라우터 설정 파일에서 동적 라우트 정의</h4>
  <HighCode
    class="code"
    :codeValue="dynamicRouteCode"
    theme="dark"
    lang="vue"
  ></HighCode>
  <h4>동적 라우트로 컴포넌트에 매개변수 전달</h4>
  <HighCode
    class="code"
    :codeValue="`this.$router.push({ name: 'UserProfile', params: { userId: '123' } });`"
    theme="dark"
    lang="javascript"
    style="height: 50px"
  ></HighCode>
  <h4>컴포넌트에서 params 받기</h4>
  <HighCode
    class="code"
    :codeValue="componentCode"
    theme="dark"
    lang="vue"
  ></HighCode>
  <h4>네비게이션 가드</h4>
  <HighCode
    class="code"
    :codeValue="navGuardCode"
    theme="dark"
    lang="vue"
  ></HighCode>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';

const componentCode = `//UserProfile.vue
<template>
  <div>
    <h1>User Profile</h1>
    <p>User ID: {{ userId }}</p>
  </div>
</template>

<script lang='ts' setup>
const route = useRoute();
const userId = route.query.userId;

`;
const dynamicRouteCode = `const routes = [
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: () => import('pages/UserProfile.vue'),
    props: true //동적 매개변수를 컴포넌트 프로퍼티로 전달
  },
  {
    path: '/cart/:userId?', //매개변수 뒤에 물음표를 붙이면 필수아님
    name: 'UserProfile',
    component: () => import('pages/UserProfile.vue'),
    props: true
  },
]
`;
const navGuardCode = `const router = createRouter({
//...
router.beforeEach((to, from, next) => {
  $q.loading.show(); //로딩 생성
  const isAuthenticated = checkAuthentication(); // 인증 확인 로직
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); //인증이 필요한 페이지로 이동
  } else {
    next(); // 계속 진행
  }
})

router.afterEach((to, from, next) => {
  $q.loading.hide(); //로딩 제거
})
//...
  `;
</script>
