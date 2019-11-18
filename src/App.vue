<template>
  <div id="app" class="full-height">
    <div class="container-fluid full-height">
      <div class="row full-height">
        <div id="no-padding" class="col-md-12 full-height">
          <div class="full-height">
            <div>
              <router-link to="/">Home</router-link> |
              <router-link to="/story">Story</router-link> |
              <router-link to="/rsvp">RSVP</router-link>
            </div>
            <div>
              <router-view>
                Content for Home
              </router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {

  },
  data() {
    return {

    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
