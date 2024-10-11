// app/page.tsx
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import LandingPage from "./general/landing-page";
import HeroPage from "./general/Hero";
import Trending from "./general/Trending";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-white text-white">
      {/* <NavBar/> */}
      {/* <UserProfile /> */}
      {/* Display user info if signed in */}
      {/* <HeroPage /> */}
      <Trending/>
    </div>
  );
};

export default HomePage;
