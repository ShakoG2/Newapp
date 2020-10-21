Ext.define("AP.view.Main",{
  extend:"Ext.panel.Panel",
  layout:"border",
  viewModel:{
 xclass:"AP.view.MainViewModel"
  },
  controller:{
    xclass:"AP.view.MainController"
  },
  items:[{
    xtype:"panel",
    region:"east",  
    border:"false",
    width:400,
    height:200,
    title:"SearchCustomer",
    split:true,
    collapsible: true,
    layout:{
      type:"vbox",
      align:"stretch"
    },
    items:[{
      flex: 1,
      xclass:"AP.view.posts.SearchForm",
      reference:"SearchForm",
      flex:1,
      },{
        xclass:"AP.view.posts.Gridmin",
        flex:3
      }]
  },{
    xtype: 'panel',
    width: 200,
    title: 'Menu',
    split: true,
    collapsible: true,
    region: 'west',
    layout: {
      type: 'vbox',
      align: 'stretch',
    },
    items: [{
      xtype: 'treelist',
      flex: 1,
      bind: '{navItems}',
      listeners: {
        selectionchange: 'onMenuSelect'
      }
    }, {
      xtype: 'button',
      text: 'Softlab',
      margin: 10
    }]
  }, {
    xtype: 'tabpanel',
    reference: 'mainTabPanel',
    region: 'center',
    items: []
  }]
})