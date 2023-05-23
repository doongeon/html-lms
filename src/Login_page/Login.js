import React from 'react';
import loginImage from './english-background.jpg';

function Login() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      };
    
    const wrapperStyle = {
    textAlign: 'center',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    };

    const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '20px',
    };

    const separatorStyle = {
    borderTop: '1px solid #ccc',
    margin: '20px 0',
    };

    const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    };

    const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#f1f1f1',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#000',
    };

    const handleLogin = () => {
    // 로그인 버튼 클릭 시 필요한 동작 수행
    console.log('Login button clicked');
    };
    
    return (
    <div style={containerStyle}>
        <div style={wrapperStyle}>
        <img src={loginImage} alt="Login" style={imageStyle} />
        <hr style={separatorStyle} />
        <h2 style={headingStyle}>Welcome</h2>
        <button style={buttonStyle} onClick={handleLogin}>
            Google Login
        </button>
        </div>
    </div>
    );
}
    

export default Login;