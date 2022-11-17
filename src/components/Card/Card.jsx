import React, { useContext, useState } from 'react';
import './Card.scss'
import 'antd/dist/antd.css';
import { Button, Space } from 'antd';
import { Context } from '../Context/Context';
function Card({item}) {
const {setItemId, order, setOrder} = useContext(Context)
const [loadings, setLoadings] = useState([]);
const enterLoading = (index) => {
setLoadings((prevLoadings) => {
const newLoadings = [...prevLoadings];
newLoadings[index] = true;
return newLoadings;
});
setTimeout(() => {
setLoadings((prevLoadings) => {
const newLoadings = [...prevLoadings];
newLoadings[index] = false;
return newLoadings;
});
}, 1000);
};
return (
<div className='card'>
  <img src={item.img} alt="" />
  <h3>{item.name}</h3>
  <p>{item.model}</p>
  <div>
  <div className='my_color' style={{backgroundColor: item.color}}></div>
    <b>$ {item.price}</b>
    <>
      <Space style={{
          width: '50%',
        }}>

        <Button id={item.id} type="primary" loading={loadings[0]} onClick={()=> {enterLoading(0); setItemId(item.id);
          setOrder([...new Set([...order, item])]);
          item.number = item.number ? item.number + 1 : 1;
          }}>
          Add to cart
        </Button>
      </Space>
    </>
  </div>
</div>
)
}

export default Card