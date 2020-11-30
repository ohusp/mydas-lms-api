(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-chat-elements/dist/main.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/react-chat-elements/dist/main.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rce-container-clist {\n    display: block;\n    overflow: auto;\n}\n.rce-container-mbox {\n    flex-direction: column;\n    display: block;\n    overflow: hidden;\n    min-width: 200px;\n}\n\n.rce-mbox-forward {\n    width: 30px;\n    height: 30px;\n    border-radius: 20px;\n    background: #fff;\n    position: absolute;\n    /*display: none;*/\n    flex-direction: row;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 0 5px 0 rgba(164, 164, 164, 1);\n    cursor: pointer;\n    transition: all 0.3s ease;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.rce-mbox-forward-left {\n    display: flex;\n    opacity: 0;\n    visibility: hidden;\n    left: -50px;\n}\n\n.rce-mbox-forward-right {\n    display: flex;\n    opacity: 0;\n    visibility: hidden;\n    right: -50px;\n}\n\n.rce-mbox-reply-btn-left {\n    display: flex;\n    opacity: 0;\n    visibility: hidden;\n    left: -85px;\n}\n\n.rce-mbox-reply-btn-right {\n    display: flex;\n    opacity: 0;\n    visibility: hidden;\n    right: -85px;\n}\n\n.rce-container-mbox:hover .rce-mbox-forward-left {\n    opacity: 1;\n    visibility: visible;\n}\n\n.rce-container-mbox:hover .rce-mbox-forward-right {\n    opacity: 1;\n    visibility: visible;\n}\n\n.rce-container-mbox:hover .rce-mbox-reply-btn-left {\n    opacity: 1;\n    visibility: visible;\n}\n\n.rce-container-mbox:hover .rce-mbox-reply-btn-right {\n    opacity: 1;\n    visibility: visible;\n}\n\n.rce-mbox {\n    position: relative;\n    background: white;\n    border-radius: 5px;\n    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .2);\n    border-top-left-radius: 0px;\n    margin-left: 20px;\n    margin-right: 5px;\n    margin-top: 3px;\n    flex-direction: column;\n    margin-bottom: 3px;\n    padding: 6px 9px 8px 9px;\n    float: left;\n    min-width: 140px;\n}\n\n.rce-mbox.message-focus {\n    animation-iteration-count: 2;\n    -webkit-animation-iteration-count: 2;\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: message-box-default-focus;\n            animation-name: message-box-default-focus;\n    animation-duration: 1s;\n}\n\n@-webkit-keyframes message-box-default-focus {\n    from {background-color: #fff;}\n    to {background-color: #dfdfdf;}\n}\n\n.rce-mbox-body {\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.rce-mbox.rce-mbox-right {\n    float: right;\n    margin-left: 5px;\n    margin-right: 20px;\n    border-top-right-radius: 0px;\n    border-top-left-radius: 5px;\n}\n\n.rce-mbox.rce-mbox-right.message-focus {\n    animation-iteration-count: 2;\n    -webkit-animation-iteration-count: 2;\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: message-box-right-focus;\n            animation-name: message-box-right-focus;\n    animation-duration: 1s;\n}\n\n@-webkit-keyframes message-box-right-focus {\n    from {background-color: #d4f1fb;}\n    to {background-color: #b8dae6;}\n}\n\n.rce-mbox-text {\n    font-size: 13.6px;\n    word-break: break-word;\n}\n\n.rce-mbox-text:after {\n    content: \"\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\"\n}\n\n.rce-mbox-time {\n    text-align: right;\n    color: rgba(0, 0, 0, 0.45);\n    font-size: 12px;\n    position: absolute;\n    right: -4px;\n    bottom: -5px;\n}\n\n.rce-mbox-time.non-copiable:before {\n    content: attr(data-text);\n}\n\n.rce-mbox-time-block {\n    /*position: relative;*/\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin-right: -6px;\n    margin-left: -6px;\n    padding-top: 5px;\n    padding-right: 3px;\n    padding-bottom: 2px;\n    background: linear-gradient(to top, rgba(0,0,0,0.33), transparent);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    color: #fff;\n}\n\n.rce-mbox--clear-padding {\n    padding-bottom: 3px;\n}\n\n.rce-mbox.rce-mbox--clear-notch {\n    border-radius: 5px 5px 5px 5px !important;\n}\n\n.rce-mbox-right-notch {\n    position: absolute;\n    right: -14px;\n    top: 0px;\n    width: 15px;\n    height: 15px;\n    fill: white;\n    -webkit-filter: drop-shadow( 2px 0px 1px rgba(0, 0, 0, .2));\n            filter: drop-shadow( 2px 0px 1px rgba(0, 0, 0, .2));\n}\n\n.rce-mbox-right-notch.message-focus {\n    animation-iteration-count: 2;\n    -webkit-animation-iteration-count: 2;\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: message-right-notch-focus;\n            animation-name: message-right-notch-focus;\n    animation-duration: 1s;\n}\n\n@-webkit-keyframes message-right-notch-focus {\n    from {fill: #d4f1fb;}\n    to {fill: #b8dae6;}\n}\n\n.rce-mbox-left-notch {\n    position: absolute;\n    left: -14px;\n    top: 0px;\n    width: 15px;\n    height: 15px;\n    fill: white;\n}\n\n.rce-mbox-left-notch.message-focus {\n    animation-iteration-count: 2;\n    -webkit-animation-iteration-count: 2;\n    -webkit-animation-duration: 1s;\n    -webkit-animation-name: message-left-notch-focus;\n            animation-name: message-left-notch-focus;\n    animation-duration: 1s;\n}\n\n@-webkit-keyframes message-left-notch-focus {\n    from {fill: #fff;}\n    to {fill: #dfdfdf;}\n}\n\n.rce-mbox-title {\n    margin: 0;\n    margin-bottom: 8px;\n    font-weight: 500;\n    font-size: 13px;\n    color: #4f81a1;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n\n.rce-mbox-title:hover {\n    text-decoration: underline;\n}\n\n.rce-mbox-title--clear {\n    margin-bottom: 5px;\n}\n\n.rce-mbox-status {\n    margin-left: 3px;\n    font-size: 15px;\n}\n\n.rce-mbox-title > .rce-avatar-container {\n    margin-right: 5px;\n}\n.rce-mbox-file {\n    padding-bottom: 13px;\n}\n\n.rce-mbox-file > button {\n    background: #e9e9e9;\n    display: flex;\n    border-radius: 5px;\n    margin-top: -3px;\n    margin-right: -6px;\n    margin-left: -6px;\n    align-items: center;\n    min-height: 52px;\n    max-width: 500px;\n    padding: 5px 0;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    border:none;\n}\n\n.rce-mbox-file > button > * {\n    padding: 0px 10px;\n}\n\n.rce-mbox-file--icon {\n    font-size: 30px;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.rce-mbox-file--size {\n    font-size: 10px;\n    margin-top: 3px;\n    max-width: 52px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.rce-mbox-file--text {\n    font-size: 13.6px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.rce-mbox-file--buttons {\n    font-size: 30px;\n    align-items: center;\n    display: flex;\n}\n.rce-mbox-file--buttons .rce-error-button {\n    display: inherit;\n}\n\n.rce-mbox-file--loading {\n    font-size: 15px;\n    width: 40px;\n    height: 40px;\n}\n.rce-container-smsg {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.rce-smsg {\n    position: relative;\n    background: white;\n    border-radius: 10px;\n    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);\n    display: flex;\n    flex-direction: column;\n    margin: 5px 0px;\n    padding: 6px 9px 8px 9px;\n    float: left;\n    max-width: 70%;\n    align-items: center;\n    justify-content: center;\n}\n\n.rce-smsg-text {\n    text-align: center;\n    display: inline-block;\n    font-size: 15px;\n}\n.rce-mbox-location {\n    position: relative;\n    width: 250px;\n    height: 150px;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: -3px;\n    margin-right: -6px;\n    margin-left: -6px;\n    border-radius: 5px;\n}\n\n.rce-mbox-location-img {\n    width: 100%;\n}\n\n.rce-mbox-location-text {\n    padding: 5px 0;\n    width: 250px;\n    margin-left: -6px;\n    margin-right: -6px;\n}\n.rce-mbox-spotify {\n    margin-top: -2px;\n    overflow: hidden;\n    margin-right: -6px;\n    margin-left: -6px;\n    display: flex;\n    border-radius: 5px;\n}\n.rce-mbox-reply {\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    margin-top: -3px;\n    margin-bottom: 6px;\n    margin-right: -6px;\n    margin-left: -6px;\n    border-radius: 5px;\n    background: #ececec;\n    padding: 0 5px;\n    padding-right: 0;\n    font-size: 12px;\n    cursor: pointer;\n    transition: 200ms;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.rce-mbox-reply.rce-mbox-reply-border {\n    border-left: 5px solid;\n}\n\n.rce-mbox-reply:hover {\n    opacity: 0.85;\n}\n\n.rce-mbox-reply-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 3px 0;\n    flex: 1;\n}\n\n.rce-mbox-reply-owner {\n    font-size: 13px;\n}\n\n.rce-mbox-reply-message {\n    color: #5a5a5a;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 150px;\n}\n\n.rce-mbox-reply-right {\n    width: 40px;\n    height: 40px;\n}\n\n.rce-mbox-reply-right img {\n    width: 100%;\n}\n\n.rce-mbox-reply-text {\n    padding: 5px 0;\n    width: 250px;\n    margin-left: -6px;\n    margin-right: -6px;\n}\n.rce-avatar-container {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rce-avatar-container .rce-avatar {\n    width: 100%;\n    height: 100%;\n}\n\n.rce-avatar-container.flexible .rce-avatar {\n    height: auto !important;\n    width: 100% !important;\n    border-radius: unset !important;\n    overflow: unset !important;\n}\n\n.rce-avatar-container.default{\n    width: 25px;\n    height: 25px;\n}\n\n.rce-avatar-container.rounded{\n    border-radius: 5px;\n}\n\n.rce-avatar-container.circle{\n    border-radius: 100%;\n}\n\n.rce-avatar-container.xsmall{\n    width: 30px;\n    height: 30px;\n}\n\n.rce-avatar-container.small{\n    width: 35px;\n    height: 35px;\n}\n\n.rce-avatar-container.medium{\n    width: 40px;\n    height: 40px;\n}\n\n.rce-avatar-container.large{\n    width: 45px;\n    height: 45px;\n}\n\n.rce-avatar-container.xlarge{\n    width: 55px;\n    height: 55px;\n}\n\n@-webkit-keyframes avatarLazy {\n    0% {\n        opacity:1;\n    }\n    50% {\n        opacity:.5;\n    }\n    100% {\n        opacity:1;\n    }\n}\n\n@keyframes avatarLazy {\n    0% {\n        opacity:1;\n    }\n    50% {\n        opacity:.5;\n    }\n    100% {\n        opacity:1;\n    }\n}\n\n.rce-avatar-lazy {\n    -webkit-animation: avatarLazy normal 2s infinite ease-in-out;\n            animation: avatarLazy normal 2s infinite ease-in-out;\n}\n\n.rce-avatar-container.rce-citem-avatar-encircle-status {\n    box-sizing: border-box;\n    position: relative;\n}\n\n.rce-avatar-letter {\n    margin-top: 5px;\n    font-size: 20px;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.rce-avatar-letter-background{\n    height: 35px;\n    width: 35px;\n    border-radius: 20px;\n}\n.rce-container-citem {\n    flex-direction: column;\n    display: block;\n    overflow: hidden;\n    min-width: 240px;\n}\n\n.rce-container-citem.rce-citem-status-encircle {\n    position: relative;\n}\n\n.rce-citem {\n    position: relative;\n    background: white;\n    display: flex;\n    flex-direction: row;\n    height: 72px;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    max-width: 100%;\n    overflow: hidden;\n    min-width: 240px;\n}\n\n.rce-citem:hover {\n    background: #f9f9f9;\n}\n\n.rce-citem-avatar {\n    position: relative;\n    padding: 0 15px 0 13px;\n    justify-content: center;\n    display: flex;\n    align-items: center;\n}\n\n.rce-citem-status {\n    width: 20px;\n    height: 20px;\n    bottom: 10px;\n    right: 10px;\n    position: absolute;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #ccc;\n}\n\n.rce-citem-avatar.rce-citem-status-encircle .rce-citem-status {\n    left:0;\n    right:0;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    margin: auto;\n    border-radius: 100%;\n}\n\n.rce-citem-avatar img {\n    width: 50px;\n    height: 50px;\n    border: none !important;\n    background: #ccc;\n    border-radius: 100%;\n    overflow: hidden;\n    font-size: 10px;\n    text-align: center;\n    line-height: 50px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.rce-citem-body {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n    padding-right: 15px;\n    border-bottom: 1px solid rgba(0,0,0,.05);\n    overflow: hidden;\n}\n\n.rce-citem-body--top {\n    display: flex;\n}\n\n.rce-citem-body--bottom {\n    margin-top: 4px;\n    display: flex;\n}\n\n.rce-citem-body--bottom-title, .rce-citem-body--top-title {\n    flex: 1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.rce-citem-body--top-title {\n    font-size: 16px;\n}\n\n.rce-citem-body--bottom-title {\n    color: #555;\n    font-size: 15px;\n}\n\n.rce-citem-body--top-time {\n    font-size: 12px;\n    color: rgba(0,0,0,0.4)\n}\n\n.rce-citem-body--bottom-status {\n    margin-left: 3px;\n}\n\n.rce-citem-body--bottom-status span {\n    width: 18px;\n    height: 18px;\n    font-size: 12px;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    border-radius: 100%;\n    background: red;\n}\n.rce-mbox-photo {\n    margin-top: -3px;\n    margin-right: -6px;\n    margin-left: -6px;\n}\n\n.rce-mbox-photo .rce-mbox-text {\n    padding: 5px 0px;\n    max-width: 300px;\n    margin: auto;\n}\n\n.rce-mbox-photo--img {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    justify-content: center;\n    border-radius: 5px;\n    max-height: 300px;\n}\n\n.rce-mbox-photo--img__block {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    border-radius: 5px;\n    display: flex;\n}\n\n.rce-mbox-photo--img img {\n    height: 100%;\n    min-height: 100px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.rce-mbox-photo--img__block-item {\n    margin: auto;\n    cursor: pointer;\n    width: 100px;\n    height: 100px;\n}\n\n.rce-mbox-photo--download {\n    color: #efe;\n    display: flex;\n    justify-content: center;\n    background: none;\n    border: none;\n    font-size: 3.2em;\n    outline: none;\n    border: 1px solid #eee;\n    border-radius: 100%;\n    height: 100px;\n    width: 100px;\n}\n\n.rce-mbox-photo--download:hover {\n    opacity: .7;\n}\n\n.rce-mbox-photo--download:active {\n    opacity: .3;\n}\n\n.rce-mbox-photo--error {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: none;\n    font-size: 70px;\n    color: #eaeaea;\n}\n.rce-container-mlist {\n    position: relative;\n    display: flex;\n}\n\n.rce-mlist {\n    display: block;\n    overflow: auto;\n    position: relative;\n    flex: 1;\n}\n\n.rce-mlist-down-button {\n    position: absolute;\n    right: 10px;\n    bottom: 15px;\n    width: 40px;\n    height: 40px;\n    background: #fff;\n    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.05), 0 2px 5px 0 rgba(0,0,0,0.1);\n    border-radius: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #333;\n    cursor: pointer;\n    transition: 200ms;\n}\n\n.rce-mlist-down-button:hover {\n    opacity: 0.7;\n}\n\n.rce-mlist-down-button--badge {\n    position: absolute;\n    right: -5px;\n    top: -5px;\n    background: red;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    font-size: 12px;\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-weight: 700;\n}\n.rce-container-input {\n    display: flex;\n    min-width: 100%;\n    box-sizing: border-box;\n    flex-direction: row;\n    background: #fff;\n    align-items: center;\n}\n\n.rce-input {\n    flex: 1;\n    height: 40px;\n    padding: 0 5px;\n    border: none;\n    border-radius: 5px;\n    color: #333;\n    font-size: 14px;\n    box-sizing: border-box;\n    outline: none;\n}\n\n.rce-input-textarea {\n    height: 37px;\n    padding: 10px 5px;\n    resize: none;\n}\n\n.rce-input-buttons {\n    display: flex;\n    flex-direction: row;\n    margin: 5px;\n}\n\n.rce-input-buttons > * {\n    display: flex;\n    flex-direction: row;\n}\n\n.rce-input-buttons .rce-button:nth-child(even) {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.rce-input-buttons .rce-button:last-child {\n    margin-right: 0;\n}\n\n.rce-left-padding {\n    padding-left: 10px;\n    padding-right: 0px !important;\n}\n\n.rce-right-padding {\n    padding-right: 10px;\n    padding-left: 0px !important;\n}\n\n.rce-input::-moz-placeholder {\n    color: #afafaf;\n}\n\n.rce-input:-ms-input-placeholder {\n    color: #afafaf;\n}\n\n.rce-input::-ms-input-placeholder {\n    color: #afafaf;\n}\n\n.rce-input::placeholder {\n    color: #afafaf;\n}\n.rce-button {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    border-radius: 5px;\n    cursor: pointer;\n    padding: 8px;\n    text-align: center;\n    box-sizing: border-box;\n    background: #3979aa;\n    color: white;\n    transition: all 0.15s ease;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border: none;\n    outline: none;\n    border: none;\n    position: relative;\n}\n\n.rce-button-icon--container {\n    display: flex;\n    align-items: center;\n}\n\n.rce-button:hover {\n    opacity: 0.8;\n}\n\n.rce-button:active {\n    opacity: 0.6;\n}\n\n.rce-button.outline {\n    background: rgba(0, 0, 0, 0) !important;\n    border: 1px solid #3979aa;\n    color: #3979aa;\n}\n\n.rce-button.outline:hover {\n    opacity: 0.6;\n}\n\n.rce-button.outline:active {\n    opacity: 0.3;\n}\n\n.rce-button.transparent {\n    background: rgba(0, 0, 0, 0) !important;\n}\n\n.rce-button.transparent:hover {\n    opacity: 0.6;\n}\n\n.rce-button.transparent:active {\n    opacity: 0.3;\n}\n\n.rce-button-icon {\n    position: relative;\n    font-size: 18px;\n    display: flex;\n    padding: 0 3px;\n}\n\n.rce-button-badge{\n    border-radius: 4px;\n    padding: 4px;\n    background: #f64b34;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    right: -7px;\n    top:-7px;\n    font-size: 10px;\n}\n\n.rce-button.circle {\n    min-width: 35px;\n    min-height: 35px;\n    border: 1px solid #3979aa;\n    border-radius: 100%;\n}\n.rce-navbar {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 10px;\n}\n\n.rce-navbar.light {\n    background: #f4f4f4;\n}\n\n.rce-navbar.dark {\n    background: #2f414c;\n}\n\n.rce-navbar-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.rce-navbar-item > * {\n    display: flex;\n    flex-direction: row;\n}\n\n.rce-navbar-item > * > * {\n    margin-left: 5px;\n}.rce-dropdown-container {\n    position: relative;\n}\n.rce-dropdown {\n    min-width: 100%;\n    box-sizing: border-box;\n    padding: 8px 15px;\n    background: #fff;\n    border-radius: 5px;\n    display: none;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    transform: scale(0);\n    position: absolute;\n    box-shadow: 0px 0px 5px 0px rgba(163, 163, 163, 1);\n    transform-origin: left top;\n    z-index: 99999;\n}\n\n.rce-dropdown-title {\n    font-size: 14px;\n    color: '#000';\n    font-weight: 500;\n}\n\n.rce-dropdown.dropdown-show{\n    -webkit-animation: dropdown-scaling 0.2s ease forwards;\n            animation: dropdown-scaling 0.2s ease forwards;\n    display: flex;\n}\n\n@-webkit-keyframes dropdown-scaling {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 0.5;\n        transform: scale(1.1);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n\n@keyframes dropdown-scaling {\n    0% {\n        opacity: 0;\n    }\n    50% {\n        opacity: 0.5;\n        transform: scale(1.1);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n\n.rce-dropdown.dropdown-hide{\n    -webkit-animation: dropdown-reverse-scaling 0.2s ease forwards;\n            animation: dropdown-reverse-scaling 0.2s ease forwards;\n    display: flex;\n}\n\n@-webkit-keyframes dropdown-reverse-scaling {\n    0% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    50% {\n        opacity: 0.5;\n        transform: scale(1.1);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(0);\n    }\n}\n\n@keyframes dropdown-reverse-scaling {\n    0% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    50% {\n        opacity: 0.5;\n        transform: scale(1.1);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(0);\n    }\n}\n\n.rce-dropdown-open__nortwest {\n    transform-origin: left top;\n    left: 0;\n    top: 100%;\n    margin-top: 5px\n}\n\n.rce-dropdown-open__norteast {\n    transform-origin: right top;\n    right: 0;\n    top: 100%;\n    margin-top: 5px\n}\n\n.rce-dropdown-open__southwest {\n    transform-origin: left bottom;\n    left: 0;\n    bottom: 100%;\n    margin-bottom: 5px\n}\n\n.rce-dropdown-open__southeast {\n    transform-origin: right bottom;\n    right: 0;\n    bottom: 100%;\n    margin-bottom: 5px\n}\n\n.rce-dropdown ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.rce-dropdown ul li {\n    white-space: nowrap;\n    color: #767676;\n    padding: 8px;\n    cursor: pointer;\n    font-size: 16px;\n    width: 100%;\n    border-bottom: 1px solid #e9e9e9;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.rce-dropdown ul li:last-child {\n    border: none;\n}\n\n.rce-dropdown ul li:hover a {\n    color: #3a6d8c;\n}\n\n.rce-dropdown.fade {\n    opacity: 0;\n    transform: scale(1);\n    -webkit-animation: dropdown-fade 0.5s ease forwards;\n            animation: dropdown-fade 0.5s ease forwards;\n}\n\n@-webkit-keyframes dropdown-fade {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes dropdown-fade {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n.rce-sbar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    box-sizing: border-box;\n    min-height: 100%;\n}\n\n.rce-sbar.light {\n    background: #f4f4f4;\n}\n\n.rce-sbar.dark {\n    background: #2f414c;\n}\n\n.rce-sbar-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    max-width: 100%;\n}\n\n.rce-sbar-item > * {\n    display: flex;\n    flex-direction: column;\n}\n\n.rce-sbar-item__center {\n    margin: 15px 0;\n}.rce-popup-wrapper {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    background: rgba(255, 255, 255, 0.7);\n    z-index: 9999999999;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n\n.rce-popup {\n    background: #fff;\n    border-radius: 5px;\n    padding: 0 10px 0 10px;\n    width: 400px;\n    min-height: 100px;\n    box-shadow: 0px 0px 25px -2px rgba(79, 79, 79, 1);\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n    -webkit-animation: popup-scaling 0.4s ease forwards;\n            animation: popup-scaling 0.4s ease forwards;\n    box-sizing: border-box;\n}\n\n@-webkit-keyframes popup-scaling {\n    0% {\n        transform: scale(0);\n        opacity: 0;\n    }\n    50% {\n        transform: scale(1.2);\n        opacity: 0.5;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes popup-scaling {\n    0% {\n        transform: scale(0);\n        opacity: 0;\n    }\n    50% {\n        transform: scale(1.2);\n        opacity: 0.5;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n.rce-popup-header {\n    padding: 18px 8px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n}\n\n.rce-popup-content {\n    padding: 8px;\n    font-size: 14px;\n    box-sizing: border-box;\n}\n\n.rce-popup-content * {\n    margin: 0\n}\n\n.rce-popup-footer {\n    padding: 18px 8px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    box-sizing: border-box;\n}\n\n.rce-popup-footer>* {\n    margin-left: 5px;\n}.rce-container-mtitem {\n    flex-direction: column;\n    display: block;\n    overflow: hidden;\n    min-width: 240px;\n}\n\n.rce-mtitem {\n    position: relative;\n    background: white;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    max-width: 100%;\n    overflow: hidden;\n    min-width: 240px;\n    border-bottom: 1px solid rgba(0,0,0,.05);\n}\n\n.rce-mtitem:hover {\n    background: #fbfbfb;\n}\n\n\n.rce-mtitem-subject {\n    padding: 0 10px;\n    margin-top: 5px;\n    font-size: 15px;\n    overflow: hidden;\n    color: #333;\n    max-height: 35px;\n    text-overflow: ellipsis;\n}\n\n.rce-mtitem-body {\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    display: flex;\n    justify-content: center;\n    padding: 0 10px;\n    overflow: hidden;\n    align-items: center;\n}\n\n.rce-mtitem-body--avatars {\n    display: flex;\n    flex: 1;\n    overflow: hidden;\n    opacity: 0.7;\n}\n\n.rce-mtitem-body--functions {\n    width: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.rce-mtitem-footer {\n    padding: 0 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 5px;\n}\n\n.rce-mtitem-body--avatars .rce-avatar-container {\n    margin-left: -15px;\n    border: 2px solid #fff;\n}\n\n.rce-mtitem-body--avatars .rce-avatar-container:first-child {\n    margin: 0;\n}\n\n.rce-mtitem-letter {\n    color: #fff;\n    background: #e48989;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.rce-mtitem-button {\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    background: #5ba7c5;\n    border-radius: 100%;\n    padding: 3px;\n    transition: 300ms;\n}\n\n.rce-mtitem-share {\n    font-size: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #5ba7c5;\n    margin: -10px 0;\n    transition: 300ms;\n}\n\n\n.rce-mtitem-button:hover,\n.rce-mtitem-share:hover {\n    opacity: 0.8;\n    cursor: pointer;\n}\n\n.rce-mtitem-date {\n    color: #9f9f9f;\n    font-size: 13px;\n}\n.rce-container-mtlist {\n    display: block;\n    overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/progressbar.js/src/circle.js":
/*!***************************************************!*\
  !*** ./node_modules/progressbar.js/src/circle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Circle shaped progress bar

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Circle = function Circle(container, options) {
    // Use two arcs to form a circle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m 0,-{radius}' +
        ' a {radius},{radius} 0 1 1 0,{2radius}' +
        ' a {radius},{radius} 0 1 1 0,-{2radius}';

    this.containerAspectRatio = 1;

    Shape.apply(this, arguments);
};

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Circle.prototype._pathString = function _pathString(opts) {
    var widthOfWider = opts.strokeWidth;
    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
        widthOfWider = opts.trailWidth;
    }

    var r = 50 - widthOfWider / 2;

    return utils.render(this._pathTemplate, {
        radius: r,
        '2radius': r * 2
    });
};

Circle.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Circle;


/***/ }),

