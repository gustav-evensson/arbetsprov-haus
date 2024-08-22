import { Post } from "@/lib/types";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const renderHtml = (html: string) => {
  return { __html: html };
};

const fetchImage = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.guid.rendered;
};

export default async function PostComponent({ post }: { post: Post }) {
  const excerpt = renderHtml(post.excerpt.rendered);
  const date = new Date(post.date);
  const imageURL = await fetchImage(post._links["wp:featuredmedia"][0].href);

  return (
    <div className="flex flex-col h-full w-full bg-background p-1 rounded-[1.25rem]">
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
        <Image src={imageURL} className="object-cover" alt={post.title.rendered} fill />
      </div>
      <div className="p-4 grow flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-4">{post.title.rendered}</h3>
        {/* <div className="postExcerpt" dangerouslySetInnerHTML={excerpt}></div> */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{date.toDateString()}</span>
          <Link className="viewPostBtn" href={`/post/${post.id}`}>
            <span>Visa post</span>
            <ArrowRightIcon className="buttonIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
