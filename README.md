# Project Title

Sortable Image Gallery

### Introduction

This documentation provides an overview of a React project that implements a sortable photo gallery using Vite, DnD Kit, and Sass. The project consists of several components, including PhotoGallery, SortablePhotoWrapper, and Photo, which together create a user-friendly gallery with drag-and-drop functionality.

## Demo link:

Access my site at [Sortable Image Gallery](https://sortable-image-grid.vercel.app/)

## Project Structure

###### /src

    /components
        /Photo
          index.jsx
          style.scss
        /PhotoGallery
          index.jsx
          style.scss
        /SortablePhotoWrapper
          index.jsx
    App.jsx
    main.jsx
    App.scss
    package.json
    vite.config.js

## Dependencies

- React: A JavaScript library for building user interfaces.
- DnD Kit: A library for creating complex, accessible drag-and-drop interfaces in React applications.
- Vite: A build tool that allows you to develop React applications quickly with minimal configuration.
- Sass: A CSS preprocessor that helps you write more maintainable and modular styles.

## Additional Features

#### Hover Effect

Each photo in the gallery now features a hover effect. When the mouse hovers over a photo, it receives a visual indication, such as a border change or opacity adjustment, to provide a better user experience and feedback when interacting with the gallery.

#### Multiple Select using Checkbox

Users can now select multiple photos by using checkboxes associated with each photo. When a checkbox is clicked, the photo is selected, and its appearance may change to indicate selection. Users can choose as many photos as they desire.

#### Multiple Delete Function

A "Delete" button is available when one or more photos are selected. Users can delete all the selected photos with a single click, streamlining the process of managing their photo collection.

## Installation

Install my-project with npm

```sh
git clone https://github.com/iamzubair6/sortable-image-grid.git
```

```sh
  cd sortable-image-grid
```
```sh
  npm install
```

```sh
  npm run dev
```

The project should now be accessible at http://localhost:3000.

## Components

#### PhotoGallery

- The main component that wraps the entire photo gallery.
- Manages the state of the gallery and handles sorting.
- Uses SortablePhotoWrapper to render individual photos.

#### SortablePhotoWrapper

- Wraps each photo and enables drag-and-drop functionality.
- Utilizes the DnD Kit useSortable hook to manage drag-and-drop behavior.

#### Photo

- Represents an individual photo item in the gallery.
- Displays the image and any additional information.

## Styling

- The project uses Sass for styling.
- The main styles are defined in App.scss, which is imported into the project.

## Customization

You can customize the project by modifying the styles in main.scss and adding more features or functionality to the existing components.

## Conclusion

This project provides a foundation for creating a sortable photo gallery in your React application using Vite, DnD Kit, and Sass. It is essential to have a basic understanding of React, DnD Kit, and Sass to work on or extend this project further. Explore the project's components and styles to tailor it to your specific needs.
