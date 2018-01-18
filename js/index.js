//全局变量
var A;                  //创建变量A用来装数组
var gs = 0;             //关卡 0代表第一关
var x = 8; y = 7;       //创建人物第一关的初始位置
var bs = 0;             //人物移动的步数
var bx = 0;             //箱子移动的格数
var score = 0;          //分数
var t;                  //时间变量
var name;               //保存名字的变量

//数组  【数字解释：1草坪 2墙 3路 4白花 5黄花 6花盆】 
//gs表示数组 gs表示第几关
var ga = [
    [   //第一关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 6, 3, 6, 4, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 3, 6, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第二关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 6, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 3, 2, 1, 2, 4, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 3, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第三关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 6, 2, 2, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 3, 3, 6, 3, 3, 6, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 4, 4, 2, 3, 6, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 4, 4, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第四关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 6, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 3, 6, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 6, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 4, 5, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第五关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 6, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 3, 2, 3, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 2, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 6, 3, 3, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 4, 3, 3, 3, 6, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第六关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 3, 3, 4, 2, 2, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 3, 2, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 3, 6, 3, 6, 2, 4, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 3, 3, 5, 3, 3, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 4, 2, 6, 3, 6, 3, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 3, 3, 3, 3, 2, 3, 2, 3, 2, 2, 2, 1, 1, 1, 1],
      [1, 1, 2, 3, 2, 2, 2, 4, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1],
      [1, 1, 2, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 2, 1, 1, 1, 1],
      [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第七关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 3, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 6, 3, 6, 3, 6, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 3, 6, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 3, 6, 3, 2, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 4, 4, 4, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第八关   
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 4, 3, 6, 2, 2, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 4, 4, 6, 3, 6, 3, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 4, 4, 3, 6, 3, 6, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第九关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 3, 2, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 3, 3, 6, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 6, 3, 2, 2, 2, 3, 6, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 3, 2, 4, 4, 4, 2, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 2, 2, 3, 2, 4, 4, 4, 2, 3, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 2, 3, 6, 3, 3, 6, 3, 3, 6, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1],
      [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    [   //第十关
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 6, 6, 6, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 3, 6, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 3, 6, 4, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
];

//游戏界面
init = function () {
    A = [];             //先清空原有数组
    extend(A, ga[gs]);  //重新给数组赋值

    document.body.innerHTML = "";   //清除页面内容

    // 外层div
    var warp = document.createElement("div");
    warp.className = "warp warp2";
    warp.id = "warp2";
    warp.style.cssText = "background:url('img/init.png')no-repeat center";
    document.body.appendChild(warp);

    //地图布局
    var map = document.createElement("div");
    map.className = "map";
    map.id = "map";
    warp.appendChild(map);

    //开始游戏
    var startdiv = document.createElement("div");
    startdiv.className = "startdiv wow swing animated";
    startdiv.id = "startdiv";
    startdiv.innerHTML = "START";
    startdiv.onclick = function () {
        map.removeChild(startdiv);      //把开始游戏的弹窗移除掉
        starttime();                    //开始计时
    }
    map.appendChild(startdiv);

    //底下外部div
    var bottom = document.createElement("div");
    bottom.className = "bottom";
    warp.appendChild(bottom);

    //姓名
    var username = document.createElement("div");
    username.className = "username";
    username.id = "username";
    username.innerHTML = name;
    bottom.appendChild(username);

    //成绩
    var score = document.createElement("div");
    score.className = "username score";
    score.id = "score";
    bottom.appendChild(score);

    //关卡
    var level = document.createElement("div");
    level.className = "username level";
    level.id = "level";
    bottom.appendChild(level);

    //箱子移动格数
    var box_num = document.createElement("div");
    box_num.className = "username level box_num";
    box_num.id = "box_num";
    bottom.appendChild(box_num);

    //人物移动格数
    var per_num = document.createElement("div");
    per_num.className = "username level per_num";
    per_num.id = "per_num";
    bottom.appendChild(per_num);

    //暂停按钮
    var again_btn = document.createElement("div");
    again_btn.className = "again_btn";
    again(again_btn);
    bottom.appendChild(again_btn);


    //后退一步
    var backstep = document.createElement("div");
    backstep.className = "backstep";
    backstep.id = "backstep";
    bottom.appendChild(backstep);

    //时间进度条
    var wtime_bar = document.createElement("div");
    wtime_bar.className = "wtime_bar";
    bottom.appendChild(wtime_bar);

    //时间进度条
    var time_bar = document.createElement("div");
    time_bar.className = "time_bar";
    time_bar.style.cssText = "width:100%";
    time_bar.id = "time_bar";
    wtime_bar.appendChild(time_bar);

    //返回菜单
    var retinit = document.createElement("div");
    retinit.className = "retinit";
    retinit.id = "retinit";
    return_init(retinit);
    bottom.appendChild(retinit);

    //铺出数组页面
    var i, j;   //i代表上下 j代表左右
    for (i = 0; i < 14; i++) {
        for (j = 0; j < 18; j++) {
            var m_div = document.createElement("div");
            m_div.className = "m_div";
            m_div.style.top = i * 53 + "px";    //上边距
            m_div.style.left = j * 53 + "px";   //左边距
            m_div.id = i + "-" + j;             //id值

            //二维数组 【数字解释：1草坪 2墙 3路 4白花 5黄花 6花盆】
            if (A[i][j] == 1) {
                m_div.style.backgroundImage = "url(img/1.png)";
            }
            if (A[i][j] == 2) {
                m_div.style.backgroundImage = "url(img/2.png)";
            }
            if (A[i][j] == 3) {
                m_div.style.backgroundImage = "url(img/3.png)";
            }
            if (A[i][j] == 4) {
                m_div.style.backgroundImage = "url(img/4.png)";
            }
            if (A[i][j] == 5) {
                m_div.style.backgroundImage = "url(img/5.png)";
            }
            if (A[i][j] == 6) {
                m_div.style.backgroundImage = "url(img/6.png)";
            }
            map.appendChild(m_div);
        }
    }
    personal();     //加载人物
    setHeight();    //设置高度函数
    music();        //加载音乐
}

// 创建人物
personal = function () {
    var person = document.createElement("div");
    person.style.cssText = "width:53px;height:53px;background-image:url(img/bottom.png);position:absolute";
    person.style.top = y * 53 + "px";
    person.style.left = x * 53 + "px";
    person.id = "person";
    document.getElementById("map").appendChild(person);
}

// 二维数组拷贝 
function getType(o) {
    var _t;
    return ((_t = typeof (o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
}
function extend(destination, source) {
    for (var p in source) {
        if (getType(source[p]) == "array" || getType(source[p]) == "object") {
            destination[p] = getType(source[p]) == "array" ? [] : {};
            arguments.callee(destination[p], source[p]);
        }
        else {
            destination[p] = source[p];
        }
    }
}

//二维数组 【数字解释：1草坪 2墙 3路 4白花 5黄花 6花盆】
//人物的上下左右移动
pmove = function () {
    var k = event.keyCode;                              //创建一个变量k用来代表键盘码值   37左 39右 38上 40下
    var p = document.getElementById("person");          //获取人物
    var backstep = document.getElementById("backstep"); //获取后退一步按钮
    var left = 0; right = 0; topp = 0; bottom = 0;      //创建四个变量代表四个方向，判断人物是否可以后退一步
    var xz = 0;                                         //创建一个变量判断箱子是否可以后退

    //判断键盘安按下的是哪一个键 37左 39右 38上 40下
    switch (k) {
        //左                                                                                                                                                           
        case 37:
            var box = document.getElementById(y + "-" + (x - 1));   //获取往左一格的坐标
            var lu = document.getElementById(y + "-" + (x - 2));    //获取往右一格的坐标
            //下一步是花盆 下两步是路（推箱子）
            if (A[y][x - 1] == 6 && A[y][x - 2] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //改变图片
                lu.style.backgroundImage = "url(img/6.png)";        //改变图片
                A[y][x - 1] = 3;                                    //改变坐标
                A[y][x - 2] = 6;                                    //改变坐标
                bx++;                                               //格数增加
                xz++;                                               //可以后退
            }
            //下一步是花盆 下两步是终点（推向终点）
            if (A[y][x - 1] == 6 && A[y][x - 2] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x - 1] = 3;
                A[y][x - 2] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //下一步是黄花 下两步是格子（在格子上退黄花）
            if (A[y][x - 1] == 5 && A[y][x - 2] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x - 1] = 4;
                A[y][x - 2] = 5;
                bx++;
                xz++;
            }
            //下一步是黄花 下两步是路(在路上退黄花)
            if (A[y][x - 1] == 5 && A[y][x - 2] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y][x - 1] = 4;
                A[y][x - 2] = 6;
                bx++;
                xz++;
            }
            //下一步是路
            if (A[y][x - 1] == 3 || A[y][x - 1] == 4) {
                p.style.backgroundImage = "url(img/left.png)";
                p.style.left = parseInt(p.style.left) - 53 + "px";
                x--;
                bs++;
                left++;
            }
            backleft(backstep, left, p, xz, box, lu);   //调用后退一步函数
            passend();      //判断是否通关函数  
            break;

        case 39:
            var box = document.getElementById(y + "-" + (x + 1));   //获取往右一格的坐标   
            var lu = document.getElementById(y + "-" + (x + 2));    //获取往右两格的坐标
            //下一步是花盆 下两步是路（推箱子）
            if (A[y][x + 1] == 6 && A[y][x + 2] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //改变图片
                lu.style.backgroundImage = "url(img/6.png)";        //改变图片
                A[y][x + 1] = 3;                                    //改变坐标
                A[y][x + 2] = 6;                                    //改变坐标
                bx++;                                               //格数增加
                xz++;                                               //可以后退
            }
            //下一步是花盆 下两步是终点（推向终点）
            if (A[y][x + 1] == 6 && A[y][x + 2] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x + 1] = 3;
                A[y][x + 2] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //下一步是黄花 下两步是格子（在格子上退黄花）
            if (A[y][x + 1] == 5 && A[y][x + 2] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y][x + 1] = 4;
                A[y][x + 2] = 5;
                bx++;
                xz++;
            }
            //下一步是黄花 下两步是路(在路上退黄花)
            if (A[y][x + 1] == 5 && A[y][x + 2] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y][x + 1] = 4;
                A[y][x + 2] = 6;
                bx++;
                xz++;
            }
            //下一步是路
            if (A[y][x + 1] == 3 || A[y][x + 1] == 4) {
                p.style.backgroundImage = "url(img/right.png)";
                p.style.left = parseInt(p.style.left) + 53 + "px";
                x++;
                bs++;
                right++;
            }
            backright(backstep, right, p, xz, box, lu);
            passend();
            break;

        case 38:
            var box = document.getElementById((y - 1) + "-" + x);   //获取往上一格的坐标
            var lu = document.getElementById((y - 2) + "-" + x);    //获取往上两格的坐标
            //下一步是花盆 下两步是路（推箱子）
            if (A[y - 1][x] == 6 && A[y - 2][x] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //改变图片
                lu.style.backgroundImage = "url(img/6.png)";        //改变图片
                A[y - 1][x] = 3;                                    //改变坐标
                A[y - 2][x] = 6;                                    //改变坐标
                bx++;                                               //格数增加
                xz++;                                               //可以后退
            }
            //下一步是花盆 下两步是终点（推向终点）
            if (A[y - 1][x] == 6 && A[y - 2][x] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y - 1][x] = 3;
                A[y - 2][x] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //下一步是黄花 下两步是格子（在格子上退黄花）
            if (A[y - 1][x] == 5 && A[y - 2][x] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y - 1][x] = 4;
                A[y - 2][x] = 5;
                bx++;
                xz++;
            }
            //下一步是黄花 下两步是路(在路上退黄花)
            if (A[y - 1][x] == 5 && A[y - 2][x] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y - 1][x] = 4;
                A[y - 2][x] = 6;
                bx++;
                xz++;
            }
            //下一步是路
            if (A[y - 1][x] == 3 || A[y - 1][x] == 4) {
                p.style.backgroundImage = "url(img/top.png)";
                p.style.top = parseInt(p.style.top) - 53 + "px";
                y--;
                bs++;
                topp++;
            }
            backtop(backstep, topp, p, xz, box, lu);
            passend();
            break;

        case 40:
            var box = document.getElementById((y + 1) + "-" + x);   //获取往下一格的坐标
            var lu = document.getElementById((y + 2) + "-" + x);    //获取往下两格的坐标
            //下一步是花盆 下两步是路（推箱子）
            if (A[y + 1][x] == 6 && A[y + 2][x] == 3) {
                box.style.backgroundImage = "url(img/3.png)";       //改变图片
                lu.style.backgroundImage = "url(img/6.png)";        //改变图片
                A[y + 1][x] = 3;                                    //改变坐标
                A[y + 2][x] = 6;                                    //改变坐标
                bx++;                                               //格数增加
                xz++;                                               //可以后退
            }
            //下一步是花盆 下两步是终点（推向终点）
            if (A[y + 1][x] == 6 && A[y + 2][x] == 4) {
                box.style.backgroundImage = "url(img/3.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y + 1][x] = 3;
                A[y + 2][x] = 5;
                bx++;
                xz++;
                score += 10;
            }
            //下一步是黄花 下两步是格子（在格子上退黄花）
            if (A[y + 1][x] == 5 && A[y + 2][x] == 4) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/5.png)";
                A[y + 1][x] = 4;
                A[y + 2][x] = 5;
                bx++;
                xz++;
            }
            //下一步是黄花 下两步是路(在路上退黄花)
            if (A[y + 1][x] == 5 && A[y + 2][x] == 3) {
                box.style.backgroundImage = "url(img/4.png)";
                lu.style.backgroundImage = "url(img/6.png)";
                A[y + 1][x] = 4;
                A[y + 2][x] = 6;
                bx++;
                xz++;
            }
            //下一步是路
            if (A[y + 1][x] == 3 || A[y + 1][x] == 4) {
                p.style.backgroundImage = "url(img/bottom.png)";
                p.style.top = parseInt(p.style.top) + 53 + "px";
                y++;
                bs++;
                bottom++;
            }
            backbottom(backstep, bottom, p, xz, box, lu);
            passend();
            break;

    }
    //分数（游戏界面）
    if (document.getElementById("score")) {
        document.getElementById("score").innerHTML = score;
    }
    //关卡（游戏界面）
    if (document.getElementById("level")) {
        document.getElementById("level").innerHTML = gs + 1;
    }
    //箱子移动的格数（游戏界面）
    if (document.getElementById("box_num")) {
        document.getElementById("box_num").innerHTML = bx;
    }
    //人物移动的步数（游戏界面）
    if (document.getElementById("per_num")) {
        document.getElementById("per_num").innerHTML = bs;
    }
    //箱子移动的格数（胜利弹窗界面）
    if (document.getElementById("gnum")) {
        document.getElementById("gnum").innerHTML = bx;
    }
    //人物移动的步数（胜利弹窗界面）
    if (document.getElementById("pnum")) {
        document.getElementById("pnum").innerHTML = bs;
    }
    //箱子移动的格数（失败弹窗界面）
    if (document.getElementById("gnum2")) {
        document.getElementById("gnum2").innerHTML = bx;
    }
    //人物移动的步数（失败弹窗界面）
    if (document.getElementById("pnum2")) {
        document.getElementById("pnum2").innerHTML = bs;
    }
}

