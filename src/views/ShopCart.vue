<template>
  <div class="shopcart">{{count}}</div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  name: "shopCart",
  computed: {
    ...mapState(['count'])
  }
};
</script>
