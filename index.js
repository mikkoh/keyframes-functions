function functionsequncer( frames, sorted ) {

	if( !( this instanceof functionsequncer ) )
		return new functionsequncer( frames, sorted );

	if( !sorted ) {

		frames.sort( function( frameA, frameB ) {

			return frameA.time - frameB.time;
		});
	}

	this.frames = frames;
}

functionsequncer.prototype = {

	update: function( prevTime, curTime ) {

		var frames = this.frames,
			f, time;

		for( var i = 0, len = frames.length; i < len; i++ ) {

			f = frames[ i ];
			time = f.time;

			if( time >= prevTime && time <= curTime )
				f.call.apply( undefined, f.arguments );
		}
	}
};

module.exports = functionsequncer;