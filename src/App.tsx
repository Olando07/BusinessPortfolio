import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Button
                            label="Basic Info"
                            onClick={() =>
                                document
                                    .getElementById("basicInfo")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        ></Button>
                    </li>
                    <li>
                        <Button
                            label="Work"
                            onClick={() =>
                                document
                                    .getElementById("work")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        ></Button>
                    </li>
                    <li>
                        <Button
                            label="Skills"
                            onClick={() =>
                                document
                                    .getElementById("skills")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        ></Button>
                    </li>
                    <li>
                        <Button
                            label="Resources"
                            onClick={() =>
                                document
                                    .getElementById("resources")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        ></Button>
                    </li>
                    <li>
                        <Button
                            label="Developer Setup"
                            onClick={() =>
                                document
                                    .getElementById("developerSetup")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        ></Button>
                    </li>
                </ul>
            </nav>
            <section id="basicInfo" className="">
                Basic Info
            </section>
            <section id="work" className="">
                Work
            </section>
            <section id="skills" className="">
                Skills
            </section>
            <section id="resources" className="">
                Resources
            </section>
            <section id="developerSetup" className="">
                Developer SetUp
            </section>
        </div>
    );
}

export default App;
