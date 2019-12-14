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
        <b-button variant="primary" @click="submitAuth">Submit</b-button>
      </b-card-text>
    </b-card>

    <div v-if="authenticated">
      <b-button variant="info" @click="getAttendees">Refresh</b-button>
      <b-table :fields="fields" :items="attendees">
        <template v-slot:cell(actions)="data">

        <b-button @click="() => confirm(data)" v-if="!data.item.confirmed" variant="success">Confirm</b-button>
        <b-button @click="() => confirm(data)" v-if="data.item.confirmed" variant="warning">Unconfirm</b-button>
      </template>
      </b-table>
    </div>

  </div>
</template>

<script>
import http from '../lib/http'

export default {
  name: 'home',
  created() {
    const token = localStorage.getItem('token')
    this.storedToken = token
  },

  mounted() {
    this.checkAuth()
  },

  data() {
    return {
      authenticated: false,
      storedToken: null,
      authForm: {
        secret: '',
      },
      attendees: [],
      fields: [
          'first_name',
          'last_name',
          'confirmed',
          'vegan',
          'vegetarian',
          'gluten_free',
          { key: 'actions', label: 'actions' },
        ],
    }
  },
  methods: {
    confirm(attendee) {
      const body = {
        confirmed: !attendee.item.confirmed
      }

      http.post(`attendees/${attendee.item.id}/confirm`, body, { headers: { authorization: this.storedToken }}).then((payload) => {
        this.getAttendees()
      })
    },

    submitAuth() {
      http.post('auth-admin', this.authForm).then((payload) => {
        this.storedToken = payload.data
        localStorage.setItem('token', this.storedToken)

        this.checkAuth()
      })
    },

    checkAuth() {
      http.post('certify-admin', { token: this.storedToken }).then((payload) => {
        if (payload.data) {
          this.authenticated = true

          this.getRSVPS()
          this.getAttendees()
        } else {
          this.authenticated = false
        }
      })
    },

    getRSVPS() {
      http.get('rsvps', { headers: { authorization: this.storedToken }}).then((payload) => {
        console.log(payload)
      })
    },

    getAttendees() {
      http.get('attendees', { headers: { authorization: this.storedToken }}).then((payload) => {
        this.attendees = payload.data
      })
    },
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

