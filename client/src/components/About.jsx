import React from 'react'

export default function AboutDiv() {
  return (
    <div className='absolute top-[25%] right-[32%] h-[300px] w-[500px] bg-[#2F3136] rounded-md p-3 text-white shadow-sm shadow-gray-700'>
      <h2 className='font-bold text-xl text-center underline mt-4'>Usage Instructions</h2> 
      <ul className='mt-4 font-mono'>
        <li>Welcomed by clickable portions of the video that redirects you to important points along with the complete transcript on the right!</li>
        <br />
        <li><strong>Summarize:</strong> Gives out a 10 point summary of the video.</li>
        <li><strong>Generate a quiz:</strong> Gives a 5 quesiton MCQ around the video for the user to self-analyze</li>
      </ul>
    </div>
  )
}
