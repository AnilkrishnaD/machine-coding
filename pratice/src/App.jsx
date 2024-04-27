import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onDelete = useCallback((index) => {
    setData((prevData) => {
      let updatedData = [...prevData];

      updatedData = updatedData.filter((item, ind) => ind !== index);

      return updatedData;
    });
  }, []);

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

export default App;
