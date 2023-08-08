import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, LineSeries } from '@syncfusion/ej2-react-charts';

import { barXAxis, barYAxis } from '../../data/dumps';
import { useStateContext } from '../../contexts/ContextProvider';

const BarChart = (data) => {
  const { currentMode } = useStateContext();
  const palette = ["#B2C5D4"];

  // console.log(data.data[0]);  

  return (
    <div className="md:m-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barXAxis}
          primaryYAxis={barYAxis}
          palettes={palette}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ visible: false }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data.data}
              // name="USA"
              xName="created_at"
              yName="total"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default BarChart;
