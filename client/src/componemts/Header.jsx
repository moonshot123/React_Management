import { BrowserRouter, Route, Link } from "react-router-dom";
import Adduser from "./Adduser";
const Header = () => {
  const onClickAddBtn = () => {
    console.log("추가버튼 클릭확인");
  };
  return (
    <>
      <BrowserRouter>
        <div>헤더입니다.</div>

        <Link to="/addUser">
          <button onClick={onClickAddBtn}>추가버튼</button>
        </Link>
        <Route path="/addUser" component={Adduser} />
      </BrowserRouter>
    </>
  );
};

export default Header;
