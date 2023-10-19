<template>
  <div class="page index-page">
    <!-- <div class="g-sidebar">
      <div
        v-for="(item, key) in list" :key="key"
        class="g-sidebar__item"
      >
        <span v-html="item.name"></span>
      </div>
    </div>
    <div class="g-container">
      <div class="g-section markdown-body" v-html="markdown"></div>
    </div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [],
      markdown: '',
    };
  },
  mounted() {
    (this.$axios.get('/v1/content')).then(({ data }) => {
      this.list = data?.content.content;
    });
  },
}
</script>

<style lang="scss">
.index-page {
}
</style>
