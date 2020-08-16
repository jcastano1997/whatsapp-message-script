const CELLPHONE_NUMBER_ID = "wms-cellphone";
const CELLPHONE_NUMBER_ERROR_ID = "wms-cellphone-error";
const MESSAGE_ID = "wms-message";
const MESSAGE_ERROR_ID = "wms-message-error";
const WHATSAPP_URL = "https://wa.me";
function wms_open_link() {
    if (document.getElementById(CELLPHONE_NUMBER_ID) != null
        && document.getElementById(CELLPHONE_NUMBER_ID).value !== ""
    ) {
        document.getElementById(CELLPHONE_NUMBER_ERROR_ID).style.display = "none";
        if (document.getElementById(MESSAGE_ID) != null
            && document.getElementById(MESSAGE_ID).value !== ""
        ) {
            document.getElementById(MESSAGE_ERROR_ID).style.display = "none";
            const cellphone = document.getElementById(CELLPHONE_NUMBER_ID).value;
            const message = document.getElementById(MESSAGE_ID).value;
            let whatsapp_link = `${WHATSAPP_URL}/057${cellphone}?text=${message}`;
            whatsapp_link = encodeURI(whatsapp_link);
            window.open(whatsapp_link);
        } else {
            document.getElementById(MESSAGE_ERROR_ID).style.display = "block";
        }
    } else {
        document.getElementById(CELLPHONE_NUMBER_ERROR_ID).style.display = "block";
    }
}