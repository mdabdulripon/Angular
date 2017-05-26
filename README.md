## GENERAL:

### Stand For:
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
     -> REST: Re-Presentational State Transfer
     -> W3C: World Wide Web Consortium

### How do you speed up your site!
     To speed up the site performance we need to do:
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
     Vanilla Js is a name to refer to using plain JavaScript without any additional libraries like jQuery.

### What is Asynchronous method!
     Asynchronous means that the script will send a request to the server, and continue it's execution without
     waiting for the reply. As soon as reply is received a browser event is fired.

### What is web worker!
     Web worker is a JavaScript that runs in the background independently of other scripts, without affecting the
     performance of the page. You can continue to do whatever you want while the web worker runs in the background.

### What is MVC!
     MVC stands for Model View Controllers. It is a software design pattern for web development application.
          a. Model is responsible for maintaining data.
          b. View is responsible for displaying data.
          c. Controller is controlling data between Model and View.

### What is DOM!
     The DOM is stands for Document Object Model. It’s a W3C standard, which defines a standard for accessing
     Documents. W3C separated DOM in three ways:
           a. Core DOM (For All Documents.)
           b. XML DOM ( For XML)
           c. HTML DOM ( For HTML )



## ANGULAR 2 & UPPER VERSION:

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
     -> Component decorator allows you to mark a class as an Angular component and provide additional metadata that
     determines how the component should be processed, instantiated and used at runtime.
     -> Angular components are a subset of directives.
     -> A component must belong to an NgModule in order for it to be usable by another component or application.

### What is Directive!
     There are three kinds of directives in Angular:
          01. Components directives
          02. Structural directives
               -> Structural Directives change the structure of the view. Two examples are NgFor and NgIf.
          03. Attribute directives
               -> Attribute directives are used as attributes of elements. NgClass, NgStyle, NgModel are Attribute
               directives.
### What is Pipes!
     -> Pipes transform displayed values within a template.
     -> Angular comes with some Built  in pipes. Such as: DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, and
     PercentPipe.

### What is async pipe?
     The async pipe subscribes to an Observable and returns the latest changed value. When a new value is changed,
     the async pipe marks the component to be checked for changes. When the component gets destroyed the async pipe
     unsubscribes automatically to avoid potential memory leaks.

### What is Router!
     Router enables navigation from one view to the next as users perform application tasks.

### What is an Angular 2 Service!
     Angular 2 service is a class which is associates with some methods (GET/POST/PUT) and provides it result as
     a service for across your application.
### What are the features of Angular 2 Service!
     -> Services are singleton objects.
     -> Services are capable of returning the data in the form promises or observables.
     -> Service class is decorated with Injectable decorator

### What are the differences between Observables & Promises?
     01. Promise:
          Promises are only called once and It can return only a single value at a time and the Promises are not
          cancellable.
     02. Observables:
          Observables handle multiple values over time and it can return multiple values and the Observables are
          cancellable.
     03. The Observables are more advanced than Promises.

### Why Angular 2 modules needed?
     An Angular @NgModule allows us to define a context for compiling templates.

### What is Dependency Injection!
     Dependency Injection is a powerful pattern for managing code dependencies. Angular 2 Dependency Injection consists of three things.
          1. Injector
               The injector object use to create instances of dependencies.
          2. Provider
               A provider is help to injector for create an instance of a dependency. A provider takes a token and
               maps that to a factory function that creates an object.
          3. Dependency
               A dependency is the type of which an object should be created.

### What is Input decorator in Angular 2!
     Import allows you to pass data into your controller and templates through html and defining custom
     properties.

### What is Output decorator in angular 2!
     Output decorator is used to binds a property of a component to send the data from child component to parent component and this is a one-way communication.     

### Routes
     Routes uses to describe our application's Routes.

### Router-outlet directive!
     Router-outlet directive is used to render the components for specific location of your applications.

