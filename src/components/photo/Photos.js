import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// https://picsum.photos/v2/list?page=2&limit=100

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

const Photos = () => {
  const [randomPhoto, setRandomPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    const images = await getRandomPhotos(nextPage);
    setRandomPhoto(images);
    const newPhoto = [...randomPhoto, ...images];
    setRandomPhoto(newPhoto);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    //sideeffect
    handleLoadMore.current();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhoto.length > 0 &&
          randomPhoto.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white shawdow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
