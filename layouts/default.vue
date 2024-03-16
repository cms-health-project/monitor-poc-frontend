<script setup>

import {Disclosure, DisclosureButton} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
</script>

<template>
  <div id="layout-portal">
    <div class="min-h-full">
      <Disclosure as="nav" class="bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5 mb-5">
          <div class="flex h-16 justify-between">
            <div class="flex">
              <div class="flex flex-shrink-0 items-center pr-5">
                <NuxtLink to="/">
                  <span class="inline mr-5" style="float: left">
                  <img class="block h-20 w-auto lg:hidden" src="/images/logo-wide.png" alt="Your Company"/>
                  <img class="hidden h-20 w-auto lg:block" src="/images/logo-wide.png" alt="Your Company"/>
                  </span>
                </NuxtLink>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <button type="button"
                      class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute -inset-1.5"/>
              </button>
            </div>
            <div class="-mr-2 flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                  class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <span class="absolute -inset-0.5"/>
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
              </DisclosureButton>
            </div>
          </div>
        </div>
      </Disclosure>
      <div class="py-10 center">
        <div id="content">
          <slot/>
        </div>
      </div>
    </div>
  </div>
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

@media (max-width: 1000px) {
  #layout-portal {
    .center {
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
</style>

