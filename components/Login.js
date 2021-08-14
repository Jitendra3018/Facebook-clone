import Image from "next/image";
import { signIn } from "next-auth/client";
import Head from "next/head";

function Login() {
    return (
        <div className="grid place-items-center">
            <Head>
                <title>Login</title>
            </Head>
            <Image
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit="contain"
            />
            <h1
                onClick={signIn}
                className="p-5 cursor-pointer text-center bg-blue-500 rounded-full text-white"
            >
                Login to Facebook 2.0
            </h1>
        </div>
    );
}

export default Login;
