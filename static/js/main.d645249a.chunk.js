(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),s=(n(16),n(9)),u=n(8),l=n(1),i=n(2),m=n(4),d=n(3),p=n(5),b=function(e){var t=e.totalCounters;return console.log("Navbar - Rendered"),o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand font-weight-bold",href:"/"},"Items"," ",o.a.createElement("span",{className:"badge badge-success"},t)))},h=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){console.log("Counter - Updated")}},{key:"componentWillUnmount",value:function(){console.log("Counter - Unmount")}},{key:"render",value:function(){var e=this;return console.log("Counter - Rendered"),o.a.createElement("div",null,o.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),o.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Increment"),o.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(a.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("Counters - Rendered");var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,r=e.onIncrement;return o.a.createElement("div",null,o.a.createElement("button",{onClick:t,className:"btn btn-primary btn-sm m-2"},"Reset"),n.map(function(e){return o.a.createElement(h,{key:e.id,onIncrement:r,onDelete:a,counter:e})}))}}]),t}(a.Component),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var n=Object(u.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},t),n[a].value++,e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map(function(e){return e.value=0,e});e.setState({counters:t})},e.handleDelete=function(t){var n=e.state.counters.filter(function(e){return e.id!==t});e.setState({counters:n})},console.log("App - Constructor"),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("App - Mounted")}},{key:"render",value:function(){return console.log("App - Rendered"),o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),o.a.createElement("main",{className:"container-fluid"},o.a.createElement(v,{counters:this.state.counters,onReset:this.handleReset,onDelete:this.handleDelete,onIncrement:this.handleIncrement})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d645249a.chunk.js.map