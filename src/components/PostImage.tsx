import Image from "next/image";

const fetchImage = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    image: data.guid.renderer,
    slug: data.slug,
  };
};

export default async function PostImage({ postImageURL }: { postImageURL: string }) {
  const imageData = await fetchImage(postImageURL);

  return <Image src={imageData.image} className="postImage" alt={imageData.slug} width={300} height={200} />;
}
