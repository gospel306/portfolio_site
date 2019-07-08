<template>

 <v-container>
 <v-layout row align-center justify-center class="py-5">

                            
 </v-layout>

  <v-layout align-center justify-center row fill-height>

    <v-flex xs5 text-xs-center>
		<v-form @submit.prevent="onSignin">

                                <!-- <v-layout row> -->
                                <v-flex xs12>
                                    <h1 class="text-xs-center mb-5">Login</h1>
                                    <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required></v-text-field>
                                </v-flex>

                                <v-flex xs12>
                                    <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
                                </v-flex>

                                <v-flex xs12 class="py-3">
                                    <div class="text-xs-center">
                                        <v-btn outline type="submit"  v-on:click="toggleSignIn" :disabled="loading" :loading="loading">
                                            Sign in
                                            <v-icon right>lock_open</v-icon>
                                            <span slot="loader" class="custom-loader">
                                            <v-icon light>cached</v-icon>
                                        </span>
                                        </v-btn>
                                    </div>
									
									<SignUp></SignUp>
                                </v-flex>
                            </v-form>
      <v-layout align-center justify-center row fill-height elevation-5 style="min-height:500px;" white pa-4>
        <v-flex xs12 text-xs-center>
          <v-btn round color="#df4a31" dark v-on:click="loginWithGoogle" style="width:100%;"><v-icon size="25" class="mr-2">fa-google</v-icon> Google 로그인</v-btn>
          <v-btn round color="#3b5998" dark v-on:click="loginWithFacebook" style="width:100%;"><v-icon size="25" class="mr-2">fa-facebook</v-icon> Facebook 로그인</v-btn>
         
		</v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
 </v-container>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import SignUp from '../components/SignUp'
export default {
	name: 'LoginPage',
	data() {
		return {}
	},
	components: {
		SignUp
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
		toggleSignIn() {
      if (FirebaseService.auth().currentUser) {
        // [START signout]
        FirebaseService.auth().signOut();
        // [END signout]
      } else {
        var email = this.email;
        var password = this.password;
        if (email==null||email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (email==null||password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        FirebaseService.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }	

	},
	mounted() {
		console.log(this.$store.state)
	}
}
</script>
