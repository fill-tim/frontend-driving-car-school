import { useState } from "react"

export function useFormAuth() {
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const emailHandler = (e: any) => {
        setEmail(e.target.value)

        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(e.target.value).toLowerCase()) && (e.target.value !== '')) {
            setEmailError("Некорректный email")
        } else {
            setEmailDirty(false)
            setEmailError('')
        }
    }

    const confirmPasswordHandler = (e: any) => {
        setConfirmPassword(e.target.value)

        if ((password !== e.target.value) && (e.target.value !== '')) {
            setConfirmPasswordError('Пароли не совпадают')
        } else {
            setConfirmPasswordDirty(false)
            setConfirmPasswordError('')
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'confirmPassword':
                setConfirmPasswordDirty(true)
                break
        }
    }

    return {
        email, emailHandler, emailError, emailDirty,
        password, passwordDirty, passwordError, passwordHandler,
        confirmPassword, confirmPasswordDirty, confirmPasswordError, confirmPasswordHandler,
        blurHandler
    }
}