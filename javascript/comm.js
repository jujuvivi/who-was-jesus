"use strict";

if (typeof fctj === 'undefined') {
    var fctj = {};
}

/**
 * start the whole process
 * @param {string | {target: string, targetHeader: string}} scrollTarget Identify the menu items belonging to the current page
 * @param {string} headerSel If present, build menu with the top menu selected for headerSel.
 * @param {boolean} topMenuSingleOpen If true, a single top menu can be opened at once.
 * @param {string} sPageTitle Title of the page
 * @param {*} sPath 
 */
fctj.isDoherty = window.location.pathname.includes('/doherty');
fctj.isTurton = window.location.pathname.includes('/turton');
fctj.start = function(scrollTarget, headerSel, topMenuSingleOpen, sPageTitle, sPath) {
	if (fctj.isDoherty) {
		document.body.classList.add('cls-doherty');
	} else if (fctj.isTurton) {
		document.body.classList.add('cls-turton');
	}
	if (headerSel != null) {
		this.menu.write(headerSel, sPageTitle, sPath);
	}

	//if (bSyncTab) {
	//this.tab.startSyncTab();
	//}
	const oTabData = {},
		oTabDataSub = this.scrollMgrSubMenus.oTabDataSub;

	// Create and Sync all Tabs at start
	const colMainTabs = document.getElementsByClassName('tblTabs');
	for(let tblMainTab of colMainTabs) {
		const isSubmenu = tblMainTab.parentNode.parentNode.classList.contains("sub-tab");
		const tab = new this.MainTab(tblMainTab, isSubmenu);
		(isSubmenu ? oTabDataSub : oTabData)[tab.id] = tab;
	}

	this.startLeftMenu();

	this.scrollMgr.start(oTabData, typeof scrollTarget === 'object' ? scrollTarget : {
		target: 'body nav.vertical_nav a.nav-link-' + scrollTarget, // nav-link is for data logic, no css involved
		targetHeader: 'div.vertical_nav a.nav-link-' + scrollTarget,
		topMenuSingleOpen
	});
}

fctj._changeActiveClass = function(elmtLink, toDelete, isHeader) {
	elmtLink.classList[toDelete ? 'remove' : 'add']('active');
	if (isHeader) { // expand or collapse parent

	}
	//if (!tabIsAlwaysOpen && (elmtLink.tagName ==='A' && elmtLink.parentElement.tagName === 'DIV')) {
	//	elmtLink.parentElement.classList[toDelete ? 'remove' : 'add']('active');
	//}
}
fctj.isElementInViewport = function(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		(rect.bottom + 400) <= (window.innerHeight || document.documentElement.clientHeight) && // && /* or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
	);
}

//fctj.tab = {
	// Track all Tabs in the page
	//_oTabData: {},
	//_oTabDataSub: {},

	/**
	 * Create and Sync all Tabs at start
	 * @param {id: {hashkey:'tt', clsName: 'topSumCell', default: string, keepOpen: boolean, useScroll: boolean}} oTabConfig 
	 */
	// startSyncTab: function() {
	// 	const colMainTabs = document.getElementsByClassName('tblTabs');
	// 	for(let tblMainTab of colMainTabs) {
	// 		const isSubmenu = tblMainTab.parentNode.parentNode.classList.contains("sub-tab");
			
	// 		const tab = new this.MainTab(tblMainTab, isSubmenu);
	// 		(isSubmenu ? this._oTabDataSub : this._oTabData)[tab.id] = tab;
	// 	}
	// },

	/**
	 * Object representing a Sticky list of Tabs on Top
	 */
