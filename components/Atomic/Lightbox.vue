<style>
.lightbox {
a:hover {
  background: #74B9FF;
}
}
</style>

<template>
  <div class="lightbox fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="close">
    <div class="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">{{ title || 'Information' }}</h2>
        <button @click="close" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <a href="https://git.drupalcode.org/project/cms_health_check" target="_blank">
          <img class="m-auto max-h-[150px] block" src="/images/drupal.svg" alt="drupal"/>
        </a>
        <a href="https://github.com/o-ba/health-checks" target="_blank">
          <img class="m-auto max-h-[150px] block" src="/images/typo3.png" alt="typo3"/>
        </a>
        <a href="https://github.com/cms-health-project/psr15-implementation" target="_blank">
          <img class="m-auto max-h-[150px] block" src="/images/php.png" alt="php"/>
        </a>
        <a href="https://github.com/cms-health-project/wordpress-plugin" target="_blank">
          <img class="m-auto max-h-[150px] block" src="/images/wordpress.png" alt="wordpress"/>
        </a>
        <a href="https://github.com/cms-health-project/health-sulu" target="_blank">
          <img class="m-auto max-h-[150px] block" src="/images/zulu.png" alt="zulu"/>
        </a>
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
