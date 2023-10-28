'use client'

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterProfile } from "../../redux/slices/profile";
import Select from "react-select";
import { getCities } from "../../redux/slices/cities";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const dispatch = useDispatch<any>();
  const { profile } = useSelector((state: any) => state);

  const [avatar, setAvatar] = useState<any>();
  const [avatarShow, setAvatarShow] = useState<any>();

  const onSubmit = (data: any) => {
    dispatch(
      RegisterProfile({
        ...data,
        photo: avatar ? avatar : null,
      })
    );
  };

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const Avatar = (e: any) => {
    setAvatar(e.target.files[0])
    setAvatarShow(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="register">
      <div className="register_inner">
        <div className="register_content">
          <div>
            <div className="register_item_title">Регистерация</div>
            <div className="register_inputs">
                <div className="register_item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                  paddingBottom: '20px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <Image width={150} height={150} style={{
                    border: '1px solid red',
                    borderRadius: '100px',
                    objectFit: 'cover'
                  }} src={avatarShow} alt="" />
                  </div>
                  <label htmlFor="avatar" className="redButton">Выбрать фото</label>
                  <input onChange={(e) => Avatar(e)} id='avatar' type="file" hidden/>
                </div>
              <div>
                <div className="register_item">
                  <label htmlFor="">Пользователь</label>
                  <input
                    {...register("username", { required: true })}
                    type="text"
                  />
                  <div className="error">
                    {errors.username && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.username}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Пароль</label>
                  <input
                    {...register("password", { required: true })}
                    type="text"
                  />
                  <div className="error">
                    {errors.password && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.password}</div>
                </div>
              </div>
              <div>
                <div className="register_item">
                  <label htmlFor="">Повторите пароль</label>
                  <input
                    {...register("password_confirm", { required: true })}
                    type="text"
                  />
                  <div className="error">
                    {errors.password_confirm &&
                      "Это поле не может быть пустым."}
                  </div>
                  <div className="error">
                    {profile?.error?.password_confirm}
                  </div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Имя</label>
                  <input
                    {...register("first_name", { required: true })}
                    type="text"
                  />
                  <div className="error">
                    {errors.first_name && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.first_name}</div>
                </div>
              </div>
              <div>
                <div className="register_item">
                  <label htmlFor="">Фамилия</label>
                  <input
                    {...register("last_name", { required: true })}
                    type="text"
                  />
                  <div className="error">
                    {errors.last_name && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.last_name}</div>
                </div>
                <div className="register_item">
                  <label htmlFor="">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                  />
                  <div className="error">
                    {errors.email && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.email}</div>
                </div>
              </div>
              <div>
                {/* <div className="register_item">
                  <label htmlFor="">Город</label>
                  <Select
                    onChange={(e: any) => setCity(e?.target?.value)}
                    placeholder="Город"
                    options={cities?.data?.map((item: any) => ({
                      value: item.id,
                      label: item.title,
                    }))}
                  />
                  <div className="error">
                    {errors.city && "Это поле не может быть пустым."}
                  </div>
                  <div className="error">{profile?.error?.city}</div>
                </div> */}
               
              </div>
              <div className="register_item">
                <label htmlFor="">Телефон</label>
                <input {...register("phone", { required: true })} type="text" />
                <div className="error">
                  {errors.phone && "Это поле не может быть пустым."}
                </div>
                <div className="error">{profile?.error?.phone}</div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleSubmit(onSubmit)} type="submit">
              Регистрировать
            </button>
          </div>
          <Link href="/login" style={{ textAlign: "end" }}>
           Уже есть акаунт
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Register