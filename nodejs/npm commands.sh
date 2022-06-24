#show help for npm
npm --help

#list global packages
npm list -g

#update node to latest version
#update via OS package manager
brew upgrade node

#update npm to latest version
npm install npm@latest -g

#install package globally
npm install -g PACKAGE_NAME

#uninstall package globally
npm uninstall -g PACKAGE_NAME

#initialize project to be initialized by npm
npm init
#(This command creates package.json file)

#install npm dependency package for development
npm install --save-dev PACKAGE_NAME PACKAGE_NAME2 ...
#eg:
npm install --save-dev eslint

#setup new project ( run below command in project root directory )
#it will ask various questions, and then create package.json file containing project config.
npm init

#install dependencies of a project mentioned in package.json
npm install

#build a project ( run below command in project root directory )
npm run build

#if getting error while doing npm install
#https://stackoverflow.com/questions/69567381/getting-cannot-read-property-pickalgorithm-of-null-error-in-react-native
npm cache clear --force

#update project dependencies in package.json
#install npm-check-updates if not already installed
npm list --location=global|grep npm-check-updates || sudo npm install -g npm-check-updates
#cd to project directory
#update dependencies in package.json file
ncu -u
#install latest dependencies
npm install

#npm packages
#-------------
npm install -g serve

#go project directory and type command "serve" to start serving index.html file

