import Card from "@/app/components/design/card/page";
import Header from "@/app/components/design/header/page";
export const Design = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-col bg-white 
    font-system "
    >
      <Header />
      <Card />
    </div>
  );
};

export default Design;
