import React, {useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useTable} from 'react-table';
import mock_data from './mock_data.json';
import {columns} from './columns';


const basicTable = () => {

  const columns = useMemo(() => columns, [])
  const data = useMemo(() => mock_data, [])

  const tableInstance = useTable({
    columns,
    data
  })

  const { 
    rows, 
  } = tableInstance

  return (
    <table>
      <thead>
        <tr>
          <tablecell>Id</tablecell>
          <tablecell>Name</tablecell>
          <tablecell>Email</tablecell>
        </tr>
      </thead>
      <tbody {...rows.map(row => (
        <tr key={row.id}>
          <tablecell>{row.name}</tablecell>
          <tablecell>{row.email}</tablecell>
        </tr>
      ))}>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
