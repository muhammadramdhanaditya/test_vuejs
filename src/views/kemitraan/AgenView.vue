<template>
  <v-container>
    <Navbar />
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <v-img class="mx-auto" style="margin-top: -60px;"
                        src="@/assets/trumecs.png"
                        max-width="100"
                        ></v-img>
                        <h2
                          class="text-center"
                        >Daftar Agen Sekarang</h2><br>
                        <h4
                          class="text-center"
                        >Silahkan isi formulir dibawah ini :</h4><br>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                          <v-text-field
                            label="Nama"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="No.HP/WA"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                          type="number"
                          /> 
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <h4 class="text-center">Lingkup industri yang anda kuasai</h4>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="4"
                              md="6"
                            >
                              <v-checkbox
                                label="Instansi Pemerintah"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Industri"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Pelabuhan"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Perkapalan"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Pertambangan"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="4"
                              md="6"
                            >
                              <v-checkbox
                                label="Perkebunan"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Transportasi"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Kontraktor"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Oil & Gas"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                          </v-row><br>
                          <v-text-field
                            label="Domisili"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Daerah mana saja yang menjadi cakupan marketing anda"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <h4 class="text-center">Produk yang ingin dipasarkan</h4>
                           <v-row>
                            <v-col
                              cols="12"
                              sm="4"
                              md="6"
                            >
                              <v-checkbox
                                label="Ban"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Aki"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Pelumas"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="4"
                              md="6"
                            >
                              <v-checkbox
                                label="Sparepart"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Unit"
                                value="ins"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                          </v-row><br>
                          <v-text-field
                            label="Kapan siap bergabung"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="date"
                          />
                          <h4 class="text-center">Status Agen</h4>
                          <v-radio-group
                              v-model="radios"
                              mandatory
                            >
                              <v-radio
                                label="Part Time"
                                value="part"
                              ></v-radio>
                              <v-radio
                                label="Full Time"
                                value="full"
                              ></v-radio>
                            </v-radio-group>
                          <v-checkbox
                            label="Data yang saya isikan di atas adalah benar dan saya bersedia mengikuti peraturan yang ada"
                            class="mt-n1 size"
                            color="blue"
                          ></v-checkbox>
                          <v-btn v-for="login in logins" router :to="login.route" color="blue" dark block tile>Kirim</v-btn>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="rounded-bl-xl">
                    <div style="  text-align: center; padding-top: 50px;">
                      <v-img class="mx-auto"
                        src="@/assets/agen.png"
                        max-width="400"
                        ></v-img>
                      <v-card-text class="white--text" >
                        <h1 class="text-center bold">Manfaatkan waktu luang anda menjadi lebih produktif</h1><br>
                        <h3
                          class="text-center"
                        >Manfaatkan waktu luang anda menjadi lebih produktif di saat pandemi kerja dari mana saja</h3><br><br>
                        <h2 class="text-center">Keuntungan menjadi agen Trumecs?</h2><br>
                        <h4
                          class="text-center"
                        >Manfaatkan waktu luang anda menjadi lebih produktif di saat pandemi kerja dari mana saja</h4>
                        <h4
                          class="text-center"
                        > 
                      <br>- Penghasilan tambahan tanpa terikat kontrak apapun
                      <br>- Manfaatkan relasi lama anda dan jalin relasi baru
                      <br>- Tanpa memerlukan modal untuk memulai
                      <br>- Tanpa joining fee
                      <br>- Tanpa franchise fee
                      <br>- Full technical support
                      <br></h4>
                      </v-card-text>
                      </div>
                    </v-col>
                  </v-row>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

  export default {
   data: () => ({
    radios: null,
    logins: [{
      route: "/dashboard"
    }]
  }),
  props: {
    source: String
  },
  components : {
    Navbar
  }

    
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 200px !important;
    background-color: orange;
}
.size {
  font-size: 5px;
}
</style>
