(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(36)},25:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"todo",function(){return J});var o=n(0),c=n.n(o),r=n(15),l=n.n(r),i=(n(25),n(3)),s=n(4),u=n(6),d=n(5),h=n(7),p=n(1),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleKeyUp=function(e){if(13===e.keyCode){var t=e.target.value;if(!t)return;e.target.value="",n.props.addTodo(t)}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"todo__header"},c.a.createElement("div",null,"To Do List"),c.a.createElement("input",{className:"todo__header_input",onKeyUp:this.handleKeyUp,type:"text",placeholder:"Come On Add Todo"}))}}]),t}(c.a.Component),m=Object(p.b)(null,function(e){var t=e.todo.addTodo;return{addTodo:function(e){return t({value:e,done:!1})}}})(f),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleDelete=function(){var e=n.props.index;n.props.deleteTodo({index:e})},n.handleChange=function(){var e=n.props,t=e.index,a=e.todo.done;n.props.changeIsDone({index:t,done:!a})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=t.done,a=t.value,o=e.index;return c.a.createElement("li",{className:"todo__item"},c.a.createElement("input",{className:"todo__checkbox",type:"checkbox",checked:n,onChange:this.handleChange}),c.a.createElement("span",{className:"todo__item_value"},"".concat(o+1,"\u3001"),a),c.a.createElement("span",{className:"delete",onClick:this.handleDelete},"Delete"))}}]),t}(o.Component),v=Object(p.b)(null,function(e){var t=e.todo,n=t.deleteTodo,a=t.changeIsDone;return{deleteTodo:function(e){return n(e)},changeIsDone:function(e){return a(e)}}})(b),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=void 0===t?[]:t,a=e.isDoing;return c.a.createElement("ul",{className:"todo__list"},c.a.createElement("li",{className:"todo__list_nav"},a?"isDoing":"isDone"),a?n.map(function(e,t){return!e.done&&c.a.createElement(v,{index:t,todo:e,key:t})}):n.map(function(e,t){return e.done&&c.a.createElement(v,{index:t,todo:e,key:t})}))}}]),t}(c.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(O,Object.assign({isDoing:!0},this.props)),c.a.createElement(O,Object.assign({isDoing:!1},this.props)))}}]),t}(c.a.Component),k=Object(p.b)(function(e){return{todo:e.todo}})(j),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isCheckedAll:!1},n.handleChangeCheckedAll=function(){var e=!n.state.isCheckedAll;console.log("handleChangeCheckedAll",e),n.setState({isCheckedAll:e}),n.props.checkedAll({isCheckedAll:e})},n.clearIsDone=function(){n.props.clearIsDone()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"todo__footer"},c.a.createElement("div",{className:"todo__list_nav"},"Operation"),c.a.createElement("div",{className:"todo__item"},c.a.createElement("input",{className:"todo__checkbox",type:"checkbox",checked:this.props.isAllChecked,onChange:this.handleChangeCheckedAll}),c.a.createElement("span",{className:"todo__item_value"},"Select All"),c.a.createElement("span",{onClick:this.clearIsDone,className:"todo__delete"},"Select Delete")),c.a.createElement("p",{className:"todo__log"},"Copyright \xa9 2017 by Sailor"))}}]),t}(o.Component),_=Object(p.b)(null,function(e){var t=e.todo,n=t.checkedAll,a=t.clearIsDone;return{checkedAll:function(e){return n(e)},clearIsDone:function(){return a()}}})(g),y=(n(31),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(k,null),c.a.createElement(_,null))}}]),t}(o.Component)),E=Object(p.b)(function(e){return{todo:e.todo}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(18),D=n(12),A=n.n(D),w=n(19),x=n(8),N=function(e){return new Promise(function(t){return setTimeout(function(){return t()},e)})},I=localStorage.getItem("todo")||[],T=[];try{T=JSON.parse(I)}catch(U){T=[]}function S(e){localStorage.setItem("todo",JSON.stringify(e))}var J={state:T,reducers:{addTodo:function(e,t){var n=Object(x.a)(e).concat([t]);return S(n),n},deleteTodo:function(e,t){var n=t.index;return e.splice(n-1,1),S(Object(x.a)(e)),Object(x.a)(e)},changeIsDone:function(e,t){var n=t.index,a=t.done;return e[n].done=a,S(Object(x.a)(e)),Object(x.a)(e)},checkedAll:function(e,t){var n=t.isCheckedAll;return e.map(function(e){return e.done=n}),S(Object(x.a)(e)),Object(x.a)(e)},clearIsDone:function(e,t){var n=e.filter(function(e){return!e.done});return S(Object(x.a)(n)),Object(x.a)(n)}},effects:function(e){return{addTodoAsync:function(){var t=Object(w.a)(A.a.mark(function t(n,a){return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(1e3);case 2:e.todo.addTodo(n);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}}},K=Object(C.init)({models:a});l.a.render(c.a.createElement(p.a,{store:K},c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.c2ac151a.chunk.js.map