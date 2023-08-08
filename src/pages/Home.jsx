import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { BarChart, ListChart } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { dropdownData, ordersData, contextMenuItems, ordersList } from '../data/dumps';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

import { useGetProductsReportQuery } from '../services/serviceApi';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'purple', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Home = () => {
  const { currentColor, currentMode } = useStateContext();
  const { data, isFetching } = useGetProductsReportQuery();

  if (isFetching) return 'Loading...';

  return (
    <div className='m-5'>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-5 rounded-2xl ">
        <div className="flex justify-between">
          <p className="font-normal text-xl">Product Sold</p>
          <DropDown currentMode={currentMode} />
        </div>
        <div className="w-full">
          <BarChart data={data}/>
        </div>
      </div>

      <div className="gap-10 m-3 mt-5 justify-center w-fit max-w-lg">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-normal">Top Selling Products</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="w-full">
            <ListChart data={data}/>
          </div>

        </div>
      </div>

    </div>
    
  )
}

export default Home