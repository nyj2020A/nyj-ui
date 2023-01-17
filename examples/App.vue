<template>
  <div id="app">
    <!-- <nyj-button type="primary" icon="help">测试按钮</nyj-button>
    <nyj-button type="info" icon="help" circle @click="handleClick"></nyj-button>
    <nyj-button type="warning" disabled @click="handleClick">测试按钮</nyj-button> -->
    <!-- <nyj-radio label="男" v-model="gender"></nyj-radio>
    <nyj-radio label="女" v-model="gender"></nyj-radio> -->

    <!-- <nyj-radio-group v-model="gender">
      <nyj-radio label="男"></nyj-radio>
      <nyj-radio label="女"></nyj-radio>
    </nyj-radio-group> -->
    <nyj-input clearable v-model="gender"></nyj-input>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
  data () {
    return {
      gender: '女'
    }
  },
  methods: {
    handleClick () {
      console.log('123')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