/***/ "./node_modules/progressbar.js/src/line.js":
/*!*************************************************!*\
  !*** ./node_modules/progressbar.js/src/line.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Line shaped progress bar

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Line = function Line(container, options) {
    this._pathTemplate = 'M 0,{center} L 100,{center}';
    Shape.apply(this, arguments);
};

Line.prototype = new Shape();
Line.prototype.constructor = Line;

Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 ' + opts.strokeWidth);
    svg.setAttribute('preserveAspectRatio', 'none');
};

Line.prototype._pathString = function _pathString(opts) {
    return utils.render(this._pathTemplate, {
        center: opts.strokeWidth / 2
    });
};

Line.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};

module.exports = Line;


/***/ }),

/***/ "./node_modules/progressbar.js/src/main.js":
/*!*************************************************!*\
  !*** ./node_modules/progressbar.js/src/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    // Higher level API, different shaped progress bars
    Line: __webpack_require__(/*! ./line */ "./node_modules/progressbar.js/src/line.js"),
    Circle: __webpack_require__(/*! ./circle */ "./node_modules/progressbar.js/src/circle.js"),
    SemiCircle: __webpack_require__(/*! ./semicircle */ "./node_modules/progressbar.js/src/semicircle.js"),
    Square: __webpack_require__(/*! ./square */ "./node_modules/progressbar.js/src/square.js"),

    // Lower level API to use any SVG path
    Path: __webpack_require__(/*! ./path */ "./node_modules/progressbar.js/src/path.js"),

    // Base-class for creating new custom shapes
    // to be in line with the API of built-in shapes
    // Undocumented.
    Shape: __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js"),

    // Internal utils, undocumented.
    utils: __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js")
};


/***/ }),

/***/ "./node_modules/progressbar.js/src/path.js":
/*!*************************************************!*\
  !*** ./node_modules/progressbar.js/src/path.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Lower level API to animate any kind of svg path

var shifty = __webpack_require__(/*! shifty */ "./node_modules/shifty/dist/shifty.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Tweenable = shifty.Tweenable;

var EASING_ALIASES = {
    easeIn: 'easeInCubic',
    easeOut: 'easeOutCubic',
    easeInOut: 'easeInOutCubic'
};

var Path = function Path(path, opts) {
    // Throw a better error if not initialized with `new` keyword
    if (!(this instanceof Path)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Default parameters for animation
    opts = utils.extend({
        delay: 0,
        duration: 800,
        easing: 'linear',
        from: {},
        to: {},
        step: function() {}
    }, opts);

    var element;
    if (utils.isString(path)) {
        element = document.querySelector(path);
    } else {
        element = path;
    }

    // Reveal .path as public attribute
    this.path = element;
    this._opts = opts;
    this._tweenable = null;

    // Set up the starting positions
    var length = this.path.getTotalLength();
    this.path.style.strokeDasharray = length + ' ' + length;
    this.set(0);
};

Path.prototype.value = function value() {
    var offset = this._getComputedDashOffset();
    var length = this.path.getTotalLength();

    var progress = 1 - offset / length;
    // Round number to prevent returning very small number like 1e-30, which
    // is practically 0
    return parseFloat(progress.toFixed(6), 10);
};

Path.prototype.set = function set(progress) {
    this.stop();

    this.path.style.strokeDashoffset = this._progressToOffset(progress);

    var step = this._opts.step;
    if (utils.isFunction(step)) {
        var easing = this._easing(this._opts.easing);
        var values = this._calculateTo(progress, easing);
        var reference = this._opts.shape || this;
        step(values, reference, this._opts.attachment);
    }
};

Path.prototype.stop = function stop() {
    this._stopTween();
    this.path.style.strokeDashoffset = this._getComputedDashOffset();
};

// Method introduced here:
// http://jakearchibald.com/2013/animated-line-drawing-svg/
Path.prototype.animate = function animate(progress, opts, cb) {
    opts = opts || {};

    if (utils.isFunction(opts)) {
        cb = opts;
        opts = {};
    }

    var passedOpts = utils.extend({}, opts);

    // Copy default opts to new object so defaults are not modified
    var defaultOpts = utils.extend({}, this._opts);
    opts = utils.extend(defaultOpts, opts);

    var shiftyEasing = this._easing(opts.easing);
    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

    this.stop();

    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this.path.getBoundingClientRect();

    var offset = this._getComputedDashOffset();
    var newOffset = this._progressToOffset(progress);

    var self = this;
    this._tweenable = new Tweenable();
    this._tweenable.tween({
        from: utils.extend({ offset: offset }, values.from),
        to: utils.extend({ offset: newOffset }, values.to),
        duration: opts.duration,
        delay: opts.delay,
        easing: shiftyEasing,
        step: function(state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
        }
    }).then(function(state) {
        if (utils.isFunction(cb)) {
            cb();
        }
    });
};

Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
    var computedStyle = window.getComputedStyle(this.path, null);
    return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
};

