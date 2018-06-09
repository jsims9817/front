<template>
  <div class="row login">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="form-group">
            <input v-model="email" class="form-control" type="email" placeholder="Email"/>
          </div>
          <div class="form-group">
            <input v-model="password" class="form-control" type="password" placeholder="Password"/>
          </div>
          <button @click="login" class="btn btn-success pull-right">Login</button>
        </div>

      </div>
    </div>
  </div>﻿
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      var data = {
        client_id: 2,
        client_secret: 'brs1kOmO181NTHIxr4Icb0BXvkbce8we57kT4Rtp',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }

      this.$http.post("http://127.0.0.1:8000/oauth/token", data)
        .then(response => {
          this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        })
    }
  }
}

</script>

<style>

.panel-body {
  max-width: 300px;
  width: 100%;
}

.login .panel {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

</style>
