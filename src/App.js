import styles from "./App.module.css";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <WeatherCard />
      </main>
    </div>
  );
}

export default App;
