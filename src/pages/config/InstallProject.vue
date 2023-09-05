<template>
  <div>
    <h4>Quasar Cli 설치</h4>
    <div class="code_wrap">
      <p class="text-body2">npm</p>
      <HighCode
        class="code"
        codeValue="npm init quasar"
        theme="dark"
        lang="terminal"
        style="height: 50px"
      ></HighCode>
    </div>
    <div class="code_wrap">
      <p class="text-body2">Yarn</p>
      <HighCode
        class="code"
        codeValue="yarn create quasar"
        theme="dark"
        lang="terminal"
        style="height: 50px"
      ></HighCode>
    </div>
    <p class="text-body2" :style="'margin-top: 24px'">
      "yarn create quasar" 또는 "npm init quasar" 가 실행될 때, 몇 가지 옵션이
      포함된 메시지가 표시됩니다. 사용자는 이러한 옵션을 선택할 수 있으며, "CLI
      유형" (Vite 또는 Webpack)을 선택하거나 TypeScript 지원, eslint와 같은 다른
      설정을 추가할 수 있습니다. 옵션에 대한 명확한 이해가 없는 경우, 기본값을
      선택하고(Enter 키를 누름) 계속 진행할 수 있습니다. 필요한 경우 나중에 CLI
      유형을 제외한 옵션을 변경할 수 있습니다.
    </p>
  </div>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
</script>
