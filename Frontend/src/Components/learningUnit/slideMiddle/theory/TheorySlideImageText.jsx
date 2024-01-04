import React from 'react'
import rose from '../../../../assets/images/rose.jpg';
import { useSelector } from 'react-redux';
const TheorySlideImageText = () => {
  const {title, imageUrl, content} = useSelector(state => state.theoryImageSlideSlice); 

  return (
    <div className='flex flex-col items-center w-[80%] mx-auto gap-10 mb-5'>
      <h1 className='text-secondary text-3xl font-itim'>{title}</h1>
      <div className='flex justify-between'>
        <div className='w-2/5'>
          <img src={rose} alt='image' className='rounded-[15px] w-full block'/>
        </div>
        <div className='text-secondary font-itim w-3/5 ml-10'>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default TheorySlideImageText