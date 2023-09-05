<template>
  <h4>레이아웃을 나누는데 주로 사용되는 컴포넌트</h4>
  <p class="text-body2">
    레이아웃을 나누는데 주로 사용되는 컴포넌트는 q-header, q-drawer, q-page 등이
    있습니다. 혹은 div에 col-n 클래스로 화면의 레이아웃을 구성할 수도 있습니다.
  </p>
  <h4>화면별 레이아웃 분기</h4>
  <p class="text-body2" style="margin-bottom: 16px">
    화면별 상세 레이아웃은 routes.ts에서 라우트를 작성할 때 설정할 수 있습니다.
    <mark>children으로 들어는 화면 컴포넌트는 부모 라우트의 layout</mark>을
    따라가게 됩니다. (예: MainLayout의 router-view는 또 다음 선언된 layout으로
    적용 됩니다.)
  </p>
  <HighCode
    class="code"
    :codeValue="layoutCode"
    theme="dark"
    lang="typescript"
  ></HighCode>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
const layoutCode = `const routes: RouteRecordRaw[] = [
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/test/page',
        component: () => import('src/layouts/TestLayout.vue'),
        children: [
          ...
        ]
      }
    ]
  }
]
`;
</script>
