import { useState, useEffect } from 'react';
import style from './Landing.module.css';
import logo from '../../assets/Las_encinas_Logo.png';
import Home from '../Home/Home';


const Landing = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {    
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLanding ? (
        <img src={logo} className={style.img} alt="Logo" />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Landing;
