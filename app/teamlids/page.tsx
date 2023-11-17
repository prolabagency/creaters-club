"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from 'next/link'
import { Mentors } from "@/components/Mentors";
import { useEffect, useState } from "react";
import { MemberItem } from "./item";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "@/redux/slices/teams";


const Teamlids = () => {

  const dispatch = useDispatch<any>();
  const { teams } = useSelector((state: any) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  

  const [teamList, setTeamList] = useState<any>([]);

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  
  const TeamItem = ({ item }: any) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
      setOpen(!open);
    };

    return (
      <div className="user_item" style={{ display: "flex", justifyContent: 'space-between', width: "100%", marginBottom: '25px' }}>
        <div className="team_add" style={{ width: "100%", borderRadius: "10px", padding: "30px", border: "1px solid #ed1c24", fontSize: "28px" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='span_name'>
              <span style={{ fontWeight: "600" }}>{item?.name}</span>
            </div>
            <div>
              <button onClick={toggleOpen}>{open ? 'Close' : 'Open'}</button>
            </div>
          </div>
          {item.members.length !== 0 && open && (
            <div>
              {item.members.map((member: any, memberIndex: any) => (
                <div key={memberIndex}>
                  <MemberItem item={member} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="landing" style={{
      height: '100vh'
    }}>
      <Header />
     <div className="main_inner">
      
     <div className='container'>
      <div className="team">
        (
          <div style={{
            marginTop: '100px',
            color: 'white',
            overflowY: 'scroll',
            height: 'calc(100vh - 150px)'
          }}>

            {
              teams?.data?.map((item: any, index: any) => (
                <TeamItem key={index} item={item} />
              ))
            }

          </div>

        )

        <div className="team_inner"></div>
      </div>
      </div>
     </div>
    
    </div>
  );
}
export default Teamlids