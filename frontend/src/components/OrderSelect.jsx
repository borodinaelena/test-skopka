function OrderSelect({ updateOrder }) {
  return (
    <>
      <div>Sort By:</div>
      <div className="form-control w-full max-w-xs">
        <select className="select select-bordered" onChange={updateOrder}>
          <option value="createdAt:asc" defaultValue>By Date: newest first</option>
          <option value="createdAt:desc">By Date: newest last</option>
          <option value="price:asc">By Price: cheapest first</option>
          <option value="price:desc">By Price: expensive first</option>
          <option value="rate:desc">By Rate: Top first</option>
          <option value="rate:asc">By Rate: Wors first</option>
        </select>
      </div>
    </>
  )
}

export default OrderSelect