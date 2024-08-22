import { Post } from "@/lib/types";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const getPost = async (id: string) => {
  const response = await fetch(`https://bergvik.se/wp-json/wp/v2/posts/${id}`);
  const posts = await response.json();
  return posts as Post;
};

const fetchImage = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.guid.rendered;
};

export default async function PostPage({ params }: { params: { postID: string } }) {
  const post = await getPost(params.postID);
  const imageURL = await fetchImage(post._links["wp:featuredmedia"][0].href);

  const date = new Date(post.date);

  return (
    <div className="w-full min-h-screen bg-background">
      <main className="max-w-screen-xl mx-auto p-4">
        <Link href="/" className="mb-4 flex items-center w-fit px-4 py-2 group border rounded-lg hover:bg-muted transition-colors">
          <ArrowLeftIcon className="inline-block mr-2 size-5 group-hover:-translate-x-1 transition-transform" />
          Tillbaka
        </Link>
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-6 md:mb-8">
          <Image src={imageURL} className="object-cover" alt={post.title.rendered} fill quality={50} />
        </div>
        <div className="max-w-screen-md mx-auto">
          <span className="text-muted-foreground text-sm">{date.toDateString()}</span>
          <h1 className="text-2xl md:text-4xl font-semibold mb-6 mt-3">{post.title.rendered}</h1>
          <div className="contentContainer" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </div>
      </main>
    </div>
  );
}
