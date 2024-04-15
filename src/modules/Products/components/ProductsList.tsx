import { Button } from "@mui/material";
import { Product } from "../../../Types/ProductsTypes";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../../Context/ProductsContext";
import RatingStars from "../../../components/RatingStars";

const ProductsList = ({ products }: { products: Product[] }) => {
  const { gridViewType } = useProductsContext();
  return (
    <>
      {Object.keys(products).length <= 0 ? (
        <h2 className="flex-center">Product Not available</h2>
      ) : (
        <>
          {gridViewType ? (
            <div className="w-full my-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product: Product) => (
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
                  <div>
                    <span>Comapny : </span>
                    <span>{product.company}</span>
                  </div>
                  <Button variant="contained" color="primary">
                    View Product
                  </Button>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-10 mb-10">
              {products.map((product: Product) => (
                <Link
                  to={`${product._id}`}
                  className="flex gap-16 bg-gray-100 p-5 rounded-xl"
                  key={product._id}
                >
                  <div className="w-1/3">
                    <img
                      src={product?.images?.at(0)}
                      alt={product.name}
                      className="rounded-xl w-full h-[230px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-5 w-2/3">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                      <RatingStars readOnly={true} stars={product.stars} />
                      <div>
                        <span>Company : </span>
                        <span>{product.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end w-1/3">
                      <p className="text-lg font-bold mb-2">
                        Rs. {product.price}
                      </p>
                      <Button variant="contained" color="primary">
                        View Product
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductsList;
