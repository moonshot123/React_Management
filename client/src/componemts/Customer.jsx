import { Grid, Image, Segment } from "semantic-ui-react";
//import CustomerDetail from "./CustomerDetail";
const Customer = ({ user }) => {
  //유저디테일을 통해 내용을 수정
  // const CustomerDetail = ({ item }) => {
  //   console.log("userDetail log" + item.name);
  // };
  const DetailUser = () => {};
  //유저리스트
  const UserList = ({ item }) => (
    <Segment onClick={() => DetailUser()}>
      <Image src={item.img} />
      <h3>이름 : {item.name}</h3>
    </Segment>
  );
  return (
    <Grid doubling columns={6}>
      {user.map((e, i) => (
        <Grid.Column>
          <UserList item={e} key={i} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Customer;
