import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isLoading){
    return (
        <div>
            <h3>Esperelo</h3>
        </div>
    )
  }
  return(
      <div>
          <img src = {user.picture} alt = {user.name}/>
          <h2>Nombre del usuario: {user.name}</h2>
          <h2>Id del usuario: {user.email}</h2>
      </div>
  )
};

export default Profile;