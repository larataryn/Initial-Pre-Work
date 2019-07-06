# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The URL https://www.techtonic.com/ represents the domain name of an internet resource. It is associated with a real address, or an Internet Protocol (IP) address, that identifies its location on a web server. When we, the client, attempt to access a website using a URL, the browser attempts to copy the web page data from the web server to the machine we are accessing the page from. This is accomplished by first locating the server that is hosting the website. In order to identify the page's IP address, the domain name is translated using a web "address book" called the Domain Name Server (DNS). Once the website's server is located, the browser sends a Hypertext Transfer Protocol Secure (HTTPS) message to that server with a request to view the website. If the server approves, it sends a "200 OK" message back to the client machine signifying that the request has been approved. After approving the request, the server begins to send the browser all of the data for the website in blocks known as data packets. Finally, the browser processes and assembles those packets and displays the webpage to the client.

## From start to finish, how does data reach you to be rendered in the browser?

As described above, the server sends data packets to the browser containing all of the code (HTML, CSS, JavaScript, etc.) needed to render the website. The browser is then responsible for interpreting that data into something that can be displayed to the user. The HTML files are read byte-by-byte and those bytes are translated into characters using the character encoding standard set by the HTML file. Those characters are then reassembled into tokens that represent the specific HTML tags and the data contained within them. Once all of the tokens have been parsed, the browser is able to convert them into objects called nodes and use those nodes to create a tree structure called a Document Object Model (DOM). The DOM ensures that all relationships between nodes are correctly represented. While the browser is creating the DOM, it is concurrently creating a similar structure, known as the CSS Object Model (CSSOM), from the CSS code linked in the HTML file. The two tree structures, the DOM and the CSSOM, are joined together, creating the render tree. The render tree holds all of the content and style information for the page, but the browser still needs to perform a layout operation to determine the appropriate sizes and locations of all data objects in relation to that specific browser. With the render tree and the layout operation complete, the browser can finally print the elements to the client machine, effectively displaying the web site to the user.

## What code is rendered in the browser?

Code rendered through the browser is known as client-side code. This mainly refers to the HTML, CSS, and JavaScript elements of the site.

## What is the server-side code’s main function?

Server-side code refers to the code that is processed through a web server. It is primarily involved with processing user input and accessing data stored on databases/servers. It also restricts the user's ability to interact with that data, protecting proprietary and other private information.

## What is the client-side code’s main function?

Client-side code involves anything regarding the user interface or the display of the webpage. It is the code that is ran on a client's machine through a browser and is used to create interactive web pages.

## What is runtime?

Runtime refers to the execution of any instructions that are necessary in order to run a program. Runtime instructions are carried out while the program is running and a runtime system provides a structure for the program to run in.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The first time a website is visited, new instances are created for every client-side asset. Those instances are typically stored in a cache. The next time the site is visited, the browser starts loading the page with the data stored in the cache and just performs updates to any asset that has changed since the last time the page was loaded.

## How many instances of the server-side code are available at any given time?

Only one instance of server-side code is available at a given time. By retrieving the code from the server, the client has essentially "checked out" the server-side code. If any actions are to be taken regarding the server-side code, the client must first send a request back to the server. Then, the client has to wait for the server to process the request and send the page back before continuing any further.

## How many instances of the databases connected to the server application are created?

Each time a new connection to the server is made, a single instance is created. That instance can be used to manage multiple databases. However, it appears that many specifics regarding database instances depend on how they are implemented by the server code.
