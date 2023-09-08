import Range from "./Rate";
import WatchButton from "./WatchButton";
import { useState } from 'react';

function ProductItem({ item, setCount }) {
  const { id, name, image, price, description, rate } = item;

  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem('itemsIds')).findIndex((i) => i === id) !== -1)

  const addItem = () => {
    const itemsIds = JSON.parse(localStorage.getItem('itemsIds')) || [];
    const index = itemsIds.findIndex((i) => i === id);
    if (index === -1) {
      localStorage.setItem('itemsIds', JSON.stringify([...itemsIds, id]));
      setSelected(true)

    } else {
      itemsIds.splice(index, 1);
      localStorage.setItem('itemsIds', JSON.stringify(itemsIds));
      setSelected(false)
    }
    setCount(JSON.parse(localStorage.getItem('itemsIds')).length)
  }

  return (
    <>
      <div className="card w-96">
        <div className="card-body">
          <figure>
            <img src={import.meta.env.VITE_IMAGES_PATH + image} alt="" />
          </figure>
          <div className="text-zinc-900 text-base font-normal leading-normal tracking-wide min-h-[100px]">
            {name}
          </div>
          <div className="text-black text-opacity-90 text-2xl font-bold leading-9">
            ${price}
          </div>
          <div className="text-zinc-500 text-sm font-normal leading-tight tracking-tight mb-3 min-h-[50px]">
            {description}
          </div>
          <div className="card-actions items-center justify-between">
            <div className="text-xs items-center">
              {rate && <>
                <Range id={id} rate={rate} /> {rate}
              </>}
            </div>
            <WatchButton onClick={addItem} selected={selected} />
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductItem
