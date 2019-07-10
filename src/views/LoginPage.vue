<template>

 <v-container>
 <v-layout row align-center justify-center class="py-5">

                            
 </v-layout>

  <v-layout align-center justify-center row fill-height>
    <v-flex xs5 text-xs-center>
		
									
									
                  

      <v-layout align-center justify-center row fill-height elevation-5 style="min-height:500px;" white pa-4>
        <v-flex xs12 text-xs-center>
          <SignIn></SignIn>
          <v-btn round color="#df4a31" dark v-on:click="loginWithGoogle" style="width:100%;"><v-icon size="25" class="mr-2">fa-google</v-icon> Google 로그인</v-btn>
          <v-btn round color="#3b5998" dark v-on:click="loginWithFacebook" style="width:100%;"><v-icon size="25" class="mr-2">fa-facebook</v-icon> Facebook 로그인</v-btn>
         <SignUp></SignUp>
		</v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
 </v-container>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

import firebase from 'firebase/app';
import 'firebase/auth';
export default {
	name: 'LoginPage',
  data: () => ({
      email: "",
      password: "",
      
    })
    ,
	components: {
    SignUp,
    SignIn
	},
	methods: {
    
		async loginWithGoogle() {
			const result = await FirebaseService.loginWithGoogle()
      this.$store.state.accessToken = result.credential.accessToken
      this.$store.state.user = result.user
    },
		async loginWithFacebook() {
			const result = await FirebaseService.loginWithFacebook()
			this.$store.state.accessToken = result.credential.accessToken
      this.$store.state.user = result.user
      
    },

	

      
    

	},
	mounted() {
		console.log(this.$store.state)
	}
}
</script>
