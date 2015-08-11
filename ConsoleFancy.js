# The MIT License (MIT)
#
# Copyright (c) 2015 Peter Williamson
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

function ConsoleFancy( levels ) {

	var self = this;

	if( typeof levels === 'undefined' ) {
		levels = {};
	}

	// set user defined levels
	self.levels = levels;

	// return border info for specified level
	function getBorderInfo( level ) {
		if( typeof level === 'undefined' ) {
			level = 1;
		}

		if( typeof self.levels[ level ] !== 'undefined' ) {
			return self.levels[ level ];
		}

		var border = {
			edge	:'',
			padding :'',			
			top		:'',
			bottom	:'-'
		}

		switch( level ) {
			case 1 : 
				border.edge 	= '#';
				border.padding 	= ' ';
				border.top 		= border.edge;
				border.bottom 	= border.top;
			break;
			case 2 : 
				border.edge 	= '|';
				border.padding 	= ' ';
				border.top 		= '-';
				border.bottom 	= border.top;
			break;
		}

		return border;
	}

	// output a header
	this.header = function( msg, level ) {

		var msgLen = msg.length,
			skvBorder = getBorderInfo( level );
			// border needs to be length of message 
			// plus any surrounding padding/border
			arrBorder = Array( 
							msgLen + 
							( 2 * skvBorder.edge.length ) +
							( 2 * skvBorder.padding.length ) +
							1
						);

		// output message with top/bottom border
		console.log( arrBorder.join( skvBorder.top ) );
		
		if( skvBorder.edge != '' ) {
			console.log( skvBorder.edge, msg, skvBorder.edge );	
		} else {
			console.log( msg );
		}
		
		console.log( arrBorder.join( skvBorder.bottom ) );
		
	}

}

module.exports = ConsoleFancy;
