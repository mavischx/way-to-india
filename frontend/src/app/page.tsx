// app/page.tsx
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import LandingPage from "./general/landing-page";
import HeroPage from "./general/Hero";
import Trending from "./general/Trending";
import Inspiration from "./general/Inspiration";
import AirCharter from "./general/AirCharterTour";
import Deals from "./general/Deals";
import Package from "./general/Package";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-white text-white">
      <UserProfile />
      {/* Display user info if signed in */}
      {/* <NavBar/> */}
      {/* <HeroPage /> */}
      {/* <Package/> */}
      {/* <Trending/> */}
      {/* <Inspiration/> */}
      {/* <AirCharter/> */}
      {/* <Deals/> */}
    </div>
  );
};

export default HomePage;
