(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),i=n.n(s),r=n(2),a=n(5),o=n.n(a),j=n(0),b=function(e){var t=e.good,n=e.neutral,c=e.bad;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",onClick:t,children:"Good"}),Object(j.jsx)("button",{type:"button",onClick:n,children:"Neutral"}),Object(j.jsx)("button",{type:"button",onClick:c,children:"Bad"})]})},d=function(e){var t=e.massage,n=e.title;return Object(j.jsxs)("p",{children:[t,n]})},l=function(e){var t=e.title;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{children:t})})},u=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,i=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{children:["Total: ",s]}),Object(j.jsxs)("p",{children:["Positive feedback:",i,"%"]})]})};function O(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(0),a=Object(r.a)(i,2),O=a[0],x=a[1],h=Object(c.useState)(0),g=Object(r.a)(h,2),f=g[0],p=g[1],v=function(e,t,n){return e+t+n}(n,O,f),k=function(e,t){return e/t*100}(n,v);return Object(j.jsx)("section",{className:o.a.section,children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{title:"Please leave feedback"}),Object(j.jsx)(b,{good:function(){s(n+1)},neutral:function(){x(O+1)},bad:function(){p(f+1)}}),v?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{message:"No feedback given"}),Object(j.jsx)(l,{title:"Statistics"}),Object(j.jsx)(u,{good:n,neutral:O,bad:f,total:v,positivePercentage:k.toFixed(1)})]}):Object(j.jsx)(d,{title:"No feedback given",message:"No feedback given"})]})})}n(11);i.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={section:"s_section__2GKBS"}}},[[12,1,2]]]);
//# sourceMappingURL=main.d4a8da4e.chunk.js.map