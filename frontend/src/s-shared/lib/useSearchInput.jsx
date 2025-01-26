import { useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const useSearchInput = () => {

  const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const inputRef = useRef(null);
    console.log('Location', location);
    console.log('SearchParams Object', Object.fromEntries(searchParams));

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value;
        if (location.pathname === '/posts') {
          setSearchParams({...Object.fromEntries(searchParams), search: query});
          inputRef.current.value = '';
        } else {
          navigate(`/posts?search=${query}`);
        }
      }
    };

  return {
    inputRef,
    handleKeyDown
  }
}
