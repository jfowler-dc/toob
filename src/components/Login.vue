<template>
  <div id="login">
    <AppHeader pageTitle="Sign In" hamburger="true" />
  	<div id="form">
      <input type="email" v-model="email" placeholder="Email" v-on:keyup.13="signIn"><br>
      <input type="password" v-model="password" placeholder="Password" v-on:keyup.13="signIn"><br>
      <button @click="signIn">Sign In</button> 
    </div>
  	<p>Need an account? Sign Up <router-link to="/sign-up">here</router-link>!</p> 
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(user)
          this.$router.replace('favorites')
          // firebase.database().ref('/users').child(user.user.uid).update({
          //   email: user.user.email,
          //   loginTime: new Date().toUTCString(),
          //   loginTimeEpoch: Date.now(),
          //   loggedIn: true
          // })
          // localStorage.setItem('email', this.email)
          // localStorage.setItem('password', this.password)
        },
        (err) => {
          //alert('Oops. ' + err.message)
          this.alertMessage('Oops! ' + err.message, 'error')
        }
      );
    }
  },
  components: {
    AppHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {margin-top:30px;}
input {width:100%; max-width:100%; font-size:16px; margin:auto; margin-bottom:15px; border:1px solid #000; padding:15px; box-sizing:border-box;}
button {margin:auto; display:block; font-size:18px; font-weight:bold; cursor:pointer; border:0; padding:10px 15px; background:#fff; color:#000; border:2px solid #000;}
p {font-size:16px; text-align:center; margin-bottom:25px;}
p a {text-decoration:underline; cursor:pointer;}
</style>
