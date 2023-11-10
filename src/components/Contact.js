import React from "react";
import AriaMichael from "../images/AriaMichael.png"
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Contact() {

    const headerStyle = {
        fontFamily: 'Times, Times New Roman, serif',
        fontSize: '24px',
        padding: '10px',
        textAlign: 'center'
    }
    
    const imageStyle = {
        width: '517.33px',
        height: '300px'
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={headerStyle}>Contact</h1>
            <img alt="brand with michaels contact info" style={imageStyle} src={AriaMichael} />
            <Footer style={{ textAlign: 'center' }}>ARIA DESIGN CONSULTANTS © 2014</Footer>
        </div>
    )
}