Path.prototype._progressToOffset = function _progressToOffset(progress) {
    var length = this.path.getTotalLength();
    return length - progress * length;
};

// Resolves from and to values for animation.
Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
    if (opts.from && opts.to) {
        return {
            from: opts.from,
            to: opts.to
        };
    }

    return {
        from: this._calculateFrom(easing),
        to: this._calculateTo(progress, easing)
    };
};

// Calculate `from` values from options passed at initialization
Path.prototype._calculateFrom = function _calculateFrom(easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
};

// Calculate `to` values from options passed at initialization
Path.prototype._calculateTo = function _calculateTo(progress, easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
};

Path.prototype._stopTween = function _stopTween() {
    if (this._tweenable !== null) {
        this._tweenable.stop();
        this._tweenable = null;
    }
};

Path.prototype._easing = function _easing(easing) {
    if (EASING_ALIASES.hasOwnProperty(easing)) {
        return EASING_ALIASES[easing];
    }

    return easing;
};

module.exports = Path;


/***/ }),

/***/ "./node_modules/progressbar.js/src/semicircle.js":
/*!*******************************************************!*\
  !*** ./node_modules/progressbar.js/src/semicircle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Semi-SemiCircle shaped progress bar

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var Circle = __webpack_require__(/*! ./circle */ "./node_modules/progressbar.js/src/circle.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var SemiCircle = function SemiCircle(container, options) {
    // Use one arc to form a SemiCircle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate =
        'M 50,50 m -{radius},0' +
        ' a {radius},{radius} 0 1 1 {2radius},0';

    this.containerAspectRatio = 2;

    Shape.apply(this, arguments);
};

SemiCircle.prototype = new Shape();
SemiCircle.prototype.constructor = SemiCircle;

SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 50');
};

SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(
    opts,
    container,
    textContainer
) {
    if (opts.text.style) {
        // Reset top style
        textContainer.style.top = 'auto';
        textContainer.style.bottom = '0';

        if (opts.text.alignToBottom) {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
        } else {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
        }
    }
};

// Share functionality with Circle, just have different path
SemiCircle.prototype._pathString = Circle.prototype._pathString;
SemiCircle.prototype._trailString = Circle.prototype._trailString;

module.exports = SemiCircle;


/***/ }),

/***/ "./node_modules/progressbar.js/src/shape.js":
/*!**************************************************!*\
  !*** ./node_modules/progressbar.js/src/shape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Base object for different progress bar shapes

var Path = __webpack_require__(/*! ./path */ "./node_modules/progressbar.js/src/path.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var DESTROYED_ERROR = 'Object is destroyed';

var Shape = function Shape(container, opts) {
    // Throw a better error if progress bars are not initialized with `new`
    // keyword
    if (!(this instanceof Shape)) {
        throw new Error('Constructor was called without new keyword');
    }

    // Prevent calling constructor without parameters so inheritance
    // works correctly. To understand, this is how Shape is inherited:
    //
    //   Line.prototype = new Shape();
    //
    // We just want to set the prototype for Line.
    if (arguments.length === 0) {
        return;
    }

    // Default parameters for progress bar creation
    this._opts = utils.extend({
        color: '#555',
        strokeWidth: 1.0,
        trailColor: null,
        trailWidth: null,
        fill: null,
        text: {
            style: {
                color: null,
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: 'progressbar-text'
        },
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        warnings: false
    }, opts, true);  // Use recursive extend

    // If user specifies e.g. svgStyle or text style, the whole object
    // should replace the defaults to make working with styles easier
    if (utils.isObject(opts) && opts.svgStyle !== undefined) {
        this._opts.svgStyle = opts.svgStyle;
    }
    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
        this._opts.text.style = opts.text.style;
    }

    var svgView = this._createSvgView(this._opts);

    var element;
    if (utils.isString(container)) {
        element = document.querySelector(container);
    } else {
        element = container;
    }

    if (!element) {
        throw new Error('Container does not exist: ' + container);
    }

    this._container = element;
    this._container.appendChild(svgView.svg);
    if (this._opts.warnings) {
        this._warnContainerAspectRatio(this._container);
    }

    if (this._opts.svgStyle) {
        utils.setStyles(svgView.svg, this._opts.svgStyle);
    }

    // Expose public attributes before Path initialization
    this.svg = svgView.svg;
    this.path = svgView.path;
    this.trail = svgView.trail;
    this.text = null;

    var newOpts = utils.extend({
        attachment: undefined,
        shape: this
    }, this._opts);
    this._progressPath = new Path(svgView.path, newOpts);

    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
        this.setText(this._opts.text.value);
    }
};

Shape.prototype.animate = function animate(progress, opts, cb) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.animate(progress, opts, cb);
};

Shape.prototype.stop = function stop() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    // Don't crash if stop is called inside step function
    if (this._progressPath === undefined) {
        return;
    }

    this._progressPath.stop();
};

Shape.prototype.pause = function pause() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return;
    }

    if (!this._progressPath._tweenable) {
        // It seems that we can't pause this
        return;
    }

    this._progressPath._tweenable.pause();
};

Shape.prototype.resume = function resume() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return;
    }

    if (!this._progressPath._tweenable) {
        // It seems that we can't resume this
        return;
    }

    this._progressPath._tweenable.resume();
};

Shape.prototype.destroy = function destroy() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this.stop();
    this.svg.parentNode.removeChild(this.svg);
    this.svg = null;
    this.path = null;
    this.trail = null;
    this._progressPath = null;

    if (this.text !== null) {
        this.text.parentNode.removeChild(this.text);
        this.text = null;
    }
};

Shape.prototype.set = function set(progress) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    this._progressPath.set(progress);
};

Shape.prototype.value = function value() {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this._progressPath === undefined) {
        return 0;
    }

    return this._progressPath.value();
};

Shape.prototype.setText = function setText(newText) {
    if (this._progressPath === null) {
        throw new Error(DESTROYED_ERROR);
    }

    if (this.text === null) {
        // Create new text node
        this.text = this._createTextContainer(this._opts, this._container);
        this._container.appendChild(this.text);
    }

    // Remove previous text and add new
    if (utils.isObject(newText)) {
        utils.removeChildren(this.text);
        this.text.appendChild(newText);
    } else {
        this.text.innerHTML = newText;
    }
};

Shape.prototype._createSvgView = function _createSvgView(opts) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._initializeSvg(svg, opts);

    var trailPath = null;
    // Each option listed in the if condition are 'triggers' for creating
    // the trail path
    if (opts.trailColor || opts.trailWidth) {
        trailPath = this._createTrail(opts);
        svg.appendChild(trailPath);
    }

    var path = this._createPath(opts);
    svg.appendChild(path);

    return {
        svg: svg,
        path: path,
        trail: trailPath
    };
};

Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 100');
};

Shape.prototype._createPath = function _createPath(opts) {
    var pathString = this._pathString(opts);
    return this._createPathElement(pathString, opts);
};

Shape.prototype._createTrail = function _createTrail(opts) {
    // Create path string with original passed options
    var pathString = this._trailString(opts);

    // Prevent modifying original
    var newOpts = utils.extend({}, opts);

    // Defaults for parameters which modify trail path
    if (!newOpts.trailColor) {
        newOpts.trailColor = '#eee';
    }
    if (!newOpts.trailWidth) {
        newOpts.trailWidth = newOpts.strokeWidth;
    }

    newOpts.color = newOpts.trailColor;
    newOpts.strokeWidth = newOpts.trailWidth;

    // When trail path is set, fill must be set for it instead of the
    // actual path to prevent trail stroke from clipping
    newOpts.fill = null;

    return this._createPathElement(pathString, newOpts);
};

Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathString);
    path.setAttribute('stroke', opts.color);
    path.setAttribute('stroke-width', opts.strokeWidth);

    if (opts.fill) {
        path.setAttribute('fill', opts.fill);
    } else {
        path.setAttribute('fill-opacity', '0');
    }

    return path;
};

Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
    var textContainer = document.createElement('div');
    textContainer.className = opts.text.className;

    var textStyle = opts.text.style;
    if (textStyle) {
        if (opts.text.autoStyleContainer) {
            container.style.position = 'relative';
        }

        utils.setStyles(textContainer, textStyle);
        // Default text color to progress bar's color
        if (!textStyle.color) {
            textContainer.style.color = opts.color;
        }
    }

    this._initializeTextContainer(opts, container, textContainer);
    return textContainer;
};

// Give custom shapes possibility to modify text element
Shape.prototype._initializeTextContainer = function(opts, container, element) {
    // By default, no-op
    // Custom shapes should respect API options, such as text.style
};

Shape.prototype._pathString = function _pathString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._trailString = function _trailString(opts) {
    throw new Error('Override this function for each progress bar');
};

Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
    if (!this.containerAspectRatio) {
        return;
    }

    var computedStyle = window.getComputedStyle(container, null);
    var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
    var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
        console.warn(
            'Incorrect aspect ratio of container',
            '#' + container.id,
            'detected:',
            computedStyle.getPropertyValue('width') + '(width)',
            '/',
            computedStyle.getPropertyValue('height') + '(height)',
            '=',
            width / height
        );

        console.warn(
            'Aspect ratio of should be',
            this.containerAspectRatio
        );
    }
};

module.exports = Shape;


/***/ }),

/***/ "./node_modules/progressbar.js/src/square.js":
/*!***************************************************!*\
  !*** ./node_modules/progressbar.js/src/square.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Square shaped progress bar
// Note: Square is not core part of API anymore. It's left here
//       for reference. square is not included to the progressbar
//       build anymore

var Shape = __webpack_require__(/*! ./shape */ "./node_modules/progressbar.js/src/shape.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/progressbar.js/src/utils.js");

var Square = function Square(container, options) {
    this._pathTemplate =
        'M 0,{halfOfStrokeWidth}' +
        ' L {width},{halfOfStrokeWidth}' +
        ' L {width},{width}' +
        ' L {halfOfStrokeWidth},{width}' +
        ' L {halfOfStrokeWidth},{strokeWidth}';

    this._trailTemplate =
        'M {startMargin},{halfOfStrokeWidth}' +
        ' L {width},{halfOfStrokeWidth}' +
        ' L {width},{width}' +
        ' L {halfOfStrokeWidth},{width}' +
        ' L {halfOfStrokeWidth},{halfOfStrokeWidth}';

    Shape.apply(this, arguments);
};

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype._pathString = function _pathString(opts) {
    var w = 100 - opts.strokeWidth / 2;

    return utils.render(this._pathTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2
    });
};

Square.prototype._trailString = function _trailString(opts) {
    var w = 100 - opts.strokeWidth / 2;

    return utils.render(this._trailTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2,
        startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
    });
};

module.exports = Square;


/***/ }),

/***/ "./node_modules/progressbar.js/src/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/progressbar.js/src/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Utility functions

var PREFIXES = 'Webkit Moz O ms'.split(' ');
var FLOAT_COMPARISON_EPSILON = 0.001;

// Copy all attributes from source object to destination object.
// destination object is mutated.
function extend(destination, source, recursive) {
    destination = destination || {};
    source = source || {};
    recursive = recursive || false;

    for (var attrName in source) {
        if (source.hasOwnProperty(attrName)) {
            var destVal = destination[attrName];
            var sourceVal = source[attrName];
            if (recursive && isObject(destVal) && isObject(sourceVal)) {
                destination[attrName] = extend(destVal, sourceVal, recursive);
            } else {
                destination[attrName] = sourceVal;
            }
        }
    }

    return destination;
}

// Renders templates with given variables. Variables must be surrounded with
// braces without any spaces, e.g. {variable}
// All instances of variable placeholders will be replaced with given content
// Example:
// render('Hello, {message}!', {message: 'world'})
function render(template, vars) {
    var rendered = template;

    for (var key in vars) {
        if (vars.hasOwnProperty(key)) {
            var val = vars[key];
            var regExpString = '\\{' + key + '\\}';
            var regExp = new RegExp(regExpString, 'g');

            rendered = rendered.replace(regExp, val);
        }
    }

    return rendered;
}

function setStyle(element, style, value) {
    var elStyle = element.style;  // cache for performance

    for (var i = 0; i < PREFIXES.length; ++i) {
        var prefix = PREFIXES[i];
        elStyle[prefix + capitalize(style)] = value;
    }

    elStyle[style] = value;
}

function setStyles(element, styles) {
    forEachObject(styles, function(styleValue, styleName) {
        // Allow disabling some individual styles by setting them
        // to null or undefined
        if (styleValue === null || styleValue === undefined) {
            return;
        }

        // If style's value is {prefix: true, value: '50%'},
        // Set also browser prefixed styles
        if (isObject(styleValue) && styleValue.prefix === true) {
            setStyle(element, styleName, styleValue.value);
        } else {
            element.style[styleName] = styleValue;
        }
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

function isFunction(obj) {
    return typeof obj === 'function';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
// array
function isObject(obj) {
    if (isArray(obj)) {
        return false;
    }

    var type = typeof obj;
    return type === 'object' && !!obj;
}

function forEachObject(object, callback) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var val = object[key];
            callback(val, key);
        }
    }
}

function floatEquals(a, b) {
    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
}

// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
function removeChildren(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

module.exports = {
    extend: extend,
    render: render,
    setStyle: setStyle,
    setStyles: setStyles,
    capitalize: capitalize,
    isString: isString,
    isFunction: isFunction,
    isObject: isObject,
    forEachObject: forEachObject,
    floatEquals: floatEquals,
    removeChildren: removeChildren
};


/***/ }),

