
import './styles/App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";
import NavBar from "./components/NavBar";
import {Link} from "react-router-dom";
import SeconPage from "./components/SeconPage";


function App() {
  return (
      <div className="App">
        <div className="divPadding">
          <Header />
            <WelcomePage/>
          <Footer />
        </div>
      </div>
  )
}

export default App
