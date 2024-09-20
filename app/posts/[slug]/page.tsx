interface PostPageProps {
    params: {
      slug: string;
    };
  }
  
  export default function PostPage({ params }: PostPageProps): JSX.Element {
    const { slug } = params;
  
    return (
      <main className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold text-white-800 mb-6">Post: {slug}</h1>
        <p className="text-lg text-white-600 mb-6">
          This is the content of the post with the slug "{slug}".
        </p>
      </main>
    );
  }