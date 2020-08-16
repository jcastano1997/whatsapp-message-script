# Whatsapp Message Script
Send personalized messages to any number

## Basic Usage
You can use the generated JS file in ```dist/js/whatsapp-message-script.js``` copy in your project and use the next example...
```html
<!-- import the whatsapp-message-script.js file -->
<script src="whatsapp-message-script.js"></script>
<!-- need the cellphone number -->
<label for="wms-cellphone">MESSAGE_CELLPHONE</label>
<input type="number" id="wms-cellphone">
<p id="wms-cellphone-error" style="display: none">ERROR_MESSAGE_CELLPHONE</p>
<!-- need the message to send -->
<label for="wms-message">MESSAGE_TO_SEND</label>
<textarea name="wms-message" id="wms-message"></textarea>
<p id="wms-message-error" style="display: none">ERROR_MESSAGE_TO_SEND</p>
<!-- and the button to open the tab -->
<button onclick="wms_open_link()">SEND</button>
```

## Test this code
####First to all you need
* install git [(recommend here)](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* install nodejs and npm cli [(recommend here)](https://www.npmjs.com/get-npm).

####Next
* Clone the repository by opening the CMD and run the command ```git clone https://github.com/jcastano1997/whatsapp-message-script.git```
* Go to the folder project with the command ```cd whatsapp-message-script``` and in the source project folder run the command ```npm install``` to install the node modules.
* Then run the command ```gulp css js``` for generate the compiled files (if you modify the script this command is useful).
* Finally run the command ```gulp``` to run the browser sync server.