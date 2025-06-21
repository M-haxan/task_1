export default function Signupbtn() {
    return (
        <div className="py-4">
            <button className="w-full h-8 bg-[#0f1f24]  text-white rounded-md hover:bg-[#0a1418] transition duration-300">
                Sign Up
            </button>
            <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
            </div>
        </div>
        
    );
}