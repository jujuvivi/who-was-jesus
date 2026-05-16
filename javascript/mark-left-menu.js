/* ==========================
Left Menu Builder Data and Builder for Gospel of Mark
========================== */
'use strict';

if (typeof fctj === 'undefined') {
    var fctj = {};
}

fctj.menu = {
    write: function(headerSel, sPageTitle) {
        const parentElmt = document.getElementById('js-menu');
        const aIntro = [
            ['index.html', 'Home', 'index'],
            // Intro
            [
                ['intro', 'Introduction'],
                ['author', 'Author of Mark'],
                ['date', 'Date of Composition'],
                ['place', 'Place of Composition'],
                ['sources', "Sources of Mark"],
                ['interp', 'Interpreting Mark'],
            ],
            ['GMark_method.html', 'Methodology', 'method'],
            ['GMarkrefs.html', 'List of References', 'ref'],
        ];

        // const fullMenu = [
        //     ['index.html', 'Home', 'index'],
        //     {
        //         title: ['GMark_intro.html', 'Index'],
        //         pages: [
        //             ['intro', 'Introduction'],
        //             ['author', 'Author of Mark'],
        //             ['date', 'Date of Composition'],
        //             ['place', 'Place of Composition'],
        //             ['sources', "Sources of Mark"],
        //             ['interp', 'Interpreting Mark']
        //         ]
        //     },
        //     ['GMark_method.html', 'Methodology', 'method'],
        //     ['GMarkrefs.html', 'List of References', 'ref'],
        //     {
        //         title: ['GMark01.html', 'Ministry in Galilee'],
        //         pages: [
        //             { title: 'Chapter 1',
        //               pages: [
        //                 ['1.p.1.11', '<span class="bsrc">1-11</span> John the Baptist'],
        //                 ['1.p.12.13', '<span class="bsrc">12-13</span> Temptations'],
        //                 ['1.p.14.20', '<span class="bsrc">14-20</span> Calls Disciples'],
        //                 ]
        //             }
        //         ]
        //     }
        // ];

        const aChaptMinistry = [
            // chapter 1
            [
                [11, 'John the Baptist'],
                [13, 'Temptations'],
                [20, 'Calls Disciples'],
                [28, 'Exorcises Demons'],
                [39, "Heals Peter's Mother-in-Law"],
                [45, 'Heals a Leper'],
                ['Excursus: Chiastic Structures'],
            ],
            ['GMark_chiasm.html', 'Appendix: Annoted Chiastic Structures', 'chias-page'],
            // chapter 2
            [
                [12, 'Heals a Paralytic'],
                [17, 'Calls Levi the Tax Collector'],
                [22, 'Bridegroom Saying'],
                [28, 'Conflict with Pharisees'],
                ['Excursus: Markan Interreferences'],
            ],
            // chapter 3
            [
                [6, 'Heals a Withered Arm', 2],
                [12, 'Followed by a Crowd', 2],
                [19, 'Appoints the Twelve', 3],
                [30, 'A House Divided', 3],
                [35, 'Who is my Family?', 2],
                ['Excursus: Mark-Q Overlaps'],
            ],
            // chapter 4
            [
                [20, 'Parable of the Sower'],
                [25, 'Sayings about the Lamp'],
                [29, 'Kingdom is like Seed Scattered'],
                [34, 'Parable of the Mustard Seed'],
                [41, 'Stills a Storm'],
                ['Excursus: Are the Miracles Historical?'],
            ],
            // chapter 5
            [
                [20, 'Heals the Gerasene Demoniac'],
                [43, "Raises Jairus' Daughter and Heals the Bleeding Woman"],
                ['Excursus: Literary Structures'],
            ],
            // chapter 6
            [
                [6, 'Rejected at Home'],
                [13, 'Sends out Apostles'],
                [29, 'Herod Executes John the Baptist'],
                [44, 'Feeds 5,000'],
                [56, 'Walks on Water'],
                ['Excursus: Mark without Bethsaida'],
            ],
            // chapter 7
            [
                [23, 'Eating with Unwashed Hands'],
                [30, 'Heals the Daughter of a Woman'],
                [37, 'Heals a Man with Deafness'],
                ['Excursus: Prophecy Fufilled or History Created?'],
            ],
            // chapter 8
            [
                [13, 'Feeds 4,000'],
                [21, '<span style="font-size:16px">Beware Leaven of Herod & Pharisees</span>'],
                [26, 'Heals a Blind Man'],
                [33, 'First Passion Prediction'],
                [38, 'Commandments to Follow Jesus'],
                ['Excursus: What is the Historical Yield?'],
            ],
            // chapter 9
            [
                [13, 'Transfigured'],
                [29, 'Heals an Epileptic'],
                [37, 'Second Passion Prediction'],
                [41, 'Whoever is not with me is against me'],
                [50, 'Cut your Hand'],
                ['Excursus: Was it Meant to be Performed?'],
            ],
            // chapter 10
            [
                [12, 'Teachings on Divorce'],
                [16, 'Kingdom Belongs to children'],
                [31, 'Rich Getting into Heaven'],
                [34, 'Third Passion Prediction'],
                [45, 'James & John Asking Jesus'],
                [52, 'Heals of blind Bar-Timaeus'],
                ['Excursus: Dependence on Pauline Letters?'],
            ]
        ];

        const aChaptPassion = [
            // chapter 11
            [
                [11, 'Enters Jerusalem'],
                [14, 'Curses the Fig Tree'],
                [19, 'Cleanses the Temple'],
                [25, 'Fig Tree Redux'],
                [33, "Source of Authority"],
                ['Excursus: Temple-Focused'],
            ],
            // chapter 12
            [
                [12, 'Parable of the Tenants'],
                [17, 'Render to Caesar'],
                [27, 'Marriage After Resurrection'],
                [34, 'The Greatest Commandment'],
                [44, 'Poor Widow Gives Everything'],
                ['Excursus: The Gospel of Thomas'],
            ],
            // chapter 13
            [
                [31, 'Predicts the Fall of Temple'],
                [37, 'Parable of the Watcher'],
                ['Excursus: Community and Geography'],
            ],
            // chapter 14
            [
                [11, 'Anointed and Betrayed'],
                [25, 'Last Supper'],
                [31, "Predicts Peter's Betrayal"],
                [42, 'Garden of Gethsemane'],
                [52, 'Arrested'],
                [65, 'Tried Before the Sanhedrin'],
                [72, 'Peter Denies Jesus 3 times'],
                ['Excursus: the Naked Young Man of 51-52'],
            ],
            // chapter 15
            [
                [15, 'Tried Before Pilate'],
                [20, "Mocked by Roman Soldiers"],
                [32, 'Crucified'],
                [39, 'Dies'],
                [41, 'Women Watching'],
                [47, 'Burried by Joseph of Arimathea'],
                ['Excursus: Arguments for Markan Priority'],
            ],
            // chapter 16
            [
                [8, 'Finding Tomb Empty'],
                ['Excursus: The Missing Ending of Mark'],
            ]
        ];

        const fragment = document.createDocumentFragment();

        // Write left menu title
        let div = document.createElement('div');
        div.classList.add('menu-title', 'showLR-block');
        div.innerHTML = 'Historical Commentary<br>on the Gospel of Mark';
        fragment.appendChild(div);

        // Accroche (none)
        // Author
        div = document.createElement('div');
        div.classList.add('lm-author');
        div.textContent = 'by Mickael Turton';
        fragment.appendChild(div);

        // write Left menu
        this._writeLeftAndTopMenu(aIntro, aChaptMinistry, aChaptPassion, fragment);
        parentElmt.appendChild(fragment);

        // write Top menu
        // Header
        const elmtInnerTop = this._writeHeader(headerSel, sPageTitle);
        this._writeLeftAndTopMenu(aIntro, aChaptMinistry, aChaptPassion, elmtInnerTop, headerSel);
    },

    _writeHeader: function(headerSel, pageTitle) {
        //return;
        let sPageTitle = typeof headerSel === 'number' ? 'Gospel of Mark Chapter ' + headerSel : (pageTitle || 'Index');
        if (!sPageTitle.includes('<span ')) {
            sPageTitle = "<span class='page-title'>" + sPageTitle + "</span>";
        }// else if (sPageTitle.endsWith('</span>')) {

        const elmtHeader = document.getElementById('top-panel');

        // Add Button
        elmtHeader.innerHTML = `<button type="button" id="toggleMenu" class="toggle_menu" style="width:40px">
                    <i class="fa fa-bars"></i>
                </button>
                <div class="flex-row mark-gospel">
                    <div class="flex-column coltitle showHRinit" onclick="closeSpanVisibility('btn_top-menu')">
                            <div class="maintitle">
                                <a class="hide-ui-link" href="./index.html">Historical Commentary<br>on the Gospel of Mark</a>
                            </div>
                            <!-- <div class="accrochetitle">Michael A. Turton</div> -->
                    </div>
                    <div class="flex-column flex-title">
                        <div class="page-title-cont"><a id="btn_top-menu_link" class="local_link no-underline" href="#"
                            onclick="return toggleSpanVisibility(this, 'btn_top-menu')">
                            ${sPageTitle}</a>
                            <a class="whowasjesus" href="../index.html#great-myst">Who&nbsp;was<br>Jesus</a></div>
                        <div class="top-menu-cont" onclick="closeSpanVisibility('btn_top-menu')">
                            <div id="topjsmenu" class="link_target btn_top-menu js-menu vertical_nav" style="padding-top:0px">
                                <ul id="inner-top-panel" class="SpacingTop5 header-top-menu">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`;

        const innerTop = document.getElementById('inner-top-panel');
        return innerTop;
    },

    _writeLeftAndTopMenu: function(aIntro, aChaptMinistry, aChaptPassion, parentElmt, headerSel) {
        // Intro
        let part = this._writePartMenu(aIntro, 'Index', 'intro', headerSel);
        parentElmt.appendChild(part);

        // Ministry in Galilee
        part = this._writePartMenu(aChaptMinistry, 'Ministry in Galilee', 1, headerSel);
        parentElmt.appendChild(part);

        // Passion in Jerusalem
        part = this._writePartMenu(aChaptPassion, 'Passion in Jerusalem', 11, headerSel);
        parentElmt.appendChild(part);
    },

    _writePartMenu: function(aChapters, title, nChapt, headerSel) {
        const isStrChapter = typeof nChapt === 'string',
            divMinistry = document.createElement('div');
        divMinistry.classList.add('no_page_sel');

        if (!isStrChapter) {
            const divMinistTitle = document.createElement('div');
            divMinistTitle.classList.add('mtitle1');
            divMinistTitle.textContent = title;
            //divMinistTitle.style.paddingLeft = '10px';
            divMinistTitle.style.textAlign = 'center';
            divMinistry.appendChild(divMinistTitle);
        }

        const ulMinistry = document.createElement('ul');
        divMinistry.appendChild(ulMinistry);

        for(let aChaptItems of aChapters) {
            const liChapt = document.createElement('li');
            ulMinistry.appendChild(liChapt);

            const isMultiPage = Array.isArray(aChaptItems[0]);
            if (!isMultiPage) {
                const linkItem = document.createElement('a');
                linkItem.classList.add('nav-link-' + (aChaptItems[2] ?? nChapt));
                linkItem.href = './' + aChaptItems[0];
                linkItem.textContent = aChaptItems[1];

                liChapt.appendChild(linkItem);
                continue;
            }

            if (headerSel && (nChapt !== headerSel)) {
                liChapt.classList.add('menu--item'); //('menu--subitens__opened');
            } else {
                liChapt.classList.add('menu--item', 'menu--item__has_sub_menu'); //, 'menu--subitens__opened'); // To remove menu--subitens__opened
                if (nChapt === headerSel) {
                    liChapt.classList.add('menu--subitens__opened'); //, 'menu--subitens__opened'); // To remove menu--subitens__opened
                }
            }

            // Div chapter title
            const divChapt = document.createElement('div');
            liChapt.appendChild(divChapt);

            const linkChapt = document.createElement('a');
            linkChapt.classList.add('menu--link');
            linkChapt.textContent = isStrChapter ? title : ('Chapter ' + nChapt);
            linkChapt.dataset.submenu = 'submenu-' + nChapt;
            divChapt.appendChild(linkChapt);

            // ToDo, make it generic regarding page
            const DEFAULT_PAGE = 'GMark_intro.html';

            // UL chapter items
            if (headerSel && (nChapt !== headerSel)) {
                linkChapt.classList.remove('menu--link');
                if (typeof nChapt !== 'number') {
                    linkChapt.href = './' + DEFAULT_PAGE;
                } else {
                    linkChapt.href = './GMark' + String(nChapt).padStart(2, '0') + '.html';
                }
            } else {
                const ulChapt = document.createElement('ul');
                ulChapt.id = 'submenu-' + nChapt;
                ulChapt.classList.add('sub_menu');
                liChapt.appendChild(ulChapt);

                let startVerset = 1,
                    endVerset = 0;
                for(let i = 0; i < aChaptItems.length; i++) {
                    // <li class="sub_menu--item"><a class="nav-link-wheretoday" href="./GMark/GMark01.html#1.p.1.8"><span class="bsrc">1-11</span> John the Baptist</a></li>
                    const aItemData = aChaptItems[i];
                    
                    const liItem = document.createElement('li');
                    liItem.classList.add('sub_menu--item');

                    const linkItem = document.createElement('a');
                    linkItem.classList.add('nav-link-' + nChapt);
                    // For testing
                    if (aItemData[2] && Number(aItemData[2])) { //nChapt === 3 && i === 0) {
                        linkItem.dataset.tab_length = Number(aItemData[2]);
                    }
                    liItem.appendChild(linkItem);

                    const isExcursus = aItemData.length < 2,
                        isText = !isExcursus && typeof aItemData[0] === 'string';

                    if (isExcursus) {
                        if (typeof nChapt !== 'number') {
                            linkItem.href = './' + DEFAULT_PAGE + '#' + nChapt + 'X';
                        } else {
                            linkItem.href = './GMark' + String(nChapt).padStart(2, '0') + '.html#' + nChapt + 'X';
                        }
                        linkItem.innerHTML = aItemData[0];
                    } else if (isText) {
                        
                        //aChaptItems[0][0];
                        linkItem.href = './' + DEFAULT_PAGE + (aItemData[0] ? '#' + aItemData[0] : '');
                        linkItem.innerHTML = aItemData[1];
                    } else {
                        endVerset = aItemData[0];
                        linkItem.href = './GMark' + String(nChapt).padStart(2, '0') + '.html#' + nChapt + '.p.' + startVerset + '.' + endVerset;
                        linkItem.innerHTML = '<span class="bsrc">' + startVerset + '-' + endVerset + '</span> ' + aItemData[1];
                        startVerset = endVerset + 1;
                    }
                    ulChapt.appendChild(liItem);
                }
            }
            if (!isStrChapter) nChapt++;
        }
        return divMinistry;
    }
};
