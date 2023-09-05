import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/end-of-seminar',
        component: () => import('pages/EndOfSeminar.vue'),
      },
      {
        path: '/intro',
        component: () => import('src/layouts/DepthLayout.vue'),
        children: [
          {
            path: '/intro/main',
            name: '퀘이사 프레임워크 소개 및 개요',
            component: () => import('src/pages/intro/MainPage.vue'),
          },
          {
            path: '/intro/about-quasar',
            name: '퀘이사 프레임워크란?',
            component: () => import('src/pages/intro/AboutQuasar.vue'),
          },
          {
            path: '/intro/why-quasar',
            name: '퀘이사를 사용하는 이유',
            component: () => import('src/pages/intro/WhyQuasar.vue'),
          },
          {
            path: '/intro/advantage',
            name: '퀘이사의 특징과 장단점',
            component: () => import('src/pages/intro/QuasarAdvantage.vue'),
          },
        ],
      },
      {
        path: '/config',
        component: () => import('src/layouts/DepthLayout.vue'),
        children: [
          {
            path: '/config/main',
            name: '설치 및 환경설정',
            component: () => import('src/pages/config/MainPage.vue'),
          },
          {
            path: '/config/install-project',
            name: '프로젝트 생성',
            component: () => import('src/pages/config/InstallProject.vue'),
          },
          {
            path: '/config/setting-arch',
            name: '기본 설정과 폴더 구조',
            component: () => import('src/pages/config/SetArch.vue'),
          },
          {
            path: '/config/setting-config',
            name: '개발 환경 설정',
            component: () => import('src/pages/config/SetConfig.vue'),
          },
        ],
      },
      {
        path: '/component',
        component: () => import('src/layouts/DepthLayout.vue'),
        children: [
          {
            path: '/component/main',
            name: '컴포넌트와 레이아웃',
            component: () => import('src/pages/component/MainPage.vue'),
          },
          {
            path: '/component/components',
            name: '퀘이사 주요 컴포넌트 소개',
            component: () => import('src/pages/component/UseComponent.vue'),
          },
          {
            path: '/component/layout',
            name: '레이아웃 디자인 및 사용',
            component: () => import('src/pages/component/UseLayout.vue'),
          },
          {
            path: '/component/theme',
            name: '테마 및 스타일링 커스터마이징',
            component: () => import('src/pages/component/UseTheme.vue'),
          },
          {
            path: '/component/custom',
            name: '사용자 정의 컴포넌트',
            component: () => import('src/pages/component/ComponentCustom.vue'),
          },
        ],
      },
      {
        path: '/route',
        component: () => import('src/layouts/DepthLayout.vue'),
        children: [
          {
            path: '/route/main',
            name: '라우팅과 네비게이션',
            component: () => import('src/pages/route/MainPage.vue'),
          },
          {
            path: '/route/composition',
            name: '라우터 구성',
            component: () => import('src/pages/route/RouteComposition.vue'),
          },
          {
            path: '/route/use-route',
            name: '라우터 사용',
            component: () => import('src/pages/route/UseRoute.vue'),
          },
          {
            path: '/route/dynamic-routing',
            name: '동적 라우팅과 네비게이션 가드',
            component: () => import('src/pages/route/DynamicRouting.vue'),
          },
        ],
      },
      {
        path: '/interaction',
        component: () => import('src/layouts/DepthLayout.vue'),
        children: [
          {
            path: '/interaction/main',
            name: '데이터 통신',
            component: () => import('src/pages/interaction/MainPage.vue'),
          },
          {
            path: '/interaction/use-api',
            name: 'API 데이터 컴포넌트 적용',
            component: () => import('src/pages/interaction/UseApi.vue'),
          },
          {
            path: '/interaction/component-to-component',
            name: '컴포넌트 간 통신',
            component: () => import('src/pages/interaction/CmpntToCmpnt.vue'),
          },
        ],
      },
      {
        path: '/store',
        component: () => import('src/layouts/DepthLayout.vue'),
        children: [
          {
            path: '/store/main',
            name: '상태 관리',
            component: () => import('src/pages/store/MainPage.vue'),
          },
          {
            path: '/store/necessity',
            name: '상태 관리의 필요성',
            component: () => import('src/pages/store/StoreNecessity.vue'),
          },
          {
            path: '/store/pinia',
            name: 'Pinia를 사용한 상태 관리',
            component: () => import('src/pages/store/PiniaStore.vue'),
          },
        ],
      },
      {
        path: '/build',
        component: () => import('src/layouts/DepthLayout.vue'),
        children: [
          {
            path: '/build/main',
            name: '빌드와 배포',
            component: () => import('src/pages/build/MainPage.vue'),
          },
          {
            path: '/build/sample-build',
            name: '간단한 프로젝트 빌드',
            component: () => import('src/pages/build/SampleBuild.vue'),
          },
          {
            path: '/build/practical-example',
            name: '실전 예제와 데모 애플리케이션 소개',
            component: () => import('src/pages/build/practicalExample.vue'),
          },
        ],
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
