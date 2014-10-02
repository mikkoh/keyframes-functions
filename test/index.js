var sequence = require( '../' )( [

	{ time: 10, call: function() { console.log( '--->', 10 ) } },
	{ time: 0, call: function() { console.log( '--->', 0 ) } },
	{ time: 3, call: function() { console.log( '--->', 3 ) } }
] );

sequence.update( 1, 4 );
sequence.update( 0, 0 );
sequence.update( 9, 10 );