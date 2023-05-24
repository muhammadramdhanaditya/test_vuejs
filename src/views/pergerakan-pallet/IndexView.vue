<template>
  <v-app>
    <Navbar />
      <v-container>
        <h1 class="heading black--text">{{ $t("sidebar.pergerakanpallet") }}</h1>
        <v-spacer></v-spacer>
        <v-col md-12>
        <v-card>
            <v-card-title>
              {{ $t("sidebar.pergerakanpallet") }}
            </v-card-title>
            <v-divider></v-divider>
                <v-card>
                    <v-card-title>
                      <v-btn>
                {{ $t("manajemenpengguna.unduh") }}</v-btn>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        prepend-icon="mdi-search"
                        :label="$t('manajemenpengguna.cari')"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>
                    <v-data-table class="custom-table"
                    :loading="loading"
                    :headers="headers"
                    :search="search"
                    :items="items"
                    elevation="2"
                    border
                    >
                    </v-data-table>
                </v-card>
          </v-card>
      </v-col>
      </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Breadcomp from "@/components/Breadcrumb.vue";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import en from "@/locales/en.json";
import id from "@/locales/id.json";
// @ is an alias to /src
export default {
  name: "PergerakanPallet",
  components: {
    Navbar,
    Footer,
    Breadcomp
  },
  data() {
        return {
            headers: [
                { value: 'nomorSJP', text: 'Nomor SJP'},
                { value: 'kirim', text: 'Kirim / Kirim Kembali' },
                { value: 'status', text: 'Status'},
                { value: 'keberangkatan', text: 'Keberangkatan'},
                { value: 'tujuan', text: 'Tujuan'},
                { value: 'ekspeditur', text: 'Ekspeditur'},
                { value: 'nomorkendaraan', text: 'Nomor Kendaraan'},
                { value: 'goodpallet', text: 'Good Pallet'},
                { value: 'TBRpallet', text: 'TBR Pallet'},
                { value: 'BERpallet', text: 'BER Pallert'},
                { value: 'missingpallet', text: 'Missing Pallet'},
                { value: 'waktukeberangkatan', text: 'Waktu Keberangkatan'},
                { value: 'perkiraanwaktu', text: 'Perkiraan Waktu'},
                { value: 'lamaketerlambatan', text: 'Lama Keterlambatan'}

            ],
            items: [
                { name :'Daud', username: 'daudtea', email: 'mramdhanass@gmail.com' }
            ],
            search: '',

        }
    },
};
</script>
<style scoped>
.warna-font {
  color: white; 
}
.custom-table table {
  border-collapse: separate;
  border-spacing: 0px;
  width: 100%;
}

.custom-table th,
.custom-table td {
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px;
  text-align: left;
}
</style>
