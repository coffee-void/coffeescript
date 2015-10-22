var _ = require( 'lodash' );


var Actions = {

  replace: function ( before, after ) {

    return function ( line, index, lines ) {

      if ( line !== before ) return true;

      lines[ index ] = line.replace( before, after );

      return false;

    };

  },

  append: function ( entry, additions ) {

    return function ( line, index, lines ) {

      if ( line !== entry ) return true;

      _.eachRight( additions, function ( addition ) {

        lines.splice( index + 1, 0, addition );

      } );

      return false;

    };

  }

};


module.exports = Actions;
