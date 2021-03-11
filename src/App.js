import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
//import Convert from './components/Convert';
import Route from './components/Route';

const items = [
  {
    title: 'What is React?',
    content:
      'React is a javascript library that is used to design single page web applications',
  },
  {
    title: 'How to learn React?',
    content:
      'React can be learnt through tutorials, official documentation, making practice React projects etc',
  },
  {
    title: 'What are the main concepts in learning React?',
    content:
      'The main concepts in React are reusable components, component nesting, passing props from parent component to child component and vice-versa, react lifecycle methods, hooks, redux etc ',
  },
];

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color blue',
    value: 'blue',
  },
  {
    label: 'The color green',
    value: 'green',
  },
];

const Container = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    // <div>
    //    <Accordion items={items}/>
    // </div>

    // <div>
    //    <Search/>
    // </div>

    // <div>
    //   <button onClick={() => setShowDropdown(!showDropdown)}>
    //     Toggle Dropdown
    //   </button>
    //   {showDropdown ? (
    //     <Dropdown
    //       options={options}
    //       selected={selected}
    //       onSelectionChange={setSelected}
    //     />
    //   ) : null}
    // </div>

    // <div>
    //   <Translate></Translate>
    // </div>

    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectionChange={setSelected}
          label="Select a color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

// const showAccordion = ()=>{
//   if(window.location.pathname==='/'){
//     return <Accordion items={items} />
//   }
// }

// const showSearch = ()=>{
//   if(window.location.pathname==='/search'){
//     return <Search />
//   }
// }

// const showDropdown = ()=>{
//   if(window.location.pathname==='/dropdown'){
//     return <Dropdown />
//   }
// }

// const showTranslate = ()=>{
//   if(window.location.pathname==='/translate'){
//     return <Translate />
//   }
// }

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// };

export default Container;
