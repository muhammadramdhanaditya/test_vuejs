<template>
  <v-app>
    <Navbar />
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md8 lg12>
          <v-carousel 
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            elevation="8">
            <v-carousel-item
              v-for="(pic,i) in pics"
              :key="i"
              :src="pic.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
              style="margin-top: 5px;">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-col>
        <br>
        <h1>Daftar Kategori</h1>
      </v-col>
      <v-sheet 
        class="mt-3 mx-auto"
        elevation="8">
        <v-slide-group mobile-break-point="1000" show-arrows center-active cycle interval="3000">
          <v-slide-item v-for="(slide, i) in slides" :key="i">
            <v-card width="180" class="text-center ma-4" route :to="slide.route">
              <v-card-title>
                <v-img height="100px" contain :src="slide.image"></v-img>
              </v-card-title>
              <v-card-text>
                <b>{{ slide.title }}</b>
                
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-col>
        <br>
        <h1>Pelumas Industri</h1>
      </v-col>
      <v-sheet 
        class="mt-3 mx-auto"
        elevation="8">
        <v-slide-group mobile-break-point="1000" show-arrows center-active cycle interval="3000">
          <v-slide-item v-for="(slide, i) in pelumas" :key="i">
            <v-card width="180" class="text-center ma-4" route :to="slide.route">
              <v-card-title>
                <v-img height="100px" contain :src="slide.image"></v-img>
              </v-card-title>
              <v-card-text>
                <b>{{ slide.title }}</b><br>
                <v-list-item align="left" justify="center"
                  v-for="child in slide.list"
                  :key="child.title"
                  router
                  :to="child.route"
                  class="size"
                >{{ child.title }}
                </v-list-item>
              </v-card-text>
              <v-card-actions>
                    <v-btn outlined color="orange">
                        <v-icon small left >message</v-icon>
                        <h6>Selengkapnya</h6>
                    </v-btn>
                </v-card-actions>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-col align="center">
        <br>
        <h1 class="text-center">Trumecs menyediakan</h1>
      </v-col>
      <v-row>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
              <v-card class="text-center ma-3" height="330">
                <v-responsive class="pt-4">
                     <img :src="person.src" alt="" height="200" width="200" >
                </v-responsive>
                <v-card-text>
                  <h4 class="subheading">{{person.name}}</h4>
                  <h6 class="grey--text">{{person.desc}}</h6>
                </v-card-text>
              </v-card>
        </v-flex>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mapState } from 'vuex';

// @ is an alias to /src
export default {
  name: "Dashboard",
  components: {
    Navbar,
    Footer
  },
  computed : {
  ...mapState({
      model: state => state.home.model,
      slides: state => state.home.slides,
      items: state => state.home.items,
      pics: state => state.home.pics,
      pelumas: state => state.home.pelumas,
      team: state => state.home.team,
    }),
  }
};
</script>

<style scoped>
.size {
  font-size: 10px;
}
</style>
