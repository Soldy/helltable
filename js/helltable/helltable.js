'use strict';
/**
 * @function onclick
 */
const hellTableClass = function(onclick_){

    /**
     *
     * @param {Array.<Object.<string, string|number>>}
     * @public
     */
    this.data = function(data_){
        _data = [];
        if (!Array.isArray(data_))
            throw TypeError('Invalid data type data is not an array.');
        for (let i of data_){
            let line = {};
            for (let a in i){
                line[a.toString()] = i[a].toString();
            }
             _data.push(line);
        }
        if(_rendered === true)
            _update();
    };

    /**
     *
     * @param {Object.<string, string>}
     * @public
     */
    this.header = function(data_){
        _headers = data_;
        _colums = [];
        for (let i in _headers)
            _colums.push(i);
        if(_rendered === true)
            _update();
    };

    /**
     *
     * @public
     * @returns {HTMLElement}
     */
    this.render = function(){
        return _render();
    };

    /**
     *
     * @private
     * @let {Array.<Object.<string, string>>}
     */
    let _data = [];

    /**
     *
     * @private
     * @let {Object.<string, string>}
     */
    let _headers = {};
    let _rendered = false;
    let _element;
    let _onclick = onclick_;
    let _colums = [];
    const _create = function(tag){
        return document.createElement(tag);
    };
    const _renderCel = function(inner){
         const tag = _create('td');
         tag.textContent = inner.toString();
         return tag;
    }
    const _renderLine = function(line_){
         const line = _create('tr');
         line.setAttribute(
           "riute",
           line_[_colums[0]]
         );
         for(let col of _colums){
             if(typeof line_[col] === 'undefined')
                 line_[col] = '';
             line.appendChild(
                 _renderCel(line_[col])
             );
         }
         line.addEventListener(
           "click",
           _onclick
         )
         return line;
    };
    const _renderHeadCel = function(title){
         const tag = _create('th');
         tag.textContent = title.toString();
         return tag;
    };
    const _renderHead = function(){
         const tr = _create('tr');
         for(let col of _colums){
             tr.appendChild(
                 _renderHeadCel(_headers[col]) 
             );
         }
         return tr;
    };
    const _update = function(){
        _element.innerHTML = '';
        const head = _create('thead');
        head.appendChild(
            _renderHead()
        );
        const body = _create('tbody');
        for(let i of _data){
            body.appendChild(
                _renderLine(i)
            );
        }
        _element.appendChild(head);
        _element.appendChild(body);

    };
    const _render = function(size, from){
        if(_rendered === true)
            return _element;
        _element = _create('table');
        _update();
        _rendered = true;
        return _element;
    };
    if (typeof _onclick === 'undefined')
      _onclick = function(id_){};

};
