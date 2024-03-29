/********************************************************************************************/
/*******************************            IOS 7              ******************************/
/********************************************************************************************/
/********************************************************************************************/

var _library = 'ios7';
var _path = '/ios7/';

prx.comps.ios7Colors = [{value: '#FF4351',displayValue: '#FF4351'},{value: '#FD6631',displayValue: '#FD6631'},{value: '#FC880F',displayValue: '#FC880F'},{value: '#FEAE1B',displayValue: '#FEAE1B'},{value: '#FFD426',displayValue: '#FFD426'},
                             {value: '#A5DE37',displayValue: '#A5DE37'},{value: '#49E845',displayValue: '#49E845'},{value: '#55DAE1',displayValue: '#55DAE1'},{value: '#1B9AF7',displayValue: '#1B9AF7'},{value: '#7B72E9',displayValue: '#7B72E9'},
                             {value: '#DB49D8',displayValue: '#DB49D8'},{value: '#ED4694',displayValue: '#ED4694'},{value: '#000000',displayValue: '#000000'},{value: '#333333',displayValue: '#333333'},
                             {value: '#FF667A',displayValue: '#FF667A'},{value: '#FE9949',displayValue: '#FE9949'},{value: '#FEC418',displayValue: '#FEC418'},{value: '#FFD728',displayValue: '#FFD728'},{value: '#FFE93B',displayValue: '#FFE93B'},
                             {value: '#D1EF51',displayValue: '#D1EF51'},{value: '#6FF467',displayValue: '#6FF467'},{value: '#80EDF0',displayValue: '#80EDF0'},{value: '#28CDFB',displayValue: '#28CDFB'},{value: '#B9ACF4',displayValue: '#B9ACF4'},
                             {value: '#EC6EEC',displayValue: '#EC6EEC'},{value: '#F668CA',displayValue: '#F668CA'},{value: '#666666',displayValue: '#666666'},{value: '#999999',displayValue: '#999999'},
                             {value: '#FFB2BC',displayValue: '#FFB2BC'},{value: '#FFCCA4',displayValue: '#FFCCA4'},{value: '#FFE18B',displayValue: '#FFE18B'},{value: '#FFEB94',displayValue: '#FFEB94'},{value: '#FFF49B',displayValue: '#FFF49B'},
                             {value: '#E9F7A8',displayValue: '#E9F7A8'},{value: '#B6F9B2',displayValue: '#B6F9B2'},{value: '#BFF7F8',displayValue: '#BFF7F8'},{value: '#94E6FE',displayValue: '#94E6FE'},{value: '#DCD4F9',displayValue: '#DCD4F9'},
                             {value: '#F6B5F5',displayValue: '#F6B5F5'},{value: '#FCB4E6',displayValue: '#FCB4E6'},{value: '#CCCCCC',displayValue: '#CCCCCC'},{value: '#FFFFFF',displayValue: '#FFFFFF'}];
prx.commonproperties.ios7BackgroundColor = { caption: 'Background', name: 'backgroundColor', type: 'combo-colorpicker', value: function(item,name) { return item.backgroundColor; }, values: prx.comps.ios7Colors, liveUpdate: 'background-color', changeProperty: {caption: 'Background color', selector: '.changeProperty-backgroundColor', property: 'background-color', transitionable: true } }
prx.commonproperties.ios7TextColor = { caption: false, name: 'textColor', type: 'combo-colorpicker', value: function(item,name) { return item.textColor; }, values: prx.comps.ios7Colors, liveUpdate: 'color', changeProperty: { caption: 'Text color', selector: '.changeProperty-textColor', property: 'color', transitionable: true } }
prx.commonproperties.ios7BorderColor = { caption: false, name: 'borderColor', type: 'combo-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.ios7Colors, liveUpdate: 'border-color', changeProperty: { caption: 'Border Color', selector: '.changeProperty-borderColor', property: 'border-color', transitionable: true } }

/* NAVBAR BUTTONS */

prx.types.ios7_navbar_buttons = {
	name: "ios7_navbar_buttons"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _btnprops = (jQuery.inArray("bold",item.btnTextProperties)>-1) ? " font-weight: bold;" : "";
		_btnprops += (jQuery.inArray("italic",item.btnTextProperties)>-1) ? " font-style: italic;" : "";
		_btnprops += (jQuery.inArray("underline",item.btnTextProperties)>-1) ? " text-decoration: underline;" : "";

		var dims = getRealDims(item, symbol);
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-navbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-navbar-inner { background-color: '+getColor(item.backgroundColor)+'; border-'+item.borderPos+': '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; }';
		cR += '#'+_id+' .ios7-navbar-title { '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+_props+' }';
		if(item.type == "ios7_navbar_buttons") {
			cR += '#'+_id+' .ios7-navbar-button-text { '+getFontCssFromFontFamily(item.btnTextFont)+' color: '+getColor(item.btnTextColor)+'; font-size: '+item.btnTextSize+'px; '+_btnprops+' }';
		}
		cR += '</style>';
		
		cR += '<div class="ios7-navbar-inner liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderWidth changeProperty-borderColor">';
		cR += '<div class="ios7-navbar-title liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont" data-editableproperty="title">'+item.title+'</div>';
		if(item.type == "ios7_navbar_buttons" && item.leftBtnType != "none") {
			cR += '<div class="ios7-navbar-button ios7-navbar-button-left ios7-navbar-button-left-'+item.leftBtnType+'">';
			if((item.leftBtnType == "icon" || item.leftBtnType == "texticon") && item.leftBtnIcon.url != '') {
				cR += '<img class="ios7-navbar-button-icon" src="'+getAssetUrl(item.leftBtnIcon)+'">';
			}
			if(item.leftBtnType == "text" || item.leftBtnType == "texticon") {
				cR += '<div class="ios7-navbar-button-text liveUpdate-btnTextColor changeProperty-btnTextColor changeProperty-btnTextSize changeProperty-btnTextFont" data-editableproperty="leftBtnText">'+item.leftBtnText+'</div>';
			}
			cR += '</div>';
		}
		if(item.type == "ios7_navbar_buttons" && item.rightBtnType != "none") {
			cR += '<div class="ios7-navbar-button ios7-navbar-button-right ios7-navbar-button-right-'+item.rightBtnType+'">';
			if(item.rightBtnType == "text" || item.rightBtnType == "texticon") {
				cR += '<div class="ios7-navbar-button-text liveUpdate-btnTextColor changeProperty-btnTextColor changeProperty-btnTextSize changeProperty-btnTextFont" data-editableproperty="rightBtnText">'+item.rightBtnText+'</div>';
			}
			if((item.rightBtnType == "icon" || item.rightBtnType == "texticon") && item.rightBtnIcon.url != '') {
				cR += '<img class="ios7-navbar-button-icon" src="'+getAssetUrl(item.rightBtnIcon)+'">';
			}
			cR += '</div>';
		}
		cR += '</div>'
		cR += '</div>';
		return cR;
	}
	,editableProperties: [
	    {
			caption: 'Title'
			,name: 'title'
			,type: 'input'
			,value: function(item,name) {
				return item.title;
			}
			,changeProperty: {
				caption: 'Title',
				property: 'text',
				selector: '.ios7-navbar-title',
				transitionable: false
			}
		},
		{
			caption: 'Left Button'
			,name: 'leftBtnText'
			,type: 'input'
			,value: function(item,name) {
				return item.leftBtnText;
			}
			,hiddenByDefault: function(item) {
	    		return (item.leftBtnType == "none" || item.leftBtnType == "icon");
	    	}
			,changeProperty: {
				caption: 'Left Button Text',
				property: 'text',
				selector: '.ios7-navbar-button-left .ios7-navbar-button-text',
				transitionable: false
			}
		},
		{
			caption: 'Right Button'
			,name: 'rightBtnText'
			,type: 'input'
			,value: function(item,name) {
				return item.rightBtnText;
			},
			hiddenByDefault: function(item) {
				return (item.rightBtnType == "none" || item.rightBtnType == "icon");
	    	}
			,changeProperty: {
				caption: 'Right Button Text',
				property: 'text',
				selector: '.ios7-navbar-button-right .ios7-navbar-button-text',
				transitionable: false
			}
		}
	]
	,interactions: [
	    { 
	    	caption: 'Title Interactions', 
	    	name: 'ios7NavbarActionsTitle', 
	    	type: 'action', 
	    	value: function(item,name) { if (typeof(item.ios7NavbarActionsTitle) == "undefined") { item.ios7NavbarActionsTitle = []; } return item.ios7NavbarActionsTitle.length; }, 
	    	changeProperty: {
	    		caption: 'Title Interactions', 
	    		selector: '', 
	    		property: 'action', 
	    		transitionable: false, 
	    		changeable: false 
	    	} 
	    },
	    { 
	    	caption: 'Left Button Interactions', 
	    	name: 'ios7NavbarActionsLeftBtn', 
	    	type: 'action', 
	    	value: function(item,name) { if (typeof(item.ios7NavbarActionsLeftBtn) == "undefined") { item.ios7NavbarActionsLeftBtn = []; } return item.ios7NavbarActionsLeftBtn.length; }, 
	    	hiddenByDefault: function(item) {
	    		return item.leftBtnType == "none";
	    	},
	    	changeProperty: {
	    		caption: 'Left Button Interactions', 
	    		selector: '', 
	    		property: 'action', 
	    		transitionable: false, 
	    		changeable: false 
	    	} 
	    },
	    { 
	    	caption: 'Right Button Interactions', 
	    	name: 'ios7NavbarActionsRightBtn', 
	    	type: 'action', 
	    	value: function(item,name) { if (typeof(item.ios7NavbarActionsRightBtn) == "undefined") { item.ios7NavbarActionsRightBtn = []; } return item.ios7NavbarActionsRightBtn.length; }, 
	    	hiddenByDefault: function(item) {
	    		return item.rightBtnType == "none";
	    	},
	    	changeProperty: {
	    		caption: 'Right Button Interactions', 
	    		selector: '', 
	    		property: 'action', 
	    		transitionable: false, 
	    		changeable: false 
	    	} 
	    }
	]
	,propertyGroups: [
		{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor
				]
				,[
					prx.commonproperties.borderWidth
					,{ 
						caption: false, 
						name: 'borderPos', 
						type: 'select', 
						value: function(item,name) { return item.borderPos; }, 
						values: [{ value: 'none', displayValue: 'None' },{ value: 'top', displayValue: 'Top' },{ value: 'bottom', displayValue: 'Bottom' }], 
						changeProperty: { 
							caption: 'Border position', 
							rerender: true,
							changeable: false
						}
					}
					,prx.commonproperties.ios7BorderColor
				]
			]
		},
		{
		    caption: 'Title',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				]
				,[
					prx.commonproperties.textProperties
				]
			]
		},
		{
		    caption: 'Buttons',
		    properties: [
		        [
					{ 
						caption: false, 
						name: 'btnTextFont', 
						type: 'select', 
						value: function(item,name) { return item.btnTextFont; }, 
						values: function(){ return prx.comps.fonts }, 
						changeProperty: { 
							caption: 'Text font', 
							selector: '.changeProperty-btnTextFont', 
							property: 'font-family', 
							transitionable: false 
						} 
					},
					{ 
						caption: false, 
						name: 'btnTextSize', 
						type: 'combo-select', 
						value: function(item,name) { return item.btnTextSize; }, 
						values: prx.comps.textsize, 
						changeProperty: { 
							caption: 'Text size', 
							selector: '.changeProperty-btnTextSize', 
							property: 'font-size', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'btnTextColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.btnTextColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Text color', 
							selector: '.changeProperty-btnTextColor', 
							property: 'color', 
							transitionable: true 
						}
					}
				]
				,[
					{ 
						caption: false, 
						name: 'btnTextProperties', 
						type: 'checkbox', 
						value: function(item,name) { return item.btnTextProperties; }, 
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}], 
						changeProperty: { 
							caption: 'Text properties', 
							rerender: true 
						} 
					}
				]
			]
		},
		{
		    caption: 'Left Button',
		    properties: [
		        [
					{ 
						caption: false, 
						name: 'leftBtnType', 
						type: 'select', 
						value: function(item,name) { return item.leftBtnType; }, 
						values: [{ value: 'none', displayValue: 'None'}, { value: 'text', displayValue: 'Text'}, { value: 'icon', displayValue: 'Icon'}, { value: 'texticon', displayValue: 'Text & Icon'}], 
						onChange: function(item){
							if(item.leftBtnType == "none" || item.leftBtnType == "text") {
								$('#property-leftBtnIcon').hide();
							} else {
								$('#property-leftBtnIcon').show();
							}
							if(item.leftBtnType == "text" || item.leftBtnType == "texticon") {
								$('#property-leftBtnText').show();
							} else {
								$('#property-leftBtnText').hide();
							}
							if(item.leftBtnType == "none") {
								$('.interaction-property-group[data-action-property=ios7NavbarActionsLeftBtn]').hide();
							} else {
								$('.interaction-property-group[data-action-property=ios7NavbarActionsLeftBtn]').show();
							}
						},
						changeProperty: { 
							caption: 'Left button style', 
							rerender: true 
						} 
					}
		        ],
		        [
					{
						caption: false
						,name: 'leftBtnIcon'
						,type: 'combo-asset'
						,displayValue: function(item,name,index) {
							if(item.leftBtnIcon.url == '') {
								return 'No icon selected';
							}
							return item.leftBtnIcon.name;
						}
						,value: function(item,name,index) {
							return $.toJSON({
								allow: 'image',
								asset: item.leftBtnIcon
							});
						}
						,hiddenByDefault: function(item,name,index){
							return (item.leftBtnType == 'none' || item.leftBtnType == "text");
						}
						,changeProperty: {
							caption: 'Left Button Icon',
							rerender: true
						 }
					}
		        ]
		    ]
		},
		{
		    caption: 'Right Button',
		    properties: [
		        [
					{ 
						caption: false, 
						name: 'rightBtnType', 
						type: 'select', 
						value: function(item,name) { return item.rightBtnType; }, 
						values: [{ value: 'none', displayValue: 'None'}, { value: 'text', displayValue: 'Text'}, { value: 'icon', displayValue: 'Icon'}, { value: 'texticon', displayValue: 'Text & Icon'}], 
						onChange: function(item){
							if(item.rightBtnType == "none" || item.rightBtnType == "text") {
								$('#property-rightBtnIcon').hide();
							} else {
								$('#property-rightBtnIcon').show();
							}
							if(item.rightBtnType == "text" || item.rightBtnType == "texticon") {
								$('#property-rightBtnText').show();
							} else {
								$('#property-rightBtnText').hide();
							}
							if(item.rightBtnType == "none") {
								$('.interaction-property-group[data-action-property=ios7NavbarActionsRightBtn]').hide();
							} else {
								$('.interaction-property-group[data-action-property=ios7NavbarActionsRightBtn]').show();
							}
						},
						changeProperty: { 
							caption: 'Right button style', 
							rerender: true 
						} 
					}
		        ],
		        [
					{
						caption: false
						,name: 'rightBtnIcon'
						,type: 'combo-asset'
						,displayValue: function(item,name,index) {
							if(item.rightBtnIcon.url == '') {
								return 'No icon selected';
							}
							return item.rightBtnIcon.name;
						}
						,value: function(item,name,index) {
							return $.toJSON({
								allow: 'image',
								asset: item.rightBtnIcon
							});
						}
						,hiddenByDefault: function(item,name,index){
							return (item.rightBtnType == 'none' || item.rightBtnType == "text");
						}
						,changeProperty: {
							caption: 'Right Button Icon',
							rerender: true
						 }
					}
		        ]
		    ]
		},
      	{
			caption: 'Advanced',
			properties: [[
				{
					caption: 'Position fixed on transitions'
					,name: 'overlay'
					,type: 'onoff'
					,value: function(item,name) {
						if(typeof(item.overlay)=="undefined") {
							return false;
						}
						return item.overlay;
					}
					
					,changeProperty: {
						caption: 'Position fixed',
						rerender: true
					}
				}
			]]
		}
	]
}	

/* SIMPLE NAVBAR */

prx.types.ios7_navbar = cloneobject(prx.types.ios7_navbar_buttons);
prx.types.ios7_navbar.name = 'ios7_navbar';
removeProperties(prx.types.ios7_navbar.editableProperties, ['leftBtnText','rightBtnText'])
removeProperties(prx.types.ios7_navbar.interactions, ['ios7NavbarActionsTitle','ios7NavbarActionsLeftBtn','ios7NavbarActionsRightBtn'])
removeProperties(prx.types.ios7_navbar.propertyGroups, ['btnTextFont','btnTextSize','btnTextColor','btnTextProperties','leftBtnType','leftBtnIcon','rightBtnType','rightBtnIcon'])

/* TABBAR */

prx.types.ios7_tabbar = cloneobject(prx.types.basic_tabbar);
prx.types.ios7_tabbar.name = 'ios7_tabbar';
removeProperties(prx.types.ios7_tabbar.propertyGroups, ['activeBackgroundColor','borderWidth','borderColor','iconpos','iconSize'])
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'backgroundColor', 'type', 'combo-colorpicker');
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'backgroundColor', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'textColor', 'type', 'combo-colorpicker');
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'textColor', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'activeTextColor', 'type', 'combo-colorpicker');
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'activeTextColor', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskActive', 'type', 'combo-colorpicker');
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskActive', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskInactive', 'type', 'combo-colorpicker');
prx.types.ios7_tabbar.propertyGroups = editProperty(prx.types.ios7_tabbar.propertyGroups, 'maskInactive', 'values', prx.comps.ios7Colors);
prx.types.ios7_tabbar.dynamicProperties.blankItem = {
	text: 'Label',
	icon: {"fileId":"94a90bf9a645dba63ad7a41d18f82ea7.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","folderId":"f1352971179296","targetSrc":"generated/94a90bf9a645dba63ad7a41d18f82ea7_8f8f8f.svg","color":"8f8f8f"},
	activeicon: {"fileId":"94a90bf9a645dba63ad7a41d18f82ea7.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","folderId":"f1352971179296","targetSrc":"generated/94a90bf9a645dba63ad7a41d18f82ea7_1b9af7.svg","color":"1b9af7"},
	actions: []
}

