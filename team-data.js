const teamData = {
  ant: {
    "小黑蟻": [
      { family: "28 山 / 秋", child: "月" },
      { family: "51 水熊蟲 / 橘小豬", child: "獵豹" },
      { family: "52 海膽 / 芒草", child: "毛毛雨" },
      { family: "55 Hyena / 銀合歡", child: "Meerkat" },
      { family: "62 落羽松", child: "黑面琵鷺" },
      { family: "64 山羊 / 拉布拉多", child: "紫斑蝶" },
      { family: "71 海岸線 / 星辰花", child: "小金魚" },
      { family: "78 綠豆 / 紅豆", child: "紅豆仁" },
      { family: "81 狗尾草 / 卡斯比亞", child: "小樹懶" },
      { family: "86 石斑 / 丹楓", child: "小象" }
    ],
    "小黃蟻": [
      { family: "39 燈籠果 / 桔梗", child: "小花鹿" },
      { family: "46 冬至 / 瓢蟲", child: "小美人魚" },
      { family: "47 海峽 / 野薑花", child: "小石虎" },
      { family: "53 松樹 / 松鼠", child: "小松果" },
      { family: "58 管鬚蟹 / 藍腹鷴", child: "絨鼠" },
      { family: "76 羅漢松 / 風鈴木", child: "馬來貘" },
      { family: "80 田嬰 / 小雞", child: "膨鼠" },
    ],
    "小綠蟻": [
      { family: "37 風神翼龍 / 小葉欖仁", child: "黃鸝" },
      { family: "41 龍葵", child: "彩虹" },
      { family: "44 米蝦 / 珊瑚大戟", child: "捕蠅草" },
      { family: "55 Hyena / 銀合歡", child: "Beluga" },
      { family: "60 森林 / 螢火蟲", child: "美洲豹" },
      { family: "61 薰衣草", child: "花園鰻" },
      { family: "67 腕龍 / 荔枝", child: "海豚" },
      { family: "75 玄武岩 / 雞蛋花", child: "刺河豚" }
    ],
    "小紅蟻": [
      { family: "37 風神翼龍 / 小葉欖仁", child: "彩虹龍" },
      { family: "48 折衷鸚鵡 / 海鸚", child: "彩虹巨嘴鳥" },
      { family: "56 角鯨 / 海鷗", child: "小蝙蝠" },
      { family: "57 山櫻花", child: "菊石" },
      { family: "72 鮭魚頭 / 麥芽糖", child: "大王魷魚" },
      { family: "79 汪洋大海 / 滿天星", child: "粉紅兔" },
      { family: "82 白臘樹 / 山茶花", child: "南瓜" },
      { family: "85 冰山 / 流星雨", child: "閃電" },
      { family: "87 翡翠木 / 紫薊", child: "橡實果" }
    ]
  },
  bee: {
    "泥壺蜂": [
      { family: "23 鋰(Li) / 鎂(Mg)", child: "鈹" },
      { family: "26 海獅 / 海狗", child: "海豹" },
      { family: "34 泥鰍 / 蘆薈", child: "稀泥裡" },
      { family: "40 極光 / 藍洞", child: "火山" },
      { family: "42 小麥穗 / 尤加利", child: "貓薄荷" },
      { family: "64 山羊 / 拉布拉多", child: "狐猴" },
      { family: "69 魟魚 / 波波草", child: "葡萄柚" },
      { family: "74 跑山雞 / 黃花風鈴木", child: "櫻桃蘿蔔" },
      { family: "77 桂冠草 / 北極星", child: "樹蛙" }
    ],
    "虎頭蜂": [
      { family: "18 橘子皮 / 橘子樹", child: "橘子籽" },
      { family: "22 蟑螂 / 石榴", child: "狐獴" },
      { family: "25 臭氧層 / 香氣", child: "開心果" },
      { family: "26 海獅 / 海狗", child: "海星" },
      { family: "31 Camel 駱駝 / 玄鳳", child: "黃金雉" },
      { family: "36 太陽 / 銀河", child: "宇宙" },
      { family: "52 海膽 / 芒草", child: "刺蝟" },
      { family: "58 管鬚蟹 / 藍腹鷴", child: "雪貂" },
      { family: "59 兔袋鼠 / 香草莢", child: "小柴犬" },
      { family: "79 汪洋大海 / 滿天星", child: "豬豬德" }
    ],
    "長腳蜂": [
      { family: "12 北極熊 / 企鵝", child: "小白鯨" },
      { family: "24 星螺 / 淡菜", child: "巨貝" },
      { family: "33 泥巴 / 蘆葦", child: "羊咩咩" },
      { family: "35 松果 / 台灣冷杉", child: "茉莉" },
      { family: "41 龍葵", child: "颱風" },
      { family: "43 袋鼠 / 小羽苔", child: "銅錢草" },
      { family: "44 米蝦 / 珊瑚大戟", child: "太陽系" },
      { family: "45 鯨頭鸛 / 草履蟲", child: "小老虎" },
      { family: "70 晨光 / 麋鹿", child: "河馬" },
      { family: "86 石斑 / 丹楓", child: "小蘋果" }
    ],
    "細腰蜂": [
      { family: "4 水熊 / 玉露", child: "兵蟻" },
      { family: "27 咬人貓 / 嬰兒淚", child: "雞蛋花" },
      { family: "28 山 / 秋", child: "木" },
      { family: "38 麥香 / 玉如意", child: "開心狗" },
      { family: "46 冬至 / 瓢蟲", child: "小蘑菇" },
      { family: "47 海峽 / 野薑花", child: "太陽" },
      { family: "54 獅子王 / 三色堇", child: "彩虹鍬形蟲" },
      { family: "57 山櫻花", child: "斑貓鯊" },
      { family: "63 大草 / 無尾熊", child: "小草" },
      { family: "66 螃蟹 / 水豚", child: "花豹" },
      { family: "87 翡翠木 / 紫薊", child: "甘草" }
    ]
  },
  deer: {
    "草原鹿": [
      { family: "68 水牛 / 水竹", child: "蜂鳥" },
      { family: "19 隼 / 苦楝", child: "黑貓" },
      { family: "33 泥巴 / 蘆葦", child: "藪貓" },
      { family: "70 晨光 / 麋鹿", child: "美洲虎" },
      { family: "3 河馬 / 銀杏", child: "小海馬" },
      { family: "27 咬人貓 / 嬰兒淚", child: "天堂鳥" }
    ],
    "森林鹿": [
      { family: "74 跑山雞 / 黃花風鈴木", child: "山獅" },
      { family: "17 咸豐草 / 菱角", child: "帝雉" },
      { family: "19 隼 / 苦楝", child: "笑翠鳥" },
      { family: "11 阿勃勒 / 楓樹", child: "牽牛花" },
      { family: "18 橘子皮 / 橘子樹", child: "橘子葉" }
    ],
    "高地鹿": [
      { family: "15 石虎 / 藍花藤", child: "風信子" },
      { family: "21 藍眼淚 / 響鈴豆", child: "白頭鷹" },
      { family: "45 鯨頭鸛 / 草履蟲", child: "小獅子" },
      { family: "77 桂冠草 / 北極星", child: "花栗鼠" },
      { family: "69 魟魚 / 波波草", child: "海桐" },
      { family: "50 稻穗 / 上弦月", child: "鸚鵡螺" }
    ],
    "湖泊鹿": [
      { family: "65 玉山 / 北極狐", child: "貓熊" },
      { family: "12 北極熊 / 企鵝", child: "虎鯨" },
      { family: "69 魟魚 / 波波草", child: "綠竹" },
      { family: "32 ICE / 栗子", child: "小刺蝟" },
      { family: "86 石斑 / 丹楓", child: "波妞" }
    ]
  },
  eagle: {
    "翔鷹": [
      { family: "1 鳳凰 / 米蟲", child: "夏天" },
      { family: "2 西洋山葵 / 檸檬", child: "櫻花" },
      { family: "5 長臂猿 / 孔雀魚", child: "小蜜蜂" },
      { family: "6 黑熊 / 土豆仁", child: "鼴鼠" },
      { family: "7 錦鯉 / 曼波魚", child: "小魚兒" },
      { family: "8 灰熊 / 相思樹", child: "含羞草" },
      { family: "8 灰熊 / 相思樹", child: "穿山甲" },
      { family: "9 藍鯨 / 向日葵", child: "犀牛" },
      { family: "10 白頭翁 / 牡羊座", child: "小雨燕" },
      { family: "13 鯨魚 / 山竹", child: "白熊" },
      { family: "14 石頭 / 毛西番蓮", child: "小螳螂" },
      { family: "20 櫻花鹿", child: "梅花兔" },
      { family: "88 獅子座 / 青鳥", child: "台灣黑熊" },
    ]
  }
}; 