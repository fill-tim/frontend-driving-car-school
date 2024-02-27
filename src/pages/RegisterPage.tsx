import "../styles/registerPage.css"
import { RegisterForm } from "../components/RegisterForm"


export function RegisterPage() {
    return (
        <div className="container-register-page">
            <h1>Регистрация</h1>
            <RegisterForm />
        </div>
    )
}

