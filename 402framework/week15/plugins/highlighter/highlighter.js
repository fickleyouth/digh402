/**
 * highlighter.js - js for highlighter plugin using jquery library
 */
 
 $(document).ready(function() {
$("span#highlighter").hide();
});
 
//gets URI parameters by name
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
 
$(document).ready(function() {
//get value for highlight parameter
var highlight = getParameterByName('hi');

if(highlight){
$('div.description').append('<h6>Search query</h6><p>Current query = '+highlight+'</p>');
}

$( 'p.tei_P' ).html( function ( i, html ) {
    var regexp, replacement;

    regexp = RegExp( '(' + highlight + ')', 'gi' );
    replacement = '<span class="highlight">$1</span>';

    return html.replace( regexp, replacement );
});

});