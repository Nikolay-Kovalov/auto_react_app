import styles from './Layout.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

const Layout = () => {
    return (
        <>
        <Header/>
         <div className={styles.container}>
            {/* <Suspense fallback={<div className={styles.loader}>Loading...</div>}> */}
                <Outlet />
            {/* </Suspense> */}
      
            </div>  
                  <Footer/>
        </>

    )
}

export default Layout;