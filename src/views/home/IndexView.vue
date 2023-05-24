<template>
  <v-app>
    <Navbar />
      <v-container>
        <v-layout row wrap>
        <v-flex sm6 xs12 md8 lg3>
            <v-card class="ma-1">
              <v-card-title>Temukan Kebutuhanmu</v-card-title>
              <v-list dense>
                <v-list-item-group
                  v-model="model"
                  active-class="border"
                  color="indigo"
                >
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-flex>
        <v-flex sm6 xs12 md8 lg9>
          <v-carousel cycle
            height="445"
            hide-delimiter-background
            show-arrows-on-hover>
            <v-carousel-item
              v-for="(pic,i) in pics"
              :key="i"
              :src="pic.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
              style="margin-top: 5px;"
            ></v-carousel-item>
          </v-carousel>
          </v-flex>
        </v-layout>
        <v-col>
          <br>
          <h2>Daftar Kategori</h2>
          <v-spacer></v-spacer>
      </v-col>
        <v-layout row wrap>
          <v-flex sm6 xs12 md6 lg4>
            <v-card class="ma-3">
                    <v-card-title>Aki</v-card-title>
                    <v-row align="center" justify="center">
                    <v-col cols="12">
                      <v-img
                        src="@/assets/logo.png"
                        max-heigth="50"
                        max-width="50"
                        style="margin-left:20px;"
                      ></v-img>
                      <p class="text-center">Trumecs</p>
                    </v-col>
                    <v-col lg4>
                      <v-img
                        src="@/assets/logo.png"
                        max-heigth="50"
                        max-width="50"
                      ></v-img>
                    </v-col>
                    <v-col lg4>
                      <v-img
                        src="@/assets/logo.png"
                        max-heigth="50"
                        max-width="50"
                      ></v-img>
                    </v-col>
                  </v-row>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md6 lg4>
            <v-card class="ma-3">
                    <v-card-title>Ban</v-card-title>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md6 lg4>
            <v-card class="ma-3">
                    <v-card-title>Sparepart Alat Berat</v-card-title>
            </v-card>
          </v-flex>
          <v-col>
          <br>
            <v-row>
          <h2>Daftar Kategori</h2>
        </v-row>
      </v-col>
    </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="red lighten-2">
                  <img :src="person.avatar" alt="" />
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn outlined color="orange">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        </v-layout>
      </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// @ is an alias to /src
export default {
  name: "Dashboard",
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    pics: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    team: [
      { name: "Iyad", role: "web developer", avatar: "/img1.png" },
      { name: "Reda", role: "Graphic designer", avatar: "/img2.png" },
      { name: "Zineb", role: "web developer", avatar: "/img3.png" },
      { name: "Hu TechGroup", role: "Desktop developer", avatar: "/img4.png" },
    ],
    items: [
        {
          icon: 'mdi-car-battery',
          text: 'Aki/Baterai',
        },
        {
          icon: 'mdi-go-kart',
          text: 'Aksesoris',
        },
        {
          icon: 'mdi-tire',
          text: 'Ban',
        },
        {
          icon: 'mdi-barrel',
          text: 'Pelumas Industri',
        },
        {
          icon: 'mdi-tools',
          text: 'Peralatan Kerja',
        },
        {
          icon: 'mdi-safety-goggles',
          text: 'Safety Tools',
        },
        {
          icon: 'mdi-toolbox',
          text: 'Sparepart',
        },
        {
          icon: 'mdi-excavator',
          text: 'Unit Alat Berat',
        },
        {
          icon: 'mdi-truck-outline',
          text: 'Unit Bus & Truk',
        },
      ],
  }),
};
</script>
