import React, { useState } from 'react'

export const Soon = ({start, end, place, title, name}: any) => {
    const [open, setOpen] = useState(false)
  return (
    <div
    className="soonitem eventbg"
    onClick={() => setOpen(!open)}
    style={{
      padding: "0px",
    }}
  >
    {
        open ? <div style={{
            paddingTop: '26px',
            textAlign: 'center'
          }}>
          <div className="event_title">{name}</div>
        <div
          className="event_both"
          style={{
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              width: "50%",
              textAlign: "start",
            }}
          >
            Start: {start}
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "start",
            }}
          >
            Place: {place}
          </div>
        </div>
        <div
          className="event_both"
          style={{
            paddingTop: "15px",
            paddingBottom: "39px",
            borderBottom: "1px solid #F3F3F3",
          }}
        >
          End: {end}
        </div>
          </div>: null
    }
    <div
      className="event_title"
      style={{
        textAlign: "start",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <div style={{
        textAlign: "start",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        
        padding: "31px 26px",
      }}>
         Soon: {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4153 8.69124L16.5165 8.74062L16.9549 7.84182L0.876742 0L0.438371 0.898794L15.5381 8.26341L0 15.8418L0.438371 16.7406L16.5165 8.8988L16.4153 8.69124Z"
          fill="#FDFDFD"
        />
      </svg>
     
      </div>
     
      
    </div>
  </div>
  )
}
