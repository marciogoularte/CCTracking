define(["./bindingHandler","./utils","jquery-ui/progressbar"],function(e,t){var n=function(){e.call(this,"progressbar"),this.events=["change","create","complete"],this.hasRefresh=!0,t.uiVersion.major===1&&t.uiVersion.minor===8?this.options=["disabled","value"]:this.options=["disabled","max","value"]};return n.prototype=t.createObject(e.prototype),n.prototype.constructor=n,t.register(n),n});