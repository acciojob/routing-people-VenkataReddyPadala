import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const [userDetail, setUserDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetail(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userDetail.name}</p>
      <p>Username: {userDetail.username}</p>
      <p>Email: {userDetail.email}</p>
      <p>Phone: {userDetail.phone}</p>
      <p>Website: {userDetail.website}</p>
    </div>
  );
}

export default UserDetails;
