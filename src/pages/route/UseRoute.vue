<template>
  <h4>라우터 네비게이션 사용</h4>
  <p class="text-body2" style="margin-bottom: 16px">
    라우터 네비게이션 사용: Vue 컴포넌트 내에서 $router와 $route 객체를 사용하여
    라우트 네비게이션을 수행합니다. template 내에서 사용할때는 script에
    선언되어있지 않아도 $route, $router로 사용이 가능합니다.
    <mark
      >script 영역에서 사용시 useRoute, useRouter로 인스턴스를 생성후 메소드를
      호출</mark
    >하여야 합니다.
  </p>
  <ul class="list">
    <li>$router.push()를 사용하여 다른 경로로 이동합니다.</li>
    <li>$route.params를 사용하여 동적 라우트 매개변수에 접근합니다.</li>
    <li>$route.query를 사용하여 쿼리 매개변수에 접근합니다.</li>
  </ul>
  <HighCode
    class="code"
    :codeValue="templateCode"
    theme="dark"
    lang="vue"
  ></HighCode>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
const templateCode = `//template 에서 사용시
  <template>
    <div @click="$router.push('/cart')">클릭 시 장바구니로 이동</div>
  </template>

//script에서 사용시
  <template>
    <div @click={'goCart'}>클릭 시 장바구니로 이동</div>
  </template>
  <script lang='ts' setup>
  const router = useRouter();
  const goCart = () => {
    void router.push('/cart');
  }
`;
</script>
