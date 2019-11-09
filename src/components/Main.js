import PropTypes from 'prop-types'
import React from 'react'
import family from '../images/family.jpg'
import tech2rent from '../images/tech2rent_first_render.png'
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
          An app that allows users to sign-up as businesses or volunteers, 
          and simulates the job flow of the RePlate platform (re-plate.org). 
          Businesses can post/edit/delete food pickups, and volunteers can claim/complete 
          these pickups that they'll in turn deliver to shelters and soup kitchens. 

          </p>
          <p>
          Examples of: Java, Fragment Interactions, Handmade Network Adapter, RegEx Field Validation, CRUD functionality
          </p>


          <span className="image main">
            <img src={tech2rent} alt="" />
          </span>
          <p>
          An app that allows users to list items that can be rented by other users.
          Utilizing a full
          <a href="https://www.notion.so/Tech2Rent-fe7c1d9468e9478e9926f6d1e264fd58"> Feature Canvas </a>
          and weekly sprint model, I worked in collaboration with UX/UI, Webdev, and Android teams to 
          bring this project to life. 

          </p>
          <p>
          Examples of: Kotlin, Okhttp, Picasso, RxJava, Auth0 Integration, CI/CD Workflow, Custom UI elements
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
