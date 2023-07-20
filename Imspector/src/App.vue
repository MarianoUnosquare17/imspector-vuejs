<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <img src="./assets/logo.png" alt="logo" class="nav-logo" />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white"
            >Imspector</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link text-white"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'Tungsten';
  src: url('./assets/Tungsten.ttf');
}

@font-face {
  font-family: 'Valorant';
  src: url('./assets/Valorant.ttf');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-logo {
  height: 80px;
}

.nav-link {
  font-family: Tungsten;
  font-size: 25px !important;
}

#navbar {
  background-color: #3e3a4c !important;
}
</style>
