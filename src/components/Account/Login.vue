<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" label="Login" type="email"></v-text-field>
                  <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="onSignin" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
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
      return this.$store.getters.authError !== null;
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
    onSignin() {
      let payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signUserIn", payload);
    },
    registerAccount() {
      this.$router.push("/register");
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