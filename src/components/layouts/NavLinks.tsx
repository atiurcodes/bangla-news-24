import { CategoryType } from "@/type";
import Link from "next/link";

const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs: CategoryType[] = data.data;
    const filteredNavs = navs.filter(n => n.scrapable);
    return (
        <section className="flex justify-center gap-4 py-4">
            <Link href={'/'}>হোম</Link>
            {
                filteredNavs.map(nav => <Link href={nav.slug} key={nav.slug}>
                    {nav.title}
                </Link>)
            }
        </section>
    )
}
export default NavLinks;