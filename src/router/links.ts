export const Links = [
  {
    label: 'HOME : <Seminar for Quasar>',
    icon: 'o_home',
    path: '/',
  },
  {
    label: '퀘이사 프레임워크 소개 및 개요',
    icon: 'o_school',
    path: '/intro/main',
    children: [
      {
        label: '퀘이사 프레임워크란?',
        icon: 'o_help_outline',
        path: '/intro/about-quasar',
      },
      {
        label: '퀘이사의 특징과 장단점',
        icon: 'o_thumbs_up_down',
        path: '/intro/advantage',
      },
      {
        label: '퀘이사를 사용하는 이유',
        icon: 'o_lightbulb',
        path: '/intro/why-quasar',
      },
    ],
  },
  {
    label: '설치 및 환경설정',
    icon: 'o_settings',
    path: '/config/main',
    children: [
      {
        label: '프로젝트 생성',
        icon: 'o_add_circle_outline',
        path: '/config/install-project',
      },
      {
        label: '기본 설정과 폴더 구조',
        icon: 'o_snippet_folder',
        path: '/config/setting-arch',
      },
      {
        label: '개발 환경 설정',
        icon: 'o_tune',
        path: '/config/setting-config',
      },
    ],
  },
  {
    label: '컴포넌트와 레이아웃',
    icon: 'o_brush',
    path: '/component/main',
    children: [
      {
        label: '퀘이사 주요 컴포넌트 소개',
        icon: 'o_category',
        path: '/component/components',
      },
      {
        label: '레이아웃 디자인 및 사용',
        icon: 'o_dashboard',
        path: '/component/layout',
      },
      {
        label: '테마 커스터마이징',
        icon: 'o_palette',
        path: '/component/theme',
      },
      {
        label: '사용자 정의 컴포넌트',
        icon: 'o_auto_fix_high',
        path: '/component/custom',
      },
    ],
  },
  {
    label: '라우팅과 네비게이션',
    icon: 'o_directions',
    path: '/route/main',
    children: [
      {
        label: '라우터 구성',
        icon: 'o_route',
        path: '/route/composition',
      },
      {
        label: '라우터 사용',
        icon: 'o_link',
        path: '/route/use-route',
      },
      {
        label: '동적 라우팅과 네비게이션 가드',
        icon: 'o_alt_route',
        path: '/route/dynamic-routing',
      },
    ],
  },
  {
    label: '데이터 통신',
    icon: 'o_router',
    path: '/interaction/main',
    children: [
      {
        label: 'API 데이터 컴포넌트 적용',
        icon: 'o_insert_chart',
        path: '/interaction/use-api',
      },
      {
        label: '컴포넌트 간 통신',
        icon: 'o_account_tree',
        path: '/interaction/component-to-component',
      },
    ],
  },
  {
    label: '상태 관리',
    icon: 'o_storefront',
    path: '/store/main',
    children: [
      {
        label: '상태 관리의 필요성',
        icon: 'o_hub',
        path: '/store/necessity',
      },
      {
        label: 'Pinia를 사용한 상태 관리',
        icon: 'o_grass',
        path: '/store/pinia',
      },
    ],
  },
  {
    label: '빌드와 배포',
    icon: 'o_business',
    path: '/build/main',
    children: [
      {
        label: '간단한 프로젝트 빌드',
        icon: 'o_hardware',
        path: '/build/sample-build',
      },
      {
        label: '실전 예제와 데모 애플리케이션 소개',
        icon: 'o_view_in_ar',
        path: '/build/practical-example',
      },
    ],
  },
  {
    label: '세미나를 마무리하며',
    icon: 'o_cast_for_education',
    path: '/end-of-seminar',
  },
];
