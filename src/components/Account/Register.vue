<template>
  <div class="login-page">
    <div class="form">
      <form @submit.prevent="registerUser">
        <h2>Register</h2>
        <b-alert v-if="anyErrors" show variant="danger">{{error}}</b-alert>
        <input type="text" v-model="username" placeholder="Username" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
        <p class="passwordMessage" v-if="comparePasswords">Passwords does not match</p>
        <p class="message">Already have an account?</p>
        <p class="message">
          <a @click="loginAccount">Sign in here</a>
        </p>
        <button type="submit" :disabled="comparePasswords">Register</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      // samePassword: false
    };
  },
  computed: {
    comparePasswords: function() {
      if (this.password && this.confirmPassword) {
        if (this.password === this.confirmPassword) {
          // this.samePassword = false
          return false;
        } else {
          // this.samePassword = true
          return true;
        }
      } else {
        return true;
      }
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      let error = null;
      if (this.anyErrors) {
        error = this.$store.getters.authError;
      }
      return error;
    },
    anyErrors() {
      return (
        this.$store.getters.authError !== null
      );
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    registerUser() {
      let payload = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signUserUp", payload);
    },
    loginAccount() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.login-page {
  width: 450px;
  padding: 10% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 450px;
  margin: 0 auto 100px;
  padding-top: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2%;
}

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 15px 0 0px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
}

.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: rgb(25, 151, 209);
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 0px 0px 6px 6px;
}

.form button:hover,
.form button:active,
.form button:focus {
  background: rgb(32, 161, 221);
}

.form button:disabled {
  background: rgb(134, 134, 134);
}

.form .message {
  margin: 5px 0 0;
  color: #b3b3b3;
  font-size: 14px;
}

.form .passwordMessage {
  margin: 5px 0 0;
  color: #ff0000;
  font-size: 14px;
}

.form .message a {
  color: rgb(25, 151, 209);
  text-decoration: underline;
  font-size: 16px;
}

.form .message a:hover,
.form .message a:active,
.form .message a:focus {
  color: rgb(32, 161, 221);
  cursor: pointer;
}
</style>