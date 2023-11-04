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
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    yaxis: {
        labels: {
          style: {
            fontWeight: 'bold',
          }
        }
    },
    xaxis: {
      type: 'category',
      categories: labels,
      labels: {
        style: {
          fontWeight: 'bold',
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
    <div style={{ border: '1px solid #000', padding: '10px' }}>
      <ReactApexChart options={options} series={series} type="area" height={"200%"} width={"200%"} />
    </div>
  );
};

export default ChartLineAdmin;
