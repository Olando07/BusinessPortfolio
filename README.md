# Olando McDonald - Portfolio

A modern, responsive portfolio website built with React, TypeScript and Vite. 

## Running the Application on localhost:5575

### Prerequisites

- Docker installed on your machine
- Port 5575 available on your system

### Quick Start

Follow these steps to get the portfolio running on `localhost:5575` (127.0.0.1:5575):

#### Step 1: Build the Docker Image

Open your terminal in the project directory and run:
```bash
docker build -t mcdonald_olando_portfolio .
```

This command will:
- Create a Docker build
- Install all dependencies
- Build the React application
- Build the Storybook documentation
- Configure nginx to serve the application

The build process may take 5-10 minutes depending on your machine.

#### Step 2: Run the Docker Container

Once the build is complete, start the container:
```bash
docker run -p 5575:5575 --name portfolio mcdonald_olando_portfolio
```

This command will:
- Run the container 
- Map port 5575 from the container to port 5575 on your host machine (`-p 5575:5575`)
- Name the container "portfolio" for easy reference

#### Step 3: Access the Portfolio

Open your web browser and navigate to:
```
http://localhost:5575
```

or
```
http://127.0.0.1:5575
```

#### Stop the container
```bash
docker stop portfolio
```

#### Start the container again
```bash
docker start portfolio
```

#### Remove the container
```bash
docker rm -f portfolio
```

## Tech Stack

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Storybook
- Docker & nginx

## Portfolio Sections

- **Basic Info**: Introduction and background
- **Work**: Project showcase with live demos
- **Skills**: Technical skills and tools
- **Resources**: Developer resources and references
- **Developer Setup**: VS Code configuration and preferences
