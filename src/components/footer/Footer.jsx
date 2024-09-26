import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Kowshik</h1>
                    
                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#projects' className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href="https://www.linkedin.com/in/kowshik-sai-133611140/" target='_blank' className='footer__social-link'>
                        <i className='bx bxl-linkedin'></i>
                    </a>

                    <a href="https://github.com/kowshik4" target='_blank' className='footer__social-link'>
                        <i class="bx bxl-github"></i>
                    </a>

                    <a href="https://www.instagram.com/" target='_blank' className='footer__social-link'>
                        <i className='bx bxl-instagram-alt'></i>
                    </a>
                </div>

                <span className='footer__copy'>Inspired by Cryptical coder</span>

            </div>
        </footer>
    );
};

export default Footer;
