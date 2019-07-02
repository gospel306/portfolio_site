<template>
  <v-layout>
    <v-flex xs12>
      <v-toolbar fixed>
      <v-btn icon to="/">
      <v-icon>home</v-icon>
      </v-btn>
        <v-toolbar-title>HanBeom Park</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
           <v-btn
            v-for="item in menu"
            :key="item.icon"
            :to="item.link"
            flat
          >{{ item.title }}</v-btn>
        </v-toolbar-items>

        <v-menu class="hidden-sm-and-up">
          <v-toolbar-side-icon slot="activator"><v-icon>reorder</v-icon></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon" :to="item.link">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
               </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>

    </v-flex>
  </v-layout>
</template>


<script>
export default {
   name: 'Myheader',
   props: {
   },
  data: () => ({
    menu: [
          { icon: 'home', title: 'HOME', link : "/" },
          { icon: 'portfolio', title: 'PORTFILIO' , link : "/portfolio"},
          { icon: 'post', title: 'POST' , link : "/post"},
          { icon: 'login', title: 'LOGIN' , link : "/login"},
        ],
  })
}

</script>