<template>
  <div class="services">
    <b-container>


       <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="200"
      >
        <b-carousel-slide
          caption=""
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
      <!-- <b-row>
        <b-col>
          <b-img
            fluid-grow
            rounded
            src="https://picsum.photos/1024/400/?image=41"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            fluid-grow
            rounded
            src="https://picsum.photos/1024/400/?image=41"
            alt="Image 2"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            fluid-grow
            rounded
            src="https://picsum.photos/1024/400/?image=41"
            alt="Image 3"
          ></b-img>
        </b-col>
      </b-row> -->
    </b-container>
    <b-container fluid>
      <!-- <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="200"
      >
        <b-carousel-slide
          caption=""
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel> -->

      <br />

      <h1 class="purple"><b>SERVICES</b></h1>

      <br />

      <b-row>
        <b-col id="daycare" md class="purple"> <h4 class="purple"><b>Daycare</b></h4> <b-img src="../assets/topdog4.jpeg" fluid blank-height alt="Responsive image"></b-img></b-col>
        <b-col id="overnights" md class="purple"><h4 class="purple"><b>Overnights</b></h4> <b-img src="../assets/topdog5.jpg" fluid blank-height alt="Responsive image"></b-img></b-col>
        <b-col id="logo" md="4" class="purple"><b-img src="../assets/topdog3.png" fluid blank-height alt="Responsive image"></b-img></b-col>
        <b-col id="grooming" md class="purple"><h4 class="purple"><b>Grooming</b></h4> <b-img src="../assets/topdog6.jpg" fluid blank-height alt="Responsive image"></b-img></b-col>
        <b-col id="homecare" md class="purple"><h4 class="purple"><b>Home Care</b></h4> <b-img src="../assets/topdog7.jpeg" fluid blank-height alt="Responsive image"></b-img></b-col>
      </b-row>
      <!-- <router-link to="/services/boarding">Boarding</router-link> |
      <router-link to="/services/daycare">Daycare</router-link> |
      <router-link to="/services/grooming">Grooming</router-link> |
      <router-link to="/services/homecare">Homecare</router-link> |
      <router-link to="/services/requirements">Requirements</router-link> |
      <router-link to="/services/walking">Walking</router-link> -->
    </b-container>
  </div>
</template>


<style lang="scss">
.purple {
  color: #5170fe !important;
}


@media only screen and (max-width: 768px) {
    #daycare {
        order: 2;
    }
    #overnights {
        order: 3;
    }
    #logo {
        order: 1;
    }
    #grooming {
        order: 4;
    }
    #homecare {
        order: 5;
    }
}
</style>
