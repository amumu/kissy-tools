/*
 Combined modules by KISSY Module Compiler : 

 dom
 uibase/position
 switch
 page/run
*/

KISSY.add("dom", function() {
});

KISSY.add("uibase/position", function() {
});

KISSY.add("switch", function() {
}, {requires:["dom", "uibase/position"]});

KISSY.add("page/run", function() {
}, {requires:["switch"]});


