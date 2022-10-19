import './App.scss';
import Pod from './components/Pod';
import styles from './assets/pod.module.scss';

function App() {
  return (
    <div className="App">
      <Pod />
      <div className={styles.dots2}></div>
    </div>
  );
}

export default App;
