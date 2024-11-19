import React from 'react'

import s from './Header.module.scss'
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <section className={s.header}>
       <div className="container">
        <nav className={s.nav}>
           <Link to={'/'} className={s.logo}>SHOP.CO</Link>

           <div className={s.menu}>
                <Link to={'/'}>Shop</Link>
                <Link to={'/'}>On sale</Link>
                <Link to={'/'}>New Arivvals</Link>
                <Link to={'/'}>Brands</Link>

                <input className={s.search} type="text" />

                <div className={s.box}>
                    <img src="./" alt="" />
                    <img src="" alt="" />
                </div>
           </div>
        </nav>
       </div>
    </section>
  )
}

export default Header