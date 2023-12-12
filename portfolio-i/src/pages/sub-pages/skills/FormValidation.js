import { useState } from "react"

const FormValidation = () => {
    // states
    const [formField,setFormField] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
    })

    // fields
    const {username,email,phone,password,password2} = formField 

    // submit handler
    const submitHandler = e => {
        e.preventDefault()
        console.log("Submited")
    }

    // username handler
    const usernameHandler = e => {
        setFormField(prevState=>({
            ...prevState,
            username: e.target.value,
        }))
    }

    const usernameErrorSuccessHandler = element => {
        const usernameParent = element.parentElement 
        const usernameError = usernameParent.querySelector('.error.username')
        const usernamePattern = /^([a-zA-Z])/
        if(! username){
            usernameParent.classList.add('error')
            usernameParent.classList.remove('success')
            usernameError.textContent = 'username required'
        }else if(!usernamePattern.test(username)){
            usernameParent.classList.add('error')
            usernameParent.classList.remove('success')
            usernameError.textContent = 'Username must start with letter'
        }else if(username.trim().length <= 5){
            usernameParent.classList.add('error')
            usernameParent.classList.remove('success')
            usernameError.textContent = 'username is to short'
        }else {
            usernameParent.classList.remove('error')
            usernameParent.classList.add('success')
            usernameError.textContent = ''
        }
    }

    // email handler 
    const emailHandler = e => {
        setFormField(prevState=>({
            ...prevState,
            email: e.target.value,
        }))
    }

    const emailErrorSuccessHandler = element => {
        const emailParent = element.parentElement
        const emailError = emailParent.querySelector('.error.email')
        
        const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

        if(!email){
            emailParent.classList.add('error')
            emailParent.classList.remove('success')
            emailError.textContent = 'email address required'
        }else if(!emailPattern.test(email)){
            emailParent.classList.add('error')
            emailParent.classList.remove('success')
            emailError.textContent = 'invalid email address'
        }else {
            emailParent.classList.remove('error')
            emailParent.classList.add('success')
            emailError.textContent = ''
        }
    }

    // phone handler
    const phoneHandler = e => {
        setFormField(prevState=>({
            ...prevState,
            phone: e.target.value
        }))
    }

    const phoneErrorSuccessHandler = element => {
        const phoneParent = element.parentElement 
        const phoneError = phoneParent.querySelector('.error.phone')
        const phonePattern1 = /^(\+2519)/
        const phonePattern2 = /^(\+2519)([\w]{8})/
        const phonePattern3 = /^(\+2519)([\d]+)/
        if(!phone){
            phoneParent.classList.add('error')
            phoneParent.classList.remove('success')
            phoneError.textContent = 'phone number required'
        }else if(!phonePattern1.test(phone)){
            phoneParent.classList.add('error')
            phoneParent.classList.remove('success')
            phoneError.textContent = 'start with country code (+2519...)'
        }else if(!phonePattern2.test(phone)){
            phoneParent.classList.add('error')
            phoneParent.classList.remove('success')
            phoneError.textContent = 'compete phone number'
        }else{
            phoneParent.classList.remove('error')
            phoneParent.classList.add('success')
            phoneError.textContent = ''
        }
    }

  return (
    <div className="form-con">
        <h4>Form Validation</h4>
      <div className="form">
        <form onSubmit={submitHandler}>
            <div className="input-controll">
                <input type="text" name="username" placeholder="username" 
                    value={username} 
                    onChange={usernameHandler} 
                    onKeyUp={e=>usernameErrorSuccessHandler(e.target)}
                    />
                <div className="error username"></div>
            </div>
            <div className="input-controll">
                <input type="text" name="email" placeholder="email" 
                    value={email}
                    onChange={emailHandler} 
                    onKeyUp={e=>emailErrorSuccessHandler(e.target)}/>
                <div className="error email"></div>
            </div>
            <div className="input-controll">
                <input type="text" name="phone" placeholder="phone" 
                    value={phone}
                    onChange={phoneHandler}
                    onKeyUp={e=>phoneErrorSuccessHandler(e.target)} />
                <div className="error phone"></div>
            </div>
            <div className="input-controll">
                <input type="password" name="password" placeholder="password" />
                <div className="error password"></div>
            </div>
            <div className="input-controll">
                <input type="password" name="password2" placeholder="confirm password" />
                <div className="error password"></div>
            </div>
            <div className="input-controll btn-controll">
                <button>Signup</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default FormValidation
