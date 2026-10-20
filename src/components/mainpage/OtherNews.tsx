import { OtherSectionType } from "@/type"
import OtherNewsCard from "./OtherNewsCard";

export interface OtherNewsProps {
    otherSections: OtherSectionType[];
}

export default function OtherNews({ otherSections }: OtherNewsProps) {
    return (
        <div>
            <div className="grid gap-4">
                {
                    otherSections.map(title => <div key={title.curationId}>
                        <h1 className="font-bold border-b-2 border-red-700 pb-2 my-6">{title.title}</h1>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                title.articles.map(news => <OtherNewsCard key={news.id} news={news} />)
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}