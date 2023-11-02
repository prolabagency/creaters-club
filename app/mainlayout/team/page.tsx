"use client";

import { Modal } from "@/components/Modal";
// import { addTeam, getTeams } from "@/redux/slices/teams";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Teams = () => {
//   const dispatch = useDispatch<any>();
//   const { teams } = useSelector((state: any) => state);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [modal, setModal] = useState(false);
//   const [modal2, setModal2] = useState(false);
//   const [edit, setEdit] = useState(false);
//   const [teamName, setTeamName] = useState("");

//   const [teamList, setTeamList] = useState<any>([]);

//   useEffect(() => {
//     dispatch(getTeams());
//   }, []);

//   const Reset = () => {
//     reset({
//       id: "",
//       name: "",
//       username: "",
//       last_name: "",
//       email: "",
//       stack: "",
//     });
//   };
//   const After = () => {
//     setTeamName('')
//     setTeamList([])
//     Reset()
//     setModal(false)
//   }

//   const TeamAdd = () => {
//     dispatch(
//       addTeam({
//         name: teamName,
//         members: teamList.map((item: any) => ({
//           username: item.username,
//           name: item.name,
//           last_name: item.last_name,
//           email: item.email,
//           stack: item.stack,
//         })),
//       }, After)
//     );
//   };

//   const addMember = (data: any) => {
//     setTeamList((prev: any) => [...prev, { ...data, id: teamList.length + 1 }]);
//     Reset();
//     setModal2(false);
//   };

//   const EditMember = (data: any) => {
//     setTeamList((prev: any) => {
//       const updatedTeamList = prev.map((item: any) => {
//         if (item.id === data.id) {
//           return data;
//         }
//         return item;
//       });
//       return updatedTeamList;
//     });
//     Reset();
//     setModal2(false);
//     setEdit(false);
//   };

//   const resetTeam = (data: any) => {
//     reset({
//       id: data.id,
//       name: data.name,
//       username: data.username,
//       last_name: data.last_name,
//       email: data.email,
//       stack: data.stack,
//     });
//     setModal2(true);
//     setEdit(true);
//   };

//   const removeTeam = (id: number) => {
//     setTeamList((prev: any) => prev.filter((item: any) => item.id !== id));
//   };
// console.log(teams);

  return (
    <>
      {/* <div className="team">
        <div className="team_header">
          <div></div>
          <button className="team_add" onClick={() => setModal(true)}>
            Add Team +
          </button>
        </div>
        <div className="team_inner">
          
        </div>
      </div>
      <Modal
        width={"600px"}
        modal={modal}
        setModal={setModal}
        element={
          <div className="team_add">
            <div className="team_add_inner">
              <div className="team_add_title">
                <input
                  type="text"
                  placeholder="Team name"
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div className="team_add_member">
                <button onClick={() => setModal2(true)}>Add member +</button>
              </div>
              <div className="team_add_member_title">Members</div>

              <div className="team_add_member_list">
                {teamList.map((item: any, index: number) => (
                  <div className="team_add_member_item" key={index}>
                    {index + 1}. {item.name} {item.last_name}{" "}
                    <button onClick={() => resetTeam(item)}>Edit</button>
                    <button onClick={() => removeTeam(item.id)}>remove</button>
                  </div>
                ))}
              </div>
              {teamList.length === 0 && (
                <div className="team_add_member_title_none">
                  You have not members!
                </div>
              )}

              <div className="team_add_btns">
              <button
                  onClick={() => {
                    setModal2(false);
                    setModal(false);
                    setEdit(false);
                    setTeamList([])
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
                <button onClick={TeamAdd}>Add team</button>
              </div>
            </div>
          </div>
        }
      />

      <Modal
        width={"600px"}
        modal={modal2}
        setModal={setModal2}
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
                  <div style={{color: 'red'}}>{errors?.email && `${errors?.email.message}`}</div>
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
                    setModal2(false);
                    setEdit(false);
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
                <button onClick={handleSubmit(edit ? EditMember : addMember)}>
                  {edit ? "Edit member" : "Add member"}
                </button>
              </div>
            </div>
          </div>
        }
      /> */}
    </>
  );
};

export default Teams;
