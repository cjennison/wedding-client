<template>
  <div id="app" class="full-height">
    <div class="container-fluid full-height">
      <div class="abs-text">
        <div class="title">
          Chris & Jess
        </div>
        <div class="bottom-right">
          Achievement Unlocked
        </div>
      </div>
      <div class="row img-container">
        <div class="col-md-8 col-md-offset-2" style="height: 100%;">
          <div class="chris-jess"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="nav">
              <router-link to="/home">Home</router-link> |
              <router-link to="/details">Details</router-link> |
              <router-link to="/rsvp">RSVP</router-link> | 
              <router-link to="/story">Our Story</router-link> |
              <router-link to="/gifting">Gifting</router-link>
            </div>
        </div>
      </div>
      <div id="content" class="row content">
        <div id="no-padding" class="col-md-12">
          <div class="full-height">
            
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
  watch:{
    $route (to, from){
      document.getElementById("content").scrollIntoView();
    }
  },
  created() {

  },
  data() {
    return {
      
    }
  }
}

</script>

<style lang="scss">
html, body {
  background: #394c69;
  scroll-behavior: smooth;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: #394c69;
}

.img-container {
  background-image: url(../public/images/bg.jpg);
  height: 100%;
}

.content {
  background: #394c69;
  margin-top: -1px;
  font-size: 14px;
}

.chris-jess {
  background-image: url(../public/images/header.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  height: 100%;
  width: 50%;
  background-position-y: -30px;

  position: relative;
  left: 50%;
  margin-left: -25%;
  background-position: center;
}

.abs-text {
  z-index: 999999;
  font-family: 'Great Vibes', cursive;
  position: absolute;
  font-size: 50px;

  .bottom-right {
    margin-left: 5px;  
  }
}

.nav {
  text-align: center;
  margin-top: -30px;
  color: white;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.3);

  a {
    color: white;
    text-decoration: none;

    &.router-link-active {
      font-weight: 900;
    }
  }
}

.fancy {
  font-family: 'Great Vibes', cursive;
  font-size: 18px;
}

</style>
