window.onload=function(){
    const hellTable = new hellTableClass();
    hellTable.header({
        'id':'ID',
        'name':'Name',
        'Pos':'Category'
    });
    hellTable.data([
        {
            'id':0,
            'name':'Sami Feni',
            'Pos':'A'
        },{
            'id':1,
            'name':'Deni Teni',
            'Pos':'B'
        },{
            'id':2,
            'name':'Meki Keni',
            'Pos':'C'
        }
    ]);
    document.getElementsByTagName('body')[0].appendChild(
        hellTable.render()
    );
};
