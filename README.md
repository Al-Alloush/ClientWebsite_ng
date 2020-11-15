# ClientWebsite
---
## start with creating a structure like: Files and folders 
- ``g`` = Generate
- ``m`` = Module
- ``c`` = Component
- ``--flat`` = to Genereate the element inside current folder
- ``--skip-tests`` = to not create extra Test component file

### Generate core Module. this module is for singltons in Application like nav-bar
``` 
\src\app> ng g m core 
```

### Generate blog Module. this module is for blog components, then create a blog component
``` 
\src\app> ng g m blog 

\src\app\blog> ng g c blog --flat --skip-tests
```

### Generate shared Module. this module is for shared component
``` 
\src\app> ng g m shared 
```

---
## Adding ngx-bootstrap and font-awesome
**install ngx-bootstrap [Link](https://valor-software.com/ngx-bootstrap/#/) in project root**
```
> npm install ngx-bootstrap --save
> ng add ngx-bootstrap 
```
*note: after add it, it will update ``angular.jsom`` file with location of **CSS** that come with, and add in ``app.module.ts`` **BrowserAnimationsModule**, and it does not matter if display some warning*

**install font-awesome**
```
> npm install font-awesome
```

*it does not matter if display some warning, and need to add the style sheets manually for this one inside ``angular.json`` in all **style** section:*
```
./node_modules/font-awesome/css/font-awesome.min.css
```
---
## Configure angular server to serve its content over Https
- add Certificate ``server.crt`` and ``server.key `` in **ssl** folder in side the Angular project

*note: this Certificate existing in **StudentAssets** folder* 

**Follow the next procedures:**
```
Windows 10
	1. Double click on the certificate (server.crt)
	2. Click on the button “Install Certificate …”
	3. Select whether you want to store it on user level or on machine level
	4. Click “Next”
	5. Select “Place all certificates in the following store”
	6. Click “Browse”
	7. Select “Trusted Root Certification Authorities”
	8. Click “Ok”
	9. Click “Next”
	10. Click “Finish”
```
- inside ``angular.json`` in **serve** section add:
```
"sslKey": "ssl/server.key",
"sslCert": "ssl/server.crt",
"ssl": true
```
---
## START WITH ANGULAR
- install Nodejs (JavaScript engine)
    - npm
- install Angular CLI [Link](https://cli.angular.io/)
```
> npm install -g @angular/cli
```
- Create new Angular Project, with routing in Application, SCSS 
```
root> ng new <name>
```
---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
