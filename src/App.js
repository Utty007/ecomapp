import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "@fontsource/kumbh-sans"; // Defaults to weight 400
import Backdrop from "./components/UI/Backdrop";
import MobileNav from "./components/UI/MobileNav";
import { useSelector } from "react-redux";
import { uiActions } from "./components/store/ui-slice";

function App() {
  const navBarState = useSelector((state) => state.ui.navBarIsVisible);

  const dispatch = useDispatch();
  const navBarToggleHandler = () => {
    dispatch(uiActions.toggleNavbar());
  };
  return (
    <div className={navBarState && "App"}>
      {navBarState && (
        <Backdrop onClick={navBarToggleHandler}>
          <MobileNav />
        </Backdrop>
      )}
      <Header />
      <Main />
    </div>
  );
}

export default App;
