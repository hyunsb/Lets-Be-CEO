import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import s from '../css/Header.module.css'
//상단 내비게이션
const Header = () => {
    
    return (
        <div className={s.Header}>
            <nav className={s.nav}>
                <a href='#' className={s.nav_logo}>Let's Be CEO</a>

                <div className={s.nav_menu}>
                    <ul className={s.nav_list}>
                        <li className={s.nav_item}>
                            <a href='#' className={s.nav_link}>상권분석</a>
                        </li>
                    </ul>
                    <ul className={s.nav_list}>
                        <li className={s.nav_item}>
                            <a href='#' className={s.nav_link}>손익분기점</a>
                        </li>
                    </ul>
                    <ul className={s.nav_list}>
                        <li className={s.nav_item}>
                            <a href='#' className={s.nav_link}>게시판</a>
                        </li>
                    </ul>
                    <ul className={s.nav_list}>
                        <li className={s.nav_item}>
                            <a href='#' className={s.nav_link}>CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>













            {/* <Nav fill variant="tabs" defaultActiveKey="/" className='nav'>         
                <Nav.Item>
                    <Nav.Link href="/">LOGO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/map">상권분석</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">손익분기점</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/board">게시판</Nav.Link>
                </Nav.Item> */}
                {/* <Nav.Item>
                    <Nav.Link eventKey="home">게시판</Nav.Link>
                </Nav.Item> */}
                {/* <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item> */}      
            {/* </Nav>        */}
        </div>
    );
};
export default Header;

