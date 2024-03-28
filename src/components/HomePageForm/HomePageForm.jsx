import { useEffect, useState, useContext } from 'react';
import { ModalContext } from '../Modal/ModalContext';
import styles from './HomePageForm.module.css';
   
const HomePageForm = () => {
    const [formData, setFormData] = useState({name:'', email:'', phone: '', agree: false})
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [errorName, setIsNameError] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [errorEmail, setIsEmailError] = useState(false);
    const [isEmaiValid, setIsEmailValid] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [errorPhone, setIsPhoneError] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const {handleOpenModal} = useContext(ModalContext);


    useEffect(() => {
       if (isNameValid && isEmaiValid && isPhoneValid && formData.agree) {

            
        setIsFormValid(true)
        } else {
            setIsFormValid(false)
    }
    }, [isFormValid, isEmaiValid, isNameValid, isPhoneValid, formData])
    
    const handleFormChange = (evt) => {
        const { name, value, type, checked } = evt.currentTarget
        setFormData(prevState => (
            { ...prevState, [name]: type === "checkbox" ? checked : value }))
               if (!errorName && !errorEmail && !errorPhone && formData.agree) {

              
            
        setIsFormValid(true)
        } else {
            setIsFormValid(false)
    }
   
    }

    const regExp = {
        name: /^[a-zA-z-']{1,10}$/,
        email: /[@]/gi,
        phone: /^\+\d{1,3}\s\d{10}$/
        
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        if (!regExp.phone.test(formData.phone)) {
            alert('wrong phone')
            return
        }
   if (!regExp.name.test(formData.name)) {
            alert('wron name')
            return
        }
        if (!regExp.email.test(formData.email)) {
            alert('Missing @')
            return
        }
        setFormData({ name: '', email: '', phone: '', agree: false }) 
        setIsNameValid(false)
        setIsEmailValid(false)
        setIsPhoneValid(false)
        handleOpenModal()
    }

const handleNameFocus = () => {
setIsNameError(false);
setIsNameFocused(true);
}
    
    
const handleEmailFocus = () => {
setIsEmailError(false);
setIsEmailFocused(true);
}
    
const handlePhoneFocus = () => {
setIsPhoneError(false);
setIsPhoneFocused(true);
}
    
    const handleBlur = (evt) => {
        const name = evt.currentTarget.name
setIsNameFocused(false)
        setIsNameError(false)
        if (name === "name") {
          if (formData.name === "") {
    setIsNameValid(false)
}
if (!regExp.name.test(formData.name ) && formData.name !== "") {
setIsNameValid(false)
    setIsNameError(true)

}
if (regExp.name.test(formData.name ) && formData.name !== ""){
setIsNameValid(true)
}  
        }
    }
    
const handleEmailBlur = (evt) => {
const name = evt.currentTarget.name
setIsEmailFocused(false)
        setIsEmailError(false)
        if (name === "email") {
        if (formData.email === "") {
        setIsEmailValid(false)   
}
if (!regExp.email.test(formData.email ) && formData.email !== "") {
setIsEmailValid(false)
    setIsEmailError(true)
}
 console.log(regExp.email.test(formData.email ))
if (regExp.email.test(formData.email ) && formData.email !== ""){
    setIsEmailValid(true)
}  
}
}
    
    const handlePhoneBlur = (evt) => {
const name = evt.currentTarget.name
setIsPhoneFocused(false)
        setIsPhoneError(false)
        if (name === "phone") {
          if (formData.phone === "") {
    setIsPhoneValid(false)
}
if (!regExp.phone.test(formData.phone ) && formData.phone !== "") {
setIsPhoneValid(false)
    setIsPhoneError(true)
}
if (regExp.phone.test(formData.phone ) && formData.phone !== ""){
setIsPhoneValid(true)
}  
}
}

    let clsName = styles.input;
    if (isNameFocused) {
        clsName = `${styles.input}  ${styles.focused}`;
    }
    if (errorName) {
  
        clsName = `${styles.input}  ${styles.error}`;  
    }
      if (isNameValid) {
        clsName = `${styles.input}  ${styles.valid}`;  
      }
    
    let clsEmail = styles.input;
    if (isEmailFocused) {
        clsEmail = `${styles.input}  ${styles.focused}`;
    }
    if (errorEmail) {
   
        clsEmail = `${styles.input}  ${styles.error}`;  
    }
      if (isEmaiValid) {
        clsEmail = `${styles.input}  ${styles.valid}`;  
      }
    
     let clsPhone = styles.input;
    if (isPhoneFocused) {
        clsPhone = `${styles.input}  ${styles.focused}`;
    }
    if (errorPhone) {
        clsPhone = `${styles.input}  ${styles.error}`;  
    }
      if (isPhoneValid) {
        clsPhone = `${styles.input}  ${styles.valid}`;  
      }
   
    return (
        <form  onSubmit={handleFormSubmit} className={styles.form}>
            <div className={styles.form_inner_wrapper}>
                <div className={styles.input_wrapper}>
                <label htmlFor="name" className={styles.label}>Name</label>
                    <input onBlur={handleBlur} onFocus={handleNameFocus} name="name" value={formData.name} onChange={handleFormChange} id='name' type="text"
                        className={clsName}
                    />
                    {errorName && <p className={styles.text_error}>Name cant't be more then 10 characters</p>}
                </div>
                       <div className={styles.input_wrapper}>
                <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        onBlur={handleEmailBlur} onFocus={handleEmailFocus}
                        name="email" value={formData.email} onChange={handleFormChange} id='email' type="text"
                         className={clsEmail}
                    />
                    {errorEmail && <p className={styles.text_error}>Email should include @</p>}
                </div>
                 <div className={styles.input_wrapper}>
                <label htmlFor="phone" className={styles.label}>Phone</label>
                    <input
                        onBlur={handlePhoneBlur} onFocus={handlePhoneFocus}
                        name="phone" value={formData.phone} onChange={handleFormChange} id='phone' type="text"
                        className={clsPhone}
                    />
                    {errorPhone && <p className={styles.text_error}>Phone number should comply with this pattern +38 0XXXXXX</p>}
                </div>
                 <div className={styles.input_check_wrapper}>
                    <input name="agree" checked={formData.agree} onChange={handleFormChange} id='check' type="checkbox" className={styles.input_check}  />
                                    <label htmlFor="check" className={styles.label}>I agree with the processing of personal data</label>
                    </div>
            </div>
            <button  className={!isFormValid ? styles.callback_btn + " " + styles.disabled : styles.callback_btn}>Call me back</button>
        </form>
    )
}

export default HomePageForm;