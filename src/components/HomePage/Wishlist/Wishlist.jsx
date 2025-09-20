import { useWishlist } from "./WishlistContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        Your wishlist is empty ❤️
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      <ul className="space-y-4">
        {wishlistItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <span>{item.title}</span>
            </div>
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="px-3 py-1 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
