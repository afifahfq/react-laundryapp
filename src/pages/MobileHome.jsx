import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { BsCurrencyDollar  } from 'react-icons/bs';

import { BarChart, Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { dropdownData, ordersData, contextMenuItems, ordersGrid } from '../data/dumps';
import simpleLogo from '../data/logo-no-outline.png';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'purple', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const MobileHome = () => {
  const { currentColor, currentMode } = useStateContext();
  const editing = { allowDeleting: false, allowEditing: false };

  return (
    <div className='m-5'>
			<div class="w-[80%] max-w-[500px] aspect-square relative -top-36 bg-[#F36868] rounded-full"></div>

      <div className="overflow-hidden h-32 rounded-xl w-72 m-3 bg-gradient-to-br from-[#CCEDFF] to-white">
				<img className="w-48 -left-6 -top-6 rotate-[25deg] relative" src={simpleLogo} alt="" />
				<div className="relative -top-20">
					<p className="absolute right-2 top-1 font-medium text-gray-400">Your Balance</p>
					<p className="absolute right-2 top-7 text-3xl font-semibold text-[#0099EE]">$ 200.00</p>
				</div>
			</div>
    </div>
    
  )
}

export default MobileHome