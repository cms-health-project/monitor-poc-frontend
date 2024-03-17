<script setup></script>

<template>
  <div class="min-h-full">
    <LayoutHeader/>
  </div>
  <slot></slot>
</template>

<style>

.plan-lite {
  @apply bg-lime-200;
  @apply text-black;
}

.plan-business {
  @apply bg-yellow-200;
  @apply text-black;
}

</style>

