/* 成语拼一拼 — dataset (20 idioms)
 * Each entry: { idiom, pinyin, definition, origin, example_sentence, visual_prompt, distractor_characters }
 * The engine splits `idiom` into its 4 characters (correct tiles) and combines
 * with 6 `distractor_characters` to build a shuffled 10-tile candidate pool.
 * To add levels: append objects here. To wire real art: drop images/<idiom>.png.
 */
window.IDIOMS = [
  {
    idiom: "画蛇添足",
    pinyin: "huà shé tiān zú",
    definition: "画蛇时给蛇添上脚。比喻做了多余的事，反而把事情弄糟糕了。",
    origin: "古代有几个人比赛画蛇，谁先画好谁喝酒。一个人先画好了，却又给蛇加上了脚，结果反而输掉了比赛。",
    example_sentence: "这幅画本来已经很美了，你再涂上这些颜色就是画蛇添足。",
    visual_prompt: "A humorous children's book illustration showing an ancient Chinese man holding a paintbrush, proudly adding tiny frog-like feet onto a drawn snake on the ground, while another man holding a wine cup laughs, vibrant colors, clear character actions.",
    distractor_characters: ["龙", "飞", "爪", "水", "草", "跑"]
  },
  {
    idiom: "守株待兔",
    pinyin: "shǒu zhū dài tù",
    definition: "守在树桩旁等待兔子。比喻不靠自己的努力，只想碰运气过日子。",
    origin: "战国时有个农夫看到一只兔子撞死在树桩上，于是他放下农具天天守在树桩旁，希望再捡到兔子，结果地里的庄稼都荒废了。",
    example_sentence: "学习要靠自己努力，不能抱着守株待兔的心态等待好成绩。",
    visual_prompt: "A funny storybook illustration of a lazy farmer sitting comfortably next to a wooden tree stump in a neglected field, staring intently at the stump waiting for a rabbit, while weeds grow around his abandoned farming tools, digital art style.",
    distractor_characters: ["抓", "鸟", "林", "田", "坐", "等"]
  },
  {
    idiom: "狐假虎威",
    pinyin: "hú jiǎ hǔ wēi",
    definition: "狐狸借着老虎的威风吓跑百兽。比喻借着别人的势力量来欺压他人。",
    origin: "狐狸被老虎抓住了，狐狸说自己是天帝派来的百兽之王。老虎不信，跟着狐狸走在森林里，发现其他动物看到他们都吓跑了，其实动物们怕的是老虎。",
    example_sentence: "他不过是仗着哥哥的权势狐假虎威罢了，自己根本没什么本事。",
    visual_prompt: "A lively children's illustration of a sneaky fox walking proudly at the front in a forest, looking smug, while a huge fierce tiger walks right behind him; smaller animals in the background look terrified and are running away, colorful, cute flat design.",
    distractor_characters: ["狼", "豹", "怕", "吓", "走", "山"]
  },
  {
    idiom: "井底之蛙",
    pinyin: "jǐng dǐ zhī wā",
    definition: "井底下的青蛙。比喻眼界狭小、见识短浅的人。",
    origin: "一只青蛙生活在废井里，觉得这里就是最大的天地。直到有一天海龟告诉它大海的广大，青蛙才发现自己非常渺小。",
    example_sentence: "我们要多出门走走，多看书，不能做井底之蛙。",
    visual_prompt: "A brightly colored watercolor illustration showing the inside of a stone well. A small green frog sits at the bottom looking up at a small circle of blue sky, looking very satisfied with its tiny world.",
    distractor_characters: ["海", "鱼", "天", "水", "看", "跳"]
  },
  {
    idiom: "掩耳盗铃",
    pinyin: "yǎn ěr dào líng",
    definition: "捂住自己的耳朵去偷铃铛。比喻捂住耳朵骗自己，以为别人听不到。",
    origin: "有人想偷一个大铜铃，但铃铛一碰就会响。他就捂住自己的耳朵去搬铃铛，以为自己听不见，别人也听不见。",
    example_sentence: "你以为不看考试成绩就不存在了吗？这完全是掩耳盗铃。",
    visual_prompt: "A comical cartoon illustration of a thief tightly pressing both hands over his own ears with eyes closed, trying to steal a giant golden bell hanging in front of a house, unaware that the bell is making a loud 'RING RING' sound wave around him.",
    distractor_characters: ["偷", "门", "响", "闭", "听", "手"]
  },
  {
    idiom: "刻舟求剑",
    pinyin: "kè zhōu qiú jiàn",
    definition: "在划动的船上刻记号寻找掉进水里的剑。比喻不知变通、机械守旧。",
    origin: "一个人坐船过河时宝剑掉进了水里，他在船舷上刻了一个记号说：'我的剑是从这里掉下去的。'船靠岸后，他顺着记号跳进水里去找，结果当然找不到。",
    example_sentence: "时代已经在变化了，我们处理问题不能刻舟求剑。",
    visual_prompt: "A cute storybook illustration showing an ancient Chinese man using a small knife to carve a notch on the wooden edge of a moving boat, while his shiny sword is sinking down into the deep blue water below.",
    distractor_characters: ["刀", "深", "找", "落", "河", "沉"]
  },
  {
    idiom: "亡羊补牢",
    pinyin: "wáng yáng bǔ láo",
    definition: "羊丢失了再去修补羊圈。比喻出了问题及时补救，还不算太晚。",
    origin: "养羊人丢了一只羊，发现羊圈破了个窟窿。邻居劝他修补，他不听，第二天又丢了一只。他赶紧把窟窿补好，从此就再也没有丢羊了。",
    example_sentence: "虽然这次考试没考好，但只要现在开始查漏补缺，亡羊补牢还来得及。",
    visual_prompt: "A warm children's book style illustration of a friendly farmer working hard with a hammer and wooden planks to repair a broken wooden fence of a sheepfold, while several cute fluffy white sheep watch him happily.",
    distractor_characters: ["修", "栅", "跑", "狼", "抓", "墙"]
  },
  {
    idiom: "拔苗助长",
    pinyin: "bá miáo zhù zhǎng",
    definition: "把禾苗拔高来帮助它生长。比喻急于求成，反而把事情弄糟糕。",
    origin: "宋国有个农夫嫌自家的禾苗长得太慢，就把禾苗一棵棵往上拔高。第二天，所有的禾苗都枯死在田里了。",
    example_sentence: "教育孩子要循序渐进，太急躁了只会拔苗助长。",
    visual_prompt: "A funny vector illustration of an exhausted farmer in a green rice field pulling green sprouts out of the mud with his hands, surrounded by withered, bent plants under a hot sun.",
    distractor_characters: ["种", "花", "急", "死", "水", "草"]
  },
  {
    idiom: "盲人摸象",
    pinyin: "máng rén mō xiàng",
    definition: "盲人摸大象。比喻对事物了解不全面，只凭局部的印象就下结论。",
    origin: "几个盲人第一次摸大象，摸到牙齿的说是萝卜，摸到耳朵的说是扇子，摸到腿的说是柱子，大家争论不休。",
    example_sentence: "在没有了解整件事情之前，不要像盲人摸象一样盲目发表意见。",
    visual_prompt: "A bright children's art depiction of four blindfolded men standing around a friendly giant elephant, each touching a different part: one feeling the trunk, one holding the big ear like a fan, one touching the leg like a pillar.",
    distractor_characters: ["看", "手", "腿", "扇", "柱", "闻"]
  },
  {
    idiom: "对牛弹琴",
    pinyin: "duì niú tán qín",
    definition: "对着牛弹奏琴曲。比喻对不懂道理的人讲道理，或者说话不看对象。",
    origin: "古代音乐家公明仪给牛弹奏高雅的琴曲，牛根本不理会，继续低头吃草。",
    example_sentence: "他根本不懂电脑技术，你跟他解释代码简直是对牛弹琴。",
    visual_prompt: "A cheerful illustration of an ancient Chinese musician sitting on a green grass hill playing an ancient zither (guqin) with great expression, while a large spots-and-white cow right in front of him ignores him and chews grass calmly.",
    distractor_characters: ["听", "唱", "马", "草", "鼓", "叫"]
  },
  {
    idiom: "叶公好龙",
    pinyin: "yè gōng hào lóng",
    definition: "叶公表面上非常喜欢龙，真龙来了却被吓得要命。比喻表面上爱好某种事物，实际上并不是真正喜欢。",
    origin: "叶公很喜欢龙，家里到处画着龙。天上的真龙听说后很感动，亲自降临到他家，叶公却吓得面无人色，拔腿就跑。",
    example_sentence: "他说自己热爱户外探险，结果刚看到一只小蜘蛛就吓得尖叫，真是叶公好龙。",
    visual_prompt: "A lively scene showing a Chinese scholar's room decorated with dragon drawings; out the window, a large, friendly-looking Chinese golden dragon pokes its head in, while the man falls backward off his chair in absolute terror.",
    distractor_characters: ["怕", "跑", "喜", "蛇", "神", "画"]
  },
  {
    idiom: "闻鸡起舞",
    pinyin: "wén jī qǐ wǔ",
    definition: "听到鸡啼声就起床拔剑练武。比喻有志向的人及时奋发努力。",
    origin: "晋朝人祖逖和刘琨非常有抱负，每天半夜听到公鸡鸣叫，就立刻起床练习剑术，最终都成为了国家的大将军。",
    example_sentence: "要想在比赛中取得好成绩，我们就得有闻鸡起舞的刻苦精神。",
    visual_prompt: "An inspirational children's book scene set at dawn with a dark blue sky turning orange. A rooster crows on a fence while a brave young boy practices sword movements with great energy in the yard.",
    distractor_characters: ["练", "剑", "早", "叫", "飞", "晨"]
  },
  {
    idiom: "雪中送炭",
    pinyin: "xuě zhōng sòng tàn",
    definition: "下雪天给别人送去取暖的木炭。比喻在别人最困难的时候给予及时的帮助。",
    origin: "古人在下雪天寒冷难耐时，有人主动送来烧火取暖的木炭，让人感到无比温暖。",
    example_sentence: "在我最缺乏资金的时候，他借给我这笔钱，真是雪中送炭啊。",
    visual_prompt: "A cozy, heartwarming winter illustration. Outside a small snow-covered wooden cottage, a kind child wearing a red scarf hands a basket of glowing red hot charcoal to a cold, smiling friend.",
    distractor_characters: ["冷", "冰", "火", "给", "帮", "暖"]
  },
  {
    idiom: "杯弓蛇影",
    pinyin: "bēi gōng shé yǐng",
    definition: "把酒杯里弓箭的倒影误以为是小蛇。比喻疑神疑鬼，自己吓唬自己。",
    origin: "有人请客喝酒，客人看到酒杯里好像有一条小蛇，回家后就病倒了。后来才知道是墙上挂着的弓映在酒杯里的倒影。",
    example_sentence: "墙上只是衣服的影子，你别杯弓蛇影，吓唬自己了。",
    visual_prompt: "A suspenseful yet kid-friendly close-up showing a young boy staring wide-eyed at a small teacup on a wooden table. Inside the cup's reflection, the shadow of a bow hanging on the wall behind him looks just like a tiny snake.",
    distractor_characters: ["酒", "怕", "吓", "看", "喝", "水"]
  },
  {
    idiom: "自相矛盾",
    pinyin: "zì xiāng máo dùn",
    definition: "自己的言行互相抵触。比喻说话做事前后不一致。",
    origin: "一个人卖矛和盾，说他的矛最尖锐什么都能刺穿，又说他的盾最坚固什么都刺不透。别人问：'用你的矛刺你的盾会怎么样？'他回答不上来。",
    example_sentence: "你刚才说没去过公园，现在又说公园的花很美，这不是自相矛盾吗？",
    visual_prompt: "A funny market scene illustration where an ancient merchant holds a sharp spear in one hand and a thick shield in the other, looking completely embarrassed and sweating while a crowd of kids laughs around him.",
    distractor_characters: ["打", "刺", "破", "卖", "说", "铁"]
  },
  {
    idiom: "千钧一发",
    pinyin: "qiān jūn yī fà",
    definition: "用一根头发吊起千钧重的物体。比喻情况极其危险、十分紧迫。",
    origin: "古人用'钧'作为重量单位（一钧约30斤），千钧极其沉重。用单单一条头发挂住它，随时都会折断。",
    example_sentence: "在千钧一发的时刻，消防员勇敢地冲进火场救出了小女孩。",
    visual_prompt: "A dramatic yet cartoonish illustration of a tiny single strand of glowing hair holding up a colossal, heavy black anvil/boulder mid-air, right above the ground, looking about to snap.",
    distractor_characters: ["重", "危", "断", "挂", "石", "拉"]
  },
  {
    idiom: "老马识途",
    pinyin: "lǎo mǎ shí tú",
    definition: "年老的马能够认识走过的道路。比喻富有经验的人熟悉情况，能起引导作用。",
    origin: "管仲随军队出征迷失了方向。他建议放出几匹老马，军队跟着老马走，果然找到了出山的路。",
    example_sentence: "有老马识途的大队长带路，我们很快就在森林里找到了营地。",
    visual_prompt: "An adventurous storybook illustration of a wise old brown horse with a white mane leading a group of smiling young travelers along a winding trail through a dense, foggy forest.",
    distractor_characters: ["走", "路", "带", "山", "跑", "人"]
  },
  {
    idiom: "水滴石穿",
    pinyin: "shuǐ dī shí chuān",
    definition: "水滴不断地下落，时间长了能把石头滴穿。比喻只要坚持不懈，微小的力量也能做出巨大的成绩。",
    origin: "张乖崖在做县令时看到小偷拿了一钱公款，小偷不服说这点钱不算什么。县令说：'一日一钱，千日千钱；绳锯木断，水滴石穿。'",
    example_sentence: "只要每天坚持练习跳绳，水滴石穿，你一定能拿到好名次。",
    visual_prompt: "A detailed, stylized close-up of clear blue water droplets falling rhythmically from a cave roof, hitting a smooth grey rock below, where a neat round hole has been worn through the center over time.",
    distractor_characters: ["山", "破", "落", "坚", "持", "洞"]
  },
  {
    idiom: "三顾茅庐",
    pinyin: "sān gù máo lú",
    definition: "三次去茅草屋拜访。比喻诚心诚意地一再邀请或拜访别人。",
    origin: "三国时期，刘备为了请诸葛亮出山相助，亲自带人连续三次前往诸葛亮居住的茅草屋拜访，最终打动了诸葛亮。",
    example_sentence: "为了邀请这位专家来学校做讲座，校长三顾茅庐，终于感动了他。",
    visual_prompt: "A heartwarming ancient scene showing a noble general (Liu Bei) in fancy robes standing respectfully in snowy weather outside a cozy straw hut (thatched cottage), knocking gently on the wooden door with his two brothers.",
    distractor_characters: ["找", "请", "房", "山", "走", "看"]
  },
  {
    idiom: "鹏程万里",
    pinyin: "péng chéng wàn lǐ",
    definition: "传说中的大鹏鸟能飞万里高空。比喻前程非常远大，前途无量。",
    origin: "《庄子》中记载，北方有一只叫鹏的大鸟，拍打翅膀就能乘着风飞上几万里的高空。",
    example_sentence: "在毕业典礼上，老师祝福大家鹏程万里，实现各自的梦想。",
    visual_prompt: "A breathtaking fantasy children's book illustration showing a magnificent giant mythical bird with golden wings flying majestically high above clouds and mountains into a glowing sunset sky.",
    distractor_characters: ["飞", "鸟", "高", "天", "云", "远"]
  }
];
