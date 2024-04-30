import Header from "./header";
import NavBar from "../components/nav-bar";
import CharacterPage from "./character-page";

function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#272B33]">
      <Header />
      <NavBar />
      <CharacterPage />
    </div>
  );
}

export default Home;
