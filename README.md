# params-utils

Utils to handle params

## Getting Started

### Install

```bash
npm install params-utils --save
```

### Usage Example

- **Node.js**

```javascript
const trimParam = require('params-utils').trimParam
const result = trimParam(' ,1234, ', [' ', ',']) // 1234
```
