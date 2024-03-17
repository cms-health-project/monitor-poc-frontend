<script lang="js" setup>

import {useApi} from "~/composables/useApi.js";
import {setInterval} from "#app/compat/interval.js";

definePageMeta({
  layout: 'default'
})

const statusData = ref(await useApi().getHealthStatus())

onMounted(() => {
  setInterval(async () => {
    statusData.value = await useApi().getHealthStatus()
  }, 10000)
})

</script>

<template>

  Hackathon

</template>

<style>
.status-label {
  @apply rounded;
  @apply p-2;
}

.status-fail {
  @apply bg-red-500;
  @apply text-white;
}

.status-pass {
  @apply bg-green-500;
  @apply text-white;
}
</style>