/***/ "./node_modules/react-chat-elements/dist/main.css":
/*!********************************************************!*\
  !*** ./node_modules/react-chat-elements/dist/main.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-chat-elements/dist/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-chat-elements/dist/main.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-chat-elements/dist/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=13)}([function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t){e.exports=__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js")},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var r="/Users/burak/github/react-chat-elements/src/Avatar/Avatar.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(52);var s=o(1),l=[],u=t.Avatar=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.requestImage=o.requestImage.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"isLoaded",value:function(e){return-1!==l.indexOf(e)}},{key:"requestImage",value:function(e){var t=this,o=this;this.loading=!0;var r=function(){l.push(e),delete o.loading,!1!==t._isMounted&&o.setState({})},n=document.createElement("img");n.src=e,n.onload=r,n.onerror=r}},{key:"stringToColour",value:function(e){for(var t=0,o=0;o<e.length;o++)t=e.charCodeAt(o)+((t<<5)-t);for(var r="#",n=0;n<3;n++){var i=t>>8*n&255;r+=("00"+(i=i%150+50).toString(16)).substr(-2)}return r}},{key:"render",value:function(){var e=this.props.src,t=!1;return this.props.lazyLoadingImage&&(t=!0,this.isLoaded(e)?t=!1:(e=this.props.lazyLoadingImage,this.loading||this.requestImage(this.props.src))),a.default.createElement("div",{className:s("rce-avatar-container",this.props.type,this.props.size,this.props.className),__source:{fileName:r,lineNumber:79}},this.props.letterItem?a.default.createElement("div",{className:"rce-avatar-letter-background",style:{backgroundColor:this.stringToColour(this.props.letterItem.id)},__source:{fileName:r,lineNumber:82}},a.default.createElement("span",{class:"rce-avatar-letter",__source:{fileName:r,lineNumber:85}},this.props.letterItem.letter)):a.default.createElement("img",{alt:this.props.alt,src:e,onError:this.props.onError,className:s("rce-avatar",{"rce-avatar-lazy":t}),__source:{fileName:r,lineNumber:90}}),this.props.sideElement)}}]),t}();u.defaultProps={type:"default",size:"default",src:"",alt:"",sideElement:null,lazyLoadingImage:void 0,onError:function(){}},t.default=u},function(e,t){e.exports=__webpack_require__(/*! timeago.js */ "./node_modules/timeago.js/esm/index.js")},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var r="/Users/burak/github/react-chat-elements/src/Button/Button.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(62);var s=o(1),l=t.Button=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){return a.default.createElement("button",{ref:this.props.buttonRef,title:this.props.title,className:s("rce-button",this.props.type,this.props.className),style:{backgroundColor:this.props.backgroundColor,color:this.props.color,borderColor:this.props.backgroundColor},disabled:this.props.disabled,onClick:this.props.onClick,__source:{fileName:r,lineNumber:9}},this.props.icon?a.default.createElement("span",{className:"rce-button-icon--container",__source:{fileName:r,lineNumber:22}},("right"===this.props.icon.float||!this.props.icon.float)&&a.default.createElement("span",{__source:{fileName:r,lineNumber:23}},this.props.text),a.default.createElement("span",{style:{float:this.props.icon.float,fontSize:this.props.icon.size||12},className:"rce-button-icon",__source:{fileName:r,lineNumber:25}},this.props.icon.component),"left"===this.props.icon.float&&a.default.createElement("span",{__source:{fileName:r,lineNumber:27}},this.props.text)):a.default.createElement("span",{__source:{fileName:r,lineNumber:29}},this.props.text))}}]),t}();l.defaultProps={text:"",disabled:!1,type:null,icon:null,backgroundColor:"#3979aa",color:"white",className:null,buttonRef:null,title:null},t.default=l},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageBox=void 0;var r="/Users/burak/github/react-chat-elements/src/MessageBox/MessageBox.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=g(i);o(35);var s=g(o(14)),l=g(o(15)),u=g(o(9)),c=g(o(17)),p=g(o(18)),f=g(o(10)),m=g(o(2)),h=g(o(19)),d=g(o(20)),b=g(o(21)),_=g(o(22)),y=g(o(23)),v=o(3),N=g(o(1));function g(e){return e&&e.__esModule?e:{default:e}}var w=t.MessageBox=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"componentWillReceiveProps",value:function(e){e.focus!==this.props.focus&&!0===e.focus&&this.refs.message&&(this.refs.message.scrollIntoView({block:"center",behavior:"smooth"}),this.props.onMessageFocused(e))}},{key:"render",value:function(){var e=(0,N.default)("rce-mbox",{"rce-mbox-right":"right"===this.props.position}),t="text"!==this.props.type&&"file"!==this.props.type&&!("location"===this.props.type&&this.props.text),o=this.props.date&&!isNaN(this.props.date)&&(this.props.dateString||(0,v.format)(this.props.date));return a.default.createElement("div",{ref:"message",className:(0,N.default)("rce-container-mbox",this.props.className),onClick:this.props.onClick,__source:{fileName:r,lineNumber:51}},this.props.renderAddCmp instanceof Function&&this.props.renderAddCmp(),"system"===this.props.type?a.default.createElement(u.default,{text:this.props.text,__source:{fileName:r,lineNumber:61}}):a.default.createElement("div",{className:(0,N.default)(e,{"rce-mbox--clear-padding":t},{"rce-mbox--clear-notch":!this.props.notch},{"message-focus":this.props.focus}),__source:{fileName:r,lineNumber:64}},a.default.createElement("div",{className:"rce-mbox-body",onContextMenu:this.props.onContextMenu,__source:{fileName:r,lineNumber:71}},!0===this.props.forwarded&&a.default.createElement("div",{className:(0,N.default)("rce-mbox-forward",{"rce-mbox-forward-right":"left"===this.props.position},{"rce-mbox-forward-left":"right"===this.props.position}),onClick:this.props.onForwardClick,__source:{fileName:r,lineNumber:76}},a.default.createElement(h.default,{__source:{fileName:r,lineNumber:83}})),!0===this.props.replyButton&&a.default.createElement("div",{className:!0!==this.props.forwarded?(0,N.default)("rce-mbox-forward",{"rce-mbox-forward-right":"left"===this.props.position},{"rce-mbox-forward-left":"right"===this.props.position}):(0,N.default)("rce-mbox-forward",{"rce-mbox-reply-btn-right":"left"===this.props.position},{"rce-mbox-reply-btn-left":"right"===this.props.position}),onClick:this.props.onReplyClick,__source:{fileName:r,lineNumber:89}},a.default.createElement(y.default,{__source:{fileName:r,lineNumber:100}})),(this.props.title||this.props.avatar)&&a.default.createElement("div",{style:this.props.titleColor&&{color:this.props.titleColor},onClick:this.props.onTitleClick,className:(0,N.default)("rce-mbox-title",{"rce-mbox-title--clear":"text"===this.props.type}),__source:{fileName:r,lineNumber:106}},this.props.avatar&&a.default.createElement(m.default,{letterItem:this.props.letterItem,src:this.props.avatar,__source:{fileName:r,lineNumber:114}}),this.props.title&&a.default.createElement("span",{__source:{fileName:r,lineNumber:120}},this.props.title)),this.props.reply&&a.default.createElement(f.default,{photoURL:this.props.reply.photoURL,title:this.props.reply.title,titleColor:this.props.reply.titleColor,message:this.props.reply.message,onClick:this.props.onReplyMessageClick,__source:{fileName:r,lineNumber:127}}),"text"===this.props.type&&a.default.createElement("div",{className:"rce-mbox-text",__source:{fileName:r,lineNumber:137}},this.props.text),"location"===this.props.type&&a.default.createElement(c.default,{onOpen:this.props.onOpen,data:this.props.data,target:this.props.target,href:this.props.href,apiKey:this.props.apiKey,src:this.props.src,zoom:this.props.zoom,markerColor:this.props.markerColor,text:this.props.text,__source:{fileName:r,lineNumber:144}}),"photo"===this.props.type&&a.default.createElement(s.default,{onOpen:this.props.onOpen,onDownload:this.props.onDownload,onLoad:this.props.onLoad,onPhotoError:this.props.onPhotoError,data:this.props.data,width:this.props.width,height:this.props.height,text:this.props.text,__source:{fileName:r,lineNumber:158}}),"file"===this.props.type&&a.default.createElement(l.default,{onOpen:this.props.onOpen,onDownload:this.props.onDownload,data:this.props.data,text:this.props.text,__source:{fileName:r,lineNumber:171}}),"spotify"===this.props.type&&a.default.createElement(p.default,{width:this.props.width,height:this.props.height,theme:this.props.theme,view:this.props.view,data:this.props.data,uri:this.props.uri||this.props.text,__source:{fileName:r,lineNumber:180}}),a.default.createElement("div",{className:(0,N.default)("rce-mbox-time",{"rce-mbox-time-block":t},{"non-copiable":!this.props.copiableDate}),"data-text":this.props.copiableDate?void 0:o,__source:{fileName:r,lineNumber:189}},this.props.copiableDate&&this.props.date&&!isNaN(this.props.date)&&(this.props.dateString||(0,v.format)(this.props.date)),this.props.status&&a.default.createElement("span",{className:"rce-mbox-status",__source:{fileName:r,lineNumber:207}},"waiting"===this.props.status&&a.default.createElement(b.default,{__source:{fileName:r,lineNumber:210}}),"sent"===this.props.status&&a.default.createElement(_.default,{__source:{fileName:r,lineNumber:215}}),"received"===this.props.status&&a.default.createElement(d.default,{__source:{fileName:r,lineNumber:220}}),"read"===this.props.status&&a.default.createElement(d.default,{color:"#4FC3F7",__source:{fileName:r,lineNumber:225}})))),this.props.notch&&("right"===this.props.position?a.default.createElement("svg",{className:(0,N.default)("rce-mbox-right-notch",{"message-focus":this.props.focus}),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",__source:{fileName:r,lineNumber:235}},a.default.createElement("path",{d:"M0 0v20L20 0",__source:{fileName:r,lineNumber:239}})):a.default.createElement("div",{__source:{fileName:r,lineNumber:242}},a.default.createElement("svg",{className:(0,N.default)("rce-mbox-left-notch",{"message-focus":this.props.focus}),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",__source:{fileName:r,lineNumber:243}},a.default.createElement("defs",{__source:{fileName:r,lineNumber:247}},a.default.createElement("filter",{id:"filter1",x:"0",y:"0",__source:{fileName:r,lineNumber:248}},a.default.createElement("feOffset",{result:"offOut",in:"SourceAlpha",dx:"-2",dy:"-5",__source:{fileName:r,lineNumber:249}}),a.default.createElement("feGaussianBlur",{result:"blurOut",in:"offOut",stdDeviation:"3",__source:{fileName:r,lineNumber:250}}),a.default.createElement("feBlend",{in:"SourceGraphic",in2:"blurOut",mode:"normal",__source:{fileName:r,lineNumber:251}}))),a.default.createElement("path",{d:"M20 0v20L0 0",filter:"url(#filter1)",__source:{fileName:r,lineNumber:254}}))))))}}]),t}();w.defaultProps={position:"left",type:"text",text:"",title:null,titleColor:null,onTitleClick:null,onForwardClick:null,onReplyClick:null,onReplyMessageClick:null,date:new Date,data:{},onClick:null,onOpen:null,onDownload:null,onLoad:null,onPhotoError:null,forwarded:!1,reply:!1,status:null,dateString:null,notch:!0,avatar:null,renderAddCmp:null,copiableDate:!1,onContextMenu:null,focus:!1,onMessageFocused:null},t.default=w},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/fa/cloud-download */ "./node_modules/react-icons/lib/fa/cloud-download.js")},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/fa/exclamation-triangle */ "./node_modules/react-icons/lib/fa/exclamation-triangle.js")},function(e,t){e.exports=__webpack_require__(/*! react-progress-bar.js */ "./node_modules/react-progress-bar.js/dist/react-progressbar.js")},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.SystemMessage=void 0;var r="/Users/burak/github/react-chat-elements/src/SystemMessage/SystemMessage.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(44);var s=o(1),l=t.SystemMessage=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){return a.default.createElement("div",{className:s("rce-container-smsg",this.props.className),__source:{fileName:r,lineNumber:9}},a.default.createElement("div",{className:"rce-smsg",__source:{fileName:r,lineNumber:10}},a.default.createElement("div",{className:"rce-smsg-text",__source:{fileName:r,lineNumber:12}},this.props.text)))}}]),t}();t.default=l},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.ReplyMessage=void 0;var r="/Users/burak/github/react-chat-elements/src/ReplyMessage/ReplyMessage.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(50);var s=o(1),l=t.ReplyMessage=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.photoURL,o=e.title,n=e.titleColor,i=e.message,l=e.onClick;return a.default.createElement("div",{className:s("rce-mbox-reply",{"rce-mbox-reply-border":!!n}),style:n&&{borderColor:n},onClick:l,__source:{fileName:r,lineNumber:21}},a.default.createElement("div",{className:"rce-mbox-reply-left",__source:{fileName:r,lineNumber:27}},a.default.createElement("div",{style:n&&{color:n},className:"rce-mbox-reply-owner",__source:{fileName:r,lineNumber:28}},o||"Unknown"),a.default.createElement("div",{className:"rce-mbox-reply-message",__source:{fileName:r,lineNumber:33}},i||"...")),t&&a.default.createElement("div",{className:"rce-mbox-reply-right",__source:{fileName:r,lineNumber:39}},a.default.createElement("img",{src:t,alt:"",__source:{fileName:r,lineNumber:40}})))}}]),t}();l.defaultProps={photoURL:null,title:null,titleColor:null,message:null,onClick:function(){}},t.default=l},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItem=void 0;var r="/Users/burak/github/react-chat-elements/src/ChatItem/ChatItem.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=c(i);o(54);var s=c(o(2)),l=o(3),u=c(o(1));function c(e){return e&&e.__esModule?e:{default:e}}var p=t.ChatItem=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){var e=this.props.statusColorType;return a.default.createElement("div",{className:(0,u.default)("rce-container-citem",this.props.className),onClick:this.props.onClick,onContextMenu:this.props.onContextMenu,__source:{fileName:r,lineNumber:18}},a.default.createElement("div",{className:"rce-citem",__source:{fileName:r,lineNumber:22}},a.default.createElement("div",{className:(0,u.default)("rce-citem-avatar",{"rce-citem-status-encircle":"encircle"===e}),__source:{fileName:r,lineNumber:23}},a.default.createElement(s.default,{src:this.props.avatar,alt:this.props.alt,className:"encircle"===e?"rce-citem-avatar-encircle-status":"",size:"large",letterItem:this.props.letterItem,sideElement:this.props.statusColor&&a.default.createElement("span",{className:"rce-citem-status",style:"encircle"===e?{boxShadow:"inset 0 0 0 2px "+this.props.statusColor+", inset 0 0 0 5px #FFFFFF"}:{backgroundColor:this.props.statusColor},__source:{fileName:r,lineNumber:37}},this.props.statusText),onError:this.props.onAvatarError,lazyLoadingImage:this.props.lazyLoadingImage,type:(0,u.default)("circle",{flexible:this.props.avatarFlexible}),__source:{fileName:r,lineNumber:29}})),a.default.createElement("div",{className:"rce-citem-body",__source:{fileName:r,lineNumber:52}},a.default.createElement("div",{className:"rce-citem-body--top",__source:{fileName:r,lineNumber:53}},a.default.createElement("div",{className:"rce-citem-body--top-title",__source:{fileName:r,lineNumber:54}},this.props.title),a.default.createElement("div",{className:"rce-citem-body--top-time",__source:{fileName:r,lineNumber:57}},this.props.date&&!isNaN(this.props.date)&&(this.props.dateString||(0,l.format)(this.props.date)))),a.default.createElement("div",{className:"rce-citem-body--bottom",__source:{fileName:r,lineNumber:69}},a.default.createElement("div",{className:"rce-citem-body--bottom-title",__source:{fileName:r,lineNumber:70}},this.props.subtitle),a.default.createElement("div",{className:"rce-citem-body--bottom-status",__source:{fileName:r,lineNumber:73}},this.props.unread>0&&a.default.createElement("span",{__source:{fileName:r,lineNumber:76}},this.props.unread))))))}}]),t}();p.defaultProps={id:"",onClick:null,avatar:"",avatarFlexible:!1,alt:"",title:"",subtitle:"",date:new Date,unread:0,statusColor:null,statusColorType:"badge",statusText:null,dateString:null,lazyLoadingImage:void 0,onAvatarError:function(){}},t.default=p},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MeetingItem=void 0;var r="/Users/burak/github/react-chat-elements/src/MeetingItem/MeetingItem.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=f(i);o(72);var s=f(o(32)),l=f(o(33)),u=f(o(2)),c=o(3),p=f(o(1));function f(e){return e&&e.__esModule?e:{default:e}}var m=t.MeetingItem=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){var e=this,t=this.props.statusColorType,o=this.props.avatarLimit,n=this.props.date&&!isNaN(this.props.date)&&(this.props.dateString||(0,c.format)(this.props.date)),i=this.props.subject.substring(0,this.props.subjectLimit)+(this.props.subject.length>this.props.subjectLimit?"...":"");return a.default.createElement("div",{className:(0,p.default)("rce-container-mtitem",this.props.className),onClick:this.props.onClick,onContextMenu:this.props.onContextMenu,__source:{fileName:r,lineNumber:29}},a.default.createElement("div",{className:"rce-mtitem",__source:{fileName:r,lineNumber:33}},a.default.createElement("div",{className:"rce-mtitem-subject",__source:{fileName:r,lineNumber:34}},i),a.default.createElement("div",{className:"rce-mtitem-body",__source:{fileName:r,lineNumber:37}},a.default.createElement("div",{className:"rce-mtitem-body--avatars",__source:{fileName:r,lineNumber:38}},this.props.avatars.slice(0,5).map(function(o,n){return o instanceof u.default?o:a.default.createElement(u.default,{key:n,src:o.src,alt:o.alt,className:"encircle"===o.statusColorType?"rce-mtitem-avatar-encircle-status":"",size:"small",letterItem:o.letterItem,sideElement:o.statusColor&&a.default.createElement("span",{className:"rce-mtitem-status",style:"encircle"===t?{boxShadow:"inset 0 0 0 2px "+o.statusColor+", inset 0 0 0 5px #FFFFFF"}:{backgroundColor:o.statusColor},__source:{fileName:r,lineNumber:50}},o.statusText),onError:e.props.onAvatarError,lazyLoadingImage:e.props.lazyLoadingImage,type:(0,p.default)("circle",{flexible:e.props.avatarFlexible}),__source:{fileName:r,lineNumber:41}})}),this.props.avatars.length>o&&a.default.createElement("div",{className:"rce-avatar-container circle small rce-mtitem-letter",__source:{fileName:r,lineNumber:68}},a.default.createElement("span",{__source:{fileName:r,lineNumber:69}},"+"+o))),a.default.createElement("div",{className:"rce-mtitem-body--functions",__source:{fileName:r,lineNumber:75}},a.default.createElement("div",{className:"rce-mtitem-button",onClick:this.props.onMeetingClick,__source:{fileName:r,lineNumber:76}},a.default.createElement(s.default,{__source:{fileName:r,lineNumber:79}})))),a.default.createElement("div",{className:"rce-mtitem-footer",__source:{fileName:r,lineNumber:83}},a.default.createElement("div",{className:"rce-mtitem-share",onClick:this.props.onShareClick,__source:{fileName:r,lineNumber:84}},a.default.createElement(l.default,{__source:{fileName:r,lineNumber:87}})),a.default.createElement("span",{className:"rce-mtitem-date",__source:{fileName:r,lineNumber:89}},n))))}}]),t}();m.defaultProps={id:"",subject:"",subjectLimit:60,onClick:null,avatarFlexible:!1,alt:"",title:"",subtitle:"",date:new Date,dateString:"",lazyLoadingImage:void 0,avatarLimit:5,avatars:[],onAvatarError:function(){},onMeetingClick:function(){},onShareClick:function(){}},t.default=m},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MeetingList=t.MeetingItem=t.ReplyMessage=t.Popup=t.SideBar=t.Dropdown=t.Navbar=t.Avatar=t.Button=t.Input=t.MessageList=t.ChatList=t.SystemMessage=t.ChatItem=t.MessageBox=void 0;var r=y(o(5)),n=y(o(11)),i=y(o(9)),a=y(o(24)),s=y(o(25)),l=y(o(27)),u=y(o(4)),c=y(o(2)),p=y(o(28)),f=y(o(29)),m=y(o(30)),h=y(o(31)),d=y(o(10)),b=y(o(12)),_=y(o(34));function y(e){return e&&e.__esModule?e:{default:e}}t.MessageBox=r.default,t.ChatItem=n.default,t.SystemMessage=i.default,t.ChatList=a.default,t.MessageList=s.default,t.Input=l.default,t.Button=u.default,t.Avatar=c.default,t.Navbar=p.default,t.Dropdown=f.default,t.SideBar=m.default,t.Popup=h.default,t.ReplyMessage=d.default,t.MeetingItem=b.default,t.MeetingList=_.default},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoMessage=void 0;var r="/Users/burak/github/react-chat-elements/src/PhotoMessage/PhotoMessage.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=u(i);o(40);var s=u(o(6)),l=u(o(7));function u(e){return e&&e.__esModule?e:{default:e}}var c=o(8).Circle,p=t.PhotoMessage=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){var e={strokeWidth:2.3,color:"#efe",trailColor:"#aaa",trailWidth:1,step:function(e,t){t.path.setAttribute("trail",e.color),t.path.setAttribute("trailwidth-width",e.width);var o=Math.round(100*t.value());0===o?t.setText(""):t.setText(o)}},t=this.props.data.status&&!0===this.props.data.status.error;return a.default.createElement("div",{className:"rce-mbox-photo",__source:{fileName:r,lineNumber:33}},a.default.createElement("div",{className:"rce-mbox-photo--img",style:this.props.data.width&&this.props.data.height&&{width:this.props.data.width,height:this.props.data.height},__source:{fileName:r,lineNumber:34}},a.default.createElement("img",{src:this.props.data.uri,alt:this.props.data.alt,onClick:this.props.onOpen,onLoad:this.props.onLoad,onError:this.props.onPhotoError,__source:{fileName:r,lineNumber:40}}),t&&a.default.createElement("div",{className:"rce-mbox-photo--img__block",__source:{fileName:r,lineNumber:48}},a.default.createElement("span",{className:"rce-mbox-photo--img__block-item rce-mbox-photo--error",__source:{fileName:r,lineNumber:49}},a.default.createElement(l.default,{__source:{fileName:r,lineNumber:51}}))),!t&&this.props.data.status&&!this.props.data.status.download&&a.default.createElement("div",{className:"rce-mbox-photo--img__block",__source:{fileName:r,lineNumber:59}},!this.props.data.status.click&&a.default.createElement("button",{onClick:this.props.onDownload,className:"rce-mbox-photo--img__block-item rce-mbox-photo--download",__source:{fileName:r,lineNumber:62}},a.default.createElement(s.default,{__source:{fileName:r,lineNumber:65}})),"number"==typeof this.props.data.status.loading&&0!==this.props.data.status.loading&&a.default.createElement(c,{progress:this.props.data.status.loading,options:e,initialAnimate:!0,containerClassName:"rce-mbox-photo--img__block-item",__source:{fileName:r,lineNumber:71}}))),this.props.text&&a.default.createElement("div",{className:"rce-mbox-text",__source:{fileName:r,lineNumber:82}},this.props.text))}}]),t}();p.defaultProps={text:"",data:{},onDownload:null,onOpen:null,onLoad:null,onPhotoError:null},t.default=p},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.FileMessage=void 0;var r="/Users/burak/github/react-chat-elements/src/FileMessage/FileMessage.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=c(i);o(42);var s=c(o(6)),l=c(o(7)),u=c(o(16));function c(e){return e&&e.__esModule?e:{default:e}}var p=o(8).Circle,f=t.FileMessage=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"onClick",value:function(e){this.props.data.status&&(!this.props.data.status.download&&this.props.onDownload instanceof Function?this.props.onDownload(e):this.props.data.status.download&&this.props.onOpen instanceof Function&&this.props.onOpen(e))}},{key:"render",value:function(){var e={strokeWidth:5,color:"#333",trailColor:"#aaa",trailWidth:5,step:function(e,t){t.path.setAttribute("trail",e.color),t.path.setAttribute("trailwidth-width",e.width);var o=Math.round(100*t.value());0===o?t.setText(""):t.setText(o)}},t=this.props.data.status&&!0===this.props.data.status.error;return a.default.createElement("div",{className:"rce-mbox-file",__source:{fileName:r,lineNumber:44}},a.default.createElement("button",{onClick:this.onClick.bind(this),__source:{fileName:r,lineNumber:45}},a.default.createElement("div",{className:"rce-mbox-file--icon",__source:{fileName:r,lineNumber:46}},a.default.createElement(u.default,{color:"#aaa",__source:{fileName:r,lineNumber:47}}),a.default.createElement("div",{className:"rce-mbox-file--size",__source:{fileName:r,lineNumber:49}},this.props.data.size)),a.default.createElement("div",{className:"rce-mbox-file--text",__source:{fileName:r,lineNumber:53}},this.props.text),a.default.createElement("div",{className:"rce-mbox-file--buttons",__source:{fileName:r,lineNumber:56}},t&&a.default.createElement("span",{className:"rce-error-button",__source:{fileName:r,lineNumber:59}},a.default.createElement(l.default,{color:"#ff3d3d",__source:{fileName:r,lineNumber:60}})),!t&&this.props.data.status&&!this.props.data.status.download&&!this.props.data.status.click&&a.default.createElement(s.default,{color:"#aaa",__source:{fileName:r,lineNumber:69}}),!t&&this.props.data.status&&"number"==typeof this.props.data.status.loading&&0!==this.props.data.status.loading&&a.default.createElement(p,{progress:this.props.data.status.loading,options:e,initialAnimate:!0,containerClassName:"rce-mbox-file--loading",__source:{fileName:r,lineNumber:77}}))))}}]),t}();f.defaultProps={text:"",data:{},onClick:null,onDownload:null,onOpen:null},t.default=f},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/fa/file */ "./node_modules/react-icons/lib/fa/file.js")},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.LocationMessage=void 0;var r="/Users/burak/github/react-chat-elements/src/LocationMessage/LocationMessage.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(46);var s=o(1),l=t.LocationMessage=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.className=o.className.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"buildURL",value:function(e){var t=this.props.data||{};return e.replace(/LATITUDE/g,t.latitude).replace(/LONGITUDE/g,t.longitude).replace("MARKER_COLOR",this.props.markerColor).replace("ZOOM",this.props.zoom).replace("KEY",this.props.apiKey)}},{key:"className",value:function(){var e=s("rce-mbox-location",this.props.className);return this.props.text&&(e=s(e,"rce-mbox-location-has-text")),e}},{key:"render",value:function(){var e=this.props.data||{};return a.default.createElement("div",{className:"rce-container-lmsg",__source:{fileName:r,lineNumber:40}},a.default.createElement("a",{onClick:this.props.onOpen,target:this.props.target,href:this.props.href||this.props.src||this.buildURL(e.mapURL||"https://www.google.com/maps/search/?api=1&query=LATITUDE,LONGITUDE&zoom=ZOOM"),className:this.className(),__source:{fileName:r,lineNumber:41}},a.default.createElement("img",{onError:this.props.onError,className:"rce-mbox-location-img",src:this.props.src||this.buildURL(e.staticURL||"https://maps.googleapis.com/maps/api/staticmap?markers=color:MARKER_COLOR|LATITUDE,LONGITUDE&zoom=ZOOM&size=270x200&scale=2&key=KEY"),__source:{fileName:r,lineNumber:46}})),this.props.text&&a.default.createElement("div",{className:"rce-mbox-text rce-mbox-location-text",__source:{fileName:r,lineNumber:56}},this.props.text))}}]),t}();l.defaultProps={target:"_blank",apiKey:"",zoom:14,markerColor:"red",onError:function(){}},t.default=l},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.SpotifyMessage=void 0;var r="/Users/burak/github/react-chat-elements/src/SpotifyMessage/SpotifyMessage.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(48);o(1);var s=t.SpotifyMessage=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"toUrl",value:function(){var e=[],t={uri:this.props.uri,theme:this.props.theme,view:this.props.view};for(var o in t){var r=encodeURIComponent(o),n=encodeURIComponent(t[o]);e.push(r+"="+n)}return e=e.join("&")}},{key:"render",value:function(){return this.props.uri?a.default.createElement("div",{className:"rce-mbox-spotify",__source:{fileName:r,lineNumber:27}},a.default.createElement("iframe",{src:"https://open.spotify.com/embed?"+this.toUrl(),width:this.props.width,height:this.props.height,frameBorder:"0",allowtransparency:"true",__source:{fileName:r,lineNumber:28}})):null}}]),t}();s.defaultProps={uri:"",theme:"black",view:"list",width:300,height:380},t.default=s},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/fa/mail-forward */ "./node_modules/react-icons/lib/fa/mail-forward.js")},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/io/android-done-all */ "./node_modules/react-icons/lib/io/android-done-all.js")},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/md/access-time */ "./node_modules/react-icons/lib/md/access-time.js")},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/md/check */ "./node_modules/react-icons/lib/md/check.js")},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/md/message */ "./node_modules/react-icons/lib/md/message.js")},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.ChatList=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n="/Users/burak/github/react-chat-elements/src/ChatList/ChatList.js",i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(0),s=u(a);o(56);var l=u(o(11));function u(e){return e&&e.__esModule?e:{default:e}}var c=o(1),p=t.ChatList=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"onClick",value:function(e,t,o){this.props.onClick instanceof Function&&this.props.onClick(e,t,o)}},{key:"onContextMenu",value:function(e,t,o){o.preventDefault(),this.props.onContextMenu instanceof Function&&this.props.onContextMenu(e,t,o)}},{key:"onAvatarError",value:function(e,t,o){this.props.onAvatarError instanceof Function&&this.props.onAvatarError(e,t,o)}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{ref:this.props.cmpRef,className:c("rce-container-clist",this.props.className),__source:{fileName:n,lineNumber:28}},this.props.dataSource.map(function(t,o){return s.default.createElement(l.default,r({id:t.id||o,key:o,lazyLoadingImage:e.props.lazyLoadingImage},t,{onAvatarError:function(r){return e.onAvatarError(t,o,r)},onContextMenu:function(r){return e.onContextMenu(t,o,r)},onClick:function(r){return e.onClick(t,o,r)},__source:{fileName:n,lineNumber:33}}))}))}}]),t}();p.defaultProps={dataSource:[],onClick:null,lazyLoadingImage:void 0},t.default=p},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MessageList=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n="/Users/burak/github/react-chat-elements/src/MessageList/MessageList.js",i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(0),s=c(a);o(58);var l=c(o(5)),u=c(o(26));function c(e){return e&&e.__esModule?e:{default:e}}var p=o(1),f=t.MessageList=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={scrollBottom:0,downButton:!1},o.loadRef=o.loadRef.bind(o),o.onScroll=o.onScroll.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"checkScroll",value:function(){var e=this.mlistRef;e&&("100%"===this.props.toBottomHeight||this.state.scrollBottom<this.props.toBottomHeight?e.scrollTop=e.scrollHeight:!0===this.props.lockable&&(e.scrollTop=e.scrollHeight-e.offsetHeight-this.state.scrollBottom))}},{key:"componentWillReceiveProps",value:function(e){this.mlistRef&&e.dataSource.length!==this.props.dataSource.length&&this.setState({scrollBottom:this.getBottom(this.mlistRef)},this.checkScroll.bind(this))}},{key:"getBottom",value:function(e){return e.scrollHeight-e.scrollTop-e.offsetHeight}},{key:"onOpen",value:function(e,t,o){this.props.onOpen instanceof Function&&this.props.onOpen(e,t,o)}},{key:"onDownload",value:function(e,t,o){this.props.onDownload instanceof Function&&this.props.onDownload(e,t,o)}},{key:"onPhotoError",value:function(e,t,o){this.props.onPhotoError instanceof Function&&this.props.onPhotoError(e,t,o)}},{key:"onClick",value:function(e,t,o){this.props.onClick instanceof Function&&this.props.onClick(e,t,o)}},{key:"onTitleClick",value:function(e,t,o){this.props.onTitleClick instanceof Function&&this.props.onTitleClick(e,t,o)}},{key:"onForwardClick",value:function(e,t,o){this.props.onForwardClick instanceof Function&&this.props.onForwardClick(e,t,o)}},{key:"onReplyClick",value:function(e,t,o){this.props.onReplyClick instanceof Function&&this.props.onReplyClick(e,t,o)}},{key:"onReplyMessageClick",value:function(e,t,o){this.props.onReplyMessageClick instanceof Function&&this.props.onReplyMessageClick(e,t,o)}},{key:"onContextMenu",value:function(e,t,o){this.props.onContextMenu instanceof Function&&this.props.onContextMenu(e,t,o)}},{key:"onMessageFocused",value:function(e,t,o){this.props.onMessageFocused instanceof Function&&this.props.onMessageFocused(e,t,o)}},{key:"loadRef",value:function(e){this.mlistRef=e,this.props.cmpRef instanceof Function&&this.props.cmpRef(e)}},{key:"onScroll",value:function(e){var t=this.getBottom(e.target);this.state.scrollBottom=t,"100%"===this.props.toBottomHeight||t>this.props.toBottomHeight?!0!==this.state.downButton&&(this.state.downButton=!0,this.setState({downButton:!0,scrollBottom:t})):!1!==this.state.downButton&&(this.state.downButton=!1,this.setState({downButton:!1,scrollBottom:t})),this.props.onScroll instanceof Function&&this.props.onScroll(e)}},{key:"toBottom",value:function(e){this.mlistRef&&(this.mlistRef.scrollTop=this.mlistRef.scrollHeight,this.props.onDownButtonClick instanceof Function&&this.props.onDownButtonClick(e))}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:p(["rce-container-mlist",this.props.className]),__source:{fileName:n,lineNumber:145}},s.default.createElement("div",{ref:this.loadRef,onScroll:this.onScroll,className:"rce-mlist",__source:{fileName:n,lineNumber:147}},this.props.dataSource.map(function(t,o){return s.default.createElement(l.default,r({key:o},t,{onOpen:e.props.onOpen&&function(r){return e.onOpen(t,o,r)},onPhotoError:e.props.onPhotoError&&function(r){return e.onPhotoError(t,o,r)},onDownload:e.props.onDownload&&function(r){return e.onDownload(t,o,r)},onTitleClick:e.props.onTitleClick&&function(r){return e.onTitleClick(t,o,r)},onForwardClick:e.props.onForwardClick&&function(r){return e.onForwardClick(t,o,r)},onReplyClick:e.props.onReplyClick&&function(r){return e.onReplyClick(t,o,r)},onReplyMessageClick:e.props.onReplyMessageClick&&function(r){return e.onReplyMessageClick(t,o,r)},onClick:e.props.onClick&&function(r){return e.onClick(t,o,r)},onContextMenu:e.props.onContextMenu&&function(r){return e.onContextMenu(t,o,r)},onMessageFocused:e.props.onMessageFocused&&function(r){return e.onMessageFocused(t,o,r)},__source:{fileName:n,lineNumber:153}}))})),!0===this.props.downButton&&this.state.downButton&&"100%"!==this.props.toBottomHeight&&s.default.createElement("div",{className:"rce-mlist-down-button",onClick:this.toBottom.bind(this),__source:{fileName:n,lineNumber:174}},s.default.createElement(u.default,{__source:{fileName:n,lineNumber:177}}),this.props.downButtonBadge&&s.default.createElement("span",{className:"rce-mlist-down-button--badge",__source:{fileName:n,lineNumber:180}},this.props.downButtonBadge)))}}]),t}();f.defaultProps={onClick:null,onTitleClick:null,onForwardClick:null,onReplyClick:null,onReplyMessageClick:null,onDownButtonClick:null,onOpen:null,onPhotoError:null,onDownload:null,dataSource:[],lockable:!1,toBottomHeight:300,downButton:!0,downButtonBadge:null},t.default=f},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/fa/chevron-down */ "./node_modules/react-icons/lib/fa/chevron-down.js")},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var r="/Users/burak/github/react-chat-elements/src/Input/Input.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(60);var s=o(1),l=t.Input=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"onChange",value:function(e){if(this.props.maxlength&&(e.target.value||"").length>this.props.maxlength)return this.props.onMaxLengthExceed instanceof Function&&this.props.onMaxLengthExceed(),void(this.input.value=(e.target.value||"").substring(0,this.props.maxlength));if(this.props.onChange instanceof Function&&this.props.onChange(e),!0===this.props.multiline&&!0===this.props.autoHeight){e.target.style.height!==this.props.minHeight+"px"&&(e.target.style.height=this.props.minHeight+"px");var t=void 0;t=e.target.scrollHeight<=this.props.maxHeight?e.target.scrollHeight+"px":this.props.maxHeight+"px",e.target.style.height!==t&&(e.target.style.height=t)}}},{key:"clear",value:function(){var e={FAKE_EVENT:!0,target:this.input};this.input.value&&(this.input.value=""),this.onChange(e)}},{key:"componentDidMount",value:function(){!0===this.props.autofocus&&this.input.focus()}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:s("rce-container-input",this.props.className),__source:{fileName:r,lineNumber:58}},this.props.leftButtons&&a.default.createElement("div",{className:"rce-input-buttons",__source:{fileName:r,lineNumber:61}},this.props.leftButtons),!1===this.props.multiline?a.default.createElement("input",{ref:function(t){e.props.inputRef instanceof Function&&e.props.inputRef(t),e.input=t},type:this.props.type,className:s("rce-input"),placeholder:this.props.placeholder,defaultValue:this.props.defaultValue,style:this.props.inputStyle,onChange:this.onChange.bind(this),onCopy:this.props.onCopy,onCut:this.props.onCut,onPaste:this.props.onPaste,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onSelect:this.props.onSelect,onSubmit:this.props.onSubmit,onReset:this.props.onReset,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,onKeyUp:this.props.onKeyUp,__source:{fileName:r,lineNumber:67}}):a.default.createElement("textarea",{ref:function(t){e.props.inputRef instanceof Function&&e.props.inputRef(t),e.input=t},type:this.props.type,className:s("rce-input","rce-input-textarea"),placeholder:this.props.placeholder,defaultValue:this.props.defaultValue,style:this.props.inputStyle,onChange:this.onChange.bind(this),onCopy:this.props.onCopy,onCut:this.props.onCut,onPaste:this.props.onPaste,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onSelect:this.props.onSelect,onSubmit:this.props.onSubmit,onReset:this.props.onReset,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,onKeyUp:this.props.onKeyUp,__source:{fileName:r,lineNumber:91}}),this.props.rightButtons&&a.default.createElement("div",{className:"rce-input-buttons",__source:{fileName:r,lineNumber:117}},this.props.rightButtons))}}]),t}();l.defaultProps={type:"text",placeholder:"",defaultValue:"",onChange:null,rightButtons:null,leftButtons:null,multiline:!1,minHeight:25,maxHeight:200,autoHeight:!0,inputStyle:null,inputRef:null,maxlength:null,onMaxLengthExceed:null,autofocus:!1},t.default=l},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Navbar=void 0;var r="/Users/burak/github/react-chat-elements/src/Navbar/Navbar.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(64);var s=o(1),l=t.Navbar=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){return a.default.createElement("div",{className:s("rce-navbar",this.props.type,this.props.className),__source:{fileName:r,lineNumber:9}},a.default.createElement("div",{className:"rce-navbar-item rce-navbar-item__left",__source:{fileName:r,lineNumber:10}},this.props.left),a.default.createElement("div",{className:"rce-navbar-item rce-navbar-item__center",__source:{fileName:r,lineNumber:13}},this.props.center),a.default.createElement("div",{className:"rce-navbar-item rce-navbar-item__right",__source:{fileName:r,lineNumber:16}},this.props.right))}}]),t}();l.defaultProps={left:null,center:null,right:null,type:"light"},t.default=l},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n="/Users/burak/github/react-chat-elements/src/Dropdown/Dropdown.js",i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(0),s=u(a);o(66);var l=u(o(4));function u(e){return e&&e.__esModule?e:{default:e}}var c=o(1),p=t.Dropdown=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={show:void 0},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"onBlur",value:function(e){!0===this.state.show&&this.setState({show:!1})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:c("rce-dropdown-container",this.props.className),onBlur:this.onBlur.bind(this),__source:{fileName:n,lineNumber:24}},s.default.createElement(l.default,r({},this.props.buttonProps,{onClick:function(){return e.setState({show:!e.state.show})},__source:{fileName:n,lineNumber:26}})),s.default.createElement("div",{className:c("rce-dropdown",this.props.animationType,"rce-dropdown-open__"+this.props.animationPosition,{"dropdown-hide":!1===this.state.show},{"dropdown-show":!0===this.state.show}),__source:{fileName:n,lineNumber:30}},s.default.createElement("ul",{__source:{fileName:n,lineNumber:38}},this.props.title&&s.default.createElement("span",{className:"rce-dropdown-title",__source:{fileName:n,lineNumber:41}},this.props.title),this.props.items.map(function(t,o){return s.default.createElement("li",{key:o,onMouseDown:function(t){return e.props.onSelect(o)},__source:{fileName:n,lineNumber:45}},t instanceof Object?t.icon?s.default.createElement("span",{className:"rce-button-icon--container",__source:{fileName:n,lineNumber:49}},("right"===t.icon.float||!t.icon.float)&&s.default.createElement("a",{__source:{fileName:n,lineNumber:50}},t.text),s.default.createElement("span",{style:{float:t.icon.float,color:t.icon.color,fontSize:t.icon.size||12},className:c("rce-button-icon",t.icon.className),__source:{fileName:n,lineNumber:52}},t.icon.component),"left"===t.icon.float&&s.default.createElement("a",{__source:{fileName:n,lineNumber:54}},t.text)):s.default.createElement("a",{__source:{fileName:n,lineNumber:56}},t.text):s.default.createElement("a",{__source:{fileName:n,lineNumber:58}},t))}))))}}]),t}();p.defaultProps={animationType:"default",animationPosition:"nortwest",items:[],onSelect:Function,buttonProps:null},t.default=p},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.SideBar=void 0;var r="/Users/burak/github/react-chat-elements/src/SideBar/SideBar.js",n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=o(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i);o(68);var s=o(1),l=t.SideBar=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"render",value:function(){return a.default.createElement("div",{className:s("rce-sbar",this.props.type,this.props.className),__source:{fileName:r,lineNumber:9}},a.default.createElement("div",{className:"rce-sbar-item",__source:{fileName:r,lineNumber:10}},this.props.top),a.default.createElement("div",{className:"rce-sbar-item rce-sbar-item__center",__source:{fileName:r,lineNumber:13}},this.props.center),a.default.createElement("div",{className:"rce-sbar-item",__source:{fileName:r,lineNumber:16}},this.props.bottom))}}]),t}();l.defaultProps={top:null,center:null,bottom:null,type:"dark"},t.default=l},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n="/Users/burak/github/react-chat-elements/src/Popup/Popup.js",i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(0),s=u(a);o(70);var l=u(o(4));function u(e){return e&&e.__esModule?e:{default:e}}var c=o(1),p=t.Popup=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"render",value:function(){return!0===this.props.show?s.default.createElement("div",{className:c("rce-popup-wrapper",this.props.type,this.props.className),__source:{fileName:n,lineNumber:12}},s.default.createElement("div",{className:"rce-popup",__source:{fileName:n,lineNumber:13}},this.props.renderHeader?s.default.createElement("div",{className:"rce-popup-header",__source:{fileName:n,lineNumber:16}},this.props.renderHeader()):s.default.createElement("div",{className:"rce-popup-header",__source:{fileName:n,lineNumber:20}},s.default.createElement("span",{__source:{fileName:n,lineNumber:21}},this.props.header),this.props.header&&this.props.headerButtons.map(function(e,t){return s.default.createElement(l.default,r({key:t},e,{__source:{fileName:n,lineNumber:25}}))})),s.default.createElement("div",{className:"rce-popup-content",style:{color:this.props.color},__source:{fileName:n,lineNumber:32}},this.props.renderContent?this.props.renderContent():this.props.text),s.default.createElement("div",{className:"rce-popup-footer",__source:{fileName:n,lineNumber:40}},this.props.renderFooter?this.props.renderFooter():this.props.footerButtons.map(function(e,t){return s.default.createElement(l.default,r({key:t},e,{__source:{fileName:n,lineNumber:46}}))})))):null}}]),t}();p.defaultProps={show:!1,header:null,text:null,headerButtons:[],footerButtons:[],renderHeader:null,renderContent:null,renderFooter:null,color:"#333"},t.default=p},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/md/video-call */ "./node_modules/react-icons/lib/md/video-call.js")},function(e,t){e.exports=__webpack_require__(/*! react-icons/lib/md/link */ "./node_modules/react-icons/lib/md/link.js")},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MeetingList=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n="/Users/burak/github/react-chat-elements/src/MeetingList/MeetingList.js",i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(0),s=u(a);o(74);var l=u(o(12));function u(e){return e&&e.__esModule?e:{default:e}}var c=o(1),p=t.MeetingList=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"onClick",value:function(e,t,o){this.props.onClick instanceof Function&&this.props.onClick(e,t,o)}},{key:"onContextMenu",value:function(e,t,o){o.preventDefault(),this.props.onContextMenu instanceof Function&&this.props.onContextMenu(e,t,o)}},{key:"onAvatarError",value:function(e,t,o){this.props.onAvatarError instanceof Function&&this.props.onAvatarError(e,t,o)}},{key:"onMeetingClick",value:function(e,t,o){this.props.onMeetingClick instanceof Function&&this.props.onMeetingClick(e,t,o)}},{key:"onShareClick",value:function(e,t,o){this.props.onShareClick instanceof Function&&this.props.onShareClick(e,t,o)}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{ref:this.props.cmpRef,className:c("rce-container-mtlist",this.props.className),__source:{fileName:n,lineNumber:38}},this.props.dataSource.map(function(t,o){return s.default.createElement(l.default,r({id:t.id||o,key:o,lazyLoadingImage:e.props.lazyLoadingImage},t,{onAvatarError:function(r){return e.onAvatarError(t,o,r)},onContextMenu:function(r){return e.onContextMenu(t,o,r)},onClick:function(r){return e.onClick(t,o,r)},onMeetingClick:function(r){return e.onMeetingClick(t,o,r)},onShareClick:function(r){return e.onShareClick(t,o,r)},__source:{fileName:n,lineNumber:43}}))}))}}]),t}();p.defaultProps={dataSource:[],onClick:null,lazyLoadingImage:void 0},t.default=p},function(e,t){},,,,,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){}]);

