import React, { useState, useEffect } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  // return's jsx

  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
          {explorer.name}
          <br />
        </span>
        <div
          style={{
            display: expand ? "block" : "none",
            cursor: "pointer",
            paddingLeft: "15px",
          }}
        >
          {explorer?.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
};

export default Folder;
