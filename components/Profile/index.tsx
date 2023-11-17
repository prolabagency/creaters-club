"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import NoProfile from "../../images/no-profile.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile, getProfile } from "@/redux/slices/profile";
import { useForm } from "react-hook-form";

const Profile = () => {
  const dispatch = useDispatch<any>();
  const {profile} = useSelector((state: any) => state)
  useEffect(() => {
    dispatch(getProfile())
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const Save = (data: any) => {
    dispatch(EditProfile(data))
  };

  const SaveAvatar = (e: any) => {
    dispatch(
      EditProfile({
        photo: e.target.files[0],
      })
    );
  };

  return (
    <div className="profile">
      <div className="profile_inner">
        <div className="profile_item">
          <Image
            width={200}
            height={200}
            style={{
              border: "1px solid red",
              borderRadius: "100px",
              objectFit: "cover",
            }}
            src={profile?.data?.photo ? profile?.data?.photo : NoProfile}
            alt=""
          />

          <div>
            
              <input
                onChange={(e) => SaveAvatar(e)}
                type="file"
                id="avatar"
                hidden
              />
              <label htmlFor="avatar">
                
              Edit
             
            </label>
          </div>
        </div>
        <div>
          <div className="profile_item">
            <div>Name</div>
            <input {...register('first_name', {required: true})} type="text" defaultValue={profile?.data?.first_name} />
          </div>
          <div className="profile_item">
            <div>Surname</div>
            <input {...register('last_name', {required: true})} type="text" defaultValue={profile?.data?.last_name} />
          </div>
        </div>
        <div>
          <div className="profile_item">
            <div>Email</div>
            <input {...register('email', {required: false})} type="text" defaultValue={profile?.data?.email} />
          </div>
          <div className="profile_item">
            <div>Phone</div>
            <input {...register('phone', {required: false})} type="text" defaultValue={profile?.data?.phone} />
          </div>
        </div>
      </div>

      <div className="profile_logout">
        <button onClick={handleSubmit(Save)}>Save</button>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
