import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  kemitraan: [
    {
        icon: "mdi-handshake",
        title: "Kemitraan",
        items: [
          { title: "Principal", route: "/principal" },
          { title: "Agen", route: "/agen" },
        ],
    },
    ],
    logouts: [
      { icon: "mdi-sale", title: "Promo", route: "/" },
      { icon: "mdi-information-variant", title: "Tentang Kami", route: "/" },
      { icon: "mdi-file-document-multiple", title: "Artikel", route: "/" },
      { icon: "mdi-hand-coin", title: "Lelang", route: "/" },
      { icon: "login", title: "sidebar.masuk", route: "/" },
      { icon: "logout", title: "sidebar.keluar", route: "/" },
    ],
    logins: [{ icon: "login", title: "sidebar.masuk", route: "/" }],
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
          {
            title: "Industrial & Marine Engine Oils",
            route: "/penyewaan-pallet",
          },
          { title: "Industrial Gears Oils", route: "/penyewaan-pallet" },
          { title: "Natural Gas Engine Oils", route: "/penyewaan-pallet" },
          { title: "Passenger Car Diesel Oils", route: "/penyewaan-pallet" },
          { title: "Passenger Car Motor Oils", route: "/penyewaan-pallet" },
          { title: "Powershift Transmission", route: "/penyewaan-pallet" },
          { title: "Produk Khusus", route: "/penyewaan-pallet" },
          { title: "Refrigerating Oils", route: "/penyewaan-pallet" },
          { title: "Turbine Oils", route: "/penyewaan-pallet" },
          {
            title: "Water Cooled Small Engine Oil",
            route: "/penyewaan-pallet",
          },
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
};

export default {
    namespaced: true,
    state
}