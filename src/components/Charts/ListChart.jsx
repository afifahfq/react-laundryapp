import React from 'react';

import { useStateContext } from '../../contexts/ContextProvider';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { contextMenuItems, ordersList } from '../../data/dumps';

const ListChart = (data) => {
  const { currentMode } = useStateContext();
  const editing = { allowDeleting: false, allowEditing: false };

	let grid;
    const dataBound = () => {
        if (grid) {
            grid.autoFitColumns(['ShipName', 'ShipAddress']);
        }
    };
  
  console.log(data.data[0]);  

  return (
    <div className="md:m-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      <div className="w-full">
        <div className="md:m-2 mt-6 p-2 md:p-2 bg-white rounded-3xl">
					{/* <Header category="Page" title="Orders" /> */}
					<GridComponent
							id="gridcomp"
							dataSource={data.data}
							contextMenuItems={contextMenuItems}
							editSettings={editing}
							dataBound={dataBound} ref={g => grid = g}
							width={250}
					>
							<ColumnsDirective>
								<ColumnDirective field='created_at' headerText='Name' width='50' textAlign="Center"/>
								<ColumnDirective field='income' headerText='Value' width='50' textAlign="Center"/>
							</ColumnsDirective>
					</GridComponent>
					</div>
			</div>
		</div>
  );
};

export default ListChart;
