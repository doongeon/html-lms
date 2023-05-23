import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backgroundImage from './english-background.jpg';

function StartPage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        position: 'relative',
      };
    
      const contentWrapperStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '40px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '40px',
      };
    
      const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#000',
      };
    
      const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#f1f1f1',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#000',
        marginTop: '16px',
      };
    
      return (
        <div style={containerStyle}>
          <div style={contentWrapperStyle}>
            <h1 style={headingStyle}>Welcome to our English Academy</h1>
            <p>Learn English with the best instructors in town!</p>
            <Link to='/Login'>
            <a href="https://example.com" style={buttonStyle}>
              Login
            </a>
            </Link>
          </div>
        </div>
      );
    }
    
  
  export default StartPage;