import  React from 'react';
import { Card, Col, Row ,List } from 'antd';


const gridStyle = {
    width: '25%',
   
   padding :'10px',
   margins :'10px'
    
  };



const street = [
    {
        id: 1,
        name: 'street 1 ',
        Total_lights:'50',
        Active:'32'
    },
    {
        id:2 ,
        name: 'street 2 ',
        Total_lights:'65',
        Active:'32'
    },
    {
        id: 3,
        name: 'street 3 ',
        Total_lights:'50',
        Active:'32'
    },
    {
        id: 4,
        name: 'street 1 ',
        Total_lights:'50',
        Active:'32'
    },
    {
        id: 5,
        name: 'street 5',
        Total_lights:'50',
        Active:'32'
    },
];
   const Streets = ()=>{
    return (

        <div>
        <div>
        <Card >
        <div>
        <button id="123">All on</button> <button>All off</button>
        </div> 
        </Card>
       </div>
            
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
         dataSource={street}
         renderItem={item => (
           <List.Item>
               
             <Card title={item.name} hoverable={true}>
                 <p> Total_lights={item.Total_lights}</p>
                <p>  Active={item.Active}</p>
             <div>
             <button>on</button> <button>off</button>
             </div></Card>
           </List.Item>
         )}
       />
    
    
   
   
     </div>
      );

    }

export  default Streets;
{/* <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={street}
    renderItem={item => (
      <List.Item>
        <Card title={street[i].name} hoverable={true}>
            <p> Total_lights={street[i].Total_lights}</p>
           <p>  Active={street[i].Active}</p>
        <div>
        <button>on</button> <button>off</button>
        </div></Card>
      </List.Item>
    )}
  /> */}