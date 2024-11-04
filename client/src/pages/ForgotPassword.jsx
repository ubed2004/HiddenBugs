import { React } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const reg_no = data.get("reg_no"); 
        const url = process.env.REACT_APP_BACKEND_URL + "/api/forgotPassword";
        
        try {
            const res = await axios.post(url, { reg_no: reg_no });
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
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.", {
                autoClose: 5000,
                position: "top-right",
            });
        }
    };

    return (
        <div>
            <form>
             <label for="uname"><b>Reg No</b></label>
             <input type="text" id="reg_no" autoComplete="reg_no" required />
             <button type="submit" onSubmit={handleSubmit} ></button>
             </form>
        </div>
    );
};

export default ForgotPassword;
