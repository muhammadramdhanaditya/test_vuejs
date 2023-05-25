<template>
  <nav>
    <v-app-bar color="white" dark app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="orange"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img src="../assets/logo.png" max-heigth="50" max-width="100">
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="icon" >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="icon">
        <v-icon>mdi-cart-variant</v-icon>
      </v-btn>
      <LocaleSwitcher />
      <v-btn
        v-for="login in logins"
        router
        :to="login.route"
        class="margin"
        color="blue darken-3"
      >
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
          class="icon"
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
        <v-divider></v-divider>
        <v-list-item
          class="icon"
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
import { mapState } from 'vuex';

export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    LocaleSwitcher,
  },
  computed: {
    ...mapState({
      kats: state => state.navbar.kats,
      logins: state => state.navbar.logins,
      logouts: state => state.navbar.logouts,
    })
  }
};
</script>
 <style scoped>
.border {
  border-left: 4px solid #0ba518;
}
.margin {
  margin-left: 5px;
}
.icon >>> .v-icon {
  color: orange; /* Change this to your desired color */
}
</style>