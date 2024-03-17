<template>
  <div>
    <h2 class="text-sm font-medium text-gray-500">Monitored Assets</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <template v-for="(healthCheck, endpoint) in healthChecks">
        <LayoutResultBoxElement :healthCheck="healthCheck" :endpoint="endpoint"/>
      </template>
    </ul>
  </div>
</template>

<script setup>

defineProps({
  healthChecks: {
    type: Object,
    required: true
  }
})

</script>
