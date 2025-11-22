import React from "react";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Card from "./components/Card/Card";
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
            <section
                id="basicInfo"
                className="mt-10 px-15 py-10 flex flex-col text-white bg-gray-800"
            >
                <h1 className="text-3xl section-headings mb-3">👤Basic Info</h1>
                <div>
                    <Text content="Hello I'm Olando, a software developer, full stack web developer, Web Designer, Web Application Business Analyst and Web Application Support Specialist. I have almost completed the Full Stack Web Development course ar Red River College and gain 1 year of experience in the software and web developemnt field, through coursework and personal projects. From building to working with APIs, working with Databases, pentesting systems, creating or modifying backend logic or frontend logic for UI/UX, I am ready to join your team and work in a collaborative environment tp deliver work of the highest quality."></Text>
                </div>
            </section>
            <section id="work" className="px-15 py-10 flex flex-col bg-black">
                <h1 className="text-3xl section-headings mb-3">💼Work</h1>
                <div>
                    <Text
                        color="white"
                        content="Here, you can view and use some of the work i have"
                        className="block mb-5"
                    ></Text>
                    <Card
                        title="My real Portfolio"
                        content="page => https://olando07.github.io/Lando/"
                    ></Card>
                </div>
            </section>
            <section id="skills" className="px-15 flex justify-start flex-col">
                <h1 className="text-3xl section-headings">⭐Skills</h1>
                <div>
                    <p></p>
                </div>
            </section>
            <section id="resources" className="px-15 flex justify-end flex-col">
                <h1 className="text-3xl section-headings">📌Resources</h1>
                <div>
                    <p></p>
                </div>
            </section>
            <section
                id="developerSetup"
                className="px-15 flex justify-center flex-col"
            >
                <h1 className="text-3xl section-headings">⚡Developer Setup</h1>
                <div>
                    <p></p>
                </div>
            </section>
        </div>
    );
}

export default App;
