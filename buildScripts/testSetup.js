//this fils is not transpiled so it is in commonJS and es5
//register babel to transpile before testing
require("babel-register")();

//disable webpack features that mocha doesn't understand

require.extensions[".css"]=function(){};
