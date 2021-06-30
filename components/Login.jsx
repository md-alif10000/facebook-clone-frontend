import Image from "next/image"
import {signIn} from 'next-auth/client'

function Login() {
    return (
      <div  className="grid place-items-center m-20" >
        <Image
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          height={200}
          width={200}
          objectFit="containe"
            />
            <h1  onClick={signIn}  className='bg-blue-500 text-white p-3 rounded-full m-10 cursor-pointer text-center ' >Login with Facebook</h1>
      </div>
    );
}

export default Login
