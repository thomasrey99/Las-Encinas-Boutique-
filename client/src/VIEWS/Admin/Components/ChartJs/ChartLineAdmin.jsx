import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartLineAdmin = ({ labels, data, name }) => {
  const series = [
    {
      name: name,
      data: data,
      color: "#582f0e",
      points: {
        show: true,
        radius: 5,
        fillColor: "#582f0e"
      }
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false // Desactiva la función de zoom
      },
      toolbar: {
        show: false // Oculta la barra de herramientas (guardar SVG, restablecer zoom, etc.)
      }
    },
    yaxis: {
        labels: {
          style: {
            fontWeight: 'bold', // Establece el texto en negrita
          }
        }
    },
    xaxis: {
      type: 'category',
      categories: labels,
      labels: {
        style: {
          fontWeight: 'bold', // Establece el texto en negrita
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
    }
    
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="area" height={"200%"} width={"200%"} />
    </div>
  );
};

export default ChartLineAdmin;
