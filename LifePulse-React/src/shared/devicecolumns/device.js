const columns = [
    {
      title: 'Device Name',
      dataIndex: 'deviceName',           
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