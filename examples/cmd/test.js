/**
 * Created by peic on 14-3-21.
 */

define(function(require, exports, module){
	var inherit = require('inherit-js');

	var A = inherit({
		name: 'A',
		proto: {
			hi: function(){
				console.log('hi');
			}
		},
		statics: {

		}
	});

	var B = inherit({
		name: 'B',
		base: A,
		proto: {

		},
		statics: {

		}
	});

	var b = new B();
	b.hi();
});