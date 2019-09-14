# Welcome to StackEdit!
intro text


# Setup
To start developing vue web applications, you should install [node.js](https://nodejs.org/en/download/).

## Installation Vue cli
```
npm install -g @vue/cli
```

## Create Vue application
```
vue create <app-name>
```
In our setup, we choose to use the following features:

* Babel
* Typescript
* Router
* CSS Pre-processors
* Linter

## Start application
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

# A possible setup
During the workshop, we used some libraries to make it all work.

## Linting
Linting is process to analyse the code and look for possible errors. The vue cli has a functionality to automaticaly fix some errors. Sometimes, those fixes break your application, so please be careful using this functionality. 
```
npm run lint --fix
```

## Make it look nice
We used [vuetify](https://vuetifyjs.com/en/) to integrate [material design](https://material.io/design/) in our project. Take a look a the get started page to see how you should use Vuetify and which components are available. 

After installation, you can find the configuration of vuetify in src/plugings/vuetify.ts.
