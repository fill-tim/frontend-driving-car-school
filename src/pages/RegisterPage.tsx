import "../css/registerPage.css"
import { useRegister } from "../hooks/useRegister"

export function RegisterPage() {
    const { email, username, password, confirmPassword, emailHandler, emailError } = useRegister()


    return (
        <div className="container-register-page">
            <h1>Регистрация</h1>
            <form className="register-form">
                <input
                    name="username"
                    value={username}
                    type="text"
                    placeholder="Имя пользователя"
                    className="register-page-item"
                />
                {/* Показываем сообщение об ошибке, если поле не заполнено */}
                {/* {errors.username && <p>Это поле обязательно</p>} */}

                {emailError && <p>{emailError}</p>}
                <input
                    name="email"
                    value={email}
                    onChange={e => emailHandler(e)}
                    type="text"
                    placeholder="Email"
                    className="register-page-item"
                />
                <input
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    type="password"
                    className="register-page-item"
                />
                {/* Показываем сообщение об ошибке, если поле не заполнено или слишком короткое */}
                {/* {errors.password && <p>Пароль должен быть не менее 6 символов</p>} */}
                <input
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Повторите пароль"
                    type="password"
                    className="register-page-item"
                />
                <button type="submit" className="register-page-item btn" >Отправить</button>
            </form>
        </div>
    )
}

