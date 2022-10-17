import React from 'react';
import styles from '../assets/pod.module.scss';
import { ReactComponent as Spotify } from '../assets/svg/spotify.svg';
import { ReactComponent as Apple } from '../assets/svg/apple-podcast.svg';
import { ReactComponent as Google } from '../assets/svg/google-podcasts.svg';
import { ReactComponent as Pocket } from '../assets/svg/pocket-casts.svg';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as Dots } from '../assets/svg/bg-pattern-dots.svg';
import host from '../assets/image-host-desk.jpg';

const Pod = () => {
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
            // value={email}
            // onChange={handleOnChange}
          />
          <button>Request Access</button>
        </div>
        <div className={styles.casts}>
          <Spotify />
          <Apple />
          <Google />
          <Pocket />
        </div>
      </article>
    </main>
  );
};

export default Pod;
