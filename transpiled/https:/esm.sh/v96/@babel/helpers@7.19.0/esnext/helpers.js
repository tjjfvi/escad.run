/* esm.sh - esbuild bundle(@babel/helpers@7.19.0) esnext production */
import * as ___babel_template$ from "/transpiled/https://esm.sh/v96/@babel/template@7.18.10/esnext/template.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import * as ___babel_traverse$ from "/transpiled/https://esm.sh/v96/@babel/traverse@7.19.3/esnext/traverse.js";
var Y = Object.create;
var A = Object.defineProperty;
var q = Object.getOwnPropertyDescriptor;
var $ = Object.getOwnPropertyNames;
var U = Object.getPrototypeOf,
    Z = Object.prototype.hasOwnProperty;

var w = (r => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
  get: (n, o) => (typeof require < "u" ? require : n)[o]
}) : r)(function (r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + r + '" is not supported');
});

var S = (r, n) => () => (n || r((n = {
  exports: {}
}).exports, n), n.exports);

var J = (r, n, o, s) => {
  if (n && typeof n == "object" || typeof n == "function") for (let l of $(n)) !Z.call(r, l) && l !== o && A(r, l, {
    get: () => n[l],
    enumerable: !(s = q(n, l)) || s.enumerable
  });
  return r;
};

var Q = (r, n, o) => (o = r != null ? Y(U(r)) : {}, J(n || !r || !r.__esModule ? A(o, "default", {
  value: r,
  enumerable: !0
}) : o, r));

