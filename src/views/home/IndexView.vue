<template>
  <v-app>
    <Navbar />
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md8 lg3>
          <v-card class="ma-1" elevation="8">
            <v-card-title>Temukan Kebutuhanmu</v-card-title>
            <v-list dense>
              <v-list-item-group
                v-model="model"
                active-class="border"
                color="indigo">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i">
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
          <v-carousel 
            cycle
            height="445"
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
        <h2>Daftar Kategori</h2>
      </v-col>
      <v-sheet 
        class="mt-5 mx-auto"
        elevation="8">
        <v-slide-group mobile-break-point="1000" show-arrows center-active cycle interval="3000">
          <v-slide-item v-for="(slide, i) in slides" :key="i">
            <v-card width="200" class="ma-4" route :to="slide.route">
              <v-card-title>
                <v-img height="200px" contain :src="slide.image"></v-img>
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
        <h2>Daftar Kategori</h2>
      </v-col>
      <v-layout row>
        <v-flex sm6 xs12 md6 lg4 class="text-center">
          <v-card class="ma-3">
            <v-card-title>Aki</v-card-title>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-row>
                  <v-col md4>
                    <v-img 
                      class="mx-auto"
                      src="@/assets/gs-battery.png"
                      max-heigth="80"
                      max-width="80">
                    </v-img>
                  </v-col>
                  <v-col md4>
                    <v-img
                      class="mx-auto"
                      src="@/assets/incoe.png"
                      max-heigth="100"
                      max-width="100">
                    </v-img>
                  </v-col>
                  <v-col lg4>
                    <v-img
                      class="mx-auto"
                      src="@/assets/fb.png"
                      max-heigth="80"
                      max-width="80">
                    </v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-row>
                  <v-col md4>
                    <p class="text-center">GS Battery</p>
                  </v-col>
                  <v-col md4>
                    <p class="text-center">Incoe Battery</p>
                  </v-col>
                  <v-col lg4>
                    <p class="text-center">Furukawa</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg4>
          <v-card class="ma-3">
            <v-card-title>Ban</v-card-title>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-row>
                  <v-col md4>
                    <v-img 
                      class="mx-auto"
                      src="@/assets/giti.png"
                      max-heigth="80"
                      max-width="80">
                    </v-img>
                  </v-col>
                  <v-col md4>
                    <v-img
                      class="mx-auto"
                      src="@/assets/kaizen.png"
                      max-heigth="100"
                      max-width="100">
                    </v-img>
                  </v-col>
                  <v-col lg4>
                    <v-img
                      class="mx-auto"
                      src="@/assets/hi-tech.png"
                      max-heigth="80"
                      max-width="80">
                    </v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-row>
                  <v-col md4>
                    <p class="text-center">Giti Tyre</p>
                  </v-col>
                  <v-col md4>
                    <p class="text-center">Kaizen</p>
                  </v-col>
                  <v-col lg4>
                    <p class="text-center">Hi-Tech</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg4>
          <v-card class="ma-3">
            <v-card-title>Sparepart Alat Berat</v-card-title>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-row>
                  <v-col md4>
                    <v-img 
                      class="mx-auto"
                      src="@/assets/man.png"
                      max-heigth="80"
                      max-width="80">
                    </v-img>
                  </v-col>
                  <v-col md4>
                    <v-img
                      class="mx-auto"
                      src="@/assets/camc.png"
                      max-heigth="100"
                      max-width="100">
                    </v-img>
                  </v-col>
                  <v-col lg4>
                    <v-img
                      class="mx-auto"
                      src="@/assets/doosan.png"
                      max-heigth="80"
                      max-width="80">
                    </v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
            <v-col cols="12">
                <v-row>
                  <v-col md4>
                    <p class="text-center">MAN</p>
                  </v-col>
                  <v-col md4>
                    <p class="text-center">CAMC</p>
                  </v-col>
                  <v-col lg4>
                    <p class="text-center">Doosan</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
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
    model: [],
    slides: [
      {
        title: 'Aki / Battery',
        image: require('@/assets//slideshow/accu.jpeg'),
        route: '/'
      },
      {
        title: 'Aksesoris',
        image: require('@/assets//slideshow/aksesoris.jpeg'),
        route: '/'
      },
      {
        title: 'Ban',
        image: require('@/assets//slideshow/ban.jpeg'),
        route: '/'
      },
      {
        title: 'Pelumas Industri',
        image: require('@/assets//slideshow/pelumas.jpeg'),
        route: '/'
      },
      {
        title: 'Peralatan Kerja',
        image: require('@/assets//slideshow/peralatan-kerja.jpeg'),
        route: '/'
      },
      {
        title: 'Safety Tools',
        image: require('@/assets//slideshow/safety-tool.jpeg'),
        route: '/'
      },
      {
        title: 'Sparepart',
        image: require('@/assets//slideshow/sparepart.jpeg'),
        route: '/'
      },
      {
        title: 'Unit Alat Berat',
        image: require('@/assets//slideshow/alat-berat.jpeg'),
        route: '/'
      },
      {
        title: 'Unit Bus & Truk',
        image: require('@/assets//slideshow/dumptruck.jpeg'),
        route: '/'
      }
    ],
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
