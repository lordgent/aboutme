import Aboutme from "./components/Aboutme";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Skillsme from "./components/Skillsme";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="w-full px-2 lg:px-20">
        <Jumbotron />
      </div>
      <Aboutme />
      <Skillsme />
    </div>
  );
}

export default App;
