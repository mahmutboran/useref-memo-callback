import React from "react";

const UserCard = ({ user }) => {
  console.log("usercard rendered");
  return (
    <div className="useritem">
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`}
        alt="userimg"
      />
      {user.name}
    </div>
  );
};

export default UserCard;
