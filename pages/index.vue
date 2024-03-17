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
  <div class="min-h-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
      <div class="content-center flex items-center justify-center">
        <div class="px-4 sm:px-6 lg:px-8" style="width: 1200px">
          <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr>
                    <th scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Endpoint
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last
                      Status Change
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Error messages
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                  <tr v-for="(status, endpoint) in statusData">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 align-top">
                      {{ endpoint }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 align-top">
                        <span :class="'status-label status-' + status.status.status">
                        {{ status.status.status }}
                        </span>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 align-top">
                      <AtomicTimeAgo :timestamp="status.status._internal.status_since"></AtomicTimeAgo>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <ul v-if="status.errors">
                        <li v-for="error in status.errors">{{ error }}</li>
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
