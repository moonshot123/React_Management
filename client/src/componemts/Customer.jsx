import { Grid, Image, Segment } from "semantic-ui-react";
const Customer = ({ user }) => {
  const UserList = ({ item }) => (
    <Segment>
      <Image src={item.img} />
      <h2>{item.name}</h2>
      <p>{item.id}</p>
      <p>{item.birthday}</p>
      <p>{item.gender}</p>
    </Segment>
  );
  return (
    <Grid stackable columns={3}>
      {user.map((e, i) => (
        <Grid.Column>
          <UserList item={e} key={i} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Customer;
