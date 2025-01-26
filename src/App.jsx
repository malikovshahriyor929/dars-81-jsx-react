import "./App.css";
import Header from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import Cards from "./components/cards/cards";
import Category from "./components/catecogy/category";

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Category />
      <Cards/>
    </>
  );
};

export default App;
