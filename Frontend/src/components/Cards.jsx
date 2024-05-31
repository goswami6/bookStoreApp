import React from 'react'

const Cards = ({ item }) => {
    console.log(item);
  return (
    <>
    <div className='m-4 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge text-pink-500">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer hover:bg-pink-400 hover:text-white duration-200 px-2 py-1 rounded-full border border-[2px]">Buy Now</div>
    </div>
  </div>
</div>
    </div>
      
    </>
  )
}

export default Cards
