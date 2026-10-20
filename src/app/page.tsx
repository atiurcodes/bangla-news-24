import MainNews from "@/components/mainpage/MainNews";
import MostRead from "@/components/mainpage/MostRead";
import OtherNews from "@/components/mainpage/OtherNews";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const [section, ...otherSections] = data.data;
  const mainNews = section.articles;
  return (
    <section className="">
      <div className="grid grid-cols-3 gap-5 container mx-auto p-4">
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div><OtherNews otherSections={otherSections} /></div>
        </div>
        {/* most read news seciton */}
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>
    </section>
  );
}
