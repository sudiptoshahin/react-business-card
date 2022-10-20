import React from "react";
import './../styles.css';

export default class Footer extends React.Component {
    
    render() {
        return (
            <footer>
                <button><i className="fa-brands fa-square-twitter social"></i></button>
                <button><i className="fa-brands fa-square-facebook social"></i></button>
                <button><i className="fa-brands fa-square-instagram social"></i></button>
                <button><i className="fa-brands fa-square-github social"></i></button>
            </footer>
        );
    }
}