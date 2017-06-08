## GENERAL:

### Stand For:
    -> HTML: Hypertext Markup Language
    -> CSS: Cascading Style Sheet
    -> XML: Extensible Markup Language
    -> AJAX: Asynchronous Javascript And Xml
    -> JSON: JavaScript Object Notation
    -> HTTP: Hypertext Transfer Protocol
    -> XHTML: Extensible Hypertext Markup Language
    -> DOM: Document Object Model
    -> API: Application Program Interface
    -> REST: Re-Presentational State Transfer
    -> W3C: World Wide Web Consortium
    -> SGML: STANDARD GENERALIZED MARKUP LANGUAGE
    -> DTD: Document Type Definition

### How do you speed up your site performance!
    To speed up the site performance we need to do:
        01. Minimize HTTP Requests.
        02. Optimize CSS Files.
        03. Reduce image size.
        04. Reduce server response time.
        05. Enable browser caching.
        06. Load JavaScript asynchronously.
        07. Code your site for mobile-first quality.
        08. Cache as much as possible.
        09. Reduce the number of plugins you use on your site.

### What is Vanilla javascript!
    Vanilla Js is a name to refer to using plain JavaScript without any additional libraries like jQuery.

### What is Asynchronous method!
    Asynchronous means that the script will send a request to the server, and continue it's execution
    without waiting for the reply. As soon as reply is received a browser event is fired.

### What is web worker!
    Web worker is a JavaScript that runs in the background independently of other scripts, without
    affecting the page performance. You can continue to do whatever you want while the web worker
    runs in the background.

### What is MVC!
    MVC stands for Model View Controllers. It is a software design pattern for web development
    application.
        a. Model is responsible for maintaining data.
        b. View is responsible for displaying data.
        c. Controller is responsible for controlling data between Model and View.

### What is DOM!
    The DOM is stands for Document Object Model. It’s a W3C standard, which is define the standard for
    accessing Documents. W3C separated DOM in three ways:
        a. Core DOM (For All Documents)
        b. XML DOM (For XML)
        c. HTML DOM (For HTML)



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
     -> Component decorator allows you to mark a class as an Angular component and provide additional metadata
     that determines how the component should be processed, instantiated and used at runtime.
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
     Dependency Injection is a powerful pattern for managing code dependencies. Angular 2 Dependency Injection consists
     of three things.
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
     Output decorator is used to binds a property of a component to send the data from child component to parent
     component and this is a one-way communication.     

### Routes
     Routes uses to describe our application's Routes.

### Router-outlet directive!
     Router-outlet directive is used to render the components for specific location of your applications.

### RouterLink:
     RouterLink is use to link to application's routes.


<hr>

## JAVASCRIPT

### What is Javascript?
    JavaScript is a client-side scripting language that can be inserted into HTML file. Which also known
    as a lightweight with object-oriented capabilities.

### What are the data type in javascript!
    -> Number
    -> String
    -> Boolean
    -> Function
    -> Objects
    -> Null
    -> Undefined

### What are primitive data type!
    Javascript has five primitive data types:
    -> Number,
    -> String,
    -> Boolean,
    -> Undefined,
    -> Null.

### Does javascript pass a variable by reference or by value!
     It depends, For primitive type, it passed by value. And for Object, it passed by reference.


### What is 'use strict' and what does it do!
     The strict mode allows you to place a program or a function in a string operating context.
     01. Can't use variables that have not been declared with var first.
     02. Javascript reserved keywords are not allowed in strict mode.
     03. Deleting a function, variable, Object is not allowed.

### What are the javascript reserved keyword
     01. Implements
     02. Interface
     03. Let
     04. Package
     05. Private
     06. Protected
     07. Public
     08. Static
     09. Yield

### What are the comparison operator!
    The comparison operators are:
    -> == [ Double Equals ]
    -> === [ Triple Equals ]
    -> != [ Not Equal ]
    -> > [ Greater than ]
    -> < [ Less than ]
    -> >= [ Greater than equal ]
    -> <= [ Less Than equal ]

### What are the logical operator!
    The logical operators are:
    -> && [ And ]
    -> ||[ Or]
    -> ! [ Nor ]

### Undeclared Variable:
     Undeclared variables do not exist in a program when the program tries to run there will be a runtime
     error.

### Undefined Variables:
     Undefined variables are declared in the program but have not given any value. If programs try to run
     an undefined value will return.

### Global Variable:
    Global Variables are declared outside of the function and can be accessible by throughout the
    application.

### Local Variable:
     Local variables are declared inside the function and can not be accessed for other function.

### What is the differences between = , == , and ===!
    -> Single equal is an assignment operator.
    -> Double equals is a comparison operator. Also known as a loose equality operator. For example,
    it executes the number which is a string in another side.
    -> Triple equals is also a comparison operator. Also known as a strict equality operator. For
    execute, it has to be same on both sides.

### What is an Array and How do you create an array!
    Arrays are used to store multiple values or elements in a single variable.
    Example: Declared a variable name
    var a = [ and assign the value inside the square brackets separated by a comma ]

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
     The closure is a function which is referred to a privet variable.
     For Example:
          var passed = 3;
          var addTo = function() {
               var inner = 2;
               return passed + inner;
          };
          console.log(addTo()); //result will be 5.

### What is typeof operator!
     Typeof operator returns a string that identifies the data type of an expression.


### What is event in JavaScript!
     JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates
     a page.
     Some Useful events are:
          -> onclick
          -> onload
          -> onmouseover
          -> onmouseout
          -> onkeydown
          -> onchange
          -> onblur
          -> ondblclick
          -> onfocus


###  JSON.parse()
     <!-- -> When receiving data from a web server, the data is always a string. -->
	-> Convert a string data into JavaScript object.