/* TOOLBAR */
prx.types.ios7_toolbar = {
	name: "ios7_toolbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-toolbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';
		cR += '<div class="ios7-toolbar-inner">';
		
		cR += '<style>'
		cR += '#'+_id+' .ios7-toolbar-inner { background-color: '+getColor(item.backgroundColor)+'; border-'+item.borderPos+': '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; }';
		//cR += '#'+_id+' .ios7-toolbar-button { width: '+(_dims.width/item.buttons.length) +'px; }';
		cR += '</style>'
		
		$.each(item.buttons, function(i,elm){
			cR += '<div class="ios7-toolbar-button dynamic-property" data-dynamic-property-index="'+i+'" id="'+_id+'-buttons-'+i+'" style="background-image: url(' +getAssetUrl(elm.icon)+');"></div>'
		});
		
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,propertyGroups: [
  		{
  		    caption: 'Style',
  		    properties: [
  		        [
  					prx.commonproperties.ios7BackgroundColor
  				]
  				,[
  					prx.commonproperties.borderWidth
  					,{ 
  						caption: false, 
  						name: 'borderPos', 
  						type: 'select', 
  						value: function(item,name) { return item.borderPos; }, 
  						values: [{ value: 'none', displayValue: 'None' },{ value: 'top', displayValue: 'Top' },{ value: 'bottom', displayValue: 'Bottom' }], 
  						changeProperty: { 
  							caption: 'Border position', 
  							rerender: true,
  							changeable: false
  						}
  					}
  					,prx.commonproperties.ios7BorderColor
  				]
  			]
  		},
      	{
			caption: 'Advanced',
			properties: [[
				{
					caption: 'Position fixed on transitions'
					,name: 'overlay'
					,type: 'onoff'
					,value: function(item,name) {
						if(typeof(item.overlay)=="undefined") {
							return false;
						}
						return item.overlay;
					}
					
					,changeProperty: {
						caption: 'Position fixed',
						rerender: true
					}
				}
			]]
		}
	]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,blankItem: {
			icon: {"fileId":"94a90bf9a645dba63ad7a41d18f82ea7.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","folderId":"f1352971179296","targetSrc":"generated/94a90bf9a645dba63ad7a41d18f82ea7_1b9af7.svg","color":"1b9af7"},
   			actions: []
   		}
   		,interactions: [
   			{
  				caption: 'Interactions'
  				,name: 'actions'
  				,type: 'action'
  				,value: function(item,name,index) {
  					if (typeof(item.buttons[index].actions) == "undefined") {
  						item.buttons[index].actions = [];
  					}		
  				
  					return item.buttons[index].actions.length;
  				}
  			}    
   		]
  		,propertyGroups: [{
			caption: 'Icon',
			properties: [[
      			{
      				caption: false
      				,name: 'icon'
      				,type: 'combo-asset'
      				,displayValue: function(item,name,index) {
      					if(item.buttons[index].icon.url == '') {
      						return 'No icon selected';
      					}
      					return item.buttons[index].icon.name;
      				}
      				,value: function(item,name,index) {
      					return $.toJSON({
      						allow: 'image',
      						asset: item.buttons[index].icon
      					});
      				}
	      			,changeProperty: {
  						caption: 'Icon',
  						rerender: true
  					 }
      			}
      		]]
      	}]
	}
}

/* STATUSBAR */
prx.types.ios7_statusbar = {
	name: "ios7_statusbar"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-statusbar" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-statusbar-inner { background-color: '+getColor(item.backgroundColor)+'; color: '+getColor(item.foregroundColor)+'; }';
		cR += '#'+_id+' .ios7-statusbar-signal-dot { background-color: '+getColor(item.foregroundColor)+'; border-color: '+getColor(item.foregroundColor)+'; }';
		cR += '#'+_id+' .ios7-statusbar-battery-life-icon { background-color: '+getColor(item.foregroundColor)+'; border-color: '+getColor(item.foregroundColor)+'; }';
		cR += '#'+_id+' .ios7-statusbar-battery-life-icon-battery-pole-inner { background-color: '+getColor(item.foregroundColor)+'; }';
		cR += '</style>';
		
		cR += '<div class="ios7-statusbar-inner liveUpdate-backgroundColor liveUpdate-foregroundColor-color">';
		cR += '<div class="ios7-statusbar-signal">';
		cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
		cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
		cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
		cR += '<div class="ios7-statusbar-signal-dot liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color"></div>';
		cR += '<div class="ios7-statusbar-signal-dot ios7-statusbar-signal-dot-empty liveUpdate-foregroundColor-border-color"></div>';
		cR += '<div class="ios7-statusbar-provider">PROTO.IO</div>';
		cR += '</div>';
		cR += '<div class="ios7-statusbar-time">16:20</div>';
		cR += '<div class="ios7-statusbar-battery-life">';
		cR += '<div class="ios7-statusbar-battery-life-text">90%</div>';
		cR += '<div class="ios7-statusbar-battery-life-icon liveUpdate-foregroundColor-background-color liveUpdate-foregroundColor-border-color">';
		cR += '<div class="ios7-statusbar-battery-life-icon-battery-pole">';
		cR += '<div class="ios7-statusbar-battery-life-icon-battery-pole-inner liveUpdate-foregroundColor-background-color"></div>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		cR += '</div>'
		cR += '</div>';
		return cR;
	}
	,propertyGroups: [
		{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{ 
						caption: 'Foreground', 
						name: 'foregroundColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.foregroundColor; }, 
						values: prx.comps.ios7Colors, 
						//help: 'Will always revert to white in native app mode',
						liveUpdate: 'color,border-color,background-color',
						changeProperty: { 
							caption: 'Foreground color', 
							rerender: true 
						} 
					}
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [[
				{
					caption: 'Position fixed on transitions'
					,name: 'overlay'
					,type: 'onoff'
					,value: function(item,name) {
						if(typeof(item.overlay)=="undefined") {
							return false;
						}
						return item.overlay;
					}
					
					,changeProperty: {
						caption: 'Position fixed',
						rerender: true
					}
				}
			]]
		}
	]
}	


/* TYPE: BUTTON */
prx.types.ios7_button_bg = {
	name: "ios7_button_bg"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var text = '<div class="ios7-button-text liveUpdate-textColor changeProperty-textColor changeProperty-textFont changePropert-textSize"><span data-editableproperty="text">'+item.text+'</span></div>';
		if(item.iconpos != "none") {
			var icon = '<img class="ios7-button-icon" src="'+getAssetUrl(item.img)+'">';
		}
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-button">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-button-inner { '+cssFlexJustifyContent(item.textAlign)+' text-align: '+item.textAlign+'; background-color: '+getColor(item.backgroundColor)+'; border: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; border-radius: '+item.borderRadius+((item.borderRadius == parseInt(item.borderRadius)) ? 'px' : '')+'; }' 
		cR += '#'+_id+' .ios7-button-text { '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+_props+' }';
		cR += '</style>';
		
		cR += '<div class="ios7-button-inner ios7-button-icon-'+item.iconpos+' liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius">';
		
		switch(item.iconpos) {
		case "notext":
			cR += icon;
			break;
		case "left":
			cR += icon + text;
			break;
		case "right":
			cR += text + icon;
			break;
		default: 
			cR += text;
		}
		
		cR += '</div>';
		cR += '</div>';
		return cR;
	},
	interactions: [ prx.commonproperties.actions ],
	editableProperties: [{ 
		caption: 'Text', 
		name: 'text', 
		type: 'textarea', 
		value: function(item,name) { return item.text; }, 
		changeProperty: { 
			caption: 'Text', 
			selector: '.ios7-button-text', 
			property: 'text', 
			transitionable: false 
		} 
	}],
	propertyGroups: [
   		{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor
				]
				,[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadius
				]
			]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				]
				,[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
				]
			]
		},
		{
      		caption: 'Icon',
      		properties: [[
            	{
        			caption: false
        			,name: 'iconpos'
        			,type: 'select'
        			,value: function(item,name) {
	      				return item.iconpos;
	            		}
	      			,values: [{value: 'none',displayValue: 'No icon'},{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'},{value: 'notext',displayValue: 'Icon only (no text)'}]
	      		    ,onChange: function(item){
	      				if(item.iconpos == 'none') {
	      					$('#property-img').hide();
	      				} else {
	      					$('#property-img').show();
	      				}
	      				if(item.iconpos == 'notext') {
	      					$('#property-textSize, #property-textFont, #property-textColor, #property-textProperties, #property-textAlign').hide();
	      				} else {
	      					$('#property-textSize, #property-textFont, #property-textColor, #property-textProperties, #property-textAlign').show();
	      				}
	      				return false;
	      			}
	      			,changeProperty: {
  						caption: 'Icon position',
  						rerender: true
  					}
            	}],
		        [
					{
						caption: false
						,name: 'img'
						,type: 'combo-asset'
						,displayValue: function(item,name,index) {
							if(item.img.url == '') {
								return 'No icon selected';
							}
							return item.img.name;
						}
						,value: function(item,name,index) {
							return $.toJSON({
								allow: 'image',
								asset: item.img
							});
						}
						,hiddenByDefault: function(item,name,index){
							return (item.iconpos == 'none');
						}
						,changeProperty: {
							caption: 'Icon',
							rerender: true
						 }
					}
		        ]
	        ]
		}
	]
}

prx.types.ios7_button = cloneobject(prx.types.ios7_button_bg);
prx.types.ios7_button.name = 'ios7_button';
removeProperties(prx.types.ios7_button.propertyGroups, ['backgroundColor','borderWidth','borderColor','borderRadius'])

prx.types.ios7_button_text = cloneobject(prx.types.ios7_button);
prx.types.ios7_button_text.name = 'ios7_button_text';
removeProperties(prx.types.ios7_button_text.propertyGroups, ['img','iconpos'])

prx.types.ios7_button_icon_square = cloneobject(prx.types.ios7_button_bg);
prx.types.ios7_button_icon_square.name = 'ios7_button_icon_square';
removeProperties(prx.types.ios7_button_icon_square.propertyGroups, ['textFont','textSize','textColor','textProperties','textAlign','iconpos'])

prx.types.ios7_button_icon_circular = cloneobject(prx.types.ios7_button_icon_square);
prx.types.ios7_button_icon_circular.name = 'ios7_button_icon_circular';
removeProperties(prx.types.ios7_button_icon_circular.propertyGroups, ['borderRadius'])

prx.types.ios7_button_ui = cloneobject(prx.types.ios7_button_icon_circular);
prx.types.ios7_button_ui.name = 'ios7_button_ui';
removeProperties(prx.types.ios7_button_ui.propertyGroups, ['borderWidth', 'borderColor'])

prx.types.ios7_button_icon = cloneobject(prx.types.ios7_button_ui);
prx.types.ios7_button_icon.name = 'ios7_button_icon';
removeProperties(prx.types.ios7_button_icon.propertyGroups, ['backgroundColor'])


/* SEGMENTED CONTROL */
prx.types.ios7_segmentedcontrol = {
	name: "ios7_segmentedcontrol"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(typeof(item.changeActive) == "undefined") { item.changeActive = true; }
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-segmentedcontrol">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-segmentedcontrol-inner { background-color: '+getColor(item.backgroundColor)+'; border: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; border-radius: '+item.borderRadius+'px; '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+_props+' }'; 
		cR += '#'+_id+' .ios7-segmentedcontrol-button { border-left: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; }';
		cR += '#'+_id+' .ios7-segmentedcontrol-button input:checked + label { background-color: '+getColor(item.activeBackgroundColor)+'; color: '+getColor(item.activeTextColor)+'; }';
		cR += '#'+_id+' .ios7-segmentedcontrol-button:first-child label { border-radius: '+(parseInt(item.borderRadius) - parseInt(item.borderWidth) -1)+'px 0 0 '+(parseInt(item.borderRadius) - parseInt(item.borderWidth) -1)+'px; }';
		cR += '#'+_id+' .ios7-segmentedcontrol-button:last-child label { border-radius: 0 '+(parseInt(item.borderRadius) - parseInt(item.borderWidth) -1)+'px '+(parseInt(item.borderRadius) - parseInt(item.borderWidth) -1)+'px 0; }';
		cR += '</style>';
		
		cR += '<div class="ios7-segmentedcontrol-inner liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">';
		$.each(item.buttons, function(i,elm) {
			cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-segmentedcontrol-button dynamic-property liveUpdate-borderColor" data-dynamic-property-index="'+i+'">';
			cR += '<input type="radio" name="'+_id+'-radio-input" id="'+_id+'-radio-'+i+'" '+((item.selected == i) ? 'checked' : '')+' data-role="none" '+((item.active == i) ? 'class="liveUpdate-activeBackgroundColor liveUpdate-activeTextColor"' : '')+' ' +((!item.changeActive) ? 'disabled' : '')+ '>'
			cR += '<label for="'+_id+'-radio-'+i+'" '+((item.selected == i) ? 'class="liveUpdate-activeBackgroundColor liveUpdate-activeTextColor"' : '')+' >'
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + elm.text + '</span>';
			cR += '</label>'
			cR += '</div>';
		});
		cR += '</div>'
		cR += '</div>';
		return cR;
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{ 
						caption: 'Active', 
						name: 'activeBackgroundColor',
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.activeBackgroundColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'active Background color', 
							selector: '.changeProperty-activeBackgroundColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					}
				]
				,[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadius
				]
			]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				]
				,[
					prx.commonproperties.textProperties,
					{ 
						caption: 'Active', 
						name: 'activeTextColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.activeTextColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Active Text color', 
							selector: '.changeProperty-activeTextColor', 
							property: 'color', 
							transitionable: true 
						} 
					}
				]
			]
		},
		{
      	  caption: 'Advanced',
      	  properties: [
			   [
					{
							caption: 'Active Button'
							,name: 'selected'
							,type: 'select'
							,value: function(item,name) {
								return item.selected;
							}
							,values: function(item,name) {
								//var _rA = []; 
								var _rA = [{value: '999',displayValue: 'None'}];
								for (var n = 0; n < item.buttons.length; n++) {
									_rA.push({value: n,displayValue: item.buttons[n].text});
								}	
								return _rA;
							} 
							,changeProperty: {  
								caption: 'Button',
								rerender: true
							} 

					}
            ],
            [
	   			{
	  	  			caption: 'Change active state on click'
	  	  			,name: 'changeActive'
	  	  			,type: 'onoff'
	  	  			,value: function(item,name) {
	  	      			return item.changeActive;
	  	      		}
	      			,changeProperty: {
						caption: 'Change active state on click',
						rerender: true
					}
				}
	   		]
            ]
        }
	]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,captionProperty: 'text'
   		,blankItem: {
			text: 'Label',
   			actions: []
   		}
   		,interactions: [
   			{
  				caption: 'Interactions'
  				,name: 'actions'
  				,type: 'action'
  				,value: function(item,name,index) {
  					if (typeof(item.buttons[index].actions) == "undefined") {
  						item.buttons[index].actions = [];
  					}		
  				
  					return item.buttons[index].actions.length;
  				}
  			}    
   		]
   		,editableProperties: [
  			{
 				caption: 'Text'
 				,name: 'text'
 				,type: 'input'
 				,value: function(item,name,index) {
 					return item.buttons[index].text;
 				}
 				,changeProperty: {
					caption: 'Text',
					selector: 'label',
					property: 'text',
					transitionable: false
				 }
 			}
  		]
	}
}

/* PAGE CONTROLLER */
prx.types.ios7_pagecontroller = {
	name: "ios7_pagecontroller"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		
		if(typeof(item.changeActive) == "undefined") { item.changeActive = true; }
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-pagecontroller">';
		
		cR += '<style>'; 
		cR += '#'+_id+' .ios7-pagecontroller-button label { background-color: '+getColor(item.backgroundColor)+'; border-radius: '+item.borderRadius+((item.borderRadius==parseInt(item.borderRadius)) ? 'px': '')+'; width: '+_dims.height+'px; }';
		cR += '#'+_id+' .ios7-pagecontroller-button input:checked + label { background-color: '+getColor(item.activeBackgroundColor)+'; }';
		cR += '</style>';
		
		cR += '<div class="ios7-pagecontroller-inner">';
		$.each(item.buttons, function(i,elm) {
			cR += '<div class="ios7-pagecontroller-button dynamic-property" data-dynamic-property-index="'+i+'" id="'+_id+'-buttons-'+i+'">';
			cR += '<input type="radio" name="'+_id+'-radio-input" id="'+_id+'-radio-'+i+'" '+((item.selected == i) ? 'checked' : '')+' data-role="none" '+((item.active == i) ? 'class="liveUpdate-activeBackgroundColor liveUpdate-activeTextColor"' : '')+' ' +((!item.changeActive) ? 'disabled' : '')+ '>'
			cR += '<label for="'+_id+'-radio-'+i+'" class="changeProperty-backgroundColor changeProperty-borderRadius '+((item.selected == i) ? 'liveUpdate-activeBackgroundColor' : 'liveUpdate-backgroundColor')+'" ></label>';
			cR += '</div>';
		});
		cR += '</div>'
		cR += '</div>';
		return cR;
	},
	onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		$('#'+_id+' label').width(_dims.height);
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{ 
						caption: 'Active', 
						name: 'activeBackgroundColor',
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.activeBackgroundColor; },
						values: prx.comps.ios7Colors,
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'active Background color', 
							selector: '.changeProperty-activeBackgroundColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					}
				]
				,[
					{ 
						caption: 'Border <span class="property-icon property-border-radius" title="Border radius"></span>', 
						name: 'borderRadius', 
						type: 'combo-select', 
						value: function(item,name) { return item.borderRadius; }, 
						values: { min: 0, max: 20, step: 1 }, 
						changeProperty: { 
							caption: 'Border radius', 
							selector: '.changeProperty-borderRadius', 
							property: 'border-radius', 
							transitionable: true 
						} 
					}
				]
			]
		},
		{
      	  caption: 'Advanced',
      	  properties: [
			   [
					{
							caption: 'Active Button'
							,name: 'selected'
							,type: 'select'
							,value: function(item,name) {
								return item.selected;
							}
							,values: function(item,name) {
								//var _rA = []; 
								var _rA = [{value: '999',displayValue: 'None'}];
								for (var n = 0; n < item.buttons.length; n++) {
									_rA.push({value: n,displayValue: 'Button ' + (n+1) });
								}	
								return _rA;
							} 
							,changeProperty: {  
								caption: 'Button',
								rerender: true
							} 

					}
            ],
            [
	   			{
	  	  			caption: 'Change active state on click'
	  	  			,name: 'changeActive'
	  	  			,type: 'onoff'
	  	  			,value: function(item,name) {
	  	      			return item.changeActive;
	  	      		}
	      			,changeProperty: {
						caption: 'Change active state on click',
						rerender: true
					}
				}
	   		]
            ]
        }
	]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,blankItem: {
			text: 'Label',
   			actions: []
   		}
   		,interactions: [
   			{
  				caption: 'Interactions'
  				,name: 'actions'
  				,type: 'action'
  				,value: function(item,name,index) {
  					if (typeof(item.buttons[index].actions) == "undefined") {
  						item.buttons[index].actions = [];
  					}		
  				
  					return item.buttons[index].actions.length;
  				}
  			}    
   		]
	}
}

/* TYPE: LABEL */
prx.types.ios7_label = {
	name: "ios7_label"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-label">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-label-inner { '+cssFlexJustifyContent(item.textAlign)+' text-align: '+item.textAlign+'; }' 
		cR += '#'+_id+' .ios7-label-text { '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+_props+' }';
		cR += '</style>';
		
		cR += '<div class="ios7-label-inner">';
		cR += '<div class="ios7-label-text liveUpdate-textColor changeProperty-textColor changeProperty-textFont changePropert-textSize"><span data-editableproperty="text">'+item.text+'</span></div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	},
	editableProperties: [{ 
		caption: 'Text', 
		name: 'text', 
		type: 'textarea', 
		value: function(item,name) { return item.text; }, 
		changeProperty: { 
			caption: 'Text', 
			selector: '.ios7-label-text', 
			property: 'text', 
			transitionable: false 
		} 
	}],
	propertyGroups: [
   		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				]
				,[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
				]
			]
		}
	]
}