###RouterLink:
     RouterLink is use to link to application's routes.


<hr>

## JAVASCRIPT

### What are the data type in javascript!
     -> Number
     -> String
     -> Boolean
     -> Function
     -> Objects
     -> Null
     -> Undefined

### What are the comparison operator!
     -> == [ Double Equals ]
     -> === [ Triple Equals ]
     -> != [ Not Equal ]
     -> > [ Greater than ]
     -> < [ Less than ]
     -> >= [ Greater than equal ]
     -> <= [ Less Than equal ]

### What are the logical operator!
     -> && [ And ]
     -> ||[ Or]
     -> ! [ Nor ]

### Undeclared Variable:
     Undeclared variables are not exist in program, when program tries to run there will be a runtime error.
### Undefined Variables:
     Undefined variables are declared in program but have not given any value. If programs tries to run an
     undefined value is returned.
### Global Variable:
     Global Variables are declared outside of the function and can be reusable throughout the application.
### Local Variable:
     Local variables are declared inside the function and can not be access for other function.

### What is the differences between = , == , and ===!
     -> Single equal is an assignment operator.
     -> Double equals is a comparison operator. Also known as a loose equality operator. For example, it execute
     the number which is string in other side.
     -> Triple equals is also a comparison operator. Also known as a strict equality operator. For example, for
     execute it has be be same in both side.

### What is an Array and How do you create an array!
     Arrays are used to store multiple values or elements in a single variable.
     Example: Declared a variable name
     Var a = [ and assign the value inside the square brackets separated by comma ]

     Array method are in the below:
          -> join(): Join all array into a string.
          -> toString(): Convert an array to a string separated by comma.
          -> pop(): Remove the last element of an array
          -> push(): Add new element at the end of an array.
          -> shift(): Remove the first element of an array.
          -> unshift(): Add new elements at the first of an array.
          -> sort(): Arrange the elements in alphabetical order.
          -> reverse(): Reverse the elements in an array.
          -> concat(): Create new elements by connecting two arrays.


### what is an Object and how do you create an object!
     An object is a collection of properties, and a property is associates between a name (or key) and a value.
     Example: Declared a variable name:
     var person = {
          first_name:"Abdul",
          last_name:"Ripon",
          age : 24,
          eye_color: "blue"
     };
     Note: [ The person is an object and first_name, last_name, age and eye_color it’s property ]

### What is an anonymous function?
     A function without name is called an Anonymous Function.
     Example:
     var x = function (a, b){
          return a * b
     };
     document.getElementById("demo").innerHTML = x (4, 3);

### What is scope?
     JavaScript has two scopes: global and local.
          -> A variable that is declared outside of a function is a global variable, and its value is accessible and
          modifiable throughout your program.
          -> A variable that is declared inside a function is local variable, and its value is accessible in
          in that function.


### What is Closures!
     Closures are functions that refer to independent variables. I mean, variables that are used locally, but
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

### What is typeof operator!
     Typeof operator returns a string that identifies the data type of an expression.


<hr>   

## JQUERY:

### What is jQuery!
     jQuery is a JavaScript library or frameworks  which does:
          -> Document traversing ,
          -> Event handling,
          -> Ajax interaction and
          -> Animation.

### What is the each method!
     Each method is use for loop the DOM elements, array, and objects properties.
          Example: I want to loop the list items by click a button.
          $(document).ready(function(){
              $("button").click(function(){
                  $("li").each(function(){
                      alert($(this).text())
                  });
              });
          });

### What is the this keyword?
     This keyword always refers to the current object of the DOM elements.  
     For example;
     <a href="#" onclick="$(this).css('display', 'none')">Hide me!</a>

### What is the find and children methods!
     -> Find method find all the element of the DOM.
     -> Children method find one level down to the DOM elements.

### What is the difference between size and length!
    Size and length both returns number of the element in an object. But length is faster than size because
    length is a property and size is a method.


