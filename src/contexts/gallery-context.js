import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1679236630000-efdb716ed708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1679364297777-1db77b6199be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1679240339099-1759c6576e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1679240360999-92f46d4781b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1679335424216-e1edb8ea8e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
];

const GalleryContext = createContext();

const GalleryProvider = (props) => {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const [photos, setPhotos] = useState(fakeData);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const toggleFavorite = (photoId) => {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) return { ...photo, isLike: !photo.isLike };
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  };

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const isExited = prevItems.some((item) => item.id === newItem.id);
      if (isExited) return [...prevItems];
      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (photoId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== photoId)
    );
  };

  const value = {
    photos,
    setPhotos,
    cartItems,
    setCartItems,
    favoriteList,
    setFavoriteList,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
};

const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be in a Galery Provider");
  return context;
};
export { useGallery, GalleryProvider };
