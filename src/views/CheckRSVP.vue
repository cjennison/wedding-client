<template>
  <div class="rsvp">
    <div class="col-md-4 col-md-offset-4">
      <b-card class="content-card ">
        <b-card-text>
          <h3 class="fancy">
            Your RSVP
          </h3>
          <p>
            {{ email }}
          </p>
          <b-alert v-if="displayError && !loading" show variant="danger">Something went wrong. Contact Chris.</b-alert>
          <div v-if="rsvp" style="padding-top: 10px;">
            <p>You are RSVPd!</p>
            <h4>Attendees:</h4>
            <div v-for="attendee in rsvp.attendees" v-bind:key="attendee.id">
              {{ attendee.first_name }} {{ attendee.last_name }} <br />
              <p v-if="attendee.vegetarian">Vegetarian</p>
              <p v-if="attendee.vegan">Vegan</p>
              <p v-if="attendee.gluten_free">Gluten Free</p>
            </div>
          </div>
          <div v-if="!rsvp && !loading" style="padding-top: 10px;">
            Could not find RSVP for this email
          </div>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>

import http from '../lib/http'

export default {
  name: 'rsvp',
  mounted() {
    this.getRsvp()
  },
  data() {
    return {
      displayError: false,
      email: this.$route.params.email,
      loading: true,
      rsvp: null,
    }
  },
  methods: {
    getRsvp() {
      const email = this.$route.params.email
      this.displayError = false
      http.get(`rsvps/${email}`).then((data) => {
        this.rsvp = data.data
        this.loading = false

        console.log(this)
      }).catch(() => {
        this.displayError = true
        this.loading = false
      })
    }
  },
}
</script>

<style lang="scss">
  .rsvp {
    text-align: center;
    padding-top: 5px;

    .text-input {
      margin-top: 5px;
    }

    .block {
      font-size: 25px;
      border: 1px solid white;
      margin: 0 40px;
      padding: 15px;
    }

    .fancy {
      font-family: 'Great Vibes', cursive;
      font-size: 30px;
    }

    .content-card {
      background: #465670;
      padding: 10px;
    }
  }
</style>

