"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { addUser, getUsers, removeUser } from "@/redux/slices/users";
import Image from "next/image";
import NoProfile from "../../images/no-profile.jpeg";
import { Modal } from "@/components/Modal";
import MainLayoutPage from "../mainlayout/layout";

const Users = () => {
  const dispatch = useDispatch<any>();
  const { users } = useSelector((state: any) => state);
  const [modal, setModal] = useState(false);
  const [avatar, setAvatar] = useState<any>();
  const [avatarShow, setAvatarShow] = useState<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const After = () => {
    setAvatarShow(null);
    setAvatar(null);
    reset({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      stack: "",
      password: "",
      password_confirm: "",
    });
    setModal(false);
  };

  const Avatar = (e: any) => {
    setAvatar(e.target.files[0]);
    setAvatarShow(URL.createObjectURL(e.target.files[0]));
  };

  const userAdd = (data: any) => {
    dispatch(
      addUser(
        {
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          stack: data.stack,
          is_active: true,
          role: 0,
          password: data.password,
          password_confirm: data.password_confirm,
          photo: avatar,
        },
        After
      )
    );
  };

  const deleteUser = (id: number) => {
    dispatch(removeUser(id))
  }

  console.log(users);
  

  return (
    <MainLayoutPage active={true}>
      <div className="team">
        <div className="team_header">
          <div></div>
          <button className="team_add" onClick={() => setModal(true)}>
            Add User +
          </button>
        </div>
        <div className="team_inner"></div>
      </div>
      <div className="users">
        <div className="users_inner">
          {users?.data?.map((item: any, index: number) => (
            <div className="users_item" key={index}>
              <div className="users_item_item">
                <Image
                  width={144}
                  height={144}
                  src={item?.photo ? item?.photo : NoProfile}
                  alt=""
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "5px",
                  }}
                  className="users_item_bold"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <div className="users_item_item">{item.first_name}</div>
                    <div className="users_item_item">{item.last_name}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <button onClick={() => deleteUser(item.id)}>remove</button>
                    <button>edit</button>
                  </div>
                </div>
                <div className="users_item_item">Email: {item.email}</div>
                <div className="users_item_item">Stack: {item.stack}</div>
                <div className="users_item_item">
                  Status: {item.is_active ? "active" : "disactive"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        modal={modal}
        setModal={setModal}
        width={"600px"}
        element={
          <div className="team_add">
            <div className="team_add_inner">
              <div
                className="users_item"
                style={{
                  width: "93%",
                }}
              >
                <div className="users_item_item">
                  <Image
                    width={144}
                    height={144}
                    src={avatarShow ? avatarShow : NoProfile}
                    alt=""
                  />
                  <input
                    onChange={(e: any) => Avatar(e)}
                    id="avatar"
                    type="file"
                    hidden
                  />
                  <label
                    style={{
                      width: "100%",
                      background: "#c04248",
                      cursor: "pointer",
                      color: "white",
                      padding: "5px 19px",
                    }}
                    htmlFor="avatar"
                  >
                    Add imgage +
                  </label>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "5px",
                    }}
                    className="users_item_bold"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <div className="users_item_item">
                        <input
                          {...register("first_name", { required: true })}
                          style={{ width: "93%" }}
                          placeholder="Name"
                        />
                      </div>
                      <div className="users_item_item">
                        <input
                          {...register("last_name", { required: true })}
                          style={{ width: "93%" }}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="users_item_item">
                    {" "}
                    <input
                      {...register("username", { required: true })}
                      placeholder="Username"
                    />
                  </div>
                  <div className="users_item_item">
                    {" "}
                    <input
                      {...register("password", { required: true })}
                      placeholder="Password"
                    />
                  </div>
                  <div className="users_item_item">
                    {" "}
                    <input
                      {...register("password_confirm", { required: true })}
                      placeholder="Confirm password"
                    />
                  </div>
                  <div className="users_item_item">
                    {" "}
                    <input
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address (@gmail.com)",
                        },
                      })}
                      placeholder="Email"
                    />
                  <div style={{color: 'red'}}>{errors?.email && `${errors?.email.message}`}</div>

                  </div>
                  <div className="users_item_item">
                    {" "}
                    <input
                      {...register("stack", { required: true })}
                      placeholder="Stack"
                    />
                  </div>
                </div>
              </div>
              <div className="team_add_btns">
                <button
                  onClick={() => setModal(false)}
                  className="team_add_cancel"
                >
                  Cancel
                </button>
                <button onClick={handleSubmit(userAdd)}>Add team</button>
              </div>
            </div>
          </div>
        }
      />
    </MainLayoutPage>
  );
};

export default Users;
