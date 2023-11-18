'use client'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterProfile } from "../../redux/slices/profile";
import Link from "next/link";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const dispatch = useDispatch<any>();
  const { profile, cities } = useSelector((state: any) => state);

  const [city, setCity] = useState<any>();

  const onSubmit = (data: any) => {
    dispatch(RegisterProfile({
      ...data,
      role: 0
    }));
  };

  return (
    <div className="login">
      <div className="login_inner">
        <div className="login_content">
          <div>
            <div className="login_item_title">Register</div>
            <div className="login_inputs">
              <div>
                <div className="login_item">
                  <label htmlFor="">Username</label>
                  <input
                    {...register("username", { required: true })}
                    type="text"
                  />
                  <div className="error">{profile?.error?.username}</div>
                  <div className="error">
                    {errors.username && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.login}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Password</label>
                  <input
                    {...register("password", { required: true })}
                  />
                  <div className="error">
                    {errors.password && "Это поле не может быть пустым."}
                  </div>  
                  <div className="error">{profile?.error?.password}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Confirm password</label>
                  <input
                    {...register("password_confirm", { required: true })}
                  />
                  <div className="error">
                    {errors.password_confirm && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.password}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">First name</label>
                  <input
                    {...register("first_name", { required: true })}
                  />
                  <div className="error">
                    {errors.first_name && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.password}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Last name</label>
                  <input
                    {...register("last_name", { required: true })}
                  />
                  <div className="error">
                    {errors.last_name && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.password}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Email</label>
                  <input
                    {...register("email", { required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address (@gmail.com)",
                      }, })}
                  />
                  <div className="error">
                    {errors.email && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.password}</div>
                </div>
                <div className="error">{profile?.error?.detail}</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "end", color: "black" }}>
            <button onClick={handleSubmit(onSubmit)} type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register
