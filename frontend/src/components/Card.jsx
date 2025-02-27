import React from 'react'

function Card({item}) {
  
   
  return (
   <><div className='mt- my-2 p-3 '>
    <div className="card w-90 bg-base-100 shadow-xl  scale-75 hover:scale-90 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  <figure  ><img src={item.image} alt="Book" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className=" cursor-pointer px-2 py-1 rounded-full border border-2px hover:bg-red-700 hover:text-white duration-200">Read</div>
    </div>
  </div>
</div>
</div>
   </>
  )
}

export default Card
