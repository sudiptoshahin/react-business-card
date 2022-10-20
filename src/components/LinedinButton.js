import React from "react";
import './../styles.css';


export default class LinkedinButton extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.icon =  this.props.icon;
    //     this.text = this.props.text;
    // }

    render() {
        return (
            <div>
                <button className="btn--linkedin"><i class="fa fa-brands fa-linkedin"></i> &nbsp;Linked in</button>
            </div>
        );
    }
}