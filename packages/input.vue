<template>
    <div class="nyj-input" :class="{'nyj-input_suffix':showSuffix}">
        <input class="nyj-input_inner"
        :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : type"
        :placeholder="placeholder"
        :value="value"
        v-model="model" />
        <span class="nyj-input_suffix">
            <i v-if="clearable && value" class="nyj-icon-circle-close" @click="clear"></i>
            <i v-if="showPassword && type=='password'" class="nyj-icon-view" @click="handlePassword"></i>
        </span>
    </div>
</template>

<script>
export default {
  name: 'nyjInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    },
    model: {
      get () {
        return this.value
      },
      set (value) {
        return this.$emit('input', value)
      }
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  methods: {
    // handleInput (e) {
    //   this.$emit('input', e.target.value)
    // },
    clear () {
      this.model = ''
      //this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.nyj-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .nyj-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input????????????
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }

  .nyj-input_suffix{
    .nyj-input_inner{
      padding-right: 30px;
    }
    .nyj-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }

</style>
