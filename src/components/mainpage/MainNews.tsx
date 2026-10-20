import { MainNewsType } from "@/type";
import Image from "next/image";
import Link from "next/link";

export default function MainNews({ news }: { news: MainNewsType[] }) {
    const [firstNews, ...otherNews] = news;
    return (
        <div className="flex gap-4">
            <Link href="" className="flex-1">
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image src={firstNews.imageUrl} alt={firstNews.imageAlt}
                            width={600} height={600} />
                    </figure>
                    <div className="card-body">
                        <span className="text-red-600 font-bold">{firstNews.category}</span>
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description}</p>
                    </div>
                </div>
            </Link>
            <div className="border border-gray-300 rounded-xl flex-1">
                <Link href="">
                    {
                        otherNews.slice(0, 4).map(other => <div key={other.id}
                            className="p-5 border-b last:border-b-0 border-gray-300 ">
                            <span className="text-red-600 font-bold">{other.category}</span>
                            <p className="mt-1">{other.title}</p>
                        </div>)
                    }
                </Link>
            </div>
        </div>
    )
}