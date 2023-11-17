'use client'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginProfile } from "../../redux/slices/profile";
import Link from "next/link";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const dispatch = useDispatch<any>();
  const { profile, cities } = useSelector((state: any) => state);

  const [city, setCity] = useState<any>();

  const onSubmit = (data: any) => {
    dispatch(LoginProfile(data));
  };

  return (
    <div className="login">
      <div className="login_inner">
        <div className="login_content">
          <div>
            <div className="login_item_title">Login</div>
            <div className="login_inputs">
              <div>
                <div className="login_item">
                  <label htmlFor="">Username</label>
                  <input
                    {...register("login", { required: true })}
                    type="text"
                  />
                  <div className="error">
                    {errors.login && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.login}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Password</label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                  />
                  <div className="error">
                    {errors.password && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.password}</div>
                </div>
                <div className="error">{profile?.error?.detail}</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "end", color: "black" }}>
            <button onClick={handleSubmit(onSubmit)} type="submit">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
