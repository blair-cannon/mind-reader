**As a USER I want to**                                                                 
                    -easily walk through the steps of mind reader                                   
                    -recieve different output for the revealed mind read symbol                    
**so that I can**  
                -keep the magic alive 
                -play multiple times

**ABOUT** 
* Multiple pages for viewing
* At end can go back to the beginning
* User's mind read symbol is stored from the previous game
* Symbols rotate in which numbers they are assigned to in order for someone to get different symbols each time
* All pages have similar properties that can be inherited from a parent class

**INIT**
Create my variables for the program.

1. PAGES: 
        * white background
        * circular button in bottom right corner
        * main text
        * next / reveal rectangular button
        * helper text below rectangular button
    
2. Circular button
        * "GO" for first page
        * arrow for all other pages
        * listens for click and proceeds to next page (functionality for the first page)or back to beginning (functionality for the other pages)
        * does not refresh page when clicked, fluid update

3. Rectangular button
        * "NEXT" for pages 2-4
        * transparent for pages 1 & 6 
        * "REVEAL" for page 5
        * listens for click and proceeds to next page
        * does not refresh page when clicked, fluid update

4. Main text
        * top of page
        * grey text
        * present on all pages

5. Helper text
        * bottom of page
        * blue text
        * presnt on all pages except the first

6. Symbols 
        * Stored in an array
        * Memory of assignments of symbols and rotates number assignments
        * In groupings of 9

7. JSON file
        * array of data to inject when needed
        * Stores main text
        * Stores helper text
        * parse() / fetch() to take string text from json to create js object
       

 * create elements, set its text content (pulling data from JSON) and append it to specific pages

 **FUNCTIONALITY**

header states array:
* 0 - text1: active for page 1
* 1 - text2: active for page 2
* 2 - text3: active for page 3
* 3 - text4: active for page 4
* 4 - text5: active for page 5
* 5 - text6: active for page 6

rectangularButton states array: 
* not active
* 0 - text: "NEXT" ; function: go to next page
* 1 - text: "REVEAL" ; function: go to next page

circularButton states array: 
* 0 - text: "GO" ; function: proceed to next page
* 1 - text: arrow ; function: go back to the beginning 

* IF (on page 1)
                THEN
                        button function = go to page 2
                ELSE
                        button function = go to page 1
        

helperText states array: 
* 0 - helpertext1: not active
* 1 - helpertext2: active for page 2
* 2 - helpertext3: active for page 3
* 3 - helpertext4: active for page 4
* 4 - helpertext5: active for page 5
* 5 - helpertext6: active for page 6: pulls from symbols array ****SPECIAL



PARENT:
class Pages: (fill in using JSON data)
- header 
- rectangular button
- helper text
- circular button
- restart() --> used to go back to page 1 

CHILD INSTANCE 1: Page 1 = new Page
- header[0]
- rectangularButton: not active
- helperText[0]
- circularButton[0] 
- restart: not active


CHILD INSTANCE 2: Page 2 = new Page
- header[1]
- rectangularButton[0]
- helperText[1]
- circularButton[1]
- restart: active

CHILD INSTANCE 3: Page 3 = new Page
- header[2]
- rectangularButton[0]
- helperText[2]
- circularButton[1]
- restart: active

CHILD INSTANCE 1: Page 4 = new Page
- header[3]
- rectangularButton[0]
- helperText[3]
- circularButton[1]
- restart: active

CHILD INSTANCE 1: Page 5 = new Page
- header[4]
- rectangularButton[1]
- helperText[4]
- circularButton[1]
- restart: active

CHILD INSTANCE 1: Page 6 = new Page
- header[5]
- rectangularButton: not active
- helperText[5]
- circularButton[1]
- restart: active


helperText[5] rotateSymbols: 
- eventListener for restart:
                1. taken back to page 1 
                2. symbolsArray[0] is moved to the end of the array (array.shift: take from front and array.push: add to end)
                3. symbol that was second is now first for this round


//look into init function (can be called to restart/reset...same thing)

TODO:
-apply bootstrap:
        - scroll aspect
        - arrow for circle button
        - circle button
        - rectangle button
        - colors
        - fonts
        - iphone look 
-make sure symbols can be pulled from array into heading and into helper text
-get restart button to work
-remove event listeners