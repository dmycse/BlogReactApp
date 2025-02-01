import { homepageTitle, homepageSubTitle } from "@/s-shared/constants";

export const PageTitle = () => {
  return (
    <div>
      <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800'>
        {homepageTitle}
      </h1>
      <p className='mt-8 text-md md:text-xl'>
        {homepageSubTitle}
      </p>
  </div>
  )
};
