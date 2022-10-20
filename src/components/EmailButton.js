import React from "react";
import './../styles.css';


export default class EmailButton extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.icon =  this.props.icon;
    //     this.text = this.props.text;
    // }

    render() {
        return (
            <div className="email">
                <button className="btn--email"><i className="fa fa-envelope"></i> &nbsp;Email</button>
            </div>
        );
    }
}