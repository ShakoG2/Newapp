Ext.define("AP.view.MainViewModel",{
    extend:"Ext.app.ViewModel",
    requires: ['AP.model.Post'],
    stores: {
        posts: {
          model: 'AP.model.Post',
          autoLoad: true
        },
        navItems: {
            type: 'tree',
            root: {
              expanded: true,
              children: [{
                text: 'Home',
                iconCls: 'fa fa-home',
                className:"AP.view.Home",
                children: [{
                  text: 'Messages',
                  iconCls: 'fa fa-inbox',
                  leaf: true
                }, {
                  text: 'Archive',
                  iconCls: 'x-fa fa-database',
                  children: [{
                    text: 'First',
                    iconCls: 'fa fa-sliders-h',
                    leaf: true
                  }, {
                    text: 'No Icon',
                    iconCls: null,
                    leaf: true
                  }]
                }, {
                  text: 'Music',
                  iconCls: 'fa fa-music',
                  leaf: true
                }, {
                  text: 'Video',
                  iconCls: 'fa fa-film',
                  leaf: true
                }]
              }, {
                text: 'Users',
                iconCls: 'x-fa fa-user',
                children: [{
                  text: 'Tagged',
                  iconCls: 'fa fa-tag',
                  leaf: true
                }, {
                  text: 'Inactive',
                  iconCls: 'fa fa-trash-alt',
                  leaf: true
                }]
              }, {
                text: 'Groups',
                iconCls: 'fa fa-users',
                leaf: true
              }, {
                text: 'Settings',
                iconCls: 'fa fa-wrench',
                children: [{
                  text: 'Sharing',
                  iconCls: 'fa fa-share-alt',
                  leaf: true
                }, {
                  text: 'Notifications',
                  iconCls: 'fa fa-flag',
                  leaf: true
                }, {
                  text: 'Network',
                  iconCls: 'fa fa-signal',
                  leaf: true
                }]
              }]
            }
          }
      }
})