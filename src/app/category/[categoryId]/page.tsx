import OtherNewsCard from "@/components/mainpage/OtherNewsCard";
import { ArticleType } from "@/type";

const SingleCategoryPage = async ({ params }: { params: { categoryId: 'string' } }) => {
    const { categoryId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const catNews: ArticleType[] = data.data;
    console.log(catNews);
    return (
        <div className="container mx-auto">
            <div className="border-b-2 border-red-700 py-2 mb-4">
                <h2 className="text-xl font-bold text-red-700">{data.title}</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    catNews.map(news => <OtherNewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default SingleCategoryPage;