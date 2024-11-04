import { React } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login (){
    const [reg_no, setreg_no] = useState("");
    const [Password, setPassword] = useState("");
    const [loading , setLoading] = useState(false)
    const [done, setDone] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setLoading(true);
        try{
        const url = process.env.REACT_APP_BACKEND_URL + "/api/login";
        const res = await axios.post(url, { reg_no: reg_no, password: Password });
        if (res.data.success === false) {
            toast.error(res.data.message, {
                autoClose: 5000,
                position: "top-right",
            });
        } else {
            toast.success(res.data.message, {
                autoClose: 5000,
                position: "top-right",
            });
            navigate("/main");
        }
        setDone(true);
    }
    catch(err){
        console.log(err.message);
        toast.err("Error fetching API", {
            autoClose: 5000,
            position: "top-right",
        });
    }
    finally {
        setLoading(false)
    }};

    return (
        <div>   
        {done ? (<h1>Logged success</h1>) :(
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="text"
            placeholder="enter reg No"
             
            value={reg_no}
            onChange={(e) => setreg_no(e.target.value)}
          />
          <input type="password"
            placeholder="enter password" value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
        )};
        </div>         
    );
};

export default Login;