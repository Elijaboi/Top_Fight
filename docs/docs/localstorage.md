## Introduction

Store small data in key-value pairs locally within the user's browser.

- Author: Built-in javascript function

!!! note "Max Size"
    5MB per app per browser.

## Usage

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[Sample code](https://github.com/rexrainbow/phaser3-rex-notes/tree/master/examples/localstorage)

### Save data

```javascript
localStorage.setItem(key, value);
```

### Read data

```javascript
var value = localStorage.getItem(key);
```

!!! note
    The keys and the values are always strings. 
    Objects, integer keys will be automatically converted to strings.

### Remove data

```javascript
localStorage.removeItem(key);
```
