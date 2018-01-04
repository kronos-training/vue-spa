<template lang="html">
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item" exact>
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </router-link>
    </div>
    <div class="navbar-menu">
      <router-link to="/category/front-end" class="navbar-item is-tab">Front-end</router-link>
      <router-link :to="{ name: 'category', params: { id: 'mobile' }}" class="navbar-item is-tab">Mobile</router-link>
       <router-link to="/login" class="navbar-item is-tab">Login</router-link>
    </div>
  </nav>
</template>
