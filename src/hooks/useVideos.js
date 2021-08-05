import { useState, useEffect } from "react";
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };

  return [videos, search];
  //returned value could be either in the form of an array (following the React conventions) or, in the form of an object(following the common JS convention) 

};

export default useVideos;