/***/ }),

/***/ "./node_modules/react-icon-base/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icon-base/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/chevron-down.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/fa/chevron-down.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaChevronDown = function FaChevronDown(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.6 18l-16.6 16.6q-0.4 0.4-1 0.4t-1-0.4l-16.6-16.6q-0.4-0.4-0.4-1t0.4-1l3.7-3.7q0.5-0.4 1-0.4t1 0.4l11.9 11.9 11.9-11.9q0.4-0.4 1-0.4t1 0.4l3.7 3.7q0.4 0.4 0.4 1t-0.4 1z' })
        )
    );
};

exports.default = FaChevronDown;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/cloud-download.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/fa/cloud-download.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCloudDownload = function FaCloudDownload(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.6 20.7q0-0.3-0.2-0.5t-0.5-0.2h-4.6v-7.3q0-0.3-0.2-0.5t-0.5-0.2h-4q-0.3 0-0.5 0.2t-0.2 0.5v7.3h-4.6q-0.3 0-0.5 0.2t-0.2 0.5q0 0.3 0.2 0.4l7.3 7.4q0.2 0.1 0.5 0.1t0.5-0.1l7.3-7.3q0.2-0.3 0.2-0.5z m13.3 4.6q0 3.3-2.4 5.7t-5.6 2.3h-22.6q-3.8 0-6.6-2.7t-2.7-6.6q0-2.7 1.5-5t3.9-3.4q-0.1-0.6-0.1-0.9 0-4.4 3.1-7.5t7.5-3.1q3.3 0 6 1.8t3.9 4.8q1.5-1.3 3.4-1.3 2.2 0 3.8 1.5t1.5 3.8q0 1.6-0.8 2.8 2.7 0.7 4.4 2.9t1.8 4.9z' })
        )
    );
};

