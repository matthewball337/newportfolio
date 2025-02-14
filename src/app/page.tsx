import About from './components/about'
import Home from "./components/home"
import Navbar from "./components/navbar"
import Skills from "./components/skills"
import Work from "./components/work"

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </>
  );
}
