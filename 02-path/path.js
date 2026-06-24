const path = require('path');

// Current file path
console.log('Filename:', __filename);

// Current directory path
console.log('Directory:', __dirname);

// basename()
console.log(
  'Basename:',
  path.basename(__filename)
);

// basename without extension
console.log(
  'Basename without ext:',
  path.basename(__filename, '.js')
);

// dirname()
console.log(
  'Dirname:',
  path.dirname(__filename)
);

// extname()
console.log(
  'Extension:',
  path.extname(__filename)
);

// parse()
console.log(
  'Parse:',
  path.parse(__filename)
);

// join()
const joinedPath = path.join(
  __dirname,
  'uploads',
  'images',
  'profile.jpg'
);

console.log(
  'Joined Path:',
  joinedPath
);

// resolve()
console.log(
  'Resolved Path:',
  path.resolve('uploads')
);

// isAbsolute()
console.log(
  'Is Absolute:',
  path.isAbsolute(__filename)
);

// normalize()
console.log(
  'Normalized:',
  path.normalize(
    'uploads///images//profile.jpg'
  )
);

// format()
const formattedPath = path.format({
  dir: 'uploads',
  base: 'image.jpg'
});

console.log(
  'Formatted Path:',
  formattedPath
);

// separator
console.log(
  'Separator:',
  path.sep
);

// delimiter
console.log(
  'Delimiter:',
  path.delimiter
);