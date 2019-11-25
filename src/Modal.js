import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  //useRef sirve para referenciar un elemento, de tal forma que no se cree
  //uno cada vez, sino que lo reutilice (asi no llenas la memoria)
  const elRef = useRef(null);
  //si no existe el div, lo creo
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
    //ahora elRef no es nulo, sino que tiene un div dentro
    //asi, cuando vuelva a comprobar si existe el actual elRef, le devolvera
    //true y no tendra que crear uno nuevo
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    //appendChild() Es uno de los métodos fundamentales de la programación web
    //usando el DOM. El método appendChild() inserta un nuevo nodo dentro de la
    //estructura DOM de un documento
    modalRoot.appendChild(elRef.current);

    //if you return the function that is the cleanup function,
    //so it will run this when it unmounts

    //it is only going to run this function whenever the modal root gets closed
    return () => modalRoot.removeChild(elRef.current);
  }, []); //poner aqui un array vacio hace que solo se ejecute una vez

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
