import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useState } from "react";
import "./App.scss";
import Grid from "./Grid";
import Photo from "./Photo";
import SortablePhoto from "./SortablePhoto";
import photos from "./photos.json";

function App() {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const [selected, setSelected] = useState([]);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  console.log(items);

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
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        on
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid columns={5}>
            {items.map((url, index) => (
              <div
                className="sortable"
                key={url}
                style={{
                  position: "relative",
                  height: index === 0 ? 350 : 170,
                  gridRowStart: index === 0 ? "span 2" : null,
                  gridColumnStart: index === 0 ? "span 2" : null,
                }}
              >
                <SortablePhoto url={url} index={index} />
                <input
                  type="checkbox"
                  className="photo-checkbox"
                  checked={selected.includes(url)}
                  onChange={() => handleChecked(url)}
                />
              </div>
            ))}
          </Grid>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Photo url={activeId} index={items.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
}

export default App;
