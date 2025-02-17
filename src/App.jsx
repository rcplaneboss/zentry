import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar /> 
    <Hero />

    <About /> 
    </main>
  );
}
 
export default App;