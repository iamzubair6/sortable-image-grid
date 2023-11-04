import React, { useState } from "react";
import "./App.scss";
import PhotoGallery from "./components/PhotoGallery";
import photos from "./photos.json";

function App() {
  const [selected, setSelected] = useState([]);
  const [items, setItems] = useState(photos);
  // const width = window.innerWidth;
  // const breakpoint = 768;

  const handleChecked = (url) => {
    if (selected.includes(url)) {
      setSelected((prev) => prev.filter((item) => item !== url));
    } else {
      setSelected((prev) => [...prev, url]);
    }
  };
  function removeSelectedItems(selectedItems) {
    setItems((prev) => prev.filter((item) => !selectedItems.includes(item)));
    setSelected([]);
  }
  return (
    <div id="container">
      <div className="header">
        {!selected.length && <h2>Gallery</h2>}
        {Boolean(selected.length) && (
          <>
            <h2>{selected.length} Files Selected</h2>
            <button
              className="delete-btn"
              onClick={() => removeSelectedItems(selected)}
            >
              {" "}
              Delete file
            </button>
          </>
        )}
      </div>
      <hr className="divider" />
      <PhotoGallery
        selected={selected}
        handleChecked={handleChecked}
        items={items}
        setItems={setItems}
      />
    </div>
  );
}

export default App;
