import styled from "styled-components";

const Customer = ({ user }) => {
  const UserList = ({ item }) => (
    <div>
      <img className="userimg" src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.id}</p>
      <p>{item.birthday}</p>
      <p>{item.gender}</p>
    </div>
  );
  return (
    <div>
      {user.map((e, i) => (
        <UserList item={e} key={i} />
      ))}
    </div>
  );
};

const UserList = styled.div``;

export default Customer;