### What are the differences between body.onload() and document.ready() function.		
     -> We can have only one body.onload() function, but we can have multiple document.ready function().
     -> body.onload() function is called when everything is gets ready like DOM, and images. On the other hand
     document.ready function() is called as soon as the DOM is loaded.

### Can we use specific character in place of $ sign and how?
     To replace the $ sign we can use noConflict().
          For Example: A name like
               ripon.noConflict()
               ripon.(document).ready(function() {
                    // code goes here				
               });					
               Or,
               var ripon = jQuery.noConflict()
               ripon.(document).ready(function() {
                    // code goes here
               });

### What is higher order function?		
     A function that takes other function as  an arguments  and returns the function result as its own result is
     called a higher order function.

### What is callback!
     The function is passed as an argument is call callback function. It‘s named callback because at some point
     of time it is call by a higher order function.  A callback function is executed after the current effect is
     finished.
           Foe Example:
               $("button").click(function(){
      	          $("p").hide("slow", function(){
          	           alert("The paragraph is now hidden");
      	          });
               });

### What is Ajax!			
     Ajax is stand for Asynchronous JavaScript and XML. Moreover, it’s:
       -> Update a page without reloading it.
       -> Received data from server.
       -> Request data from server
       -> Send data to the server.

### What is the use of lord method!
     Load method is a powerful ajax method which is, lord data from server and  send data to the server without
     refreshing the page.


<hr>

## CSS / CSS3

### CSS3 new feature or properties!
     -> Box Model
     -> Box shadows
     -> Text shadows
     -> Pseudo classes
     -> Rounded corner
     -> RGBA Color
     -> Border images
     -> New web fonts
     -> Transform property
     -> Multi column layout

### Block elements
     Block elements takes the full width available.
### Inline elements
     Inline elements takes as much width as they need.

### Visibility : hidden
     Visibility hidden simply hide the element but still take the space and affect to the layout of the document.
### Display : none
     Display none also hide the element and do not take the space.

### What are the main component of CSS!
     -> Selectors
     -> Property
     -> Values

### What are child selector
      -> Child selectors is another way to group styling that descent from the parents.
      -> Child selector is mention by two or more elements, which is separated by > [greater than sign]

### How many position exit in css and what their works?
     There are four default positioning in css:
          -> Static position
               The elements is position in order as they appear in the document flow. This is default position.
          -> Relative position
               The element is positioned relative to its normal position. By using left, right, top, bottom properties
               we can adjust the element from its normal position.
          -> Fixed position:
               The element always stay in the same place even the page scroll.
          -> Absolute position
               The element is positioned relatives to its first positioned parents element.

### What is the purpose of pseudo elements and how they are made?
     A pseudo element is used to style specified parts of an element.
     Pseudo elements are made by using double colon followed by the name of pseudo element.
     For Example:
          -> ::after
          -> ::before
          -> ::first-letter
          -> ::first-line
          -> ::selection

### Class selector
     Class selector is a way to styling multiple element.
### ID selector
     ID selector is for only one element styling.

### What are pseudo classes and what they are use for!
     Pseudo class is used to define a special state of an element.
     For example, it can be used to:
          -> Style an element when a user mouses over it
          -> Style visited and unvisited links differently
          -> Style an element when it gets focus

     The most common pseudo class are:
     -> :active
     -> :visited
     -> :target
     -> :hover
     -> :focus
### What are the css selectors!
     Class selectors
          -> Class selector is a way to styling multiple element
     Id selectors
          ->  ID selector is for only one element styling.
     Universal selectors
          ->  Universal selector selects all elements.
          For Example:
          * {
               margin: 0px;
               padding: 0px;
          }
     Attribute selectors
          -> The attribute selector is used to select elements with a specified attribute.
          For Example:
          a[target] {
              background-color: yellow;
          }



<hr>


## HTML / HTML5
