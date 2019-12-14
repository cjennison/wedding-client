<template>
  <div class="gifts">
    <div class="col-md-4 col-md-offset-4">
      <b-card class="content-card ">
        <b-card-text>
          <h3 class="fancy">
            The Hoard
          </h3>
          <p>
            We are actually skipping physical gifts!
          </p>
          <p>
            While we appreciate the thought we are realizing quickly that we are running
            out of room in our apartment for <i>stuff</i>.
            So instead we are asking for donations toward the down payment of our 
            first home. Then we'll have endless room for <i>stuff</i>!
          </p>
          <p>
            You can send a gift via our Honeyfund below or bring your gift with you!
          </p>
          <div>
            <a target="_blank" href="https://www.honeyfund.com/wedding/AchievementUnlocked">
              <b-button>Send a Wedding Gift →</b-button>
            </a>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gifts',
  mounted() {
    window.scrollTo(0, window.innerHeight - 40)
  }
}
</script>

<style lang="scss">
  .gifts {
    text-align: center;
    padding-top: 5px;

    .block {
      font-size: 25px;
      border: 1px solid white;
      margin: 0 40px;
      padding: 15px;
    }

    .details {
      padding: 5px;
      font-size: 16px;
    }

    .banner {
      max-width: 400px;
      display: inline-block;
    }

    .fancy {
      font-family: 'Great Vibes', cursive;
      font-size: 30px;
    }

    .content-card {
      background: #465670;
      padding: 10px;
    }

    .hotel-link {
      color: #d5d2ff;
    }
  }
</style>

