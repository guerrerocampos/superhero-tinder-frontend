import React, { Component } from 'react';
import { Card, CardTitle, Col, CardImg, CardColumns } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class HeroIndex extends Component {
  render() {
    return (
      <>
      <div className= 'heroIndexBackground'>
          <div className='indexH1'>
         <h2 className='meetTheHeroes'>Meet The Heroes!!</h2>
         </div>
         <CardColumns id='indexCards'>
        { this.props.heroes.map((hero, index) => {
        return (
        <Card body key={ index } className='indexCard'>
        <NavLink
            to={`/heroshow/${hero.id}`}>
            { hero.name }
          </NavLink>
          <NavLink
          to={`/heroshow/${hero.id}`}>
            {<CardImg top width="10%" src={hero.img_url} alt="Card image cap" />}
          </NavLink>
          </Card>
          )
        })}
        </CardColumns>
        <div className='goku'>
            <img src='https://thumbs.gfycat.com/RapidIllegalKronosaurus-max-1mb.gif' alt='super saiyan gif'/>
        </div>
        </div>
      </>
    )
  }
}
export default HeroIndex