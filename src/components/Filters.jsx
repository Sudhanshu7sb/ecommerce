import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/filterContext'
import FormatPrice from '../helpers/FormatPrice';

const Filters = () => {

  const { all_products, filters: { text, color, price, maxPrice, minPrice }, updateFilterValue,clearFilters } = useFilterContext();
  // console.log(color, "color")

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property]
    })


    if (property === "colors") {
      newVal = newVal.flat();
    }

    newVal = ["all", ...new Set(newVal)];
    // console.log(newVal);
    return newVal;
  }

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  // console.log(color, "color")

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder='search any product' name="text" value={text} onChange={updateFilterValue} />
        </form>
      </div>
      <div>
        <h3>Categories</h3>
        <div className='flex flex-col items-start'>
          {categoryData.map((currElem, index) => {
            return (<button key={index} type="button" name="category" value={currElem} onClick={updateFilterValue}>{currElem}</button>)
          })}
        </div>
      </div>

      <div>
        <form action="#">
          <select name="company" id="" onChange={updateFilterValue}>
            {companyData.map((currElem, index) => {
              return (<option key={index} name="company" value={currElem} >{currElem}</option>)
            })}
          </select>
        </form>
      </div>

      <div>
        <h3>Colors</h3>
        <div className='flex  items-start space-x-2'>
          {colorsData.map((currCol, index) => {
            if (currCol === "all") {
              return <button key={index} type="button" name="color" value={currCol} onClick={updateFilterValue} className=" " >All</button>
            }
            return (<button key={index} type="button" name="color" value={currCol} onClick={updateFilterValue} className="rounded-full text-black  w-5 h-5 " style={{ backgroundColor: currCol }}>{currCol === color ? <FaCheck className='text-green-600  ' /> : null}</button>)
          })}
        </div>

        {/* price */}
        <div>
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} />
            <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
          </p>
        </div>

        {/* clear filter */}
        <div>
          <button onClick={clearFilters}>Clear Filter</button>
        </div>
      </div>
    </div>
  )
}
// {color === currCol ? "z" : null}
export default Filters