//TYPE: TEXTFIELD
prx.types.ios7_textfield = {
	name: 'ios7_textfield'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var _dims = getRealDims(item, symbol);
		
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-ios7-textfield type-ios7-textfield-'+item.inputtype+'">';
		cR += '<style>';
		cR += '#'+_id+' input, #'+_id+' .faux-input { background-color: '+getColor(item.backgroundColor)+'; color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+getFontCssFromFontFamily(item.textFont)+' border: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; border-radius: '+item.borderRadius+'px; text-align: '+item.textAlign+'; '+ _props + ' }';
		cR += '#'+_id+' .faux-input.placeholder-input { color: '+getColor(item.placeholderColor)+'; }'
		cR += '#'+_id+' .faux-input { '+cssFlexJustifyContent(item.textAlign)+'; }'
		cR += '#'+_id+' input:-moz-placeholder { color: '+getColor(item.placeholderColor)+'!important; }'
		cR += '#'+_id+' input::-moz-placeholder { color: '+getColor(item.placeholderColor)+'!important; }'
		cR += '#'+_id+' input::-webkit-input-placeholder { color: '+getColor(item.placeholderColor)+'!important; }'
		cR += '</style>'

		if(prx.editor) {
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-borderColor liveUpdate-backgroundColor" data-editableproperty="value">'+item.value+'</div>';
			cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor liveUpdate-borderColor liveUpdate-backgroundColor">'+item.placeholder+'</div>'
		} else {
			cR += '<input type="'+item.inputtype+'" value="'+item.value+'" placeholder="'+item.placeholder+'" data-role="none" class="real-input changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textAlign" />'
		}
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+' .real-input').focus(function(){
				if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
		        prx.triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
				$('#'+_id).trigger('inputfocus');
			});
			
			$('#'+_id+' .real-input').blur(function(){
				if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
		        prx.triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputblur');
			});
			
			$('#'+_id+' .real-input').keyup(function(){
				if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
		        prx.triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputkeyup');
			});
		}
	}
	,interactions: [
			prx.commonproperties.actions
		]
    ,mpactions: {
    	specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
		,editableProperties: [
              		{
	    	caption: 'Value'
	    	,name: 'value'
	    	,type: 'input'
	    	,value: function(item,name) {
	    		return item.value;
	    	}
	    	,changeProperty: {  
				caption: 'Value',
				property: 'input-value',
				selector: 'input.real-input',
				transitionable: false
			} 
	    }
      ]
	,propertyGroups: [	
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.ios7BackgroundColor
				]
				,[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadius
				]
			]
		},{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				],	
				[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
				]
			]
		},{
			caption: 'Placeholder (If field is empty)',
	    	properties: [
				[
					{
						caption: false,
						name: 'placeholder',
						type: 'input',
						value: function(item,name) {
							return item.placeholder;
						}
						,changeProperty: {  
							caption: 'Placeholder',
							rerender: true
						} 
					}
				],
				[
					{ 
					   caption: 'Placeholder Color', 
					   name: 'placeholderColor', 
					   type: 'combo-colorpicker',
					   value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; }
						,values: prx.comps.ios7Colors
					   ,liveUpdate:'color'
					   ,changeProperty: {  
							caption: 'Placeholder color',
							rerender: true
						} 
				   }
				]
			]
		},
		{
			caption: 'Input type',
			properties: [				
				[
					{
						caption: false,
						name: 'inputtype',
						type: 'select',
						value: function(item,name) {
							return item.inputtype;
						}
						,values: [{ value: 'text', displayValue: 'Text' }, { value: 'number', displayValue: 'Numeric' }, { value: 'email', displayValue: 'Email' }, { value: 'password', displayValue: 'Password' }] 
						,changeProperty: {  
							caption: 'Input type',
							rerender: true
						} 
						,hiddenByDefault: function(item) {
							//return (item.inputtype=="password")
							return (item.name == "ios7_passwordfield")
						}
					}
				]
			]
		}
	]
	
};

//TYPE: TEXTAREA
prx.types.ios7_textarea = {
	name: 'ios7_textarea'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';
		
		cR += '<div id="' + _id + '" class="box pos type-ios7-textarea">';
		cR += '<style>';
		cR += '#'+_id+' > textarea, #'+_id+' .faux-input { background-color: '+getColor(item.backgroundColor)+'; color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+getFontCssFromFontFamily(item.textFont)+' border: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; text-align: '+item.textAlign+'; '+cssBorderRadius(item.borderRadius + 'px')+ _props + '}';
		cR += '#'+_id+' .faux-input { '+cssFlexJustifyContent(item.textAlign)+'; }'
		cR += '#'+_id+' .faux-input.placeholder-input { color: '+getColor(item.placeholderColor)+'; }'
		cR += '#'+_id+' textarea:-moz-placeholder { color: '+getColor(item.placeholderColor)+'!important; }'
		cR += '#'+_id+' textarea::-webkit-input-placeholder { color: '+getColor(item.placeholderColor)+'!important; }'
		cR += '#'+_id+' textarea::-moz-placeholder { color: '+getColor(item.placeholderColor)+'!important; }'
		cR += '</style>'
		if(prx.editor) {
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-borderColor liveUpdate-backgroundColor" data-editableproperty="value">'+item.value+'</div>';
			cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor liveUpdate-borderColor liveUpdate-backgroundColor">'+item.placeholder+'</div>'
		} else {
			cR += '<textarea class="liveUpdate-placeholderColor liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textSize changeProperty-textFont changeProperty-textColor changeProperty-textAlign" placeholder="'+item.placeholder+'" style="background-color: '+getColor(item.backgroundColor)+'; color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+getFontCssFromFontFamily(item.textFont)+'; border: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; '+cssBorderRadius(item.borderRadius + 'px')+_props+'" data-role="none">'+item.value.replace(/<br \/>/g, "\n")+'</textarea>'
		}
		cR += '</div>'
		return cR;
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+' textarea').focus(function(){
				if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
		        prx.triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
				$('#'+_id).trigger('inputfocus');
			});
			
			$('#'+_id+' textarea').blur(function(){
				if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
		        prx.triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputblur');
			});
			
			$('#'+_id+' textarea').keyup(function(){
				if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
		        prx.triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
		        $('#'+_id).trigger('inputkeyup');
			});
		}
	}
	
	,editableProperties: [
              {
      	    	caption: 'Value'
      	    	,name: 'value'
      	    	,type: 'textarea'
      	    	,value: function(item,name) {
      	    		return item.value;
      	    	}
      	    	,changeProperty: {  
					caption: 'Value',
					property: 'textarea-value',
					selector: 'textarea',
					transitionable: false
				} 
      	    }
	  	]

	,interactions: [
			prx.commonproperties.actions
		]
		
    ,mpactions: {
    	specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
	,propertyGroups:	[
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.ios7BackgroundColor
				],
				[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadius
					
				]
			]
			
		},
		{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				],	
				[
					prx.commonproperties.textProperties,
					prx.commonproperties.textAlign
				]
			]
		},{
			caption: 'Placeholder  (If field is empty)',
	    	properties: [
				[
					{
						caption: false
						,name: 'placeholder'
						,type: 'input'
						,value: function(item,name) {
							return item.placeholder;
						}
		      	    	,changeProperty: {  
							caption: 'Placeholder',
							rerender: true
						} 
					}
				],
				[
					{ 
						caption: 'Placeholder Color', 
						name: 'placeholderColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; } 
						,values: prx.comps.ios7Colors
						,liveUpdate:'color'
		      	    	,changeProperty: {  
							caption: 'Placeholder color',
							rerender: true
						} 
					}
				]
			]
		}
	]
};

/* TYPE: CHECKBOX */
prx.types.ios7_checkbox = {
	name: "ios7_checkbox"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
	
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-checkbox">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-checkbox-inner { background-color: '+getColor(item.backgroundColor)+'; border: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; border-radius: '+item.borderRadius+((item.borderRadius == parseInt(item.borderRadius)) ? 'px' : '')+'; }'
		cR += '#'+_id+' input:checked + .ios7-checkbox-inner { background-color: '+getColor(item.activeBackgroundColor)+'; }'
		cR += '</style>';
		
		cR += '<input type="checkbox" id="'+_id+'-checkbox" '+((item.active) ? 'checked="checked"' : '') + ' data-role="none" />';
		cR += '<label for="'+_id+'-checkbox" class="ios7-checkbox-inner '+((item.active) ? 'liveUpdate-activeBackgroundColor' : 'liveUpdate-backgroundColor liveUpdate-borderColor') + ' changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius" data-clickable="true">';
		cR += '<img class="ios7-checkbox-icon" src="'+getAssetUrl(item.img)+'">';
		cR += '</label>';
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-checkbox').change(function(){
				if(typeof(prx.triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }        					
		        prx.triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }        					
		        prx.triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
		}
	}
	,interactions: [
					{
						caption: 'Interactions on activation', 
						name: 'checkboxActionsOnActive', 
						type: 'action',
						value: function(item,name) {
							if(typeof(item.checkboxActionsOnActive) == "undefined") {
								item.checkboxActionsOnActive = [];
							}
							return item.checkboxActionsOnActive.length; 
						}
					},
					{
						caption: 'Interactions on deactivation', 
						name: 'checkboxActionsOnDeactive', 
						type: 'action', 
						value: function(item,name) {
							if(typeof(item.checkboxActionsOnDeactive) == "undefined") {
								item.checkboxActionsOnDeactive = [];
							}
							return item.checkboxActionsOnDeactive.length; 
						}
					}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [
   		{
		    caption: 'Style',
		    properties: [
		        [
					{ 
						caption: 'Background', 
						name: 'backgroundColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.backgroundColor; }, 
						values: prx.comps.ios7Colors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Background color', 
							rerender: true
						} 
					},
					{ 
						caption: 'Active', 
						name: 'activeBackgroundColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.activeBackgroundColor; }, 
						values: prx.comps.ios7Colors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Active background color', 
							rerender: true
						} 
					}
				]
				,[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadius
				]
			]
		},
		{
      		caption: 'Icon',
      		properties: [[
            		{
						caption: false
						,name: 'img'
						,type: 'combo-asset'
						,displayValue: function(item,name,index) {
							if(item.img.url == '') {
								return 'No icon selected';
							}
							return item.img.name;
						}
						,value: function(item,name,index) {
							return $.toJSON({
								allow: 'image',
								asset: item.img
							});
						}
						,changeProperty: {
							caption: 'Icon',
							rerender: true
						 }
					}
		        ]
	        ]
		},
		{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {  
							caption: 'Active state',
							rerender: true
						} 

					}
				]
			]
		}
	]
}

//TYPE: ON OFF SWITCH 
prx.types.ios7_switch = {
	name: 'ios7_switch'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		
		var cR = '';
		cR += '<div id="' + _id + '" class="box pos type-ios7-switch">';
		
		cR += '<style>'
		cR += '#'+_id+' label { border-radius: '+(_dims.height/2)+'px; border: '+item.borderWidth+'px solid '+getColor(item.inactiveBorderColor)+'; background-color: '+getColor(item.inactiveLabelColor)+'; }'
		cR += '#'+_id+' input:checked + label { border-color: '+getColor(item.activeBorderColor)+'; background-color: '+getColor(item.activeLabelColor)+'; }'
		cR += '#'+_id+' .switch { left: '+item.borderWidth+'px; top: '+item.borderWidth+'px; bottom: '+item.borderWidth+'px; width: '+(_dims.height-item.borderWidth*2)+'px; background-color: '+getColor(item.switchColor)+'; }'
		cR += '#'+_id+' input:checked + label .switch { left: '+(_dims.width - _dims.height + parseInt(item.borderWidth))+'px; border-color: '+getColor(item.activeBorderColor)+'; }'
		cR += '</style>'
		
		cR += '<input type="checkbox" '+((item.active) ? 'checked' : '')+ ' id="'+_id+'-flipswitch" data-role="none" />';
		cR += '<label for="'+_id+'-flipswitch" class="'+((item.active) ? 'liveUpdate-activeBorderColor liveUpdate-activeLabelColor' : 'liveUpdate-inactiveBorderColor liveUpdate-inactiveLabelColor')+'" data-clickable="true">'; // data-clickable for greensock draggable - if draggable or in draggable container clicking on the flipswitch wont change state
		cR += '<div class="switch liveUpdate-switchColor"></div>'; 
		cR += '</label>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		
		$('#'+_id+' label').css('border-radius', (_dims.height/2)+'px');
		$('#'+_id+' .switch').width(_dims.height-item.borderWidth*2);
		if($('#'+_id+'-flipswitch').is(':checked')) {
			$('#'+_id+' .switch').css('left', (_dims.width - _dims.height)+'px');
		}
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-flipswitch').change(function(){		
				if(typeof(prx.triggerData['input:checked[id='+_id+'-flipswitch]']) == "undefined") { prx.triggerData['input:checked[id='+_id+'-flipswitch]'] = {}; }
		        prx.triggerData['input:checked[id='+_id+'-flipswitch]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.triggerData['input[id='+_id+'-flipswitch]:not(:checked)']) == "undefined") { prx.triggerData['input[id='+_id+'-flipswitch]:not(:checked)'] = {}; }	
		        prx.triggerData['input[id='+_id+'-flipswitch]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
		}
	}
	,interactions:	[
		{ 
			caption: 'Interactions on activation', 
			name: 'flipswitchActionsOnActive', 
			type: 'action',
			value: function(item,name) {
			if(typeof(item.flipswitchActionsOnActive) == "undefined") {
					if (typeof(item.actionsOnActive) == "undefined") { 
						item.flipswitchActionsOnActive = []; 
					} else {
						item.flipswitchActionsOnActive = item.actionsOnActive;
					}
				}
				return item.flipswitchActionsOnActive.length; 
			} 
		}
		,{ 
			caption: 'Interactions on deactivation', 
			name: 'flipswitchActionsOnDeactive', 
			type: 'action', 
			value: function(item,name) {
				if(typeof(item.flipswitchActionsOnDeactive) == "undefined") {
					if (typeof(item.actionsOnDeactive) == "undefined") { 
						item.flipswitchActionsOnDeactive = []; 
					} else {
						item.flipswitchActionsOnDeactive = item.actionsOnDeactive;
					}
				}
				return item.flipswitchActionsOnDeactive.length; 
			}  
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange'],
	}
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				
				[
					{
						caption: 'Label Inactive'
						,name: 'inactiveLabelColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.inactiveLabelColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
						,changeProperty: {  
							caption: 'Inactive color',
							rerender: true
						}
					},
					{
						caption: 'Active'
						,name: 'activeLabelColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.activeLabelColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
						,changeProperty: {  
							caption: 'Active label color',
							rerender: true
						}
					}
				]
				,[	
				 	prx.commonproperties.borderWidth,
				 	{ 
						caption: 'Inactive', 
						name: 'inactiveBorderColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.inactiveBorderColor; }, 
						values: prx.comps.ios7Colors, 
						liveUpdate: 'border-color'
						,changeProperty: {  
							caption: 'Inactive border color',
							rerender: true
						} 
					}
				 	,{ 
						caption: 'Active', 
						name: 'activeBorderColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.activeBorderColor; }, 
						values: prx.comps.ios7Colors, 
						liveUpdate: 'border-color'
						,changeProperty: {  
							caption: 'Active border color',
							rerender: true
						} 
					}
				],[
					{
						caption: 'Switch'
						,name: 'switchColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.switchColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
						,changeProperty: {  
							caption: 'Switch color',
							property: 'background-color',
							selector: '.switch',
							transitionable: true
						}
					}
				]
			]
		},{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {  
							caption: 'Active',
							rerender: true
						}
					},
				]
			]
		}
	]
	
}

//TYPE: SLIDER
prx.types.ios7_slider = {
	name: 'ios7_slider'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		
		var cR = '';			
		cR += '<div id="' + _id + '" class="box pos type-ios7-slider">';
		cR += '<style>'
		cR += '#'+_id+' .slider-bar { height: '+item.barThickness+'px; background-color: '+getColor(item.barColor)+'; margin-top: -'+(item.barThickness/2)+'px; }'
		cR += '#'+_id+' .slider-bar-filled { width: '+item.sliderPosition+'%; background-color: '+getColor(item.fillBarColor)+' }'
		cR += '#'+_id+' .slider-button { background-color: '+getColor(item.sliderColor)+'; border-radius: '+item.sliderBorderRadius + ((item.sliderBorderRadius == parseInt(item.sliderBorderRadius)) ? 'px' : '')+'; width: '+_dims.height+'px; margin-left: -'+(_dims.height/2)+'px; margin-right: -'+(_dims.height/2)+'px; left: '+item.sliderPosition+'%; }';
		cR += '</style>'
		cR += '<div class="slider-bar liveUpdate-barColor">';
		cR += '<div class="slider-bar-filled liveUpdate-fillBarColor"></div>'
		cR += '</div>';
		cR += '<span class="slider-button liveUpdate-sliderColor"></span>';
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		
		$('#'+_id+' .slider-button').css({
			width: _dims.height+'px',
			marginLeft: '-'+(_dims.height/2)+'px',
			marginRight: '-'+(_dims.height/2)+'px'
		})
		
	}
	,afterDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			
			var _dims = getRealDims(item,symbol);
			
			Draggable.create('#'+_id+' .slider-button', {
				type: 'x',
				bounds: { left: $('#'+_id).offset().left - (_dims.height/2), width: parseInt(_dims.width) + parseInt(_dims.height), top: 0, height: 0 },
				onDragStart: function(){
					$(this.target).parents('.box').each(function() { 
            			if(typeof(prx.scroller[this.id + '-inner']) != "undefined") {
            				prx.scroller[this.id + '-inner'].disable();
            			}
            		})
            		
            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
            		var progress = Math.ceil((pos / width)*100)
					
					if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
			        prx.triggerData['#'+_id]['sliderdragstart'] = { value: progress };
					$('#'+_id).trigger('sliderdragstart');
					
					// hack instead of ondrag because greensock on drag only triggers if the item has actually moved
					// so if you are at 0 or 100 it only triggers once, which results in the value not always being updated
					// because of the "actionIsRunning" check
					$(document).on('mousemove.prx-sliderdrag touchmove.prx-sliderdrag', function(){ 
						var pos = $('#' + _id + ' .slider-button').position().left;
						var width = $('#' + _id).width();
						
						$('#'+_id+' .slider-bar-filled').width(pos);
						var progress = Math.ceil((pos / width)*100)

						if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
				        prx.triggerData['#'+_id]['sliderdrag'] = { value: progress };
						$('#'+_id).trigger('sliderdrag');
					})
				},
				onDragEnd: function(){
					
					$(document).off('mousemove.prx-sliderdrag touchmove.prx-sliderdrag');
					
					$(this.target).parents('.box').each(function() { 
            			if(typeof(prx.scroller[this.id + '-inner']) != "undefined") {
            				//alert('x')
            				prx.scroller[this.id + '-inner'].enable();
            			}
            		})
            		
            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
					var progress = Math.ceil((pos / width)*100)
					
					if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
			        prx.triggerData['#'+_id]['sliderdragend'] = { value: progress };
					$('#'+_id).trigger('sliderdragend');
				}
			});
			
			$('#'+_id+' .slider-bar').click(function(e){
				var _pos = e.pageX - $(this).offset().left;
				
				$(this).find('.slider-bar-filled').width(_pos);
				$(this).siblings('.slider-button').css({ left: _pos + 'px' });
				
				var progress = Math.ceil((_pos / $('#'+_id).width())*100)
				
				if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }
				
				prx.triggerData['#'+_id]['sliderdragstart'] = { value: progress };
				prx.triggerData['#'+_id]['sliderdrag'] = { value: progress };
				prx.triggerData['#'+_id]['sliderdragend'] = { value: progress };
				$('#'+_id).trigger('sliderdragstart');
				$('#'+_id).trigger('sliderdrag');	
				$('#'+_id).trigger('sliderdragend');
			});
		}
	}
	,interactions: [prx.commonproperties.actions]
	,mpactions: {
		specialEvents: ['sliderdragstart','sliderdrag','sliderdragend']
	}
	,propertyGroups:	[
				
		{
			caption: 'Bar',
			properties: [
				[
					{
						caption: 'Thickness'
						,name: 'barThickness'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.barThickness;
						}
						,values: { min: 2, max: 20, step: 2 }
		      	    	,changeProperty: {  
							caption: 'Thickness',
							rerender: true,
							changeable: false
						} 
					}
				],
				[
					{
						caption: 'Color'
						,name: 'barColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.barColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Color',
							property: 'background-color',
							selector: '.slider-bar',
							transitionable: true
						} 
						
					},
					{
						caption: 'Fill Color'
						,name: 'fillBarColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.fillBarColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Fill Color',
							property: 'background-color',
							selector: '.slider-bar-filled',
							transitionable: true
						} 
					}
				]
			]
		},
		{
			caption: 'Slider',
	    	properties: [
				[
					{
						caption: 'Color'
						,name: 'sliderColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.sliderColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Slider color',
							property: 'background-color',
							selector: '.slider-button',
							transitionable: true
						} 
					},
					{
						caption: '<span class="property-icon property-border-radius" title="Border radius"></span>'
						,name: 'sliderBorderRadius'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.sliderBorderRadius;
						}
						,values: { min: 0, max: 20, step: 2 },changeProperty: {  
							caption: 'Slider border-radius',
							property: 'border-radius',
							selector: '.slider-button',
							transitionable: true
						} 
					}
				]
				,[
					{
						caption: 'Original position (%)'
						,name: 'sliderPosition'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.sliderPosition;
						}
						,values: { min: 0, max: 100, step: 10 }
						,changeProperty: {  
							caption: 'Slider position',
							rerender: true
						} 
					}
				],
				
			]
		}
	]
}