exports.default = FaCloudDownload;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/exclamation-triangle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-icons/lib/fa/exclamation-triangle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaExclamationTriangle = function FaExclamationTriangle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm22.9 30.7v-4.2q0-0.4-0.3-0.6t-0.5-0.2h-4.2q-0.3 0-0.5 0.2t-0.3 0.6v4.2q0 0.3 0.3 0.5t0.5 0.2h4.2q0.3 0 0.5-0.2t0.3-0.5z m-0.1-8.4l0.4-10.2q0-0.3-0.2-0.4-0.3-0.3-0.5-0.3h-5q-0.2 0-0.5 0.3-0.2 0.1-0.2 0.4l0.4 10.2q0 0.3 0.2 0.4t0.5 0.2h4.2q0.3 0 0.5-0.2t0.2-0.4z m-0.3-20.8l17.1 31.4q0.8 1.4 0 2.8-0.4 0.7-1 1.1t-1.5 0.3h-34.2q-0.8 0-1.5-0.3t-1-1.1q-0.8-1.4 0-2.8l17.1-31.4q0.4-0.7 1.1-1.1t1.4-0.4 1.4 0.4 1.1 1.1z' })
        )
    );
};

exports.default = FaExclamationTriangle;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/file.js":
/*!*************************************************!*\
  !*** ./node_modules/react-icons/lib/fa/file.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaFile = function FaFile(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25.9 11.4v-10.5q0.4 0.3 0.8 0.6l9.1 9.1q0.3 0.3 0.6 0.8h-10.5z m-2.9 0.7q0 0.9 0.6 1.6t1.5 0.6h12.2v23.6q0 0.9-0.6 1.5t-1.6 0.6h-30q-0.8 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h17.9v12.1z' })
        )
    );
};

exports.default = FaFile;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/mail-forward.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/fa/mail-forward.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaMailForward = function FaMailForward(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm40 14.3q0 0.6-0.4 1l-11.5 11.4q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-5.7h-5q-2.2 0-3.9 0.1t-3.4 0.5-3 1-2.4 1.5-1.7 2.3-1.1 3.1-0.4 4q0 1.2 0.1 2.7 0 0.2 0 0.6t0.1 0.6q0 0.3-0.2 0.5t-0.5 0.2q-0.4 0-0.6-0.3-0.2-0.2-0.3-0.5t-0.3-0.7-0.3-0.5q-2.8-6.4-2.8-10.1 0-4.4 1.2-7.4 3.6-9 19.5-9h5v-5.7q0-0.6 0.4-1t1-0.5 1 0.5l11.5 11.4q0.4 0.4 0.4 1z' })
        )
    );
};

exports.default = FaMailForward;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/io/android-done-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-icons/lib/io/android-done-all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IoAndroidDoneAll = function IoAndroidDoneAll(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30.3 10.9l-10.9 10.9-2.4-2.4 10.9-10.9z m7.3-2.4l2.4 2.4-20.6 20.6-9.6-9.6 2.4-2.4 7.2 7.1z m-37.6 13.4l2.5-2.4 9.5 9.6-2.4 2.4z' })
        )
    );
};

exports.default = IoAndroidDoneAll;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/md/access-time.js":
/*!********************************************************!*\
  !*** ./node_modules/react-icons/lib/md/access-time.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdAccessTime = function MdAccessTime(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20.9 11.6v8.8l7.5 4.4-1.3 2.2-8.7-5.4v-10h2.5z m-0.9 21.8q5.5 0 9.4-4t4-9.4-4-9.4-9.4-4-9.4 4-4 9.4 4 9.4 9.4 4z m0-30q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z' })
        )
    );
};

exports.default = MdAccessTime;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/md/check.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/lib/md/check.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdCheck = function MdCheck(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm15 27l17.7-17.7 2.3 2.3-20 20-9.3-9.3 2.3-2.3z' })
        )
    );
};

exports.default = MdCheck;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/md/link.js":
/*!*************************************************!*\
  !*** ./node_modules/react-icons/lib/md/link.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdLink = function MdLink(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.4 11.6c4.6 0 8.2 3.8 8.2 8.4s-3.6 8.4-8.2 8.4h-6.8v-3.2h6.8c2.8 0 5.1-2.4 5.1-5.2s-2.3-5.2-5.1-5.2h-6.8v-3.2h6.8z m-15 10v-3.2h13.2v3.2h-13.2z m-6.9-1.6c0 2.8 2.3 5.2 5.1 5.2h6.8v3.2h-6.8c-4.6 0-8.2-3.8-8.2-8.4s3.6-8.4 8.2-8.4h6.8v3.2h-6.8c-2.8 0-5.1 2.4-5.1 5.2z' })
        )
    );
};

exports.default = MdLink;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/md/message.js":
/*!****************************************************!*\
  !*** ./node_modules/react-icons/lib/md/message.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdMessage = function MdMessage(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 13.4v-3.4h-20v3.4h20z m0 5v-3.4h-20v3.4h20z m0 5v-3.4h-20v3.4h20z m3.4-20c1.8 0 3.2 1.4 3.2 3.2v20c0 1.8-1.4 3.4-3.2 3.4h-23.4l-6.6 6.6v-30c0-1.8 1.4-3.2 3.2-3.2h26.8z' })
        )
    );
};

exports.default = MdMessage;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/md/video-call.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-icons/lib/md/video-call.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(/*! react-icon-base */ "./node_modules/react-icon-base/lib/index.js");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdVideoCall = function MdVideoCall(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 21.6v-3.2h-5v-5h-3.4v5h-5v3.2h5v5h3.4v-5h5z m5-4.1l6.6-6.6v18.2l-6.6-6.6v5.9c0 0.9-0.8 1.6-1.8 1.6h-20c-0.9 0-1.6-0.7-1.6-1.6v-16.8c0-0.9 0.7-1.6 1.6-1.6h20c1 0 1.8 0.7 1.8 1.6v5.9z' })
        )
    );
};

