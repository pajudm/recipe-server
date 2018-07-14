# recipe-server
Server for recipe mobile application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Here are some steps for setting up.

#### NodeJS:
```
sudo curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get update
sudo apt-get install nodejs
```
#### Docker: 
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

#### Docker-Compose:
```
curl -L https://github.com/docker/compose/releases/download/1.22.0-rc2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Installing

A step by step series of examples that tell you how to get a development env running

First, clone the repo to where you want your project to be. If it doesn't work, you may need to set up an SSH key for your github account. [See here for instructions](https://github.com/settings/keys)

```
git clone git@github.com:pajudm/recipe-server.git
```

*WIP* To run the server, run

```
docker-compose up
```
This can be terminated by pressing CTRL+C. MongoDB will be running in a container, and the NodeJS/Express server will be running in another container


<!-- ## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds -->

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

<!-- ## Authors

* **Patrick Sison** - *Initial work* - [GitHub](https://github.com/PatrickSison)
* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth) -->

See also the list of [contributors](https://github.com/pajudm/recipe-server/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
