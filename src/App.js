import styles from "./App.module.css";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
//import {API_KEY, BASE_URL} from './weatherAPI/api.js'

function App() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <WeatherCard />
      </main>
    </div>
  );
}

export default App