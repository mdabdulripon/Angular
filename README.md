## GENERAL:

### STAND FOR:
     -> HTML: Hypertext Markup Language
     -> CSS: Cascading Style Sheet
     -> XML: Extensible Markup Language
     -> AJAX: Asynchronous Javascript And Xml
     -> JSON: JavaScript Object Notation
     -> HTTP: Hypertext Transfer Protocol
     -> XHTML: Extensible Hypertext Markup Language
     -> SGML: STANDARD GENERALIZED MARKUP LANGUAGE
     -> DTD: Document Type Definition
     -> DOM: Document Object Model
     -> API: Application Program Interface
     -> REST: REpresentational State Transfer

### How do you speed up your site!
     ->To speed up the site performance we need to do:
          01. Minimize HTTP Requests
          02. Reduce server response time
          03. Enable browser caching
          04. Optimize CSS File
          05. Reduce the number of plugins you use on your site
          06. Reduce image size
          07. Load JavaScript asynchronously
          08. Code your site for mobile-first quality and speed
          09. Cache as much as possible

### What is Vanilla javascript!
     -> Vanilla Js is a name to refer to using plain JavaScript without any additional libraries like jQuery.

### what is Asynchronous method!
     -> Asynchronous means that the script will send a request to the server, and continue it's execution without
     waiting for the reply. As soon as reply is received a browser event is fired.






## ANGULAR:

### What's New in Angular 4!
     -> Smaller & Faster Apps:
          It is quite a bit faster and smaller than angular 2.
     -> View Engine Size Reduce:
          Improved the compilation time. These changes reduce around 60% size in most cases.
     -> Animation Package:
          Animations now have their own package @angular/platform-browser/animations
     -> NgIf with Else:
          Now possible to use an else syntax.

###  Advantages for Angular2
     01. Angular2 has better performance.
     02. Angular2 has more powerful template system.
     03. Angular2 provide simpler APIs, lazy loading and easier to application debugging.
     04. Angular2 much more testable

### What is Components!
     -> Component decorator allows you to mark a class as an Angular component and provide additional
     metadata that determines how the component should be processed, instantiated and used at runtime.
     -> Angular components are a subset of directives.
     -> A component must belong to an NgModule in order for it to be usable by another component or application.

### What is Directive!
     -> There are three kinds of directives in Angular:
          01. Components directives
          02. Structural directives
               -> Structural Directives change the structure of the view. Two examples are NgFor and NgIf.
          03. Attribute directives
               -> Attribute directives are used as attributes of elements. NgClass, NgStyle, NgModel
               are Attribute directives.
### What is Pipes!
     -> Pipes transform displayed values within a template.
     -> Angular comes with some Built  in pipes. Such as: DatePipe, UpperCasePipe, LowerCasePipe,
     CurrencyPipe, and PercentPipe.

### What is Router!
     -> Router enables navigation from one view to the next as users perform application tasks.





## JAVASCRIPT

### What is Closures!
     -> Closures are functions that refer to independent variables. I mean, variables that are used locally, but
     defined in an enclosing scope.
          var add = (function () {
    	          var counter = 0;
	          return function () {
                    return counter += 1;
               }
          })();
          function myFunction(){
              	document.getElementById("demo").innerHTML = add();
          }

     -> The variable add is assigned the return value of a self-invoking function.
     -> The self-invoking function only runs once. It sets the counter to zero, and returns a function expression.
     -> This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
