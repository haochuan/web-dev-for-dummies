# How to write server and API

We are going to use [express](http://expressjs.com/) as the framework for writing server in node.js.

### Setup

In the termianl, create a new directory, and then install the dependencies:

```
mkdir project
cd project
npm install express body-parser cors
```

---

### Basic GET request via AJAX

Create a new file called `server.js`, below is the start template of `server.js`, please also read the comment in the code:

```js
/*====================================
=            Server Setup            =
====================================*/
/**
*
* You do not need to care anything here
*
*/
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(require('cors')());

// Parse application/json
app.use(bodyParser.json());


var router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict: app.get('strict routing')
});

app.use(router);

// this is a line to run a server on port 3000
var server = app.listen(3000, function() {
    // if the server is running successfully, you will see this in terminal
    console.log('server listening at port 3000');
});


/*=====  End of Server Setup  ======*/

/*==============================
=            Routes            =
==============================*/
/**
*
* You need to change somehting below
*
*/



/*=====  End of Routes  ======*/

router.get('/', function (req, res) {
    res.send('Hello');
});
```

Now in the terminal, type `node server.js` to run the server, you will see `server listening at port 3000` when it runs successfully.

In the browser, enter `localhost:3000/`, you will see `Hello` in the browser, let's figure out why.

In the code:
```js
router.get('/', function (req, res) {
    res.send('Hello');
});
```
If the server receives a `GET` request in path `/`, the `res` which means response will pass the string `Hello` to the client. So in your browser, the path you hit is `/`, so that's why you see `Hello` in the browser. 

Basically you just wrote a very simple server serve a simple API, all of the website and apps are running based on a variery of differet APIs, generally we call the path of the an API (in this case it's `localhost:3000/`, a server running on your localhost on port 3000) as the `endpoint`.

Now we have a very basic server running on localhost, let's see how to make a request to the endpoint from client via Javascript.

This is a index.html page for the client:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

</head>
<body>
    <button id="myButton">Button</button>
    <p id="content"></p>
    <script>
        $('#myButton').click(function(e) {
            console.log("clicked");
        });
    </script>
</body>
</html>
```

In the page, there is a button (with `myButton` as its id), and an empty `<p>`. Currently if you click the button, it only prints "clicked" to the console. What we want to do is after clicking the button, we will make a call to the API and then display the content we get from the API into the `<p>` element in the HTML.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

</head>
<body>
    <button id="myButton">Button</button>
    <p id="content"></p>
    <script>
        $('#myButton').click(function(e) {
            $.ajax({
                method: 'GET',
                url: 'http://localhost:3000/',
                success: function(response) {
                    $('#content').text(response);
                }
            });
        });
    </script>
</body>
</html>
```

Now try that again you will see the result.

We are using AJAX to make calls to server. In the object passed to the ajax, `method: 'GET'` means you are making a `GET` request (remember that in the server the endpoint is also `GET`:` router.get`). There are a lot of request types, but do remember two of the most important ones: `GET` and `POST`. The `url: 'http://localhost:3000/` means the path/URL for the API. The `success: function(response)` is a function which will be called if the AJAX request has been made successfully. There is a parameter in the function called 'response', which will be the content you got from the server.

---
### Request parameters

Now we can make a call to the server and get some data back, but in the example above, we are only getting data from the server instead of passing data to the server, so how can we pass somthing to the server?

Before the code example, you do need to know the following:

Suppose we have the URL like this: `http://localhost:3000/one/two?name=haochuan&wechatID=12345`

The `one`, `two` in the URL are the path parameters in the URL, `name` and `wechatID` are the query parameters in the URL. Path parameters are seperated by `/` while query parameters are seperated by `&` and staring with `?`.

Remember that in the node server, we have the function `router.get('/', function (req, res) {})`, the `req` in that function is the request object from the client, and the `res` is the response you will send to the client from the server. The way to get path and query parameters from the server will be like the following:

```
// URL is http://localhost:3000/one/two?name=haochuan&wechatID=12345
// note that how to define the path parameter in the function below (use ":")
router.get('/:firstPathParameter/:secondPathParameter', function (req, res) {
    // req.params.firstPathParameter will be: one (string)
    // req.params.firstPathParameter will be: two (string)
    // req.query.name will be: haochuan (string)
    // req.query.wechatID will be: 12345 (string)
});
```

Let's see the following exmaple, the client will send a request to `http://localhost:3000/sum/1/2?third=3`. In the URL, the first and second path parameter are "1" and "2", the first query parameter `third` is "3", Here is the new server side code:

```
/*====================================
=            Server Setup            =
====================================*/
/**
*
* You do not need to care anything here
*
*/
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(require('cors')());

// Parse application/json
app.use(bodyParser.json());


var router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict: app.get('strict routing')
});

app.use(router);

var server = app.listen(3000, function() {
    console.log('server listening at port 3000');
});


/*=====  End of Server Setup  ======*/

/*==============================
=            Routes            =
==============================*/
/**
*
* You need to change somehting below
*
*/



/*=====  End of Routes  ======*/

router.get('/', function (req, res) {
    res.send('Hello');
});

router.get('/sum/:firstNum/:secondNum', function (req, res) {
   var firstNumber = Number(req.params.firstNum) ;
   var secondNumber = Number(req.params.secondNum);
   var thirdNumber = Number(req.query.third);
   var result = "The sum of there number are: " + (firstNumber + secondNumber + thirdNumber);
   res.send(result);
});
```

In the code above, we passed two path parameters and one query parameters to the server, and the server will return the sum of those three numbers. Note that all the parameter passed by URL is a STRING, so we use `Number(string)` to convert the string into a number.

Now when you change the `url` in the ajax call of the HTML client file from 'http://localhost:3000/' to 'http://localhost:3000/sum/5/6?third=8', see what will happen.

So now we are able to pass some data from client to the server, the based on those data, the server can do something and send the data back to the client.

---

### Basic POST request via AJAX

Let's take a look at the `POST` request. I would say the `POST` request is very similar to the `GET` request in some ways cause I don't want to go too deeper for the details. Only one thing you de need to know is that in `POST` request, you can also pass the data from the client to the server in a `body` object besides the `path` and `query` parameters.

Let's see the updated server side code first (note that how we will get the data from body):

```
router.post('/info', function (req, res) {
    var name = req.body.name;
    var wechatID = req.body.wechatID;
    var result = "Hello " + name + ", your wechatID is: " + wechatID;
    res.send(result);
});
```

And in the client side, we will change the ajax call to:

```
$.ajax({
    method: 'POST',
    url: 'http://localhost:3000/info',
    contentType: "application/json",
    data: JSON.stringify({name: "haochuan", wechatID: 12345}),
    success: function(response) {
        $('#content').text(response);
    }
});
``` 

Note:

- We change the request type from `GET` to `POST`
- Add one key `contentType: "application/json"`, to tell the server what format is the body data
- Add one key `data`, which will be the body data we send to the server. `{name: "haochuan", wechatID: 12345}` is a Javascript object, but we want to change that to JSON cause we already set the format to JSON. `JSON.stringify()` is a native function to transform Javascript object into JSON.

Now put the code together, see what will happen.

---

### Project walkthrouhg


I think that's all you need to finish the project, except how to setup a mongodb on you localhost, and how to get/update/delete data from the database, but there is a lot stuff on the Internet for you to explore.

Finally I will briefly talk something about the logic and the stucture of the project:

### You are runnnig a mongodb on your localhost

The schema of the database would be:

```
{
    id" xxx
    name: xxx,
    wechatID: xxx,
    birthday: xxx
}
```

### You have a node server running on your localhost. In the server you have to connect to the mongodb, checkout [mongoose](http://mongoosejs.com/) instead of the mongodb driver. And in the server there will be APIs like the following:

##### `GET` /records

get all the records from the database, the URL will be `http://localhost:3000/records`

Response will be:

```
[
    {
        id" 1
        name: xxx,
        wechatID: xxx,
        birthday: xxx
    },
    {
        id" 2
        name: xxx,
        wechatID: xxx,
        birthday: xxx
    }
    {
        id" 3
        name: xxx,
        wechatID: xxx,
        birthday: xxx
    }
]
```

#####`GET` /record/:id 

get one record based on the id

If the URL is `http://localhost:3000/record/1, you will get:

```
{
    id" 1
    name: xxx,
    wechatID: xxx,
    birthday: xxx
}
```

#####`POST` /record/:id 

Update a record based on the id, the data you want to update will be in the body via ajax

#####`DELETE` /record/:id

Delete a record based on the id, note that the request type should be `DELETE'

Every time you do a change to the database, you will need to load all contents again via "`GET` /records" to refresh the data on the page.



