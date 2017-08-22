//定义key值
export const  KEY = "dataId";

//定义储存格式
export var valueObj = {goodsid:0,num:0};


//存储到本地成local

//储存
export  function setitem(value) {
    var jsondata = localStorage.getItem(KEY);
    jsondata = jsondata || "[]";

    //获取到值，转化格式后储存
    var arr = JSON.parse(jsondata);
    arr.push(value)
    localStorage.setItem(KEY,JSON.stringify(arr))
};


export function getitem() {
    var jsondata = localStorage.getItem(KEY);
    jsondata = jsondata || "[]";
    return JSON.parse(jsondata)
}

//移除
export function remoteItem(goodsid){
    var arr = getitem();
//    查找arr中的goodsid和传入的参数goodsid一致的数据全部移除
    for(var i= arr.length -1;i>=0 ; i--){
        if(arr[i].goodsid == goodsid){
            arr.splice(i,1);
        }
    }

//    将最新的arr保存回localStorage中
    localStorage.setItem(KEY,JSON.stringify(arr));

}



export function getgoodsObject(){
//
    var arr  = getitem();
// 将arr数组中的goodid相同的多个对象合并成同一个对象
    var resObj ={};
    for(var i = 0 ; i<arr.length; i++){
        var item = arr[i];
        if(!resObj[item.goodsid]){
            //    如果没有当前商品的数据，则添加一个数据
            resObj[item.goodsid] = item.num;
        }else{
            //    已经有当前商品的数据了，则将cont追加
            var num = resObj[item.goodsid];
            resObj[item.goodsid] = num + item.num;
        }
    }

    return resObj;
}

//obj的格式：{goodsid:87,type:'add'}
export function updateData(obj){
    var arr  = getitem();

    var num = 1;
    if(obj.type =='jia'){
        //加
        arr.push({goodsid:obj.goodsid,num:num});
    }else{
        //减
        for(var i =0 ;i < arr.length ; i++){
            if(arr[i].goodsid == obj.goodsid){
                if(arr[i].num > 1){
                    arr[i].num = arr[i].num -1;
                    break;
                }else{
                    //删除此对象
                    arr.splice(i,1);
                    break;
                }
            }
        }
    }

//    将最新的arr保存回localStorage中
    localStorage.setItem(KEY,JSON.stringify(arr));

}
