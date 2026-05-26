# Where to develop
Pull request to the [develop](https://github.com/MrSaturnIdk/MrSaturnIdk.github.io/tree/develop) branch.
# Organization
- Pretty important to use naming conventions and organization so you don't get lost in wondering what a variable is.
## Files
### Naming
- Files should be named with **kebab-case**
```
Good
example-file.txt

Bad
examplefile.txt
```
### Layout
- JavaScript goes in **src**
- CSS goes in **styles**
- Static files (like images) go in **assets**
  + Icons go in **assets/icons**
```
root/
    src/
        js files
    styles/
        css files
    assets/
        static files (images etc)
        icons/
            icons
```
## HTML
### Naming
- IDs/Classes should use **kebab-case**
- Use " instead of '
```html
<!-- Good -->
<p id="cool-text">h</p>

<!-- Bad -->
<p id='cooltext'>h</p>
```
### Layout
- Define head in this order: 
  1. Charset
  2. Viewport
  3. Icons
  4. Title/desc metadata
  5. CSS
  6. JavaScript
- Use **relative links** (not styling, root breaks local bugtesting
```html
<!-- Good -->
<img src="../assets/image.png">

<!-- Bad -->
<img src="/assets/image.png">
```
### Template
```html
<!-- template -->
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- scrollable -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover"> use this for no scroll -->
    <title>example</title>
    <meta name="description" content="example page"/>
    <link rel="apple-touch-icon" sizes="180x180" href="../assets/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/icons/favicon-32x32.png"
    <link rel="icon" type="image/png" sizes="16x16" href=../assets/icons/favicon-16x16.png">
    <link rel="manifest" href="../assets/icons/site.webmanifest">
    <link rel="stylesheet" href="../styles/base.css"> <!-- always have base.css for the background and font sizes and stuff -->
    <link rel="stylsheet" href="../example.css"> <!-- second stylesheet specfic to page -->
    <script src="../src/example.js" defer></script>
</head>
<body>
    <noscript><img src="../assets/enable-java.png" alt="enable java please" class="giant" id="no-script"></noscript> <!-- if java isn't enabled (for pages with js) -->
    <img src="../assets/loading-screen.png" alt="loading" class="giant" id="loading-screen"> <!-- loading screen is removed once js is initialized
Also note these IDs and classes are defined in base.css -->
```
