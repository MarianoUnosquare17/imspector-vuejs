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
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  /* height: 100vh; */
}

.login-card {
  width: 350px;
  padding: 20px;
}

.login-title {
  color: #f9ca2f;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #f9ca2f;
  border-radius: 5px;
  color: #f9ca2f;
}

.form-control::placeholder {
  color: #f9ca2f;
}

.btn-primary {
  display: block;
  width: 100%;
  padding: 10px;
  border: none !important;
  border-radius: 5px !important;
  background-color: #f9ca2f !important;
  color: white !important;
  font-size: 16px !important;
  font-weight: bold;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #d9b41b !important;
}

.signup-link {
  color: #f9ca2f;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
