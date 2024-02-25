import { useState } from "react";
import "../css/header.css"



export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [details, setDetails] = useState(false)
    const [isAutorized, setAutorized] = useState(false)

    const btnClasses = details ? 'btn-menu-color-open' : 'btn-menu-color-close'

    return (
        <div className="header">
            <div className="btn-menu">
                <svg onClick={() => (setIsOpen(!isOpen), setDetails(!details))} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={btnClasses} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>

            </div>
            {isOpen && (
                <div className="menu-bar">
                    {!isAutorized && (
                        <ul>
                            <a href="/">Главная</a>
                            <a>О нас</a>
                            <a>Инструктора</a>
                            <a>Расписание</a>
                            <a>Авторизоваться</a>
                            <a href="/register">Зарегистироваться</a>
                        </ul>
                    )}
                    {isAutorized && (
                        <ul>
                            <a>Главная</a>
                            <a>О нас</a>
                            <a>Инструктора</a>
                            <a>Расписание</a>
                            <a>Профиль</a>
                        </ul>
                    )}
                </div>
            )
            }
        </div >

    )
}