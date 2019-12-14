<template>
  <div class="admin">
    <b-card class="form-container" v-if="!authenticated">
      <b-card-text>
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Admin Password:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="authForm.secret"
              type="password"
              required
              placeholder="Enter admin password"
            ></b-form-input>
          </b-form-group>
        </b-form>
        <b-button href="#" variant="primary" @click="submitAuth">Submit</b-button>
      </b-card-text>
    </b-card>

    <div v-if="authenticated">
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  created() {
    const token = localStorage.getItem('token')
    this.storedToken = token
  },
  data() {
    return {
      authenticated: false,
      storedToken: null,
      authForm: {
        secret: '',
      },
    }
  },
  methods: {
    submitAuth() {
      console.log(this.authForm.secret)
      axios.post()
    },

    checkAuth() {

    }
  }
}
</script>

<style lang="scss">
  .admin {
    padding: 30px;

    .form-container {
      width: 400px;
      padding: 15px;
    }

    .banner {
      max-width: 400px;
      display: inline-block;
    }
  }
</style>

