import { useFormAuth } from "../hooks/useFormAuth"

export function LoginForm() {
    const {
        email, emailError, emailDirty, emailHandler,
        password, passwordDirty, passwordError, passwordHandler, blurHandler
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

            <button type="submit" className="register-btn" >Войти</button>
        </form>
    )
}