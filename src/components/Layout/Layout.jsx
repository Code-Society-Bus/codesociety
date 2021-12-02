import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import MainSection from "../MainSection/MainSection";
import IntroSection from "../IntroSection/IntroSection";
import Portfolio from "../Portfolio/Portfolio";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { useState } from "react";

export const Layout = () => {
    const { modal, toggleModal } = useState(false);
    {
        if (modal) {
            <Modal>
                <Form />
            </Modal>
        }
    }
    return (
        <>
            <Router>
                <Topbar />
                <Routes>
                    <Route path='/' element={<MainSection />} />
                    <Route path='/services' element={<IntroSection />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default Layout;