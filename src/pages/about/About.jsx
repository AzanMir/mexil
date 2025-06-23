import { useContext, useEffect, useState } from "react";
import { cntxt } from "../../context/Context";

export default function About() {
  const cont = useContext(cntxt);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://68554dfe6a6ef0ed66320ddd.mockapi.io/playground"
      );
      const data = await response.json();
      setApiData(data);
    };

    fetchData();
  }, []);

  console.log({ cont });
  return (
    <>
      <div>
        <div>Username: {cont.dataaa.username}</div>
        <div>mail: {cont.dataaa.mail}</div>
        <div>phone: {cont.dataaa.phone}</div>
        <div>option: {cont.dataaa.option}</div>
      </div>

      <div>
        <h1>Api Fetching</h1>
        {apiData.map((apd, index) => (
          <div key={index}>
            <div>Username:{apd.name}</div>
            <div>mail:{apd.email}</div>
            <div>phone:{apd.phone}</div>
          </div>
        ))}
      </div>
    </>
  );
}
