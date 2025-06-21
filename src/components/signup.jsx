import Logo from "./logo";
import Input from "./input";
import Signupbtn from "./signupbtn";
import Loginopt from "./loginopt";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import Right from "./right";
import SocialsLinks from "./socialsLink";
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Signup() {
    return (
        <> 
            <div className="flex justify-center items-center  min-h-screen w-full bg-blue-100 p-4 md:p-8 flex-col md:flex-row">
                <div className="flex items-center justify-center w-full lg:w-80% h-full p-3 flex-col lg:flex-row">
                    <div className="w-full h-[97vh] md:w-2/5 md:h-full bg-white shadow-lg p-4 md:p-8">
                        <Logo/>
                        <div className="  py-6 md:py-8">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                           Welcome Back!</h1>
                            <p className="w-full py-2 text-sm">Singn in to Access your dashboard and continue your QA process</p>
                        </div>
                        <div className="flex flex-col w-full ">
                            <Input lable="Email" type="email" placeholder="Enter your email" />
                            <Input lable="Password" type="password" placeholder="Enter your password" />
                        </div>
                        
                            <div className="text-right mt-1">
                                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                                Forgot password?
                                </a>
                            </div>
                            <Signupbtn/>
                            <Loginopt Icon={GoogleIcon} value="Continue with Google"/>
                            <Loginopt Icon={AppleIcon} value="Continue with Apple"/>
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-600">
                                    Don't have an account? 
                                    <a href="/signup" className="text-blue-600 hover:underline"> Sign Up</a>
                                </p>
                            </div>
                    </div>
                    <div className="w-full md:w-2/5   bg-[#0f1f24]">
                        <Right/>
                    </div>
                </div>  
            </div>
        </>
    );
}