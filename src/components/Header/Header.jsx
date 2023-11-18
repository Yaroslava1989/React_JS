import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.titleBlock}>
                <div className={s.titleImg}>
                  <img src='https://l450v.alamy.com/450v/2bra807/letter-vt-logo-icon-design-template-elements-2bra807.jpg' />
                </div>
                <div className={s.logoTitle}>
                  <h6>Kamasutra-JS</h6>
                  <h6>ASSBOOK</h6>
                  <h6>SOSIAL NETWORK</h6>
                </div>
            </div>
        </header>
    );
}

export default Header;