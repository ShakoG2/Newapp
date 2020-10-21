Ext.define("AP.view.MainController",{
    extend:"Ext.app.ViewController",
    reset: function(){
        const form=this.lookup("SearchForm");
        form.getForm().reset();
    },
    search: function() {
        const form = this.lookup('SearchForm');
        const values = form.getForm().getValues();
        const store = this.getViewModel().getStore('posts');
        for(let v in values){
          if(!values[v]) {
            delete values[v]
          }
        }
        store.load({
          params: values
        });
      },
      onMenuSelect: function(view, record) {
        const className = record.get('className');
        const title = record.get('text');
    
        const tabPanel = this.lookup('mainTabPanel');
        let tab = this.lookup(className);
    
        if(!tab) {
          tab = Ext.create(className, {
            reference: className,
            closable: true,
            title: title
          });
          tabPanel.add(tab);
        }
    
        tabPanel.setActiveTab(tab);
      },
});