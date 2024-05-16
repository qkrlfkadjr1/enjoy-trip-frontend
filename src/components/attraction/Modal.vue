<script setup>
const props = defineProps({
  visible: Boolean,
  title: String,
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<!-- Modal.vue -->
<template>
  <div v-if="visible" class="modal fade show" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal.show {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}
</style>
