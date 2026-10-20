import { MostReadNewsType } from "@/type";

const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const mostReadNews: MostReadNewsType[] = data.data;
    return (
        <div>
            <div className="grid gap-4 border border-gray-300 p-4 rounded-xl">
                <h2 className="font-bold text-red-700">সর্বাধিক পঠিত</h2>
                {
                    mostReadNews.map((mNews, i) => <div key={mNews.id}>
                        <div className="flex gap-2">
                            <span className="text-xl text-red-800">{i + 1}.</span>
                            <h2>{mNews.title}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MostRead;