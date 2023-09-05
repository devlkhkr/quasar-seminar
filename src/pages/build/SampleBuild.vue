<template>
  <h4>프로젝트 빌드</h4>
  <p class="text-body2">
    빌드가 완료되면 dist/spa 디렉터리에 애플리케이션 빌드 결과물이 생성됩니다.
  </p>
  <HighCode
    class="code"
    :codeValue="`quasar build || yarn build`"
    theme="dark"
    lang="terminal"
    style="height: 50px"
  ></HighCode>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
</script>
