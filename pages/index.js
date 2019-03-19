import Layout from '../components/Layout.js';
import '../bootstrap.css';
import '../responsive.css';
import '../styles.css';

const Index = () => (
  <Layout>
    <div className="main-area">
      <section
        className="left-section"
        style={{ backgroundImage: 'url(static/background.jpg)' }}
      />

      <section className="right-section full-height">
        <a className="logo" href="#">
          <img
            src="static/startenderlogo.png"
            alt="Startender App"
            style={{ height: 100 }}
          />
        </a>

        <div className="display-table">
          <div className="display-table-cell">
            <div className="main-content">
              <h1 className="title">
                <b>Get Ready</b>
              </h1>
              <p className="desc">We're almost ready to start. And you?</p>

              <div className="email-input-area">
                <form
                  action="https://starmeapp.us20.list-manage.com/subscribe/post?u=81240b9e0510742269bc1b333&amp;id=e42596349b"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  novalidate>
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <input
                        type="email"
                        name="EMAIL"
                        className="email email-input"
                        id="mce-EMAIL"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="clear">
                      <input
                        className="submit-btn"
                        type="submit"
                        value="NOTIFY ME"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                      />
                    </div>
                    <div id="mce-responses" class="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: 'none' }}
                      />
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div
                      style={{ position: 'absolute', left: '-5000px' }}
                      aria-hidden="true">
                      <input
                        type="text"
                        name="b_81240b9e0510742269bc1b333_e42596349b"
                        tabindex={-1}
                        value=""
                      />
                    </div>
                  </div>
                </form>
              </div>

              <p className="post-desc">
                Sign up now to get early notification of our lauch date!
              </p>
            </div>
          </div>
        </div>

        {/* <ul className="footer-icons">
          <li>Stay in touch : </li>
          <li>
            <a href="#">
              <i className="ion-social-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ion-social-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ion-social-instagram-outline" />
            </a>
          </li>
        </ul> */}
      </section>
    </div>
  </Layout>
);

export default Index;
