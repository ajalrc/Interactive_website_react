import React from 'react'
import {Button} from './Button';
import './Footer.css'
import {Link} from 'react-router-dom';
function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join us to make an impact to the community.
                </p>
                <p className="footer-subscription-text">
                    To receive notifications from our department please type your email.
                    <p>You can unsubscribe at any time.</p>
                </p>
                <div className="input-areas">
                <form>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="You Email" 
                    className="footer-input"
                />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                            <Link to='/sign-up'>Why computer science?</Link>
                            <Link to='/'>Faculty</Link>
                            <Link to='/'>Research</Link>
                            <Link to='/'>Internships</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/'>515-271-3939</Link>
                            <Link to='/'>Harmon Fine Arts Center 1310 25th St. Desmonie IA, 50311</Link>
                            <Link to='/'>Maps and directions</Link>
                            <Link to='/'>Contact Directory</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <Link to='/' className='social-logo'>
                             <p><img src='https://upload.wikimedia.org/wikipedia/en/9/99/DrakeSeal.png'></img> </p>
                        </Link>
                    </div>
                    <small className='website-rights'>@ 2020 Drake University. All rights reserved.</small>
                    <div className='social-icons'>
                    <div className='social-icon-link facebook'>
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria_label='Facebook'
                        >
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria_label='Instagram'
                        >
                            <i className='fab fa-instagram'/>
                        </Link>
                        <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria_label='Twitter'
                        >
                            <i className='fab fa-twitter'/>
                        </Link>
                        <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria_label='Youtube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria_label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'/>
                        </Link>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default Footer
