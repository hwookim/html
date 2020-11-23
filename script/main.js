import FULLPAGE_KEY from "../secret";

function init() {
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: FULLPAGE_KEY,
        anchors:['1st', '2nd', '3rd', '4th', '6th', '7th'],
        navigation: true,
        navigationTooltips: ['Video', 'Home', 'History', 'etc'],
        slidesNavigation: true
    });
}

init();