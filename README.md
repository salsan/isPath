# isPath
isPath is a Node.js package for validate if string is a Path of Operating System

Current version support **Windows** and **Linux**

## Install

```bash
npm i isPath
```
## Usage

>### **isPath()**
>
>return true if path (absolute or relative ) is valid Linux or Windows otherwise false

>### **isPath.win32()**
>
>return true if path (absolute or relative) is valid for Windows otherwise false

>### **isPath.win32.absolute()**
>
>return true if path is valid absolute path for Windows otherwise false

>### **isPath.win32.relative()**
>
>return true if path is valid relative path for Windows otherwise false

>### **isPath.unix()**
>
>return true if path (absolute or relative) is valid for Linux otherwise false

>### **isPath.unix.absolute()**
>
>return true if path is valid absolute path for Linux otherwise false

>### **isPath.unix.relative()**
>
>return true if path is valid relative path for Linux otherwise false




# Example

```js
const isPath = require('isPath');

const path = [
    "C:\\Documents\\Newsletters\\Summer2018.pdf",
    "\\Program Files\\Custom Utilities\\StringFinder.exe",
    "2018\\January.xlsx",
    "..\\Publications\\TravelBrochure.pdf",
    "C:\\Projects\\apilibrary\\apilibrary.sln",
    "C:Projects\\apilibrary\\apilibrary.sln"
];

path.forEach(element => {
    console.log(element, isPath.absolute(element))
});

```

return a bolean value **true** or **false**

```bash
 C:\Documents\Newsletters\Summer2018.pdf true
\Program Files\Custom Utilities\StringFinder.exe true
2018\January.xlsx false
..\Publications\TravelBrochure.pdf false
C:\Projects\apilibrary\apilibrary.sln true
C:Projects\apilibrary\apilibrary.sln false
```
# License

MIT License - Copyright 2021 Salvatore Santagati (<mailto:me@salsan.dev>)
