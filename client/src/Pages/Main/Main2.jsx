import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { IoArrowUpOutline, IoInformationCircle } from 'react-icons/io5'
import { RiSendPlane2Fill } from 'react-icons/ri'

export default function Main2() {
    return (
        <div className="p-1 pl-2 pr-2 justify-between flex flex-col bg-[#b5c4e3] gap-1">
            <div className="h-10 pt-[25px] pb-[25px] pr-4 flex justify-between items-center bg-[#000000] shadow-sm rounded-md mt-1 text-[#3B5594] text-lg font-bold">
                <h1 className='p-3  ml-5'>RecapAI</h1>
                <div className='text-2xl'><IoInformationCircle /></div>
            </div>
            <div className="flex justify-between">
                {/* chat div */}
                <div className="w-[70%] p-2 h-[40rem] bg-[#000000] rounded-md flex flex-col justify-between ">
                    <div className='text-white h-[70%] w-[70%]'>
                        <div>Chat with AI</div>
                        <ProgressBar now={90} />
                    </div>
                    <div className='w-full flex rounded-lg items-center p-3 overflow-hidden border-[#3B5594] border-solid border-[2.5px]'>
                        <input type='text' placeholder='Enter you message.' className='w-full focus:outline-none  text-white placeholder-white placeholder-opacity-70 bg-black' />
                        <RiSendPlane2Fill className='text-xl text-white' />
                    </div>

                </div>

                {/* history div */}
                <div className="w-[29.7%] p-2 h-[40rem] flex flex-col bg-[#000000] rounded-md justify-between">
                    <div className='h-[220px] w-full border-2 border-solid border-white rounded-lg'>Play video</div>
                    <div className='overflow-y-auto'>

                        <div className='mt-4 h-[80%] text-white'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga illo non cupiditate, vitae tempore eum nihil voluptatibus? Illum praesentium voluptas adipisci, ab quam numquam in totam. Consequuntur quos adipisci facere.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga illo non cupiditate, vitae tempore eum nihil voluptatibus? Illum praesentium voluptas adipisci, ab quam numquam in totam. Consequuntur quos adipisci facere.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga illo non cupiditate, vitae tempore eum nihil voluptatibus? Illum praesentium voluptas adipisci, ab quam numquam in totam. Consequuntur quos adipisci facere.Illum praesentium voluptas adipisci, ab quam numquam in totam. Consequuntur quos adipisci facere.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga illo non cupiditate, vitae tempore eum nihil voluptatibus? Illum praesentium voluptas adipisci, ab quam numquam in totam. Consequuntur quos adipisci facere.
                        </div>
                    </div>

                    <div className="p-3 bg-[#3B5594] text-white rounded-lg flex justify-between items-center">
                        <h4>Show History</h4>
                        <IoArrowUpOutline />
                    </div>
                </div>
            </div>
        </div>

    )
}
