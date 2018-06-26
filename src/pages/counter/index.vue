<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p class="counter-row">
      <button @click="increment">+</button>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <button class="weui-btn" type="primary">页面主操作 Normal</button>
    <a href="/pages/index" class="home">去往首页</a>
  </div>
</template>

<script>

export default {
  computed: {
    count() {
      return this.$store.state.counter.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
