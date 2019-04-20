import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/fraservalleyrowingclub/">@fraservalleyrowingclub</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          The <a href="https://fraservalleyrowing.com/">Fraser Valley Rowing Club</a> acknowledges the financial assistance of the Province of British Columbia.
        </span>
      </div>
    </footer>
  </div>
)
