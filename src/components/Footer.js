import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'
import { Link } from 'gatsby'
import LogoFooter from './LogoFooter'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/fraservalleyrowingclub/">@fraservalleyrowingclub</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <section class="register">
      <div class="container">
        <h2>Register through Rowing Canada</h2>
        <a class="Button Button--Register" href="https://membership.rowingcanada.org/JoinProgram?id=185">Register</a>
      </div>
    </section>
    <footer className="footer">
      <div className="container taCenter">
        <div class="brand">
          <Link to="/">
            <LogoFooter/>
          </Link>
        </div>
        <span>
          The <a href="https://fraservalleyrowing.com/">Fraser Valley Rowing Club</a> acknowledges the financial assistance of the Province of British Columbia.
        </span>
      </div>
    </footer>
  </div>
)
