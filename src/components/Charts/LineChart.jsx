import React from 'react'
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, Legend, DateTime } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <SeriesCollectionDirective>
        { lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} /> )}
      </SeriesCollectionDirective>
      <Inject services={[ LineSeries, Tooltip, Legend, DateTime ]} />
    </ChartComponent>
  )
}

export default LineChart