const utils = {
    treeFontColor : "#5d5d5d",
    treeFontClickColor : "rgb(93, 93, 93)",


    // 设置日期的picker-options
    /*
        参数：
            str:（+/-，30）向前限制30天或向后限制30天 ,没有限制就为空
            now:（true/false）是否显示今天
            startTime/endTime: new Date("2019-01-01")
                如果startTime或endTime是new Date()，但是不包括今天，使用new Date()- 8.64e7
                如果没有endTime，最后一个参数就不传
                如果没有startTime，startTime传空
    */
    pickerOptions(str, now, startTime, endTime) {
        var obj = {
            disabledDate(time) {
                if( str ) {
                    var arr = str.split(",");
                    var days = eval(new Date().getDate()+arr[0]+arr[1]);
                    return arr[0] == "+" ? time.getTime() > new Date().setDate(days) : time.getTime() < new Date().setDate(days);
                }else if( startTime ) {
                    return time.getTime() < startTime || time.getTime() > endTime;
                }else {
                    return time.getTime() > endTime;
                }
            },
        }
        if( now ) {
            obj.shortcuts = [{
                text: '今',onClick(picker) { picker.$emit('pick', new Date());}
            }]
        }
        return obj;
    },

    dateFormat(date) {
        date = new Date(date);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
        // var h = ' ' + date.getHours() + ':';
        // var m = date.getMinutes() + ':';
        var h = ' ' + (date.getHours() < 10 ? '0'+(date.getHours()) :  date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) :  date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ?  '0'+(date.getSeconds()) : date.getSeconds();
        return Y+M+D+h+m+s;
    },

    newdateFormat(date,dateType) {
	    date = new Date(date);
	    var Y = date.getFullYear();
	    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
	    var D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
		var newArr = ""
		if (dateType == '2') {
			newArr = Y+ '-' +M + '-' +D
		} else if (dateType == '4'){
			newArr = Y+ '-'+M
		}else if (dateType == '6'){
			newArr = Y
		}else if (dateType == '7'){
			newArr = Y+ '-' +M + '-' +D
		}
	    return newArr;
    },

    formatDate(oDate, sFormation) {
        // formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期 w')
        var obj = {
          yyyy: oDate.getFullYear(),
          yy: ("" + oDate.getFullYear()).slice(-2),
          MM: ("0" + (oDate.getMonth() + 1)).slice(-2),
          M: oDate.getMonth() + 1,
          dd: ("0" + oDate.getDate()).slice(-2),
          d: oDate.getDate(),
          HH: ("0" + oDate.getHours()).slice(-2),
          H: oDate.getHours(),
          hh: ("0" + (oDate.getHours() % 12)).slice(-2),
          h: oDate.getHours() % 12,
          mm: ("0" + oDate.getMinutes()).slice(-2),
          m: oDate.getMinutes(),
          ss: ("0" + oDate.getSeconds()).slice(-2),
          s: oDate.getSeconds(),
          w: ["日", "一", "二", "三", "四", "五", "六"][oDate.getDay()]
        };
        return sFormation.replace(/([a-z]+)/gi, function($1) {
          return obj[$1];
        });
    },

    GetDateStr(AddDayCount) { 
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear(); 
        var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
        var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
        return y+"-"+m+"-"+d; 
    },

    diff(arr1, arr2) {
        var newArr = [];
        for (var j=0;j<arr2.length;j++) {
            if(arr1.indexOf(arr2[j]) === -1)
            newArr.push(arr2[j]);
        }
        return newArr;
    },

    dragBox(div,btn) {
        var oDiv=document.getElementById(div);
        var textDiv = oDiv.getElementsByClassName("el-textarea__inner")[0];
        var oDiv2=document.getElementById(btn);
        oDiv2.onmousedown=function (ev){
            ev=ev||event;
            var disX=ev.clientX-oDiv2.offsetLeft;
            var disY=ev.clientY-oDiv2.offsetTop;
            document.onmousemove=function (ev){
                ev=ev||event;
                oDiv.style.width=ev.clientX-disX+oDiv2.offsetWidth+'px';
                oDiv.style.height=ev.clientY-disY+oDiv2.offsetHeight+'px';
                textDiv.style.height=ev.clientY-disY+oDiv2.offsetHeight+'px';
            }
            document.onmouseup=function (){
                document.onmousemove = document.onmouseup = null;
            }
        }
    },

    getNodes(nodes) {
        for( var i=0; i<nodes.length; i++ ) {
            this.resetNodes(nodes[i]);
        }
    },

    resetNodes(nodes) {
        this.del(nodes);
        var childs = nodes.children;
        if( childs ) {
            return this.getNodes(childs);
        }else {
            return nodes;
        }
    },

    del(node) {
        delete node.check_Child_State;
        delete node.check_Focus;
        delete node.checked;
        delete node.checkedOld;
        delete node.chkDisabled;
        delete node.editNameFlag;
        delete node.getCheckStatus;
        delete node.getIndex;
        delete node.getNextNode;
        delete node.getParentNode;
        delete node.getPath;
        delete node.getPreNode;
        delete node.halfCheck;
        delete node.isAjaxing;
        delete node.isFirstNode;
        delete node.isHover;
        delete node.isLastNode;
        delete node.isParent;
        delete node.level;
        delete node.nocheck;
        delete node.open;
        delete node.parentTId;
        delete node.tId;
        delete node.zAsync;
    },
    checkPhone(rule, value, callback){
        let val = value.replace(/\s*/g,'');
        if (!val) {
            return callback(new Error('手机号不能为空'));
        } else {
            const reg = /^1[3|4|5|6|7|8|9]\d{9}$/;
            if (reg.test(val)) {
                callback();
            } else {
                return callback(new Error('请输入正确的手机号'));
            }
        }
    },

    formatTelephone(val) {
        return val.slice( 0,3) + " " + val.slice( 3,7 ) + " " + val.slice(7);
    },

    enterTelephone(val) {
        var value = val;
        value = value.replace(/\s/g,"");
        var valLength = value.length;
        if ( valLength === 3 || valLength === 7 ) {
            val += " ";
        }
        return val;
    },

    delTelephone(val) {
        var valLength = val.length;
        if ( valLength === 3 || valLength === 4 || valLength === 8 || valLength === 9 ) {
            val = val.slice(0,val.length-1);
        }
        return val;
    },

    createFilter(queryString) {
        return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    },

    formatETLdatas(form,lenArr,...tabledatas) {
        var dataArr = [];
        if( lenArr.length != 0 ) {
            var len = lenArr.sort()[lenArr.length-1];
            var arr0 = JSON.parse(JSON.stringify(form));
            dataArr[0] = arr0;
            for( var i=0; i<len; i++ ) {
                let dataObj = {};
                for( var j=0; j<tabledatas.length; j++ ) {
                    let table = {};
                    if( tabledatas[j][i] ) table = JSON.parse(JSON.stringify(tabledatas[j][i]));
                    let obj = {};
                    // let val0 = "";
                    // if( table ) val0 = Object.values(table)[0];
                    // if( val0 != "" ) {
                        for( var l in table ) {
                            if( table[l] != "" ) obj[l] = table[l];
                        }
                    // }
                    if( Object.keys(obj).length != 0 ) {
                        if( i == 0 ) {
                            arr0 = Object.assign({},arr0,obj);
                        }else {
                            dataObj = Object.assign({},dataObj,obj);
                        }
                    }
                }
                if( Object.keys(dataObj).length != 0 ) dataArr.push(dataObj);
            }
            dataArr[0] = arr0;
        }else {
            dataArr[0] = form;
        }
        delete dataArr[0].stepname;
        return dataArr;
    },

    showETLdatas(detailDatas,...tableArr) {
        var detail = JSON.parse(JSON.stringify(detailDatas));
        if( tableArr.length != 0 ) {
            for( var i=0; i<tableArr.length; i++ ) {
                for( var j=0; j<detail.length; j++ ) {
                    for( var l in tableArr[i][0] ) {
                        if( detail[j][l] != undefined ) {
                            if( j != 0 && tableArr[i][j] == undefined ) tableArr[i][j]={}
                            tableArr[i][j][l] = detail[j][l];
                        }
                        if( j == 0 ) delete detail[j][l]
                    }
                }
            }
        }
        return detail[0];
    },

    compareArrs(datasArr,newDatasArr) {
        if( datasArr.length == 0 ) {
            return false;
        }else if( newDatasArr.length != datasArr.length ) {
            return false;
        }else {
            for( var i=0; i<newDatasArr.length; i++ ) {
                let arrObj = newDatasArr[i];
                for( var j in arrObj ) {
                    if( datasArr[i][j] == undefined ) {
                        return false;
                    }else if( newDatasArr[i][j] != datasArr[i][j] ) {
                        return false;
                    }
                }
            }
        }
        return true;
    },

    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    }

}

export default utils;