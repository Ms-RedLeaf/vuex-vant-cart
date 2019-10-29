<template>
  <div class="user">
    <button @click="plus">加</button>
    <button @click="reduce">减</button>
    <button @click="asyncPlus">异步加</button>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: 'user',
  methods: {
    ...mapActions(['asyncPlus']),
    ...mapMutations(['plus', 'reduce'])
  },

}
</script>
