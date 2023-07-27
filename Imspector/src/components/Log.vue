<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <div class="mt-3">
        <router-link to="/signup" class="signup-link"
          >Create an account</router-link
        > <br>
        <router-link to="/signup" class="signup-link"
          >Forgot your password?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Tungsten';
  src: url('./assets/Tungsten.ttf');
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  
}

.login-card {
  width: 350px;
  padding: 20px;
  background-color: #3e3a4c;
}

.login-title {
  color: white;
  font-family: Tungsten;
  font-size: 35px;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}


.btn-primary {
  font-family: Tungsten ; 
  display: block;
  width: 100%;
  padding: 10px;
  border: none !important;
  border-radius: 5px !important;
  background-color: #3be0c3 !important;
  color: white !important;
  font-size: 18px !important;
  font-weight: bold;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #16b199!important;
}

.signup-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
