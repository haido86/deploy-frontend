import { Link } from 'react-router-dom'

import { Product } from '../../types/type'

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className=" m-1 relative flex flex-col items-center object-cover border border-gray-200 rounded-md"
      key={product.id}>
      <div className="border-t-gray-100 p-2">
        <Link to={`/products/${product.id}`}>
          <div className="mt-2 font-bold mb-2">{`${product.title}`.slice(0, 12)}</div>
        </Link>
        <div>{product.description}</div>
      </div>
    </div>
  )
}

export default ProductCard
