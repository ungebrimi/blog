import React from 'react'

const Author = ({ author }) => {
  return (
    <div className='text-center flex flex-col items-center justify gap-4 mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20 lg:flex-row'>
        <img src={author.photo.url} alt={author.name} height='50px' width='50px' className='align-middle rounded-full w-28 h-28'/>
        <div>
            <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-white text-lg'>{author.bio}</p>
        </div>
    </div> 
  )
}

export default Author