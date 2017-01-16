/**
 * 2 way Web worker js
 * @authors Your Name (you@example.org)
 * @date    2016-01-29 17:18:23
 * @version $Id$
 */

onmessage = function (event) {
	 if(event.data == ''){
	 	postMessage({msgType:'ERR',msg:'Invalid data entry'});
	 } else{
	 	newMessage = 'Worker received "' +event.data + '"';
	 	postMessage({msgType:'MSG',msg:newMessage});
	 }
}