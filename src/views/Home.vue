<template>
  <div>
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li class="block" v-for="item in store.state.items" :key="item.id">
        <div class="font-semibold">
          <div class="px-2 mb-2 bg-slate-200 rounded-lg">
            <label class="text-xl text-blue-600">Name: </label>
            <span class="">{{ item.name }}</span>
          </div>
          <div class="px-2 mb-2 bg-slate-200 rounded-lg">
            <label class="text-xl text-blue-600">Amount: </label>
            <span class="">{{ item.amount }}</span>
          </div>
          <div class="px-2 bg-slate-200 rounded-lg">
            <label class="text-xl text-blue-600">Total cost: </label>
            <span class="">€{{ (item.price * item.amount).toFixed(2) }}</span>
          </div>
        </div>

        <div class="flex">
          <RouterLink
            class="inline-block ml-0 bg-blue-500 hover:bg-blue-400 text-white font-bold mt-3 py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            :to="`/edit/${item.id}`"
            >Edit</RouterLink
          >
          <button
            @click="removeItem(item.id)"
            class="ml-auto inline-block bg-red-500 hover:bg-red-400 text-white font-bold mt-3 py-1 px-3 border-b-4 border-red-700 hover:border-red-500 rounded"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "@/store";

export default defineComponent({
  setup() {
    const store = useMainStore();

    function removeItem(id: any) {
      store.removeItem(id);
    }

    return { store, removeItem };
  },
});
</script>

<style scoped></style>