prx.types.ios7_picker = {
		name: 'ios7_picker'
		,onDisplay: function(item,containerid,pageid,symbol) {
			var _id = (!containerid) ? item.id : containerid+'-'+item.id;
			
			var _dims = getRealDims(item,symbol);
			var _options = item.values.split("<br />");
			var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
			
			var cR = '<div id="' + _id + '" class="box pos type-ios7-picker"><div class="outer">';
			
			cR += '<style>';
			cR += '#'+_id+' .inner { background-color: '+getColor(item.backgroundColor)+'; color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; text-align: '+item.textAlign+'; '+getFontCssFromFontFamily(item.textFont)+' '+_props+' }'
			// cR += '#'+_id+' ul { padding: '+(_dims.height/2-32)+'px 0; }'; // chrome needs this to be inline otherwise iscroll height is not correctly calculated :S
			cR += '#'+_id+' input:checked + label { color: '+getColor(item.activeTextColor)+'; }'
			cR += '#'+_id+' .bar { border-color: '+getColor(item.textColor)+'; } ';
			cR += '</style>';
			
			cR += '<div class="inner liveUpdate-backgroundColor changeProperty-backgroundColor liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textAlign" id="' + _id + '-inner">';
			cR += '<ul style="padding: '+(_dims.height/2-32)+'px 0;">';

			for(var i = 0; i < _options.length; i++) {
				cR += '<li>';
				cR += '<input type="radio" data-role="none" id="'+_id+'-option'+i+'" name="'+_id+'-input" '+((i == item.selectedValue) ? 'checked' : '' )+'/>';
				cR += '<label '+((i == item.selectedValue) ? 'class="liveUpdate-activeTextColor"' : '' )+' for="'+_id+'-option'+i+'">' + _options[i] + '</label>';
				cR += '</li>';
			};
			cR += '</ul>'

			cR += '<div class="bar liveUpdate-textColor-border-color"></div>';
			cR += '</div>';
			cR += '</div>';
			cR += '</div>';
			return cR;
		}
		,onResize: function(item,containerid) {
			var _id = (!containerid) ? item.id : containerid+'-'+item.id;
			$('#' + _id + ' ul').css('padding', (item.height/2-32)+'px 0');
		}
		,afterDisplay: function(item,containerid) {
			var _id = (!containerid) ? item.id : containerid+'-'+item.id;
			var manualScroll = false;
			if(!prx.editor) {
				//if (typeof(prx.scroller[_id + '-inner'])=='undefined') {
					try {
						prx.scroller[_id + '-inner'] = new IScroll('#'+_id + '-inner',{
							scrollX: false,
							scrollbars: false,
							mousewheel: false,
							probeType: 1,
							bounce: false,
							twoWayScroll: true,
							deceleration: 0.008,
							//momentum: false
						});
						
						prx.scroller[_id + '-inner'].on('scrollEnd', function() {
							// ROUND POSITION TO NEAREST LI (64 = LI HEIGHT)
							
							var index = Math.abs(Math.round(prx.scroller[_id + '-inner'].y/64));
							$('#'+_id+' li').eq(index).find('input').attr('checked', 'checked')
							prx.scroller[_id + '-inner'].scrollTo(0,index*-64);
							
							if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
					        prx.triggerData['#'+_id]['pickerchange'] = { selected: $('#'+_id+' li').eq(index).find('label').text() }
							$('#'+_id).trigger('pickerchange');
					        /*
					        $('#'+_id).attr('data-justscrolled', 1)
					        setTimeout(function(){$('#'+_id).attr('data-justscrolled', 0)}, 20)
					        */
						});
						
						prx.scroller[_id + '-inner'].on('scroll', function(a,b) {
							
							var index = Math.abs(Math.round(prx.scroller[_id + '-inner'].y/64));
							$('#'+_id+' li').eq(index).find('input').attr('checked', 'checked')
						});
						
						//BRINGS SELECTED LI TO CENTER, UNDER INDICATOR, ON CLICK
						$('#' + _id + ' li').hammer().on('tap', function(e){
						//$('#' + _id + ' li').on('click', function(e){
							/* i think no longer needed 
							if($('#'+_id).attr('data-justscrolled') == 1) {
								console.log('preventing tap')
								e.preventDefault();
								return true; 
							}
							*/
							
							prx.scroller[_id + '-inner'].scrollTo(0,-$(this).index() * 64, 300);
							
							if(typeof(prx.triggerData['#'+_id]) == "undefined") { prx.triggerData['#'+_id] = {}; }        					
					        prx.triggerData['#'+_id]['pickerchange'] = { selected: $(this).text() }
							$('#'+_id).trigger('pickerchange');
						})
						
						$('#' + _id + ' li').on('click', function(e){
							e.preventDefault();
						});
						// DEFAULT SELECTED ITEM
						var _options = item.values.split("<br />");
						if(item.selectedValue <= _options.length && item.selectedValue!=-1) {
							prx.scroller[_id + '-inner'].scrollTo(0,-item.selectedValue * 64);
						}
					} catch(err){};
				//}
			} else {
				var _options = item.values.split("<br />");
				if(item.selectedValue < _options.length && item.selectedValue!=-1) {
					$('#' + _id + ' ul').css('margin-top', (-item.selectedValue * 64) + 'px');
				}
			}
		}
		,interactions: [prx.commonproperties.actions]
	    ,mpactions: {
	    	specialEvents: ['pickerchange']
	    }
		,propertyGroups:	[
					
			{
				caption: 'Style',
		    	properties: [
					[
					 	prx.commonproperties.ios7BackgroundColor
					]
				]
			},
			{
				caption: 'Text',
				properties: [
					[
						prx.commonproperties.textFont,
						prx.commonproperties.textSize,
						{ 
							caption: false, 
							name: 'textColor', 
							type: 'combo-colorpicker', 
							value: function(item,name) { return item.textColor; }, 
							values: prx.comps.ios7Colors, liveUpdate: 'color,border-color',
							changeProperty: { caption: 'Text color', rerender: true } 
						}
					],
					[
					 	prx.commonproperties.textProperties,
					 	prx.commonproperties.textAlign,
						{
							caption: 'Active'
							,name: 'activeTextColor'
							,type: 'combo-colorpicker'
							,value: function(item,name) {
								return item.activeTextColor
							}
					 		,values: prx.comps.ios7Colors
							,liveUpdate:'color'
							,changeProperty: {  
								caption: 'Active text color',
								property: 'color',
								selector: 'input:checked + label',
								transitionable: true
							} 
						}	
					]
				]
			},
			{
				caption: 'Values',
				properties: [
					
					[
						{
							caption: '(Separated by line breaks)'
							,name: 'values'
							,type: 'textarea'
							,value: function(item,name) {
								return item.values;
							}
							,onChange: function(item,name) {
								var _options = item.values.split("<br />");
								
								var cR = '';
								
								var _values = [];
								for(var i = 0; i < _options.length; i++) {
									cR += '<option value="'+i+'" '+((item.selectedValue == i) ? 'selected' : '')+'>'+_options[i]+'</option>'
								}
								
								$('#property-selectedValue select').html(cR);
							}
							,changeProperty: {  
								caption: 'Values',
								rerender: true
							} 
						}
					],
					[
						{
							caption: 'Selected value'
							,name: 'selectedValue'
							,type: 'select'
							,value: function(item,name) {
								return item.selectedValue;
							}
							,values: function(item,name){
								var _options = item.values.split("<br />");
								var _values = [{displayValue: 'None', value: -1}];
								for(var i = 0; i < _options.length; i++) {
									_values.push({
										displayValue: _options[i],
										value: i
									});
								}
								return _values;
							}
							,changeProperty: {  
								caption: 'Selected value',
								rerender: true
							} 
						}
					]
				]
			}
		]
	}


