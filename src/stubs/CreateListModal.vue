<template>
  <div>
    <a-button
      :style="{ marginBottom: '40px' }"
      type="link"
      @click="onOpenModal"
    >
      My Lists
      <a-icon type="plus" />
    </a-button>

    <a-modal
      :visible="isModalVisible"
      title="Create list"
      okText="Create"
      @ok="handleSubmit"
      @cancel="handleCancel"
    >
      <a-form layout="vertical">
        <a-form-item label="Title">
          <a-input v-model="title" />
        </a-form-item>
        <div v-if="v$.$errors.length">
          <p class="error"  v-for="error of v$.title.$errors" :key="error.$uid">
            {{ error.$message }}
          </p>
        </div>
        <a-form-item label="Description">
          <a-input v-model="description" />
        </a-form-item>
      </a-form>
      <div  v-if="v$.$errors.length">
        <p  class="error" v-for="error of v$.description.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>
    </a-modal>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers, maxLength } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      ModalText: "Content of the modal",
      isModalVisible: false,
      title: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(['fetchList']),
    onOpenModal() {
      this.isModalVisible = true;
    },
    async handleSubmit() {
      //TODO:
      const isValid = await this.v$.$validate();
      if (isValid) {
        await this.fetchList({name:this.title,description:this.description})
        this.isModalVisible = false
      }
    },
    handleCancel() {
      //TODO:
      this.isModalVisible = false;
    },
  },
  validations() {
    return {
      title: {
        required: helpers.withMessage("This field cannot be empty", required),
        maxLength: helpers.withMessage(
          "Must be equal or less than 255 characters",
          maxLength(255)
        ),
      },
      description: {
        required: helpers.withMessage("This field cannot be empty", required),
        maxLength: helpers.withMessage(
          "Must be equal or less than 1000 characters",
          maxLength(1000)
        ),
      },
    };
  },
};
</script>

<style>

.error {
 border:  1px solid red;
 padding: 4px;
 background-color: pink;
 color: black;
 border-radius: 3px;
}

</style>
