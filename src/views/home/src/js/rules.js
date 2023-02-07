module.exports = {
    title: "rules.js",
    desc: "常用的正则库，常用的校验方法，引入你所需要的校验方法",

    recordList: [
        {
            version: "1.0.32-10",
            editor: "余钿",
            time: "2020-08-19 15:15",
            contentList: [
                "增加ip，ip6校验方法",
            ],
        },
        {
            version: "1.0.31",
            editor: "张腾",
            time: "2020-07-27 10:15",
            contentList: [
                "调整说明文档",
            ],
        }
    ],

    tableList: [
        {
            modelType: "methodModel",
            expand: true,
            desc: "",
            listData: [
                {
                    name: "verifyRule",
                    explain: "使用exp校验string",
                    param: "(string,exp)",
                    returns: "true | false",

                    example: [
                        "//引入校验方法",
                        "import { verifyRule } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyRule('123',/\\d/);  // true",
                    ]
                }, {
                    name: "verifyType",
                    explain: "校验param的类型是否是type类型",
                    param: "(param,type)",
                    returns: "true | false | param的实际类型(不传type时)",

                    example: [
                        "//引入校验类型的方法",
                        "import { verifyType } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyType([],'Array');  // true",
                        "verifyType([],'String'); // false",
                        "verifyType([]);          // Array",
                    ]
                }, {
                    name: "verifyCellPhone",
                    explain: "校验string是否是手机号格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验手机号的方法",
                        "import { verifyCellPhone } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyCellPhone('12123123123123');  // false",
                        "verifyCellPhone('18771142288');     // true"
                    ]
                }, {
                    name: "verifyEmail",
                    explain: "校验string是否是邮箱格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验邮箱的方法",
                        "import { verifyEmail } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyEmail('12323.com');          // false",
                        "verifyEmail('596161973@qq.com');   // true"
                    ]
                }, {
                    name: "verifyPhone",
                    explain: "校验string是否是座机格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验座机格式的方法",
                        "import { verifyPhone } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyPhone('027-616176662');   // true",
                    ]
                }, {
                    name: "verifyUrl",
                    explain: "校验string是否是url格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验url的方法",
                        "import { verifyUrl } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyUrl('http://www.baidu.com');  // true",
                    ]
                }, {
                    name: "verifyID",
                    explain: "校验string是否是15|18位身份证格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验15|18位身份证格式的方法",
                        "import { verifyID } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyID('420116199402190001');  // true",
                    ]
                }, {
                    name: "verifyWidth",
                    explain: "校验string是否是width格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验width的方法",
                        "import { verifyWidth } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "verifyWidth('100');    // false",
                        "verifyWidth('100px');  // true",
                        "verifyWidth('100%');   // true",
                    ]
                }, {
                    name: "verifyIp",
                    explain: "校验是否是正确的ip格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验ipv4的方法",
                        "import { verifyIp } from 'tong-zui-ui/js/rules';",
                    ]
                },{
                    name: "checkIPV4",
                    explain: "校验ip是否是合法的ipv4格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验ipv4的方法",
                        "import { checkIPV4 } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "checkIPV4('0.0.0.0');    // true",
                        "checkIPV4('255.255.255.255');  // true",
                        "checkIPV4('192.168.1.1');   // true",
                        "checkIPV4('192.168.1.256');   // false",
                    ]
                }, {
                    name: "checkIPV6",
                    explain: "校验ip是否是合法的ipv6格式",
                    param: "(string)",
                    returns: "true | false",

                    example: [
                        "//引入校验ipv6的方法",
                        "import { checkIPV6 } from 'tong-zui-ui/js/rules';",
                        "//使用",
                        "checkIPV6('2001:0DB8:02de::0e13');    // true",
                        "checkIPV6('CDCD:910A:2222:5498:8475:1111:3900:2020');  // true",
                        "checkIPV6('192.168.1.1');   // false",
                    ]
                }
            ],
        }
    ]
}