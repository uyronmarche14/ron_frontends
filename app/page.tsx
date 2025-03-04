import Navbar from "./components/navbar/page";
import { LandingPage } from "@/app/components/landingPage/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-default relative  font-systems">
      <Navbar />
      <div className="h-screen">
        <LandingPage />
      </div>
    </main>
  );
}