//二维数组 【数字解释：1草坪 2墙 3路 4白花 5黄花 6花盆】
//后退（37）
backleft = function (backstep, left, p, xz, box, lu) {
    backstep.onclick = function () {
        //如果left的值等于1说明人物走动了，先让人物后退一步
        if (left == 1) {
            p.style.left = parseInt(p.style.left) + 53 + "px";
            x++;
            left = 0;
            //此时人物已经后退，下列情况是在人物已经后退好的情况下进行的
            if (xz == 1) {
                //花盆在路上后退一格
                if (A[y][x - 1] == 3 && A[y][x - 2] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x - 1] = 6;
                    A[y][x - 2] = 3;
                }
                //黄花在路上后退一格变白花
                if (A[y][x - 1] == 3 && A[y][x - 2] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x - 1] = 6;
                    A[y][x - 2] = 4;
                }
                //花盆在格子后退一格变黄花
                if (A[y][x - 1] == 4 && A[y][x - 2] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x - 1] = 5;
                    A[y][x - 2] = 3;
                }
                //黄花在格子后退一格变黄花
                if (A[y][x - 1] == 4 && A[y][x - 2] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x - 1] = 5;
                    A[y][x - 2] = 4;
                }
            }
            xz = 0;
        }
    }
}

//后退（39）
backright = function (backstep, left, p, xz, box, lu) {
    backstep.onclick = function () {
        //如果right的值等于1说明人物走动了，先让人物后退一步
        if (right == 1) {
            p.style.left = parseInt(p.style.left) - 53 + "px";
            x--;
            right = 0;
            //此时人物已经后退，下列情况是在人物已经后退好的情况下进行的
            if (xz == 1) {
                //花盆在路上后退一格
                if (A[y][x + 1] == 3 && A[y][x + 2] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x + 1] = 6;
                    A[y][x + 2] = 3;
                }
                //黄花在路上后退一格变白花
                if (A[y][x + 1] == 3 && A[y][x + 2] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x + 1] = 6;
                    A[y][x + 2] = 4;
                }
                //花盆在格子后退一格变黄花
                if (A[y][x + 1] == 4 && A[y][x + 2] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y][x + 1] = 5;
                    A[y][x + 2] = 3;
                }
                //黄花在格子后退一格变黄花
                if (A[y][x + 1] == 4 && A[y][x + 2] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y][x + 1] = 5;
                    A[y][x + 2] = 4;
                }
            }
            xz = 0;
        }
    }
}

