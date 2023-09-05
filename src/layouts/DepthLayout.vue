<template>
  <q-page class="q-pa-md">
    <div>
      <q-breadcrumbs gutter="sm">
        <q-breadcrumbs-el label="Home" icon="o_home" />
        <q-breadcrumbs-el :label="firstDepth" />
        <q-breadcrumbs-el v-if="secondDepth" :label="secondDepth" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
      <router-view />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const allRoutes = router.getRoutes();

const firstDepth = ref<string | undefined>('');
const secondDepth = ref<string | undefined>('');

onMounted(() => {
  setBreadcrumbs();
});

watch(
  () => route.path,
  () => {
    setBreadcrumbs();
  }
);

const setBreadcrumbs = () => {
  let tempFirstDepth = route.path.split('/')[1];
  let tempSecondDepth = route.path.split('/')[2];
  firstDepth.value = allRoutes
    .find((route) => route.path === `/${tempFirstDepth}/main`)
    ?.name?.toString();

  if (tempSecondDepth != 'main') {
    secondDepth.value = route.name?.toString();
  } else {
    secondDepth.value = undefined;
  }
};
</script>
