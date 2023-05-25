import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  model: [],
  team: [
      {name: 'Aki', desc: 'Kami mempunyai banyak jenis merk aki yang terpercaya', src:require("@/assets//slideshow/accu.jpeg")},
      {name: 'Aksesoris', desc: 'Menyediakan berbagai aksesorin untuk anda', src:require("@/assets//slideshow/aksesoris.jpeg")},
      {name: 'Ban', desc: 'Sayangi diri anda dijalan dengan mengganti ban botak anda di kami', src:require("@/assets//slideshow/ban.jpeg")},
      {name: 'Pelumas', desc: 'Jangan sampai mesin anda aus', src:require("@/assets//slideshow/pelumas.jpeg")},
      {name: 'Peralatan Kerja', desc: 'Bantuan peralatan kerja untuk mempermudah pekerjaan anda', src:require("@/assets//slideshow/peralatan-kerja.jpeg")},
      {name: 'Safety Tool', desc: 'Sayangi diri anda seperti saya menyayangi anda yang membeli produk kamu', src:require("@/assets//slideshow/safety-tool.jpeg")},
      {name: 'Sparepart', desc: 'Suku cadang anda rusak? Segera pesan di kami', src:require("@/assets//slideshow/sparepart.jpeg")},
      {name: 'Alat Berat', desc: 'Berat bat dah pokoknya mah', src:require("@/assets//slideshow/alat-berat.jpeg")},
      {name: 'Bus & Truck', desc: 'Boleh di sewa asal jangan buat di p balap', src:require("@/assets//slideshow/dumptruck.jpeg")},
      {name: 'Pertamina', desc: 'Ini contoh merk yang kami punya', src:require("@/assets//slideshow/pertamina.png")},
      {name: 'Petronas', desc: 'Ini juga sama contoh', src:require("@/assets//slideshow/petronas.png")},
      {name: 'Shell', desc: 'Apalagi ini sama contoh juga', src:require("@/assets//slideshow/shell.png")},
    ],
  slides: [
    {
      title: "Aki / Battery",
      image: require("@/assets//slideshow/accu.jpeg"),
      route: "/",
    },
    {
      title: "Aksesoris",
      image: require("@/assets//slideshow/aksesoris.jpeg"),
      route: "/",
    },
    {
      title: "Ban",
      image: require("@/assets//slideshow/ban.jpeg"),
      route: "/",
    },
    {
      title: "Pelumas Industri",
      image: require("@/assets//slideshow/pelumas.jpeg"),
      route: "/",
    },
    {
      title: "Peralatan Kerja",
      image: require("@/assets//slideshow/peralatan-kerja.jpeg"),
      route: "/",
    },
    {
      title: "Safety Tools",
      image: require("@/assets//slideshow/safety-tool.jpeg"),
      route: "/",
    },
    {
      title: "Sparepart",
      image: require("@/assets//slideshow/sparepart.jpeg"),
      route: "/",
    },
    {
      title: "Unit Alat Berat",
      image: require("@/assets//slideshow/alat-berat.jpeg"),
      route: "/",
    },
    {
      title: "Unit Bus & Truk",
      image: require("@/assets//slideshow/dumptruck.jpeg"),
      route: "/",
    },
  ],
  pelumas: [
    {
      title: "Pertamina",
      image: require("@/assets//slideshow/pertamina.png"),
      route: "/",
      list: [
          { title: "Meditran SX Ultra 15W-40 Plus", route: "/" },
          { title: "ATF Dextrone VI", route: "/" },
        ],
    },
    {
      title: "Evalube",
      image: require("@/assets//slideshow/evalube.png"),
      route: "/",
      list: [
          { title: "HYDRAULIC OIL ISO VG 32", route: "/" },
          { title: "HYDRAULIC OIL ISO VG 46", route: "/" },
        ],
    },
    {
      title: "Repsol",
      image: require("@/assets//slideshow/repsol.png"),
      route: "/",
      list: [
          { title: "Transmission EPM 90 GL-4", route: "/" },
          { title: "Transmission EP 85W 140 GL-5", route: "/" },
        ],
    },
    {
      title: "Shell",
      image: require("@/assets//slideshow/shell.png"),
      route: "/",
      list: [
          { title: "OMALA S2 GX 320", route: "/" },
          { title: "SHELL HELIX HX5 SAE 15W-40 (4L)", route: "/" },
        ],
    },
    {
      title: "Petronas",
      image: require("@/assets//slideshow/petronas.png"),
      route: "/",
      list: [
          { title: "Petronas Hydroser 46", route: "/" },
          { title: "Urania 800 CF-4 15W-40", route: "/" },
        ],
    },
    {
      title: "Mobil-1",
      image: require("@/assets//slideshow/mobil-1.png"),
      route: "/",
      list: [
          { title: "Super Friction Fighter SAE 10W40", route: "/" },
          { title: "Super Friction Fighter SAE 5W30", route: "/" },
        ],
    },
  ],
  pics: [
    {
      src: require("@/assets//slideshow/trumecs.jpeg"),
    },
    {
      src: require("@/assets//slideshow/idulfitri.jpeg"),
    },
  ],
  items: [
    {
      icon: "mdi-car-battery",
      text: "Aki/Baterai",
    },
    {
      icon: "mdi-go-kart",
      text: "Aksesoris",
    },
    {
      icon: "mdi-tire",
      text: "Ban",
    },
    {
      icon: "mdi-barrel",
      text: "Pelumas Industri",
    },
    {
      icon: "mdi-tools",
      text: "Peralatan Kerja",
    },
    {
      icon: "mdi-safety-goggles",
      text: "Safety Tools",
    },
    {
      icon: "mdi-toolbox",
      text: "Sparepart",
    },
    {
      icon: "mdi-excavator",
      text: "Unit Alat Berat",
    },
    {
      icon: "mdi-truck-outline",
      text: "Unit Bus & Truk",
    },
  ],
};

export default {
  namespaced : true,
  state
};
