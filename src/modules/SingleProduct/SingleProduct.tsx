import { useParams } from "react-router-dom";
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import ProductMoreInfo from "./Components/ProductMoreInfo/ProductMoreInfo";
import ProductView from "./Components/ProductView/ProductView";
import { useProductsContext } from "../../Context/ProductsContext";
import { useEffect } from "react";

const SingleProduct = () => {
  const {
    getSingleProduct,
    getProductReview,
    singleProduct,
    isSingleLoading,
    review,
    isReviewLoading,
  } = useProductsContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct?.(`products/${id}`);
    getProductReview?.(`review/${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div>Loading product details...</div>;
  }
  if (!singleProduct) {
    return <div>Error loading product details.</div>;
  }

  return (
    <div>
      <NavigationPanel />
      <ProductView product={singleProduct} />
      <ProductMoreInfo
        product={singleProduct}
        reviewData={review}
        isReviewLoading={isReviewLoading}
      />
    </div>
  );
};

export default SingleProduct;
