import useSwr from 'swr'
import fetcher from '../services/axios'
import ProductItem from './ProductItem'
import { useState } from 'react'
import OrderSelect from './OrderSelect'

function ProductsList({ params, setCount }) {
  const { data, isLoading, error } = useSwr(['/items', params], fetcher)

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>Error</>
  }

  return (
    <>
      <div className='flex flex-wrap'>
        {data.map((item, index) =>
          <ProductItem item={item} key={index} setCount={setCount} />
        )}
      </div>
    </>
  )
}

export default ProductsList
