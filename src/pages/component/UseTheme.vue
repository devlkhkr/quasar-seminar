<template>
  <div>
    <h4>컬러와 아이콘</h4>
    <p class="text-body2" style="margin-bottom: 16px">
      Quasar Docs의
      <a href="https://quasar.dev/style/color-palette" target="_blank"
        >Color Palette</a
      >에서 예약되어있는 컬러 리스트를 확인할 수 있습니다. 이는 모든 퀘이사
      서비스 내에서 동일하게 사용할 수 있습니다. (iconColor, textColor, bgColor
      등의 모든 attribute)
    </p>
    <p class="text-body2" style="margin-bottom: 16px">
      또한 Quasar Docs의
      <a href="https://quasar.dev/options/quasar-icon-sets" target="_blank"
        >Icon</a
      >에서 사용할 수 있는 아이콘 플러그인의 종류를 볼 수 있습니다. 이는 모든
      퀘이사 서비스 내에서 동일하게 사용할 수 있습니다.
    </p>
    <h4>브랜드 색상 설정</h4>
    <p class="text-body2" style="margin-bottom: 16px">
      quasar.config.js의 framework 내에서 key value 형태로 hex를 저장해둘 수
      있습니다.
    </p>
  </div>
  <HighCode
    class="code"
    :codeValue="brandColorCode"
    theme="dark"
    lang="javascript"
  ></HighCode>
  <h4>다크 테마 설정</h4>
  <p class="text-body2" style="margin-bottom: 16px">
    useQuasar의 dark.set으로 설정이 가능합니다.
  </p>
  <HighCode
    class="code"
    :codeValue="darkThemeCode"
    theme="dark"
    lang="javascript"
    style="height: 72px"
  ></HighCode>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
const darkThemeCode = `const $q = useQuasar();
$q.dark.set(true);`;
const brandColorCode = `framework: {
  iconSet: 'fontawesome-v5',
  cssAddon: true,
  all: 'auto',
  brand: {
    primary: '#2196F3',
    secondary: '#3F51B5',
    accent: '#9C27B0',
    dark: '#1D1D1D',
    positive: '#21BA45',
    negative: '#C10015',
    info: '#31CCEC',
    warning: '#F2C037'
  }
}`;
</script>
