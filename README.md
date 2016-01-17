# tmplify
Browserify transform for [tmpl](https://github.com/ruudud/tmpl) templates.


## Install and usage
```
> npm install --save tmpl
> npm install --save-dev tmplify
> browserify -t tmplify mytemplate.tjs > bundle.js
```

Example use of template:
```
var menuTemplate = require('./templates/menu.tjs');
menuTemplate.render({ name: 'foo' });
```


## License
MIT

