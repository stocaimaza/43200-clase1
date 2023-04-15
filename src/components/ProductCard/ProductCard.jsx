import ProductButton from "../ProductButton/ProductButton"
import ProductImage from "../ProductImage/ProductImage"
import ProductInfo from "../ProductInfo/ProductInfo"
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className="product-card">
        <ProductImage/>
        <ProductInfo/>
        <ProductButton/>
    </div>
  )
}

export default ProductCard
