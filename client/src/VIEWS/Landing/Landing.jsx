import { useState, useEffect } from 'react';
import style from './Landing.module.css';
import logo from '../../assets/Las_encinas_Logo.png';
import Home from '../Home/Home';


const Landing = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {    
    const timer = setTimeout(() => {
      setShowLanding(false);
      window.location.replace('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div  className={style.landingContainer}>
      {showLanding ? (
        <img src={logo} className={style.imgLogo} alt="Logo" />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Landing;
