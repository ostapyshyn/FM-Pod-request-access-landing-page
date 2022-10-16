import React from 'react';
import styles from '../assets/pod.module.scss';

const Pod = () => {
  return (
    <main>
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
      </article>
    </main>
  );
};

export default Pod;
