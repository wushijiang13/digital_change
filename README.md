# digital_change.js v1.0.2版本
自己封装的一个数字加载的第三方库 Encapsulated a digitally loaded third-party library

本地引入方式:
```
<script src="./js/digital_change.min.js"></script>
```

食用方法：
```
_wu.seconds_Loading_Thousand_Points(numberDom: array,allNumValues: array,totalSeconds: number,seconds: number);
```
|  参数        | 类型    | 默认值 |  描述 |
|  ----        | ----   | --- | --- |
| numberDom    | array  | 无 | 传入一个dom的数组|
| allNumValues | array  | 无 | 传入一个dom对应的数据数组|
| totalSeconds | number | 1000 | (可选)动画总时长 只接受毫秒单位 |
| seconds      | number | 30 | (可选)数字总变化次数 |

```
_wu.seconds_loading(umberDom: array,allNumValues: array,totalSeconds: number,seconds: number)
```
参数说明和上面一样，唯一不同的是此函数不会自动添加千分符