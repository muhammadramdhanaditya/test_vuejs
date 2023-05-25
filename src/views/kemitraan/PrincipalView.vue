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
                        <h4
                          class="text-center"
                        >Segera bergabung menjadi mitra kami !</h4><br>
                        <h5
                          class="text-center"
                        >Silahkan isi formulir dibawah ini :</h5><br>
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
                          <v-text-field
                            label="Perusahaan"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Jenis Produk"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Brand"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Negara Asal Produk Anda"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Jelaskan Produk dan Perusahaan Anda"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
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
                        src="@/assets/principal.png"
                        max-width="400"
                        ></v-img>
                      <v-card-text class="white--text" >
                        <h1 class="text-center bold">Jadilah Mitra Trumecs sekarang</h1><br><br>
                        <h2
                          class="text-center"
                        >Jual barang anda melalui Trumecs</h2><br>
                        <h4
                          class="text-center"
                        > 
                      <br>- Display barang yang menarik dan dapat diakses dengan mudah oleh kostumer potensial anda
                      <br>- Menjangkau kostumer yang lebih luas bersama dengan jaringan Trumecs
                      <br>- Trumecs mempunyai jangkauan lebih dari 650 potential kostumer
                      <br>- Klien-klien anda akan ditangani secara profesional oleh tim teknikal support kami
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
