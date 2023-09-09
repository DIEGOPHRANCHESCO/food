// import Lan from '../../Components/image'
import React from 'react';
import { Link } from 'react-router-dom'
import style from './landing.module.css'


const Landing = () => {
  return (
   
      <div className={style.con} >
      <h1>PROYECTO INDIVIDUAL FOOD</h1>
      {/* <img  src={Lan.png} /> */}
      <Link to='/home'>
        <button className={style.btn}>recipe</button>
      </Link>
    </div>
    
    
  )
}


export default Landing;