//后退(38)
backtop = function (backstep, top, p, xz, box, lu) {
    backstep.onclick = function () {
        //如果topp的值等于1说明人物走动了，先让人物后退一步
        if (topp == 1) {
            p.style.top = parseInt(p.style.top) + 53 + "px";
            y++;
            topp = 0;
            //此时人物已经后退，下列情况是在人物已经后退好的情况下进行的
            if (xz == 1) {
                //花盆在路上后退一格
                if (A[y - 1][x] == 3 && A[y - 2][x] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y - 1][x] = 6;
                    A[y - 2][x] = 3;
                }
                //黄花在路上后退一格变白花
                if (A[y - 1][x] == 3 && A[y - 2][x] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y - 1][x] = 6;
                    A[y - 2][x] = 4;
                }
                //花盆在格子后退一格变黄花
                if (A[y - 1][x] == 4 && A[y - 2][x] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y - 1][x] = 5;
                    A[y - 2][x] = 3;
                }
                //黄花在格子后退一格变黄花
                if (A[y - 1][x] == 4 && A[y - 2][x] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y - 1][x] = 5;
                    A[y - 2][x] = 4;
                }
            }
            xz = 0;
        }
    }
}

//后退(40)
backbottom = function (backstep, bottom, p, xz, box, lu) {
    backstep.onclick = function () {
        //如果bottom的值等于1说明人物走动了，先让人物后退一步
        if (bottom == 1) {
            p.style.top = parseInt(p.style.top) - 53 + "px";
            y--;
            bottom = 0;
            //此时人物已经后退，下列情况是在人物已经后退好的情况下进行的
            if (xz == 1) {
                //花盆在路上后退一格
                if (A[y + 1][x] == 3 && A[y + 2][x] == 6) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y + 1][x] = 6;
                    A[y + 2][x] = 3;
                }
                //黄花在路上后退一格变白花
                if (A[y + 1][x] == 3 && A[y + 2][x] == 5) {
                    box.style.backgroundImage = "url(img/6.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y + 1][x] = 6;
                    A[y + 2][x] = 4;
                }
                //花盆在格子后退一格变黄花
                if (A[y + 1][x] == 4 && A[y + 2][x] == 6) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/3.png)";
                    A[y + 1][x] = 5;
                    A[y + 2][x] = 3;
                }
                //黄花在格子后退一格变黄花
                if (A[y + 1][x] == 4 && A[y + 2][x] == 5) {
                    box.style.backgroundImage = "url(img/5.png)";
                    lu.style.backgroundImage = "url(img/4.png)";
                    A[y + 1][x] = 5;
                    A[y + 2][x] = 4;
                }
            }
            xz = 0;
        }
    }
}

