import LoginForm from "../components/loginForm";

const Login = () => {
    return ( 
        <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <LoginForm />
        </div>
      </div>
     );
}
 
export default Login;