<template>
  <div :style="{ display: 'flex', justifyContent : 'center', width: '100%'}">
    <a-pagination @click.native="updatePageNumber" v-model="current" :disabled="isDisabled"  :pageSize.sync="pageSize" :total="total" show-less-items />
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 1,
    };
  },
  props:{
    isDisabled:{
      type:Boolean
    },
    pageSize:{
      type:Number,
      default:20
    },
    total:{
      type:Number,
      default:100
    }
  },
  methods:{
    updatePageNumber(){
      console.log('x')
      this.$emit('getCurrent',this.current)
    }
  }
};
</script>
