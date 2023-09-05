<template>
  <h4>Props를 사용한 부모에서 자식으로 데이터 전달</h4>
  <p class="text-body2">
    부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하려면 props를 사용합니다.
  </p>
  <HighCode
    class="code"
    :codeValue="parentCmpCode"
    theme="dark"
    lang="vue"
  ></HighCode>
  <p class="text-body2">자식 컴포넌트에서는 props로 데이터를 수신합니다.</p>
  <HighCode
    class="code"
    :codeValue="childCmpCode"
    theme="dark"
    lang="vue"
  ></HighCode>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
const parentCmpCode = `<!-- ParentComponent.vue -->
<template>
  <div>
    <child-component :message="messageFromParent" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 자식 컴포넌트로 전달할 데이터
const messageFromParent = ref('안녕, 자식 컴포넌트!');
`;
const childCmpCode = `<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';

// props로 받은 데이터 정의
const props = defineProps({
  message: {
    type: String as PropType<string>,
    required: true
  }
});
`;
</script>
