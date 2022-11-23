import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Router from 'next/router';
import Link from 'next/link';
import Navigator from './Navigator';
import styles from '../../styles/Organisms.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onArrowClick = () => {
        if (isMobile) Router.push('/category');
        else setIsOpen(!isOpen);
    };

    return (
        <header id="header" className={styles.header}>
            <div className={styles.header_inner}>
                <div>
                    <Link href="/" className={styles.title}>마굿간</Link>
                    <button type="button" onClick={onArrowClick}>화살표</button>
                </div>
                <Link href="/user/login">
                    <a className={styles.login_btn}>로그인</a>
                </Link>
            </div>
            <Navigator isOpen={isOpen} />
        </header>
    );
};

export default Header;
