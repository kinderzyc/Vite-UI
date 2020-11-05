<template>
  <h1>Dialog示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import { ref } from "vue";
import Demo from "../components/Demo.vue";
import Dialog1Demo from "../components/Dialog1.demo.vue";
import Dialog2Demo from "../components/Dialog2.demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
  }
};
</script>

<style lang="scss" scoped>
</style>