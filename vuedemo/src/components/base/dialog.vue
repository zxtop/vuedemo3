<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover"></div>
      <transition name="drop">
        <div class="dialog-content">
          <p class="dialog-close">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>

</style>