//判断数组中是否还有箱子 如果有箱子就返回false，否则就返回true
pass = function () {
    var m, n;
    for (m = 0; m < 14; m++) {
        for (n = 0; n < 18; n++) {
            if (A[m][n] == 6) {
                return false;   //如果还有箱子就返回false
            }
        }
    }
    return true;                //如果没有箱子就返回true
}

//关卡判断 x代表人物初始的横坐标  y代表人物初始的纵坐标     bs,bx是把变量的值改为0
selectgs = function (gs) {
    //第一关
    if (gs == 0) {
        x = 8;
        y = 7;
    }
    //第二关
    if (gs == 1) {
        x = 5;
        y = 3;
    }
    //第三关
    if (gs == 2) {
        x = 5;
        y = 6;
    }
    //第四关
    if (gs == 3) {
        x = 5;
        y = 5;
    }
    //第五关
    if (gs == 4) {
        x = 6;
        y = 3;
    }
    //第六关
    if (gs == 5) {
        x = 12;
        y = 9;
    }
    //第七关
    if (gs == 6) {
        x = 11;
        y = 6;
    }
    //第八关
    if (gs == 7) {
        x = 11;
        y = 6;
    }
    //第九关
    if (gs == 8) {
        x = 10;
        y = 9;
    }
    //第十关
    if (gs == 9) {
        x = 5;
        y = 8;
    }
    bs = 0;     //把bs的值恢复为0
    bx = 0;     //把bx的值恢复为0
    score = 0;  //把score的值恢复为0
}

