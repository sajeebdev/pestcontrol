import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Pest Control Services</title>
        <link rel="icon" href="favicon.ico" type="x-icon" />
      </Head>
      <div class="loader">
        <div class="loader-box">
          <div class="lds-dual-ring"></div>
        </div>
      </div>
      <header>
        <div class="container">
          <a href="#" class="logo">
            Pest Control
          </a>
          <div class="tel">
            <a href="tel:+18558108263">(855) 810-82-63</a>
          </div>
        </div>
      </header>
      <div className="body">
        <div class="main-bg">
          <div class="container">
            <h1>
              Pest Control
              <br /> Services in <span class="city">USA</span>
            </h1>
            <p>Connect with Local Exterminator & Get Your Quote</p>
            <a href="tel:+18558108263" class="button-1">
              Call (855) 810-82-63
            </a>
            <div class="header-img">
              <img src="header-img.svg" alt="#" />
            </div>
          </div>
        </div>
        <div class="icons-wrap">
          <div class="container">
            <ul>
              <li>
                <div>
                  <img src="ico1.svg" alt="#" />
                </div>
                support
              </li>
              <li>
                <div>
                  <img src="ico2.svg" alt="#" />
                </div>
                accurate estimates
              </li>
              <li>
                <div>
                  <img src="ico3.svg" alt="#" />
                </div>
                expert Technicians
              </li>
              <li>
                <div>
                  <img src="ico4.svg" alt="#" />
                </div>
                years of pest control experience
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="bugs-list">
            <h2>Full Service Pest Control</h2>
            <p>Common pests we deal with:</p>
            <ul>
              <li>
                <img src="bug1.jpg" alt="#" />
                Bed bugs
              </li>
              <li>
                <img src="bug2.jpg" alt="#" />
                Cockroaches
              </li>
              <li>
                <img src="bug3.jpg" alt="#" />
                Termites
              </li>
              <li>
                <img src="bug4.jpg" alt="#" />
                Ants
              </li>
              <li>
                <img src="bug5.jpg" alt="#" />
                Rodents
              </li>
              <li>
                <img src="bug6.jpg" alt="#" />
                Flies
              </li>
              <li>
                <img src="bug7.jpg" alt="#" />
                Mosquitoes
              </li>
              <li>
                <img src="bug8.jpg" alt="#" />
                Fleas
              </li>
              <li>
                <img src="bug9.jpg" alt="#" />
                Spider
              </li>
              <li>
                <img src="bug10.jpg" alt="#" />
                Ticks
              </li>
              <li>
                <img src="bug11.jpg" alt="#" />
                Beetles
              </li>
              <li>
                <img src="bug12.jpg" alt="#" />
                Gnats
              </li>
              <li>
                <img src="bug13.jpg" alt="#" />
                Silverfish
              </li>
              <li>
                <img src="bug14.jpg" alt="#" />
                Earwigs
              </li>
              <li>
                <img src="bug15.jpg" alt="#" />
                Stinging pests
              </li>
              <li>
                <img src="bug16.jpg" alt="#" />
                Stink bugs
              </li>
              <li>
                <img src="bug17.jpg" alt="#" />
                Millipedes
              </li>
              <li>
                <img src="bug18.jpg" alt="#" />
                Weevils
              </li>
              <li>
                <img src="bug19.jpg" alt="#" />
                Fruit flies
              </li>
              <li>
                <img src="bug20.jpg" alt="#" />
                Centipede
              </li>
            </ul>
          </div>

          <div class="stats-box">
            <h2>Our Simple, 3-Step Process</h2>
            <ul>
              <li>
                <div>
                  <span>
                    <img src="big-ico1.svg" alt="#" />
                  </span>
                  <strong>Call Us</strong>
                  Call us to speak to a local
                  <br /> exterminator. Line is open 24/7
                </div>
              </li>
              <li>
                <div>
                  <span>
                    <img src="big-ico2.svg" alt="#" />
                  </span>
                  <strong>Schedule Service</strong>
                  If you wish to proceed with our service then our support agent
                  will schedule an inspection of your property
                </div>
              </li>
              <li>
                <div>
                  <span>
                    <img src="big-ico3.svg" alt="#" />
                  </span>
                  <strong>Free Property Inspection</strong>
                  Our specialists will provide a thorough inspection and advise
                  up front on costs involved for any treatment needed
                </div>
              </li>
            </ul>
          </div>

          <div class="bottom-box">
            <h3>
              Connect with Local
              <br /> Exterminator & Get Free Estimate
            </h3>

            <a href="tel:+18558108263" class="button-1">
              Call us 24/7 (855) 810-82-63
            </a>
          </div>
        </div>
        <footer>
          <div class="container">
            <a href="#" class="logo">
              Pest Control
            </a>
            <ul>
              <li>
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="california.html">California Privacy Rights</a>
              </li>
              <li>
                <a href="terms.html">Terms of Use</a>
              </li>
            </ul>
            <div class="tel2">
              <a href="tel:+18558108263">(855) 810-82-63</a>
            </div>
            <div id="legal"></div>
          </div>
        </footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/js.js" type="text/javascript"></script>
        <script src="https://www.marketcall.com/js/landing.js"></script>
        <script src="https://www.marketcall.com/js/mclead.js?program_id=0"></script>
        <script src="https://www.marketcall.com/js/mclegal.js?program_id=0"></script>
      </div>
    </div>
  );
}
