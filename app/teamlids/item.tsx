import { Modal } from "@/components/Modal";
import { addTeam, getTeams } from "@/redux/slices/teams";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import NoProfile from "../../images/no-profile.jpeg";
import Image from "next/image";

export const MemberItem = ({ item }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    reset({
        name: item.name,
        username:item.username,
        last_name: item.last_name,
        email: item.email,
        stack: item.stack,
    })
  }, [])

  const EditMember = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <div
        className="users_item"
        style={{
          maxWidth: "99%",
          marginTop: "30px",
          padding: "0px",
        }}
        key={item?.id}
      >
        <div
        className="mem"
        >
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
                color: 'white',
                marginBottom: '10px'
              }}
              className="users_item_item"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
              </div>
            </div>
            <div className="users_item_item">Email: {item.email}</div>
            <div className="users_item_item">Stack: {item.stack}</div>
            
          </div>
        </div>
        
      </div>

      <Modal
        width={"600px"}
        modal={modal}
        setModal={setModal}
        element={
          <div className="team_add">
            <div className="team_add_inner">
              <div className="team_member_add">
                <input {...register("id")} type="text" hidden />
                <div className="team_add_title">
                  <input
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="team_add_title">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="team_add_title">
                  <input
                    {...register("last_name", { required: true })}
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="team_add_title">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address (@gmail.com)",
                      },
                    })}
                    type="text"
                    placeholder="Email"
                  />
                  <div style={{ color: "red" }}>
                    {errors?.email && `${errors?.email.message}`}
                  </div>
                </div>
                <div className="team_add_title">
                  <input
                    {...register("stack", { required: true })}
                    type="text"
                    placeholder="Stack"
                  />
                </div>
              </div>
              <div className="team_add_btns">
                <button
                  onClick={() => {
                    setModal(false);
                    reset({
                      name: "",
                      username: "",
                      last_name: "",
                      email: "",
                      stack: "",
                    });
                  }}
                  className="team_add_cancel"
                >
                  Cancel
                </button>
                <button onClick={handleSubmit(EditMember)}>Edit member</button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