//TYPE: LISTCOMPLEX
prx.types.ios7_listcomplex = {
	name: 'ios7_listcomplex'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var cR = '';
		
		if(typeof(item.textProperties) == "undefined") { item.textProperties = []; }
		var _textprops = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_textprops += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_textprops += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		if(typeof(item.subProperties) != "undefined") {
			var _subprops = (jQuery.inArray("bold",item.subProperties)>-1) ? " font-weight: bold;" : "";
			_subprops += (jQuery.inArray("italic",item.subProperties)>-1) ? " font-style: italic;" : "";
			_subprops += (jQuery.inArray("underline",item.subProperties)>-1) ? " text-decoration: underline;" : "";
		}
		if(typeof(item.valueProperties) != "undefined") {
			var _valueprops = (jQuery.inArray("bold",item.valueProperties)>-1) ? " font-weight: bold;" : "";
			_valueprops += (jQuery.inArray("italic",item.valueProperties)>-1) ? " font-style: italic;" : "";
			_valueprops += (jQuery.inArray("underline",item.valueProperties)>-1) ? " text-decoration: underline;" : "";
		}
		if(typeof(item.badgeProperties) != "undefined") {
			var _badgeprops = (jQuery.inArray("bold",item.badgeProperties)>-1) ? " font-weight: bold;" : "";
			_badgeprops += (jQuery.inArray("italic",item.badgeProperties)>-1) ? " font-style: italic;" : "";
			_badgeprops += (jQuery.inArray("underline",item.badgeProperties)>-1) ? " text-decoration: underline;" : "";
		}
		
		if(typeof(item.maintainstate) == "undefined") { item.maintainstate = false; }
		
		
		var _dims = getRealDims(item,symbol);
		
		// :( 
		var _listitemH = (_dims.height - item.borderWidth*(item.listitems.length+1))/item.listitems.length;
		
		var hasThumbs = false;
		for(var i=0;i<item.listitems.length;i++) {
			if(typeof(item.listitems[i].thumbnail) != "undefined" && item.listitems[i].thumbnail.url != '') {
				hasThumbs = true;
				break;
			}
		}
		
		cR += '<div id="' + _id + '" class="box pos type-ios7-list">';
		
		cR += '<style>'
		cR += '#' + _id + ' .ios7-list-inner { text-align: '+item.textAlign+'; '+cssFlexJustifyContent(item.textAlign)+' background-color: '+getColor(item.backgroundColor)+'; '+getFontCssFromFontFamily(item.textFont)+'; font-size: '+item.textSize+'px; color: '+getColor(item.textColor)+'; border: '+item.borderWidth+'px solid '+getColor(item.borderColor)+';  }';
		cR += '#' + _id + ' .ios7-list-thumb { width: '+parseInt(_listitemH*0.6)+'px }';
		if(typeof(item.iconSize) != "undefined") {
			cR += '#' + _id + ' .ios7-list-icon { width: '+parseInt(_listitemH*(item.iconSize/5))+'px; height: '+parseInt(_listitemH*(item.iconSize/5))+'px; }';
		}
		cR += '#' + _id + ' .bordered-container { border-top: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; }'
		cR += '#' + _id + ' .ios7-list-text { '+_textprops+' }';
		cR += '#' + _id + ' .ios7-list-subtitle { '+getFontCssFromFontFamily(item.subFont)+_subprops+' font-size: '+item.subSize+'px; color: '+getColor(item.subColor)+'; }'
		cR += '#' + _id + ' .ios7-list-badge { '+getFontCssFromFontFamily(item.badgeFont)+_badgeprops+'; font-size: '+item.badgeSize+'px; color: '+getColor(item.badgeColor)+'; background-color: '+getColor(item.badgeBackgroundColor)+'; }';
		cR += '#' + _id + ' .ios7-list-value { '+getFontCssFromFontFamily(item.valueFont)+_valueprops+'; font-size: '+item.valueSize+'px; color: '+getColor(item.valueColor)+'; }'
		cR += '#' + _id + ' label:active, #' + _id + ' input:checked + label { background: '+getColor(item.activeBackgroundColor)+'; color: '+getColor(item.activeTextColor)+'; }'
		cR += '#' + _id + ' label:active .ios7-list-value, #' + _id + ' input:checked +  label .ios7-list-value { color: '+getColor(item.activeValueColor)+'; }'
		cR += '#' + _id + ' label:active .ios7-list-subtitle, #' + _id + ' input:checked + label .ios7-list-subtitle { color: '+getColor(item.activeSubColor)+'; }'
		cR += '</style>'
		
		cR += '<div class="ios7-list-inner liveUpdate-borderColor liveUpdate-textColor liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textColor changeProperty-borderColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';
		
		
		$.each(item.listitems, function(i,elm){		
			
			var icon = '';
			if(elm.itemtype == 'nested' || elm.itemtype == 'checkbox' || elm.itemtype == 'radio' || elm.itemtype == 'nestedWithValue' || elm.itemtype == 'withIcon' || elm.itemtype == 'withIconAndValue' || elm.itemtype == 'nestedWithBadge' || elm.itemtype == 'withIconAndBadge' || elm.itemtype == 'nestedWithBadgeAndValue') {
				icon = '<div class="ios7-list-icon ios7-list-icon-'+item.iconpos+'" '+((typeof (elm.buttonicon) != "undefined" && elm.buttonicon.url != '') ? 'style="background-image: url('+ getAssetUrl(elm.buttonicon)+');"' : '' ) + '></div>';
			}
			
			cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property liveUpdate-borderColor ios7-list-listitem ios7-list-listitem-type-'+elm.itemtype+'" data-dynamic-property-index="'+i+'">';
			if(elm.itemtype == 'checkbox' || elm.itemtype == 'radio' || item.maintainstate) {
				cR += '<input type="'+((elm.itemtype == 'checkbox') ? 'checkbox': 'radio') +'" name="'+_id+'-checkbox" id="'+_id+'-checkbox-'+i+'" data-role="none" '+ ((typeof(elm.checked) != "undefined" && elm.checked) ? 'checked' : '') +' />';
			}
			//cR +='<label '+ (((elm.itemtype == 'checkbox' || elm.itemtype == 'radio') && elm.checked) ? 'class="liveUpdate-activeTextColor liveUpdate-activeBackgroundColor"' : '') +' for="'+_id+'-checkbox-'+i+'" ' +((elm.itemtype == 'checkbox' || elm.itemtype == 'radio' || item.maintainstate) ? ' data-clickable="true"' : '') + '>'
			cR +='<label '+ (((elm.itemtype == 'checkbox' || elm.itemtype == 'radio') && elm.checked) ? 'class="liveUpdate-activeTextColor liveUpdate-activeBackgroundColor"' : '') +' for="'+_id+'-checkbox-'+i+'">'
			
			if(item.iconpos == "left") { cR += icon; }
			
			if(hasThumbs) {
				cR += '<div class="ios7-list-thumb" '+((typeof(elm.thumbnail) != "undefined" && elm.thumbnail.url != '') ? 'style="background-image: url('+ getAssetUrl(elm.thumbnail)+');"' : '') + '></div>';
			}
			
			cR += '<div class="bordered-container">';
			
			cR += '<div class="text-and-subtitle">';
			cR += '<div class="ios7-list-text">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+elm.text+'</span>';
			cR += '</div>';
			cR += '<div class="ios7-list-subtitle liveUpdate-subColor changeProperty-subColor changeProperty-subFont changeProperty-subSize">';
			cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'">'+elm.subtitle+'</span>';
			cR += '</div>';
			cR += '</div>';
			
			if(elm.itemtype == 'withValue' || elm.itemtype == 'nestedWithValue' || elm.itemtype == 'withIconAndValue' || elm.itemtype == 'nestedWithBadgeAndValue') {
				cR += '<div class="ios7-list-value liveUpdate-valueColor changeProperty-valueColor changeProperty-valueFont changeProperty-valueSize">';
				cR += '<span data-editableproperty="value" data-dynamic-property-index="'+i+'">'+elm.value+'</span>';
				cR += '</div>';
			}
			
			if(elm.itemtype == 'withBadge' || elm.itemtype == 'nestedWithBadge' || elm.itemtype == 'withIconAndBadge' || elm.itemtype == 'nestedWithBadgeAndValue') {
				cR += '<div class="ios7-list-badge liveUpdate-badgeColor changeProperty-badgeColor liveUpdate-badgeBackgroundColor changeProperty-badgeBackgroundColor changeProperty-badgeFont changeProperty-badgeSize">';
				cR += '<span data-editableproperty="badgeText" data-dynamic-property-index="'+i+'">'+elm.badgeText+'</span>';
				cR += '</div>'; 
			}
			
			if(item.iconpos == "right") { cR += icon; }
			
			cR += '</div>';
			
			cR += '</label>';
			cR += '</div>';
		});
		cR += '</div></div>';	
		return cR;
	}
	,onResize: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		var _listitemH = (_dims.height - item.borderWidth*(item.listitems.length+1))/item.listitems.length;
		
		$('#' + _id + ' .ios7-list-thumb').width(parseInt(_listitemH*0.6));
		$('#' + _id + ' .ios7-list-icon').width(parseInt(_listitemH*(item.iconSize/5))).height(parseInt(_listitemH*(item.iconSize/5)));
	}
	,propertyGroups:	[		
		{
			caption: 'List',
	    	properties: [
				[
					prx.commonproperties.ios7BackgroundColor
					,{
						caption: 'Active',
						name: 'activeBackgroundColor',
						type: 'combo-colorpicker',
						value: function(item,name){
							return item.activeBackgroundColor			
						}
						,values: prx.comps.ios7Colors
						,liveUpdate: 'background-color'
						,changeProperty: {  
							caption: 'Active background color',
							property: 'background-color',
							selector: 'input:checked + label',
							transitionable: true
						} 

					}
				],[
					{ 
						caption: 'Border (px)', 
						name: 'borderWidth', 
						type: 'combo-select', 
						value: function(item,name) 
						{ 
							if(typeof(item.borderWidth) == "undefined") {
								return 1;
							}
							return item.borderWidth; 
						}, 
						values: { min: 0, max: 20, step: 2 }
						,changeProperty: {  
							caption: 'Border width',
							rerender: true
						}  
 
					}
					,prx.commonproperties.ios7BorderColor
				],
				[
				{
					caption: 'Maintain active state after touch end', 
					name: 'maintainstate', 
					type: 'onoff', 
					help: 'Enable to allow "Highlight list item" interactions',
					value: function(item,name) 
					{ 
						if(typeof(item.maintainstate) == "undefined") {
							return false;
						}
						return item.maintainstate; 
					}
					,hiddenByDefault: function(item,name){
						return (item.type == 'ios7_listcheckbox' || item.type == 'ios7_listradio');
					}
					,changeProperty: {  
						caption: 'Maintain active state',
						rerender: true
					}  
				}
				]
			]
		},{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				],	
				[
					prx.commonproperties.textProperties
					,prx.commonproperties.textAlign
					,{
						caption: 'Active',
						name: 'activeTextColor',
						type: 'combo-colorpicker',
						value: function(item,name){
							return item.activeTextColor			
						}
						,values: prx.comps.ios7Colors
						,liveUpdate: 'color'
						,changeProperty: {  
							caption: 'Active text color',
							property: 'color',
							selector: 'input:checked + label',
							transitionable: true
						} 

					}
				]
			]
		},{
			caption: 'Subtitle',
			properties: [				
				[
					{
						 
						caption: false, 
						name: 'subFont', 
						type: 'select', 
						value: function(item,name) { if (typeof(item.subFont) == "undefined") { return 'Helvetica, Arial, sans-serif'; } return item.subFont; }, 
						values: function() { return prx.comps.fonts; }
						,changeProperty: {  
							caption: 'Subtitle font',
							property: 'font-family',
							selector: '.subtitle',
							transitionable: false
						} 
 
					},{ 
						caption: false, 
						name: 'subSize', 
						type: 'combo-select', 
						value: function(item,name) { if (typeof(item.subSize) == "undefined") {return 12;} return item.subSize; }, 
						values: prx.comps.textsize 
						,changeProperty: {  
							caption: 'Subtitle font size',
							property: 'font-size',
							selector: '.subtitle',
							transitionable: true
						} 

					},{ 
						caption: false, 
						name: 'subColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { if (typeof(item.subColor) == "undefined") {return '999999';} return item.subColor; }
						,values: prx.comps.ios7Colors
						,liveUpdate: 'color' 
						,changeProperty: {  
							caption: 'Subtitle color',
							property: 'color',
							selector: '.subtitle',
							transitionable: true
						} 

					}
				],[
					{
						caption: false, 
						name: 'subProperties', 
						type: 'checkbox', 
						value: function(item,name) { if(typeof(item.subProperties) == "undefined") {item.subProperties = [];} return item.subProperties; }, 
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}]
						,changeProperty: {  
							caption: 'Subtitle text properties',
							rerender: true,
							changeable: false
						}  
 
					}
					,
					{
						caption: 'Active',
						name: 'activeSubColor',
						type: 'combo-colorpicker',
						value: function(item,name){
							if(typeof(item.activeSubColor) == "undefined") { return 'FFFFFF'; }
							return item.activeSubColor			
						}
						,values: prx.comps.ios7Colors
						,liveUpdate: 'color'
						,changeProperty: {  
							caption: 'Subtitle color',
							property: 'color',
							selector: 'input:checked + label .subtitle',
							transitionable: true
						} 

					}
				]
			]
		},{
			caption: 'Value',
			properties: [
				[
					{ 
						caption: false, 
						name: 'valueFont', 
						type: 'select', 
						value: function(item,name) { return item.valueFont; }, 
						values: function() { return prx.comps.fonts; }
						,changeProperty: {  
							caption: 'Value font',
							property: 'font-family',
							selector: '.value',
							transitionable: false
						} 
 
					},{
						caption: false, 
						name: 'valueSize', 
						type: 'combo-select', 
						value: function(item,name) { return item.valueSize; }, 
						values: prx.comps.textsize 
						,changeProperty: {  
							caption: 'Value font size',
							property: 'font-size',
							selector: '.value',
							transitionable: true
						}  

					},{ 
						caption: false, 
						name: 'valueColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.valueColor; }
						,values: prx.comps.ios7Colors
						,liveUpdate: 'color' 
						,changeProperty: {  
							caption: 'Value color',
							property: 'color',
							selector: '.value',
							transitionable: true
						}  

					}
				],[
					{ 
						caption: false, 
						name: 'valueProperties', 
						type: 'checkbox', 
						value: function(item,name) { if(typeof(item.valueProperties) == "undefined") {item.valueProperties = [];} return item.valueProperties; }, 
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}]
						,changeProperty: {  
							caption: 'Value text properties',
							rerender: true,
							changeable: false
						}  
 
					}
					,{
						caption: 'Active',
						name: 'activeValueColor',
						type: 'combo-colorpicker',
						value: function(item,name){
							return item.activeValueColor			
						}
						,values: prx.comps.ios7Colors
						,liveUpdate: 'color'
						,changeProperty: {  
							caption: 'Active value color',
							property: 'color',
							selector: 'input:checked + label .value',
							transitionable: true
						}  

					}
				]
			]
		},
		{
			caption: 'Badge',
			properties: [
				[
					{ 
						caption: false, 
						name: 'badgeFont', 
						type: 'select', 
						value: function(item,name) { return item.badgeFont; }, 
						values: function() { return prx.comps.fonts; }
						,changeProperty: {  
							caption: 'Badge font',
							property: 'font-family',
							selector: '.badge',
							transitionable: false
						}  
 
					},{ 
						caption: false, 
						name: 'badgeSize', 
						type: 'combo-select', 
						value: function(item,name) { return item.badgeSize; }, 
						values: prx.comps.textsize
						,changeProperty: {  
							caption: 'Badge font size',
							property: 'font-size',
							selector: '.badge',
							transitionable: true
						}  
 
					},{ 
						caption: false, 
						name: 'badgeColor', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.badgeColor; }
						,values: prx.comps.ios7Colors
						,liveUpdate: 'color'
						,changeProperty: {  
							caption: 'Badge font color',
							property: 'color',
							selector: '.badge',
							transitionable: true
						}  

					}
				],[
					{ 
						caption: false, 
						name: 'badgeProperties', 
						type: 'checkbox', 
						value: function(item,name) { if(typeof(item.badgeProperties) == "undefined") {item.badgeProperties = [];} return item.badgeProperties; }, 
						values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}]
						,changeProperty: {  
							caption: 'Badge text properties',
							rerender: true
						}  
 
					}
					,{
						caption: 'Background',
						name: 'badgeBackgroundColor',
						type: 'combo-colorpicker',
						value: function(item,name){
							return item.badgeBackgroundColor
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
						,changeProperty: {  
							caption: 'Badge background color',
							property: 'background-color',
							selector: '.badge',
							transitionable: true
						}  

					}
				]
				
			]
		},{
			caption: 'Icon',
			properties: [
				[
					{
						caption: false
						,name: 'iconpos'
						,type: 'select'
						,value: function(item,name) {
							return item.iconpos;
						}
						,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
						,changeProperty: {  
							caption: 'Icon position',
							rerender: true,
							changeable: false
						}  

					}
					,
					{
						caption: false
						,name: 'iconSize'
						,type: 'select'
						,value: function(item,name) {
							return item.iconSize;
						}
						,values: [{ value: '1', displayValue: 'Very small'}, { value: '2', displayValue: 'Small'}, { value: '3', displayValue: 'Normal'}, { value: '4', displayValue: 'Large'}, { value: '5', displayValue: 'Full'}]
						,changeProperty: {  
							caption: 'Icon size',
							rerender: true,
							changeable: false
						}  
					}

				]
			]
		}
	]
	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'List items'
  		,propertyName: 'List item'
		,addCaption: 'Add list item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,itemtype: 'basic'
			,value: 'Insert value'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: {
				fileId: '',
				folderId: '',
				url: '',
				assetType: '',
				name: ''
			}
			,buttonicon: {
				fileId: '',
				folderId: '',
				url: '',
				assetType: 'icon',
				name: ''
			},
			checked: false,
			actions: []
		}
		,captionProperty: 'text' 
			,editableProperties: [
				{
					caption: 'Label'
					,name: 'text'
					,type: 'input'
					,value: function(item,name,index) {
						return item.listitems[index].text;
					}
					,changeProperty: {  
						caption: 'Label',
						property: 'text',
						selector: '.ios7-list-text',
						transitionable: false
					}  

				}
			,
			{
				caption: 'Value'
				,name: 'value'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].value;
				}
			    ,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype != 'nestedWithValue' && item.listitems[index].itemtype != 'withValue' && item.listitems[index].itemtype != 'withIconAndValue' && item.listitems[index].itemtype != 'nestedWithBadgeAndValue');
				}
				,changeProperty: {  
					caption: 'Value Text',
					property: 'text',
					selector: '.ios7-list-value',
					transitionable: false
				}  

			}
			,
			{
				caption: 'Badge text'
				,name: 'badgeText'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].badgeText;
				}
			    ,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype != 'withBadge' && item.listitems[index].itemtype != 'nestedWithBadge' && item.listitems[index].itemtype != 'withIconAndBadge' && item.listitems[index].itemtype != 'nestedWithBadgeAndValue');
				}
				,changeProperty: {  
					caption: 'Badge text',
					property: 'text',
					selector: '.ios7-list-badge',
					transitionable: false
				}  


			}
			,
			{
				caption: 'Subtitle'
				,name: 'subtitle'
				,type: 'input'
				,value: function(item,name,index) {
					if(typeof(item.listitems[index].subtitle) == 'undefined') { return ''; }
					return item.listitems[index].subtitle;
				}
				,changeProperty: {  
					caption: 'Subtitle Text',
					property: 'text',
					selector: '.ios7-list-subtitle',
					transitionable: false
				}  
			}
		]
		,interactions: [
			{
				caption: 'Interactions'
				,name: 'actions'
				,type: 'action'
				,value: function(item,name,index) {
					if (typeof(item.listitems[index].actions) == "undefined") {
						item.listitems[index].actions = [];
					}		
				
					return item.listitems[index].actions.length;
				}
			}
		                ]
		                
		,propertyGroups: [
			{
				caption:  'Style',
				properties: [
					[
						{
							caption: false //'List item Type'
							,name: 'itemtype'
							,type: 'select'
							,value: function(item,name,index) {
								if(typeof(item.listitems[index].itemtype) == "undefined") {
									item.listitems[index].itemtype = 'basic'
								}
								return item.listitems[index].itemtype;
							}
							,values: [
									  { value: 'basic', displayValue: 'Basic'}
									  ,{ value: 'nested', displayValue: 'Nested'}
									  ,{ value: 'withIcon', displayValue: 'With Icon' }
									  ,{ value: 'checkbox', displayValue: 'Checkbox (On/off)'}
									  ,{ value: 'radio', displayValue: 'Radio (On/off)'}
									  ,{ value: 'withBadge', displayValue: 'With Badge' }
									  ,{ value: 'withValue', displayValue: 'With Value'}
									  ,{ value: 'nestedWithValue', displayValue: 'Nested with Value'} 
									  ,{ value: 'withIconAndValue', displayValue: 'With icon and value' }
									  ,{ value: 'nestedWithBadge', displayValue: 'Nested with Badge' }
									  ,{ value: 'withIconAndBadge', displayValue: 'With icon and badge' }
									  ,{ value: 'nestedWithBadgeAndValue', displayValue: 'Nested with badge and value' }
							],
							onChange: function(item, index) {
								switch(item.itemtype) {
								case 'basic':
									$('#property-buttonicon, #property-value, #property-checked, #property-badgeText').hide();
									break;
								case 'withIcon': 
								case 'withIconAndValue':
								case 'withIconAndBadge':
									item.buttonicon = { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' };
									return item;
									break;
								case 'nested':
								case 'nestedWithValue':
								case 'nestedWithBadge':
								case 'nestedWithBadgeAndValue':
									item.buttonicon = {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
									return item;
									break;
								case 'checkbox':
								case 'radio':
									item.buttonicon = {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"};
									return item;
									break;
								case 'withValue': 
									$('#property-buttonicon, #property-checked, #property-badgeText').hide()
									$('#property-value').show();
									break;
								case 'withBadge':
									$('#property-buttonicon, #property-checked, #property-value').hide()
									$('#property-badgeText').show();
									break;
								default: break;
								}
								return false;
							}
							,changeProperty: {  
								caption: 'Listitem type',
								rerender: true
							}  


						}
					]]
				}
				,
				{
					caption: 'Thumbnail',
					properties: [
					[
						{
							caption: false
							,name: 'thumbnail'
							,type: 'combo-asset'
							,displayValue: function(item,name,index) {
								if(typeof(item.listitems[index].thumbnail) == 'undefined' || item.listitems[index].thumbnail.url == '') {
									return 'No thumbnail selected';
								}
								return item.listitems[index].thumbnail.name;
							}
							,value: function(item,name,index) {
								return $.toJSON({
									allow: 'image',
									asset: item.listitems[index].thumbnail
								});
							}
							,changeProperty: {  
								caption: 'Thumbnail',
								rerender: true
							}  

						}
					]]
				}
				,
				{ 
					caption: 'Icon',
					properties: [[
						{
							caption: false
							,name: 'buttonicon'
							,type: 'combo-asset'
							,displayValue: function(item,name,index) {
								if(item.listitems[index].buttonicon.url == '') {
									return 'No icon selected';
								}
								return item.listitems[index].buttonicon.name;
							}
							,value: function(item,name,index) {
								return $.toJSON({
									allow: 'image',
									asset: item.listitems[index].buttonicon
								});
							}
							,hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype != 'nested' && item.listitems[index].itemtype != 'withIcon' && item.listitems[index].itemtype != 'withIconAndValue' && item.listitems[index].itemtype != 'nestedWithValue' && item.listitems[index].itemtype != 'checkbox' && item.listitems[index].itemtype != 'withIconAndBadge' && item.listitems[index].itemtype != 'nestedWithBadgeAndValue' && item.listitems[index].itemtype != 'nestedWithBadge');
							}
							,changeProperty: {  
								caption: 'Icon',
								rerender: true
							}  

						}
					]]
				},
				{
					caption: 'Checkbox state',
					properties: [[
						{
							caption: 'Checked?'
							,name: 'checked'
							,type: 'onoff'
							,value: function(item,name,index){
								return item.listitems[index].checked;
							}
							,hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype != 'checkbox' && item.listitems[index].itemtype != 'radio');
							}
							,changeProperty: {  
								caption: 'Checkbox active state',
								rerender: true
							}  

						}
					]
				]
			}
		]
	}
}

// TYPE = LISTNESTED 
prx.types.ios7_listnested = cloneobject(prx.types.ios7_listcomplex);
prx.types.ios7_listnested.name = 'ios7_listnested';
removeProperties(prx.types.ios7_listnested.propertyGroups, ['valueFont', 'valueSize', 'valueColor', 'valueProperties', 'activeValueColor', 'badgeFont', 'badgeSize', 'badgeColor', 'badgeProperties', 'badgeGlassStyle', 'badgeBackgroundColor']);
removeProperties(prx.types.ios7_listnested.dynamicProperties.propertyGroups, ['itemtype', 'value', 'badgeText']);
prx.types.ios7_listnested.dynamicProperties.blankItem = removeObjMembers(prx.types.ios7_listnested.dynamicProperties.blankItem, ['value', 'checked', 'badgeText']);
prx.types.ios7_listnested.dynamicProperties.blankItem.itemtype = 'nested';
prx.types.ios7_listnested.dynamicProperties.blankItem.buttonicon = {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
prx.types.ios7_listnested.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listnested.dynamicProperties.propertyGroups, 'itemtype', 'value', 'nested');
prx.types.ios7_listnested.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listnested.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.ios7_listnested.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listnested.dynamicProperties.propertyGroups, 'buttonicon', 'hiddenByDefault', false);

// TYPE = LISTBASIC 
prx.types.ios7_listbasic = cloneobject(prx.types.ios7_listnested);
prx.types.ios7_listbasic.name = 'ios7_listbasic';
removeProperties(prx.types.ios7_listbasic.propertyGroups, ['iconpos', 'iconSize'])
removeProperties(prx.types.ios7_listbasic.dynamicProperties.propertyGroups, ['buttonicon']);
prx.types.ios7_listbasic.dynamicProperties.blankItem = removeObjMembers(prx.types.ios7_listbasic.dynamicProperties.blankItem, ['buttonicon']);
prx.types.ios7_listbasic.dynamicProperties.blankItem.itemtype = 'basic';
prx.types.ios7_listbasic.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listbasic.dynamicProperties.propertyGroups, 'itemtype', 'value', 'basic');

// TYPE = LISTWITHICON 
prx.types.ios7_listwithicon = cloneobject(prx.types.ios7_listnested);
prx.types.ios7_listwithicon.name = 'ios7_listwithicon';
prx.types.ios7_listwithicon.dynamicProperties.blankItem.itemtype = 'withIcon';
prx.types.ios7_listwithicon.dynamicProperties.blankItem.buttonicon = { fileId: '', folderId: '', url: '', assetType: '', name: '' };;
prx.types.ios7_listwithicon.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listwithicon.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIcon');

// TYPE = LISTWITHICONANDVALUE 
prx.types.ios7_listwithiconandvalue = cloneobject(prx.types.ios7_listcomplex);
prx.types.ios7_listwithiconandvalue.name = 'ios7_listwithiconandvalue';
removeProperties(prx.types.ios7_listwithiconandvalue.propertyGroups, [ 'badgeFont', 'badgeSize', 'badgeColor', 'badgeProperties', 'badgeGlassStyle', 'badgeBackgroundColor'])
removeProperties(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, ['itemtype', 'checked', 'badgeText']);
prx.types.ios7_listwithiconandvalue.dynamicProperties.blankItem = removeObjMembers(prx.types.ios7_listwithiconandvalue.dynamicProperties.blankItem, ['checked', 'badgeText']);
prx.types.ios7_listwithiconandvalue.dynamicProperties.blankItem.itemtype = 'withIconAndValue';
prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIconAndValue');
prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listwithiconandvalue.dynamicProperties.propertyGroups, 'value', 'hiddenByDefault', false);


// TYPE = LISTNESTEDWITHVALUE 
prx.types.ios7_listnestedwithvalue = cloneobject(prx.types.ios7_listwithiconandvalue);
prx.types.ios7_listnestedwithvalue.name = 'ios7_listnestedwithvalue';
prx.types.ios7_listnestedwithvalue.dynamicProperties.blankItem.itemtype = 'nestedWithValue';
prx.types.ios7_listnestedwithvalue.dynamicProperties.blankItem.buttonicon = {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
prx.types.ios7_listnestedwithvalue.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listnestedwithvalue.dynamicProperties.propertyGroups, 'itemtype', 'value', 'nestedWithValue');

// TYPE = LISTWITHVALUE 
prx.types.ios7_listwithvalue = cloneobject(prx.types.ios7_listnestedwithvalue);
prx.types.ios7_listwithvalue.name = 'ios7_listwithvalue';
removeProperties(prx.types.ios7_listwithvalue.propertyGroups, ['iconpos', 'iconSize'])
removeProperties(prx.types.ios7_listwithvalue.dynamicProperties.propertyGroups, ['buttonicon']);
prx.types.ios7_listwithvalue.dynamicProperties.blankItem = removeObjMembers(prx.types.ios7_listwithvalue.dynamicProperties.blankItem, ['buttonicon']);
prx.types.ios7_listwithvalue.dynamicProperties.blankItem.itemtype = 'withValue';
prx.types.ios7_listwithvalue.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listwithvalue.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withValue');

// TYPE = LISTNESTEDWITHBADGE
prx.types.ios7_listnestedwithbadge = cloneobject(prx.types.ios7_listcomplex);
prx.types.ios7_listnestedwithbadge.name = 'ios7_listnestedwithbadge';
removeProperties(prx.types.ios7_listnestedwithbadge.propertyGroups, ['valueFont', 'valueSize', 'valueColor', 'valueProperties', 'activeValueColor'])
removeProperties(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, ['itemtype', 'value', 'checked']);
prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem = removeObjMembers(prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem, ['value', 'checked']);
prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem.itemtype = 'nestedWithBadge';
prx.types.ios7_listnestedwithbadge.dynamicProperties.blankItem.buttonicon = {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"};
prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, 'itemtype', 'value', 'nestedWithBadge');
prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);
prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listnestedwithbadge.dynamicProperties.propertyGroups, 'buttonicon', 'hiddenByDefault', false);

