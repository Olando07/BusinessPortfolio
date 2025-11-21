import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li> 
                        <Button label="visible">
                        <a href="#basicInfo">Basic Info</a>
                        </Button>
                    </li>
                    <li>
                        <Button label="visible">
                        <a href="#work">Work</a>
                        </Button>
                    </li>
                    <li>
                        <Button label="visible">
                        <a href="#skills">Skills</a>
                        </Button>
                    </li>
                    <li>
                        <Button label="visible">
                        <a href="#resources">Resources</a>
                        </Button>
                    </li>
                    <li>
                        <Button label="visible">
                        <a href="#developerSetup">Developer Setup</a>
                        </Button>
                    </li>
                </ul>
            </nav>
            <section>

            </section>
        </div>
    );
}

export default App;
