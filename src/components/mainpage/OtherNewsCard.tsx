import { ArticleType } from "@/type"
import Image from "next/image";
import Link from "next/link";

export interface OtherNewsCardProps {
    news: ArticleType;
}

export default function OtherNewsCard({ news }: OtherNewsCardProps) {
    console.log(news);
    return (
        <div>
            <Link href="">
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image src={news.imageUrl} alt={news.imageAlt}
                            width={600} height={600} />
                    </figure>
                    <div className="card-body">
                        <span className="text-red-600 font-bold">{news.category}</span>
                        <h2 className="card-title">{news.title}</h2>
                        <p>{news.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}