import { useState, useEffect } from 'react';

export const useMediaContent = () => {
  const [contentValue, setContentValue] = useState('');
  const [cover, setCover] = useState('');
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setContentValue(prev => prev + `<p><image src="${img.url}" /></p>`);
  }, [img]);  

  useEffect(() => {
    video &&
      setContentValue(
        `<video controls src="${video.url}" type="video/mp4"></video>`
      );
  }, [video]);    

  return ({
    contentValue,
    setContentValue,
    cover,
    setCover,
    setImg,
    setVideo,
    progress,
    setProgress
  });

}