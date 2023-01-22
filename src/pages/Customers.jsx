import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        category='Pages'
        title="Customers"
      />
      <GridComponent
        dataSource={customersData}
        allowPaging
        toolbar={['Delete']}
        editSettings={{allowEditing: true, allowDeleting: true}}
      >
        <ColumnsDirective>
          {customersGrid.map((customer,index) => <ColumnDirective key={index} {...customer}/>)}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers