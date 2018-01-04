<template lang="html">
  <div class="content">
    <div v-if="isAuthenticated">
      Hello authenticated user!

      <p>Name: {{ profile.firstName }}</p>
      <p>Favorite Sandwich: {{ profile.favoriteSandwich }}</p>

      <button @click="logout()" class="button is-primary">Logout</button>
    </div>
    <div v-else>
      <h2>Login</h2>
    	<div class="field is-horizontal">
    		<div class="field-label is-normal">
    		  <label class="label">Username</label>
    		</div>
    		<div class="field-body">
    		  <div class="field">
    			<div class="control">
    			  <input class="input" type="text" placeholder="Your username" v-model="username">
    			</div>
    		  </div>
    		</div>
    	</div>
    	<div class="field is-horizontal">
    		<div class="field-label is-normal">
    		  <label class="label">Password</label>
    		</div>
    		<div class="field-body">
    		  <div class="field">
    			<div class="control">
    			  <input class="input" type="password" placeholder="Your password" v-model="password">
    			</div>
    		  </div>
    		</div>
    	</div>
    	<div class="field is-horizontal">
    		<div class="field-label">
    		  <!-- Left empty for spacing -->
    		</div>
    		<div class="field-body">
    		  <div class="field">
    			<div class="control">
    			  <button class="button is-primary" v-on:click="login">
    				Login
    			  </button>
    			</div>
    		  </div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
  import appService from '../app.service'

  export default {
    data () {
      return {
        username: '',
        password: '',
        isAuthenticated: false,
        profile: {}
      }
    },
    watch: {
      isAuthenticated (val) {
        if (val) {
          appService.getProfile()
            .then(profile => {
              this.profile = profile
            })
        } else {
          this.profile = {}
        }
      }
    },
    methods: {
      login () {
        // username: bill, pass: vuejs
        appService.login({ username: this.username, password: this.password })
          .then(data => {
            window.localStorage.setItem('token', data.token)
            window.localStorage.setItem('tokenExpiration', data.expiration)

            this.username = ''
            this.password = ''
            this.isAuthenticated = true
          })
          .catch(() => {
            window.alert('Could not login!')
          })
      },
      logout () {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('tokenExpiration')
        this.isAuthenticated = false
      }
    },
    created () {
      let expiration = window.localStorage.getItem('tokenExpiration')
      let unixTimestamp = new Date().getTime() / 1000
      if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
        this.isAuthenticated = true
      }
    }
  }
</script>

<style lang="css">
</style>
