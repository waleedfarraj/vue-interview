<template>
  <a-layout-content :style="{ padding: '0 50px', marginBottom: '50px' }">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
      <CreateListModal />
      <div :style="{ marginBottom: '30px' }" class="gutter-example list">
        <template v-for="item in shownCards">
          <Card :title="item.name" :description="item.description" />
        </template>
      </div>
      <Pagination @getCurrent="(current)=> this.page = current" :total="list.length" :isDisabled="list.length < maxCardsPerPage" :pageSize="maxCardsPerPage" />
    </div>
  </a-layout-content>
</template>

<script>
import Card from "./Card.vue";
import Pagination from "./Pagination.vue";
import CreateListModal from "../stubs/CreateListModal.vue";
import { mapGetters } from "vuex";

export default {
  name: "Lists",
  data(){
    return{
      maxCardsPerPage:20,
      page:1
    }
  },
  components: {
    Card,
    Pagination,
    CreateListModal,
  },
  computed: {
    ...mapGetters(["list"]),

    shownCards(){
       return this.list.slice(this.maxCardsPerPage*(this.page-1),this.maxCardsPerPage*this.page)
    }
  },
};
</script>
<style>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap:16px
}
</style>
