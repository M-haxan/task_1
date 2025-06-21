import  React from 'react';
export default function Input({lable, type, placeholder}) {
    return(
        <div className='flex flex-col space-y-2 mb-4'>
            <lable>
                {lable}
            </lable>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full h-8 px-4 border-2 border-[#0f1f24] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2f5f3]">
            </input>
        </div>
    );
}