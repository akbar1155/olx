import React from 'react';
import "./header.scss"
import { BiMessageRounded } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
const Header = () => {
    return (

        <header className='header'>
            <img className='header__logo' src="../IMAGES/olx-logo-20F1656D13-seeklogo.com.png" alt="" width={60} height={70} />
            <nav className='header__nav'>

                <div className='header__nav__lang'>
                    UZ | RU
                </div>
                <button className='header__nav__message'>
                    <BiMessageRounded />Сообщения

                </button>
                <button className='header__nav__heart'>
                    <AiOutlineHeart />
                </button>
                <button className='header__nav__profil'>
                    <HiUser className='yurak' />  Ваш профиль
                </button>
                <button className='header__nav__podat'>Подать объявление</button>
            </nav>

        </header>

    );
}

export default Header;
