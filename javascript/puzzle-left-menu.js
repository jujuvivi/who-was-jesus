/* ==========================
Left Menu Builder Data and Builder for Jesus Puzzle
========================== */
'use strict';

if (typeof fctj === 'undefined') {
    var fctj = {};
}

fctj.menu = {
    path: './',
    write: function (headerSel, sPageTitle, sPath) {
        this.path = sPath || './';
        const parentElmt = document.getElementById('js-menu');

        const fullMenu = [
            [['../index.html', 'Home', 'index']],
            {
                title: ['The Jesus Puzzle in a Nutshell', 'nutshell', true],
                pages: [
                    ['../main/nutshell.html#part1', 'Part One - Pieces in the Puzzle'],
                    ['../main/nutshell.html#part2', 'Part Two - Problem Solutions to the Puzzle'],
                    ['../main/nutshell.html#part3', 'Part Three - Solving the Jesus Puzzle'],
                    ['../main/puzzle.html', 'Jesus Puzzle in 12 Easy Pieces', '12easypuz'],
                ]
            },
            {
                title: ['The Sound of Silence', 'sdsil', true],
                pages: [
                    ['../silence/silintro.html', 'Introduction', 'silintro'],
                    ['../silence/siltop20.html', 'Top 20', 'siltop20'],
                    ['../silence/silrom.html', 'Romans', 'silrom'],
                    ['../silence/silcor.html', '1 & 2 Corinthians', 'silcor'],
                    ['../silence/silgals.html', 'Galatians, Ephesians, Colossians, Philip.', 'silgals'],
                    ['../silence/silthess.html', '1 & 2 Thessalonians, 1 & 2 Timothy, Titus', 'silthess'],
                    ['../silence/silhebrs.html', 'Hebrews', 'silhebrs'],
                    ['../silence/siljampe.html', 'James, 1 & 2 Peter', 'siljampe'],
                    ['../silence/siljohns.html', '1 & 2 John, Jude, Revelation', 'siljohns'],
                    ['../silence/sil20arg.html', '20 Arguable References to the Gospel Jesus', 'sil20arg'],
                    ['../silence/silpost.html', 'Postscript (with response to J.P. Holding)', 'silpost'],
                ]
            },
            {
                title: ['Main Articles', 'maina'],
                pages: [
                    ['../main/preamble.html', 'Preamble - Was There No Historical Jesus?', 'preamble'],
                    ['../main/partone.html', '1 - A Conspiracy of Silence', 'partone'],
                    ['../main/parttwo.html', '2 - Who Was Christ Jesus?', 'parttwo'],
                    ['../main/partthre.html', '3 - The Evolution of Jesus of Nazareth', 'partthre'],
                    ['../main/postscpt.html', 'Postscript', 'postscpt'],
                    ['../main/century2.html', 'The Second Century Apologists', 'century2'],
                    // ['GMark_chiasm.html', 'Appendix: Annoted Chiastic Structures', 'chias-page'],
                ]
            },
            {
                title: ['Supplementary', 'suppl'],
                pages: [
                    ['../supp/supp01.html', '1: Apollos of Alexandria', 'supp01'], // & the Early Christian Apostolate
                    ['../supp/supp02.html', '2: A Solution to the First Epistle of John', 'supp02'],
                    ['../supp/supp03.html', '3: Who Crucified Jesus?', 'supp03'],
                    ['../supp/supp04.html', '4: The Odes of Solomon', 'supp04'],
                    ['../supp/supp05.html', '5: Tracing the Christian Lineage in Alexandria', 'supp05'],
                    ['../supp/supp06.html', "6: The Source of Paul's Gospel", 'supp06'],
                    ['../supp/supp07.html', '7: Transfigured on the Holy Mountain', 'supp07'], // The Beginnings of Christianity
                    ['../supp/supp08.html', '8: Christ as "Man"', 'supp08'], // Does Paul Speak of Jesus as an Historical Person?
                    ['../supp/supp09.html', '9: The Son in the Epistle to the Hebrews', 'supp09'], // A Sacrifice In Heaven:
                    ['../supp/supp10.html', '10: Reopening the Josephus Question', 'supp10'], // Josephus Unbound: 
                    ['../supp/supp11.html', '11: The Gospel According to the Prophet John', 'supp11'], // Revelation: 
                    ['../supp/supp12One.html', '', 'supp12'], // at the Turn of the Second Century Crossing the Threshold of History:
                    {
                        title: ['12: Jesus in the Apostolic Fathers'], // 'apofat'
                        pages: [
                            ['../supp/supp12One.html#top', '1 Clement - <a href="#_path_#../supp/supp12One.html#shepher">The Shepherd of Hermas</a>', 'clement'],
                            ['../supp/supp12Two.html#top', 'Barnabas - <a href="#_path_#../supp/supp12Two.html#ignace">Ignatius</a>', 'barna'],
                        ]
                    },
                    {
                        title: ['13: The Mystery Cults and Christianity'],
                        pages: [
                            ['../supp/supp13A.html', 'A. Introduction and Survey of the Cults', 'supp13A'],
                            ['../supp/supp13B.html', 'B. Comparing the Cults and Christianity', 'supp13B'],
                            ['../supp/supp13C.html', "C. G. Wagner's Baptism & Pagan Mysteries", 'supp13C'],
                            ['../supp/supp13D.html', 'D. A Cult of Parallels: Pagan Myths & Jesus', 'supp13D'],
                        ]
                    },
                    ['../supp/supp14One.html', '14: The Cosmic Christ<span style="font-size: 14px"> of Hebrews <a style="display:inline" href="#_path_#../supp/supp14Two.html">Part 2</a> <a style="display:inline" href="#_path_#../supp/supp14Three.html">Part 3</a></span>', 'supp14'],
                    //['../supp/supp14One.html', '', 'supp14'], // (in three parts)
                    ['../supp/supp15.html', '15: "Born of Woman"? Reexamining Gal. 4:4', 'supp15'],
                    ['../supp/supp16.html', '16: Josephus on the Rocks', 'supp16'],
                ]
            },
            {
                title: ['Critiques & Feedback', 'crifeed'],
                pages: [
                    {
                        title: ['Critiques of the Mythicist Case', 'revdis_cri'], // crimyth
                        pages: [
                            ['../critics/muller1.html', 'B. Muller', 'mulcrit1'],
                            ['../critics/gakusei1.html', 'Gakusei Don <a href="#_path_#../critics/gakusei2.html">Part 2</a> <a href="#_path_#../critics/aliet-gakusei.html">Part 3 by J. Aliet</a>', 'gakcrit'],
                            ['../critics/licona.html', 'M. Licona', 'miklic'],
                            ['../critics/goguel.html', 'S.J. Case, M. Goguel', 'casegoguel'],
                            ['../critics/france.html', 'R.T. France, G.N. Stanton, M. Smith, I. Wilson', 'frstanton'],
                            ['../critics/voorst.html', 'R.E. Van Voorst', 'rvoorst'],
                            ['../critics/zeichman.html', "C. Zeichman", 'chrzeic'],
                            ['../critics/gakusei-JNGNM.html', 'GakuseiDon (Book Review of JNGNM)', 'gakudon'],
                            ['../critics/hoad.html', 'J. Hoad', 'hoadpuz'],
                            ['../critics/holding.html', 'J.P. Holding', 'pathol'],
                            ['../critics/fredriksen.html', 'P. Fredriksen & Others', 'paufred'],
                            ['../critics/gibson.html', 'J. Gibson and Me', 'jefgib'],
                            ['../critics/DebatesFelix.html', 'Minucius Felix on IIDB', 'minfelix'],
                            ['../critics/DebatesAscension.html', 'The Ascension of Isaiah on IIDB', 'ascisai'],
                        ]
                    },
                    {
                        title: ["Reader Feedback and Author's Response", 'revdis_fee'], // feedres
                        pages: [
                            // Add Fredriksen and Carrier ?
                            ['../rfset/amazon.html', 'Reviews posted on Amazon', 'amzread'],
                            ['../rfset/rfindex.html', 'Feedback and Author’s Response', 'rfauth'],
                            ['../rfset/rfset1.html', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1999</span>', 'rf1'],
                            ['../rfset/rfset1a.html', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000', 'rf2'],
                            ['../rfset/rfset1b.html', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2001', 'rf3'],
                            ['../rfset/rfset1c.html', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2002-2004', 'rf4'],
                            ['../rfset/rfset1d.html', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2005-2010', 'rf5'],
                            // ['rfset28.html', 'rfset28'],
                            // ['rfset27.html', 'rfset27'],
                            // ['rfset26.html', 'rfset26'],
                            // ['rfset25.html', 'rfset25'],
                            // ['rfset24.html', 'rfset24'],
                            // ['rfset23.html', 'rfset23'],
                            // ['rfset22.html', 'rfset22'],
                            // ['rfset21.html', 'rfset21'],
                            // ['rfset20.html', 'rfset20'],
                            // ['rfset19.html', 'rfset19'],
                            // ['rfset18.html', 'rfset18'],
                            // ['rfset17.html', 'rfset17'],
                            // ['rfset16.html', 'rfset16']
                        ]
                    }
                ]
            },
            {
                title: ['Reviews', 'revdis'],
                pages: [
                    {
                        title: ['Book Reviews', 'revdis_bkr'], // bkrev
                        pages: [
                            ['../bkrv/mack.html', 'Who Wrote the New Testament? (B. Mack)', 'burmac'],
                            ['../bkrv/funk.html', 'Honest to Jesus (R. Funk)', 'honfunk'],
                            ['../bkrv/spong.html', 'Liberating the Gospels (J.S. Spong)', 'libspong'],
                            ['../bkrv/wilson.html', '<span style="font-size: 14px">Paul: The Mind of the Apostle (A.N. Wilson)</span>', 'paulwil'],
                            ['../bkrv/crossan.html', 'The Birth of Christianity (J.D. Crossan)', 'crossbir'],
                            ['../bkrv/strobel.html', 'The Case for Christ (L. Strobel)', 'casestrobel'], // 4 pages: intro, Is the Gospel Record Reliable?, What Was the Nature of Jesus? Did Jesus Rise from the Dead?
                        ]
                    },
                    {
                        title: ['Article Reviews', 'revdis_art'], // artrev
                        pages: [
                            ['../artrv/jenks.html', '<span style="font-size: 14px">What Did Paul Know About Jesus? (G.C. Jenks)</span>', 'jenkspaul'],
                            ['../artrv/geering.html', '<span style="font-size: 14px">How Did Jesus Become God and Why? (Geering)</span>', 'geerjes'],
                            ['../artrv/wells.html', 'Earliest Christianity (G. A. Wells)', 'wellsre'],
                            ['../artrv/carrier.html', "<i>Jesus Puzzle</i> Book Review (R. Carrier)", 'carrcom']
                        ]
                    },
                    {
                        title: ['Books Questionning the Existence of an HJ', 'revdis_bqe'], // revmbk
                        pages: [
                            ['../bkrv/mysteries.html', '<span style="font-size: 14px">The Jesus Mysteries (T. Freke & P. Gandy)</span>', 'jesmyst'],
                            ['../bkrv/acharya.html', '<span style="font-size: 14px">The Christ Conspiracy (Acharya S)</span>', 'chrcons'],
                            ['../bkrv/ellegard.html', '<span style="font-size: 14px">Jesus, 100 Years Before Christ (A. Ellegard)</span>', 'elleg100'],
                            ['../bkrv/deconstruct.html', '<span style="font-size: 14px">Deconstructing Jesus (R. Price)</span>', 'decprice'],
                            ['../bkrv/zindler.html', '<span style="font-size: 14px">The Jesus the Jews Never Knew (F. Zindler)</span>', 'jewzin'],
                            ['../bkrv/shrinking.html', '<span style="font-size: 14px">The Incredible Shrinking Son of Man (R. Price)</span>', 'incshri'], //2003
                            ['../bkrv/harpur.html', '<span style="font-size: 14px">The Pagan Christ (T. Harpur)</span>', 'pagchris'],
                            ['../bkrv/magdalene.html', '<span style="font-size: 14px">A Magdalene Triptych: Brown, Price, Longfellow</span>', 'magtrip'], // 3 tabs Dan Brown, R. Price, Ki Longfellow
                            ['../bkrv/prenice.html', '<span style="font-size: 14px">The Pre-Nicene New Testament (R. Price)</span>', 'prenice']
                        ]
                    }
                ]
            }
            //[['novel.html', 'A Novel', 'novel']], // or novel1.pdf, novel2.pdf, novel3.pdf, novel4.pdf, novel5.pdf, novel6.pdf, novel7.pdf
        ];

        // A Novel
        // The Jesus Puzzle in a Nutshell

        const fragment = document.createDocumentFragment();

        // Write left menu title
        let div = document.createElement('div');
        div.classList.add('menu-title', 'showLR-block');
        div.textContent = 'The Jesus Puzzle';
        fragment.appendChild(div);

        // Accroche
        div = document.createElement('div');
        div.classList.add('accrochemenu'); //, 'showLR-block');
        div.innerHTML = 'Did Christianity begin with a mythical Christ?';
        fragment.appendChild(div);

        // Author
        div = document.createElement('div');
        div.classList.add('lm-author'); //, 'showLR-block');
        div.textContent = 'by Earl Doherty';
        // <div class="accrochemenu showLR-block">A Study on the Origin of Christianity</div>
        fragment.appendChild(div);

        // write Left menu
        this._writeLeftAndTopMenu(fullMenu, fragment);
        parentElmt.appendChild(fragment);

        // write Top menu
        // Header
        const elmtInnerTop = this._writeHeader(sPageTitle);
        this._writeLeftAndTopMenu(fullMenu, elmtInnerTop, headerSel);
    },

    _writeHeader: function (sPageTitle) {
        //return;
        const elmtHeader = document.getElementById('top-panel');

        // <div class="title-container"><a id="btn_top-menu_link" class="local_link no-underline" href="#" onclick="return toggleSpanVisibility(this, 'btn_top-menu')"
        //     style="color: #cadf29">${sPageTitle} <i
        //     class="fa fa-angle-down" style="color: #cadf29;"></i></a></div>
        // <div class="top-menu-cont" onclick="closeSpanVisibility('btn_top-menu')">
        //     <div id="topjsmenu" class="link_target btn_top-menu js-menu vertical_nav" style="padding-top:0px">
        //         <ul id="inner-top-panel" class="SpacingTop5 header-top-menu">
        //         </ul>
        //     </div>
        // </div>

        // Not written:
        // div class="accrochetitle">Earl Doherty</div>
        // Did Christianity begin with a mythical Christ?
        // <div class="title-top"></div>
        // aastyle="max-width:calc(100% + 20px)"
        if (!sPageTitle.includes('<span ')) {
            sPageTitle = "<span class='page-title'>" + sPageTitle + "</span>";
        }// else if (sPageTitle.endsWith('</span>')) {
            //sPageTitle = sPageTitle.substring(0, sPageTitle.length - 7) + "<i class='fa fa-angle-down'></i></span>";
        //}
        //console.log('sPageTitle=', sPageTitle);
        elmtHeader.innerHTML = `<button type="button" id="toggleMenu" class="toggle_menu" style="width:40px">
                    <i class="fa fa-bars"></i>
                </button>
                <div class="flex-row">
                    <div class="flex-column coltitle showHRinit" onclick="closeSpanVisibility('btn_top-menu')">
                        <div class="maintitle">
                            <a class="hide-ui-link" href="${this.path}../index.html">The Jesus Puzzle</a>
                        </div>
                        <div class="accrochetitle">Did Christianity begin with a mythical Christ?</div>
                    </div>
                    <div class="flex-column flex-title">
                        <div class="page-title-cont"><a id="btn_top-menu_link" class="local_link no-underline" href="#"
                            onclick="return toggleSpanVisibility(this, 'btn_top-menu')">
                            ${sPageTitle}</a>
                            <a class="whowasjesus" href="${this.path}../../index.html#great-myst">Who&nbsp;was<br>Jesus</a></div>
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

    _writeLeftAndTopMenu: function (fullMenu, parentElmt, headerSel) {
        for (let menuPart of fullMenu) {
            //let part;
            //if (Array.isArray(menuPart)) {
            //    part = this._writePartMenu(menuPart, 'Index', 'intro', headerSel);
            //} else {
            const part = this._writePartMenu(menuPart, headerSel);
            parentElmt.appendChild(part);
        }
    },

    _writePartMenu: function (menuPart, headerSel) {
        let aChapters = Array.isArray(menuPart) ? menuPart : menuPart.pages;
        let title = Array.isArray(menuPart) ? menuPart[1] : menuPart.title;

        let mainMenuId, isCollapsible;
        if (Array.isArray(title)) {
            mainMenuId = title[1];
            isCollapsible = title[2];
            title = title[0];
        } else {
            isCollapsible = menuPart.isCollapsible;
        }
        //console.log('is menu ' + title + ' isCollapsible', isCollapsible);
        //menuPart.pages, menuPart.title
        const isNotMain = menuPart.isNotMain === true,
            divMinistry = document.createElement('div');
        divMinistry.classList.add('no_page_sel');

        let isChildCollapsible = !Array.isArray(aChapters[0]);
        if (isCollapsible) {
            // Div chapter title
            // const divMinistTitle = document.createElement('div');
            // divMinistry.appendChild(divMinistTitle);

            // const linkChapt = document.createElement('a');
            // linkChapt.classList.add('menu--link');
            // linkChapt.dataset.submenu = 'submenu-' + mainMenuId;
            // linkChapt.textContent = title;
            //linkChapt.classList.remove('menu--link');
            //linkChapt.href = './' + DEFAULT_PAGE;
            //divMinistTitle.appendChild(linkChapt);
        } else if (!isNotMain && title) {
            const divMinistTitle = document.createElement('div');
            divMinistTitle.classList.add('mtitle1');
            //divMinistTitle.style.paddingLeft = '2px';
            divMinistTitle.style.textAlign = 'center';

            // no title, just a container

            divMinistry.appendChild(divMinistTitle);

            // headerSel && console.log('headerSel=', headerSel, mainMenuId);
            if (!isChildCollapsible && headerSel && headerSel != mainMenuId && !headerSel.startsWith(mainMenuId + '_')) {
                //linkChapt.classList.remove('menu--link');
                const linkChapt = document.createElement('a');
                linkChapt.classList.add('menu--link');
                linkChapt.dataset.submenu = 'submenu-' + mainMenuId;
                linkChapt.classList.add('nav-link-' + mainMenuId);
                linkChapt.innerHTML = title; // textContent
                linkChapt.href = this.path + (aChapters[0][0] || aChapters[0].title);
                divMinistTitle.appendChild(linkChapt);
                //console.log('linkChapt new =', linkChapt.href, 'aChaptItems of aChapters[0]=', isChildCollapsible);
                return divMinistry;
            } else {
                divMinistTitle.innerHTML = title; // textContent
            }
        }

        const ulMinistry = document.createElement('ul');
        divMinistry.appendChild(ulMinistry);

        // Trick to reuse open/collapse behavior implemented in 2nd level
        // A generic function might have been better
        if (isCollapsible) {
            aChapters = [menuPart];
        }

        for (let aChaptItems of aChapters) {
            const liChapt = document.createElement('li');
            ulMinistry.appendChild(liChapt);
            if (aChaptItems === menuPart && divMinistry) {
                //divMinistry.style.paddingLeft = '0px';
            }

            let subTitle = null;
            let menuId = mainMenuId;
            if (!Array.isArray(aChaptItems)) {
                subTitle = aChaptItems.title;
                if (Array.isArray(aChaptItems.title)) {
                    subTitle = aChaptItems.title[0];
                    menuId = aChaptItems.title[1] || mainMenuId;
                }
                aChaptItems = aChaptItems.pages;
                //nChapt = aChaptItems[0].substring(0, aChaptItems[0].indexOf('.')); //aChaptItems.title;
            }

            const isMultiPage = Array.isArray(aChaptItems[0]);
            if (!isMultiPage) {
                const linkItem = document.createElement('a'),
                    linkId = aChaptItems[2] ?? aChaptItems[0].substring(0, aChaptItems[0].indexOf('.'));
                linkItem.classList.add('nav-link-' + linkId);
                linkItem.href = this.path + aChaptItems[0];
                // #_path_#
                if (aChaptItems[1].includes('#_path_#')) {
                    //const s = aChaptItems[1].replaceAll('#_path_#', this.path);
                    //console.log('***** ', aChaptItems[1], s);
                }
                linkItem.innerHTML = aChaptItems[1].replaceAll('#_path_#', this.path); // textContent

                liChapt.appendChild(linkItem);
                continue;
            }

            // ToDo: Fix for headers
            if (headerSel && (menuId !== headerSel)) {
                liChapt.classList.add('menu--item'); //('menu--subitens__opened');
            } else {
                liChapt.classList.add('menu--item', 'menu--item__has_sub_menu'); //, 'menu--subitens__opened'); // To remove menu--subitens__opened
                if (menuId === headerSel) {
                    liChapt.classList.add('menu--subitens__opened'); //, 'menu--subitens__opened'); // To remove menu--subitens__opened
                }
            }

            // Div chapter title
            const divChapt = document.createElement('div');
            liChapt.appendChild(divChapt);

            const linkChapt = document.createElement('a');
            linkChapt.classList.add('menu--link');
            linkChapt.textContent = isNotMain ? title : subTitle;
            linkChapt.dataset.submenu = 'submenu-' + menuId;
            divChapt.appendChild(linkChapt);

            // UL chapter items
            if (headerSel && (menuId !== headerSel)) {
                linkChapt.classList.remove('menu--link');
                linkChapt.href = this.path + aChaptItems[0][0];
                //console.log('linkChapt.href=', linkChapt.href);
            } else {
                const ulChapt = document.createElement('ul');
                ulChapt.id = 'submenu-' + menuId;
                ulChapt.classList.add('sub_menu');
                liChapt.appendChild(ulChapt);

                for (let i = 0; i < aChaptItems.length; i++) {
                    // <li class="sub_menu--item"><a class="nav-link-wheretoday" href="./GMark/GMark01.html#1.p.1.8"><span class="bsrc">1-11</span> John the Baptist</a></li>
                    const aItemData = aChaptItems[i];

                    menuId = aItemData[2] ?? (aItemData[0].substring(0, aItemData[0].indexOf('.')) || mainMenuId); //aChaptItems.title;

                    const liItem = document.createElement('li');
                    liItem.classList.add('sub_menu--item');

                    const linkItem = document.createElement('a');
                    linkItem.classList.add('nav-link-' + menuId);
                    // For testing
                    if (aItemData[2] && Number(aItemData[2])) { //nChapt === 3 && i === 0) {
                        linkItem.dataset.tab_length = Number(aItemData[2]);
                    }
                    liItem.appendChild(linkItem);


                    if (aItemData[0]) {
                        linkItem.href = this.path + aItemData[0]; // + (menuId ? '#' + menuId : '');
                    }

                    if (aItemData[1].includes('#_path_#')) {
                        //const s = aItemData[1].replaceAll('#_path_#', this.path);
                        //console.log('***** ', aItemData[1], s);
                    }
                    linkItem.innerHTML = aItemData[1].replaceAll('#_path_#', this.path); // textContent

                    //linkItem.innerHTML = aItemData[1];
                    ulChapt.appendChild(liItem);
                }
            }
        }
        return divMinistry;
    }
};
