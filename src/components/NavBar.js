import { useState } from "react";
import js from '../resources/js.png';
import html from '../resources/html.png';
import sass from '../resources/sass.png';
import sql from '../resources/sql.png';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const NavBar = () => {
  const [showList, setShowList] = useState(false);

  const handleShowList = () => {
    if (showList) {
      document.getElementById("nav-list").style.animation = 'fadeOutLeft 1s'
      setTimeout(() => {
        setShowList(false);
      }, 400)
    } else {
      setShowList(true);
    }
  }

  return (
    <div className="navbar-box" id="nav">
      <p className="explorer">
        explorer
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
      </p>
      <p className="portafolio-arrow" onClick={handleShowList}>
        {!showList && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>}
        {showList && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>}
        portafolio
      </p>
      {showList && <ul id="nav-list">
        <CustomLink to='/' className='link'>
          <img src={html}/>
          About<span>.html</span>
        </CustomLink>
        <CustomLink to='/skills' className='link'>
          <img src={js}/>
          Skills<span>.js</span>
        </CustomLink>
        <CustomLink to='/projects' className='link'>
          <img src={sql}/>
          Projects<span>.sql</span>
        </CustomLink>
        <CustomLink to='/contact' className='link'>
          <img src={sass}/>
          Contact<span>.scss</span>
        </CustomLink>
      </ul>}
    </div>
  );
}
  
export default NavBar;

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}