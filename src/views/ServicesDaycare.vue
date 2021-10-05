<template>
    <div class="services-daycare">
      <b-container>
      <h1>Services daycare page</h1>
      </b-container>

      <ServicesSidebar />
    </div>
</template>



<script>
// @ is an alias to /src
import ServicesSidebar from "@/components/ServicesSidebar.vue";


export default {
  name: "ServicesDaycare",
  components: {
    ServicesSidebar,
  },
};

</script>