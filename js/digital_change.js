(function () {
    const discretion=10;//裁值
    var allSecondValues=[];//所有不同数字每次需要加载的值
    var digu=function(){
    };

    digu.prototype={
        version:'1.0.2',
        /**
         * 带千分符的 加载执行的方法
         * @param numberDom 需要展示的dom
         * @param allNumValues  需要获得的数据
         * @param totalSeconds   总加载秒数
         * @param seconds       变化次数
         */
        seconds_Loading_Thousand_Points:function(numberDom,allNumValues,totalSeconds=1000,seconds=30) {// 开始执行变化的函数 sum_number=1000;//多少毫秒加载完 默认一秒钟
            if( numberDom == null ){
                console.error("A mistake was encountered here because no DOM elements or data were passed in -- from digital_change.js");
                return;
            }
            if(allNumValues == null){//判断他没有传入一个数组
                allNumValues=[];
                for (let i = 0; i < numberDom.length; i++) {
                    allNumValues.push(parseInt(numberDom[i].innerText));
                }
            }
            let z=0;
            for (let i = 0; i < allNumValues.length; i++) {//验证数值list
                if(!isNaN(parseInt(allNumValues[i]))){
                    z++;
                }
            }
            if(z==allNumValues.length){
                allSecondValues=initshow(numberDom,allNumValues,totalSeconds,seconds);
                for (let i = 0; i < numberDom.length; i++) {//遍历所有 数据
                    let zhi= 0; //每30毫秒添加的数据默认为0
                    let showsum=setInterval(function () {
                        zhi+=allSecondValues[i];//每30 毫秒递加
                        numberDom[i].innerText=FormatNum(zhi);// dom 上展示的 是每次30毫秒加载的数据
                    },seconds);
                    setTimeout(function () {//到1秒被停止
                        window.clearInterval(showsum);
                        numberDom[i].innerText=FormatNum(allNumValues[i]);// 停止后保存的是最终值
                    },totalSeconds);
                }
            }else{
                console.error("An error occurred because you might not be passing in a number. From digital_change.js");
            }


        },
        /**
         * 加载执行的方法
         * @param numberDom 需要展示的dom
         * @param allNumValues  需要获得的数据
         * @param totalSeconds   总加载秒数
         * @param seconds       变化次数
         */
        seconds_loading:function(numberDom,allNumValues,totalSeconds=1000,seconds=30) {// 开始执行变化的函数 sum_number=1000;//多少毫秒加载完 默认一秒钟
            if( numberDom == null){
                console.error("A mistake was encountered here because no DOM elements or data were passed in -- from digital_change.js");
                return;
            }
            if(allNumValues == null){//判断他没有传入一个数组
                allNumValues=[];
                for (let i = 0; i < numberDom.length; i++) {
                    allNumValues.push(parseInt(numberDom[i].innerText));
                }
            }
            let z=0;
            for (let i = 0; i < numberDom.length; i++) {//判断他传入的不是一个数
                if(!isNaN(parseInt(numberDom[i].innerText))){
                    z++;
                }
            }
            if(z==numberDom.length){
                allSecondValues=initshow(numberDom,allNumValues,totalSeconds,seconds);
                for (let i = 0; i < numberDom.length; i++) {//遍历所有 数据
                    let zhi= 0; //每30毫秒添加的数据默认为0
                    let showsum=setInterval(function () {
                        zhi+=allSecondValues[i];//每30 毫秒递加
                        numberDom[i].innerText=parseInt(zhi)// dom 上展示的 是每次30毫秒加载的数据
                    },seconds);
                    setTimeout(function () {//到1秒被停止
                        window.clearInterval(showsum);
                        numberDom[i].innerText=parseInt(allNumValues[i])// 停止后保存的是最终值
                    },totalSeconds);
                }
            }else{
                console.error("An error occurred because you might not be passing in a number. From digital_change.js");
            }
        },
    }
    digu.prototype.constructor=digu;
    function initshow(numberDom,allNumValues,totalSeconds,seconds) {//初始化 all
        let duration = totalSeconds / 10;//总时长
        let loadSeconds = seconds / 10;//秒数
        for (let i = 0; i < numberDom.length; i++) {//遍历 保存
            allSecondValues.push(allNumValues[i] / duration * loadSeconds);//获取各个30 毫秒该加载的数值
            numberDom[i].innerText = parseInt(allNumValues[i])//刚刚进入的时候格式化数据
        }
        return allSecondValues;
    }
    function FormatNum(str){// 格式化函数
        var str = ''+str;
        var newStr = "";
        var count = 0;

        if(str.indexOf(".")==-1){
            for(var i=str.length-1;i>=0;i--){
                if(count % 3 == 0 && count != 0){
                    newStr = str.charAt(i) + "," + newStr;
                }else{
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            //str = newStr + ".00"; //自动补小数点后两位
            str = newStr;
        }
        else
        {
            for(var i = str.indexOf(".")-1;i>=0;i--){
                if(count % 3 == 0 && count != 0){
                    newStr = str.charAt(i) + "," + newStr;
                }else{
                    newStr = str.charAt(i) + newStr; //逐个字符相接起来
                }
                count++;
            }
            str = newStr + (str + "00").substr((str + "00").indexOf("."),0);
            // str= str+"元";
        }
        return str;
    }
    window._wu=new digu();
})();
