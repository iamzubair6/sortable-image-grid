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
import Photo from "../Photo";
import SortablePhotoWrapper from "../SortablePhotoWrapper";
import "./style.scss";

const PhotoGallery = ({ selected, handleChecked, items, setItems }) => {
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
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
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      on
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className="photo-grid">
          {items.map((url, index) => (
            <div
              className={
                selected.includes(url) ? "sortable-img-selected" : "sortable"
              }
              key={url}
              style={{
                position: "relative",
                height: index === 0 ? 300 : 145,
                gridRowStart: index === 0 ? "span 2" : null,
                gridColumnStart: index === 0 ? "span 2" : null,
              }}
            >
              <SortablePhotoWrapper url={url} index={index} />
              <input
                type="checkbox"
                className="photo-checkbox"
                checked={selected.includes(url)}
                onChange={() => handleChecked(url)}
              />
            </div>
          ))}
          <div className="upload-icon-container">
            <img
              className="upload-icon"
              src="/Assets/upload.png"
              alt="upload-icon"
            />
            <p>Upload Image</p>
          </div>
        </div>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? <Photo url={activeId} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default PhotoGallery;
