import { useContext, useEffect, useState } from "react";

export default function About() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://68554dfe6a6ef0ed66320ddd.mockapi.io/play"
      );
      const data = await response.json();
      setApiData(data);
    };

    fetchData();
  }, []);

  return (
    <>
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
