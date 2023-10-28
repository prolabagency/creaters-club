"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import NoProfile from '../../../images/no-profile.jpeg'

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const profileData: any = localStorage.getItem("profile");
    if (profileData) {
      const profile = JSON.parse(profileData);
      setProfile(profile);
    }
  }, []);

  const Logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const Save = () => {

  }

  const [avatar, setAvatar] = useState<any>();
  const [avatarShow, setAvatarShow] = useState<any>();

  const SaveAvatar = (e: any) => {
    setAvatar(e.target.files[0])
    setAvatarShow(URL.createObjectURL(e.target.files[0]))
  }

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
            src={profile?.photo ? profile?.photo : NoProfile}
            alt=""
          />

          <div>
          <button style={{
            width: '100%'
          }} onClick={Logout}>Edit</button>
          </div>
        </div>
        <div>
          <div className="profile_item">
            <div>Name</div>
            <input type="text" defaultValue={profile?.first_name} />
          </div>
          <div className="profile_item">
            <div>Surname</div>
            <input type="text" defaultValue={profile?.last_name} />
          </div>
        </div>
        <div>
          <div className="profile_item">
            <div>Email</div>
            <input type="text" defaultValue={profile?.email} />
          </div>
          <div className="profile_item">
            <div>Phone</div>
            <input type="text" defaultValue={profile?.phone} />
          </div>
        </div>
      </div>
      
      <div className="profile_logout">
        <button onClick={Save}>Save</button>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
