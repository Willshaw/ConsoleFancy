# ConsoleFancy
Improve console.log output in Node scripts

Displays blocks around text to highlight sections of your output.

Heading levels can be overridden when the object is initialised.

Other styling types to come in the future

## Usage

```javascript
var ConsoleFancy= require('console-fancy'),
	consoleFancy= new ConsoleFancy();

consoleFancy.header('Getting list of containers from Rackspace');
```
