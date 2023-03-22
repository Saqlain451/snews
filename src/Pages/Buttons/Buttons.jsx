import React from 'react'
import { useGlobalHook } from '../../Hooks/Context';
import "./button.css";

const Buttons = () => {
    const { catBtnClick, btnMode } = useGlobalHook()
    // console.log(btnMode);
    return (
        <section className='cat-btns'>
            <button className={btnMode.sport ? "btn-active" : "btn-unactive"} onClick={catBtnClick}>sports</button>
            <button className={btnMode.tech ? "btn-active" : "btn-unactive"} onClick={catBtnClick}>technology</button>
            <button className={btnMode.enter ? "btn-active" : "btn-unactive"} onClick={catBtnClick}>entertainment</button>
        </section>
    )
}

export default Buttons