//通关弹窗
passend = function () {
    var a = pass();     //调用函数
    if (a == true) {
        //如果是前面9关就弹出下一关的提示窗口
        if (gs !== 10) {
            success();
        }
        //如果是第十关就弹出所有关卡已经成功通过
        if (gs == 9) {
            endsuccess();
        }
    }
}

//前九关的弹窗
success = function () {
    clearInterval(t);   //弹窗时 停止计时
    no_music();         //时间到 音乐停止播放


    //外框div
    var sdiv = document.createElement("div");
    sdiv.className = "sdiv";
    sdiv.id = "successdiv";
    document.getElementById("warp2").appendChild(sdiv);

    //人物移动的步数
    var pnum = document.createElement("div");
    pnum.className = "pnum";
    pnum.id = "pnum";
    sdiv.appendChild(pnum);

    //箱子移动的个数
    var gnum = document.createElement("div");
    gnum.className = "pnum gnum";
    gnum.id = "gnum";
    sdiv.appendChild(gnum);

    //下一关按钮
    var next = document.createElement("div");
    next.className = "next";
    next.id = "next";
    next.onclick = function () {
        document.body.innerHTML = "";   //清除页面内容
        gs++;                           //关卡+1
        A = ga[gs];                     //获取数组
        selectgs(gs);                   //判断第几关
        init();                         //重新加载页面
    }
    sdiv.appendChild(next);

    //设置弹窗的top left值
    if (document.getElementById("sdiv")) {
        var BW = document.body.clientWidth;     //获取屏幕宽度
        var BH = document.body.clientHeight;     //获取屏幕高度 
        var sdiv = document.getElementById("sdiv");
        var W_sdiv = document.getElementById("sdiv").offsetWidth;
        var H_sdiv = document.getElementById("sdiv").offsetHeight;
        sdiv.style.top = (BH - H_sdiv) / 2;
        sdiv.style.left = (BW - W_sdiv) / 2;
    }
    sl();   //加载游戏胜利音效
}

//最后一关弹窗
endsuccess = function () {

    //外框div
    var enddiv = document.createElement("div");
    enddiv.className = "enddiv";
    enddiv.id = "enddiv";
    document.getElementById("warp2").appendChild(enddiv);

    //在玩一次按钮
    var endding = document.createElement("div");
    endding.className = "endding";
    endding.id = "endding";
    endding.onclick = function () {
        document.body.innerHTML = "";   //清除页面内容
        gs = 0;                         //把关卡设置为第一关
        A = ga[gs];                     //加载数组
        selectgs(gs);                   //判断第几关
        init();                         //重新加载函数
    }
    enddiv.appendChild(endding);

    //设置弹窗的top left值
    if (document.getElementById("enddiv")) {
        var BW = document.body.clientWidth;     //获取屏幕宽度
        var BH = document.body.clientHeight;     //获取屏幕高度 
        var enddiv = document.getElementById("enddiv");
        var W_enddiv = document.getElementById("enddiv").offsetWidth;
        var H_enddiv = document.getElementById("enddiv").offsetHeight;
        enddiv.style.top = (BH - H_enddiv) / 2;
        enddiv.style.left = (BW - W_enddiv) / 2;
    }
}

