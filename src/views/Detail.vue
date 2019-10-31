<template>
  <div class="detail">
    详情页
  </div>
</template>
<script>
import { getDetail } from '../service/serve';

export default {
  name: 'detail',
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await getDetail(this.id);
      console.log(res);
    },
  },
};
</script>
