"use strict";(globalThis["webpackChunkquasar"]=globalThis["webpackChunkquasar"]||[]).push([[86],{5086:(t,e,a)=>{a.r(e),a.d(e,{default:()=>b});var n=a(9835),o=a(499),s=a(1052);const r=(0,n._)("h4",null,"레이아웃을 나누는데 주로 사용되는 컴포넌트",-1),u=(0,n._)("p",{class:"text-body2"}," 레이아웃을 나누는데 주로 사용되는 컴포넌트는 q-header, q-drawer, q-page 등이 있습니다. 혹은 div에 col-n 클래스로 화면의 레이아웃을 구성할 수도 있습니다. ",-1),l=(0,n._)("h4",null,"화면별 레이아웃 분기",-1),c=(0,n._)("p",{class:"text-body2",style:{"margin-bottom":"16px"}},[(0,n.Uk)(" 화면별 상세 레이아웃은 routes.ts에서 라우트를 작성할 때 설정할 수 있습니다. "),(0,n._)("mark",null,"children으로 들어는 화면 컴포넌트는 부모 라우트의 layout"),(0,n.Uk)("을 따라가게 됩니다. (예: MainLayout의 router-view는 또 다음 선언된 layout으로 적용 됩니다.) ")],-1),p="const routes: RouteRecordRaw[] = [\n  {\n    path: '/test',\n    component: () => import('layouts/MainLayout.vue'),\n    children: [\n      {\n        path: '/test/page',\n        component: () => import('src/layouts/TestLayout.vue'),\n        children: [\n          ...\n        ]\n      }\n    ]\n  }\n]\n",d=(0,n.aZ)({__name:"UseLayout",setup(t){return(t,e)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[r,u,l,c,(0,n.Wm)((0,o.SU)(s.t),{class:"code",codeValue:p,theme:"dark",lang:"typescript"})],64))}});var i=a(6602),h=a(3655),y=a(9885),m=a(9984),g=a.n(m);const k=d,b=k;g()(d,"components",{QHeader:i.Z,QDrawer:h.Z,QPage:y.Z})}}]);