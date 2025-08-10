// import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

// function Socket() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const socket = io('http://localhost:8000');

//     socket.on('connect', () => {
//       console.warn('اتصال Socket.IO برقرار شد');
//     });

//     socket.on('message', (data) => {
//       setMessage(data);
//     });

//     socket.on('disconnect', () => {
//       console.log('اتصال Socket.IO قطع شد');
//     });

//     socket.on('connect_error', (error) => {
//       console.error('خطای اتصال Socket.IO:', error);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>پیام دریافتی از سرور:</h1>
//       <p>{message || 'هیچ پیامی دریافت نشده'}</p>
//     </div>
//   );
// }

// export default Socket;

import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

function SocketComponent() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const socket: Socket = io('http://localhost:8000');

    socket.on('connect', () => {
      console.warn('اتصال Socket.IO برقرار شد');
    });

    socket.on('message', (data: string) => {
      setMessage(data);
    });

    socket.on('disconnect', () => {
      console.log('اتصال Socket.IO قطع شد');
    });

    socket.on('connect_error', (error) => {
      console.error('خطای اتصال Socket.IO:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>پیام دریافتی از سرور:</h1>
      <p>{message || 'هیچ پیامی دریافت نشده'}</p>
    </div>
  );
}

export default SocketComponent;
