<template>
  <v-container>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld />
    </div>
  </v-container>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
