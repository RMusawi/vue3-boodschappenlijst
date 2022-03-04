<template>
  <div class="container mx-auto">
    <nav class="space-x-8 my-6 flex justify-end">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add">Add new item</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
