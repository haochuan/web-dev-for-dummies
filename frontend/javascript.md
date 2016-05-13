# Add Javascript to HTML

Suppose we have HTML, CSS, Javascript file like this:

![image](../images/css1.png)

In HTML, add the following line in `<head>` or `<body>` to include the javascript file:

```
<script src="main.js"></script>
```

-----

# Javascript Basic

See [W3C Javascript Tutorial](http://www.w3schools.com/js/default.asp) for more detail.

-----

# Javascript and jQuery

* jQuery is a library written in Javascript
* jQuery has been optimized to perform many common scripting functions and it does so while using fewer lines of code
* Add jQuery to your HTML: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>`

-----

# Examples

* Counter

> button html

> html click button run javascript

> javascript get html content

```
<p>0</p>
<hr>
<button id='increase'>Increase</button>
```

```js
// Using plain Javascript
document.getElementById('increase').addEventListener('click', function(e) {
    var number = Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML = number + 1;
}, false);
```

```js
// Using jQuery
$('#increase').click(function(e) {
    var number = Number($('#number').html());
    $('#number').html(number + 1);
});
```

* Generate List

> javascript create html element

> javascript add new element to element

```
<input id="number" type="number">
<button id='generate'>Generate</button>
<button id='reset'>Reset</button>

<ul id="list"></ul>
```

```js
// plain Javascript
document.getElementById('generate').addEventListener('click', function(e) {
    var number = Number(document.getElementById('number').value);
    for (var i = 0; i < number; i++) {
        var listElement = document.createElement("li");
        var text = document.createTextNode("list " + (i + 1));
        listElement.appendChild(text);
        document.getElementById("list").appendChild(listElement);
    }
}, false);

document.getElementById('reset').addEventListener('click', function(e) {
    document.getElementById("list").innerHTML = "";
}, false);
```

```js
// jQuery
$('#generate').click(function(e) {
    var number = Number($('#number').val());
    for (var i = 0; i < number; i++) {
        var listElement = $("<li></li>").text("list " + (i + 1));
        $('#list').append(listElement);
    }
});

$('#reset').click(function(e) {
    $('#list').empty();
});
```

