import Navbar from "./components/navbar/page";
import { LandingPage } from "@/app/components/landingPage/page";

export default function Home() {
  return (
    <div className="flex flex-col p-6  items-center justify-center min-h-screen ">
      <Navbar />
      <LandingPage />
    </div>
  );
}
