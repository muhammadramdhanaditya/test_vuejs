<template>
  <v-app>
    <nav-comp />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavComp from './components/NavComp.vue';

export default {
  name: 'App',
  components: {
   NavComp 
  },
  data: () => ({
    //
  }),
};
</script>
