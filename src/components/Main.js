import PropTypes from 'prop-types'
import React from 'react'
import family from '../images/family.jpg'
import pic03 from '../images/pic03.jpg'
import replate from '../images/replate_three_panel.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={replate} alt="" />
          </span>
          <p>
          A demo app that allows users to sign-up as businesses or volunteers, 
          and simulates the job flow of the RePlate platform (re-plate.org). 
          Businesses can post/edit/delete food pickups, and volunteers can claim/complete 
          these pickups that they'll in turn deliver to shelters and soup kitchens. 

          </p>
          <p>
          Examples of: Java, Fragment Interactions, Handmade Network Adapter, RegEx Field Validation, CRUD functionality
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={family} alt="" />
          </span>
          <p>
          Pictured here with my wonderful wife,
          Emily, and our 1-year old son, Kentucky.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/spencer-stock/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            
            <li>
              <a href="https://facebook.com/spencerstock" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/spencerstock"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:spencerstock@gmail.com'"
                className="icon fa-envelope"
              >
                <span className="label">E-mail</span>
              </a>
            </li>
            
            
            
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
