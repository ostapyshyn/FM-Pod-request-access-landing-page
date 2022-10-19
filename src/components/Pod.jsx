import React, { useEffect, useState } from 'react';
import styles from '../assets/pod.module.scss';
import { ReactComponent as Spotify } from '../assets/svg/spotify.svg';
import { ReactComponent as Apple } from '../assets/svg/apple-podcast.svg';
import { ReactComponent as Google } from '../assets/svg/google-podcasts.svg';
import { ReactComponent as Pocket } from '../assets/svg/pocket-casts.svg';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as Dots } from '../assets/svg/bg-pattern-dots.svg';
import host from '../assets/image-host-desk.jpg';

const Pod = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = () => {
    const regEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!regEx.test(email) && email !== '') {
      setMessage('Oops! Please check your email');
    } else if (email === '') {
      setMessage('Oops! Please check your email');
    } else {
      setMessage('');
      setEmail('');
    }
  };

  return (
    <main>
      <Logo className={styles.logo} />
      <article>
        <h1>
          Publish your podcasts <span>everywhere.</span>
        </h1>

        <p>
          Upload your audio to Pod with a single click. We’ll then distribute your podcast to
          Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
        </p>

        <div className={styles.email}>
          <input
            placeholder="Email address"
            id="email"
            autoComplete="off"
            type="email"
            value={email}
            onChange={handleOnChange}
            style={
              message && windowSize <= 620
                ? {
                    border: '1px solid var(--red)',
                    marginBottom: '24px',
                  }
                : undefined
            }
          />
          <button onClick={emailValidation}>Request Access</button>
          <span className={styles.error}>{message}</span>
        </div>

        <div className={styles.casts}>
          <Spotify />
          <Apple />
          <Google />
          <Pocket />
        </div>
      </article>
      <div className={styles.dots}></div>
    </main>
  );
};

export default Pod;
