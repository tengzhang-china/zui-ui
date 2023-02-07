const vueObj = null;
// 删除数组指定的某个元素
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
Array.prototype.removeByValue = function(attr, value) {
  var index=0;
  for(var i in this){
    if(this[i][attr]==value){
      index=i;
      break;
    }
  }
  this.splice(index,1);
};

// 字符串原型方法
String.prototype.getByteLength = function() {  //获取字符串的字节数，扩展string类型方法
  var b = 0; 
  var l = this.length;
  if(l) { 
      for(var i = 0; i < l; i ++) {
          if(this.charCodeAt(i) > 255) {
              b += 2;
          }else {
              b ++;
          }
      }
      return b;
  } else {
      return 0;
  }
}


// 截取字符串
var substringLength=function(str, length) {
  return str.length <= length ? str : str.substring(0, length - 1) + "..."
}
// 制定延迟策略
var clickTimeout = {
  _timeout: null,
  set: function (fn) {
    var that = this
    that.clear()
    that._timeout = setTimeout(fn, 300)
  },
  clear: function () {
    var that = this
    if (that._timeout) {
      clearTimeout(that._timeout)
    }
  }
}
// list数据 转 树状 层级 JSON
var getJsonTree=function(data,pdomainId,idName,pidName){
  var itemArr=[];
  for(var i=0;i<data.length;i++){
    var node=data[i];
    if(node[pidName]==pdomainId ){
      var newNode={id:node[idName],label:node.name,children:getJsonTree(data,node[idName],idName,pidName)};
      itemArr.push(newNode);
    }
  }
  return itemArr;
}
// 数组中某些属性的值 int=》string
var ArrayToStringByAttr=function(arr,id,pId){
  for(var i=0;i<arr.length;i++){
    arr[i][id]="" + arr[i][id];
    var List=function (list){
      if(list.children.length>0){
        for(var j=0;j<list.children.length;j++){
          list.children[j][id]="" + list.children[j][id];
          if(pId){
            list.children[j][pId]="" + list.children[j][pId];
          }
          if(list.children[j].children){
            List(list.children[j])
          }
        }
      }
    }
    List(arr[i])
  }
}
function mytooltip() {
  $('span.mytooltip').unbind()
  var x = 10;
  var y = 20;
  var newtitle = '';
  $('span.mytooltip').mouseover(function (e) {
    newtitle = this.title;
    this.title = '';
    $('body').append('<div id="mytitle" >' + newtitle + '</div>');
    $('#mytitle').css({
      'left': (e.pageX + x + 'px'),
      'top': (e.pageY + y  + 'px')
    }).show();
  }).mouseout(function () {
    this.title = newtitle;
    $('#mytitle').remove();
  }).mousemove(function (e) {
    $('#mytitle').css({
      'left': (e.pageX + x  + 'px'),
      'top': (e.pageY + y  + 'px')
    }).show();
  })
}
function hasCode(code){
  var codes=sessionStorage.getItem("btnCode").split(",");
  if(codes.indexOf(code)==-1){
    return false;
  }else{
    return true;
  }
}
export default {
  initContext (vue) {
    vueObj = vue
  },
  clickTimeout,
  substringLength,
  getJsonTree,
  ArrayToStringByAttr,
  mytooltip,
  hasCode,
}
