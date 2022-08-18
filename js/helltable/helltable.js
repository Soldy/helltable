'use strict';

const hellTableClass = function(){
    this.data = function(data_){
        _data = data_;
        if(_rendered === true)
            _update();
    };
    this.header = function(data_){
        _headers = data_;
        _colums = [];
        for (let i in _headers)
            _colums.push(
                i
            );
        if(_rendered === true)
            _update();
    };
    this.render = function(){
        return _render();
    };
    let _data =[];
    let _headers = {};
    let _rendered = false;
    let _element;
    let _colums = [];
    const _create = function(tag){
        return document.createElement(tag);
    };
    const _renderCol = function(inner){
         const tag = _create('td');
         tag.textContent = inner.toString();
         return tag;
    }
    const _renderLine = function(line_){
         const line = _create('tr');
         for(let col of _colums){
             if(typeof line_[col] === 'undefined')
                 line_[col] = '';
             line.appendChild(
                 _renderCol(line_[col])
             );
         }
         return line;
    };
    const _renderHeadCol = function(title){
         const tag = _create('th');
         tag.textContent = title.toString();
         return tag;
    };
    const _renderHead = function(){
         const tr = _create('tr');
         console.log(_headers); 
         for(let col of _colums)
             tr.appendChild(
                 _renderHeadCol(_headers[col]) 
             );
         return tr;
    };
    const _render = function(){
        if(_rendered === true)
            return _element;
        _element = _create('table');
        const head = _create('thead');
        head.appendChild(
            _renderHead()
        );
        const body = _create('tbody');
        for(let i of _data)
            body.appendChild(
                _renderLine(i)
            );
        _element.appendChild(head);
        _element.appendChild(body);
        return _element;
    };
};
