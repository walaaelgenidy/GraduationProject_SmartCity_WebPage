import  React from 'react';
import { Card, List } from 'antd';


const gridStyle = {
    width: '25%',
   
   padding :'10px',
   margins :'10px'
    
  };



const sensor = [
    {
        id: 1,
        name: 'Temperature',
        status :'on'
    },
    {
        id: 2,
        name: 'Ultra Sonic',
        status :'on'
    },
    {
        id: 3,
        name: 'Rain Drop',
        status :'off'
    },
    {
        id: 4,
        name: 'Humidaty',
        status :'on'
    },
    {
        id: 5,
        name: 'Air Condition',
        status :'off'
    },
    {
        id: 6,
        name: 'Motion Sensor',
        status :'on'
    },
   
];

   

   const Sensors = ()=>{
    return (
<div>
        <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={sensor}
        renderItem={item => (
          <List.Item>
              
            <Card style={"border-radius"= "10rem"}  title={item.name} hoverable={true}>
                <p> Total_lights={item.status}</p>
           </Card>
          </List.Item>
        )}
      />
      </div>
      );

    }

export  default Sensors;
