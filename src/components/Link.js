import React from 'react';

const Link = ({ className, href, children }) => {
    const myHelperFunction = (e) =>{
        if(e.metaKey || e.ctrlKey){
            return;
        }
        e.preventDefault();
        window.history.pushState({},'',href);
        const navEvent = new PopStateEvent('mypopstate');
        window.dispatchEvent(navEvent);
    };

    return (
    <a onClick={myHelperFunction} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
