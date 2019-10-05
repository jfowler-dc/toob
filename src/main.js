// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

let config = {
    apiKey: "AIzaSyAHA5huBTw3zZn8grduBnmDPiU-ej-Lsr4",
    authDomain: "toob-e1e0a.firebaseapp.com",
    databaseURL: "https://toob-e1e0a.firebaseio.com",
    projectId: "toob-e1e0a",
    storageBucket: "toob-e1e0a.appspot.com",
    messagingSenderId: "184738608827"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user){
	if (!app) {
		app = new Vue({
			el: '#app',
			router,
			components: { App },
			template: '<App/>'
		})
	}
});


