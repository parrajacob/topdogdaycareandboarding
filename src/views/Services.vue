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
        <b-col id="daycare" md class="purple">
          <h4 class="purple">
            <b><router-link to="/services/daycare">Daycare</router-link></b>
          </h4>
          <b-img
            src="../assets/services/daycare.jpeg"
            fluid
            alt="Responsive image"
          ></b-img>

          <br />
          <br />

          <b-button v-b-modal.daycare-requirements>Requirements</b-button>
          <b-modal
            id="daycare-requirements"
            size="xl"
            ok-only
            title="Daycare Requirements"
            >Daycare Requirements!</b-modal
          >
        </b-col>
        <b-col id="overnights" md class="purple"
          ><h4 class="purple"><b>Overnights</b></h4>
          <b-img
            src="../assets/services/overnights.jpg"
            fluid
            alt="Responsive image"
          ></b-img>

          <br />
          <br />

          <b-button v-b-modal.overnight-requirements>Requirements</b-button>
          <b-modal
            id="overnight-requirements"
            size="xl"
            ok-only
            title="Overnight Requirements"
          >
            <b-row>
              <b-col class="mx-auto text-center" md="6">
                <p>
                  All dogs must be on a leash when entering and exiting the
                  building. Please bring your dog’s food from home - we can
                  provide dry food, for $1 per cup, but recommend their daily
                  food to prevent upset stomach, diarrhea, or allergic
                  reactions.
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="mx-auto text-center" md="6">
                <p>
                  Please bring any medications your dog will need to take during
                  their stay. Please ONLY bring the EXACT amount needed for
                  their boarding. We will ask you to sign a waiver for any new
                  medication, and we will always count the medication in front
                  of you before you depart.
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="mx-auto text-center" md="6">
                <p>
                  You may bring in some of their toys, as long as you are
                  comfortable with them having said toys unsupervised (i.e.
                  overnight). For safety reasons we do not allow dogs to have
                  rawhide treats or any toys that could pose as a choking hazard
                  (i.e. old toys that are falling apart and/or sharp).
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="mx-auto text-center" md="6">
                <p>
                  All pet parents must provide a valid emergency contact. This
                  person must be in-town, available by phone, and available to
                  pick your pup up in case of an emergency. Top Dog will always
                  contact you first and we contact the EC afterwards or if we
                  cannot get ahold of a parent.
                </p>
              </b-col>
            </b-row>
          </b-modal>
        </b-col>
        <b-col id="logo" md="4" class="purple">
          <b-button v-b-modal.service-requirements>Requirements</b-button>
          <b-modal
            id="service-requirements"
            size="xl"
            ok-only
            title="Service Requirements"
          >
            <p>Required Vaccinations + General Requirements</p>
            <ul>
              <li>Rabies</li>
              <li>
                DHLPP (Distemper, Hepatitis, Leptospirosis, Parainfluenza, and
                Parvovirus)
              </li>
              <li>
                Bordetella (Kennel Cough) - yearly for injectable or every 6
                months or intranasal
              </li>
              <li>Canine Influenza</li>
              <li>
                Negative fecal test done every 6 months - we require them
                biyearly to help ward off asymptomatic parasitic and bacterial
                infections.
              </li>
              <li>
                Yearly negative heartworm test and be on heartworm and flea
                preventative medication.
              </li>
              <li>
                <b>All dogs must be spayed or neutered by 12 months of age.</b>
              </li>
              <li>
                <b
                  >All dogs must pass their first day Meet and Greet
                  assessment.</b
                >
              </li>
            </ul>
          </b-modal>

          <br />
          <br />

          <b-img
            src="../assets/services/whitelogo.png"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>
        <b-col id="grooming" md class="purple"
          ><h4 class="purple"><b>Grooming</b></h4>
          <b-img
            src="../assets/services/grooming.jpg"
            fluid
            alt="Responsive image"
          ></b-img>

          <br />
          <br />

          <b-button v-b-modal.grooming-requirements>Requirements</b-button>
          <b-modal
            id="grooming-requirements"
            size="xl"
            ok-only
            title="Grooming Requirements"
            >Grooming Requirements!</b-modal
          >
        </b-col>
        <b-col id="homecare" md class="purple"
          ><h4 class="purple"><b>Home Care</b></h4>
          <b-img
            src="../assets/services/homecare.jpeg"
            fluid
            alt="Responsive image"
          ></b-img>

          <br />
          <br />

          <b-button v-b-modal.homecare-requirements>Requirements</b-button>
          <b-modal
            id="homecare-requirements"
            size="xl"
            ok-only
            title="Homecare Requirements"
            >Homecare Requirements!</b-modal
          >
        </b-col>
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
