import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import serverConfig from './serverConfig';
import Images from './Images';

const Gallery = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchImages = useCallback(async () => {
    try {
      console.log("here again!");
      setLoading(true);
      const [kitchenResponse, bathroomResponse, livingRoomResponse] = await Promise.all([
        axios.get(`${serverConfig.SERVER_URL}/images/kitchen`),
        axios.get(`${serverConfig.SERVER_URL}/images/bathroom`),
        axios.get(`${serverConfig.SERVER_URL}/images/living-room`)
      ]);

      const fetchedImages = {
        kitchen: kitchenResponse.data,
        bathroom: bathroomResponse.data,
        livingRoom: livingRoomResponse.data
      };

      setImages(fetchedImages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!images) { // Check if images have already been fetched
      console.log("images = null");
      fetchImages();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCategorySelect = (chosenCategory) => {
    setSelectedCategory(chosenCategory);
  };

  return (
    <div className="gallery">
      <h2>Welcome to the gallery!</h2>
      {!selectedCategory ? (
        <div>
          <button onClick={() => handleCategorySelect('kitchen')}>Kitchen</button>
          <button onClick={() => handleCategorySelect('bathroom')}>Bathroom</button>
          <button onClick={() => handleCategorySelect('livingRoom')}>Living-room</button>
          {/* Add more buttons for other categories */}
        </div>
      ) : (
        <div>
          {/* Display images of the selected category */}
          <Images imageList={images[selectedCategory]} />
          {/* Button to go back and choose another category */}
          <button onClick={() => setSelectedCategory(null)}>Go back</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
