import { useState } from "react"
import { IoIosCloseCircle } from "react-icons/io"
import { FaThumbsUp } from "react-icons/fa"

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
        const phonePattern2 = /^(\+2519)([\d]{8})/
        const phonePattern3 = /^(\+2519)([\d]{8})$/
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
        }else if(!phonePattern3.test(phone)){
            phoneParent.classList.add('error')
            phoneParent.classList.remove('success')
            phoneError.textContent = 'Phone number length exedes max'
        }
        else{
            phoneParent.classList.remove('error')
            phoneParent.classList.add('success')
            phoneError.textContent = ''
        }
    }

    // password handler
    const passwordHandler = e => {
        setFormField(prevState=>({
            ...prevState,
            password: e.target.value
        }))
    }

    const passwordErrorSuccessHandler = element => {
        const passwordParent = element.parentElement 
        const passwordError = passwordParent.querySelector('.error.password')
        
        if(!password){
            passwordParent.classList.add('error')
            passwordParent.classList.remove('success')
            passwordError.textContent = 'passsowred required'
        }else if(password.length < 7){
            passwordParent.classList.add('error')
            passwordParent.classList.remove('success')
            passwordError.textContent = 'too short password'
        }else {
            passwordParent.classList.remove('error')
            passwordParent.classList.add('success')
            passwordError.textContent = ''
        }
    }

    // password 2 handler
    const password2Handler = e => {
        setFormField(prevState=>({
            ...prevState,
            password2: e.target.value
        }))
    }

    const password2ErrorSuccessHandler = element => {
        const password2Parent = element.parentElement 
        const password2Error = password2Parent.querySelector('.error.password2')

        if(!password2){
            password2Parent.classList.add('error')
            password2Parent.classList.remove('success')
            password2Error.textContent = 'confirm passowrd'
        }else if(password !== password2){
            password2Parent.classList.add('error')
            password2Parent.classList.remove('success')
            password2Error.textContent = 'passowrds not match'
        }else {
            password2Parent.classList.remove('error')
            password2Parent.classList.add('success')
            password2Error.textContent = ''
        }
    }


      // submit handler
      const submitHandler = () => {

        const usernameElem = document.querySelector('input[name="username"]') 
        const emalilElem = document.querySelector('input[name="email"]')
        const phoneElem = document.querySelector('input[name="phone"]')
        const passwordElem = document.querySelector('input[name="password"]')
        const password2Elem = document.querySelector('input[name="password2"]')
        
        if(!username){
            usernameElem.parentElement.classList.add('error')
            usernameElem.parentElement.classList.remove('success')
            usernameElem.nextElementSibling.textContent = 'username required'
        }else if(!email){
            emalilElem.parentElement.classList.add('error')
            emalilElem.parentElement.classList.remove('success')
            emalilElem.nextElementSibling.textContent = 'email address required'
        }else if(!password){
            passwordElem.parentElement.classList.add('error')
            passwordElem.parentElement.classList.remove('success')
            passwordElem.nextElementSibling.textContent = 'password required'
        }else if(!password2){
            password2Elem.parentElement.classList.add('error')
            password2Elem.parentElement.classList.remove('success')
            password2Elem.nextElementSibling.textContent = 'confirm password'
        }else if(password !== password2){
            password2Elem.parentElement.classList.add('error')
            password2Elem.parentElement.classList.remove('success')
            password2Elem.nextElementSibling.textContent = 'passowrds not match'
        }else{
            usernameElem.parentElement.classList.remove('error')
            usernameElem.parentElement.classList.remove('success')

            emalilElem.parentElement.classList.remove('error')
            emalilElem.parentElement.classList.remove('success')

            phoneElem.parentElement.classList.remove('error')
            phoneElem.parentElement.classList.remove('success')

            passwordElem.parentElement.classList.remove('error')
            passwordElem.parentElement.classList.remove('success')

            password2Elem.parentElement.classList.remove('error')
            password2Elem.parentElement.classList.remove('success')

            setFormField({
                username: '',
                email: '',
                phone: '',
                password: '',
                password2: ''
            })

            const popUp = document.querySelector('.pop-up')
            popUp.style.transform = 'scale(1)'
        }
        
        }

    // hide pop up
    const hidePopUp = () => {
        const popUp = document.querySelector('.pop-up')
        popUp.style.transform = 'scale(0)'
    }

  return (
    <div className="form-con">
        <h4>Form Validation</h4>
      <div className="form">
        <div className="pop-up">
            <button><FaThumbsUp /></button>
            <span>successful signup</span>
            <button onClick={hidePopUp}><IoIosCloseCircle /></button>
        </div>
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
                <input type="password" name="password" placeholder="password" 
                    value={password}
                    onChange={passwordHandler} 
                    onKeyUp={e=>passwordErrorSuccessHandler(e.target)}/>
                <div className="error password"></div>
            </div>
            <div className="input-controll">
                <input type="password" name="password2" placeholder="confirm password" 
                    value={password2} 
                    onChange={password2Handler} 
                    onKeyUp={e=>password2ErrorSuccessHandler(e.target)}/>
                <div className="error password2"></div>
            </div>
            <div className="input-controll btn-controll">
                <span className="button" onClick={submitHandler}>Signup</span>
            </div>
        </form>
      </div>
    </div>
  )
}

export default FormValidation
