import { IKImage } from 'imagekitio-react';

export const CustomImage = ({ src, alt, width, height, className }) => {

  return (
    <>
      {src && (
        <IKImage 
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} 
          path={src}
          alt={alt} 
          loading="lazy"
          lqip={{ active: true, quality: 20 }}
          width={width}
          height={height}
          className={className}
          transformation={[
            {
              width,
              height,
            },
          ]}
        />
        )
      }
    </>
  )
};