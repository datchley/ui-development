!function(){var a=Handlebars.template,n={};n["member-list"]=a({1:function(a,n,l,e){var s,t=n.helperMissing,r="function",m=this.escapeExpression;return'    <a href="'+m((s=null!=(s=n.link||(null!=a?a.link:a))?s:t,typeof s===r?s.call(a,{name:"link",hash:{},data:e}):s))+'" class="member">\n        <img src="'+m((s=null!=(s=n.avatar||(null!=a?a.avatar:a))?s:t,typeof s===r?s.call(a,{name:"avatar",hash:{},data:e}):s))+'">\n        <h3 class="name">\n            <span class="first">'+m((s=null!=(s=n.firstname||(null!=a?a.firstname:a))?s:t,typeof s===r?s.call(a,{name:"firstname",hash:{},data:e}):s))+'</span>\n            <span class="last">'+m((s=null!=(s=n.lastname||(null!=a?a.lastname:a))?s:t,typeof s===r?s.call(a,{name:"lastname",hash:{},data:e}):s))+'</span>\n        </h3>\n        <span class="role">'+m((s=null!=(s=n.role||(null!=a?a.role:a))?s:t,typeof s===r?s.call(a,{name:"role",hash:{},data:e}):s))+"</span>\n    </a>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,l,e){var s;return"\n"+(null!=(s=n.each.call(a,null!=a?a.members:a,{name:"each",hash:{},fn:this.program(1,e,0),inverse:this.noop,data:e}))?s:"")},useData:!0})}();