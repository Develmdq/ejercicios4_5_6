import  { useState, useEffect } from 'react';

const initialState = {
  fecha: new Date(),
  edad: 0,
  nombre: 'Martín',
  apellidos: 'San José',
};
const Clock = () => {
  //Estado privado del componente
  const [user, setUser] = useState(initialState);
  const {fecha, edad, nombre, apellidos}=user
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setEdad();
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  });
  
  const setEdad = () => {
    setUser({
      ...user,
      edad: edad + 1,
    });
  };

  return (
    <>
      <h2>
        Hora Actual:&nbsp; 
         {fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {nombre} {apellidos}
      </h3>
      <h1>Edad: {edad}</h1>
    </>
  );
};

export default Clock;
