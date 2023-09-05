<template>
  <h4>퀘이사 라우터의 구성</h4>
  <ul class="list">
    <li>
      먼저 프로젝트 내에 라우터 설정 파일을 생성합니다. 이 파일은
      src/router/index.ts로 위치하며, 라우터 구성 및 라우트를 정의하는 곳입니다
      (Quasar Cli로 설치시 기본적으로 설정 되어있습니다).
    </li>
    <li>
      routes.ts 파일도 기본적으로 생성되어 있으며, 라우팅 경로를 선언하는
      곳입니다. routes의 타입은 RouteRecordRaw[]이며, 필요한 프로퍼티는 path,
      component, children이며 children의 타입은 다시 RouteRecordRaw[]로
      반복됩니다.
    </li>
  </ul>
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
          path: '/test/page/index',
          component: () => import('src/layouts/test/TestMain.vue'),
        ]
      }
    ]
  }
]
`;
</script>
