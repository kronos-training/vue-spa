<template lang="html">
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item" exact>
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </router-link>
    </div>
    <div class="navbar-menu">
      <router-link to="/" class="navbar-item is-tab" exact>Home</router-link>
       <router-link to="/login" class="navbar-item is-tab">Login</router-link>
    </div>
  </nav>
</template>
