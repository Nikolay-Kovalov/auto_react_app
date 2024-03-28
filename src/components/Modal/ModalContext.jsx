import { createContext, useState } from "react";

export const ModalContext = createContext();


const ModalContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
    setIsModalOpen(prevState => !prevState)
}
  return  <ModalContext.Provider value={{ isModalOpen, handleOpenModal }}>
        {children}
        </ModalContext.Provider>
 }
    
export default ModalContextProvider;

