import { useState } from "react";

export const useModal = () => {
  
  /**
   * ! este hook es para manejar el estado de un modal
   * ! isOpen: es el estado del modal
   * ! toggle: es la funcion que cambia el estado del modal
   * 
   */
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return { isOpen, toggle , }
}