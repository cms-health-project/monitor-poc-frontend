<template>
  <li class="col-span-1 flex rounded-md shadow-sm">
    <div :class="'status-' + healthCheck.status.status"
         class="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white">
      {{ healthCheck.status.status }}
    </div>
    <div
        class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
      <div class="flex-1 truncate px-4 py-2 text-sm">
        <span class="font-medium text-gray-900 hover:text-gray-600">{{ endpoint }}</span>
        <p class="text-gray-500 whitespace-normal">
          <ul v-if="healthCheck.errors.length > 0" class="list-disc ml-4 mt-4 mb-4">
            <li v-for="error in healthCheck.errors">
              {{ error }}
            </li>
          </ul>
        </p>
      </div>
    </div>
  </li>
</template>

<script setup>

const props = defineProps({
  healthCheck: {
    type: Object,
    required: true
  },
  endpoint: {
    type: String,
    required: true
  }
})

const {healthCheck} = toRefs(props)

console.log('Value', healthCheck.value)

</script>
