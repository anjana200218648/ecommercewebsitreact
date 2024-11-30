// ForgotPassword.js
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Forgot Password</h2>
        <p style={styles.subtitle}>
          Enter your registered email to receive the password reset link.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <AiOutlineMail style={styles.icon} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Send Reset Link
          </button>
        </form>
        <a href="/login" style={styles.backLink}>
          <FiArrowLeft style={styles.backIcon} />
          Back to Login
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
  },
  card: {
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    color: '#cc0000',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '15px',
  },
  icon: {
    fontSize: '20px',
    color: '#000000',
    marginRight: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #cc0000',
    borderRadius: '4px',
    fontSize: '14px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#cc0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buttonHover: {
    backgroundColor: '#b30000',
  },
  backLink: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    textDecoration: 'none',
    color: '#000000',
    fontSize: '14px',
  },
  backIcon: {
    marginRight: '5px',
  },
};

export default ForgotPassword;
