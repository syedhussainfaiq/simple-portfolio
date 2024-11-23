
import { MdAttachEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
export default function Contact () {
    return(
        <div className="p-8 min-h-screen bg-gray-900 text-white ">
            <h1 className="text-3xl font-bold mb-4 flex justify-center ">
                Contact Me
            </h1>
            <div className="flex justify-center font-semibold"> 
           
                 <address  className="text-blue-400 m-4 " > <MdAttachEmail/>
                syedfaiqhussain78@gmail.com
                <br/>
                <a className="text-blue-400 m-6"><IoIosPhonePortrait />
               
                    03039495445</a>
                </address>
                
               
            
                </div>
        </div>
    )
}