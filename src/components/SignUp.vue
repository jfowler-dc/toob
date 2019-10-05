<template>
  <div id="sign-up">
    <AppHeader pageTitle="Sign Up" hamburger="true" />

  	<div id="form">
      <p>Create a new account below!</p>
      <input type="email" v-model="email" placeholder="Email" v-on:keyup.13="signUp"><br>
      <input type="password" v-model="password" placeholder="Password" v-on:keyup.13="signUp"><br>
      <button @click="signUp">Sign Up</button> 
    </div>
  	<p>or go back to <router-link to="/login">login</router-link>.</p> 
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log(user)
          this.$router.replace('favorites')
        },
        (err) => {
          //alert('Oops. ' + err.message)
          this.alertMessage('Oops! ' + err.message, 'error')
        }
      )
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