//游戏失败弹窗
fail = function () {

    //外框div
    var fdiv = document.createElement("div");
    fdiv.className = "fdiv";
    fdiv.id = "fdiv";
    document.getElementById("warp2").appendChild(fdiv);

    //人物移动的步数
    var pnum = document.createElement("div");
    pnum.className = "pnum";
    pnum.id = "pnum2";
    fdiv.appendChild(pnum);

    //箱子移动的步数
    var gnum = document.createElement("div");
    gnum.className = "pnum gnum";
    gnum.id = "gnum2";
    fdiv.appendChild(gnum);

    //重玩本关按钮
    var again = document.createElement("div");
    again.className = "next";
    again.onclick = function () {
        document.body.innerHTML = "";   //清除页面内容
        A = ga[gs];                     //数组
        selectgs(gs);                   //判断第几关
        init();                         //加载函数
    }
    fdiv.appendChild(again);

    //设置弹窗的top left值
    if (document.getElementById("fdiv")) {
        var BW = document.body.clientWidth;     //获取屏幕宽度
        var BH = document.body.clientHeight;     //获取屏幕高度 
        var sdiv = document.getElementById("fdiv");
        var W_fdiv = document.getElementById("fdiv").offsetWidth;
        var H_fdiv = document.getElementById("fdiv").offsetHeight;
        fdiv.style.top = (BH - H_fdiv) / 2;
        fdiv.style.left = (BW - W_fdiv) / 2;
    }
    sl();
}

//选择关卡
selgs = function () {

    //弹窗
    var seldiv = document.createElement("div");
    seldiv.className = "seldiv wow fadeInDown animated";
    seldiv.id = "seldiv";
    document.getElementById("warp").appendChild(seldiv);

    //关闭按钮
    var selclose = document.createElement("div");
    selclose.className = "selclose";
    selclose.onclick = function () {
        document.getElementById("warp").removeChild(seldiv);    //点击关闭按钮的时候，把弹窗div从warp矩形中移除
    }
    seldiv.appendChild(selclose);

    //弹窗内框
    var selwarp = document.createElement("div");
    selwarp.className = "selwarp";
    seldiv.appendChild(selwarp);

    //利用for循环创建十个选关的矩形
    for (var i = 0; i < 10; i++) {
        //存放图片的数组
        var a = ["11.png", "22.png", "33.png", "44.png", "55.png", "66.png", "77.png", "88.png", "99.png", "1010.png"];

        //外框div
        var swdiv = document.createElement("div");
        swdiv.className = "swdiv";
        swdiv.style.backgroundImage = "url(" + "img/" + a[i] + ")";
        choosegs(swdiv, i);
        selwarp.appendChild(swdiv);

        //判断右边距，第四个和第八个矩形的右边距为0
        if (i == 3 || i == 7) {
            swdiv.style.marginRight = "0px";
        }
        //判断上边距，前四个矩形的上边距为0
        if (i == 0 || i == 1 || i == 2 || i == 3) {
            swdiv.style.marginTop = "0px";
        }
    }

    //设置选择关卡弹窗的margin值
    if (document.getElementById("seldiv")) {
        var BW = document.body.clientWidth;                             //获取屏幕宽度
        var BH = document.body.clientHeight;                            //获取屏幕高度 
        var W_warp = document.getElementById("warp").offsetWidth;       //获取外框的宽度
        var H_warp = document.getElementById("warp").offsetHeight;      //获取外框的高度
        var W_seldiv = document.getElementById("seldiv").offsetWidth;   //获取弹窗的宽度
        var H_seldiv = document.getElementById("seldiv").offsetHeight;  //获取弹窗的高度
        var seldiv = document.getElementById("seldiv");                 //获取弹窗的矩形

        a = (BW - W_warp) / 2;
        b = (W_warp - W_seldiv) / 2;
        seldiv.style.left = a + b;      //弹窗的左边距=外框矩形距离屏幕的左边距+弹窗矩形距离外框的左边距

        c = (BH - H_warp) / 2;
        d = (H_warp - H_seldiv) / 2;
        seldiv.style.top = c + d;       //弹窗的上边距=外框矩形距离屏幕的上边距+弹窗矩形距离外框的上边距
    }
}

//选择关卡进入函数  s表示你点击的矩形，i表示你点击的矩形是第几个
choosegs = function (s, i) {
    s.onclick = function () {
        document.body.innerHTML = "";   //先清除页面原本的内容
        gs = i;                         //把上面i传下来的值赋给gs
        A = ga[gs];                     //然后调用数组
        selectgs(gs);                   //判断是第几关
        init();                         //重新加载游戏界面函数
    }
}

