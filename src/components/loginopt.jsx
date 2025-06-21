import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
export default function Loginopt({Icon, value}) {
    return (
        <>
            <div className=" flex items-center justify-center flex-row space-y-2 mb-2 h-8 w-full px-4 border-2 border-[#0f1f24] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2f5f3]">
                {Icon && <Icon fontsize="small" className="text-[#0f1f24] text-2xl" />}
                <h5>{value}</h5>
            </div>
            <div></div>        
        </>
    );
}