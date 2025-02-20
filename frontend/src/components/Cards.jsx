import React from 'react'

function Cards({item}) {
    // console.log(item);
    return (
        <div className='my-3 p-3'>
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Price ${item.price}</div>
                        <div className="badge badge-outline hover:bg-pink-500 hover:text-white hover:p-4 hover:text-xl duration-400 cursor-pointer">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
