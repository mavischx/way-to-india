// app/page.tsx
import SignInButton from "./components/SignInButton";
import UserProfile from "./components/UserProfile";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl">Welcome to My Next.js App</h1>
      <UserProfile /> {/* Display user info if signed in */}
      <SignInButton />
    </div>
  );
};

export default HomePage;
