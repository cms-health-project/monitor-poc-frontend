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
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <p class="text-base font-semibold leading-7 text-indigo-600">Hackathon 2024</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">CMS Health Check</h1>
        <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none">
          <div>
            <p>We are the team behind CFHackthon2024's exciting project CMS Health Check. We have developed a system that helps agnecies and individuals maintain their CMS applications by keeping an eye on the uptime. </p>
          </div>
        </div>
        <!-- <div class="mt-10 flex">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
        </div> -->
      </div>
    </div>
    <div class="relative overflow-hidden pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <img class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" src="../public/images/cms-health-team.jpg" alt="Hackathon CMS Health Team" />
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
        </div>
      </div>
    </div>
  </div>
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
