import { Image, Segment } from "semantic-ui-react";

const CustomerDetail = ({ item }) => {
  return (
    <>
      <Segment>
        <div>CustomerDetail 페이지</div>
        <div> 이름 : {item.name}</div>

        <Image src={item.img} />
        <h3>
          이름 : {item.name} ({item.id}){" "}
        </h3>
        <p>{item.birthday}</p>
        <p>{item.gender}</p>
        <p>{item.job}</p>
      </Segment>
    </>
  );
};

export default CustomerDetail;
