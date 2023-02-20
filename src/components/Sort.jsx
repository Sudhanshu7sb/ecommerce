import React from 'react';
import { FaThList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";


const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView,sorting } = useFilterContext();
  return (
    <div className='flex justify-between p-2'>
      <div className='flex space-x-3'>
        <button className={grid_view ? 'bg-black p-1 text-white' : 'bg-white p-1'}>
          <BsGridFill onClick={setGridView} />
        </button>
        <button className={!grid_view ? 'bg-black p-1 text-white' : 'bg-white p-1'}>
          <FaThList onClick={setListView} />
        </button>
      </div>
      <div>{filter_products.length} products found</div>
      <div>
        <select name="" id="sort" className='' onChange={sorting}>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a" className='hover:bg-blue-600'>Price(z-a)</option>

        </select>
      </div>
    </div>
  )
}

export default Sort