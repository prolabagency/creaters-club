"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile, getProfile } from "@/redux/slices/profile";
import { useForm } from "react-hook-form";
import { addProject, editProjectId, getProjects } from "@/redux/slices/projects";
import { Modal } from "@/components/Modal";

const Projects = () => {
  const dispatch = useDispatch<any>();
  const {projects} = useSelector((state: any) => state)
  const [fetch, setFetch] = useState(false)
  const AfterGet = (data: any) => {
    console.log(data)
    reset({
      title2: data?.title,
      id: data?.id,
      description2: data?.description,
      prod_link2: data?.prod_link,
      dev_link2: data?.dev_link,
    });
  }
  useEffect(() => {
    dispatch(getProjects(AfterGet))
  }, [fetch]);

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
  const After = () => {
    setModal(false)
    setFetch(!fetch)
    reset({
      title: '',
      description: '',
      dev_link: '',
      prod_link: '',
    })
  }
  const Save = (data: any) => {
    dispatch(editProjectId({
      title: data.title2,
      description: data.description2,
      dev_link: data.dev_link2,
      prod_link: data.prod_link2,
    }, data.id, After))
  };

  const SaveAvatar = (e: any) => {
    dispatch(
      EditProfile({
        photo: e.target.files[0],
      })
    );
  };

 

  const onSubmit = (data: any) => {
    dispatch(
      addProject(data, After)
    );
  };

  const [modal, setModal] = useState(false)
  console.log(projects);
  

  return (
    projects?.data?.length === 0 ? (
      <div
        className="team_header"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {" "}
        <div
          className="team_add"
          style={{
            width: "100%",
            cursor: "pointer",
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            height: "200px",
            border: "1px solid #ed1c24",
            alignItems: "center",
            fontSize: "28px",
          }}
          onClick={() => setModal(true)}
        >
          Add Project +
        </div>
        <Modal
        width={"600px"}
        modal={modal}
        setModal={setModal}
        element={
          <div className="team_add">
            <div className="team_add_inner">
              <div className="team_add_title" style={{marginBottom: '20px'}}>
                <input
                  type="text"
                  placeholder="Title"
                  {...register('title', {required: true})}
                />
                
              </div>
              <div className="team_add_title" style={{marginBottom: '20px'}}>
                <input
                  type="text"
                  placeholder="Description"
                  {...register('description', {required: true})}
                />
              </div>
              <div className="team_add_title" style={{marginBottom: '20px'}}>
                <input
                  type="text"
                  placeholder="Developer link"
                  {...register('dev_link', {required: true})}
                />
                <div style={{color: 'red'}}>{projects?.error?.response?.data?.dev_link}</div>
              </div>
              <div className="team_add_title" style={{marginBottom: '20px'}}>
                <input
                  type="text"
                  placeholder="Product link"
                  {...register('prod_link', {required: true})}
                />
                <div style={{color: 'red'}}>{projects?.error?.response?.data?.prod_link}</div>
              </div>
              
             

              <div className="team_add_btns">
                <button
                  onClick={() => {
                    setModal(false);
                    reset({});
                  }}
                  className="team_add_cancel"
                >
                  Cancel
                </button>
                <button onClick={handleSubmit(onSubmit)}>Create</button>
              </div>
            </div>
          </div>
        }
      />
      </div>
    ) : <div className="profile">
    <div className="profile_inner">
      <div className="profile_item">
      </div>
      <div>
      <input {...register('id')} hidden type="text"  />

        <div className="profile_item">
          <div>Name</div>
          <input {...register('title2', {required: true})} type="text"  />
        </div>
        <div className="profile_item">
          <div>Description</div>
          <input {...register('description2', {required: true})} type="text"  />
        </div>
      </div>
      <div>
        <div className="profile_item">
          <div>Developer link</div>
          <input {...register('dev_link2', {required: false})} type="text"  />
        </div>
        <div className="profile_item">
          <div>Product link</div>
          <input {...register('prod_link2', {required: false})} type="text"  />
        </div>
      </div>
    </div>

    <div className="profile_logout">
      <button onClick={handleSubmit(Save)}>Save</button>
    </div>
  </div>
  );
};

export default Projects;
