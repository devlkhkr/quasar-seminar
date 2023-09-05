<template>
  <h4>API 호출 후 컴포넌트에 데이터 전달</h4>
  <HighCode
    class="code"
    :codeValue="apiDate"
    theme="dark"
    lang="terminal"
  ></HighCode>
  <h4>결과물</h4>
  <q-table :rows="tableData" style="margin: 16px 0"></q-table>
  <q-btn color="primary" @click="fetchData">Fetch Data</q-btn>
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
import axios from 'axios';
import { ref } from 'vue';

const tableData = ref();
const fetchData = () => {
  axios.get('https://reqres.in/api/users?page=1', {}).then((result) => {
    tableData.value = result.data.data;
  });
};

const apiDate = `<template>
  <h4>API 호출 후 컴포넌트에 데이터 전달</h4>
  <q-table :rows="tableData" style="margin: 16px 0"></q-table>
  <q-btn color="primary" @click="fetchData">Fetch Data</q-btn>
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
import axios from 'axios';
import { ref } from 'vue';

const tableData = ref();
const fetchData = () => {
  axios.get('https://reqres.in/api/users?page=1', {}).then((result) => {
    tableData.value = result.data.data;
  });
};
`;
</script>
