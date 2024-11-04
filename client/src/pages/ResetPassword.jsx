import { React, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    let navigate = useNavigate();
    const reg_no = searchParams.get("reg_no");
    const token = searchParams.get("token");

    useEffect(() => {
        console.log("reg_no:", reg_no);
        console.log("token:", token);
    }, [reg_no, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const newpassword = data.get("newpassword");
        const confirmpassword = data.get("confirmpassword");
        
        if (newpassword !== confirmpassword) {
            toast.error(`New Password and Confirm Password do not match!`, {
                autoClose: 5000,
                position: "top-right",
            });
        } else {
            const url = process.env.REACT_APP_BACKEND_URL + "/api/resetPassword";
            try {
                const res = await axios.post(url, {
                    password: newpassword,
                    token: token,
                    reg_no: reg_no,
                });
                
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
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                }
            } catch (error) {
                console.error("Error resetting password:", error.response.data);
                toast.error("An error occurred while resetting your password.", {
                    autoClose: 5000,
                    position: "top-right",
                });
            }
        }
    };

    return (
        <div>
            <form>
             <label for="uname"><b>Reg No</b></label>
             <input required type="password" name="password" id="password" label="Password"/>
             <input required type="password" name="confirmpassword" id="confirmpassword" label="Confirm Password" />
             <button type="submit" onSubmit={handleSubmit}></button>
             </form>
        </div>
    );
};

export default ResetPassword;
