import Navbar from "../components/Navbar"
import ProductsList from "../components/ProductsList"
import OrderSelect from "../components/OrderSelect"
import { useState } from "react"

function Main() {
  const [params, setParams] = useState({
    column: 'createdAt',
    order: 'asc',
    ids: []
  })
  const [search, setSearch] = useState('');

  const [count, setCount] = useState('');

  const [selectOnWatch, setSelectOnWatch] = useState(false)
  const updateOrder = (e) => {
    const [column, order] = e.target.value.split(':')
    setParams(prevState => {
      return {
        column,
        order,
        ids: prevState.ids
      }
    })
  }

  const resetOrder = () => {
    setParams({
      column: 'createdAt',
      order: 'asc',
      ids: []
    })
    setSelectOnWatch(false);
  }

  const onWatch = () => {
    const ids = selectOnWatch ? JSON.stringify([]) : localStorage.getItem('itemsIds');
    setParams(prevState => {
      return { ...prevState, ids }
    })
    setSelectOnWatch(prevState => !prevState)
  }

  const updateWatch = () => {
    const ids = localStorage.getItem('itemsIds');
    setParams(prevState => {
      return { ...prevState, ids }
    })
    if (ids.length === 0) {
      setSelectOnWatch(false);
    }
  }

  return (
    <>
      <Navbar search={search} setSearch={setSearch} count={count} onWatch={onWatch} selectOnWatch={selectOnWatch}
              resetOrder={resetOrder} />
      <div className="container flex flex-row gap-5 flex-grow overflow-y-auto p-10">
        <div className="products-box">
          <div className='flex flex-row items-center gap-3'>
            <OrderSelect updateOrder={updateOrder} />
          </div>
          <ProductsList params={{ ...params, search }} setCount={(count) => {
            setCount(count);
            if (selectOnWatch) {
              updateWatch();
            }
          }} />
        </div>
      </div>
    </>
  )
}

export default Main
