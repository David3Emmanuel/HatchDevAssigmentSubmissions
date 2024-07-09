import { useState } from "react"

export default function ShowHidePassword() {
    const [showPassword, setShowPassword] = useState(false)

    return <div className='project input-group' style={{maxWidth: 500, marginLeft: 'auto', marginRight: 'auto'}}>
        <input
            style={{width: '100%'}}
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
        />
        <button onClick={() => setShowPassword(showPassword => !showPassword)}>
            <i className='material-icons'>{showPassword ? 'visibility_off' : 'visibility'}</i>
        </button>
    </div>
}