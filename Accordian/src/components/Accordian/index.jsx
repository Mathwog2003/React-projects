import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <>
      <div className="wrapper">
        <button>Enable Multi Selection</button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="item">
                <div
                  onClick={() => handleSingleSelection(item.id)}
                  className="title"
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {selected === item.id ? (
                  <div>
                    <div className="content">{item.answer}</div>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
