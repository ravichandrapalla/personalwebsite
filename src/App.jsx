import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