var T = S(k => {
  "use strict";

  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.default = void 0;
  var X = ___babel_template$;

  function d(r, n) {
    return Object.freeze({
      minVersion: r,
      ast: () => X.default.program.ast(n, {
        preserveComments: !0
      })
    });
  }

  var ee = Object.freeze({
    AsyncGenerator: d("7.0.0-beta.0", 'import OverloadYield from"OverloadYield";export default function AsyncGenerator(gen){var front,back;function resume(key,arg){try{var result=gen[key](arg),value=result.value,overloaded=value instanceof OverloadYield;Promise.resolve(overloaded?value.v:value).then((function(arg){if(overloaded){var nextKey="return"===key?"return":"next";if(!value.k||arg.done)return resume(nextKey,arg);arg=gen[nextKey](arg).value}settle(result.done?"return":"normal",arg)}),(function(err){resume("throw",err)}))}catch(err){settle("throw",err)}}function settle(type,value){switch(type){case"return":front.resolve({value:value,done:!0});break;case"throw":front.reject(value);break;default:front.resolve({value:value,done:!1})}(front=front.next)?resume(front.key,front.arg):back=null}this._invoke=function(key,arg){return new Promise((function(resolve,reject){var request={key:key,arg:arg,resolve:resolve,reject:reject,next:null};back?back=back.next=request:(front=back=request,resume(key,arg))}))},"function"!=typeof gen.return&&(this.return=void 0)}AsyncGenerator.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},AsyncGenerator.prototype.next=function(arg){return this._invoke("next",arg)},AsyncGenerator.prototype.throw=function(arg){return this._invoke("throw",arg)},AsyncGenerator.prototype.return=function(arg){return this._invoke("return",arg)};'),
    OverloadYield: d("7.18.14", "export default function _OverloadYield(value,kind){this.v=value,this.k=kind}"),
    applyDecs: d("7.17.8", 'function old_createMetadataMethodsForProperty(metadataMap,kind,property,decoratorFinishedRef){return{getMetadata:function(key){old_assertNotFinished(decoratorFinishedRef,"getMetadata"),old_assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0!==metadataForKey)if(1===kind){var pub=metadataForKey.public;if(void 0!==pub)return pub[property]}else if(2===kind){var priv=metadataForKey.private;if(void 0!==priv)return priv.get(property)}else if(Object.hasOwnProperty.call(metadataForKey,"constructor"))return metadataForKey.constructor},setMetadata:function(key,value){old_assertNotFinished(decoratorFinishedRef,"setMetadata"),old_assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0===metadataForKey&&(metadataForKey=metadataMap[key]={}),1===kind){var pub=metadataForKey.public;void 0===pub&&(pub=metadataForKey.public={}),pub[property]=value}else if(2===kind){var priv=metadataForKey.priv;void 0===priv&&(priv=metadataForKey.private=new Map),priv.set(property,value)}else metadataForKey.constructor=value}}}function old_convertMetadataMapToFinal(obj,metadataMap){var parentMetadataMap=obj[Symbol.metadata||Symbol.for("Symbol.metadata")],metadataKeys=Object.getOwnPropertySymbols(metadataMap);if(0!==metadataKeys.length){for(var i=0;i<metadataKeys.length;i++){var key=metadataKeys[i],metaForKey=metadataMap[key],parentMetaForKey=parentMetadataMap?parentMetadataMap[key]:null,pub=metaForKey.public,parentPub=parentMetaForKey?parentMetaForKey.public:null;pub&&parentPub&&Object.setPrototypeOf(pub,parentPub);var priv=metaForKey.private;if(priv){var privArr=Array.from(priv.values()),parentPriv=parentMetaForKey?parentMetaForKey.private:null;parentPriv&&(privArr=privArr.concat(parentPriv)),metaForKey.private=privArr}parentMetaForKey&&Object.setPrototypeOf(metaForKey,parentMetaForKey)}parentMetadataMap&&Object.setPrototypeOf(metadataMap,parentMetadataMap),obj[Symbol.metadata||Symbol.for("Symbol.metadata")]=metadataMap}}function old_createAddInitializerMethod(initializers,decoratorFinishedRef){return function(initializer){old_assertNotFinished(decoratorFinishedRef,"addInitializer"),old_assertCallable(initializer,"An initializer"),initializers.push(initializer)}}function old_memberDec(dec,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value){var kindStr;switch(kind){case 1:kindStr="accessor";break;case 2:kindStr="method";break;case 3:kindStr="getter";break;case 4:kindStr="setter";break;default:kindStr="field"}var metadataKind,metadataName,ctx={kind:kindStr,name:isPrivate?"#"+name:name,isStatic:isStatic,isPrivate:isPrivate},decoratorFinishedRef={v:!1};if(0!==kind&&(ctx.addInitializer=old_createAddInitializerMethod(initializers,decoratorFinishedRef)),isPrivate){metadataKind=2,metadataName=Symbol(name);var access={};0===kind?(access.get=desc.get,access.set=desc.set):2===kind?access.get=function(){return desc.value}:(1!==kind&&3!==kind||(access.get=function(){return desc.get.call(this)}),1!==kind&&4!==kind||(access.set=function(v){desc.set.call(this,v)})),ctx.access=access}else metadataKind=1,metadataName=name;try{return dec(value,Object.assign(ctx,old_createMetadataMethodsForProperty(metadataMap,metadataKind,metadataName,decoratorFinishedRef)))}finally{decoratorFinishedRef.v=!0}}function old_assertNotFinished(decoratorFinishedRef,fnName){if(decoratorFinishedRef.v)throw new Error("attempted to call "+fnName+" after decoration was finished")}function old_assertMetadataKey(key){if("symbol"!=typeof key)throw new TypeError("Metadata keys must be symbols, received: "+key)}function old_assertCallable(fn,hint){if("function"!=typeof fn)throw new TypeError(hint+" must be a function")}function old_assertValidReturnValue(kind,value){var type=typeof value;if(1===kind){if("object"!==type||null===value)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==value.get&&old_assertCallable(value.get,"accessor.get"),void 0!==value.set&&old_assertCallable(value.set,"accessor.set"),void 0!==value.init&&old_assertCallable(value.init,"accessor.init"),void 0!==value.initializer&&old_assertCallable(value.initializer,"accessor.initializer")}else if("function"!==type){var hint;throw hint=0===kind?"field":10===kind?"class":"method",new TypeError(hint+" decorators must return a function or void 0")}}function old_getInit(desc){var initializer;return null==(initializer=desc.init)&&(initializer=desc.initializer)&&"undefined"!=typeof console&&console.warn(".initializer has been renamed to .init as of March 2022"),initializer}function old_applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers){var desc,initializer,value,newValue,get,set,decs=decInfo[0];if(isPrivate?desc=0===kind||1===kind?{get:decInfo[3],set:decInfo[4]}:3===kind?{get:decInfo[3]}:4===kind?{set:decInfo[3]}:{value:decInfo[3]}:0!==kind&&(desc=Object.getOwnPropertyDescriptor(base,name)),1===kind?value={get:desc.get,set:desc.set}:2===kind?value=desc.value:3===kind?value=desc.get:4===kind&&(value=desc.set),"function"==typeof decs)void 0!==(newValue=old_memberDec(decs,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value))&&(old_assertValidReturnValue(kind,newValue),0===kind?initializer=newValue:1===kind?(initializer=old_getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue);else for(var i=decs.length-1;i>=0;i--){var newInit;if(void 0!==(newValue=old_memberDec(decs[i],name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value)))old_assertValidReturnValue(kind,newValue),0===kind?newInit=newValue:1===kind?(newInit=old_getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue,void 0!==newInit&&(void 0===initializer?initializer=newInit:"function"==typeof initializer?initializer=[initializer,newInit]:initializer.push(newInit))}if(0===kind||1===kind){if(void 0===initializer)initializer=function(instance,init){return init};else if("function"!=typeof initializer){var ownInitializers=initializer;initializer=function(instance,init){for(var value=init,i=0;i<ownInitializers.length;i++)value=ownInitializers[i].call(instance,value);return value}}else{var originalInitializer=initializer;initializer=function(instance,init){return originalInitializer.call(instance,init)}}ret.push(initializer)}0!==kind&&(1===kind?(desc.get=value.get,desc.set=value.set):2===kind?desc.value=value:3===kind?desc.get=value:4===kind&&(desc.set=value),isPrivate?1===kind?(ret.push((function(instance,args){return value.get.call(instance,args)})),ret.push((function(instance,args){return value.set.call(instance,args)}))):2===kind?ret.push(value):ret.push((function(instance,args){return value.call(instance,args)})):Object.defineProperty(base,name,desc))}function old_applyMemberDecs(ret,Class,protoMetadataMap,staticMetadataMap,decInfos){for(var protoInitializers,staticInitializers,existingProtoNonFields=new Map,existingStaticNonFields=new Map,i=0;i<decInfos.length;i++){var decInfo=decInfos[i];if(Array.isArray(decInfo)){var base,metadataMap,initializers,kind=decInfo[1],name=decInfo[2],isPrivate=decInfo.length>3,isStatic=kind>=5;if(isStatic?(base=Class,metadataMap=staticMetadataMap,0!==(kind-=5)&&(initializers=staticInitializers=staticInitializers||[])):(base=Class.prototype,metadataMap=protoMetadataMap,0!==kind&&(initializers=protoInitializers=protoInitializers||[])),0!==kind&&!isPrivate){var existingNonFields=isStatic?existingStaticNonFields:existingProtoNonFields,existingKind=existingNonFields.get(name)||0;if(!0===existingKind||3===existingKind&&4!==kind||4===existingKind&&3!==kind)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+name);!existingKind&&kind>2?existingNonFields.set(name,kind):existingNonFields.set(name,!0)}old_applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers)}}old_pushInitializers(ret,protoInitializers),old_pushInitializers(ret,staticInitializers)}function old_pushInitializers(ret,initializers){initializers&&ret.push((function(instance){for(var i=0;i<initializers.length;i++)initializers[i].call(instance);return instance}))}function old_applyClassDecs(ret,targetClass,metadataMap,classDecs){if(classDecs.length>0){for(var initializers=[],newClass=targetClass,name=targetClass.name,i=classDecs.length-1;i>=0;i--){var decoratorFinishedRef={v:!1};try{var ctx=Object.assign({kind:"class",name:name,addInitializer:old_createAddInitializerMethod(initializers,decoratorFinishedRef)},old_createMetadataMethodsForProperty(metadataMap,0,name,decoratorFinishedRef)),nextNewClass=classDecs[i](newClass,ctx)}finally{decoratorFinishedRef.v=!0}void 0!==nextNewClass&&(old_assertValidReturnValue(10,nextNewClass),newClass=nextNewClass)}ret.push(newClass,(function(){for(var i=0;i<initializers.length;i++)initializers[i].call(newClass)}))}}export default function applyDecs(targetClass,memberDecs,classDecs){var ret=[],staticMetadataMap={},protoMetadataMap={};return old_applyMemberDecs(ret,targetClass,protoMetadataMap,staticMetadataMap,memberDecs),old_convertMetadataMapToFinal(targetClass.prototype,protoMetadataMap),old_applyClassDecs(ret,targetClass,staticMetadataMap,classDecs),old_convertMetadataMapToFinal(targetClass,staticMetadataMap),ret}'),
    applyDecs2203: d("7.19.0", 'function createAddInitializerMethod(initializers,decoratorFinishedRef){return function(initializer){assertNotFinished(decoratorFinishedRef,"addInitializer"),assertCallable(initializer,"An initializer"),initializers.push(initializer)}}function memberDec(dec,name,desc,initializers,kind,isStatic,isPrivate,value){var kindStr;switch(kind){case 1:kindStr="accessor";break;case 2:kindStr="method";break;case 3:kindStr="getter";break;case 4:kindStr="setter";break;default:kindStr="field"}var get,set,ctx={kind:kindStr,name:isPrivate?"#"+name:name,static:isStatic,private:isPrivate},decoratorFinishedRef={v:!1};0!==kind&&(ctx.addInitializer=createAddInitializerMethod(initializers,decoratorFinishedRef)),0===kind?isPrivate?(get=desc.get,set=desc.set):(get=function(){return this[name]},set=function(v){this[name]=v}):2===kind?get=function(){return desc.value}:(1!==kind&&3!==kind||(get=function(){return desc.get.call(this)}),1!==kind&&4!==kind||(set=function(v){desc.set.call(this,v)})),ctx.access=get&&set?{get:get,set:set}:get?{get:get}:{set:set};try{return dec(value,ctx)}finally{decoratorFinishedRef.v=!0}}function assertNotFinished(decoratorFinishedRef,fnName){if(decoratorFinishedRef.v)throw new Error("attempted to call "+fnName+" after decoration was finished")}function assertCallable(fn,hint){if("function"!=typeof fn)throw new TypeError(hint+" must be a function")}function assertValidReturnValue(kind,value){var type=typeof value;if(1===kind){if("object"!==type||null===value)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==value.get&&assertCallable(value.get,"accessor.get"),void 0!==value.set&&assertCallable(value.set,"accessor.set"),void 0!==value.init&&assertCallable(value.init,"accessor.init")}else if("function"!==type){var hint;throw hint=0===kind?"field":10===kind?"class":"method",new TypeError(hint+" decorators must return a function or void 0")}}function applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,initializers){var desc,init,value,newValue,get,set,decs=decInfo[0];if(isPrivate?desc=0===kind||1===kind?{get:decInfo[3],set:decInfo[4]}:3===kind?{get:decInfo[3]}:4===kind?{set:decInfo[3]}:{value:decInfo[3]}:0!==kind&&(desc=Object.getOwnPropertyDescriptor(base,name)),1===kind?value={get:desc.get,set:desc.set}:2===kind?value=desc.value:3===kind?value=desc.get:4===kind&&(value=desc.set),"function"==typeof decs)void 0!==(newValue=memberDec(decs,name,desc,initializers,kind,isStatic,isPrivate,value))&&(assertValidReturnValue(kind,newValue),0===kind?init=newValue:1===kind?(init=newValue.init,get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue);else for(var i=decs.length-1;i>=0;i--){var newInit;if(void 0!==(newValue=memberDec(decs[i],name,desc,initializers,kind,isStatic,isPrivate,value)))assertValidReturnValue(kind,newValue),0===kind?newInit=newValue:1===kind?(newInit=newValue.init,get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue,void 0!==newInit&&(void 0===init?init=newInit:"function"==typeof init?init=[init,newInit]:init.push(newInit))}if(0===kind||1===kind){if(void 0===init)init=function(instance,init){return init};else if("function"!=typeof init){var ownInitializers=init;init=function(instance,init){for(var value=init,i=0;i<ownInitializers.length;i++)value=ownInitializers[i].call(instance,value);return value}}else{var originalInitializer=init;init=function(instance,init){return originalInitializer.call(instance,init)}}ret.push(init)}0!==kind&&(1===kind?(desc.get=value.get,desc.set=value.set):2===kind?desc.value=value:3===kind?desc.get=value:4===kind&&(desc.set=value),isPrivate?1===kind?(ret.push((function(instance,args){return value.get.call(instance,args)})),ret.push((function(instance,args){return value.set.call(instance,args)}))):2===kind?ret.push(value):ret.push((function(instance,args){return value.call(instance,args)})):Object.defineProperty(base,name,desc))}function applyMemberDecs(ret,Class,decInfos){for(var protoInitializers,staticInitializers,existingProtoNonFields=new Map,existingStaticNonFields=new Map,i=0;i<decInfos.length;i++){var decInfo=decInfos[i];if(Array.isArray(decInfo)){var base,initializers,kind=decInfo[1],name=decInfo[2],isPrivate=decInfo.length>3,isStatic=kind>=5;if(isStatic?(base=Class,0!==(kind-=5)&&(initializers=staticInitializers=staticInitializers||[])):(base=Class.prototype,0!==kind&&(initializers=protoInitializers=protoInitializers||[])),0!==kind&&!isPrivate){var existingNonFields=isStatic?existingStaticNonFields:existingProtoNonFields,existingKind=existingNonFields.get(name)||0;if(!0===existingKind||3===existingKind&&4!==kind||4===existingKind&&3!==kind)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+name);!existingKind&&kind>2?existingNonFields.set(name,kind):existingNonFields.set(name,!0)}applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,initializers)}}pushInitializers(ret,protoInitializers),pushInitializers(ret,staticInitializers)}function pushInitializers(ret,initializers){initializers&&ret.push((function(instance){for(var i=0;i<initializers.length;i++)initializers[i].call(instance);return instance}))}function applyClassDecs(ret,targetClass,classDecs){if(classDecs.length>0){for(var initializers=[],newClass=targetClass,name=targetClass.name,i=classDecs.length-1;i>=0;i--){var decoratorFinishedRef={v:!1};try{var nextNewClass=classDecs[i](newClass,{kind:"class",name:name,addInitializer:createAddInitializerMethod(initializers,decoratorFinishedRef)})}finally{decoratorFinishedRef.v=!0}void 0!==nextNewClass&&(assertValidReturnValue(10,nextNewClass),newClass=nextNewClass)}ret.push(newClass,(function(){for(var i=0;i<initializers.length;i++)initializers[i].call(newClass)}))}}export default function applyDecs2203(targetClass,memberDecs,classDecs){var ret=[];return applyMemberDecs(ret,targetClass,memberDecs),applyClassDecs(ret,targetClass,classDecs),ret}'),
    asyncGeneratorDelegate: d("7.0.0-beta.0", 'import OverloadYield from"OverloadYield";export default function _asyncGeneratorDelegate(inner){var iter={},waiting=!1;function pump(key,value){return waiting=!0,value=new Promise((function(resolve){resolve(inner[key](value))})),{done:!1,value:new OverloadYield(value,1)}}return iter["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},iter.next=function(value){return waiting?(waiting=!1,value):pump("next",value)},"function"==typeof inner.throw&&(iter.throw=function(value){if(waiting)throw waiting=!1,value;return pump("throw",value)}),"function"==typeof inner.return&&(iter.return=function(value){return waiting?(waiting=!1,value):pump("return",value)}),iter}'),
    asyncIterator: d("7.15.9", 'export default function _asyncIterator(iterable){var method,async,sync,retry=2;for("undefined"!=typeof Symbol&&(async=Symbol.asyncIterator,sync=Symbol.iterator);retry--;){if(async&&null!=(method=iterable[async]))return method.call(iterable);if(sync&&null!=(method=iterable[sync]))return new AsyncFromSyncIterator(method.call(iterable));async="@@asyncIterator",sync="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(s){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var done=r.done;return Promise.resolve(r.value).then((function(value){return{value:value,done:done}}))}return AsyncFromSyncIterator=function(s){this.s=s,this.n=s.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function(value){var ret=this.s.return;return void 0===ret?Promise.resolve({value:value,done:!0}):AsyncFromSyncIteratorContinuation(ret.apply(this.s,arguments))},throw:function(value){var thr=this.s.return;return void 0===thr?Promise.reject(value):AsyncFromSyncIteratorContinuation(thr.apply(this.s,arguments))}},new AsyncFromSyncIterator(s)}'),
    awaitAsyncGenerator: d("7.0.0-beta.0", 'import OverloadYield from"OverloadYield";export default function _awaitAsyncGenerator(value){return new OverloadYield(value,0)}'),
    jsx: d("7.0.0-beta.0", 'var REACT_ELEMENT_TYPE;export default function _createRawReactElement(type,props,key,children){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var defaultProps=type&&type.defaultProps,childrenLength=arguments.length-3;if(props||0===childrenLength||(props={children:void 0}),1===childrenLength)props.children=children;else if(childrenLength>1){for(var childArray=new Array(childrenLength),i=0;i<childrenLength;i++)childArray[i]=arguments[i+3];props.children=childArray}if(props&&defaultProps)for(var propName in defaultProps)void 0===props[propName]&&(props[propName]=defaultProps[propName]);else props||(props=defaultProps||{});return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:void 0===key?null:""+key,ref:null,props:props,_owner:null}}'),
    objectSpread2: d("7.5.0", 'import defineProperty from"defineProperty";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}export default function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}'),
    regeneratorRuntime: d("7.18.0", `export default function _regeneratorRuntime(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(undefined===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}},exports}`),
    typeof: d("7.0.0-beta.0", 'export default function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}'),
    wrapRegExp: d("7.19.0", 'import setPrototypeOf from"setPrototypeOf";import inherits from"inherits";export default function _wrapRegExp(){_wrapRegExp=function(re,groups){return new BabelRegExp(re,void 0,groups)};var _super=RegExp.prototype,_groups=new WeakMap;function BabelRegExp(re,flags,groups){var _this=new RegExp(re,flags);return _groups.set(_this,groups||_groups.get(re)),setPrototypeOf(_this,BabelRegExp.prototype)}function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce((function(groups,name){var i=g[name];if("number"==typeof i)groups[name]=result[i];else{for(var k=0;void 0===result[i[k]]&&k+1<i.length;)k++;groups[name]=result[i[k]]}return groups}),Object.create(null))}return inherits(BabelRegExp,RegExp),BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);return result&&(result.groups=buildGroups(result,this)),result},BabelRegExp.prototype[Symbol.replace]=function(str,substitution){if("string"==typeof substitution){var groups=_groups.get(this);return _super[Symbol.replace].call(this,str,substitution.replace(/\\$<([^>]+)>/g,(function(_,name){return"$"+groups[name]})))}if("function"==typeof substitution){var _this=this;return _super[Symbol.replace].call(this,str,(function(){var args=arguments;return"object"!=typeof args[args.length-1]&&(args=[].slice.call(args)).push(buildGroups(args,_this)),substitution.apply(this,args)}))}return _super[Symbol.replace].call(this,str,substitution)},_wrapRegExp.apply(this,arguments)}')
  });
  k.default = ee;
});
var z = S(x => {
  "use strict";

  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  x.default = void 0;
  var te = ___babel_template$,
      re = T(),
      e = Object.assign({
    __proto__: null
  }, re.default),
      ne = e;
  x.default = ne;

  var t = r => n => ({
    minVersion: r,
    ast: () => te.default.program.ast(n)
  });

  e.AwaitValue = t("7.0.0-beta.0")`
    export default function _AwaitValue(value) {
      this.wrapped = value;
    }
  `;
  e.wrapAsyncGenerator = t("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`;
  e.asyncToGenerator = t("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`;
  e.classCallCheck = t("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`;
  e.createClass = t("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
`;
  e.defineEnumerableProperties = t("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`;
  e.defaults = t("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`;
  e.defineProperty = t("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`;
  e.extends = t("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`;
  e.objectSpread = t("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`;
  e.inherits = t("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    // We can't use defineProperty to set the prototype in a single step because it
    // doesn't work in Chrome <= 36. https://github.com/babel/babel/issues/14056
    // V8 bug: https://bugs.chromium.org/p/v8/issues/detail?id=3334
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`;
  e.inheritsLoose = t("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`;
  e.getPrototypeOf = t("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`;
  e.setPrototypeOf = t("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
    return _setPrototypeOf(o, p);
  }
`;
  e.isNativeReflectConstruct = t("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`;
  e.construct = t("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`;
  e.isNativeFunction = t("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`;
  e.wrapNativeSuper = t("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`;
  e.instanceof = t("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`;
  e.interopRequireDefault = t("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`;
  e.interopRequireWildcard = t("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`;
  e.newArrowCheck = t("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`;
  e.objectDestructuringEmpty = t("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`;
  e.objectWithoutPropertiesLoose = t("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`;
  e.objectWithoutProperties = t("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`;
  e.assertThisInitialized = t("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`;
  e.possibleConstructorReturn = t("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`;
  e.createSuper = t("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `;
  e.superPropBase = t("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`;
  e.get = t("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          // STEP 3. If receiver is not present, then set receiver to target.
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
`;
  e.set = t("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`;
  e.taggedTemplateLiteral = t("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`;
  e.taggedTemplateLiteralLoose = t("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`;
  e.readOnlyError = t("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`;
  e.writeOnlyError = t("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`;
  e.classNameTDZError = t("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`;
  e.temporalUndefined = t("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`;
  e.tdz = t("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`;
  e.temporalRef = t("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`;
  e.slicedToArray = t("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;
  e.slicedToArrayLoose = t("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`;
  e.toArray = t("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`;
  e.toConsumableArray = t("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`;
  e.arrayWithoutHoles = t("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`;
  e.arrayWithHoles = t("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`;
  e.maybeArrayLike = t("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`;
  e.iterableToArray = t("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`;
  e.iterableToArrayLimit = t("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`;
  e.iterableToArrayLimitLoose = t("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`;
  e.unsupportedIterableToArray = t("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`;
  e.arrayLikeToArray = t("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`;
  e.nonIterableSpread = t("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;
  e.nonIterableRest = t("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`;
  e.createForOfIteratorHelper = t("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`;
  e.createForOfIteratorHelperLoose = t("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`;
  e.skipFirstGeneratorNext = t("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`;
  e.toPrimitive = t("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`;
  e.toPropertyKey = t("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`;
  e.initializerWarningHelper = t("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`;
  e.initializerDefineProperty = t("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`;
  e.applyDecoratedDescriptor = t("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`;
  e.classPrivateFieldLooseKey = t("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`;
  e.classPrivateFieldLooseBase = t("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`;
  e.classPrivateFieldGet = t("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;
  e.classPrivateFieldSet = t("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;
  e.classPrivateFieldDestructureSet = t("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;
  e.classExtractFieldDescriptor = t("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`;
  e.classStaticPrivateFieldSpecGet = t("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`;
  e.classStaticPrivateFieldSpecSet = t("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`;
  e.classStaticPrivateMethodGet = t("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`;
  e.classStaticPrivateMethodSet = t("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`;
  e.classApplyDescriptorGet = t("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`;
  e.classApplyDescriptorSet = t("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`;
  e.classApplyDescriptorDestructureSet = t("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`;
  e.classStaticPrivateFieldDestructureSet = t("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`;
  e.classCheckPrivateStaticAccess = t("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`;
  e.classCheckPrivateStaticFieldDescriptor = t("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`;
  e.decorate = t("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`;
  e.classPrivateMethodGet = t("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`;
  e.checkPrivateRedeclaration = t("7.14.1")`
  export default function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
`;
  e.classPrivateFieldInitSpec = t("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateFieldInitSpec(obj, privateMap, value) {
    checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
`;
  e.classPrivateMethodInitSpec = t("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateMethodInitSpec(obj, privateSet) {
    checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
`;
  e.classPrivateMethodSet = t("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }
  `;
  e.identity = t("7.17.0")`
  export default function _identity(x) {
    return x;
  }
`;
});
var K = S(f => {
  "use strict";

  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  f.default = void 0;
  f.ensure = pe;
  f.get = N;
  f.getDependencies = ue;
  f.list = void 0;
  f.minVersion = ce;
  var F = ___babel_traverse$,
      ie = ___babel_types$,
      D = z(),
      {
    assignmentExpression: M,
    cloneNode: oe,
    expressionStatement: ae,
    file: R,
    identifier: se
  } = ie;

  function P(r) {
    let n = [];

    for (; r.parentPath; r = r.parentPath) n.push(r.key), r.inList && n.push(r.listKey);

    return n.reverse().join(".");
  }

  var _;

  function L(r) {
    let n = new Set(),
        o = new Set(),
        s = new Map(),
        l,
        y,
        h = [],
        m = [],
        g = [],
        b = {
      ImportDeclaration(i) {
        let a = i.node.source.value;
        if (!D.default[a]) throw i.buildCodeFrameError(`Unknown helper ${a}`);
        if (i.get("specifiers").length !== 1 || !i.get("specifiers.0").isImportDefaultSpecifier()) throw i.buildCodeFrameError("Helpers can only import a default value");
        let u = i.node.specifiers[0].local;
        s.set(u, a), m.push(P(i));
      },

      ExportDefaultDeclaration(i) {
        let a = i.get("declaration");
        if (!a.isFunctionDeclaration() || !a.node.id) throw a.buildCodeFrameError("Helpers can only export named function declarations");
        l = a.node.id.name, y = P(i);
      },

      ExportAllDeclaration(i) {
        throw i.buildCodeFrameError("Helpers can only export default");
      },

      ExportNamedDeclaration(i) {
        throw i.buildCodeFrameError("Helpers can only export default");
      },

      Statement(i) {
        i.isModuleDeclaration() || i.skip();
      }

    },
        j = {
      Program(i) {
        let a = i.scope.getAllBindings();
        Object.keys(a).forEach(u => {
          u !== l && (s.has(a[u].identifier) || o.add(u));
        });
      },

      ReferencedIdentifier(i) {
        let a = i.node.name,
            u = i.scope.getBinding(a);
        u ? s.has(u.identifier) && g.push(P(i)) : n.add(a);
      },

      AssignmentExpression(i) {
        let a = i.get("left");
        if (!(l in a.getBindingIdentifiers())) return;
        if (!a.isIdentifier()) throw a.buildCodeFrameError("Only simple assignments to exports are allowed in helpers");
        let u = i.scope.getBinding(l);
        u != null && u.scope.path.isProgram() && h.push(P(i));
      }

    };
    if ((0, F.default)(r.ast, b, r.scope), (0, F.default)(r.ast, j, r.scope), !y) throw new Error("Helpers must have a default export.");
    return h.reverse(), {
      globals: Array.from(n),
      localBindingNames: Array.from(o),
      dependencies: s,
      exportBindingAssignments: h,
      exportPath: y,
      exportName: l,
      importBindingsReferences: g,
      importPaths: m
    };
  }

  function le(r, n, o, s, l) {
    if (s && !o) throw new Error("Unexpected local bindings for module-based helpers.");
    if (!o) return;
    let {
      localBindingNames: y,
      dependencies: h,
      exportBindingAssignments: m,
      exportPath: g,
      exportName: b,
      importBindingsReferences: j,
      importPaths: i
    } = n,
        a = {};
    h.forEach((c, p) => {
      a[p.name] = typeof l == "function" && l(c) || p;
    });
    let u = {},
        W = new Set(s || []);
    y.forEach(c => {
      let p = c;

      for (; W.has(p);) p = "_" + p;

      p !== c && (u[c] = p);
    }), o.type === "Identifier" && b !== o.name && (u[b] = o.name);
    let {
      path: v
    } = r,
        C = v.get(g),
        B = i.map(c => v.get(c)),
        H = j.map(c => v.get(c)),
        I = C.get("declaration");
    if (o.type === "Identifier") C.replaceWith(I);else if (o.type === "MemberExpression") m.forEach(c => {
      let p = v.get(c);
      p.replaceWith(M("=", o, p.node));
    }), C.replaceWith(I), v.pushContainer("body", ae(M("=", o, se(b))));else throw new Error("Unexpected helper format.");
    Object.keys(u).forEach(c => {
      v.scope.rename(c, u[c]);
    });

    for (let c of B) c.remove();

    for (let c of H) {
      let p = oe(a[c.node.name]);
      c.replaceWith(p);
    }
  }

  var O = Object.create(null);

  function E(r) {
    if (!O[r]) {
      let n = D.default[r];
      if (!n) throw Object.assign(new ReferenceError(`Unknown helper ${r}`), {
        code: "BABEL_HELPER_UNKNOWN",
        helper: r
      });

      let o = () => {
        if (!_) {
          let l = {
            ast: R(n.ast()),
            path: null
          };
          return (0, F.default)(l.ast, {
            Program: y => (l.path = y).stop()
          }), l;
        }

        return new _({
          filename: `babel-helper://${r}`
        }, {
          ast: R(n.ast()),
          code: "[internal Babel helper code]",
          inputMap: null
        });
      },
          s = null;

      O[r] = {
        minVersion: n.minVersion,

        build(l, y, h) {
          let m = o();
          return s || (s = L(m)), le(m, s, y, h, l), {
            nodes: m.ast.program.body,
            globals: s.globals
          };
        },

        getDependencies() {
          return s || (s = L(o())), Array.from(s.dependencies.values());
        }

      };
    }

    return O[r];
  }

  function N(r, n, o, s) {
    return E(r).build(n, o, s);
  }

  function ce(r) {
    return E(r).minVersion;
  }

  function ue(r) {
    return E(r).getDependencies();
  }

  function pe(r, n) {
    _ || (_ = n), E(r);
  }

  var de = Object.keys(D.default).map(r => r.replace(/^_/, ""));
  f.list = de;
  var fe = N;
  f.default = fe;
});
var V = Q(K()),
    ge = !0,
    {
  ensure: we,
  get: ke,
  getDependencies: xe,
  list: Pe,
  minVersion: _e
} = V,
    {
  default: G,
  ...ye
} = V,
    Ee = G !== void 0 ? G : ye;
export { ge as __esModule, Ee as default, we as ensure, ke as get, xe as getDependencies, Pe as list, _e as minVersion };