fctj.MainTab = class {
		constructor(tblTab, isSubmenu) {
			this.tblTab = tblTab;
			this.trTab = tblTab.rows[0];
			this.isSubmenu = isSubmenu;

			// Inject onclick to next and prev button
			let carouselCont = tblTab.previousElementSibling;
			
			if (carouselCont && !carouselCont.classList.contains('psac-slider-and-carousel')) {
				carouselCont = carouselCont.previousElementSibling;
			}
			if (carouselCont?.classList.contains('psac-slider-and-carousel')) {
				// owl-prev
				const prevBtn = carouselCont.querySelector('.owl-prev'),
					nextBtn = carouselCont.querySelector('.owl-next');
				nextBtn?.addEventListener('click', (e) => {
					const dotNewIndeex = 2 + this.dots.findIndex((dot) => dot.classList.contains('active'));
					if (dotNewIndeex < this.dots.length) this._selectDotsUi(dotNewIndeex);
				});
				prevBtn?.addEventListener('click', (e) => {
					const dotNewIndeex = this.dots.findIndex((dot) => dot.classList.contains('active'));
					if (dotNewIndeex > -1) this._selectDotsUi(dotNewIndeex);
				});
				//
                const track = tblTab.rows[0]; // querySelector('.carousel-track');
                //let index = 0;
                let startX = 0;
                let currentX = 0;
                let isDragging = false;

                //function updateCarousel() {
                //    track.style.transform = `translateX(-${index * 50}%)`; /* 100 */
                //}

                // Touch events for swipe
                track?.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
					//console.log('start x=', startX);
                    isDragging = true;
                });

                track?.addEventListener('touchmove', (e) => {
                    if (!isDragging) return;
                    currentX = e.touches[0].clientX;
					//console.log('current x=', currentX);
                });

                track?.addEventListener('touchend', () => {
                    if (!isDragging) return;
                    let diff = startX - currentX;
                    if (diff > 50) {
						const dotNewIndeex = 2 + this.dots.findIndex((dot) => dot.classList.contains('active'));
						if (dotNewIndeex < this.dots.length) this._selectDotsUi(dotNewIndeex);
                        //index = Math.min(index + 1, items.length - 2);
                    } else if (diff < -50) {
                        //index = Math.max(index - 1, 0);
						const dotNewIndeex = this.dots.findIndex((dot) => dot.classList.contains('active'));
						if (dotNewIndeex > -1) this._selectDotsUi(dotNewIndeex);
                    }
                    //updateCarousel();
                    isDragging = false;
                });

			}

			this.tds = Array.from(this.trTab.children).filter(elmt => {
				if (elmt.tagName === 'TD' && (elmt.classList.contains('tab_sel') || elmt.classList.contains('tab_not_sel'))) {
					elmt.title = "Click to Expand or Collapse";
					return elmt;
				}
			});
			if (this.tds.length < 2) {
				console.error('Only 1 or 0 tab cells found for table ', tblTab);
			}

			// Content
			let divSection;
			if (!this.isSubmenu) {
				divSection = tblTab.closest('.sepSection') || tblTab.closest('.sepSection-small') || tblTab.closest('.sepSection-none');
				this.id = divSection.dataset.tabs
			} else {
				const subMenuLookFor = tblTab.dataset.lookfor;
				divSection = document.getElementById(subMenuLookFor);
				this.id = subMenuLookFor;
			}
			// For Submenu it's the parent Source with lm-item and id
			this.divParentNodes = document.getElementById(this.id);
			const submenuId = divSection.dataset.submenu;
			if (!this.divParentNodes && submenuId) {
				console.error('No div parent found with id=', this.id);
			}
			if (this.divParentNodes && (submenuId || this.isSubmenu)) {
				this.divContents = this.isSubmenu ? 
					Array.from(this.divParentNodes.querySelectorAll('div.title3')) :
					Array.from(this.divParentNodes.children).filter(elmt => elmt.tagName === 'DIV');
				if (this.tds.length !== this.divContents.length) {
					console.error('Number of tabs doesnt match number of div content ', this.tds, this.divContents);
				}
			}

			// left menu
			if (!this.isSubmenu) {
				this.elmtSubmenu = submenuId && document.getElementById(submenuId);
				if (this.elmtSubmenu) {
					this.elmtSubmenuHeader = document.getElementById(submenuId + '-2');
					// By default open all left and header submenus that are in the page
					this._openSubmenu(false);
				} else if (submenuId) {
					console.error('Submenu', submenuId,  'not found for section', divSection);
				}
			}
			// Select first tab by default
			this.tdSelected = this.tds[0];
			this._selectTabCelllUi(this.tds[0]);
		}

		_openSubmenu(doMenuHeader) {
			if (this.elmtSubmenu) {
				const elmt = this.elmtSubmenu.parentElement;
				if (!elmt.classList.contains('menu--subitens__opened')) {
					elmt.classList.add('menu--subitens__opened');
				}
				// Do the same with Header
				if (doMenuHeader && this.elmtSubmenuHeader) {
					const elmtSubMenuHeader = this.elmtSubmenuHeader.parentElement;
					fctj.scrollMgr.openSubmenuHeader(elmtSubMenuHeader);
				}
			}
		}

		_getParentCell(evtOrTd) {
			var tdClick = evtOrTd.target || evtOrTd;
			if (tdClick.tagName !== 'TD') {
				tdClick = tdClick.parentNode;
				if (tdClick.tagName !== 'TD') {
					tdClick = tdClick.parentNode;
					if (tdClick.tagName !== 'TD') return;
				}
			}
			return tdClick;
		}

		/**
		 * Open/Close tabs
		 * @param {Event|TD} evtOrTd onclick Event on the tab or cell (TD/TH) corresponding to the tab to select
		 */
		_updateSelectionFromSync(evtOrTd) {
			const tdToSel = typeof evtOrTd === 'number' ? this.tds[evtOrTd] : this._getParentCell(evtOrTd);
			if (tdToSel === this.tdSelected) {
				this._openSubmenu(true);
				return;
			}

			if (this.tdSelected) {
				this.tdSelected.classList.replace('tab_sel', 'tab_not_sel');
				this.tdSelected.style.borderBottomColor = '';
			}
			if (tdToSel) {
				this._selectTabCelllUi(tdToSel);
			}
			this.tdSelected = tdToSel;

			// To sync the left-menu when selection change in the page
			if (tdToSel && this.elmtSubmenu) {
				this._updateMenuLink(this.elmtSubmenu, tdToSel, false);
				// Update also topmenu to open?
				this._openSubmenu(true);
			}
		}

		_selectTabCelllUi(td) {
			td.classList.replace('tab_not_sel', 'tab_sel');
			td.style.borderBottomColor = td.dataset.bgcolor || td.parentNode.dataset.bgcolor || 'blue'; // white

			// get list of bullets
			let dots = this.dots;
			const cells = td.parentElement.cells;
			if (!dots) {
				dots = Array.from(this.tblTab.querySelectorAll('.owl-dots .owl-dot'));
				this.dots = dots;

				this.subTab = Array.from(this.tblTab.querySelectorAll('.sub-tab'));

				dots.forEach((d, index) => {
					d.addEventListener('click', (evt) => {
						this._selectDotsUi(index, cells);
					});
				});
			}

			if (this.subTab.length) {
				const subtabValue = td.dataset.subtab;
				this._isSubTabVisible = subtabValue?.startsWith("sub-") ; //=== "sub-tab";
				const iVisibleSubmenu = this._isSubTabVisible ? subtabValue === 'sub-tab' ? 0 : Number(subtabValue.substring(4)) : -1;
				this.subTab.forEach((subtab, i) => subtab.style.display = iVisibleSubmenu === i ? '' : 'none');
			}

			this._selectDotsUi(td.cellIndex, cells);
		}

		_selectDotsUi(index, cells) {
			cells = cells || this.tdSelected.parentElement.cells;
			// Show just surrounbing ones in low res.
			const dots = this.dots,
				l = dots.length;
			for(let i = 0; i < l; i++) {
				if ((i >= index - 1 || (index == l - 1 && i == index - 2)) && (i <= index + 1 || (i == 2 && index == 0)))  {
					cells[i].classList.remove('showHR');
					dots[i].classList.add('active');
				} else {
					cells[i].classList.add('showHR');
					dots[i].classList.remove('active');
				}
			}
		}

		// sync registered submenu
		syncSubmenu(elmtSubmenu, toDelete) {
			if (!elmtSubmenu) return;
			console.log('****** active-menu ', toDelete ? 'remove' : 'add', 'this.tdSelected=', this.tdSelected);
			elmtSubmenu.parentElement.classList[toDelete ? 'remove' : 'add']('active-menu');

			this._updateMenuLink(elmtSubmenu, this.tdSelected, toDelete);
			this._openSubmenu(true);
		}

		_updateMenuLink(elmtSubmenu, tabTdSel, toDelete) {
			const a = elmtSubmenu.children[tabTdSel.cellIndex].firstElementChild;
			if (a) {
				if (toDelete && !a.classList.contains('active')) {
				} else {
					fctj._changeActiveClass(a, toDelete);
				}
			} else {
				console.error('link not found in syncMenu. index=', tabTdSel.cellIndex, ' children=', elmtSubmenu.children);
			}
		}
}

