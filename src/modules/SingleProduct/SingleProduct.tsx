import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import ProductMoreInfo from "./Components/ProductMoreInfo/ProductMoreInfo";
import ProductView from "./Components/ProductView/ProductView";

const SingleProduct = () => {
  return (
    <div>
      <NavigationPanel />
      <ProductView />
      <ProductMoreInfo />
    </div>
  );
};

export default SingleProduct;
