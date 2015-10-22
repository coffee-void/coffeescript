var fs = require( 'fs' );
var _ = require( 'lodash' );
var async = require( 'async' );

var Steps = require( './Steps' );



var applyActionsToText = function ( actions, text, callback ) {

  var lines = text.split( "\n" );

  _.each( actions, function ( action ) {

    var before = lines.join();

    _.each( lines, action );

    var after = lines.join();

    if ( after === before ) {

      callback( 'no change in one of actions' );

      return false;

    }

  } );

  text = lines.join( "\n" );

  callback( null, text );

};


var doStep = function ( step ) {

  _.each( step, function ( actions, file ) {

    file = './sandbox/' + file;

    async.waterfall( [

      function ( callback ) {

        fs.readFile( file, 'utf8', callback );

      },

      function ( text, callback ) {

        applyActionsToText( actions, text, callback );

      },

      function ( text, callback ) {

        fs.writeFile( file, text, 'utf8', callback )

      }

    ], function ( error ) {

      if ( error ) {

        console.log( file + ' : ' +error );

      }

    } );

  } );

};


doStep( Steps[ process.argv[ 2 ] ] );
