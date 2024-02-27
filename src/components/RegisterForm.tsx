import { useFormAuth } from "../hooks/useFormAuth"

export function RegisterForm() {
    const {
        email, emailHandler, emailError, emailDirty,
        password, passwordDirty, passwordError, passwordHandler,
        confirmPassword, confirmPasswordDirty, confirmPasswordError, confirmPasswordHandler,
        blurHandler
    } = useFormAuth()

    return (
        <form className="register-form">
            {(emailError && emailDirty) && <p>{emailError}</p>}
            <input
                name="email"
                onBlur={e => blurHandler(e)}
                value={email}
                onChange={e => emailHandler(e)}
                type="text"
                placeholder="Email"
                className="register-page-item"
            />

            {(passwordError && passwordDirty) && <p>{passwordError}</p>}
            <input
                name="password"
                onBlur={e => blurHandler(e)}
                value={password}
                onChange={e => { passwordHandler(e) }}
                placeholder="Пароль"
                type="password"
                className="register-page-item"
            />

            {(confirmPasswordError && confirmPasswordDirty) && <p>{confirmPasswordError}</p>}
            <input
                name="confirmPassword"
                onBlur={e => blurHandler(e)}
                value={confirmPassword}
                onChange={e => confirmPasswordHandler(e)}
                placeholder="Повторите пароль"
                type="password"
                className="register-page-item "
            />
            <button type="submit" className="register-btn" >Отправить</button>
        </form>
    )
}