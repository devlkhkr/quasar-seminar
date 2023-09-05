<template>
  <h4>스토어 생성 및 설정</h4>
  <div>
    <HighCode
      class="code"
      :codeValue="createStoreCode"
      theme="dark"
      lang="javascript"
    ></HighCode>
  </div>
  <h4>스토어 데이터 및 함수 호출</h4>
  <div>
    <HighCode
      class="code"
      :codeValue="storeCode"
      theme="dark"
      lang="vue"
    ></HighCode>
  </div>
  <h4>결과물</h4>
  <div class="text-body-wrap">
    <div>userId: {{ store.userId }}</div>
    <div>userName: {{ store.userName }}</div>
    <div>userReviewCount: {{ store.userReviewCount }}</div>
    <div>getUserScore: {{ store.getUserScore }}</div>
  </div>
  <q-btn
    @click="store.increaseUserReviewCount"
    color="primary"
    style="margin-top: 16px"
    >increase score</q-btn
  >
</template>
<script lang="ts" setup>
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
import { serviceStore } from '../../stores/service';

const store = serviceStore();
const createStoreCode = `import { defineStore } from 'pinia';
export const serviceStore = defineStore('service', {
  state: () => ({
    userId: 'id0001',
    userName: 'leekanghyoung',
    userReviewCount: 20,
  }),
  getters: {
    getUserScore: (state) => state.userReviewCount * 100,
  },
  actions: {
    increaseUserReviewCount() {
      this.userReviewCount++;
    },
  },
});
`;
const storeCode = `<template>
  <div class="text-body-wrap">
    <div>userId: {{ store.userId }}</div>
    <div>userName: {{ store.userName }}</div>
    <div>userReviewCount: {{ store.userReviewCount }}</div>
    <div>getUserScore: {{ store.getUserScore }}</div>
  </div>
  <q-btn
    @click="store.increaseUserReviewCount"
    color="primary"
    style="margin-top: 16px"
    >increase score</q-btn
  >
</template>
<script lang="ts" setup>
import { serviceStore } from '../../stores/service';

const store = serviceStore();

`;
</script>
