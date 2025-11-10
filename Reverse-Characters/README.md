# Challenge 03: Reverse Characters

## Challenge Description
   `ReverseCharacters` 

## Example
| input| output |
|----------|----------|
| "Javascript" | "tpircsavaJ" |
| "style" | "elyts" |
| "abc564" | "465cba" |

## Code
```javascript
function ReverseCharacters(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}


## screenshot
![console output](console-output.png/console-output.png)
