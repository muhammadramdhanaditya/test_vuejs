<template>
  <v-app-bar color="yellow">
    <v-toolbar-title>TruMecs</v-toolbar-title>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="dropdown" color="blue-grey" dark v-bind="attrs" v-on="on">
          <v-icon dark>
            mdi-format-list-bulleted-square
          </v-icon> Kategori
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index"
        router
        :to="item.route">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <v-btn color="primary" v-for="home in homes"
    :key="home.title"
    router
    :to="home.route">
    {{ home.title }}
    </v-btn>
    <v-btn class="dropdown"  v-for="about in abouts"
    :key="about.title"
    router
    :to="about.route">
    {{ about.title }}
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: 'Aki' , route:"/aki" },
      { title: 'Aksesoris' , route:"/aksesoris" },
      { title: 'Ban' , route:"/ban" },
      { title: 'Pelumas' , route:"/pelumas" },
    ],
    homes: [
      { title: 'Home' , route:"/" },
    ],
    abouts: [
      { title: 'About' , route:"/about" },
    ]

  }),
}
</script>
<style>
.dropdown {
  margin-left: 20px;
}
</style>