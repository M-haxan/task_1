
import FacebookIcon from '@mui/icons-material/Facebook';
import SocialsLinks from './socialsLink';
export default function Right() {
    return(
        <>
            <div className="text-white flex flex-col  space-y-4 px-8 gap-y-24 bg-[#0f1f24] h-full">
               <div className="flex items-center justify-center flex-col mt-20 space-y-4"> 
                <h1 className="text-xl font-bold " >Reveloutionz QA with Smarter Automation</h1>
                <p className="w-80 text-sm">"Soft QA has completely transformed our testing process. it reliable, efficient and ensure our releases are always our top notch"</p>
                <div className="flex flex-row px-2 py-2">
                    <div>
                        <img  className="h-12 w-12 rounded-full object-cover mr-2" src="profile.jpg"></img>
                    </div>
                    <div>
                        <h2 className="font-semibold text-base">Hassan</h2>
                        <p className="text-sm text-gray-200">Web Developer </p>
                    </div>
                </div>
              </div>

              <div className='mt-40'>  
                <div className="flex items-center justify-center px-4 space-x-4 py-8">
                    <h5 className="text-sm">Join 1k Team</h5>
                    <div className="flex-1 w-60 h-px bg-gray-100"></div>
                </div>
                    <div className="grid grid-cols-3 gap-4 h-auto ">
                    <SocialsLinks Icon={FacebookIcon} />
                    <SocialsLinks Icon={FacebookIcon} />
                    <SocialsLinks Icon={FacebookIcon} />
                    <SocialsLinks Icon={FacebookIcon} />
                    <SocialsLinks Icon={FacebookIcon} />
                    <SocialsLinks Icon={FacebookIcon} />
                </div>
              </div>  
                
            </div>
        </>
    )
}