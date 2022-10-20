import React from "react";
import './../styles.css';
import Intro from "./../components/Intro";
import EmailButton from "./../components/EmailButton";
import LinkedinButton from "./../components/LinedinButton";

export default class Main extends React.Component {
    
    render() {
        return (
            <main>
                
                <Intro />

                <div className="contact--with">
                    <EmailButton />
                    <LinkedinButton />
                </div>

                <div className="text--sections">
                    <div className="text-section1">
                        <h2>About</h2>
                        <p>
                            I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                            I try to keep up with security and best practices, and am always looking for new things to learn.
                        </p>
                    </div>
                    <div className="text-section2">
                        <h2>Interests</h2>
                        <p>
                            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                        </p>
                    </div>
                </div>

            </main>
        );
    }
}