// Show the Tab Header on top of screen
// function scrollHeaderTabInView(tdClick, bForce) {
// 	let tr = tdClick.parentNode.previousElementSibling;
// 	tr = tr?.previousElementSibling || tr || tdClick.parentNode;
// 	if (tr?.tagName == 'TR') {
// 		const div = tr.parentElement.parentElement.previousElementSibling;
// 		if (div.id && div.classList.contains('title2')) {
// 			//console.log('scroll to higher div');
// 			tr = div;
// 		}
// 	}
// 	scrollToElmt(tr, bForce);
// 	return null;
// }

fctj.scrollMgr = {
	selSections: [],
	disabled: false,
	wndTarget: window,
	scrollingElmt: null,
	divTargets: null, // Menu
	divSources: null, // Page
	selMenuHeaders: null,
	topMenuSingleOpen: null,
	oTabData: null, // Tabs to sync
	isOpenAllLeftMenuItems: true,

	/**
	 * Start Sync of top floating Table. Highlights menu item currently visible.
	 * @param isGosp true for gospels
	 */
	start(oTabData, oScrollSelector) {
		this.oTabData = oTabData;
		//var tdFirstTab = document.getElementById('firstTabSel');
		//liNavTitles = document.querySelecterAll('#navigation > ul > li > a[href=#' + id + ']');
		this.oScrollSelector = oScrollSelector;
		this.divSources = Array.from(document.querySelectorAll(oScrollSelector.source || 'body > div.layout-bottom > div.layout-right > div.content div.lm-item'));
		this.divTargets = Array.from(document.querySelectorAll(oScrollSelector.target)); // p:not(.irrelevant)
		this.divTargetsHeader = oScrollSelector.targetHeader ? Array.from(document.querySelectorAll(oScrollSelector.targetHeader)) : null;
		if (this.divTargetsHeader && this.divTargetsHeader.length != this.divTargets.length) {
			console.error('divTargetsHeader.length != divTargets.length', this.divTargetsHeader, this.divTargets);
		} else if (!this.divTargets[0]) {
			console.error('No target and source found for Source=', oScrollSelector.source, ' and Target=', oScrollSelector.target);
		}
		this.topMenuSingleOpen = oScrollSelector.topMenuSingleOpen;
		if (this.topMenuSingleOpen) {
			this.selMenuHeaders = [];
		}

		//this.scrollingElmt = document.querySelector('body > .layout-bottom > .layout-right');
		this.scrollingElmt = document.documentElement;
		document.addEventListener('scroll', () => {
			if (!this.disabled) {
				this.sync();
			}
		});
		// no_page_sel
		// Select the page in the left menu and scroll to it
		const elmtChapterCont = this.divTargets[0].closest(".no_page_sel");
		elmtChapterCont.classList.replace('no_page_sel', 'page_sel');
		const parentChapter = this.divTargets[0].parentElement.parentElement.parentElement;
		const scrollTo = parentChapter.classList.contains('menu--item__has_sub_menu') ? parentChapter : this.divTargets[0].parentElement; // menu--item
		//console.log('scrollTo=', scrollTo);
		setTimeout(()=> this._scrollToElmt(scrollTo), 5);
		//this._scrollToElmt(scrollTo);

		// Useful because menu can be not represented with tabs in the content
		if (fctj.isDoherty) {
			this.isOpenAllLeftMenuItems = false;
		}
		if (this.isOpenAllLeftMenuItems)  {
			// Or open all of them
			elmtChapterCont.querySelectorAll('.js-menu li.menu--item__has_sub_menu').forEach(elmt => {
				if (!elmt.classList.contains('menu--subitens__opened')) {
					elmt.classList.add('menu--subitens__opened');
				}
			});
		} else {
			const linkParent = this.divTargets[0].closest(".js-menu li.menu--item__has_sub_menu");
			if (linkParent && !linkParent.classList.contains('menu--subitens__opened')) {
				linkParent.classList.add('menu--subitens__opened');
			}
		}
		this.sync();
	},

	_scrollToElmt: function(elmt, bForce) {
		if (bForce || !fctj.isElementInViewport(elmt)) {
			//console.log('aaaa scrollToElmt scrollIntoView', elmt);
			elmt.scrollIntoView();
			//window.scrollBy(0, -20);
			//console.log('scrolling manual');
			return elmt;
		}
	},

	_unselect(indexSelection, iSectionIndex, aLinkSubmenuTileActive) {
		if (indexSelection > -1) { // de-selection
			const linkTarget = this.divTargets[iSectionIndex];
			fctj._changeActiveClass(linkTarget, true);
			if (this.divTargetsHeader) {
				fctj._changeActiveClass(this.divTargetsHeader[iSectionIndex], true, true);
			}

			//console.log('Unselect', iSectionIndex, this.selSections);
			const divSrc = this.selSections.splice(indexSelection, 1)[0];
			const elmtSubmenu = document.getElementById(linkTarget.dataset.submenu);
			if (elmtSubmenu && divSrc?.dataset.tabs) {
				this.oTabData[divSrc.dataset.tabs].syncSubmenu(elmtSubmenu, true);
			}
		}
	},

	openSubmenuHeader(elmtSubMenuHeader) {
		if (!elmtSubMenuHeader.classList.contains('menu--subitens__opened')) {
			elmtSubMenuHeader.classList.add('menu--subitens__opened');
		}
		// So we need to collapse now the previous open one, if there is one
		if (this.topMenuSingleOpen) {
			//console.log('this.selMenuHeaders=', this.selMenuHeaders);
			this.selMenuHeaders.forEach(o => (o != elmtSubMenuHeader) && o.classList.remove('menu--subitens__opened'));
			this.selMenuHeaders = [elmtSubMenuHeader];
		}
	},

	toggleOpenClose(elmt, isHeader) {
		//if (!elmtSubMenuHeader.classList.contains('menu--subitens__opened')) {
		if (!isHeader || !this.topMenuSingleOpen) {
			elmt.classList.toggle('menu--subitens__opened');
		} else if (!elmt.classList.contains('menu--subitens__opened')) {
			elmt.classList.add('menu--subitens__opened');
			this.selMenuHeaders.push(elmt);
		} else {
			elmt.classList.remove('menu--subitens__opened');
			const indexElmt = this.selMenuHeaders.indexOf(elmt);
			if (indexElmt > -1) {
				this.selMenuHeaders.splice(indexElmt, 1);
			}
		}
	},

	sync() {
		const divSources = this.divSources,
			divTargets = this.divTargets,
			divTargetsHeader = this.divTargetsHeader;
		
		if (!divTargets || !divSources) return;

		// If tab_length is set, 
		// Adds fake divTargets in case they have no representation
		let totalDivTargets = divTargets.length;
		if (totalDivTargets !== divSources.length) {
			if (totalDivTargets < divSources.length) {
				for(let i=0; i < divTargets.length; i++) {
					const divTarget = divTargets[i],
						divTargetHeader = this.divTargetsHeader[i];
					let nDivToAdd = Number(divTarget.dataset?.tab_length) || 0;
					// Special case if a single target
					if (nDivToAdd || (i === 0 && totalDivTargets === 1)) {
						if (!nDivToAdd) {
							nDivToAdd = divSources.length - totalDivTargets;
						} else {
							nDivToAdd--;
						}
						totalDivTargets += nDivToAdd;
						for(let j=0; j < nDivToAdd; j++) {
							divTargets.splice(i, 0, divTarget);
							this.divTargetsHeader.splice(i, 0, divTargetHeader);
						}
						i = i + nDivToAdd;
					}
				}
			}

			if (divTargets.length !== divSources.length) {
				console.error('page-divSources.length=' + divSources.length + '  menu-divTargets.length=' + divTargets.length, divSources, divTargets);
			}
		}

		const aTabElmtActiveCounts = [0, 0, 0, 0, 0, 0],
			hWindow = this.scrollingElmt.clientHeight; // window.innerHeight || document.documentElement.clientHeight;

		let topOffset1, topOffset2;
		if (topOffset1 == null) {
			topOffset1 = hWindow / 3; //divSources[0].offsetTop; // 55
			topOffset2 = hWindow / 3; //divSources[0].offsetTop;
		}

		const aLinkSubmenuTileActive = [];

		divSources.forEach((divSrc, iSectionIndex) => {
			const indexSelection = this.selSections.indexOf(divSrc);
			let nextOne = divSources[iSectionIndex + 1];

			let offsetTop = divSrc.offsetTop,
				clientHeight = divSrc.clientHeight;
			//sDisplay = divSrc.style.display;

			let nextOffsetTop;
			if (nextOne) {
				nextOffsetTop = nextOne.offsetTop;
			}

			const scrollY = this.scrollingElmt ? this.scrollingElmt.scrollTop : window.scrollY;
			if ((clientHeight > 0) && //clientHeight==0 when tab is not selected. can also test: className.includes('tab_selected')
				(scrollY >= (iSectionIndex === 0 ? 0 : offsetTop - topOffset1)) && // (isGospel ? 700 : 620)
				(scrollY < (nextOne ? nextOffsetTop - topOffset2 : (offsetTop + clientHeight + 500)))) { // (isGospel ? 400 : 300) // 0 => topOffset2
				if (indexSelection === -1) { // New selection
					
					const elmtTarget = divTargets[iSectionIndex];

					fctj._changeActiveClass(elmtTarget, false);
					if (divTargetsHeader) {
						fctj._changeActiveClass(divTargetsHeader[iSectionIndex], false, true);
					}
					
					//console.log('Select', iSectionIndex, this.selSections, divSrc);
					this.selSections.push(divSrc);

					const elmtSubmenu = elmtTarget.dataset.submenu && document.getElementById(elmtTarget.dataset.submenu);
					
					//divSrc.dataset.tabs
					if (elmtSubmenu) {
						console.log('elmtSubmenu id', elmtTarget.dataset.submenu, elmtSubmenu);
						// Menu contains submenus
						if (divSrc.dataset.tabs) {
							this.oTabData[divSrc.dataset.tabs].syncSubmenu(elmtSubmenu);
						} else {
							elmtSubmenu.parentElement.classList.add('active-menu');
						}
					} else {
						const ulTargetParent = elmtTarget.parentElement.parentElement;
						if (ulTargetParent.classList.contains('sub_menu')) {
							const linkSubmenuTitle = ulTargetParent.previousElementSibling.firstElementChild;
							
							aLinkSubmenuTileActive.push(linkSubmenuTitle);

							const submenu = linkSubmenuTitle.dataset.submenu && document.getElementById(linkSubmenuTitle.dataset.submenu);
							if (submenu) {
								//console.log('submenu id', linkSubmenuTitle.dataset.submenu, submenu);
								// Menu contains submenus
								const tabId = divSrc.dataset.tabs || divSrc.parentElement.id;
								if (tabId && this.oTabData[tabId]) {
									// Find cell to select
									const index = Array.prototype.indexOf.call(divSrc.parentElement.children, divSrc);
									this.oTabData[tabId]._updateSelectionFromSync(index);
									this._isSubTabVisible = this.oTabData[tabId]._isSubTabVisible;
								} else {
									this._isSubTabVisible = false;
								}
							} else {
								this._isSubTabVisible = false;
								// Still look for that
								if (divSrc.dataset.tabs) {
								}
							}
						}
					}
				}
				// if (this.aStickySectionCounts) {
				// 	for (let i = 0, cumul = 0; i < 10; i++) {
				// 		if (iSectionIndex < cumul + this.aStickySectionCounts[i]) {
				// 			aTabElmtActiveCounts[i]++;
				// 			break;
				// 		} else {
				// 			cumul += this.aStickySectionCounts[i];
				// 		}
				// 	}
				// }
			} else if (indexSelection > -1) { // de-selection
				// Don't Unselect if
				// - previous references same target
				// - previous is selected
				const prevTarget = iSectionIndex > 0 ? divTargets[iSectionIndex - 1] : null,
					prevSrc = iSectionIndex > 0 ? divSources[iSectionIndex - 1] : null,
					prevTarget2 = iSectionIndex > 1 ? divTargets[iSectionIndex - 2] : null,
					prevSrc2 = iSectionIndex > 1 ? divSources[iSectionIndex - 2] : null;

				if ((prevTarget !== divTargets[iSectionIndex] || !this.selSections.includes(prevSrc)) && 
					(prevTarget2 !== divTargets[iSectionIndex] || !this.selSections.includes(prevSrc2))) {
					//console.log('unselect', iSectionIndex, this.selSections);
					this._unselect(indexSelection, iSectionIndex, aLinkSubmenuTileActive);
				} else {
					//console.log('Unselect', iSectionIndex, this.selSections);
					this.selSections.splice(indexSelection, 1)[0];
				}
			}
			// ToDo: Select sub tab depending of the vert scroll
			if (this._isSubTabVisible && this.selSections[0]) {
				//console.log('111 _isSubTabVisible', 'scrollY=', scrollY, 'divSelected scrollHeight', this.selSections[0].scrollHeight, oTabDataSub); // _oTabData
				fctj.scrollMgrSubMenus.sync(this.selSections[0]);
			}
		});
	}
};

