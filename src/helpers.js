/* jshint node: true */
"use strict";
function _log(type, msg){
    let style = [
        "color: #fff",
        "background-color: #444",
        "padding: 2px 4px",
        "border-radius: 2px"
    ].join(';');
    let notInSample = [
        "color: #eee",
        "background-color: orange"
    ].join(';');

    switch(type){
    case "notInSample":
            style += notInSample; break;
        default: break;
    }
    console.log(`%c${msg}`, style);
  }

  module.exports = {
      _log
  };