import Header from "./header";
import NavBar from "../components/nav-bar";
import LocationsPage from "./locations-page";

function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#272B33]">
      <Header />
      <NavBar />
      <LocationsPage />
    </div>
  );
}

export default Home;
