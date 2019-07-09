<template>
  <v-layout>
    <v-flex xs12>
      <v-toolbar class="blue-grey darken-3" fixed dark>
      <v-btn icon large to="/">
      <v-icon>home</v-icon>
      </v-btn>

        <v-toolbar-title to="/" class="mainName">공수래공수거</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
           <v-btn
           class="menus"
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
//H
export default {
   name: 'Myheader',
   props: {
   },
  data: () => ({
    menu: [
          { icon: 'home', title: '홈', link : "/" },
          { icon: 'portfolio', title: '포트폴리오' , link : "/portfolio"},
          { icon: 'post', title: '포스트' , link : "/post"},
          { icon: 'login', title: '로그인' , link : "/login"},
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

<style>
.mainName {
  font-family: 'Song Myung';
  /* font-size: 2vw; */
}

.menus {
  font-family: 'Song Myung';
  /* font-size: 1.5vw; */
}
</style>