<template>
  <div>Dialog示例</div>
  <h1>示例</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visiable="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>你好</strong>
      <div>你好8</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../Lib/Dialog.vue";
import Button from "../Lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { x, toggle, f1, f2 };
  }
};
</script>

<style lang="scss" scoped>
</style>