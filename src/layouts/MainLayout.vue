<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $route.name }}
        </q-toolbar-title>
        <div>
          <q-toggle
            v-model="darkMode"
            color="grey-9"
            label="다크 모드"
            left-label
            :icon="darkMode ? 'o_dark_mode' : 'o_light_mode'"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="360">
      <div>
        <div class="q-pa-md">
          <q-tree
            :nodes="Links"
            node-key="path"
            v-model:selected="selectedMenu"
            text-color="grey-7"
            selected-color="primary"
            color="grey-5"
            no-connectors
            default-expand-all
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { Links } from '../router/links';

const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const selectedMenu = ref(route.path || '/');
const darkMode = ref(false);
watch(darkMode, (newValue, oldValue) => {
  $q.dark.set(newValue);
});

watch(selectedMenu, (newValue, oldValue) => {
  if (newValue) {
    router.push(newValue);
  } else {
    selectedMenu.value = oldValue;
  }
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<script></script>
