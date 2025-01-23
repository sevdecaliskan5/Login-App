import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && termsAccepted && !emailError && !passwordError) {
      console.log('Login başarılı');
     
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!emailRegex.test(emailValue)) {
      setEmailError('Geçersiz email formatı.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (!passwordRegex.test(passwordValue)) {
      setPasswordError('Şifre en az 8 karakter, bir harf ve bir rakam içermelidir.');
    } else {
      setPasswordError('');
    }
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Email adresinizi girin" 
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        
        <div>
          <label>Şifre:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Şifrenizi girin" 
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <div>
          <label>
            <input 
              type="checkbox" 
              checked={termsAccepted} 
              onChange={handleTermsChange} 
            />
            Şartları kabul ediyorum
          </label>
        </div>

        <button type="submit" disabled={!termsAccepted || emailError || passwordError}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
