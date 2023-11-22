import React from 'react';
import { Row, Col } from 'react-grid-system';
import Chart from 'react-apexcharts';

const Grids = () => {
  const commonOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
  };

  const chartsData = [
    {
      type: 'line',
      name: 'Line Chart with grid layout of 12x4',
      data: Array.from({ length: 13 }, () => Math.floor(Math.random() * 10000000)),
      yAxisTitle: 'Revenue',
      grid: [12, 4],
    },
    {
      type: 'bar',
      name: 'Bar Chart with grid layout of 10x4',
      data: Array.from({ length: 13 }, () => Math.floor(Math.random() * 6000000)),
      yAxisTitle: 'Cost',
      grid: [10, 4],
    },
    {
      type: 'area',
      name: 'Area Chart with grid layout of 6x4',
      data: Array.from({ length: 13 }, () => Math.floor(Math.random() * 5000000)),
      yAxisTitle: 'Net Profit',
      grid: [6, 4],
    }
  ];

  return (
    <div>
      <h1>Grid Layout Charts</h1>
      {chartsData.map((chart, index) => (
        <Row key={index} style={{ marginBottom: '20px' }}>
          <Col md={chart.grid[0]} sm={chart.grid[1]}>
            <h2>{chart.name}</h2>
            <Chart
              options={{
                ...commonOptions,
                xaxis: {
                  categories: Array.from({ length: 13 }, (_, i) => `${2010 + i}`),
                  title: {
                    text: 'Year',
                  },
                },
                yaxis: {
                  title: {
                    text: chart.yAxisTitle,
                  },
                },
              }}
              type={chart.type}
              series={[{ name: chart.name, data: chart.data }]}
              width="100%"
              height="300px"
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Grids;
