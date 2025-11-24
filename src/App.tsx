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
                className="mt-10 px-15 py-20 flex flex-col text-white bg-gray-900"
            >
                <h1 className="text-3xl section-headings mb-6">👤Basic Info</h1>
                <div>
                    <Text
                        fontSize="18px"
                        content="Hello I'm Olando, a software developer, full stack web developer, Web Designer, Web Application Business Analyst and Web Application Support Specialist. I have almost completed the Full Stack Web Development course ar Red River College and gain 1 year of experience in the software and web developemnt field, through coursework and personal projects. From building to working with APIs, working with Databases, pentesting systems, creating or modifying backend logic or frontend logic for UI/UX, I am ready to join your team and work in a collaborative environment tp deliver work of the highest quality."
                    ></Text>
                </div>
            </section>
            <section
                id="work"
                className="px-15 py-20 flex flex-col bg-slate-700"
            >
                <h1 className="text-3xl section-headings mb-6 ml-157">
                    💼Work
                </h1>
                <Text
                    content="Here, you can view some of my work."
                    className="mb-15 ml-159 text-white"
                ></Text>
                <div className="grid grid-flow-col grid-rows-2 gap-20 justify-center">
                    <Card
                        background="#d1d5dc"
                        title="My Original Portfolio"
                        content="Here is my portfolio that I have created and been working on occasionly for 7 months. It is a SPA that uses reacts key utilities, clever styling and creativity."
                        image="../public/portfolio.png"
                        techStack={["React.js", "Tailwindcss", "CSS", "Git"]}
                        isLive={true}
                        liveDemo="https://olando07.github.io/Lando/"
                        className="card-hover"
                    ></Card>
                    <Card
                        background="#d1d5dc"
                        title="Pokemon Information"
                        image="../public/pokemon_info.png"
                        techStack={["Ruby on Rails", "Bulma CSS", "Git"]}
                        isLive={false}
                        className="card-hover"
                    ></Card>
                    <Card
                        background="#d1d5dc"
                        title="RRC Student Guide"
                        content="This site was created for a communications assignment in my first college term. It was created to summarize and keep all the necessary information that new students need."
                        image="../public/student_guide.png"
                        techStack={["React.js", "CSS", "Git"]}
                        isLive={true}
                        liveDemo="https://olando07.github.io/Olando_McDonald_P4/"
                        className="card-hover"
                    ></Card>
                    <Card
                        background="#d1d5dc"
                        title="My term 1 final project"
                        image="../public/term1_proj.png"
                        techStack={["HTML", "CSS", "JavaScript"]}
                        isLive={true}
                        liveDemo="https://olando07.github.io/New-Student-Guide/"
                        className="card-hover"
                    ></Card>
                </div>
            </section>
            <section
                id="skills"
                className="px-15 py-20 flex justify-start flex-col bg-gray-800"
            >
                <h1 className="text-3xl section-headings mb-6">⭐Skills</h1>
                <Text
                    className="mb-10  text-white"
                    content="As a software developer I use variety of languages/frameworks and tools. The languages/frameworks I use include:"
                ></Text>
                <div className="grid grid-cols-3 gap-5 justify-center">
                    <Card
                        background="#d1d5dc"
                        title="HTML"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-html-48.png"
                        className="skill-card card-hover"
                        content="HTML is the foundation of every website and web application. It structures content and allows me to create semantic, accessible interfaces."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="CSS"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-css-48.png"
                        className="skill-card card-hover"
                        content="CSS brings designs to life and creates visually appealing user experiences. I use it to style responsive layouts and implement modern design patterns."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="JavaScript"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-js-48.png"
                        className="skill-card card-hover"
                        content="JavaScript adds interactivity and dynamic functionality to web applications. It's essential for creating engaging user experiences and handling complex logic on the client side."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="React.js"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-react-48.png"
                        className="skill-card card-hover"
                        content="React is my go-to framework for building modern, component-based applications. It allows me to create reusable UI components and manage application state efficiently."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="Python"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-python-48.png"
                        className="skill-card card-hover"
                        content="Python is a versatile language I use for backend development and scripting. Its simplicity and extensive libraries make it perfect for rapid development and problem-solving."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="Java"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-java-48.png"
                        className="skill-card card-hover"
                        content="Java is a powerful object-oriented language used in enterprise applications. I leverage it for building robust, scalable backend systems."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="Ruby on Rails"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-ruby-on-rails-48.png"
                        className="skill-card card-hover"
                        content="Rails is a full-stack framework that speeds up web application development. I use it to quickly build database-backed applications with clean, maintainable code."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="PHP"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-php-48.png"
                        className="skill-card card-hover"
                        content="PHP powers many web applications and content management systems. I use it for server-side scripting and building dynamic web solutions."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="Node.js"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-nodejs-48.png"
                        className="skill-card card-hover"
                        content="Node.js allows me to use JavaScript on the backend for full-stack development. It's perfect for building fast, scalable server applications and APIs."
                    ></Card>

                    <Card
                        background="#d1d5dc"
                        title="Git"
                        isLive={false}
                        width="260px"
                        image="../public/icons8-git-48.png"
                        className="skill-card card-hover"
                        content="Git is essential for version control and collaborative development. I use it daily to track changes, manage code and work effectively in team environments."
                    ></Card>
                </div>
                <Text
                    className="mt-10  text-white"
                    content="The tools that I use are VS Code, Pycharm, Bash, Command line, Git and Google."
                ></Text>
            </section>
            <section
                id="resources"
                className="px-15 py-20 flex justify-end flex-col bg-slate-800"
            >
                <h1 className="text-3xl section-headings">📌Resources</h1>
                <Text
                    className="mb-10 mt-5  text-white"
                    content="As a developer, I rely on these resources to solve problems, learn new technologies and stay updated with best practices."
                ></Text>
                <div className="grid grid-cols-3 gap-5 justify-center">
                    <Card
                        title="Stack Overflow"
                        isLive={true}
                        liveDemo="https://stackoverflow.com"
                        width="260px"
                        background="#d1d5dc"
                        content="My go-to platform for finding solutions to coding problems. The community-driven Q&A format helps me troubleshoot issues quickly."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="MDN Web Docs"
                        isLive={true}
                        liveDemo="https://developer.mozilla.org"
                        width="260px"
                        background="#d1d5dc"
                        content="Comprehensive documentation for web technologies. I use it as a reference for HTML, CSS and JavaScript best practices."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="GitHub"
                        isLive={true}
                        liveDemo="https://github.com"
                        width="260px"
                        background="#d1d5dc"
                        content="Essential for version control and exploring open-source projects. I use it to collaborate, share code and learn from other developers."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="React Docs"
                        isLive={true}
                        liveDemo="https://react.dev"
                        width="260px"
                        background="#d1d5dc"
                        content="The official React documentation is my reference for hooks, components and best practices. It keeps me updated on the latest React patterns and features."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="W3Schools"
                        isLive={true}
                        liveDemo="https://www.w3schools.com"
                        width="260px"
                        background="#d1d5dc"
                        content="A quick reference site for syntax and examples across multiple languages. I use it for fast lookups when I need to refresh my memory on specific methods or properties."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="Dev.to"
                        isLive={true}
                        liveDemo="https://dev.to"
                        width="260px"
                        background="#d1d5dc"
                        content="A community platform where developers share tutorials and insights. I read articles here to learn new techniques and stay current with industry trends."
                        className="card-hover"
                    ></Card>
                </div>
            </section>
            <section
                id="developerSetup"
                className="px-15 py-20 flex justify-center flex-col bg-gray-700"
            >
                <h1 className="text-3xl section-headings mb-6">
                    ⚡Developer Setup
                </h1>
                <Text
                    className="mb-10  text-white"
                    content="Here's a look at my development environment and the tools I use to write clean, efficient code."
                ></Text>
                <div className="grid grid-cols-2 gap-5 justify-center">
                    <Card
                        title="VS Code Extensions"
                        isLive={false}
                        width="400px"
                        background="#d1d5dc"
                        content="I use Prettier and ESLint for code quality and formatting, Live Server for quick previews, and Docker for containerization. I also rely on multiple GitHub utilities for version control, language-specific extensions like Pylance for Python, and Open in Browser for testing."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="Terminal Setup"
                        isLive={false}
                        width="400px"
                        background="#d1d5dc"
                        content="I primarily work with CMD and use Oh My Posh for terminal styling. This setup gives me a clean, customized command line experience that makes navigation and Git operations more efficient."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="Editor Theme & Font"
                        isLive={false}
                        width="400px"
                        background="#d1d5dc"
                        content="I code with the Halcyon theme for its comfortable color scheme and use Consolas font at 14px. The smooth cursor animation and clean aesthetics keep me focused during long coding sessions."
                        className="card-hover"
                    ></Card>
                    <Card
                        title="Editor Configuration"
                        isLive={false}
                        width="400px"
                        background="#d1d5dc"
                        content="My VS Code is configured with auto-save, format on paste and save with Prettier as the default formatter, and 4-space indentation. These settings ensure consistent code style and save me time by automating formatting tasks."
                        className="card-hover"
                    ></Card>
                </div>
            </section>
        </div>
    );
}

export default App;
