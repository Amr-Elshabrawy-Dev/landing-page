import { FaEnvelope, FaLock } from "react-icons/fa6";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="overlay login__overlay" />
      <div className="login">
        <div className="login__form">
          <h3>Login</h3>
          <form>
            <div className="input__group">
              <FaEnvelope size={30} className="icon" />
              <input type="email" placeholder="amr_elshabrawy@gmail.com" />
            </div>
            <div className="input__group">
              <FaLock size={30} className="icon" />
              <input type="password" placeholder="password" />
            </div>
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
