# qrcode 二维码组件
----

### 基础用法
`text` 内容为二维码具体数据
<ml-qrcode text='https://github.com/SantiagoFan/dock-plus'></ml-qrcode>



```html
 <ml-qrcode text='https://github.com/SantiagoFan/dock-plus'></m--qrcode>
```

### 拓展用法
通过控制 `colorDark` 修改二维码前景颜色 `width` `height` 修改二维码显示大小


<ml-qrcode text='https://github.com/SantiagoFan/dock-plus' colorDark="#003c81" :width="200"  :height="200">
 </ml-qrcode>


```html
<ml-qrcode text='https://github.com/SantiagoFan/dock-plus' colorDark="#003c81" :width="200"  :height="200">
 </ml-qrcode>
```


## API

|     参数     |     说明     |     类型     |     默认值     |
|-------------|------------- |------------ |-------------- |
|   text    | 二维码转码内容  |    String    | - |  
|width      |     宽度      |    Number       |
|height     |     高度      |    Number       | 
|colorDark  |     前景颜色      |    String       |  #000
|colorLight |     背景颜色      |    String       |  #fff