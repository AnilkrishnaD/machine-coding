import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import "./App.css";

function FetchingData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(response);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDelete = useCallback((index) => {
    setData((prevData) => {
      let updatedData = [...prevData];

      updatedData = updatedData.filter((item, ind, arr) => ind !== index);

      return updatedData;
    });
  }, []);

  // return sjsx
  return (
    <>
      <div>Test</div>

      {data.length > 0 && (
        <>
          {data.map((item, index) => (
            <div key={index}>
              <div>{item.title}</div>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default FetchingData;
