<template>
  <div v-test-direct>hello world</div>
</template>

<script>
import Vue from 'vue';
import { TestDirect } from '../directs/test-direct'

Vue.use(TestDirect)

export default {

}
</script>
