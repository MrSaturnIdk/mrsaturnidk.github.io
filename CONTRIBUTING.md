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
<!--Good-->
<p id="cool-text">h</p>

<!--Bad-->
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
```html
<head>
    <>
```