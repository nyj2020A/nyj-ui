<template>
    <div class="nyj-radio-group">
        <slot></slot>
    </div>
</template>

<script>

export default ({
  name: 'nyjRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
