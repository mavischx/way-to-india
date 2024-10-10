// app/page.tsx
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";


const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-white text-white">
      {/* <NavBar/> */}
      <UserProfile /> 
      {/*Display user info if signed in*/}
     
    </div>
  );
};

export default HomePage;
