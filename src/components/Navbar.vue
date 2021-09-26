<template>
  <div>
    <b-navbar class="purple-background" toggleable="lg" type="dark">
      <b-navbar-brand class="yellow-text" to="/"><b>Top Dog Daycare & Boarding</b></b-navbar-brand>

      <!-- <b-navbar-brand href="/">
        <img src="../assets/topdog2.png" alt="Top Dog Logo" />
      </b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

           <b-nav-item to="/"><div class="yellow-text-hover">Home</div></b-nav-item>

           <b-nav-item to="/about"><div class="yellow-text-hover">About</div></b-nav-item>

           <b-nav-item to="/services"><div class="yellow-text-hover">Services</div></b-nav-item>

           <b-nav-item to="/portal"><div class="yellow-text-hover">Client Portal</div></b-nav-item>

           <b-nav-item to="/webcam"><div class="yellow-text-hover">Webcam</div></b-nav-item>

           <b-nav-item to="/contact"><div class="yellow-text-hover">Contact</div></b-nav-item>

           <b-nav-item-dropdown toggle-class="yellow-text-hover" text="Follow Us" class="" right>
            <b-dropdown-item target="_blank" href="https://www.facebook.com/topdogdaycareoh">Facebook</b-dropdown-item>
            <b-dropdown-item target="_blank" href="https://www.instagram.com/topdogdaycareandboarding">Instagram</b-dropdown-item>
            <b-dropdown-item target="_blank" href="https://www.snapchat.com/add/topdogdaycare">Snapchat</b-dropdown-item>
          </b-nav-item-dropdown>

           

          

          <!-- <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

.purple-background {
  background-color: #5170fe !important;
}

.yellow-text {
  color: #FEDD58 !important;
}

.yellow-text-hover:hover {
  color: #FEDD58 !important;
}

.yellow-text-hover:hover {
  color: #FEDD58 !important;
}

.yellow-text-purple:hover {
  color: #FEDD58 !important;
  background-color: #5170fe !important;
}

// Overriding
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(254,221,88, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.navbar-dark .navbar-toggler {
   border-color:#FEDD58;
}
</style>

<script>
</script>