// TYPE = LISTWITHICONANDBADGE 
prx.types.ios7_listwithiconandbadge = cloneobject(prx.types.ios7_listnestedwithbadge);
prx.types.ios7_listwithiconandbadge.name = 'ios7_listwithiconandbadge';
prx.types.ios7_listwithiconandbadge.dynamicProperties.blankItem.itemtype = 'withIconAndBadge';
prx.types.ios7_listwithiconandbadge.dynamicProperties.blankItem.buttonicon = { fileId: '', folderId: '', url: '', assetType: '', name: '' };
prx.types.ios7_listwithiconandbadge.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listwithiconandbadge.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIconAndBadge');


// TYPE = LISTWITHBADGE 
prx.types.ios7_listwithbadge = cloneobject(prx.types.ios7_listnestedwithbadge);
prx.types.ios7_listwithbadge.name = 'ios7_listwithbadge';
removeProperties(prx.types.ios7_listwithbadge.propertyGroups, ['iconpos', 'iconSize'])
removeProperties(prx.types.ios7_listwithbadge.dynamicProperties.propertyGroups, ['buttonicon']);
prx.types.ios7_listwithbadge.dynamicProperties.blankItem = removeObjMembers(prx.types.ios7_listwithbadge.dynamicProperties.blankItem, ['buttonicon']);
prx.types.ios7_listwithbadge.dynamicProperties.blankItem.itemtype = 'withBadge';
prx.types.ios7_listwithbadge.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listwithbadge.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withBadge');

//TYPE = LISTRADIO 
prx.types.ios7_listradio = cloneobject(prx.types.ios7_listnested);
prx.types.ios7_listradio.name = 'ios7_listradio';
prx.types.ios7_listradio.dynamicProperties.blankItem.itemtype = 'radio';
prx.types.ios7_listradio.dynamicProperties.blankItem.buttonicon = {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"};
prx.types.ios7_listradio.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listradio.dynamicProperties.propertyGroups, 'itemtype', 'value', 'radio');

//TYPE = LISTCHECKBOX 
prx.types.ios7_listcheckbox = cloneobject(prx.types.ios7_listradio);
prx.types.ios7_listcheckbox.name = 'ios7_listcheckbox';
prx.types.ios7_listcheckbox.dynamicProperties.blankItem.itemtype = 'checkbox';
prx.types.ios7_listcheckbox.dynamicProperties.blankItem.buttonicon = {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"};
prx.types.ios7_listcheckbox.dynamicProperties.propertyGroups = editProperty(prx.types.ios7_listcheckbox.dynamicProperties.propertyGroups, 'itemtype', 'value', 'checkbox');

/* LIST HEADER */
prx.types.ios7_list_header = {
	name: "ios7_list_header"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-list-header">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-list-header-inner { background-color: '+getColor(item.backgroundColor)+'; '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+cssFlexJustifyContent(item.textAlign)+_props+' }'; 
		cR += '</style>';
		
		cR += '<div class="ios7-list-header-inner liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-text">';
		cR += '<span data-editableproperty="text">'+item.text+'</span>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	},
	editableProperties: [
        prx.commonproperties.text
	],
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
				]
			]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				],
				[
				 	prx.commonproperties.textProperties
				 	,prx.commonproperties.textAlign
				]
			]
		}
	]
}

/* ALERT */
prx.types.ios7_alert = {
	name: "ios7_alert"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-alert">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-alert-inner { background-color: '+getColor(item.backgroundColor)+'; border-radius: '+item.borderRadius+'px; '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; }'; 
		cR += '#'+_id+' .ios7-alert-buttons, #'+_id+' .ios7-alert-button { border-color: '+getColor(item.borderColor)+'; }';
		cR += '</style>';
		
		cR += '<div class="ios7-alert-inner liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">';
		cR += '<div class="ios7-alert-title changeProperty-title">';
		cR += '<span data-editableproperty="title">'+item.title+'</span>';
		cR += '</div>';
		cR += '<div class="ios7-alert-text changeProperty-text">';
		cR += '<span data-editableproperty="text">'+item.text+'</span>';
		cR += '</div>';
		cR += '<div class="ios7-alert-buttons liveUpdate-borderColor">'
		$.each(item.buttons, function(i,elm) {
			var _props = (jQuery.inArray("bold",elm.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",elm.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",elm.textProperties)>-1) ? " text-decoration: underline;" : "";
			
			cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-alert-button dynamic-property liveUpdate-borderColor liveUpdate-textColor-'+i+'" data-dynamic-property-index="'+i+'" style="'+_props+' color: '+getColor(elm.textColor)+';">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + elm.text + '</span>';
			cR += '</div>';
		});
		cR += '</div>';
		cR += '</div>';
		cR += '</div>';
		return cR;
	},
	editableProperties: [
            { 
            	 caption: 'Title', 
            	 name: 'title', 
            	 type: 'input', 
            	 value: function(item,name) { return item.title; }, 
            	 changeProperty: { 
            		 caption: 'Title', 
            		 selector: '.changeProperty-title', 
            		 property: 'text', 
            		 transitionable: false 
            	 }
            }
            ,prx.commonproperties.text
	],
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{ caption: 'Border', name: 'borderColor', type: 'combo-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.ios7Colors, liveUpdate: 'border-color', changeProperty: { caption: 'Border width', selector: '.changeProperty-borderWidth', property: 'border-width', transitionable: true } }
					,prx.commonproperties.borderRadius
				]
			]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				]
			]
		}
	]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,captionProperty: 'text'
   		,blankItem: {
			text: 'Label',
   			actions: [],
   			textColor: '#1B9AF7',
   			textProperties: []
   		}
   		,interactions: [
   			{
  				caption: 'Interactions'
  				,name: 'actions'
  				,type: 'action'
  				,value: function(item,name,index) {
  					if (typeof(item.buttons[index].actions) == "undefined") {
  						item.buttons[index].actions = [];
  					}		
  				
  					return item.buttons[index].actions.length;
  				}
  			}    
   		]
   		,editableProperties: [
  			{
 				caption: 'Text'
 				,name: 'text'
 				,type: 'input'
 				,value: function(item,name,index) {
 					return item.buttons[index].text;
 				}
 				,changeProperty: {
					caption: 'Text',
					selector: 'label',
					property: 'text',
					transitionable: false
				 }
 			}
  		],
  		propertyGroups: [
	   		{
	   		    caption: 'Text',
	   		    properties: [
	   		        [
	   		         	{ 
	   		         		caption: false, 
	   		         		name: 'textProperties', 
	   		         		type: 'checkbox', 
	   		         		value: function(item,name,index) {  return item.buttons[index].textProperties; }, 
	   		         		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}], 
	   		         		changeProperty: { 
	   		         			caption: 'Text properties', 
	   		         			rerender: true 
	   		         		} 
	   		         	},
	   		         	{ 
	   		         		caption: false, 
	   		         		name: 'textColor', 
	   		         		type: 'combo-colorpicker', 
	   		         		value: function(item,name,index) { return item.buttons[index].textColor; },
	   		         		values: prx.comps.ios7Colors,
	   		         		liveUpdate: 'color', 
	   		         		changeProperty: { 
	   		         			caption: 'Text color', 
	   		         			selector: '.changeProperty-textColor', 
	   		         			property: 'color', 
	   		         			transitionable: true
	   		         		} 
	   		         	}
	   				]
	   			]
	   		}
  		 ]
	}
}


/* ALERT */
prx.types.ios7_actionsheet = {
	name: "ios7_actionsheet"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-actionsheet">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-actionsheet-buttons { background-color: '+getColor(item.backgroundColor)+'; border-radius: '+item.borderRadius+'px; '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; }';
		if(item.detachlast) {
			cR += '#'+_id+' .ios7-actionsheet-buttons:first-child { '+cssFlexJustifyGrow(item.buttons.length-1)+' }';
		}
		cR += '#'+_id+' .ios7-actionsheet-button { border-color: '+getColor(item.borderColor)+'; }';
		if(item.showtitle && item.buttons.length > 0) {
			cR += '#'+_id+' .ios7-actionsheet-button-title { font-size: '+item.buttons[0].titleTextSize+'px; }';
		}
		cR += '</style>';
		
		cR += '<div class="ios7-actionsheet-inner">';
		cR += '<div class="ios7-actionsheet-buttons liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">'
		$.each(item.buttons, function(i,elm) {
			if(item.detachlast && i==item.buttons.length-1) { return }
			var _props = (jQuery.inArray("bold",elm.textProperties)>-1) ? " font-weight: bold;" : "";
			_props += (jQuery.inArray("italic",elm.textProperties)>-1) ? " font-style: italic;" : "";
			_props += (jQuery.inArray("underline",elm.textProperties)>-1) ? " text-decoration: underline;" : "";
			
			cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-actionsheet-button '+((item.showtitle && i == 0) ? 'ios7-actionsheet-button-title ' : '')+'dynamic-property liveUpdate-borderColor liveUpdate-textColor-'+i+' changeProperty-borderColor" data-dynamic-property-index="'+i+'" style="'+_props+' color: '+getColor(elm.textColor)+';">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + elm.text + '</span>';
			cR += '</div>';
		});
		cR += '</div>';
		if(item.detachlast) {
			cR += '<div class="ios7-actionsheet-buttons liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">'
			var i = item.buttons.length -1;
			if(i>0) { 
				var _props = (jQuery.inArray("bold",item.buttons[i].textProperties)>-1) ? " font-weight: bold;" : "";
				_props += (jQuery.inArray("italic",item.buttons[i].textProperties)>-1) ? " font-style: italic;" : "";
				_props += (jQuery.inArray("underline",item.buttons[i].textProperties)>-1) ? " text-decoration: underline;" : "";
				
				cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-actionsheet-button dynamic-property liveUpdate-borderColor liveUpdate-textColor-'+i+' changeProperty-borderColor" data-dynamic-property-index="'+i+'" style="'+_props+' color: '+getColor(item.buttons[i].textColor)+';">';
				cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + item.buttons[i].text + '</span>';
				cR += '</div>';
				cR += '</div>';
			}
		}
		cR += '</div>';
		cR += '</div>';
		return cR;
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{ caption: 'Border', name: 'borderColor', type: 'combo-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.ios7Colors, liveUpdate: 'border-color', changeProperty: { caption: 'Border width', selector: '.changeProperty-borderWidth', property: 'border-width', transitionable: true } }
					,prx.commonproperties.borderRadius
				]
			]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
				]
			]
		},
		{
		    caption: 'Advanced',
		    properties: [
		        [
					{
	           			caption: 'Detach last button'
	           			,name: 'detachlast'
	           			,type: 'onoff'
	           			,value: function(item,name) {
	           				return item.detachlast;
	           			}
		      			,changeProperty: {
	   						rerender: true
	   					}
	      			}
				]
			]
		}
	]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,captionProperty: 'text'
   		,blankItem: {
			text: 'Label',
   			actions: [],
   			textColor: '#1B9AF7',
   			titleTextSize: 16,
   			textProperties: []
   		}
   		,interactions: [
   			{
  				caption: 'Interactions'
  				,name: 'actions'
  				,type: 'action'
  				,value: function(item,name,index) {
  					if (typeof(item.buttons[index].actions) == "undefined") {
  						item.buttons[index].actions = [];
  					}		
  				
  					return item.buttons[index].actions.length;
  				}
   				,hiddenByDefault: function(item,name,index) {
   					return (item.title && index ==0)
   				}
  			}    
   		]
   		,editableProperties: [
  			{
 				caption: 'Text'
 				,name: 'text'
 				,type: 'input'
 				,value: function(item,name,index) {
 					return item.buttons[index].text;
 				}
 				,changeProperty: {
					caption: 'Text',
					selector: 'label',
					property: 'text',
					transitionable: false
				 }
 			}
  		],
  		propertyGroups: [
	   		{
	   		    caption: 'Text',
	   		    properties: [
	   		        [
	   		         	{ 
	   		         		caption: false, 
	   		         		name: 'textProperties', 
	   		         		type: 'checkbox', 
	   		         		value: function(item,name,index) { return item.buttons[index].textProperties; }, 
	   		         		values: [{ value: 'bold', displayValue: '<span class="property-icon property-text-bold" title="Bold"></span>'}, { value: 'italic', displayValue: '<span class="property-icon property-text-italic" title="Italic"></span>'}, { value: 'underline', displayValue: '<span class="property-icon property-text-underline" title="Underline"></span>'}], 
	   		         		changeProperty: { 
	   		         			caption: 'Text properties', 
	   		         			rerender: true 
	   		         		} 
	   		         	},
	   		         	{ 
	   		         		caption: false, 
	   		         		name: 'textColor', 
	   		         		type: 'combo-colorpicker', 
	   		         		value: function(item,name,index) { return item.buttons[index].textColor; },
	   		         		values: prx.comps.ios7Colors,
	   		         		liveUpdate: 'color', 
	   		         		changeProperty: { 
	   		         			caption: 'Text color', 
	   		         			selector: '.changeProperty-textColor', 
	   		         			property: 'color', 
	   		         			transitionable: true
	   		         		} 
	   		         	},
	   		         { 
	   		         		caption: false, 
	   		         		name: 'titleTextSize', 
	   		         		type: 'combo-select', 
	   		         		value: function(item,name,index) { return item.buttons[index].titleTextSize; }, 
	   		         		values: prx.comps.textsize,
	   		         		hiddenByDefault: function(item,name,index){
	   		         			return (!(item.showtitle && index == 0))
	   		         		},
	   		         		changeProperty: { 
	   		         			caption: 'Title text size', 
	   		         			selector: '.ios7-actionsheet-button-title', 
	   		         			property: 'font-size', 
	   		         			transitionable: true 
	   		         		}
	   		         	}
	   				]
	   			]
	   		}
  		 ]
	}
}

/* CONTROL POPOVER */
prx.types.ios7_control_popover = {
	name: "ios7_control_popover"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";
		
		// tooltipSize is the vertical height of the half rotated rectangle. (see .popover-inner { border-bottom: tooltipSize }) 
		// 2y will be the width and height of the rectangle.
		var y = Math.ceil(Math.sqrt((item.tooltipSize*item.tooltipSize)/3)); 
		// when rotated the rectangle exceeds the bottom boundary. x is the margin in need to move it upwards.
		var x = item.tooltipSize - y;
			
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-control-popover">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-control-popover-inner { border-bottom-width: '+item.tooltipSize+'px; }';
		cR += '#'+_id+' .ios7-control-popover-buttons { background-color: '+getColor(item.backgroundColor)+'; border-radius: '+item.borderRadius+'px; '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+_props+' }';
		cR += '#'+_id+' .ios7-control-popover-button { border-left: '+item.borderWidth+'px solid '+getColor(item.borderColor)+'; }';
		cR += '#'+_id+' .ios7-control-popover-tooltip { width: '+2*y+'px; height: '+y+'px; margin: 0 -'+(x+y)+'px; left: '+item.tooltipPosition+'%; padding: 0 '+x+'px '+x+'px; }';
		cR += '#'+_id+' .ios7-control-popover-tooltip-inner { background-color: '+getColor(item.backgroundColor)+'; }';
		cR += '</style>';
		
		cR += '<div class="ios7-control-popover-inner">';
		cR += '<div class="ios7-control-popover-tooltip">';
		cR += '<div class="ios7-control-popover-tooltip-inner liveUpdate-backgroundColor  changeProperty-backgroundColor "></div>';
		cR += '</div>';
		cR += '<div class="ios7-control-popover-buttons liveUpdate-backgroundColor liveUpdate-textColor changeProperty-backgroundColor changeProperty-borderRadius changeProperty-borderWidth changeProperty-textColor changeProperty-textSize changeProperty-textFont">';
		$.each(item.buttons, function(i,elm) {
			cR += '<div id="'+_id+'-buttons-'+i+'" class="ios7-control-popover-button dynamic-property liveUpdate-borderColor" data-dynamic-property-index="'+i+'">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + elm.text + '</span>';
			cR += '</div>';
		});
		cR += '</div>'
		cR += '</div>'
		cR += '</div>';
		return cR;
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
				]
				,[
					prx.commonproperties.borderWidth
					,prx.commonproperties.ios7BorderColor
					,prx.commonproperties.borderRadius
				]
			]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				]
				,[
					prx.commonproperties.textProperties,
				]
			]
		},
		{
		    caption: 'Tooltip',
		    properties: [
		        [
					{ 
						caption: 'Size', 
						name: 'tooltipSize',
						type: 'combo-select', 
						value: function(item,name) { return item.tooltipSize; },
						values: { min: 4, max: 40, step: 2 },
						changeProperty: {
							caption: 'Tooltip size', 
							rerender: true 
						} 
					},
					{ 
						caption: 'Position', 
						name: 'tooltipPosition',
						type: 'combo-select', 
						value: function(item,name) { return item.tooltipPosition; },
						values: { min: 0, max: 100, step: 5 },
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'active Background color', 
							selector: '.changeProperty-activeBackgroundColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					}
				]
			]
		}
	]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,captionProperty: 'text'
   		,blankItem: {
			text: 'Label',
   			actions: []
   		}
   		,interactions: [
   			{
  				caption: 'Interactions'
  				,name: 'actions'
  				,type: 'action'
  				,value: function(item,name,index) {
  					if (typeof(item.buttons[index].actions) == "undefined") {
  						item.buttons[index].actions = [];
  					}		
  				
  					return item.buttons[index].actions.length;
  				}
  			}    
   		]
   		,editableProperties: [
  			{
 				caption: 'Text'
 				,name: 'text'
 				,type: 'input'
 				,value: function(item,name,index) {
 					return item.buttons[index].text;
 				}
 				,changeProperty: {
					caption: 'Text',
					selector: 'label',
					property: 'text',
					transitionable: false
				 }
 			}
  		]
	}
}

