(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){e.exports=n(50)},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),s=n.n(c),o=n(18),i=function(e){var t=e.designer;return r.a.createElement("div",{className:"cards_item"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card_content"},r.a.createElement("h1",{className:"card_title"},t.first_name," ",t.last_name),r.a.createElement("h2",{className:"card_subtitle"}," Class of ",t.class_year," "),r.a.createElement("h2",{className:"card_subtitle"},t.email," "),r.a.createElement("p",{className:"card_text"},"Interested in: ",t.design_positions.replace("'","")," , ",t.specialized_positions),r.a.createElement("p",{className:"card_experience"},"Relevant Experience: ",t.relevant_experience))))},l=n(13),m=n(14),u=n(19),d=n(15),p=n(2),f=n(20),E=n(16),h=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).openForm=n.openForm.bind(Object(p.a)(n)),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"openForm",value:function(){this.typeformEmbed.typeform.open()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E.ReactTypeformEmbed,{popup:!0,autoOpen:!1,url:"https://secondstage.typeform.com/to/g9rske",hideHeaders:!0,hideFooter:!0,buttonText:"Go!",style:{top:100},ref:function(t){e.typeformEmbed=t}}),r.a.createElement("button",{className:"btn",onClick:this.openForm,style:{cursor:"pointer"}},"Sign up as a designer!"))}}]),t}(r.a.Component),b=n(17),v=n.n(b),g=function(){return v.a.get("/api/designers").then(function(e){return e.data})},_=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)(function(){g().then(function(e){return c(e)})},[]);return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Wes Student Theater DesignerBase"),r.a.createElement("div",null,r.a.createElement(h,null)),r.a.createElement("p",null,"Looking for designers, choreographers, or coordinators for your shows? Look no further."),r.a.createElement("div",{className:"cards"},n.map(function(e){return r.a.createElement(i,{designer:e})})))};n(48),n(49);s.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.6207c447.chunk.js.map