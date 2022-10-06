import { Table } from 'antd';
 
import 'antd/dist/antd.css';

 
// const columns = [
//   {
//     title: 'Patient Name',
//     dataIndex: 'name',           
//     sorter: (a, b) => a.name.length - b.name.length,     
//   },
//   {
//     title: 'Owner',
//     dataIndex: 'owner',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Species',
//     dataIndex: 'species',
//     sorter: (a, b) => a.species.length - b.species.length,  
    
//   },
//   {
//     title: 'Diagnosis',
//     dataIndex: 'diagnosis',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.diagnosis - b.diagnosis,
//   },
//   {
//     title: 'Last Session',
//     dataIndex: 'lastSession',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.lastSession - b.lastSession,
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name:'sdfds',
//     species: 'John Brown',
//     owner: 33,
//     diagnosis: 'Skin',
//     LastSession: '4 weeks ago',
//   },
//   {
//     key: '2',
//     name:'zsdas',
//     species: 'John Brown',
//     owner: 34,
//     diagnosis: 'ortho',
//     LastSession: '1 weeks ago',
//   },
//   {
//     key: '3',
//     name:'yyyy',
//     species: 'John Brown',
//     owner: 30,
//     diagnosis: 'gyno',
//     LastSession: '2 weeks ago',
//   },
//   {
//     key: '4',
//     name:'adsd',
//     species: 'John Brown',
//     owner: 32,
//     LastSession: '2 weeks ago',
//     diagnosis: 'physio',
//   },
// ];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App = ( { columns , data}  ) => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default App;

   // { columns , data}