/* POPOVER */
prx.types.ios7_popover = {
	name: "ios7_popover"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		// tooltipSize is the vertical height of the half rotated rectangle. (see .popover-inner { border-bottom: tooltipSize }) 
		// 2y will be the width and height of the rectangle.
		var y = Math.ceil(Math.sqrt((item.tooltipSize*item.tooltipSize)/3)); 
		// when rotated the rectangle exceeds the bottom boundary. x is the margin in need to move it upwards.
		var x = item.tooltipSize - y;
		
		var topbottom = (item.tooltipSide == "top" || item.tooltipSide == "bottom");
		var leftright = !topbottom;
		
		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-popover">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-popover-inner { border-'+item.tooltipSide+'-width: '+item.tooltipSize+'px; }';
		cR += '#'+_id+' .ios7-popover-body { background-color: '+getColor(item.backgroundColor)+'; border-radius: '+item.borderRadius+'px; }';
		cR += '#'+_id+' .ios7-popover-tooltip { '+item.tooltipSide+': 0; width: '+((topbottom) ? 2*y : y) +'px; height: '+((leftright) ? 2*y : y)+'px; margin: '+((topbottom) ? '0 -'+(x+y)+'px' : '-'+(x+y)+'px 0' )+'; '+((topbottom) ? 'left' : 'top')+': '+item.tooltipPosition+'%; padding: '+x+'px; padding-'+((item.tooltipSide == 'bottom') ? 'top' : ((item.tooltipSide == "left") ? 'right' : ((item.tooltipSide == 'right') ? 'left' : 'bottom')))+': 0; }';
		cR += '#'+_id+' .ios7-popover-tooltip-inner { '+((topbottom) ? 'height: 200%' : 'width: 200%')+';  margin-'+((item.tooltipSide == 'bottom') ? 'top: -50%' : ((item.tooltipSide == "left") ? 'right: -50%' : ((item.tooltipSide == 'right') ? 'left: -100%' : 'bottom: -50%')))+'; background-color: '+getColor(item.backgroundColor)+'; }';
		cR += '</style>';
		
		cR += '<div class="ios7-popover-inner">';
		cR += '<div class="ios7-popover-tooltip">';
		cR += '<div class="ios7-popover-tooltip-inner liveUpdate-backgroundColor changeProperty-backgroundColor "></div>';
		cR += '</div>';
		cR += '<div class="ios7-popover-body liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-borderRadius"></div>'
		cR += '</div>'
		cR += '</div>';
		return cR;
	},
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{ 
						caption: 'Border <span class="property-icon property-border-radius" title="Border radius"></span>', 
						name: 'borderRadius', 
						type: 'combo-select', 
						value: function(item,name) { return item.borderRadius; }, 
						values: { min: 0, max: 40, step: 2 }, 
						changeProperty: { 
							caption: 'Border radius', 
							selector: '.changeProperty-borderRadius', 
							property: 'border-radius', 
							transitionable: true 
						} 
					}
				]
			]
		},
		{
		    caption: 'Tooltip',
		    properties: [
		        [
					{ 
						caption: 'Size', 
						name: 'tooltipSize',
						type: 'combo-select', 
						value: function(item,name) { return item.tooltipSize; },
						values: { min: 4, max: 40, step: 2 },
						changeProperty: {
							caption: 'Tooltip size', 
							rerender: true 
						} 
					}
				],
				[
					{ 
						caption: 'Position', 
						name: 'tooltipSide',
						type: 'select', 
						value: function(item,name) { return item.tooltipSide; },
						values: [{ displayValue: 'Top', value: 'top' },{ displayValue: 'Bottom', value: 'bottom' },{ displayValue: 'Left', value: 'left' },{ displayValue: 'Right', value: 'right' }],
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'active Background color', 
							selector: '.changeProperty-activeBackgroundColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'tooltipPosition',
						type: 'combo-select', 
						value: function(item,name) { return item.tooltipPosition; },
						values: { min: 0, max: 100, step: 5 },
						changeProperty: {
							caption: 'active Background color', 
							selector: '.changeProperty-activeBackgroundColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					}
				]
			]
		}
	]
}


//TYPE: PROGRESSBAR
prx.types.ios7_progressbar = {
	name: 'ios7_progressbar'
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = getRealDims(item,symbol);
		
		var cR = '';			
		cR += '<div id="' + _id + '" class="box pos type-ios7-progressbar">';
		cR += '<style>'
		cR += '#'+_id+' .progressbar-bar { background-color: '+getColor(item.barColor)+'; }'
		cR += '#'+_id+' .progressbar-bar-filled { width: '+item.progress+'%; background-color: '+getColor(item.fillBarColor)+' }'
		cR += '</style>'
		cR += '<div class="progressbar-bar liveUpdate-barColor">';
		cR += '<div class="progressbar-bar-filled liveUpdate-fillBarColor"></div>'
		cR += '</div>';
		cR += '</div>';
		return cR;
	}
	,propertyGroups:	[
				
		{
			caption: 'Style',
			properties: [
				[
					{
						caption: 'Color'
						,name: 'barColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.barColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Color',
							property: 'background-color',
							selector: '.slider-bar',
							transitionable: true
						} 
						
					},
					{
						caption: 'Fill Color'
						,name: 'fillBarColor'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.fillBarColor;
						}
						,values: prx.comps.ios7Colors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Fill Color',
							property: 'background-color',
							selector: '.slider-bar-filled',
							transitionable: true
						} 
					}
				]
				,[
					{
						caption: 'Progress (%)'
						,name: 'progress'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.progress;
						}
						,values: { min: 0, max: 100, step: 10 }
						,changeProperty: {  
							caption: 'Progress',
							rerender: true
						} 
					}
				],
				
			]
		}
	]
}

/* BADGE */
prx.types.ios7_badge = {
	name: "ios7_badge"
	,onDisplay: function(item,containerid,pageid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var _props = (jQuery.inArray("bold",item.textProperties)>-1) ? " font-weight: bold;" : "";
		_props += (jQuery.inArray("italic",item.textProperties)>-1) ? " font-style: italic;" : "";
		_props += (jQuery.inArray("underline",item.textProperties)>-1) ? " text-decoration: underline;" : "";

		var cR = '';
		cR += '<div id="'+_id+'" class="box pos type-ios7-badge">';
		
		cR += '<style>';
		cR += '#'+_id+' .ios7-badge-inner { background-color: '+getColor(item.backgroundColor)+'; border-radius: '+item.borderRadius+'px; '+getFontCssFromFontFamily(item.textFont)+' color: '+getColor(item.textColor)+'; font-size: '+item.textSize+'px; '+_props+' }';
		cR += '</style>';
		
		cR += '<div class="ios7-badge-inner changeProperty-text liveUpdate-backgroundColor liveUpdate-textColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-borderRadius">';
		cR += '<span data-editableproperty="text">'+item.text+'</span> '			
		cR += '</div>'
		cR += '</div>';
		return cR;
	},
	editableProperties: [ prx.commonproperties.text ],
	propertyGroups: [
			{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.ios7BackgroundColor,
					{ 
						caption: 'Border <span class="property-icon property-border-radius" title="Border radius"></span>', 
						name: 'borderRadius', 
						type: 'combo-select', 
						value: function(item,name) { return item.borderRadius; }, 
						values: { min: 0, max: 40, step: 2 }, 
						changeProperty: { 
							caption: 'Border radius', 
							selector: '.changeProperty-borderRadius', 
							property: 'border-radius', 
							transitionable: true 
						} 
					}
				]
			]
		},
		{
		    caption: 'Text',
		    properties: [
		        [
					prx.commonproperties.textFont
					,prx.commonproperties.textSize
					,prx.commonproperties.ios7TextColor
				]
				,[
					prx.commonproperties.textProperties
				]
			]
		}
	]
}

/* COMPONENT DEFINITIONS */

prx.components.ios7_navbar = {
	name: 'ios7_navbar'
	,type: 'ios7_navbar'
	,lib: _library
	,caption: 'Nav Bar'
	,icon: '-160px -960px'
	,helper: prx.url.devices+_path + 'navbar/helper.png'
	,image: prx.url.devices+_path + 'navbar/image.png'
	,width: 'full'
	,height: '88'
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderWidth: 2
	,borderPos: 'bottom'
	,borderColor: '#CCCCCC'
	,title: 'Label'
	,textFont: 'HelveticaNeue-Medium, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 34
	,textColor: '#000000'
	,textProperties: []
	,leftBtnType: 'none'
	,rightBtnType: 'none'
	,overlay: false
};

prx.components.ios7_navbar_buttons = {
	name: 'ios7_navbar_buttons'
	,type: 'ios7_navbar_buttons'
	,lib: _library
	,caption: 'Nav Bar With Buttons'
	,icon: '-240px -960px'
	,helper: prx.url.devices+_path + 'navbar_buttons/helper.png'
	,width: 'full'
	,height: '88'
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderWidth: 2
	,borderPos: 'bottom'
	,borderColor: '#CCCCCC'
	,title: 'Label'
	,textFont: 'HelveticaNeue-Medium, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 34
	,textColor: '#000000'
	,textProperties: []
	,btnTextFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,btnTextSize: 35
	,btnTextColor: '#1B9AF7'
	,btnTextProperties: []
	,leftBtnText: 'Back'
	,rightBtnText: 'Done'
	,leftBtnType: 'texticon'
	,leftBtnIcon: {"fileId":"b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","folderId":"f1352971179296","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_1b9af7.svg","color":"1b9af7"}
	,rightBtnType: 'text'
	,rightBtnIcon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
};

prx.components.ios7_tabbar = {
	name: 'ios7_tabbar'
	,type: 'ios7_tabbar'
	,lib: _library
	,caption: 'Tabbar'
	,icon: '-320px -960px'
	,helper: prx.url.devices+_path+ 'tabbar/helper.png'
	,width:"full"
	,height:"98"
	,vpos: "bottom"
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderWidth: 0
	,borderColor: 'transparent'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: "20"
	,textColor:  '#8D8D8D'
	,textProperties: []
	,iconpos: 'top'
	,iconSize: 3
	,activeBackgroundColor: 'as-inactive'
	,activeTextColor: '#1B9AF7'
	,maskEnabled: true
	,maskInactive: '#8D8D8D'
	,maskActive: '#1B9AF7'
	,activeTab: 0
	,overlay: false
	,tabs: [
		{
	    	text: 'Home'
	    	,icon: {"fileId":"e6a1ba573190139ceda51280e9fdad9c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","folderId":"f1352971179296","targetSrc":"generated/e6a1ba573190139ceda51280e9fdad9c_8d8d8d.svg","color":"8d8d8d"}
			,activeicon: {"fileId":"e6a1ba573190139ceda51280e9fdad9c.svg","name":"kub-home.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/e6a1ba573190139ceda51280e9fdad9c.svg","folderId":"f1352971179296","targetSrc":"generated/e6a1ba573190139ceda51280e9fdad9c_1b9af7.svg","color":"1b9af7"}
			,actions: []
	    },
		{
	    	text: 'Messages'
	    	,icon: {"fileId":"1b58b288e91e6a4cb64d90433880003d.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","folderId":"f1352971179296","targetSrc":"generated/1b58b288e91e6a4cb64d90433880003d_8d8d8d.svg","color":"8d8d8d"}
		    ,activeicon: {"fileId":"1b58b288e91e6a4cb64d90433880003d.svg","name":"mail-2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/1b58b288e91e6a4cb64d90433880003d.svg","folderId":"f1352971179296","targetSrc":"generated/1b58b288e91e6a4cb64d90433880003d_1b9af7.svg","color":"1b9af7"}
			,actions: []
		}
    ]
}

prx.components.ios7_toolbar = {
	name: 'ios7_toolbar'
	,type: 'ios7_toolbar'
	,lib: _library
	,caption: 'Toolbar'
	,icon: '-400px -960px'
	,helper: prx.url.devices+_path+ 'toolbar/helper.png'
	,width:"full"
	,height:"88"
	,vpos: "bottom"
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderWidth: 2
	,borderPos: 'top'
	,borderColor: '#CCCCCC'
	,overlay: false
	,buttons: [
		{
	    	icon: {"fileId":"dd79283d0c018b90ddaddd64e4f6e528.svg","name":"flag-1.svg","assetType":"icon","bucketsource":"static","url":"f1352393585280/dd79283d0c018b90ddaddd64e4f6e528.svg","folderId":"f1352393585280","targetSrc":"generated/dd79283d0c018b90ddaddd64e4f6e528_1b9af7.svg","color":"1b9af7"}
			,actions: []
	    },
		{
	    	icon: {"fileId":"509bc66ab2b78cb8be33f5d5a09565f2.svg","name":"folder-open.svg","assetType":"icon","bucketsource":"static","url":"f1352392599447/509bc66ab2b78cb8be33f5d5a09565f2.svg","folderId":"f1352392599447","targetSrc":"generated/509bc66ab2b78cb8be33f5d5a09565f2_1b9af7.svg","color":"1b9af7"}
			,actions: []
		},
		{
	    	icon: {"fileId":"e61a10b75e24969c112f42511678b129.svg","name":"kub-trash.svg","assetType":"icon","bucketsource":"static","url":"f1352449307873/e61a10b75e24969c112f42511678b129.svg","folderId":"f1352449307873","targetSrc":"generated/e61a10b75e24969c112f42511678b129_1b9af7.svg","color":"1b9af7"}
			,actions: []
	    },
		{
	    	icon: {"fileId":"2b44a2094b283cf56e0b407d4fe110d1.svg","name":"tl-undo.svg","assetType":"icon","bucketsource":"static","url":"f1352389411295/2b44a2094b283cf56e0b407d4fe110d1.svg","folderId":"f1352389411295","targetSrc":"generated/2b44a2094b283cf56e0b407d4fe110d1_1b9af7.svg","color":"1b9af7"}
			,actions: []
	    },
		{
	    	icon: {"fileId":"64193ce12d7f3b0eecf327262aec508f.svg","name":"tl-pencil.svg","assetType":"icon","bucketsource":"static","url":"f1352449133232/64193ce12d7f3b0eecf327262aec508f.svg","folderId":"f1352449133232","targetSrc":"generated/64193ce12d7f3b0eecf327262aec508f_1b9af7.svg","color":"1b9af7"}
			,actions: []
	    },
    ]
}

prx.components.ios7_statusbar = {
	name: 'ios7_statusbar'
	,type: 'ios7_statusbar'
	,lib: _library
	,caption: 'Statusbar'
	,icon: '-400px -1280px'
	,helper: prx.url.devices+_path+ 'statusbar/helper.png'
	,width:"full"
	,height:"40"
	,resizable : true
	,resizeHandles : "e,w"
	,backgroundColor: '#000000'
	,foregroundColor: '#ffffff'
	,overlay: false
}

prx.components.ios7_button_bg = {
	name: 'ios7_button_bg'
	,type: 'ios7_button_bg'
	,lib: _library
	,caption: 'Button with Background'
	,icon: '-720px -960px'
	,helper: prx.url.devices+_path + 'button_bg/helper.png'
	,image: prx.url.devices+_path + 'button_bg/image.png'
	,width: '400'
	,height: '88'
	,resizable : true
	,backgroundColor: '#1B9AF7'
	,borderWidth: 0
	,borderColor: '#FFFFFF'
	,borderRadius: 15
	,text: 'Label'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 35
	,textColor: '#FFFFFF'
	,textProperties: []
	,textAlign: 'center'
	,iconpos: 'none'
	,img: {"fileId":"b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","folderId":"f1352971179296","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_ffffff.svg","color":"ffffff"}
};

prx.components.ios7_button = {
	name: 'ios7_button'
	,type: 'ios7_button'
	,lib: _library
	,caption: 'Combo Button'
	,icon: '-640px -960px'
	,helper: prx.url.devices+_path + 'button/helper.png'
	,image: prx.url.devices+_path + 'button/image.png'
	,width: '200'
	,height: '88'
	,resizable : true
	,text: 'Label'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 35
	,textColor: '#1B9AF7'
	,textProperties: []
	,textAlign: 'center'
	,iconpos: 'left'
	,img: {"fileId":"b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","folderId":"f1352971179296","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_1b9af7.svg","color":"1b9af7"}
};

prx.components.ios7_button_icon = {
	name: 'ios7_button_icon'
	,type: 'ios7_button_icon'
	,lib: _library
	,caption: 'Icon Button'
	,icon: '-560px -960px'
	,helper: prx.url.devices+_path + 'button_icon/helper.png'
	,image: prx.url.devices+_path + 'button_icon/image.png'
	,width: '88'
	,height: '88'
	,resizable : true
	,textAlign: 'center'
	,iconpos: 'notext'
	,img: {"fileId":"b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","folderId":"f1352971179296","targetSrc":"generated/b0a2a6e58cba73da2d0b8dc3e0ac8fe8_1b9af7.svg","color":"1b9af7"}
};

prx.components.ios7_button_text = {
	name: 'ios7_button_text'
	,type: 'ios7_button_text'
	,lib: _library
	,caption: 'Text Button'
	,icon: '-480px -960px'
	,helper: prx.url.devices+_path + 'button_text/helper.png'
	,image: prx.url.devices+_path + 'button_text/image.png'
	,width: '200'
	,height: '88'
	,resizable : true
	,text: 'Label'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 35
	,textColor: '#1B9AF7'
	,textProperties: []
	,textAlign: 'center'
	,iconpos: 'none'
};

prx.components.ios7_button_icon_circular = {
	name: 'ios7_button_icon_circular'
	,type: 'ios7_button_icon_circular'
	,lib: _library
	,caption: 'Icon Button Circular'
	,icon: '0px -1040px'
	,helper: prx.url.devices+_path + 'button_icon_circular/helper.png'
	,image: prx.url.devices+_path + 'button_icon_circular/image.png'
	,width: '88'
	,height: '88'
	,resizable : true
	,backgroundColor: 'rgba(0,0,0,0)'
	,borderWidth: 4
	,borderColor: '#000000'
	,borderRadius: '50%'
	,textAlign: 'center'
	,iconpos: 'notext'
	,img: {"fileId":"a0de48396fb6d6a99bc13cb51fbddf36.svg","name":"lock-close.svg","assetType":"icon","bucketsource":"static","url":"f1352393041300/a0de48396fb6d6a99bc13cb51fbddf36.svg","folderId":"f1352393041300"}
};


prx.components.ios7_button_icon_square = {
	name: 'ios7_button_icon_square'
	,type: 'ios7_button_icon_square'
	,lib: _library
	,caption: 'Icon Button Square'
	,icon: '-80px -1040px'
	,helper: prx.url.devices+_path + 'button_icon_square/helper.png'
	,image: prx.url.devices+_path + 'button_icon_square/image.png'
	,width: '88'
	,height: '88'
	,resizable : true
	,backgroundColor: 'rgba(0,0,0,0)'
	,borderWidth: 4
	,borderColor: '#000000'
	,borderRadius: '15'
	,textAlign: 'center'
	,iconpos: 'notext'
	,img: {"fileId":"2180c33c348538f1cfb9e6f56b65f4a5.svg","name":"camera.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/2180c33c348538f1cfb9e6f56b65f4a5.svg","folderId":"f1352971179296"}
};

prx.components.ios7_button_ui = {
	name: 'ios7_button_ui'
	,type: 'ios7_button_ui'
	,lib: _library
	,caption: 'UI Button'
	,icon: '-480px -1280px'
	,helper: prx.url.devices+_path + 'button_ui/helper.png'
	,width: '44'
	,height: '44'
	,resizable : true
	,backgroundColor: '#49E845'
	,borderRadius: '50%'
	,textAlign: 'center'
	,iconpos: 'notext'
	,img: {"fileId":"558b9ee9b4a9123e4df38f815f297650.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","folderId":"f1352971179296","targetSrc":"generated/558b9ee9b4a9123e4df38f815f297650_ffffff.svg","color":"ffffff"}
};

prx.components.ios7_segmentedcontrol = {
	name: 'ios7_segmentedcontrol'
	,type: 'ios7_segmentedcontrol'
	,lib: _library
	,caption: 'Segmented Control'
	,icon: '-160px -1040px'
	,helper: prx.url.devices+_path + 'segmentedcontrol/helper.png'
	,image: prx.url.devices+_path + 'segmentedcontrol/image.png'
	,width: '450'
	,height: '60'
	,resizable : true
	,backgroundColor: 'rgba(0,0,0,0)'
	,activeBackgroundColor: '#1B9AF7'
	,borderWidth: 2
	,borderColor: '#1B9AF7'
	,borderRadius: 10
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 25
	,textColor: '#1B9AF7'
	,textProperties: []
	,activeTextColor: '#FFFFFF'
	,selected: 0
	,buttons: [{
		actions: [],
		text: 'Label 1'
	},{
		actions: [],
		text: 'Label 2'
	}]
};

prx.components.ios7_pagecontroller = {
	name: 'ios7_pagecontroller'
	,type: 'ios7_pagecontroller'
	,lib: _library
	,caption: 'Page Controller'
	,icon: '-240px -1040px'
	,helper: prx.url.devices+_path + 'pagecontroller/helper.png'
	,image: prx.url.devices+_path + 'pagecontroller/image.png'
	,width: '150'
	,height: '16'
	,resizable : true
	,backgroundColor: '#1B9AF7'
	,activeBackgroundColor: '#FFFFFF'
	,borderRadius: '50%'
	,selected: 999
	,buttons: [{
		actions: []
	},{
		actions: []
	},{
		actions: []
	}]
};

