<template>
    <div class="signup-container">
      <div class="signup-card">
        <h2 class="signup-title">Create an Account</h2>
        <form @submit.prevent="signup">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" class="form-control" placeholder="Password" required>
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
        <div class="mt-3">
          <router-link to="/" class="login-link">Back to Log In</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      signup() {
        // Aquí puedes agregar la lógica para registrar al usuario
        // Por simplicidad, simplemente mostraremos un mensaje en la consola
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        // Aquí podrías hacer una llamada a un backend para crear una cuenta
      }
    }
  };
  </script>
  
  <style>
  /* .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
  }
  
  .signup-card {
    width: 350px;
    padding: 20px;
    background-color: #2e2e2e;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .signup-title {
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
    background-color: #121212;
    color: #f9ca2f;
  }
  
  .form-control::placeholder {
    color: #f9ca2f;
  }
  
  .btn-primary {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f9ca2f;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #d9b41b;
  }
  
  .login-link {
    color: #f9ca2f;
    text-decoration: none;
  }
  
  .login-link:hover {
    text-decoration: underline;
  } */
  </style>
  