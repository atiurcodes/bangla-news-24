import MainNews from "@/components/mainpage/MainNews";
import OtherNews from "@/components/mainpage/OtherNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const [section, ...otherSections] = data.data;
  const mainNews = section.articles;
  return (
    <section className="">
      <Marquee />
      <div className="grid grid-cols-3 container mx-auto p-4">
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div><OtherNews otherSections={otherSections} /></div>
        </div>
        <div className="col-span-1">

        </div>
      </div>
    </section>
  );
}
