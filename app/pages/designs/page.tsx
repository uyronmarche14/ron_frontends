import Card from "@/app/components/design/card/page";
import Header from "@/app/components/design/header/page";
import Filter from "@/app/components/design/filter_search/page";
export const Design = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-col bg-white 
    font-system px-48"
    >
      <Header />
      <Filter />
      <Card />
    </div>
  );
};

export default Design;
