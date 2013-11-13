/*******************************************************************************

    Title :  
    Date  :  January 2013
    Author:  Suitmedia (http://www.suitmedia.com)

********************************************************************************/

var Site = {

    init: function() {
        Site.fastClick();
        Site.enableActiveStateMobile();
        Site.windowsPhoneViewportFix();
    },

    fastClick: function() {
    	FastClick.attach(document.body);
    },

    enableActiveStateMobile: function(){
        document.addEventListener('touchstart', function(){}, true);
    },

    windowsPhoneViewportFix: function() {
        /** 
         * Fix windows phone viewport bug
         * http://timkadlec.com/2013/01/windows-phone-8-and-device-width 
         */
         
        if(navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement("style"),
                fix             = document.createTextNode("@-ms-viewport{width:auto!important}");

            msViewportStyle.appendChild(fix);
            document.getElementsByTagName('head')[0].appendChild(msViewportStyle);
        }
    }

};


$(function() {
    Site.init();
});
