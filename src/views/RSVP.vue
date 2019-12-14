<template>
  <div class="rsvp">
    <div class="col-md-4 col-md-offset-4">
      <b-card class="content-card ">
        <b-card-text>
          <h3 class="fancy">
            RSVP
          </h3>
          <b-alert v-if="displayError" show variant="danger">There was an issue submitting the form. Please reach out to Chris.</b-alert>
          <p style="text-align: left;">
            Please enter in your RSVP details and all attendees coming with you. Your RSVP details are
            tied to your email address. If you have already RSVPd, your previous RSVP will be overwritten. <br />
            <small style="text-align: left;">Include children's names as well</small>
          </p>
          <p style="text-align: left">If you have already sent back an RSVP card you can still fill out this form.</p>
          <b-form>
            <b-form-group
              id="input-group-1"
              label="RSVP Contact"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                class="text-input"
                v-model="rsvpForm.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
              <b-form-input
                id="input-1"
                class="text-input"
                v-model="rsvpForm.phone"
                type="text"
                required
                placeholder="Enter phone number"
              ></b-form-input>
            </b-form-group>
          </b-form>
          <div style="text-align:left;" v-for="(attendee, index) in rsvpForm.attendees" v-bind:key="index">
            <b-form>
              <b-form-group
                id="input-group-1"
                :label="'Attendee ' + (index+1)"
                label-for="input-1"
              >
                <b-button @click="() => removeAttendee(index)" v-if="index > 0" style="position: absolute; right: 25px; margin-top: -40px;" variant="danger">Remove</b-button>
                <b-form-input
                  id="input-4"
                  class="text-input"
                  v-model="attendee.first_name"
                  required
                  placeholder="First name"
                ></b-form-input>
                <b-form-input
                  id="input-4"
                  class="text-input"
                  v-model="attendee.last_name"
                  required
                  placeholder="Last name"
                ></b-form-input>
                <div>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="attendee.vegetarian"
                    name="vegetarian"
                  >
                    &nbsp;Vegetarian
                  </b-form-checkbox>
                  <b-form-checkbox
                    id="checkbox-2"
                    v-model="attendee.vegan"
                    name="vegan"
                  >
                    &nbsp;Vegan
                  </b-form-checkbox>
                  <b-form-checkbox
                    id="checkbox-3"
                    v-model="attendee.gluten_free"
                    name="gf"
                  >
                    &nbsp;Gluten Free
                  </b-form-checkbox>
                </div>
              </b-form-group>
            </b-form>
          </div>
          <b-button variant="info" @click="addAttendee">+ Add Attendee</b-button>
        </b-card-text>
        <hr />
        <div style="text-align: right;">
          <small v-if="!formValid()">
            Please fill out all fields
          </small>
          <b-button variant="success" :disabled="!formValid()" @click="submit">Submit RSVP</b-button>
        </div>
      </b-card>
      <hr />
      <b-card class="content-card ">
        <b-card-text>
          <p>Forgot if you RSVPd? Check here</p>
          <b-form>
            <b-form-group
              id="input-group-1"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                class="text-input"
                v-model="checkForm.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <b-button variant="success" @click="submitCheck">Check RSVP</b-button>
          </b-form>
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
    window.scrollTo(0, window.innerHeight - 40)
  },
  data() {
    return {
      displayError: false,
      checkForm: { email: '' },
      rsvpForm: {
        email: '',
        phone: '',
        attending: true,
        attendees: [{
          first_name: '',
          last_name: '',
          vegetarian: false,
          vegan: false,
          gluten_free: false,
        }],
      },
    }
  },
  methods: {
    addAttendee() {
      this.rsvpForm.attendees.push({
          first_name: '',
          last_name: '',
          vegetarian: false,
          vegan: false,
          gluten_free: false,
        })
    },

    removeAttendee(i) {
      this.rsvpForm.attendees.splice(i, 1)
    },

    formValid() {
      const form = this.rsvpForm
      if (!form.email) return false
      if (!form.email.includes('@')) return false

      let valid = true
      form.attendees.forEach((a) => {
        if (!a.first_name || !a.last_name) valid = false
      })

      return valid
    },

    submit() {
      this.displayError = false
      http.post('rsvps', { rsvp: this.rsvpForm, attendees: this.rsvpForm.attendees }).then(() => {
       this.$router.push(`/rsvp/${this.rsvpForm.email}`)
      }).catch(() => {
        this.displayError = true
      })
    },

    submitCheck() {
      this.$router.push(`/rsvp/${this.checkForm.email}`)
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

