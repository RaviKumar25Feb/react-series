import React from 'react';
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";

const Card = (props) => {
    let data = props.data;
    let leftHandler = props.leftHandler;
    let rightHandler = props.rightHandler;
    let randomHandler = props.randomHandler;
    const subString = (data.about).substring(0,200);

  return (
    <div>
        <div>
            <h1 className='font-bold text-4xl text-center select-none'>{data.name}</h1>
        </div>

        <div className='flex justify-center relative items-center h-[27rem] w-[27rem] bg-slate-400 m-7 rounded-md hover:shadow-black transition duration-200'>
            <div onClick={leftHandler} className='text-3xl hover:scale-125 transition-all duration-200 mx-5 select-none cursor-pointer'>
                <GiFastBackwardButton />
            </div>
            <div className='flex flex-col bg-slate-200 justify-center items-center h-[20rem] w-[20rem] relative'>
                <div className='h-[140px] w-[140px] flex justify-center'>
                    <img className='bottom-[250px] absolute h-[140px] w-[140px] rounded-full z-[50] select-none' src={data.image}/>
                    <div className='bottom-[245px] absolute h-[150px] w-[150px] bg-violet-500 z-[30] rounded-full'></div>
                </div>
                <p className='absolute top-[80px] text-[20px] font-bold select-none'>{data.time}</p>
                <p className='text-gray-600 opacity-4 text-justify px-10 top-[130px] absolute text-[14px] select-none'>
                    {
                        data.about.length > 200 ? subString + "...." : data.about
                    }
                </p>
                <h2 className='absolute bottom-[-15px] text-[20px] font-bold bg-slate-500 rounded-sm px-3 text-white select-none'>{data.profile}</h2>
            </div>
            <div onClick={rightHandler} className='hover:scale-125 transition-all duration-200 text-3xl mx-5 select-none cursor-pointer'>
                <GiFastForwardButton />
            </div>
        </div>


        <div className='aboslute text-center'>
            <button onClick={randomHandler} className='text-2xl p-3 bg-blue-900 text-white rounded-md select-none cursor-pointer hover:scale-95 transition-all duration-300'>Get random</button>
        </div>
    </div>
  )
}

export default Card;