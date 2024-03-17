<script lang="js" setup>

const props = defineProps({
  timestamp: {
    type: Number,
    required: true
  }
})

const {timestamp} = toRefs(props)

TimeAgo.addDefaultLocale(en)

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')

</script>

<template>
  {{ timeAgo.format(timestamp * 1000) }}
</template>