exports.default = MdVideoCall;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-progress-bar.js/dist/react-progressbar.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-progress-bar.js/dist/react-progressbar.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"), __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js"), __webpack_require__(/*! progressbar.js */ "./node_modules/progressbar.js/src/main.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (module, _react, _reactDom, _isEqual, _progressbar) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _isEqual2 = _interopRequireDefault(_isEqual);

    var _progressbar2 = _interopRequireDefault(_progressbar);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Shape = function (_Component) {
        _inherits(Shape, _Component);

        function Shape(props) {
            _classCallCheck(this, Shape);

            var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, props));

            _this.state = {
                shape: null
            };
            return _this;
        }

        _createClass(Shape, [{
            key: 'render',
            value: function render() {
                var _props = this.props,
                    containerStyle = _props.containerStyle,
                    containerClassName = _props.containerClassName;


                return _react2.default.createElement('div', { className: containerClassName, style: containerStyle, ref: 'progressBar' });
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (!(0, _isEqual2.default)(this.props.options, nextProps.options)) {
                    this._destroy();
                    this._create(nextProps, this.props);

                    return;
                }

                this._animateProgress(nextProps.progress);
                this._setText(nextProps.text);
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this._create(this.props);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this._destroy();
            }
        }, {
            key: '_create',
            value: function _create(props, oldProps) {
                if (this.state.shape !== null) {
                    throw new Error('Progressbar is already created');
                }

                // setState function is not used to prevent a new render cycle
                // This handling happens outside of React component's lifecycle
                var container = (0, _reactDom.findDOMNode)(this.refs.progressBar);

                this.state.shape = new props.ShapeClass(container, props.options);

                if (props.initialAnimate) {
                    if (oldProps) {
                        this._setProgress(oldProps.progress);
                    }

                    this._animateProgress(props.progress);
                } else {
                    this._setProgress(props.progress);
                }

                this._setText(props.text);
            }
        }, {
            key: '_destroy',
            value: function _destroy() {
                if (this.state.shape) {
                    this.state.shape.destroy();
                    this.state.shape = null;
                }
            }
        }, {
            key: '_animateProgress',
            value: function _animateProgress(progress) {
                this.state.shape.animate(progress);
            }
        }, {
            key: '_setProgress',
            value: function _setProgress(progress) {
                this.state.shape.set(progress);
            }
        }, {
            key: '_setText',
            value: function _setText(text) {
                if (text) {
                    this.state.shape.setText(text);
                }
            }
        }]);

        return Shape;
    }(_react.Component);

    ;

    var Line = function (_Component2) {
        _inherits(Line, _Component2);

        function Line() {
            _classCallCheck(this, Line);

            return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
        }

        _createClass(Line, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(Shape, _extends({}, this.props, { ShapeClass: _progressbar2.default.Line }));
            }
        }]);

        return Line;
    }(_react.Component);

    ;

    var Circle = function (_Component3) {
        _inherits(Circle, _Component3);

        function Circle() {
            _classCallCheck(this, Circle);

            return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
        }

        _createClass(Circle, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(Shape, _extends({}, this.props, { ShapeClass: _progressbar2.default.Circle }));
            }
        }]);

        return Circle;
    }(_react.Component);

    ;

    var SemiCircle = function (_Component4) {
        _inherits(SemiCircle, _Component4);

        function SemiCircle() {
            _classCallCheck(this, SemiCircle);

            return _possibleConstructorReturn(this, (SemiCircle.__proto__ || Object.getPrototypeOf(SemiCircle)).apply(this, arguments));
        }

        _createClass(SemiCircle, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(Shape, _extends({}, this.props, { ShapeClass: _progressbar2.default.SemiCircle }));
            }
        }]);

        return SemiCircle;
    }(_react.Component);

    ;

    module.exports = {
        Line: Line,
        Circle: Circle,
        SemiCircle: SemiCircle
    };
});


/***/ }),

/***/ "./node_modules/shifty/dist/shifty.js":
/*!********************************************!*\
  !*** ./node_modules/shifty/dist/shifty.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Shifty 2.12.0 - https://github.com/jeremyckahn/shifty */
