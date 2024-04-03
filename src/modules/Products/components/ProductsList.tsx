import { Button } from "@mui/material";

const ProductsList = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "$39.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: "$49.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Product 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "$59.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Product 6",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      price: "$69.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Product 7",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      price: "$79.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Product 8",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      price: "$89.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Product 9",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      price: "$99.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Product 10",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident?",
      price: "$109.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="w-full my-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg mb-2"
          />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-2 truncate">
            {product.description}
          </p>
          <p className="text-lg font-bold mb-2">{product.price}</p>
          <Button variant="contained" color="primary">
            View Product
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
