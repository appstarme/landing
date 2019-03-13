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
            src="static/logo.svg"
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
                <form method="post">
                  <input
                    className="email-input"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button className="submit-btn" name="submit" type="submit">
                    <b>NOTIFY ME</b>
                  </button>
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
