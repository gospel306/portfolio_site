<template>
  <v-app>
	
	<Myheader/>

	  <GoTop/>

	

    <v-content>
      <router-view/>
    </v-content>
	<Myfooter/>	
  </v-app>
</template>

<script>

import store from './store'
import Myfooter from './components/Myfooter'
import Myheader from './components/Myheader'
import GoTop from '@inotom/vue-go-top';
export default {
	name: 'App',
	store,
	components: {
	GoTop,
    Myfooter,
    Myheader,
	},
	data() {

		return {
			//
		}
	},

}

</script>
