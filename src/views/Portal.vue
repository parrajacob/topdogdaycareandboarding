<template>
  <div class="background">
    <b-container>
      <div class="pt-5 pb-5">
        <b-form
          class="login-form mx-auto my-5 "
          style="width: 80%; height: auto;"
          @submit="onSubmit"
          @reset="onReset"
          target="_blank"
          action="https://secure.petexec.net/remoteLogin.php"
          method="post"
          v-if="show"
        >
          <h3 class="mt-5 text-primary">Login</h3>
          <img src="@/assets/petexeclogo.png" />
          <div class="mt-5 px-xl-5 mx-xl-5">
            <b-form-group id="input-group-1" class="pl-3 pr-3">
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                placeholder="Username"
                required
                name="username"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" class="pl-3 pr-3">
              <b-form-input
                id="input-2"
                v-model="form.password"
                required
                name="password"
                type="password"
                placeholder="Password"
              ></b-form-input>
            </b-form-group>
          </div>
          <b-button type="submit" variant="primary" class="mb-5"
            >Login</b-button
          >
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss">
.background {
  background-image: url("~@/assets/portal-background.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
.login-form {
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #fff;
  border-radius: 25px;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },

      show: true,
    };
  },
  methods: {},
};
</script>
