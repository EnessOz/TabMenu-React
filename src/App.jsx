import { useEffect, useState } from "react";
import "./App.css"


const App = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  async function getData() {

    const response = await fetch("https://course-api.com/react-tabs-project");
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="buttons">
        {data.map((item, index) => (
          <button
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleClick(index)}>
            {item.company}
          </button>
        ))}
      </div>
      <div className="informations">
        <div className="title">{data[activeIndex].title}</div>
        <div className="company">{data[activeIndex].company}</div>
        <div className="dates">{data[activeIndex].dates}</div>
        <div className="duties">{data[activeIndex].duties}</div>
      </div>
    </div>
  );
};

export default App;
