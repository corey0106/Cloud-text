(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[132],{484:function(e,n){e.exports=function(e){var n="[ \\t\\f]*",t="("+n+"[:=]"+n+"|[ \\t\\f]+)",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",s={end:t,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\n"}]}};return{case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+"+t,returnBegin:!0,contains:[{className:"attr",begin:"([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",endsParent:!0,relevance:0}],starts:s},{begin:a+t,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:a,endsParent:!0,relevance:0}],starts:s},{className:"attr",relevance:0,begin:a+n+"$"}]}}}}]);
//# sourceMappingURL=properties.js.map?v=b5bb8d3809c5aa395e16