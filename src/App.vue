<template>
  <div id="app">
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/portal">Portal</router-link> |
      <router-link to="/webcam">Webcam</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div> -->

      <Navbar />
      <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #677ee7;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #f8de6f;
    }
  }
}
</style>
