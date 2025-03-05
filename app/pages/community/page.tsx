import Card from "@/app/components/design/card/page";
import Header from "@/app/components/community/header/page";
import PostInput from "@/app/components/community/posting/page";
import bg1 from "@/public/bg.jpeg";
export default function Design() {
  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-col bg-white 
    font-system px-48"
    >
      <Header />
      <PostInput
        id={1}
        title="The Journey"
        description="pakinggang mo journey"
        images={bg1}
      />
    </div>
  );
}