// **************************************************************
// ***	            SCROLL for SubMenus             	 	  ***
// **************************************************************
fctj.scrollMgrSubMenus = {
	selSections: [],
	//disabled: false,
	//wndTarget: window,
	//scrollingElmt: null,
	//divTargets: null, // Menu
	divSources: null, // Page double Array
	//selMenuHeaders: null,
	//topMenuSingleOpen: null,
	oTabDataSub: {}, // Subtabs to sync
	/**
	 * Start Sync of top floating Table. Highlights menu item currently visible.
	 * @param isGosp true for gospels
	 */
	_unselect(indexSelection) {
		if (indexSelection === -1) return;

		const divSrc = this.selSections.splice(indexSelection, 1)[0];
		//console.log('divSrc?.dataset.tabs=', divSrc?.dataset.tabs, divSrc);
		if (divSrc?.dataset.tabs) {
			this.oTabDataSub[divSrc.dataset.tabs].syncSubmenu(null, true);
		}
	},

	sync(divParentSrc) {
		if (this.divParentSrc !== divParentSrc) {
			if (!divParentSrc || !this.oTabDataSub[divParentSrc.id]) {
				//console.error(divParentSrc ? 'tabId=' + divParentSrc.id + ' not found as key of subtabs=' : 'No divParentSrc', oTabDataSub, divParentSrc);
				return;
			}
			this.divParentSrc = divParentSrc;
			this.divSources = Array.from(this.divParentSrc.querySelectorAll('div.title3'));
			this.selSections = [];
			//console.log('this.divSources=', this.divSources, 'divSelected scrollHeight', divParentSrc.scrollHeight, 'divParentSrc.scrollTop=', divParentSrc.scrollTop);
		}
		const scrollingElmt = document.documentElement;
		
		const hWindow = scrollingElmt.clientHeight, // window.innerHeight || document.documentElement.clientHeight;
			topOffset1 = hWindow / 3, //divSources[0].offsetTop; // 55, topOffset2;
			topOffset2 = hWindow / 3; //divSources[0].offsetTop;

		//console.log('this.selSections=', this.selSections);

		const scrollY = scrollingElmt.scrollTop; // : window.scrollY;
		this.divSources.forEach((divSrc, iSectionIndex) => {
			const indexSelection = this.selSections.indexOf(divSrc),
				nextOne = this.divSources[iSectionIndex + 1];

			const offsetTop = divSrc.offsetTop,
				// We suppose here 2 div next to each other:
				// <div id="" class="title3">
				// <div >... All content for this submenu...
				clientHeight = divSrc.clientHeight + divSrc.nextElementSibling.clientHeight;

			if ((clientHeight > 0) && //clientHeight==0 when tab is not selected. can also test: className.includes('tab_selected')
				(scrollY >= (iSectionIndex === 0 ? 0 : offsetTop - topOffset1)) && // (isGospel ? 700 : 620)
				(scrollY < (nextOne ? nextOne.offsetTop - topOffset2 : (offsetTop + clientHeight + 500)))) { // (isGospel ? 400 : 300) // 0 => topOffset2
				if (indexSelection === -1) { // New selection
					this.selSections.push(divSrc);

					//console.log('submenu id', linkSubmenuTitle.dataset.submenu, submenu, );
					// Menu contains submenus
					const tabId = this.divParentSrc.id; //divSrc.dataset.tabs || divSrc.parentElement.id;
					if (tabId) {
						// Find cell to select
						const index = iSectionIndex; //Array.prototype.indexOf.call(divSrc.parentElement.children, divSrc);
						if (!this.oTabDataSub[tabId]) {
							console.error('tabId=', tabId, ' not found as key of subtabs=', this.oTabDataSub);
						} else {
							this.oTabDataSub[tabId]._updateSelectionFromSync(index);
						}
						//this._isSubTabVisible = oTabDataSub[tabId]._isSubTabVisible;
					} else {
						//this._isSubTabVisible = false;
					}
					//}
				}
			} else if (indexSelection > -1) { // de-selection
				this._unselect(indexSelection);
			}
		});
	}
}

