<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col space-y-2">
      <h1 class="text-blue-600 text-3xl font-semibold">Add item</h1>
      <div>
        <label class="block text-gray-600 text-sm">Name</label>
        <input
          class="px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
          v-model="state.name"
          type="text"
        />
      </div>
      <div>
        <label class="block text-gray-600 text-sm">Price</label>
        <input
          class="px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
          v-model.number="state.price"
          type="number"
        />
      </div>
      <div>
        <label class="block text-gray-600 text-sm">Amount</label>
        <input
          class="px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
          v-model.number="state.amount"
          type="number"
        />
      </div>
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold mt-3 py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      Add
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useMainStore } from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useMainStore();
    const router = useRouter();
    const state = reactive({
      name: "",
      price: 0,
      amount: 0,
    });

    function onSubmit() {
      store.addItem({
        name: state.name,
        price: state.price,
        amount: state.amount,
      });

      router.push({
        name: "home",
      });
    }

    return { state, onSubmit };
  },
});
</script>
