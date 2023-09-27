import { useEffect } from 'react'



const Effect = () => {
  useEffect(() => {
    console.log('component mounted');
  })

  const scrollHandler = () => {
    console.log('page scrolled');
  }

  window.addEventListener('scroll', scrollHandler);

  return () => {
    window.removeEventListener('scroll', scrollHandler);
    console.log('component unmounted');
  }
}

export default Effect;