!function(t,n){ true?module.exports=n():undefined}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){"use strict";(function(t){e.d(n,"e",(function(){return m})),e.d(n,"c",(function(){return b})),e.d(n,"b",(function(){return w})),e.d(n,"a",(function(){return S})),e.d(n,"d",(function(){return j}));var r=e(1);function i(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw o}}}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h="undefined"!=typeof window?window:t,p=h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.oRequestAnimationFrame||h.msRequestAnimationFrame||h.mozCancelRequestAnimationFrame&&h.mozRequestAnimationFrame||setTimeout,d=function(){},v=null,y=null,_=s({},r),m=function(t,n,e,r,i,u,o){var a=t<u?0:(t-u)/i;for(var c in n){var f=o[c],s=f.call?f:_[f],l=e[c];n[c]=l+(r[c]-l)*s(a)}return n},g=function(t,n){var e=t._data,r=t._currentState,i=t._delay,u=t._easing,o=t._originalState,a=t._duration,c=t._render,f=t._targetState,s=t._timestamp,l=s+i+a,h=n>l?l:n,p=a-(l-h);h>=l?(c(f,e,p),t.stop(!0)):(t._applyFilter("beforeTween"),h<s+i?(h=1,a=1,s=1):s+=i,m(h,r,o,f,a,s,u),t._applyFilter("afterTween"),c(r,e,p))},b=function(){for(var t=S.now(),n=v;n;){var e=n._next;g(n,t),n=e}},w=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",e={},r=c(n);if("string"===r||"function"===r)for(var i in t)e[i]=n;else for(var u in t)e[u]=n[u]||"linear";return e},O=function(t){if(t===v)(v=t._next)?v._previous=null:y=null;else if(t===y)(y=t._previous)?y._next=null:v=null;else{var n=t._previous,e=t._next;n._next=e,e._previous=n}t._previous=t._next=null},S=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o(this,t),l(this,"_config",null),l(this,"_data",{}),l(this,"_filters",[]),l(this,"_next",null),l(this,"_previous",null),l(this,"_timestamp",null),l(this,"_resolve",null),l(this,"_reject",null),this._currentState=n,e&&this.setConfig(e)}var n,e,r;return n=t,(e=[{key:"_applyFilter",value:function(t){var n,e=i(this._filters);try{for(e.s();!(n=e.n()).done;){var r=n.value[t];r&&r(this)}}catch(t){e.e(t)}finally{e.f()}}},{key:"tween",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this._data,r=this._config;return this._isPlaying&&this.stop(),!n&&r||this.setConfig(n),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),e),this.resume()}},{key:"setConfig",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=s(s({},this._config),e),i=this._config=r,u=i.attachment,o=i.data,a=i.duration,c=void 0===a?500:a,f=i.easing,l=i.promise,h=void 0===l?Promise:l,p=i.start,v=void 0===p?d:p,y=i.render,_=void 0===y?r.step||d:y,m=i.step,g=void 0===m?d:m,b=e.delay,O=void 0===b?0:b,S=e.from,j=e.to;this._data=o||u||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=O,this._start=v,this._render=_||g,this._duration=c,this._currentState=s({},S||this.get()),this._originalState=this.get(),this._targetState=s({},j||this.get());var M=this._currentState;this._targetState=s(s({},M),this._targetState),this._easing=w(M,f);var k=t.filters;for(var P in this._filters.length=0,k)k[P].doesApply(this)&&this._filters.push(k[P]);return this._applyFilter("tweenCreated"),this._promise=new h((function(t,e){n._resolve=t,n._reject=e})),this._promise.catch(d),this}},{key:"get",value:function(){return s({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,O(this),this}},{key:"resume",value:function(){if(null===this._timestamp)return this.tween();if(this._isPlaying)return this._promise;var n=t.now();return this._pausedAtTime&&(this._timestamp+=n-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===v?(v=this,y=this,function t(){v&&(p.call(h,t,1e3/60),b())}()):(this._previous=y,y._next=this,y=this),this._promise}},{key:"seek",value:function(n){n=Math.max(n,0);var e=t.now();return this._timestamp+n===0||(this._timestamp=e-n,this._isPlaying||g(this,e)),this}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._currentState,e=this._data,r=this._easing,i=this._originalState,u=this._resolve,o=this._targetState;return this._isPlaying?(this._isPlaying=!1,O(this),t&&(this._applyFilter("beforeTween"),m(1,n,i,o,1,0,r),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd")),u&&u({data:e,state:n,tweenable:this}),this._resolve=null,this._reject=null,this):this}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._currentState,e=this._data,r=this._isPlaying;return r?(this._reject({data:e,state:n,tweenable:this}),this._resolve=null,this._reject=null,this.stop(t)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(n){t.setScheduleFunction(n)}},{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&(this._data=s({},t)),this._data}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&a(n.prototype,e),r&&a(n,r),t}();function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new S,e=n.tween(t);return e.tweenable=n,e}S.setScheduleFunction=function(t){return p=t},S.formulas=_,S.filters={},S.now=Date.now||function(){return+new Date}}).call(this,e(2))},function(t,n,e){"use strict";e.r(n),e.d(n,"linear",(function(){return r})),e.d(n,"easeInQuad",(function(){return i})),e.d(n,"easeOutQuad",(function(){return u})),e.d(n,"easeInOutQuad",(function(){return o})),e.d(n,"easeInCubic",(function(){return a})),e.d(n,"easeOutCubic",(function(){return c})),e.d(n,"easeInOutCubic",(function(){return f})),e.d(n,"easeInQuart",(function(){return s})),e.d(n,"easeOutQuart",(function(){return l})),e.d(n,"easeInOutQuart",(function(){return h})),e.d(n,"easeInQuint",(function(){return p})),e.d(n,"easeOutQuint",(function(){return d})),e.d(n,"easeInOutQuint",(function(){return v})),e.d(n,"easeInSine",(function(){return y})),e.d(n,"easeOutSine",(function(){return _})),e.d(n,"easeInOutSine",(function(){return m})),e.d(n,"easeInExpo",(function(){return g})),e.d(n,"easeOutExpo",(function(){return b})),e.d(n,"easeInOutExpo",(function(){return w})),e.d(n,"easeInCirc",(function(){return O})),e.d(n,"easeOutCirc",(function(){return S})),e.d(n,"easeInOutCirc",(function(){return j})),e.d(n,"easeOutBounce",(function(){return M})),e.d(n,"easeInBack",(function(){return k})),e.d(n,"easeOutBack",(function(){return P})),e.d(n,"easeInOutBack",(function(){return A})),e.d(n,"elastic",(function(){return T})),e.d(n,"swingFromTo",(function(){return x})),e.d(n,"swingFrom",(function(){return E})),e.d(n,"swingTo",(function(){return I})),e.d(n,"bounce",(function(){return F})),e.d(n,"bouncePast",(function(){return C})),e.d(n,"easeFromTo",(function(){return D})),e.d(n,"easeFrom",(function(){return q})),e.d(n,"easeTo",(function(){return Q}));
/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */
/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */
var r=function(t){return t},i=function(t){return Math.pow(t,2)},u=function(t){return-(Math.pow(t-1,2)-1)},o=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},a=function(t){return Math.pow(t,3)},c=function(t){return Math.pow(t-1,3)+1},f=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},s=function(t){return Math.pow(t,4)},l=function(t){return-(Math.pow(t-1,4)-1)},h=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},p=function(t){return Math.pow(t,5)},d=function(t){return Math.pow(t-1,5)+1},v=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},y=function(t){return 1-Math.cos(t*(Math.PI/2))},_=function(t){return Math.sin(t*(Math.PI/2))},m=function(t){return-.5*(Math.cos(Math.PI*t)-1)},g=function(t){return 0===t?0:Math.pow(2,10*(t-1))},b=function(t){return 1===t?1:1-Math.pow(2,-10*t)},w=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},O=function(t){return-(Math.sqrt(1-t*t)-1)},S=function(t){return Math.sqrt(1-Math.pow(t-1,2))},j=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},M=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},k=function(t){var n=1.70158;return t*t*((n+1)*t-n)},P=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},A=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},T=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},x=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},E=function(t){var n=1.70158;return t*t*((n+1)*t-n)},I=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},F=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},C=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},D=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},q=function(t){return Math.pow(t,4)},Q=function(t){return Math.pow(t,.25)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n),e.d(n,"processTweens",(function(){return o.c})),e.d(n,"Tweenable",(function(){return o.a})),e.d(n,"tween",(function(){return o.d})),e.d(n,"interpolate",(function(){return I})),e.d(n,"Scene",(function(){return N})),e.d(n,"setBezierFunction",(function(){return z})),e.d(n,"unsetBezierFunction",(function(){return L}));var r={};e.r(r),e.d(r,"doesApply",(function(){return S})),e.d(r,"tweenCreated",(function(){return j})),e.d(r,"beforeTween",(function(){return M})),e.d(r,"afterTween",(function(){return k}));var i,u,o=e(0),a=/(\d|-|\.)/,c=/([^\-0-9.]+)/g,f=/[0-9.-]+/g,s=(i=f.source,u=/,\s*/.source,new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i,"\\)"),"g")),l=/^.*\(/,h=/#([0-9]|[a-f]){3,6}/gi,p=function(t,n){return t.map((function(t,e){return"_".concat(n,"_").concat(e)}))};function d(t){return parseInt(t,16)}var v=function(t){return"rgb(".concat((n=t,3===(n=n.replace(/#/,"")).length&&(n=(n=n.split(""))[0]+n[0]+n[1]+n[1]+n[2]+n[2]),[d(n.substr(0,2)),d(n.substr(2,2)),d(n.substr(4,2))]).join(","),")");var n},y=function(t,n,e){var r=n.match(t),i=n.replace(t,"VAL");return r&&r.forEach((function(t){return i=i.replace("VAL",e(t))})),i},_=function(t){for(var n in t){var e=t[n];"string"==typeof e&&e.match(h)&&(t[n]=y(h,e,v))}},m=function(t){var n=t.match(f).map(Math.floor),e=t.match(l)[0];return"".concat(e).concat(n.join(","),")")},g=function(t){return t.match(f)},b=function(t,n){var e={};return n.forEach((function(n){e[n]=t[n],delete t[n]})),e},w=function(t,n){return n.map((function(n){return t[n]}))},O=function(t,n){return n.forEach((function(n){return t=t.replace("VAL",+n.toFixed(4))})),t},S=function(t){var n=t._currentState;return Object.keys(n).some((function(t){return"string"==typeof n[t]}))};function j(t){var n=t._currentState;[n,t._originalState,t._targetState].forEach(_),t._tokenData=function(t){var n,e,r={};for(var i in t){var u=t[i];"string"==typeof u&&(r[i]={formatString:(n=u,e=void 0,e=n.match(c),e?(1===e.length||n.charAt(0).match(a))&&e.unshift(""):e=["",""],e.join("VAL")),chunkNames:p(g(u),i)})}return r}(n)}function M(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;!function(t,n){var e=function(e){var r=n[e].chunkNames,i=t[e];if("string"==typeof i){var u=i.split(" "),o=u[u.length-1];r.forEach((function(n,e){return t[n]=u[e]||o}))}else r.forEach((function(n){return t[n]=i}));delete t[e]};for(var r in n)e(r)}(i,u),[n,e,r].forEach((function(t){return function(t,n){var e=function(e){g(t[e]).forEach((function(r,i){return t[n[e].chunkNames[i]]=+r})),delete t[e]};for(var r in n)e(r)}(t,u)}))}function k(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;[n,e,r].forEach((function(t){return function(t,n){for(var e in n){var r=n[e],i=r.chunkNames,u=r.formatString,o=O(u,w(b(t,i),i));t[e]=y(s,o,m)}}(t,u)})),function(t,n){for(var e in n){var r=n[e].chunkNames,i=t[r[0]];t[e]="string"==typeof i?r.map((function(n){var e=t[n];return delete t[n],e})).join(" "):i}}(i,u)}function P(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?P(Object(e),!0).forEach((function(n){T(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function T(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var x=new o.a,E=o.a.filters,I=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=A({},t),a=Object(o.b)(t,r);for(var c in x._filters.length=0,x.set({}),x._currentState=u,x._originalState=t,x._targetState=n,x._easing=a,E)E[c].doesApply(x)&&x._filters.push(E[c]);x._applyFilter("tweenCreated"),x._applyFilter("beforeTween");var f=Object(o.e)(e,u,t,n,1,i,a);return x._applyFilter("afterTween"),f};function F(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return C(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function D(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function q(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Q(t,n){var e=n.get(t);if(!e)throw new TypeError("attempted to get private field on non-instance");return e.get?e.get.call(t):e.value}var B=new WeakMap,N=function(){function t(){D(this,t),B.set(this,{writable:!0,value:[]});for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(this.add.bind(this))}var n,e,r;return n=t,(e=[{key:"add",value:function(t){return Q(this,B).push(t),t}},{key:"remove",value:function(t){var n=Q(this,B).indexOf(t);return~n&&Q(this,B).splice(n,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Q(this,B).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return Q(this,B).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return Q(this,B).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return Q(this,B).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return Q(this,B).forEach((function(n){return n.stop(t)})),this}},{key:"tweenables",get:function(){return F(Q(this,B))}},{key:"promises",get:function(){return Q(this,B).map((function(t){return t._promise}))}}])&&q(n.prototype,e),r&&q(n,r),t}();function R(t,n,e,r,i,u){var o,a,c=0,f=0,s=0,l=0,h=0,p=0,d=function(t){return((c*t+f)*t+s)*t},v=function(t){return(3*c*t+2*f)*t+s},y=function(t){return t>=0?t:0-t};return c=1-(s=3*n)-(f=3*(r-n)-s),l=1-(p=3*e)-(h=3*(i-e)-p),o=t,a=function(t){return 1/(200*t)}(u),function(t){return((l*t+h)*t+p)*t}(function(t,n){var e,r,i,u,o,a;for(i=t,a=0;a<8;a++){if(u=d(i)-t,y(u)<n)return i;if(o=v(i),y(o)<1e-6)break;i-=u/o}if((i=t)<(e=0))return e;if(i>(r=1))return r;for(;e<r;){if(u=d(i),y(u-t)<n)return i;t>u?e=i:r=i,i=.5*(r-e)+e}return i}(o,a))}var z=function(t,n,e,r,i){var u=function(t,n,e,r){return function(i){return R(i,t,n,e,r,1)}}(n,e,r,i);return u.displayName=t,u.x1=n,u.y1=e,u.x2=r,u.y2=i,o.a.formulas[t]=u},L=function(t){return delete o.a.formulas[t]};o.a.filters.token=r}])}));
//# sourceMappingURL=shifty.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/esm/format.js ***!
  \***********************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/esm/utils/date.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");


/**
 * format a TDate into string
 * @param date
 * @param locale
 * @param opts
 */
var format = function (date, locale, opts) {
    // diff seconds
    var sec = Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["diffSec"])(date, opts && opts.relativeDate);
    // format it with locale
    return Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__["formatDiff"])(sec, Object(_register__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(locale));
};
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/esm/index.js ***!
  \**********************************************/
/*! exports provided: format, render, cancel, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en_US */ "./node_modules/timeago.js/esm/lang/en_US.js");
/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/zh_CN */ "./node_modules/timeago.js/esm/lang/zh_CN.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _register__WEBPACK_IMPORTED_MODULE_2__["register"]; });

/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ "./node_modules/timeago.js/esm/format.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _format__WEBPACK_IMPORTED_MODULE_3__["format"]; });

/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime */ "./node_modules/timeago.js/esm/realtime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _realtime__WEBPACK_IMPORTED_MODULE_4__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _realtime__WEBPACK_IMPORTED_MODULE_4__["cancel"]; });

/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */



Object(_register__WEBPACK_IMPORTED_MODULE_2__["register"])('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]);
Object(_register__WEBPACK_IMPORTED_MODULE_2__["register"])('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"]);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/en_US.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
/* harmony default export */ __webpack_exports__["default"] = (function (diff, idx) {
    if (idx === 0)
        return ['just now', 'right now'];
    var unit = EN_US[Math.floor(idx / 2)];
    if (diff > 1)
        unit += 's';
    return [diff + " " + unit + " ago", "in " + diff + " " + unit];
});
//# sourceMappingURL=en_US.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/zh_CN.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
/* harmony default export */ __webpack_exports__["default"] = (function (diff, idx) {
    if (idx === 0)
        return ['刚刚', '片刻后'];
    var unit = ZH_CN[~~(idx / 2)];
    return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
});
//# sourceMappingURL=zh_CN.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/realtime.js ***!
  \*************************************************/
/*! exports provided: cancel, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/timeago.js/esm/utils/dom.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/esm/utils/date.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");



// all realtime timer
var TIMER_POOL = {};
/**
 * clear a timer from pool
 * @param tid
 */
var clear = function (tid) {
    clearTimeout(tid);
    delete TIMER_POOL[tid];
};
// run with timer(setTimeout)
function run(node, date, localeFunc, opts) {
    // clear the node's exist timer
    clear(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getTimerId"])(node));
    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;
    // get diff seconds
    var diff = Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__["diffSec"])(date, relativeDate);
    // render
    node.innerText = Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__["formatDiff"])(diff, localeFunc);
    var tid = setTimeout(function () {
        run(node, date, localeFunc, opts);
    }, Math.min(Math.max(Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__["nextInterval"])(diff), minInterval || 1) * 1000, 0x7fffffff));
    // there is no need to save node in object. Just save the key
    TIMER_POOL[tid] = 0;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["setTimerId"])(node, tid);
}
/**
 * cancel a timer or all timers
 * @param node - node hosting the time string
 */
function cancel(node) {
    // cancel one
    if (node)
        clear(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getTimerId"])(node));
    // cancel all
    // @ts-ignore
    else
        Object.keys(TIMER_POOL).forEach(clear);
}
/**
 * render a dom realtime
 * @param nodes
 * @param locale
 * @param opts
 */
function render(nodes, locale, opts) {
    // by .length
    // @ts-ignore
    var nodeList = nodes.length ? nodes : [nodes];
    nodeList.forEach(function (node) {
        run(node, Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getDateAttribute"])(node), Object(_register__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(locale), opts || {});
    });
    return nodeList;
}
//# sourceMappingURL=realtime.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/register.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/register.js ***!
  \*************************************************/
/*! exports provided: register, getLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
/**
 * All supported locales
 */
var Locales = {};
/**
 * register a locale
 * @param locale
 * @param func
 */
var register = function (locale, func) {
    Locales[locale] = func;
};
/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
var getLocale = function (locale) {
    return Locales[locale] || Locales['en_US'];
};
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/date.js ***!
  \***************************************************/
/*! exports provided: toDate, formatDiff, diffSec, nextInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDiff", function() { return formatDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffSec", function() { return diffSec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextInterval", function() { return nextInterval; });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var SEC_ARRAY = [
    60,
    60,
    24,
    7,
    365 / 7 / 12,
    12,
];
/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
function toDate(input) {
    if (input instanceof Date)
        return input;
    // @ts-ignore
    if (!isNaN(input) || /^\d+$/.test(input))
        return new Date(parseInt(input));
    input = (input || '')
        // @ts-ignore
        .trim()
        .replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    return new Date(input);
}
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns
 */
function formatDiff(diff, localeFunc) {
    /**
     * if locale is not exist, use defaultLocale.
     * if defaultLocale is not exist, use build-in `en`.
     * be sure of no error when locale is not exist.
     *
     * If `time in`, then 1
     * If `time ago`, then 0
     */
    var agoIn = diff < 0 ? 1 : 0;
    /**
     * Get absolute value of number (|diff| is non-negative) value of x
     * |diff| = diff if diff is positive
     * |diff| = -diff if diff is negative
     * |0| = 0
     */
    diff = Math.abs(diff);
    /**
     * Time in seconds
     */
    var totalSec = diff;
    /**
     * Unit of time
     */
    var idx = 0;
    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
        diff /= SEC_ARRAY[idx];
    }
    /**
     * Math.floor() is alternative of ~~
     *
     * The differences and bugs:
     * Math.floor(3.7) -> 4 but ~~3.7 -> 3
     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
     *
     * More information about the performance of algebraic:
     * https://www.youtube.com/watch?v=65-RbBwZQdU
     */
    diff = Math.floor(diff);
    idx *= 2;
    if (diff > (idx === 0 ? 9 : 1))
        idx += 1;
    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
}
/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param relativeDate
 * @returns {number}
 */
function diffSec(date, relativeDate) {
    var relDate = relativeDate ? toDate(relativeDate) : new Date();
    return (+relDate - +toDate(date)) / 1000;
}
/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/
function nextInterval(diff) {
    var rst = 1, i = 0, d = Math.abs(diff);
    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
        diff /= SEC_ARRAY[i];
        rst *= SEC_ARRAY[i];
    }
    d = d % rst;
    d = d ? rst - d : rst;
    return Math.ceil(d);
}
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
  \**************************************************/
/*! exports provided: getDateAttribute, setTimerId, getTimerId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateAttribute", function() { return getDateAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimerId", function() { return setTimerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimerId", function() { return getTimerId; });
var ATTR_TIMEAGO_TID = 'timeago-id';
/**
 * get the datetime attribute, `datetime` are supported.
 * @param node
 * @returns {*}
 */
function getDateAttribute(node) {
    return node.getAttribute('datetime');
}
/**
 * set the node attribute, native DOM
 * @param node
 * @param timerId
 * @returns {*}
 */
function setTimerId(node, timerId) {
    // @ts-ignore
    node.setAttribute(ATTR_TIMEAGO_TID, timerId);
}
/**
 * get the timer id
 * @param node
 */
function getTimerId(node) {
    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
}
//# sourceMappingURL=dom.js.map

/***/ })

}]);