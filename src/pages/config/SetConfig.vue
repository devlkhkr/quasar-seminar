<template>
  <h4>quasar.config.js</h4>
  <ul class="list">
    <li>
      configure 생성 옵션에 주석해제 혹은 새로운 라인을 추가하여
      <mark>원하는 옵션을 추가</mark> 할 수 있습니다 ('material-icons-outlined'
      등).
    </li>
    <li>
      서버 실행 포트를 설정할 수 있습니다. 실행 시 process.env.PORT가 지정되어
      있으면 <mark>env가 우선</mark>입니다.
    </li>
    <li>
      framework의 plugins에 원하는 useQuasar로 사용하고자 하는 플러그인을 import
      해줍니다. (번들의 최소화를 위해 설정해둔 것 같습니다). 이곳에서 선언되지
      않은 quasar 플러그인은 useQuasar의 목록에 나오긴 하지만, 메소드 실행시
      에러가 발생합니다. (Loading, Notify, Dialog 등).
    </li>
    <li>각 화면의 컴포넌트 내에서 import하여 사용은 가능합니다.</li>
  </ul>

  <h4>package.json</h4>
  <p class="text-body2" style="margin-bottom: 16px">
    package.json에 각 플랫폼에 맞는 빌드 명령어를 선언해줍니다.
  </p>
  <HighCode
    class="code"
    :codeValue="packageJsonAddedCode"
    theme="dark"
    lang="terminal"
  ></HighCode>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
const packageJsonAddedCode = `
    "build:yarn": "yarn run build",
    "build:dev": "cross-env APP_ENV=dev quasar build --mode ssr",
    "build:stg": "cross-env APP_ENV=stg quasar build --mode ssr",
    "build:prd": "cross-env APP_ENV=production quasar build --mode ssr",
    "build:spa": "quasar build",
    "build:android": "quasar build --mode capacitor --target android --debug",
    "build:ios": "quasar build --mode capacitor --target ios",
    "build:electron": "quasar build --mode electron",`;
</script>
