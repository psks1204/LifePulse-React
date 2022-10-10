import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';
import device from "./devices.jpg"; 

const columns = [
    {
      title: 'Device Name',
      dataIndex: 'deviceName',       
      render: (text, record) => (
        <div style={{
          display: 'flex'
        }}>
        <Avatar sx={{ width: 24, height: 24 }} alt={text} src={device} />
        <Link
          to={``}
          state={{ from: text }}
          style={{ color: "blue", marginLeft: 20 }}
        >
          {text}
        </Link>
        </div>
      ),    
      sorter: (a, b) => a.name.length - b.name.length,     
    },
    {
      title: 'Site',
      dataIndex: 'site',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.site - b.site,
    },
    {
      title: 'Room',
      dataIndex: 'room',
      sorter: (a, b) => a.room  - b.room ,  
      
    },
    {
      title: 'Status',
      dataIndex: 'status',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.status - b.status,
    },
    {
      title: 'Last Used',
      dataIndex: 'lastUsed',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.lastused - b.lastused,
    },
  ];

  export default columns