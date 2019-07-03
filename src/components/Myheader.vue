<template>
  <v-layout>
    <v-flex xs12>
      <v-toolbar fixed>
      <v-btn icon to="/">
      <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="info" @click="bookmark()">Book mark</v-btn>
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
//Haaaaaaa
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
  }),
  methods:{
    
   bookmark:function(){
	   	
	if (window.sidebar && window.sidebar.addPanel) { // Firefox <23
		window.sidebar.addPanel(document.title,window.location.href,'');

	} else if(window.external && ('AddFavorite' in window.external)) { // Internet Explorer
		window.external.AddFavorite(location.href,document.title); 

	} else if(window.opera && window.print || window.sidebar && ! (window.sidebar instanceof Node)) { // Opera <15 and Firefox >23
		/**
		 * For Firefox <23 and Opera <15, no need for JS to add to bookmarks
		 * The only thing needed is a `title` and a `rel="sidebar"`
		 * To ensure that the bookmarked URL doesn't have a complementary `#` from our trigger's href
		 * we force the current URL
		 */
    triggerBookmark.attr('rel', 'sidebar').attr('title', document.title).attr('href', window.location.href);
		return true;
	
	} else { // For the other browsers (mainly WebKit) we use a simple alert to inform users that they can add to bookmarks with ctrl+D/cmd+D
		
		alert('You can add this page to your bookmarks by pressing ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D on your keyboard.');
	
	}
	// If you have something in the `href` of your trigger
  return false;
   }
   }
}

</script>