prx.components.ios7_label = {
	name: 'ios7_label'
	,type: 'ios7_label'
	,lib: _library
	,caption: 'Label'
	,icon: '-320px -1040px'
	,helper: prx.url.devices+_path + 'label/helper.png'
	,image: prx.url.devices+_path + 'label/image.png'
	,width: '500'
	,height: '88'
	,resizable : true
	,text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 27
	,textColor: '#999999'
	,textProperties: []
	,textAlign: 'center'
};

prx.components.ios7_textfield = {
	name: 'ios7_textfield'
	,type: 'ios7_textfield'
	,lib: _library
	,caption: 'Text Field'
	,icon: '-400px -1040px'
	,helper: prx.url.devices+_path + 'textfield/helper.png'		
	,width:"300"
	,height:"40"
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'rgba(0,0,0,0)'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: "18"
	,textColor:  '000000'
	,placeholderColor: '999999'
	,borderWidth: 0
	,borderRadius: 5
	,borderColor: 'cccccc'
	,textAlign: 'left'
}

prx.components.ios7_passwordfield = {
	name: 'ios7_passwordfield'
	,type: 'ios7_textfield'
	,lib: _library
	,caption: 'Password Field'
	,icon: '-480px -1040px'
	,helper: prx.url.devices+_path + 'textfield/helper.png'		
	,width:"300"
	,height:"40"
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'password'
	,backgroundColor: 'rgba(0,0,0,0)'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: "18"
	,textColor: '000000'
	,placeholderColor: '999999'
	,borderWidth: 0
	,borderRadius: 5
	,borderColor: 'cccccc'
	,textAlign: 'left'
}

prx.components.ios7_textarea = {
	name: 'ios7_textarea'
	,type: 'ios7_textarea'
	,lib: _library
	,caption: 'Textarea'
	,icon: '-560px -1040px'
	,helper: prx.url.devices+_path + 'textarea/helper.png'		
	,width:"300"
	,height:"150"
	,value: ''
	,placeholder: 'Placeholder'
	,backgroundColor: 'rgba(0,0,0,0)'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: "18"
	,textColor: '000000'
	,placeholderColor: '999999'
	,borderWidth: 0
	,borderRadius: 5
	,borderColor: 'cccccc'
	,textAlign: 'left'
}

prx.components.ios7_checkbox = {
	name: 'ios7_checkbox'
	,type: 'ios7_checkbox'
	,lib: _library
	,caption: 'Checkbox'
	,icon: '-720px -1040px'
	,helper: prx.url.devices+_path + 'checkbox/helper.png'
	,image: prx.url.devices+_path + 'checkbox/image.png'
	,width: '44'
	,height: '44'
	,resizable : true
	,backgroundColor: 'rgba(0,0,0,0)'
	,activeBackgroundColor: '#1B9AF7'
	,borderWidth: 2
	,borderColor: '#999999'
	,borderRadius: '50%'
	,img: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_ffffff.svg","color":"ffffff"}
	,active: true
};

prx.components.ios7_switch = {
	name: 'ios7_switch'
	,type: 'ios7_switch'
	,lib: _library
	,caption: 'On/Off Switch'
	,icon: '0px -1120px'
	,helper: prx.url.devices+_path + 'switch/helper.png'		
	,width:"100"
	,height:"60"
	,inactiveLabelColor: '#FFFFFF'
	,activeLabelColor: '#49E845'
	,borderWidth: 2
	,inactiveBorderColor: '#CCCCCC'
	,activeBorderColor: '#49E845'
	,switchColor: 'FFFFFF'
}

prx.components.ios7_slider = {
	name: 'ios7_slider'
	,type: 'ios7_slider'
	,lib: _library
	,caption: 'Slider'
	,icon: '-80px -1120px'
	,helper: prx.url.devices+_path + 'slider/helper.png'
	,width:"300"
	,height:"30"
	,resizable : true
	,barThickness: 4
	,barColor: '999999'
	,fillBarColor: '1B9AF7'
	,sliderColor: 'ffffff'
	,sliderBorderRadius: '50%' 
	,sliderPosition: 70
	,properties: "v,l,o,hpos,vpos,w,h"
}

prx.components.ios7_picker = {
	name: 'ios7_picker'
	,type: 'ios7_picker'
	,lib: _library
	,caption: 'Picker'
	,icon: '-160px -1120px'
	,helper: prx.url.devices+_path + 'picker/helper.png'
	,width:"full"
	,height:"300"
	,vpos: "bottom"
	,resizable : true
	,backgroundColor: 'ffffff'
	,textColor: 'CCCCCC'
	,activeTextColor: '333333'
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 32
	,textProperties: []
	,textAlign: 'center'
	,values: "Label 1<br />Label 2<br />Label 3<br />Label 4<br />Label 5"
	,selectedValue: 0
}

prx.components.ios7_listbasic = {
	name: 'ios7_listbasic'
	,type: 'ios7_listbasic'
	,lib: _library
	,caption: 'Basic List'
	,icon: '-240px -1120px'
	,helper: prx.url.devices+_path + 'listbasic/helper.png'
	,width: "full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
  	,subSize: 26
  	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
  	,subColor: '999999'
  	,subProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,iconpos: ''
	,iconSize: 2
	,listitems: [
       {
    	   itemtype: 'basic'
    	   ,text: 'Label 1'
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
       },
       {
    	   itemtype: 'basic'
    	   ,text: 'Label 2'
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
       }
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listnested = {
	name: 'ios7_listnested'
	,type: 'ios7_listnested'
	,lib: _library
	,caption: 'Nested List'
	,icon: '-320px -1120px'
	,helper: prx.url.devices+_path + 'listnested/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,subColor: '999999'
	,subProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 1
	,listitems: [
       {
    	   itemtype: 'nested'
    	   ,text: 'Label 1'
    	   ,buttonicon: {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
       },
       {
    	   itemtype: 'nested'
		   ,text: 'Label 2'
		   ,buttonicon: {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
       }
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listwithicon = {
	name: 'ios7_listwithicon'
	,type: 'ios7_listwithicon'
	,lib: _library
	,caption: 'List with Icon'
	,icon: '-400px -1120px'
	,helper: prx.url.devices+_path + 'listbasic/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
  	,subColor: '999999'
  	,subProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
       {
    	   itemtype: 'withIcon'
    	   ,text: 'Label 1'
    	   ,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
    	
       },
       {
    	   itemtype: 'withIcon'
    	   ,text: 'Label 2'
    	   ,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
       }
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listwithvalue = {
	name: 'ios7_listwithvalue'
	,type: 'ios7_listwithvalue'
	,lib: _library
	,caption: 'List with Value'
	,icon: '-480px -1120px'
	,helper: prx.url.devices+_path + 'listwithvalue/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,subColor: '999999'
	,subProperties: []
    ,valueSize: 32
	,valueFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,valueColor: '999999'
	,valueProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeValueColor: '999999'
	,activeSubColor: '999999'
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'withValue'
			,value: 'Insert value'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,actions: []
			,subtitle: ''
		},
		{
			text: 'Label 2'
			,itemtype: 'withValue'
			,value: 'Insert value'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,actions: []
			,subtitle: ''
		}
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listnestedwithvalue = {
	name: 'ios7_listnestedwithvalue'
	,type: 'ios7_listnestedwithvalue'
	,lib: _library
	,caption: 'Nested List with Value'
	,icon: '-560px -1120px'
	,helper: prx.url.devices+_path + 'listnestedwithvalue/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
  	,subColor: '999999'
  	,subProperties: []
    ,valueSize: 32
	,valueFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,valueColor: '999999'
	,valueProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeValueColor: '999999'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 1
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'nestedWithValue'
			,value: 'Insert value'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
			,actions: []
			,subtitle: ''
		},
		{
			text: 'Label 2'
			,itemtype: 'nestedWithValue'
			,value: 'Insert value'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
			,actions: []
			,subtitle: ''
		}
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listwithiconandvalue = {
	name: 'ios7_listwithiconandvalue'
	,type: 'ios7_listwithiconandvalue'
	,lib: _library
	,caption: 'List with Icon and Value'
	,icon: '-640px -1120px'
	,helper: prx.url.devices+_path + 'listwithvalue/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
  	,subColor: '999999'
  	,subProperties: []
    ,valueSize: 32
	,valueFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,valueColor: '999999'
	,valueProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeValueColor: '999999'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'withIconAndValue'
			,value: 'Insert value'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
			,actions: []
			,subtitle: ''
		},
		{
			text: 'Label 2'
			,itemtype: 'withIconAndValue'
			,value: 'Insert value'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
			,actions: []
			,subtitle: ''
		}
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listwithbadge = {
	name: 'ios7_listwithbadge'
	,type: 'ios7_listwithbadge'
	,lib: _library
	,caption: 'List with Badge'
	,icon: '-720px -1120px'
	,helper: prx.url.devices+_path + 'listwithbadge/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,subColor: '999999'
	,subProperties: []
    ,badgeSize: 18
	,badgeFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,badgeColor: 'ffffff'
	,badgeProperties: []
    ,badgeBackgroundColor: 'FF4351'
	,textAlign: 'left'
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'withBadge'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,actions: []
		},
		{
			text: 'Label 2'
			,itemtype: 'withBadge'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,actions: []
		}
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listnestedwithbadge = {
	name: 'ios7_listnestedwithbadge'
	,type: 'ios7_listnestedwithbadge'
	,lib: _library
	,caption: 'Nested List with Badge'
	,icon: '0px -1200px'
	,helper: prx.url.devices+_path + 'listnestedwithbadge/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,subColor: '999999'
	,subProperties: []
    ,badgeSize: 18
	,badgeFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,badgeColor: 'ffffff'
	,badgeProperties: []
    ,badgeBackgroundColor: 'FF4351'
	,textAlign: 'left'
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 1
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'nestedWithBadge'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
			,actions: []
		},
		{
			text: 'Label 2'
			,itemtype: 'nestedWithBadge'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: {"fileId":"54d11361d17fef026e2d6b2c1a8fe379.svg","name":"chevron-right.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/54d11361d17fef026e2d6b2c1a8fe379.svg","folderId":"f1352971179296","targetSrc":"generated/54d11361d17fef026e2d6b2c1a8fe379_999999.svg","color":"999999"}
				,actions: []
			}
	    ]
	    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listwithiconandbadge = {
	name: 'ios7_listwithiconandbadge'
	,type: 'ios7_listwithiconandbadge'
	,lib: _library
	,caption: 'List with Icon and Badge'
	,icon: '-80px -1200px'
	,helper: prx.url.devices+_path + 'listwithbadge/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,subColor: '999999'
	,subProperties: []
    ,badgeSize: 18
	,badgeFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,badgeColor: 'ffffff'
	,badgeProperties: []
    ,badgeBackgroundColor: 'FF4351'
	,textAlign: 'left'
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'nestedWithBadge'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
			,actions: []
		},
		{
			text: 'Label 2'
			,itemtype: 'nestedWithBadge'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
			,actions: []
		}
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listradio = {
	name: 'ios7_listradio'
	,type: 'ios7_listradio'
	,lib: _library
	,caption: 'Radio List'
	,icon: '0px -1280px'
	,helper: prx.url.devices+_path + 'listradio/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
  	,subColor: '999999'
  	,subProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
       {
    	   itemtype: 'radio'
    	   ,text: 'Label 1'
    	   ,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
    	   ,checked: true
    	
       },
       {
    	   itemtype: 'radio'
    	   ,text: 'Label 2'
    	   ,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
    	   ,checked: false
       }
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listcheckbox = {
	name: 'ios7_listcheckbox'
	,type: 'ios7_listcheckbox'
	,lib: _library
	,caption: 'Checkbox List'
	,icon: '-720px -1200px'
	,helper: prx.url.devices+_path + 'listcheckbox/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
  	,subColor: '999999'
  	,subProperties: []
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
       {
    	   itemtype: 'checkbox'
    	   ,text: 'Label 1'
    	   ,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
    	   ,checked: true
    	
       },
       {
    	   itemtype: 'checkbox'
    	   ,text: 'Label 2'
    	   ,buttonicon: {"fileId":"34d6599607c21d5f87e5d30af9449c1c.svg","name":"check.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/34d6599607c21d5f87e5d30af9449c1c.svg","folderId":"f1352971179296","targetSrc":"generated/34d6599607c21d5f87e5d30af9449c1c_1b9af7.svg","color":"1B9AF7"}
    	   ,actions: []
    	   ,hasThumbnail: false
    	   ,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
    	   ,subtitle: ''
    	   ,checked: true
       }
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_listcomplex = {
	name: 'ios7_listcomplex'
	,type: 'ios7_listcomplex'
	,lib: _library
	,caption: 'Complex List'
	,icon: '-80px -1280px'
	,helper: prx.url.devices+_path + 'listbasic/helper.png'
	,width:"full"
	,height:"178"
	,resizable : true
	,borderWidth: 1
	,borderColor: 'CCCCCC'
	,textSize: 35
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '333333'
	,textAlign: 'left'
	,textProperties: []
	,subSize: 26
	,subFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,subColor: '999999'
	,subProperties: []
    ,valueSize: 32
	,valueFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,valueColor: '999999'
	,valueProperties: []
    ,badgeSize: 18
	,badgeFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,badgeColor: 'ffffff'
	,badgeProperties: []
    ,badgeBackgroundColor: 'FF4351'
	,textAlign: 'left'
	,backgroundColor: 'FFFFFF'
	,activeBackgroundColor: 'CCCCCC'
	,activeTextColor: '333333'
	,activeSubColor: '999999'
	,activeValueColor: '999999'
	,iconpos: 'right'
	,iconSize: 2
	,listitems: [
		{
			text: 'Label 1'
			,itemtype: 'basic'
			,value: 'Insert value'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
			,checked: false
			,actions: []
		},
		{
			text: 'Label 2'
			,itemtype: 'basic'
			,value: 'Insert value'
			,subtitle: ''
			,badgeText: '1'
			,hasThumbnail: false
			,thumbnail: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
			,buttonicon: { fileId: '', folderId: '', url: '', assetType: 'icon', name: '' }
			,checked: false
			,actions: []
		}
    ]
    ,dynamicSizeExpand: 'v'
}

prx.components.ios7_list_header = {
	name: 'ios7_list_header'
	,type: 'ios7_list_header'
	,lib: _library
	,caption: 'List Header'
	,icon: '-160px -1280px'
	,helper: prx.url.devices+_path + 'list_header/helper.png'
	,width:"full"
	,height:"40"
	,resizable : true
	,textSize: 32
	,textFont: 'HelveticaNeue-Medium, Helvetica, Verdana, Arial, sans-serif'
	,textColor: '000000'
	,textAlign: 'left'
	,textProperties: []
	,backgroundColor: 'rgba(240, 240, 240, 0.95)'
	,text: 'LABEL'
}

prx.components.ios7_alert = {
	name: 'ios7_alert'
	,type: 'ios7_alert'
	,lib: _library
	,caption: 'Alert'
	,icon: '-160px -1200px'
	,helper: prx.url.devices+_path + 'alert/helper.png'
	,image: prx.url.devices+_path + 'alert/image.png'
	,width: '500'
	,height: '300'
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderColor: '#CCCCCC'
	,borderRadius: 5
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 34
	,textColor: '#333333'
	,title: 'Alert title'
	,text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
	,buttons: [{
		actions: [],
		text: 'Cancel',
		textColor: '#1B9AF7',
		textProperties: []
	},{
		actions: [],
		text: 'OK',
		textColor: '#1B9AF7',
		textProperties: ['bold']
	}]
};

prx.components.ios7_actionsheet_title = {
	name: 'ios7_actionsheet_title'
	,type: 'ios7_actionsheet'
	,lib: _library
	,caption: 'Actionsheet with title'
	,icon: '-320px -1200px'
	,helper: prx.url.devices+_path + 'actionsheet_title/helper.png'
	,image: prx.url.devices+_path + 'actionsheet_title/image.png'
	,width: '500'
	,height: '325'
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderColor: '#CCCCCC'
	,borderRadius: 5
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 40
	,showtitle: true
	,detachlast: true
	,buttons: [{
		actions: [],
		text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?',
		textColor: '#999999',
		titleTextSize: 16,
		textProperties: []
	},{
		actions: [],
		text: 'Delete',
		textColor: '#FF3B30',
		titleTextSize: 16,
		textProperties: []
	},{
		actions: [],
		text: 'Save',
		textColor: '#1B9AF7',
		titleTextSize: 16,
		textProperties: []
	},{
		actions: [],
		text: 'Cancel',
		textColor: '#1B9AF7',
		titleTextSize: 16,
		textProperties: ['bold']
	}]
};

prx.components.ios7_actionsheet = {
	name: 'ios7_actionsheet'
	,type: 'ios7_actionsheet'
	,lib: _library
	,caption: 'Actionsheet'
	,icon: '-240px -1200px'
	,helper: prx.url.devices+_path + 'actionsheet/helper.png'
	,image: prx.url.devices+_path + 'actionsheet/image.png'
	,width: '500'
	,height: '250'
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderColor: '#CCCCCC'
	,borderRadius: 5
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 40
	,showtitle: false
	,detachlast: true
	,buttons: [{
		actions: [],
		text: 'Delete',
		textColor: '#FF3B30',
		textProperties: []
	},{
		actions: [],
		text: 'Save',
		textColor: '#1B9AF7',
		textProperties: []
	},{
		actions: [],
		text: 'Cancel',
		textColor: '#1B9AF7',
		textProperties: ['bold']
	}]
};

prx.components.ios7_control_popover = {
	name: 'ios7_control_popover'
	,type: 'ios7_control_popover'
	,lib: _library
	,caption: 'Control Popover'
	,icon: '-400px -1200px'
	,helper: prx.url.devices+_path + 'control_popover/helper.png'
	,image: prx.url.devices+_path + 'control_popover/image.png'
	,width: '450'
	,height: '80'
	,resizable : true
	,backgroundColor: '000000'
	,borderWidth: 1
	,borderColor: '#FFFFFF'
	,borderRadius: 10
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textSize: 25
	,textColor: '#FFFFFF'
	,textProperties: []
	,tooltipSize: 20
	,tooltipPosition: 10
	,buttons: [{
		actions: [],
		text: 'Copy'
	},{
		actions: [],
		text: 'Paste'
	},{
		actions: [],
		text: 'Select All'
	}]
};

prx.components.ios7_popover = {
	name: 'ios7_popover'
	,type: 'ios7_popover'
	,lib: _library
	,caption: 'Popover'
	,icon: '-640px -1200px'
	,helper: prx.url.devices+_path + 'popover/helper.png'
	,image: prx.url.devices+_path + 'popover/image.png'
	,width: '450'
	,height: '300'
	,resizable : true
	,backgroundColor: 'rgba(255,255,255,0.95)'
	,borderRadius: 10
	,tooltipSize: 20
	,tooltipSide: 'top'
	,tooltipPosition: 50
};


prx.components.ios7_progressbar = {
	name: 'ios7_progressbar'
	,type: 'ios7_progressbar'
	,lib: _library
	,caption: 'Progress bar'
	,icon: '-320px -1280px'
	,helper: prx.url.devices+_path + 'progressbar/helper.png'
	,width:"300"
	,height:"4"
	,resizable : true
	,barColor: 'CCCCCC'
	,fillBarColor: '1B9AF7'
	,progress: 70
}


prx.components.ios7_badge = {
	name: 'ios7_badge'
	,type: 'ios7_badge'
	,lib: _library
	,caption: 'Badge'
	,icon: '-480px -1200px'
	,helper: prx.url.devices+_path + 'badge/helper.png'
	,width:"35"
	,height:"25"
	,resizable : true
	,text: '1'
    ,textSize: 18
	,textFont: 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif'
	,textColor: 'ffffff'
	,textProperties: []
    ,backgroundColor: 'FF4351'
    ,borderRadius: 12
}
