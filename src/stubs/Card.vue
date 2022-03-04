<template>
  <a-card hoverable :title="title" class="card">
    <p>{{ description }}</p>
    <template #actions>
      <a-icon type="delete" />
    </template>
  </a-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default:"Card title"
    },
    description: {
      type: String,
      default:"Card content"
    },
  },
};
</script>

<style>
.card{
  margin-bottom: '20px';
  max-width: 300px;
}
</style>
