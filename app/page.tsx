import Navbar from "./components/navbar/page";
import { LandingPage } from "@/app/components/landingPage/page";

export default function Home() {
  return (
    <main className="w-[1920px] min-h-screen bg-default relative font-sm">
      <div className="h-screen">
        <LandingPage />
      </div>
    </main>
  );
}
