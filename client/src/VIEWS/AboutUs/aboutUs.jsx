

const AboutUs = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <h1>PRONTO!</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/SITIO-EN-CONSTRUCCION.jpg"
        alt="Descripción de la imagen"
        style={imageStyle}
      />
    </div>
  );
};

export default AboutUs;
