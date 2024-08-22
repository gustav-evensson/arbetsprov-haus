import { Post } from '@/lib/types';
import PostComponent from '@/components/PostComponent';

const getPosts = async () => {
  const response = await fetch('https://bergvik.se/wp-json/wp/v2/posts?orderby=date&per_page=5')
  const posts = await response.json()
  return posts as Post[]
}

export default async function Home() {

  const posts = await getPosts()

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-5xl font-medium text-center mt-8 mb-2">Senaste postsen</h1>
      <p className="text-center text-muted-foreground mb-4">Se det allra senaste som händer hos oss</p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 place-items-center mt-8">
        {posts.map((post: Post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
