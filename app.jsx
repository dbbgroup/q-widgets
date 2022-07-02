function displayQWidget(qwWidget, qwType, qwValue) {
    var root = document.querySelector('#qwidgets-display');
    root.innerHTML = '<link rel="stylesheet" type="text/css" href="app.css">';

    switch (qwWidget) {
        case 1: //Captcha
            var container = document.createElement('div');
            container.className = "qw__captcha-container";
            root.appendChild(container);

            var qwDisplay = document.querySelector('.qw__captcha-container');
            qwDisplay.innerHTML = "CAPTCHA";
        break;
        
        case 2: //Ad banners
            var container = document.createElement('div');
            container.className = "qw__ads-container";
            root.appendChild(container);

            var qwDisplay = document.querySelector('.qw__ads-container');
            qwDisplay.innerHTML = "ADS";
        break;
        
        case 3: //Videoplayer
            var container = document.createElement('div');
            container.className = "qw__video-container";
            root.appendChild(container);

            var qwDisplay = document.querySelector('.qw__video-container');
            qwDisplay.innerHTML = "VIDEOPLAYER";
        break;
    }
}