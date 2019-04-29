## ANGULAR 2++

**list of decorators available in Angular**
- [x] @NgModule
- [x] @Component
- [x] @Injectable
- [x] @Directive
- [x] @Pipe
- [x] @Input
- [x] @Output
- [x] @HostBinding
- [x] @HostListener
- [x] @ContentChild
- [x] @ContentChildren
- [x] @ViewChild
- [x] @ViewChildren

**what is ViewEncapsulation?**

**Angular animations**

**What is async pipe?**

**What is Router!**

**What are the differences between Observables & Promises?**

**What is Dependency Injection!**

**What is ElementRef**

**What is Renderer2**




**Set Base Path::**
- [x] if we have sub folder set base path as sub folder name
```<base href='/dashboard/'>```
- [x] or use Angular CLI 
> ng build --base-href /dashboard/

**Router module provide two methods**
*RouterModule.forRoot()*
- [x] Declared the router Directives 
- [x] Manage Our Route Configuration
- [x] Register Router Services 
- [x] Used once for the application 

*RouterModule.forChild()*
- [x] Declared the router Directives 
- [x] Manage Our Route Configuration
- [x] Does not Register Router Services 
- [x] Used in the feature module


**What does BrowserModule does** 
*Browser Module pull in basic directives such as ngIf ngFor*

**What does HttpClientModule does** 
*HttpClientModule to access http client services and get and set data*

**How to redirect old welcome route to the new home route**
```
    // Redirect to new route name Home 
    [
        { path: 'home', component: HomeComponent }, 
        { path: 'welcome' redirect: 'home', pathMatch: 'full'},
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]    

    // Old Route 
    [
        { path: 'welcome' component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]
```
> Note: '' path is for default route and ** path for page not found route


**What does RouterOutlet directive does?**
*Identifies where to display the routed component's template.*

**What does RouterLink directive does?**
*RouterLink Directive activate a route.*

**Angular provides two type of routes**
- [x] HTML 5 style
- [x] Hash base 

**What is root Module?**
*Every angular application has at least one angular module. it is call AppModule*

**What is Feature Module?**
*Feature modules are NgModules for the purpose of organizing code. For Example*
- [x] product module
- [x] user module













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
