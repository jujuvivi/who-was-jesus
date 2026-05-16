/* ==========================
Vertical Responsive Menu
========================== */
'use strict';

//function clickLeftMenu(menu) {
    // close it if needed
//}

//var _toggleMenu; //called by inner frame

// var tid = setInterval(function () {
//     if (document.readyState !== 'complete') return;
//     clearInterval(tid);

if (typeof fctj === 'undefined') {
    var fctj = {};
}

//Object.assign(
fctj.startLeftMenu = function() {
    const querySelector = document.querySelector.bind(document);

    const wrapper = document.querySelector('.layout-bottom');

    // Left menu
    const nav = document.querySelector('nav.vertical_nav'),
        menu = document.getElementById("js-menu"),
        subnavs = menu.querySelectorAll('.menu--item__has_sub_menu');

    // Tablets have no vert scrollbars so menu can be smaller
    // to allow 10px of additional separation with right content
    const scrollbarWidth = nav.offsetWidth - nav.clientWidth;
    if (scrollbarWidth < 10) {
        menu.style.width = (380 - Math.min(10-scrollbarWidth, 10)) + 'px';
    }

    // Header menu
    const menuHeader = document.getElementById('topjsmenu'),
        subnavsHeader = menuHeader.querySelectorAll('.menu--item__has_sub_menu');

    const btnToggleMenu = document.getElementById('toggleMenu'); //querySelector('.toggle_menu');

    // Event Handler onclick on top menu
    const toggleMenu = (evt, elmtClicked) => {
        //console.log('toggleMenu', evt);
        // close also header menu
        if ((evt === true) && !nav.classList.contains('vertical_nav__opened')) return;

        if (elmtClicked?.classList?.contains?.('toggle_menu')) evt.stopPropagation();

        closeSpanVisibility('btn_top-menu');
        nav.classList.toggle('vertical_nav__opened');
        wrapper.classList.toggle('toggle-content');
    }
    
    fctj.toggleMenu = toggleMenu;

    nav.onclick = (evt) => {
        const linkClicked = evt.target;
        if (linkClicked.tagName === 'A' && !linkClicked.classList.contains('menu--link')) {
            if (document.defaultView.getComputedStyle(btnToggleMenu).display !== 'none') { // none means we are in high width mode, menu stays open all the time.
                toggleMenu();
            }
            //else {
                // const iHash = linkClicked.href.indexOf('#');
                // if (iHash > -1) {
                //     let hashClicked = linkClicked.href.substring(iHash+1),
                //         hashCurrent = window.location.hash.substring(1);
                //     if (hashClicked === hashCurrent) {
                //         // there will be no change => no hash change => no scrolling
                //         //if (linkClicked
                //         const iEquals = hashClicked.indexOf('=');
                //         if (iEquals > -1) {
                //             hashClicked = hashClicked.substring(0, iEquals) + '_submenu';
                //         }
                //         //const iframeInstance = document.getElementById("iframe"),
                //         //const elmtToScroll = iframeInstance.contentWindow.document.getElementById(hashClicked);
                //         //const elmtToScroll = document.getElementById(hashClicked);
                //         //if (elmtToScroll) {
                //         //    elmtToScroll.scrollIntoView();
                //         //} else {
                //         //    console.error('Element', hashClicked, 'to scroll not found in iframe');
                //         //}
                //     }
                // }
            //}
        }
    };

    const layoutRight = document.getElementsByClassName('layout-right');
    if (layoutRight[0]) layoutRight[0].onclick = () => toggleMenu(true);

    // Toggle menu click
    if (btnToggleMenu) btnToggleMenu.onclick = toggleMenu;

    // Minify menu on menu_minifier click
    (querySelector('.collapse_menu') || {}).onclick = function () {

        nav.classList.toggle('vertical_nav__minify');

        wrapper.classList.toggle('wrapper__minify');

        for (var j = 0; j < subnavs.length; j++) {
            subnavs[j].classList.remove('menu--subitens__opened');
        }

    };

    // Open Sub Menu
    function addClickListener(subnavs, isHeader) {
        for (var i = 0; i < subnavs.length; i++) {
            if (subnavs[i].classList.contains('menu--item__has_sub_menu')) {
                const listLinks = subnavs[i].querySelector('.menu--link');
                if (listLinks) {
                    listLinks.addEventListener('click', function (e) {
                        //for (var j = 0; j < subnavs.length; j++) {
                        //if(e.target.offsetParent != subnavs[j])
                        //  subnavs[j].classList.remove('menu--subitens__opened');          
                        //}
                        // not good
                        //menu--item__has_sub_menu
                        //const elmt = e.target.offsetParent;
                        // if (!elmt.classList.contains('menu--item__has_sub_menu')) {
                        //     elmt = elmt.parentElement;
                        // }
                        fctj.scrollMgr.toggleOpenClose(e.target.offsetParent, isHeader);
                        //console.log(elmt);
                        //closeSpanVisibility('btn_top-menu'); // ugly patch to hide top menu
                        e.stopPropagation(); // because click on top menu drawers would close top menu.
                        // 
                    }, false);
                }
            }
        }
    }

    addClickListener(subnavs);
    addClickListener(subnavsHeader, true);

    // Open menu at start
    //if (window.innerWidth < 1100) {
    //  toggleMenu();
    //}
//}, 100);
};
