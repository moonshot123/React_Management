import Customer from "./componemts/Customer";
import "./App.css";
import { useEffect, useState } from "react";

import Headers from "./componemts/Header";
function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("랜더링 확인 로그");
    callApi();
  }, []);

  const callApi = () => {
    fetch("./api/custommer")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
        setUser(myJson);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  };

  return (
    <>
      <div>
        <Headers />
        <hr />
        <Customer user={user} />
      </div>
    </>
  );
}

export default App;
