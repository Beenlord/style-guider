<template>
  <div class="page index-page">
    <div class="g-container">
      <div class="g-section markdown-body" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      markdown: '',
    };
  },
  mounted() {
    (this.$axios.get('/v1/readme/get')).then(({ data }) => {
      this.markdown = data?.html;
    });
  },
}
</script>

<style lang="scss">
.index-page {
}
</style>
