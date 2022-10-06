import {  SearchOutlined} from '@ant-design/icons';
import { Input,   } from 'antd';
import React from 'react';
 

const SearchBar = ( { placeholder}) => (
  <>
    <Input
      placeholder={placeholder}
      prefix={<SearchOutlined className="site-form-item-icon" />}
       
    
    />
     
  </>
);

export default SearchBar