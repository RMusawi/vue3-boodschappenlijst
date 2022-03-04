import { reactive, readonly } from "vue";

interface State {
  items: any[];
}

const state = reactive<State>({
  items: [],
});

const actions = {
  addItem(item: any) {
    state.items.push({...item, id: Date.now()});
  },

  removeItem(id: any) {
    state.items = state.items.filter((item) => item.id != id);
  },

  editItem(id: any, updatedItem: any) {
    state.items = state.items.map((item) => {
      if (item.id == id) {
        return { ...item, ...updatedItem };
      }
      return item;
    });
  },
};

const getters = {}

export default function useMainStore() {
  return {
    state: readonly(state),
    ...actions,
    ...getters,
  };
}