// function getScrollParent(node) {
// 	return node && (node.scrollHeight > node.clientHeight ? node : getScrollParent(node.parentNode));
// }

// **************************************************************
// ***	            SPAN toggle Visibility             	 	  ***
// **************************************************************
// Event handler click on a close link 'a'
function closeSpanVisibility(clsNameToToggle) {
	const link = document.getElementById(clsNameToToggle + '_link');
	if (link) {
		toggleSpanVisibility(link, clsNameToToggle, true, true);
	}
	return false;
}

/**
 * Handler Event onclick on a link 'a'
 * @param {a} linkClicked link element clicked
 * @param {string} clsNameToToggle css class name identifying elements to toggle visibility
 * @returns false
 */
function toggleSpanVisibility(linkClicked, clsNameToToggle, doScrolling, forceHide) {
	const aTargetElmts = Array.from(document.getElementsByClassName(clsNameToToggle));
	if (aTargetElmts.length === 0) {
		return;
	}

	//console.log('toggleSpanVisibility');
	const bToShow = !aTargetElmts[0].classList.contains('link_target_on');

	if (forceHide === true && bToShow) return;

	//let htmlChanged = document.documentElement,
	//	scrollTop = htmlChanged.style.scrollPaddingTop;
	//if (bToShow && scrollTop) {
		//htmlChanged.style.scrollPaddingTop = '0px';
	//} else {
		//htmlChanged = null;
	//}

	const aProm = aTargetElmts.map(elmtTarget => {
		const bToShow = !elmtTarget.classList.contains('link_target_on');
		return new Promise(resolve => {
			if (bToShow) {
				elmtTarget.style.display = elmtTarget.tagName === 'SPAN' ? 'inline' : 'block';
				window.setTimeout(() => {
					elmtTarget.classList.toggle('link_target_on');
					resolve();
				}, 5);
			} else {
				elmtTarget.classList.toggle('link_target_on');
				window.setTimeout(() => {
					elmtTarget.style.display = '';
					resolve();
				}, 100);
			}
		});
	});

	Promise.all(aProm).then(() => {
		// get first ancestor with target class
		if (linkClicked.innerText.length < 20) { // To avoid Stoicism a more ...
			if (linkClicked.innerText.includes('more')) {
				linkClicked.innerHTML = linkClicked.innerHTML.replace('more', 'less');
			} else if (linkClicked.innerText.includes('less')) {
				linkClicked.innerHTML = linkClicked.innerHTML.replace('less', 'more');
			}
		}
		//if (htmlChanged) {
		//	htmlChanged.style.scrollPaddingTop = scrollTop;
		//}
	});

	const icon = linkClicked.querySelector('i.a-icon') || linkClicked.querySelector('i.fa');
	if (icon) {
		if (icon.dataset.left === '1') {
			icon.classList.replace(bToShow ? 'a-icon-left' : 'a-icon-right', bToShow ? 'a-icon-right' : 'a-icon-left');
		} else if (icon.classList.contains('fa')) {
			icon.classList.replace(bToShow ? 'fa-angle-down' : 'fa-angle-up', bToShow ? 'fa-angle-up' : 'fa-angle-down');
		} else {
			icon.classList.replace(bToShow ? 'a-icon-dropdown' : 'a-icon-dropup', bToShow ? 'a-icon-dropup' : 'a-icon-dropdown');
		}
	} else {
		const spanTitle = linkClicked.querySelector('span.page-title');
		//console.log('spanTitle=', spanTitle);
		if (spanTitle) {
			spanTitle.style.setProperty('--pseudo-arrow', bToShow ? '"\\f106"' : '"\\f107"'); //"\u0066106"); //''`\u{f106}`);
			//spanTitle.setAttribute('data-arrow', 'Changed via JavaScript!');
		}
	}

	if (doScrolling && !bToShow && !fctj.isElementInViewport(linkClicked)) {
		console.log('toggleSpanVisibility scrollIntoView');
		linkClicked.scrollIntoView(); //(0, 2500);
		//window.scrollBy(0, -20);
	}
	return false;
}

// **************************************************************
// ***	            Image Full Screen				          ***
// **************************************************************
function showFullScreen(img) {
	const fullPage = document.getElementById('fullPageImg');
	fullPage.style.backgroundImage = 'url(' + img.src + ')';
	fullPage.style.display = 'block';
}

// **************************************************************
// ***	       Displays all quotes in the page          	  ***
// **************************************************************
// Useful for building index
function logSource() {
	const aSources = [];
	const elmts = document.getElementsByClassName('bsrc');
	for (const elmt of elmts) {
		console.log(elmt);
		if (elmt && elmt.textContent.match(/\d/)) {
			let id = elmt.textContent.replace(' ', '').substring(0, 3).toLowerCase() + '-' + (aSources.length + 1);
			aSources.push('<div><a href="../index.html#bsrc-' + id + '">' + elmt.textContent + '</a></div>');
		}
	}
	const div = document.createElement('div');
	document.body.getElementsByClassName('content')[0].appendChild(div);
	div.innerHTML = aSources.join('');
	console.log(aSources);
}
