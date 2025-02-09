import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Course() {

  const  [book , setBook] = useState([]);
  useEffect(() => {
    const getBook = async() => {
      try {
        const res =  await axios.get("http://localhost:4002/book")
        console.log(res.data)
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook()
  },[])


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
          <h1 className='text-2xl md:text=4xl'>We're delighted to have you{" "}
            <span className='text-pink-500'>Here!  :)</span>
          </h1>
          <p className='mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci amet esse vitae? Amet dolore autem cum error sint itaque quasi, laboriosam laborum nostrum iusto debitis voluptatibus. Suscipit, quaerat ducimus.
          </p>
          <Link to='/'>
            <button className='btn mt-6 btn-secondary'>Go Back</button>
          </Link>
        </div>
        <div className='grid grid-col-2'>
          {book.map((item) => {
            return <Cards key={item.id} item={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default Course
