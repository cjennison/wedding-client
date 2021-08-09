<template>
  <div class="home row">
    <div class="col-md-4 col-md-offset-4">
      <b-card class="content-card ">
        <b-card-text>
          <h3 class="fancy">
            We are getting married!
          </h3>
          <p class="fancy block" style="font-size: 25px;">
            Two story lovers become one to enjoy adventures together and in our passions till the end of time.
          </p>
          <div style='text-align: left;'>
            <h4 class="fancy">
              When:
            </h4>
            <div class="details">
              <h4>Friday September 3rd, 2020. </h4>
              Ceremony <b>5pm</b> <br />
              Reception <b>6pm</b> <br />

              <small>*Additional events to be scheduled independently</small>
            </div>
          </div>
        </b-card-text>
      </b-card>
      <hr />
      <b-card class="content-card">
        <b-card-text>
          <div style='text-align: left;'>
            <h4 class="fancy">
              Where:
            </h4>
            <div class="details">
              <h4>Look Park. Florence, MA</h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8707995602344!2d-72.690429984304!3d42.34527787918791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6d7c9422772a5%3A0x61a1d1084255df81!2sLook%20Memorial%20Park!5e0!3m2!1sen!2sus!4v1576330318406!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
          </div>
        </b-card-text>
      </b-card>
      <hr />
      <b-card class="content-card ">
        <b-card-text>
          <div style='text-align: left;'>
            <h4 class="fancy">
              Details:
            </h4>
            <div class="details">
              <p>
                The Ceremony is taking place at the <b>Sanctuary at Willow Lake</b>, a small location by the pond at Look Park. <br />
              </p>
              <p>
                Seating for the cermony is very limited. You will be notified if you are invited to the ceremony. Otherwise you can wait at the Reception!
              </p>
            </div>
          </div>
        </b-card-text>
      </b-card>
      <hr />
      <b-card class="content-card ">
        <b-card-text>
          <div style='text-align: left;'>
            <h4 class="fancy">
              Reception:
            </h4>
            <div class="details">
              <p>
                The Reception is at the <b>Garden House</b>, located at the entrance to Look Park<br />
              </p>
              <p>
                Parking is available on site. <br />
              </p>
              <p>
                Appetizers will be served at 6. Dinner at 6:30. Then we dance all night! Alcohol will be provided.
              </p>
              <p>
                <b>Absolutely no outside Alcohol allowed or the event will be shut down.</b>
              </p>
              <small>*Times are subject to change</small>
            </div>
          </div>
        </b-card-text>
      </b-card>
      <hr />
      <b-card class="content-card ">
        <b-card-text>
          <div style='text-align: left;'>
            <h4 class="fancy">
              Hotel:
            </h4>
            <div class="details">
              <p>
                We recommend booking early as it is Labor day weekend.
              </p>
              <p>
                <a class="hotel-link" href="https://goo.gl/maps/m5XAmbjDXwGus5xe7">Fairfield Inn & Suites by Marriot Northhampton</a><br />
                <a class="hotel-link" href="https://goo.gl/maps/MBsYxCTDWEMVSCGe6">Hampton Inn Hadley</a><br />
                <a class="hotel-link" href="https://g.page/dhotelsuites?share">DHotel Suites and Spa</a><br />
                <a class="hotel-link" href="https://goo.gl/maps/UDuVz6Chyws9qXg2A">Fairfield Inn & Suites by Marriott Holyoke</a><br />
              </p>
              <p>
                <a class="hotel-link" href="https://www.airbnb.com/a/Northampton--Massachusetts--United-States?af=43720035&c=.pi0.pk56706516419_387980181985_c_460917530633&sem_position=1t1&sem_target=aud-428713872427:kwd-460917530633&location_of_interest=&location_physical=9002007&localized_ghost=true&gclid=Cj0KCQiArdLvBRCrARIsAGhB_syO-Jy5tWZEf7keZ0_llwLDk_-FqOTgYCQTcof9xvlSqJxFKVKhpnoaAoa1EALw_wcB">Airbnb</a>
              </p>

            </div>
          </div>
        </b-card-text>
      </b-card>
      <hr />
      <b-card class="content-card ">
        <b-card-text>
          <div style='text-align: left;'>
            <h4 class="fancy">
              Travel:
            </h4>
            <div class="details">
              <p>
                We recommend arriving to the ceremony a little early and if possible approach Florence from north or south instead
                of through Northhampton due to 4-5pm traffic. <br />
                South side via Florence Rd through Easthampton. <br />
                North side via Rt 9.
              </p>
            </div>
          </div>
        </b-card-text>
      </b-card>
      <hr />
    </div>

  </div>

</template>

<script>
export default {
  name: 'home',
  mounted() {
    window.scrollTo(0, window.innerHeight - 40)
  }
}
</script>

<style lang="scss">
  .home {
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

