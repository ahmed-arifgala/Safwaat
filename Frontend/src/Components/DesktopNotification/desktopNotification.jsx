import React, { useState, useEffect } from 'react';
const NotificationComponent = ({title, body, icon}) => {
    const [permission, setPermission] = useState('default');
  
    useEffect(() => {
  
      // Check if the browser supports notifications
      if ('Notification' in window) {
        // Update the state with the current permission
        setPermission(Notification.permission);
      }
    }, []);
  
    const requestPermission = () => {
      console.log("request ki.")
      if ('Notification' in window) {
        Notification.requestPermission()
          .then((newPermission) => {
            setPermission(newPermission);
          });
      }
    };
  
    // Basically this function, only cahneg state of our react component to default, and disable notifications from website.
    // But it will not disable them in Google settings.
    // Disable krne ka mujeh yhi samajh aaraha hai filhaaal, 
    //Enable krne ka ban gya, Enable hojaaye ga InshaALLAH.
    
    const revokePermission = () => {
      if ('Notification' in window) {
        
        setPermission('default');
        
      }
    };
  
    // const showNotification = (t, b) => {
    //   console.log(body, title);
    //   console.log(b, t)
    //   if (permission === 'granted') {
    //     // Create and display a notification
    //     const notification = new Notification(title, {
    //       body: body,
    //       icon: 'https://static.vecteezy.com/system/resources/thumbnails/017/441/736/small/reputation-icon-thumbs-up-and-rays-customer-review-icon-quality-evaluation-feedback-isolated-illustration-vector.jpg',
    //       dir:'ltr'
    //     }
    //     );
    //   }
    // };
  
    const showNotification =()=> {
      var options = {
        body: body,
        icon: 'https://www.vkf-renzel.com/out/pictures/generated/product/1/356_356_75/r12044336-01/general-warning-sign-10836-1.jpg?    auto=compress&cs=tinysrgb&dpr=1&w=500',
        dir: 'ltr',
      };
  
      let notification = new Notification(title, options);
    }
  
    return (
      <div>
        <h2>Notification Component</h2>
        <p>Notification Permission: {permission}</p>
        <button onClick={requestPermission} ontouchstart={requestPermission} disabled={permission === 'granted'}>
          Grant Permission
        </button>
        <button onClick={showNotification(title, body)} ontouchstart={showNotification} disabled={permission !== 'granted'}>
          Show Notification
        </button>
        <button onClick={revokePermission} disabled={permission === 'default'}>
          Revoke Permission
        </button>
      </div>
    );
  };
  export default NotificationComponent;
  