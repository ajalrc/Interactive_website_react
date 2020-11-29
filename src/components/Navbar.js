import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import'./Navbar.css';
import {Button} from './Button';


function Navbar() {
    const [click,setClick]=useState(false);
    const handleClick=()=>{setClick(!click);}
    const closeMobileMenu=()=>setClick(false);
    const [button,setButton]= useState(true);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);
    

    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                       <p><img src='https://upload.wikimedia.org/wikipedia/en/9/99/DrakeSeal.png'></img> </p>
                       <p className='department' >Department of Computer Science</p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                    
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About our program
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Courses offered
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Research
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Interships
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
