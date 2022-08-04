import React from "react";
import { Link } from "react-router-dom";
import Head from "../head/Head";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";

import style from "./Header.module.css";

const Header = () => {
  const [navbar, setNavbar] = React.useState(false);
  return (
    <>
      <Head />
      <div className={style.container__nav}>
        <nav className={style.navigation}>
          <ul
            className={navbar ? style.list__nav : style.nav__flex}
            onClick={() => setNavbar(false)}
          >
            <li className={style.nav__item}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.nav__item}>
              <Link to="/culture">Culture</Link>
            </li>
            <li className={style.nav__item}>
              <Link to="/technology">Technology</Link>
            </li>
            <li className={style.nav__item}>
              <Link to="/politics">Politics</Link>
            </li>
            <li className={style.nav__item}>
              <Link to="/sport">Sport</Link>
            </li>
            <li className={style.nav__item}>
              <Link to="/fashion">Fashion</Link>
            </li>
          </ul>
          <button
            className={style.btn__icon}
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <FaRegWindowClose className={style.close} />
            ) : (
              <GiHamburgerMenu />
            )}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
