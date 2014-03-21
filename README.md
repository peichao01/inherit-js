inherit plugin with no dependencies [only for morden browsers]
=====================
modified from https://raw.github.com/dfilatov/jquery-plugins/master/src/jquery.inherit/jquery.inherit.js

if you want to support IE6-8,use the difference between this repo and the repo above.

Plugin provides "class" and inheritance implementation.
It brings some syntax sugar for "class" declarations, constructors, "super" calls and static members.

Install
-----
node: `npm install inherit-js`
bower: `bower install inherit-js`

Usage
-----
```javascript
    var inherit = require('inherit');//seajs way.if you use requireJS,modify it.
    var MyClass = $.inherit({
        [name: 'ClassName'],
        [base: ParentClass],
        proto: prototypeMembers,
        [statics: staticMembers]
    });
```

Example
-------
```javascript
// base "class"
var A = inherit({
    // set the name,will generate a better constructor with name.
    // this will be friendly for debug when you see the 
    // instance's constructor is a named Class instead of an anonymous Function
    name: 'A', 
    /** @lends A.prototype */
    proto: {
        __constructor : function(property) { // constructor
            this.property = property;
        },
    
        getProperty : function() {
            return this.property + ' of instanceA';
        },
    
        getType : function() {
            return 'A';
        },
    
        getStaticProperty : function() {
            return this.__self.staticMember; // access to static
        }
    }, 
    /** @lends A */ 
    statics:{
        staticProperty : 'staticA',
    
        staticMethod : function() {
            return this.staticProperty;
        }
    }
});

// inherited "class" from A
var B = $.inherit({
    name:'B',
    base: A, 
    /** @lends B.prototype */
    proto: {
        getProperty : function() { // overriding
            return this.property + ' of instanceB';
        },
    
        getType : function() { // overriding + "super" call
            return this.__base() + 'B';
        }
    },
    /** @lends B */ 
    statics: {
        staticMethod : function() { // static overriding + "super" call
            return this.__base() + ' of staticB';
        }
    }
});

var instanceOfA = new A('property');
var instanceOfB = new B('property');

instanceOfB instanceof B;//true
instanceOfB instanceof A;//true

instanceOfB.getProperty(); // returns 'property of instanceB'
instanceOfB.getType(); // returns 'AB'
B.staticMethod(); // returns 'staticA of staticB'
```
