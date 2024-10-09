// app/page.tsx
import '@/app/globals.css'
import UserProfile from "./components/UserProfile";


const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-white text-white">
      <UserProfile /> {/*Display user info if signed in*/}
    </div>
  );
};

export default HomePage;
