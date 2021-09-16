import React, { Component } from 'react';
import Carousel from '../components/Carousel.js';

class Home extends Component {
    render () {
        return (
            <>
            <div className = "header-div">
                <h1 className = "titleText">Connect without revealing</h1>
                <br></br>
                <h1 className = "titleText"> your true Identity</h1>
                <img src='https://media0.giphy.com/media/QP7Iw9BfERn7S2UK4e/giphy.gif?cid=6c09b952qybym1mptu46u6q8uss1qx4931pec3hg87imi5uc&rid=giphy.gif&ct=s' alt='spiderman swinging' className='spidey' />
            </div>
            <div className = "intro-div">
                <img src= "https://cdn.selfstairway.com/wp-content/uploads/2013/01/103090-batman-sad-batman.jpg" alt = "batman standing feeling lonely" className ="batmanSolo"/>
                <p className= 'intro-paragraph'>
                Tired of living this "mysterious" lifestyle by yourself? Is it Lonely at the top? Is your identity Top Priority?
                Here at Super Tinder, we help everyday heroes like you find hapiness and fullfillment. meet everyday single people looking for friends. *please make sure to wear a face mask underneath your hero mask to prevent the spread of COVID*
                </p>
            </div>
            <div id='joinUsContainer'>
                <div className='joinTextDiv'>
                    <h1 className="joinText">Join the Hundreds of Users online now!</h1>
                </div>
                    <br></br>
                    <br></br>
            </div>
            <div className= 'carouselBox'>
                <div className='carousel'>
                    <Carousel />
                </div>
            </div>
            <div className= 'createAccountDiv'>
                <div className= 'createAccount' >
                <p>
                    <a>Create Account</a>
                </p>
                </div>
            </div>
            </>
        )
    }
}

export default Home
