import React from 'react'
import Books from '../../assets/datingBook.jpg'

function Hero() {
  
  return (
    <div className="container mx-auto bg-base-200 md:flex md:justify-between items-center p-8 mt-10 rounded-xl h-auto md:h-[560px]">
    <div className="space-y-6 text-center md:text-left md:w-1/2">
      <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-800">
        Books to freshen up <br className="hidden md:block" /> your bookshelf
      </h1>
      <button className="bg-[#23BE0A] text-white text-sm rounded px-6 py-3 hover:bg-[#1ea309] transition">
        View The List
      </button>
    </div>

    <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
      <img
        src={Books}
        alt="Books Illustration"
        className="h-[400px] w-auto object-contain"
      />
    </div>
  </div>
  )
}

export default Hero;