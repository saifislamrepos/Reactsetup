const name = process.argv[2];
module.exports = {
    js : 'import Vue from \'vue\'\n'+
    'export default {\n'+
    '  name: \''+name+'App\',\n'+
    '  components: {\n'+
    '  },\n'+
    '  data() {\n'+
    '    return {\n'+
    '      message: \''+name+'example\'\n'+
    '    }\n'+
    '  },\n'+
    '  methods: {\n'+
    '  \n'+
    '  },\n'+
    '  mounted: function () {\n'+
    '    console.log(\'hello '+name+'\');\n'+
    '  }\n'+
    '}\n',
    vue:'<template>\n'+
    '  <div class="'+name+'">\n'+
    '    <p>\n'+
    '    {{message}}\n'+
    '    </p>\n'+
    '  </div>\n'+
    '</template>\n'+
    '<script src= \'../'+name+'/'+name+'.js\'></script>\n'+
    '<!-- Add "scoped" attribute to limit CSS to this component only -->\n'+
    '<style src = \'../'+name+'/'+name+'.css\'  scoped></style>\n',
    css:'.'+name+'{\n'
        +'}'
};