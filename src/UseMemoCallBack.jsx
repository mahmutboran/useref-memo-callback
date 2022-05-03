import axios from "axios";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  console.log("text", text, "searh", search);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    console.log(users);
  }, []);
  const handleSearch = () => {
    // setSearch(inputRef.current.value)
    setSearch(text);
  };
//!useMemo degerleri hafızaya alıyor
  const filteredUsers = useMemo(() =>
    users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase()) ;
    }),[users,search]
  );

  //!useCallback foncksiyonları hafizaya alıyor

  const addUser = useCallback(()=>{
setUsers(([...users,{id:users.length+1,name:`Clarusway-${users.length-9}`}]))
  },[users])

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={handleSearch}>Search User</button>
      <Users users={filteredUsers} addUser={addUser}/>
    </div>
  );
};

export default UseMemoCallBack;
