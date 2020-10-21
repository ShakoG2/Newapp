Ext.define("AP.view.posts.GridController",{
    extend:"Ext.app.ViewController",
    deletecustomer:function(){
       const grid=this.getView();
       const selected=grid.getSelectionModel().getSelection()[0];
       if(!selected) return;
       grid.setLoading("მიმდინარეობს წაშლა");
       selected.erase({
           success: function(){
               Ext.Msg.alert("Succsess");
           },
           failure: function(){
               Ext.Msg.alert("Error");
           },
           callback: function(){
               grid.setLoading(false);
           }
       })

    },
    deleteHistory:function(){
        const grid=this.getView();
        const selected=grid.getSelectionModel().getSelection()[0];
        if(!selected) return;
        grid.setLoading("მიმდინარეობს წაშლა");
        selected.erase({
            success: function(){
                Ext.Msg.alert("Succsess");
            },
            failure: function(){
                Ext.Msg.alert("Error");
            },
            callback: function(){
                grid.setLoading(false);
            }
        })
 
     }
})