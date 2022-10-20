import React from "react";
import './../styles.css';
import userimage from './../user_image.png';

export default class Header extends React.Component {
    
    render() {
        return (
            <header>
                <img src={userimage} alt="" />
            </header>
        );
    }
}