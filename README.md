# tmpleify
Browserify transform for [tmple](https://github.com/ruudud/tmple) templates.


## Install and usage
```
> npm install --save tmple
> npm install --save-dev tmpleify
> browserify -t tmpleify mytemplate.tjs > bundle.js
```

Example use of template:
```
var menuTemplate = require('./templates/menu.tjs');
menuTemplate.render({ name: 'foo' });
```


## License
MIT

