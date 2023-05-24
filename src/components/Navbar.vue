<template>
  <nav>
    <v-app-bar color="white"dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="orange"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img
          src="../assets/logo.png"
          max-heigth="50"
          max-width="100">
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <LocaleSwitcher />
      <v-btn v-for="login in logins" router :to="login.route" class="margin" color="blue darken-3">
        <span>{{ $t("sidebar.masuk") }}</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="white">
      <template>
        <v-layout column align-center>
          <v-flex class="mt-4">
            <v-img
              src="../assets/logo.png"
              max-heigth="50"
              max-width="100"
            ></v-img>
          </v-flex>
        </v-layout>
      </template>
      <v-list flat class="font-weight-bold">
        <h3 style="margin-left: 10px">Kategori</h3>
         <v-divider></v-divider>
        <v-list-group
          v-for="kat in kats"
          :key="kat.title"
          v-model="kat.active"
          :prepend-icon="kat.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ $t(kat.title) }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in kat.items"
            :key="child.title"
            router
            :to="child.route"
          >
            <v-list-item-content>
              <v-list-item-title>{{ $t(child.title) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-item
          v-for="logout in logouts"
          :key="logout.title"
          router
          :to="logout.route"
        >
          <v-list-item-action>
            <v-icon>{{ logout.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(logout.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
 <script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  data: () => ({
    drawer: false,
    kats: [
      {
        action: "mdi-car-battery",
        title: "Aki",
        items: [
          { title: "Automotif", route: "/surat-jalan-pallet" },
          { title: "Heavy Duty / Industri", route: "/sjp-status" },
        ],
      },
      {
        action: "mdi-go-kart",
        title: "Aksesoris",
        items: [
          { title: "Agrikultur", route: "/mutasi-pallet" },
          { title: "Alat Berat", route: "/klaim-pallet" },
          {
            title: "Bus / Truck",
            route: "/perubahan-kuota-pallet",
          },
          { title: "Marine", route: "/pallet-baru" },
          { title: "Mobil", route: "/pallet-rusak" },
          { title: "Motor", route: "/pallet-diperbaiki" },
          { title: "Lainnya", route: "/penyewaan-pallet" },
        ],
      },
      {
        action: "mdi-tire",
        title: "Ban",
        items: [
          { title: "Motor", route: "/mutasi-pallet" },
          { title: "Off The Road", route: "/klaim-pallet" },
          {
            title: "Passenger Car",
            route: "/perubahan-kuota-pallet",
          },
          { title: "Truck & Bus Bias", route: "/pallet-baru" },
          { title: "Truck & Bus Radial", route: "/pallet-rusak" },
        ],
      },
      {
        action: "mdi-barrel",
        title: "Pelumas",
        items: [
          { title: "Automotif Oils", route: "/mutasi-pallet" },
          { title: "Brake Fluid", route: "/klaim-pallet" },
          {
            title: "Circulating, Bearing & System Sylinder Oils",
            route: "/perubahan-kuota-pallet",
          },
          { title: "Compressor Oils", route: "/pallet-baru" },
          { title: "Coolant", route: "/pallet-rusak" },
          { title: "Cutting Oils", route: "/pallet-diperbaiki" },
          { title: "Diesel Engnie Oils", route: "/penyewaan-pallet" },
          { title: "Engine Oils", route: "/penyewaan-pallet" },
          { title: "Gardan Oils", route: "/penyewaan-pallet" },
          { title: "Gasoline Engine Oils", route: "/penyewaan-pallet" },
          { title: "Gear & Transmission Oils", route: "/penyewaan-pallet" },
          { title: "Grease", route: "/penyewaan-pallet" },
          { title: "Heat Transfer Oils", route: "/penyewaan-pallet" },
          { title: "Hydraulics Oils", route: "/penyewaan-pallet" },
          { title: "Industrial & Marine Engine Oils", route: "/penyewaan-pallet" },
          { title: "Industrial Gears Oils", route: "/penyewaan-pallet" },
          { title: "Natural Gas Engine Oils", route: "/penyewaan-pallet" },
          { title: "Passenger Car Diesel Oils", route: "/penyewaan-pallet" },
          { title: "Passenger Car Motor Oils", route: "/penyewaan-pallet" },
          { title: "Powershift Transmission", route: "/penyewaan-pallet" },
          { title: "Produk Khusus", route: "/penyewaan-pallet" },
          { title: "Refrigerating Oils", route: "/penyewaan-pallet" },
          { title: "Turbine Oils", route: "/penyewaan-pallet" },
          { title: "Water Cooled Small Engine Oil", route: "/penyewaan-pallet" },
        ],
      },
      {
        action: "mdi-toolbox",
        title: "Sparepart",
        items: [
          { title: "Agrikultur", route: "/mutasi-pallet" },
          { title: "Alat Berat", route: "/klaim-pallet" },
          {
            title: "Industri",
            route: "/perubahan-kuota-pallet",
          },
          { title: "Marine", route: "/pallet-baru" },
          { title: "Truck dan Bus", route: "/pallet-rusak" },
        ],
      },
      {
        action: "mdi-tools",
        title: "Tools",
        items: [
          { title: "Equipment", route: "/mutasi-pallet" },
          { title: "Innovative", route: "/klaim-pallet" },
          { title: "Safety", route: "/pallet-baru" },
        ],
      },
      {
        action: "mdi-excavator",
        title: "Unit",
        items: [
          { title: "Agrikultur", route: "/mutasi-pallet" },
          { title: "Alat Berat", route: "/klaim-pallet" },
          {
            title: "Bus / Truck",
            route: "/perubahan-kuota-pallet",
          },
          { title: "Marine", route: "/pallet-baru" },
        ],
      },
    ],
    logouts: [
      { icon: "mdi-sale", title: "Promo", route: "/" },
      { icon: "mdi-information-variant", title: "Tentang Kami", route: "/" },
      { icon: "mdi-file-document-multiple", title: "Artikel", route: "/" },
      { icon: "mdi-handshake", title: "Kemitraan", route: "/" },
      { icon: "mdi-hand-coin", title: "Lelang", route: "/" },
      { icon: "login", title: "sidebar.masuk", route: "/" },
      { icon: "logout", title: "sidebar.keluar", route: "/" },
    
    ],
    logins: [{ icon: "login", title: "sidebar.masuk", route: "/" }],
  }),
  components: {
    LocaleSwitcher,
  },
};
</script>
 <style scoped>
.border {
  border-left: 4px solid #0ba518;
}
.margin {
  margin-left: 5px;
}
</style>