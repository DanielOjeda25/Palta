import React from 'react'

interface ModalType {
  isOpen: boolean
  toggle: () => void
}
/**
 * ! este componente es el modal
 */
const ModalHeader = ({  isOpen, toggle }: ModalType) => {
  return (
    <>
      {isOpen && (
        <div className="z-50 w-screen h-screen absolute top-0 flex justify-center items-center bg-slate-900 bg-opacity-90 " onClick={toggle}>
          <div className="block bg-white w-2/3 h-2/3 p-1 rounded-lg" onClick={(e) => e.stopPropagation()}>
          </div>
        </div>
      )}

    </>
  )
}

export default ModalHeader