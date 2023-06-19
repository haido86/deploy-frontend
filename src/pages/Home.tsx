import { useSelector } from 'react-redux'

import { RootState } from '../store/store'
import ProductCard from '../components/productCard'

function Home() {
  const { products } = useSelector((state: RootState) => state)

  if (products.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen">
      <div className="m-5 grid grid-cols-2 gap-y-5 gap-x-2 transition duration-150 sm:grid-cols-3 sm:gap-x-3 sm:p-1 md:grid-cols-4 md:gap-x-1 md:p-2 lg:grid-cols-5 lg:gap-4 lg:p-3">
        {products.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
