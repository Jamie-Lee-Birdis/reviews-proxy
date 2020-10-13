# Single Page Application (Docker)


> This project is an excercise in designing a single page application sales portal. This page will make use of interactive components to display video, images, and text content to a potential customer, making use of a service oriented architecture through a proxy server to create one seamless page.

## Related Projects

  - https://github.com/Jamie-Lee-Birdis/reviews-proxy
  - https://github.com/Jamie-Lee-Birdis/hero-section
  - https://github.com/Jamie-Lee-Birdis/body
  - https://github.com/Jamie-Lee-Birdis/reviews/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Installation](#installation)

## Usage
> After installation, use npm start to run the server.

## Requirements

- [Docker](https://docs.docker.com/engine/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)

### Installation

From within the root directory:


1. Clone this respository.
1. Install [Docker](https://docs.docker.com/engine/install/) and [Docker-compose](https://docs.docker.com/compose/install/)
1. From the shell, Create the container and run it: ```docker-compose up```
1. From a seperate shell, seed the database: ```docker exec -it reviews_app npm run initialize```
