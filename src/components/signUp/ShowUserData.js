import React from "react";
import { useSelector} from "react-redux";

const ShowUserData = () => {
  // showing all userdata in this component 
  const userData = useSelector((state) => state.userData);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "5px",
          justifyContent: "center",
        }}
      >
        {userData.map((e, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "tomato",
                borderRadius: "5px",
                padding: "15px",
                margin: "3px 5px",
              }}
            >
              <p>Username : {e.username}</p>
              <p>Password : {e.password}</p>
              <p>Mobile No:{e.mobile}</p>
              <p>Email : {e.email}</p>
              <p>Country Code:{e.country}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowUserData;
