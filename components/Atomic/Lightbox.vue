<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="close">
    <div class="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">{{ title || 'Information' }}</h2>
        <button @click="close" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <a href="https://github.com/o-ba/health-checks" target="_blank">https://github.com/o-ba/health-checks</a>
        <a href="https://git.drupalcode.org/project/cms_health_check" target="_blank">https://git.drupalcode.org/project/cms_health_check</a>
        <a href="https://github.com/cms-health-project/psr15-implementation" target="_blank">https://github.com/cms-health-project/psr15-implementation</a>
        <a href="https://github.com/cms-health-project/wordpress-plugin" target="_blank">https://github.com/cms-health-project/wordpress-plugin</a>
        <a href="https://github.com/cms-health-project/health-sulu" target="_blank">https://github.com/cms-health-project/health-sulu</a>
      </div>
      <div class="mt-6 text-right">
        <button @click="close" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>