### JSON.stringify():
     <!-- -> When sending data to a web server, the data has to be a string. -->
     -> Convert a JavaScript object into a string with JSON.stringify().



<hr>   

## JQUERY:

### What is jQuery!
    jQuery is a JavaScript library or frameworks  which does:
        -> Document traversing,
        -> Event handling,
        -> Ajax interaction and
        -> Animation.

### What is the each method!
    Each method is used for a loop the DOM elements, array, and objects properties.
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
    $(document).ready(function(){
        $("p").click(function(){
            $(this).hide();
        });
    });

### What is the find and children methods!
     -> Find method find all the DOM elements
     -> Children method find one level down to the DOM elements.

### What is the difference between size and length!
    Size and length both returns number of the element in an object. But length is faster than size
    because the length is a property and size is a method.


### What are the differences between body.onload() and document.ready() function.		
     -> We can have only one body.onload() function, but we can have multiple document.ready function().
     -> body.onload() function is called when everything gets ready like DOM and images. On the other
     hand document.ready function() is called as soon as the DOM is loaded.

### Can we use specific character in place of $ sign and how?
    To replace the $ sign we can use noConflict() method.
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
    A function that takes other function as an argument and returns the function result as its own
    result is called a higher order function.

### What is callback!
    The function is passed as an argument is called callback function. It‘s named callback because at
    some point of time it is called by a higher order function.  A callback function is executed after
    the current effect is finished.
    For Example:
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });

### What is Ajax!			
    Ajax stands for Asynchronous JavaScript and XML. Moreover, it's
        -> Update a page without reloading it.
        -> Received data from server.
        -> Request data from server
        -> Send data to the server.

### What is the use of lord method!
    Load method is a powerful Ajax method which is, lord data from server and  send data to the server
    without refreshing the page.

<hr>

## CSS / CSS3

### What is CSS
    CSS stands for Cascading Style Sheet. It defines how elements are displayed on the screen.

### What are the main components of CSS   
    The main component of CSS are
        01. Selectors
        02. Property
        03. Values

### CSS3 new feature or properties
    01. Selectors
    02. Box Model
    03. Backgrounds and Borders
    04. Text Effects
    05. Pseudo classes
    06. 2D/3D Transformations
    07. Animations
    08. New web fonts
    09. RGBA Color
    10. Multi column layout

### Block elements
    Block elements takes the full width available.
### Inline elements
    Inline elements takes as much width as the elements need.

### Visibility : hidden
    Visibility hidden simply hide the element but still take the space and affect to the layout of
    the document.
### Display : none
    Display none also hide the element and do not take the space.

### What is class selectors and id selectors!    
    Class selector:
        Class selector is a way to styling multiple elements.
    ID selector:
        ID selector is for only one element styling.

### What are child selector
    -> Child selectors is another way to group styling that descent from the parents.
    -> Child selector is mention by two or more elements, which is separated by > [greater than sign]

### How many position exit in css and what their works?
    There is four default positioning in CSS:
    01. Static position:
        The elements are position in order as they appear in the document flow. This is a default
        position.
    02. Relative position:
        The element is positioned relative to its normal position. By using left, right, top, bottom
        properties we can adjust the element from its normal position.
    03. Fixed position:
        The element always stays in the same place even the page scroll.
    04. Absolute position
        The element is positioned relatives to its first positioned parents element.

### What is the purpose of pseudo elements and how they are made?
    A pseudo-element is used to style specific parts of an element. Pseudo-elements are made by using
    a double colon followed by a pseudo-element name.
    Some useful pseudo-elements are:
        -> ::after
        -> ::before
        -> ::first-letter
        -> ::first-line
        -> ::selection


### What are pseudo classes and what they are use for!
    The pseudo-class is defined a particular state of an element.
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
    Class selectors :
        Class selector is a way to styling multiple element
    Id selectors :
        ID selector is for only one element styling.
    Universal selectors :
        Universal selector selects all elements.
        * {
            margin: 0px;
            padding: 0px;
        }
    Attribute selectors :
        The attribute selector is used to select elements with a specified attribute.
        a[target] {
            background-color: yellow;
        }

### How many ways CSS can implement in the web page
    Three ways CSS can implement in the webpage.
        01. Inline : This goes inside the HTML elements.
        02. Internal : This take place in the head
        03. Eternal : It's an external CSS file link through the HTML page.

### What is the purpose of z-index
    The z-index property specifies the stack order of an element. The greater stack order elements
    position on the top than the lower stack order elements.
    Note: z-index only works on positioned elements [absolute, relative, or fixed].



<hr>

## HTML / HTML5

### What is the !Doctype
    Doctype specifies which markup standers the page using. With this information, the browser
    determines how to render the page according to the source code.

### What is HTML
    HTML stands for Hypertext Markup Language. HTML is a language for laying out text and images
    for the web pages.

### What are difference between HTML and HTML5
    HTML is a simple language for laying out text and images for the web pages. On other hands,
    HTML5 is consider as an application development platform which does whatever HTML does and more.
    It also comes up with some new elements which support all the major browser.

### What is Element
    The element is an individual component of HTML document. Each element can have attribute and
    content.

### What is tag
    Tag are hidden keyword within a web page which define how browser format and display the code.

### What is attribute!
    Attribute are always providing additional information about an element

### What are some new feature of HTML5!
    01. Semantic Elements
        -> section, header, footer, aside, nav, article
    02. Form 2.0
        -> HTML5 include some new attribute for the input form. Example: date, time, month, week,
        number, email, URL, output.
    03. Audio / video
        -> With HTML5 we can embed Audio, Video without restoring the third parties plugin
    05. Canvas
        -> HTML5 support two-dimensional drawing surface
    06. Geolocation
        -> Now visitors can choose to share their own location
