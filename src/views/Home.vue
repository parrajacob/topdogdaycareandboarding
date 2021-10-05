<template>
  <div class="home">
    <b-container>
      <b-jumbotron container-fluid header-level="5">
        <template #header>Welcome to TOP DOG</template>

        <template #lead>
          We're all about Convenience, High Level of Care, and of course, Fun!
          Located in Northwest Columbus, Top Dog has been providing Daycare,
          Boarding and Grooming serviced in Central Ohio since 2008! We're
          committed to providing a fun and stress free environment for your
          pups, and a convenient experience for the parents. Check out our
          Convenient, High Level and Fun services here.
        </template>

        <hr class="my-4" />

        <p>Ready for your pup to have some fun! sign up here.</p>

        <p>
          Once complete, we’ll send you an email with the next steps on becoming
          part of the pack!
        </p>

        <b-row>
          <b-col>
            <br />
            <h3>New customers enjoy a free day of daycare</h3></b-col
          >

          <b-col md="2"><br /><b-badge>+</b-badge></b-col>

          <b-col>
            <br />
            <h3>10% OFF YOUR FIRST PURCHASE</h3></b-col
          >
        </b-row>
      </b-jumbotron>

      <img fluid alt="Vue logo" class="size" src="../assets/home/topdog.jpg" />
      <!-- <HelloWorld /> -->
    </b-container>
  </div>
</template>

<style lang="scss">
.size {
  width: -webkit-fill-available;
}
</style>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld,
//   },
// };
</script>
