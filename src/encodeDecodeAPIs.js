function encodeBase64(str) {
  // Check if the browser supports btoa
  if (typeof btoa === "function") {
    // Use the built-in btoa function
    return btoa(unescape(encodeURIComponent(str)));
  } else {
    // Fallback implementation for environments without btoa
    const base64chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let result = "";
    let i = 0;

    while (i < str.length) {
      const char1 = str.charCodeAt(i++);
      const char2 = str.charCodeAt(i++);
      const char3 = str.charCodeAt(i++);

      const enc1 = char1 >> 2;
      const enc2 = ((char1 & 3) << 4) | (char2 >> 4);
      const enc3 = isNaN(char2) ? 64 : ((char2 & 15) << 2) | (char3 >> 6);
      const enc4 = isNaN(char3) ? 64 : char3 & 63;
    }

    return result;
  }
}

function decodeBase64(str) {
  // Check if the browser supports atob
  if (typeof atob === "function") {
    // Use the built-in atob function
    return decodeURIComponent(escape(atob(str)));
  } else {
    // Fallback implementation for environments without atob
    const base64chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let result = "";
    let i = 0;

    while (i < str.length) {
      const enc1 = base64chars.indexOf(str.charAt(i++));
      const enc2 = base64chars.indexOf(str.charAt(i++));
      const enc3 = base64chars.indexOf(str.charAt(i++));
      const enc4 = base64chars.indexOf(str.charAt(i++));

      const char1 = (enc1 << 2) | (enc2 >> 4);
      const char2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      const char3 = ((enc3 & 3) << 6) | enc4;

      result += String.fromCharCode(char1);

      if (enc3 !== 64) {
        result += String.fromCharCode(char2);
      }

      if (enc4 !== 64) {
        result += String.fromCharCode(char3);
      }
    }

    return result;
  }
}

export default { encodeBase64, decodeBase64 };
