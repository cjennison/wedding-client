<template>
  <div class="story">
    <div class="col-md-4 col-md-offset-4">
      <b-card class="content-card ">
        <b-card-text>
          <div style='text-align: left;'>
            <h4 class="fancy">
              Our Story:
            </h4>
            <div class="details">
              <p>
                These career Healer and DPS (damage) class players met through mutual friends and many nights of DotA 2 (Defense of the Ancients). Eventually all of them became close friends and decided to meet up in Columbus, Ohio.
              </p>
              <p>
                The DPS decided to risk the party integrity by driving from Greenfield, MA to Columbus, OH
                during a snow storm. But that didn't stop him, but forgetting a phone charger did. This resulted in him
                being stranded in Albany, NY asking people on the streets where one can find an iPhone 5 charger.
              </p>
              <p>Eventually the party met in Columbus.</p>
              <p>A month later, the healer - having nothing to heal - moved to Western Mass. Soon the two
                players connected growing careers and lives in real life. The DPS was focused on college while the Healer
                tried to keep both players alive for the "Early 20's" epic boss fight.
              </p>
              <p>
                The DPS finished school and the duo moved to Boston to build even better careers. The rest is history, give or a take a few critical successes.
              </p>
              <p>
                They are here today becoming a 2 person party forever, so that the DPS can finally stand in the fire knowing his healer will always keep him up.
              </p>
            </div>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'story',
  mounted() {
    window.scrollTo(0, window.innerHeight - 40)
  }
}
</script>

<style lang="scss">
  .story {
    text-align: center;
    padding-top: 10px;

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

