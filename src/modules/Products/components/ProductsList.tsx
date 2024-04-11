import { Button } from "@mui/material";
import { Product } from "../../../Types/ProductsTypes";
import { Link } from "react-router-dom";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <>
      {Object.keys(products).length <= 0 ? (
        <h2 className="flex-center">Product Not available</h2>
      ) : (
        <div className="w-full my-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product: Product) => {
            return (
              <Link
                to={`${product._id}`}
                key={product._id}
                className="border p-4 rounded-lg"
              >
                <img
                  src={product?.images?.at(0)}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-lg font-bold mb-2">{product.price}</p>
                <Button variant="contained" color="primary">
                  View Product
                </Button>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductsList;
