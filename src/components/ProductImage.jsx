import React, { useState } from 'react'

const ProductImage = ({ imgs }) => {

  const [mainImg, setMainImg] = useState(imgs[0]);

  return (
    <section className='w-full flex space-x-3'>
      <div className="w-1/4 flex flex-col space-y-3 items-center justify-evenly">
        {
          imgs?.map((currImg, index) => {
            return (
              <React.Fragment key={index}>
                <figure >
                  <img src={currImg.url} alt={currImg.filename} key={index} className="w-full cursor-pointer" onClick={() => setMainImg(currImg)} />
                </figure>
              </React.Fragment>
            )
          })
        }
      </div>
      <div className='w-3/4 flex justify-center items-center'>

        <figure className='w-full'>
          <img src={mainImg.url} alt={mainImg.filename} className='w-full' />
        </figure>
      </div>
    </section>
  )
}

export default ProductImage