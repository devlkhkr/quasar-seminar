<template>
  <h4>퀘이사 컴포넌트를 조합하여 컴포넌트를 생성</h4>
  <HighCode
    class="code"
    :codeValue="sampleCode"
    theme="dark"
    lang="vue"
  ></HighCode>
  <h4>결과물</h4>
  <div class="q-gutter-md">
    <q-checkbox
      v-model="isChecked"
      :label="isChecked ? 'checked' : 'unChecked'"
    />
    <q-btn
      color="primary"
      @click="
        () => {
          isChecked = !isChecked;
        }
      "
      >Check</q-btn
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
const isChecked = ref(false);
const sampleCode = `<template>
  <div class="q-gutter-md">
    <q-checkbox
      v-model="isChecked"
      :label="isChecked ? 'checked' : 'unChecked'"
    />
    <q-btn color="primary" @click="() => {isChecked = !isChecked}">Check</q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isChecked = ref(false);
...
`;
</script>
