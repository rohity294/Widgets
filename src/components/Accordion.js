import React, { useState } from 'react';

// const Accordion = (props)=>{
//     return <h1>{props.items.length}</h1>;
// };

//using destructuring, items is contained within props
const Accordion = ({ items }) => {
  //   const returnedArray = useState(null);
  //   const activeIndex = returnedArray[0];
  //   const setActiveIndex = returnedArray[1];

  //the same as above can be shortened in syntax as below using array destructuring
  //below the first argumen i.e activeIndex is used to access anytime the 0th index value held inside array returned array
  //by  useState; similarly setActiveIndex for 1st value and so on
  const [activeIndex, setActiveIndex] = useState(null); 

  const onTitleClick = (index) => {
    //console.log('clicked:', index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex?'active':'' ;
    
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
