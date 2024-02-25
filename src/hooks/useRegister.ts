import { useState } from "react"

export function useRegister() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
        }
    }

    const emailHandler = (e: any) => {
        console.log(e)
        setEmail(e.target.value)
        
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(email).toLowerCase())) {
            setEmailError('Некорректный email ')
        } else {
            setEmailError('')
        }
    }

    return { email, username, password, confirmPassword, emailHandler, emailError }
}