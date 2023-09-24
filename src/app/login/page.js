'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1 className="heading">Login Page</h1>
            <Link href="/">Go To Home Page</Link>
            <button onClick={() => navigate("/login/loginstudent")}>Go To Login Student Page</button>
            <button onClick={() => navigate("/login/loginteacher")}>Go To Login Teacher Page</button>
        </div>
    );
}

export default Login;
