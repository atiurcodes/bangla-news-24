export interface CategoryType {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

export interface HeadlineType {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string;
    lastPublished: string;
    source: string;
}

export interface MainNewsType {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string;
    lastPublished: string;
    source: string;
}

export interface ArticleType {
    category: string;
    description: string;
    firstPublished: string;
    id: string;
    imageAlt: string;
    imageUrl: string;
    isLive: boolean;
    lastPublished: string;
    link: string;
    source: string;
    title: string;
    type: string;
}

export interface OtherSectionType {
    articles: ArticleType[];
    count: number;
    curationId: string;
    curationType: string;
    link: string | null;
    title: string;
}
