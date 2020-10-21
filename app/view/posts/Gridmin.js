Ext.define("AP.view.posts.Gridmin",{
    extend:"Ext.grid.Panel",
    title:"SearchHistory",
    bind:"{posts}",
    controller:{ 
        xclass:"AP.view.posts.GridController"
    },
    bbar:[{
        text:"Delete History",
        handler:"deleteHistory"
    }],
    columns:[{
        text:"User ID",
        dataIndex:"userId",
        flex:1
    },{
        text:"Title",
        dataIndex:"title",
        flex:1,
    }]
})