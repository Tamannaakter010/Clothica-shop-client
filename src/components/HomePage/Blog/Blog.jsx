


const Blog = () => {
 
  const posts = [
    {
      id: 1,
      title: "Spring Fashion Trends 2025",
      excerpt: "Discover the latest fashion trends for spring, featuring bold colors and lightweight fabrics.",
      image: "https://i.ibb.co.com/rRFfymGY/women.jpg",
    },
    {
      id: 2,
      title: "Top 10 Men's Outfits",
      excerpt: "Explore the best men's outfits for any occasion, from casual to formal wear.",
      image: "https://i.ibb.co.com/5hXhmwGF/man.jpg",
    },
    {
      id: 3,
      title: "Sustainable Clothing Guide",
      excerpt: "Learn how to build a sustainable wardrobe with eco-friendly clothing options.",
      image: "https://i.ibb.co.com/n94T897/weeding.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-1/3 h-48 object-cover"
            />
            <div className="p-4 md:w-2/3">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;