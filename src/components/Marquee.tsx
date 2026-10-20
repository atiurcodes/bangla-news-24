import { HeadlineType } from "@/type";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css";

export default async function Marquee() {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headlines: HeadlineType[] = data.data;
    return (
        <div className="bg-red-600 text-white">
            <div className="container mx-auto">
                <div className="flex items-center">
                    <span className="bg-red-800 px-4 py-1 font-bold">সর্বশেষ</span>
                    <MarqueeText direction="right" duration={10}
                        className="py-1">
                        {
                            headlines.map(head => <span key={head.id}>
                                <span>{head.title}</span>
                                <span className="mx-4">•</span>
                            </span>)
                        }
                    </MarqueeText>
                </div>
            </div>
        </div>
    )
}