import { Link } from "react-router-dom"
import style from './navBar.module.css'
import logo from '../../image/logo.png'
const NarvBar = () =>{
  return(
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link to='/'>
          <img src={logo} alt=''/>
        </Link>

      </div>

      <nav>
        <ul className={style.list} >
          <li className= {style.list_item}>

      <Link to='/home'>RECIPE</Link>
      <Link to='/create'>CREATE RECIPE</Link>

          </li>

        </ul>
      </nav>

    </div>
  )
}

export default NarvBar;