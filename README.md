# Typogrid

Typogrid is a webapp created with the intention of making font selecting and styling simpler for creators of any kind.\
`Skip the first two sections to see one of a few recommended workflows.`

## Sidebar

On the sidebar one shall find most of the availible tools.

### `Text Field`

Type or simply copy and paste a word/title/paragraph into the 'Write something!' empty field to make the testing grid repeat your text. 

### `Range Properties`

Click on one of the titles just below the text field to expand a `range property`. There you should find two numbers - the minimum value to the left, and maximum value to the right.\
Once these numbers are changed, the grid will apply the change to all current grids, spreading the difference evenly. Heres an example -
> Lets say we have `4` grids. If we set the font size `minimum value to 12` and the `maximum value to 24`, the grids would look like so -
> * First Grid - 12px
> * Second Grid - 16px
> * Third Grid - 20px
> * Fourth Grid - 24px

### `Different Grids`

Just below the `'Grids'` title, click on any of the numbers to change the amount of displays. 
> Click on `4` to have a `2 by 2` grid, on `9` to have a `3 by 3` grid and so on.

### `Font Picking and Randomization`

The grid of `'ABC'`s at the bottom of the sidebar represents the main grid. Meaning the the block at the top left represents the real block on the top right, and so on. Hover over the blocks on the sidebar to see the corresponding block light up slightly.\
Click on any of the `dropdowns` in order to change a single blocks font.\
Click on `Randomize All Fonts` at the bottom of the sidebar to shuffle all fonts. 

## Block Tools 

Hover over any of the grids blocks to see all availible tools.

### `Info`
Click on the info button to see all relevant information about the specific block. Specific `values`, `font name`, etc.

### `Keep`
Click on the `Keep` button to open the `keep menu`. Once open, click on any property to apply it to all other grid blocks. For example -
> Assuming our grid is the same as in the previous example, hovering over the second block, clicking on `Keep` and then clicking on `Font Size` would make all 4 blocks `16px`.

### `Lock Font`
Click on `Lock Font` in order to `prevent` the specific block's `font` from changing, once clicking the `Randomize All Fonts` button.

## Workflow

When building this tool, I was thinking mostly about user experience, efficiency and 'playability'. I designed this tool in a way that should be fun and useful.\
Everyone is going to use this differently, but my recommendation goes as follows -
> First thing first - type/paste your text in the sidebar and set the `Font Size` to something that is very readable easy on the eyes.\
> Assuming you dont know what font you want to work with - 
> 1. Pick a large grid size, and start randomizing fonts while clicking the `Randomize All Fonts` button.
> 2. When a font that you like shows up, lock it by hovering the specific block and clicking on `Lock Font`.
> 3. Repeat stages `1` and `2` until you have a satisfying amount of fonts you like.
> 4. Pick the font you'd like to use, hover the block, click on `Keep` and then `Font Family` or `Keep All Styles`.
>
> Now that we have our font, we move on to the next step - customizing it.
> * Go over the list of properties in the sidebar and *one by one*, play around with them.\
> `This is important!` Change one property at a time, to really isolate each property.
> * Here's a demonstration -\
> Change `Font Size` -> Pick a block you like most and `Keep` the styles -> move on to the `next property`.

## Thank you!

Thank you for checking out my project. I had a blast working on this, and hope this can be useful for someone other than myself ;)\
`Noam Shemi`.