//排行版
list = function () {
    //弹窗
    var listdiv = document.createElement("div");
    listdiv.className = "listdiv wow fadeInDown animated";
    listdiv.id = "listdiv";
    document.getElementById("warp").appendChild(listdiv);

    //关闭按钮
    var listclose = document.createElement("div");
    listclose.className = "listclose selclose";
    listclose.onclick = function () {
        document.getElementById("warp").removeChild(listdiv);
    }
    listdiv.appendChild(listclose);

    //从数据库获取数据
    //    U.A.Request("http://cd.1473.cn/net", (["10.3.16.56", "boxgame", "select_gamedate", 1]), function (r) {
    //        var a = r.value;
    //    })
    var date = [
                ["曾洁娜", "第一关", "10", "10", "100分"],
                ["zengjiena", "第二关", "20", "20", "90分"],
                ["zjn", "第三关", "30", "30", "80分"],
                ["123", "第四关", "40", "40", "70分"],
                ["曾曾曾", "第五关", "50", "50", "60分"],
                ["曾洁娜", "第六关", "60", "60", "50分"]
               ];
    for (var c = 0; c < 6; c++) {
        //外部div
        var lwarp = document.createElement("div");
        lwarp.className = "lwarp";
        listdiv.appendChild(lwarp);

        //用户昵称
        var lname = document.createElement("div");
        lname.className = "lname";
        lname.style.cssText = "margin-left:0px";
        lname.innerHTML = date[c][0];
        lwarp.appendChild(lname);

        //关卡
        var lgs = document.createElement("div");
        lgs.className = "lgs lname";
        lgs.innerHTML = date[c][1];
        lwarp.appendChild(lgs);

        //人物移动步数
        var lbs = document.createElement("div");
        lbs.className = "lbs lname";
        lbs.innerHTML = date[c][2];
        lwarp.appendChild(lbs);

        //箱子移动步数
        var lbx = document.createElement("div");
        lbx.className = "lbs lname";
        lbx.innerHTML = date[c][3];
        lwarp.appendChild(lbx);

        //分数
        var ll = document.createElement("div");
        ll.className = "ll lname";
        ll.innerHTML = date[c][4];
        lwarp.appendChild(ll);

        if (c == 0) {
            lwarp.style.marginTop = "175px";
        }
    }

    //设置排行榜弹窗的margin值
    if (document.getElementById("listdiv")) {
        var BW = document.body.clientWidth;                             //获取屏幕宽度
        var BH = document.body.clientHeight;                            //获取屏幕高度 
        var W_warp = document.getElementById("warp").offsetWidth;       //获取外框的宽度
        var H_warp = document.getElementById("warp").offsetHeight;      //获取外框的高度
        var W_listdiv = document.getElementById("listdiv").offsetWidth;   //获取弹窗的宽度
        var H_listdiv = document.getElementById("listdiv").offsetHeight;  //获取弹窗的高度
        var listdiv = document.getElementById("listdiv");                 //获取弹窗的矩形

        a = (BW - W_warp) / 2;
        b = (W_warp - W_listdiv) / 2;
        listdiv.style.left = a + b;         //弹窗的左边距=外框矩形距离屏幕的左边距+弹窗矩形距离外框的左边距

        c = (BH - H_warp) / 2;
        d = (H_warp - H_listdiv) / 2;
        listdiv.style.top = c + d;       //弹窗的上边距=外框矩形距离屏幕的上边距+弹窗矩形距离外框的上边距
    }
}

//游戏说明
play = function () {
    //弹窗
    var pdiv = document.createElement("div");
    pdiv.className = "pdiv wow fadeInDown animated";
    pdiv.id = "pdiv";
    document.getElementById("warp").appendChild(pdiv);

    //关闭按钮
    var pclose = document.createElement("div");
    pclose.className = "pclose selclose";
    pclose.onclick = function () {
        document.getElementById("warp").removeChild(pdiv);  //当点击关闭按钮的时候，把弹窗从父亲div中移除掉
    }
    pdiv.appendChild(pclose);

    //设置游戏说明弹窗的margin值
    if (document.getElementById("pdiv")) {
        var BW = document.body.clientWidth;                             //获取屏幕宽度
        var BH = document.body.clientHeight;                            //获取屏幕高度 
        var W_warp = document.getElementById("warp").offsetWidth;       //获取外框的宽度
        var H_warp = document.getElementById("warp").offsetHeight;      //获取外框的高度
        var W_pdiv = document.getElementById("pdiv").offsetWidth;   //获取弹窗的宽度
        var H_pdiv = document.getElementById("pdiv").offsetHeight;  //获取弹窗的高度
        var pdiv = document.getElementById("pdiv");                 //获取弹窗的矩形

        a = (BW - W_warp) / 2;
        b = (W_warp - W_pdiv) / 2;
        pdiv.style.left = a + b;         //弹窗的左边距=外框矩形距离屏幕的左边距+弹窗矩形距离外框的左边距

        c = (BH - H_warp) / 2;
        d = (H_warp - H_pdiv) / 2;
        pdiv.style.top = c + d;       //弹窗的上边距=外框矩形距离屏幕的上边距+弹窗矩形距离外框的上边距
    }
}

