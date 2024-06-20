import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api/sliceAuth";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function Login() {
  // const { token } = useSelector((state) => state.sliceAuth);
  const token = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM", form);
    const result = await login(form);
    console.log("RESULT", result);
    navigate("/auth/me");

  };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/auth/me");
  //   }
  // }, [token, navigate]);

  return (
    <div className="login-page">
      {!token && (
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-title">Login</h1>
          <div className="form-group">
            <input
              type="username"
              className="form-control"
              placeholder="Username..."
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="form-submission">
            <button type="submit" className="login-button">
              Login
            </button>
            <p>
              No Account?
              <Link to="/auth/register"> Sign up</Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}