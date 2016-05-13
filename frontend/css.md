# Add CSS file to HTML

Like HTML, CSS is not really a programming language. It is a style sheet language, that is, it lets you apply styles selectively to elements in HTML documents.

Suppose we have HTML, CSS, Javascript file like this:

![image](../images/css1.png)

In HTML, add the following line in `<head>` to include the css file:

```
<link href="style.css" rel="stylesheet" type="text/css">
```

---

# Syntax

![image](../images/css2.png)

---

# Selector

* Element: p, h1, table
* ID: #id
* Class: .class
* Attribute: img[src="xxx"]
* Pseudo class selector: a:hover

---

# Examples

* Font size and color

```
p {
    color: red;
    font-size: 50px;
}
```

* Height and width

```
#container  {
    height: 200px;
    width: 200px;
    background-color: gray;
}
```

* [CSS box model](http://www.w3schools.com/css/css_boxmodel.asp)


---

# CSS Frameworks

Fastest way to get fancy UI in your website.

* [Bootstrap](http://getbootstrap.com/)