//返回菜单
return_init = function (r) {
    r.onclick = function () {
        document.body.innerHTML = "";

        //外框div
        var warp = document.createElement("div");
        warp.className = "warp";
        warp.id = "warp";
        document.body.appendChild(warp);

        //开始游戏按钮
        var initt = document.createElement("div");
        initt.className = "init";
        initt.id = "init";
        initt.onclick = function () {
            init();
        }
        warp.appendChild(initt);

        //选择关卡按钮
        var selece = document.createElement("div");
        selece.className = "selece init";
        selece.id = "selece";
        selece.onclick = function () {
            selgs();
        }
        warp.appendChild(selece);

        //排行榜按钮
        var listt = document.createElement("div");
        listt.className = "list init";
        listt.id = "list";
        listt.onclick = function () {
            list();
        }
        warp.appendChild(listt);

        //游戏说明按钮
        var playy = document.createElement("div");
        playy.className = "select init play";
        playy.id = "play";
        playy.onclick = function () {
            play();
        }
        warp.appendChild(playy);

        //设置高度
        var BW = document.body.clientWidth;
        var BH = document.body.clientHeight;
        var W_warp = document.getElementById("warp").offsetWidth;
        var H_warp = document.getElementById("warp").offsetHeight;
        warp.style.marginTop = (BH - H_warp) / 2;
        warp.style.marginLeft = (BW - W_warp) / 2;
    }
}

//时间进度条
gametime = function () {
    if (document.getElementById("time_bar")) {
        var time_bar = document.getElementById("time_bar");
        time_bar.style.width = parseInt(time_bar.style.width) - 1 + "%";
        //time_bar.innerHTML = time_bar.style.width;
        if (time_bar.style.width == "0%") {
            clearInterval(t);   //清楚计时器
            fail();             //弹出失败弹窗
        }
    }
}

//开始计时
starttime = function () {
    t = setInterval(function () { gametime(); }, 5000);     //计时器-每5000毫秒就调用gametime函数
}

//重玩本关
again = function (a) {
    a.onclick = function () {
        document.body.innerHTML = "";   //清除页面内容
        A = ga[gs];                     //数组
        selectgs(gs);                   //判断第几关
        init();                         //加载页面
    }
}

//弹窗闭关函数
CMP = function () {
    var CMP_name = document.getElementById("CMP_name").value;       //先获取用户输入的昵称
    name = CMP_name;
    var CMP = document.getElementById("CMP");
    document.getElementById("warp").removeChild(CMP);
}

//弹窗进入游戏
CMP_init = function () {
    var btn = document.getElementById("CMP_btn");
    btn.onclick = function () {
        var CMP_name = document.getElementById("CMP_name").value;       //先获取用户输入的昵称
        name = CMP_name;                                                //然后把昵称赋给全局变量name
        document.body.innerHTML = "";                                   //清楚页面
        init();                                                         //加载函数
    }
}

//高度
setHeight = function () {
    var BW = document.body.clientWidth;     //获取屏幕宽度
    var BH = document.body.clientHeight;     //获取屏幕高度 

    //设置起始页的margin值
    if (document.getElementById("warp")) {
        var warp = document.getElementById("warp");
        var W_warp = document.getElementById("warp").offsetWidth;
        var H_warp = document.getElementById("warp").offsetHeight;
        warp.style.marginTop = (BH - H_warp) / 2;
        warp.style.marginLeft = (BW - W_warp) / 2;
    }

    //设置游戏开始界面的maigin值
    if (document.getElementById("warp2")) {
        var warp2 = document.getElementById("warp2");
        var W_warp2 = document.getElementById("warp2").offsetWidth;
        var H_warp2 = document.getElementById("warp2").offsetHeight;
        warp2.style.marginTop = (BH - H_warp2) / 2;
        warp2.style.marginLeft = (BW - W_warp2) / 2;
    }
}

//游戏音效
music = function () {
    var mp3 = document.createElement("embed");
    mp3.style.cssText = "width:0px;height:0px;";
    mp3.src = "music.mp3";
    mp3.id = "mp3";
    mp3.hidden = "true";    //音乐面板是否显示
    mp3.autostart = "true"; //是否自动播放
    mp3.loop = "true";      //是否循环播放
    document.getElementById("warp2").appendChild(mp3);
}

//清除游戏音效
no_music = function () {
    if (document.getElementById("mp3")) {
        var mp3 = document.getElementById("mp3");
        document.getElementById("warp2").removeChild(mp3);  //清除游戏音效
    }
}

//游戏胜利音效
sl = function () {
    if (document.getElementById("successdiv")) {
        var sl = document.createElement("embed");
        sl.style.cssText = "width:0px;height:0px;";
        sl.src = "sl.mp3";
        sl.id = "sl";
        sl.hidden = "true";    //音乐面板是否显示
        sl.autostart = "true"; //是否自动播放
        sl.loop = "true";      //是否循环播放
        document.getElementById("successdiv").appendChild(sl);
    }
}

document.onkeydown = pmove; //当用户点击键盘上的任意键就触发pmove这个函数
new WOW().init();           //动画效果
window.onload = function () {
    setHeight();
}