import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
     window.addEventListener('mypopstate', onLocationChange);
    return () => {
      window.removeEventListener('mypopstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

//test

export default Route;
