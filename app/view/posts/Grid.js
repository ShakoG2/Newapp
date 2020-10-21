Ext.define("AP.view.posts.Grid",{
    extend:"Ext.grid.Panel",
    reference:"mainGrid",
    controller:{
        xclass:"AP.view.posts.GridController"
    },
    bind:"{posts}",
    border:"false",
    tbar:[{
        text:"Add Customer",
        handler:"addcustomer"
    },{
        text:"Delete Customer",
        handler:"deletecustomer"
    }],
    columns:[{
        text:"ID",
        dataIndex:"id",
        flex:1,
    },{ text:"UserId",
        dataIndex:"userId",
        flex:1,
    },{
        text:"Body",
        dataIndex:"body",
        flex:3,
    },{
        text:"Title",
        dataIndex:"title",
        flex:2,
    }],
    
    
})