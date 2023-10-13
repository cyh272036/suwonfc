import React from 'react'

const TabContent = (props) => {
    let {tab} = props;

    if(tab===0){
        return         <img src="/img/more.jpg" alt="" />
    }else if(tab===1){
        return <div>환불 및 배송정보</div>
    }

  return (
    <div>
    [<div>
        <img src="/img/more.jpg" alt="" />
    </div>, 
    
    <div>환불 및 배송정보</div>][tab]
    </div>
  )
}

export default TabContent