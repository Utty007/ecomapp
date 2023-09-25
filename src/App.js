import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "@fontsource/kumbh-sans"; // Defaults to weight 400

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
