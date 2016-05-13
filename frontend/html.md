# Start Here

HTML is not a programming language; it is a markup language, and is used to tell your browser how to display the webpages you visit.

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

* `<!DOCTYPE html>` provides the web browser (or other user agent) with information about the type of markup language in which the page is written, which may or may not affect the way the browser renders the content.

* `<html></html>` — the `<html>` element. This element wraps all the content on the entire page, and is sometimes known as the root element.

* The `<head>` element contains metadata—information that describes the document itself, or associates it with related resources, such as scripts and style sheets.

* `<meta charset="utf-8">` — this element sets the character set your document should use to utf-8, which includes most characters from all known human languages. Essentially it can now handle any textual content you might put on it. There is no reason not to set this, and it can help avoid some problems later on.

* `<title></title>` — this sets the title of your page, which is the title that appears in the browser tab the page is loaded in, and is used to describe the page when you bookmark/favourite it.

* `<body></body>` — the `<body>` element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.

-----

# HTML Element

* A HTML element includes `opening tag`, `content`, and `close tag`

![image](../images/html1.png)

* Some of the elements are self closed

```
    <img src="images/xxx.png">
```

* HTML element can be assigned with different attributes

![image](../images/html2.png)

-----

# Basic Elements Examples

* Heading

```
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
```

* Paragragh

```
<p>This is a paragragh</p>
```

* Link

```
<a href="http://google.com">This is a link to google.</a>
```

* List

```
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>

<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
```

* Table

```
<table>
    <tr>
        <th>Name</th>
        <th>Email</th>
    </tr>
    <tr>
        <td>John</td>
        <th>john@email.com</th>
    </tr>
    <tr>
        <td>Max</td>
        <th>max@email.com</th>
    </tr>
</table>
```

-----

# ID and Class

Two of the most important attribute, which can be selected by CSS and Javascript

```
<p id='paragragh1'>This is a paragragh</p>
<p class='paragragh'>This is a paragragh</p>
```

