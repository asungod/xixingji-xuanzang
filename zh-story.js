// 西行记 · 中文说书层（二次创作，非开源原文）
// 古地名用简体；今地名用当代中国通行写法（西安，不是 xian / Xi'an）。
// 朱批：红笔史实（《大唐西域记》《慈恩传》），墨批演义（《西游记》对照）。

const zhStory = {
    1: {
        ancient: '长安',
        modern: '西安',
        modernFull: '西安，陕西，中国',
        country: '中国',
        duration: '西行起点',
        yearLabel: '贞观三年（公元 629 年）',
        phase: '出关 · 河西',
        quote: '宁可就西而死，不归东而生。',
        benshi: '唐都长安。二十七岁的僧人玄奘，因经义纷争、梵本难求，不顾朝廷禁令，夜里出城西行。他不是奉旨取经的御弟，是私自上路的求法僧。十七年、五万余里，从这里走出去。',
        fayuan: '长安佛寺林立，慈恩寺后来因他而建。其时各宗所据译本不同，争论无已，这才逼他非去天竺不可。',
        qinli: '夜里出城，死罪可免、活罪难逃。沿途官吏有人睁一只眼，他才出得去。出城那一刻，长安灯火在身后，前路只有沙与夜。',
        dangshi: '太宗刚定天下，西行仍在禁列。佛教虽盛，真梵本极少。他后来写成的《大唐西域记》，把这条路变成中国人自己的世界地理。',
        zhupi: {
            shi: '史实：违禁私行，并非太宗钦差。',
            yi: '演义：《西游记》写成御弟赐紫、奉旨取经。小说把禁令改成了敕命。'
        }
    },
    2: {
        ancient: '凉州',
        modern: '武威',
        modernFull: '武威，甘肃，中国',
        country: '中国',
        duration: '约一月',
        yearLabel: '贞观三年春夏',
        phase: '出关 · 河西',
        benshi: '河西走廊东口。玄奘在此停留约一月，访寺问道，打听沙漠水泉。凉州是出关前最后一座大城，再往西，官驿渐稀。',
        fayuan: '凉州当中原与西域之间，寺里汉僧、胡僧都有。他在此补抄经卷，也听商队讲沙窝里迷路的故事。',
        qinli: '仍是偷偷走。当地僧人藏他、供他。有老僧送他一张画着水泉的草图——后来在莫贺延碛里，这张图比经书更救命。',
        dangshi: '凉州是唐军镇守河西的重镇。禁令未弛，过此即入更难管束的走廊。',
        zhupi: {
            shi: '史实：出关前在凉州备粮问路，约停一月。',
            yi: '演义：小说几乎不写凉州，把艰难都堆到了流沙与火焰山。'
        }
    },
    3: {
        ancient: '敦煌',
        modern: '敦煌',
        modernFull: '敦煌，甘肃，中国',
        country: '中国',
        duration: '约一月',
        yearLabel: '贞观三年夏',
        phase: '出关 · 河西',
        quote: '四顾茫然，人马俱绝。',
        benshi: '沙洲敦煌，西域门户。莫高窟的石窟还在开凿、壁画还在被路过的僧人添上一笔。玄奘在此备水、备粮，然后走进莫贺延碛——八百里无人烟。',
        fayuan: '莫高窟已是丝路佛光最亮的一处。汉、胡、梵的画风叠在同一面墙上。他走前在窟前礼佛，等于向这条路的前贤告别。',
        qinli: '有人劝他回头。他说宁可西死，不东生。出敦煌后迷路、缺水，几乎死在沙里，靠所剩的一点水和一口决心才摸到伊吾。',
        dangshi: '敦煌是唐帝国西缘的大都会，商队、使节、僧人在此分南北两道。',
        zhupi: {
            shi: '史实：出沙洲入碛，险些渴死，见《慈恩传》。',
            yi: '演义：流沙河、八百里黄风，都从这段戈壁里长出来。'
        }
    },
    4: {
        ancient: '伊吾',
        modern: '哈密',
        modernFull: '哈密，新疆，中国',
        country: '中国',
        duration: '约半月',
        yearLabel: '贞观三年秋',
        phase: '出关 · 河西',
        benshi: '碛西第一座绿洲。玄奘拖着几乎走不动的身子进了伊吾。国王听说有唐僧活着穿过大漠，把人接到帐里，给水、给粮、给歇处。',
        fayuan: '伊吾佛寺不大，却是过碛人的驿站。僧人见过太多半死不活的行脚，供养是日常，不是典礼。',
        qinli: '十二日独行，迷路、渴极、夜见磷火。进伊吾那几天，他睡的是几天来第一回安稳觉。',
        dangshi: '伊吾是绿洲小国，周旋于唐与北面诸部之间。谁来都要接待，商路才不断。',
        zhupi: {
            shi: '史实：过碛濒死，伊吾王救起，见《慈恩传》。',
            yi: '演义：小说把沙漠写成有精有怪；史实里，对手只有渴与迷路。'
        }
    },
    5: {
        ancient: '高昌',
        modern: '吐鲁番',
        modernFull: '吐鲁番，新疆，中国',
        country: '中国',
        duration: '约两月',
        yearLabel: '贞观三年冬至四年',
        phase: '西域 · 天山南路',
        benshi: '高昌王麹文泰听说唐僧到了，郊迎十里，待为上宾，甚至想留他永住，为高昌国师。玄奘绝食求去。王终于放行，赠马、赠衣、赠二十四封过所文书。',
        fayuan: '高昌佛事极盛，伯孜克里克石窟就在近旁。汉风与西域风在此交会，是他出关后见到的第一座真正的佛国。',
        qinli: '被优待反而走不了，比沙漠更难。绝食数日，王才哭着答应。那二十四封信，后来一路当通行证。',
        dangshi: '高昌是天山南路的枢纽。数年后唐灭高昌，那是后话；此刻它还是独立的佛国。',
        zhupi: {
            shi: '史实：麹文泰挽留，玄奘绝食，王资遣西行。',
            yi: '演义：火焰山地望正在吐鲁番一带。小说里的芭蕉扇，扇的是这座盆地的热风。'
        }
    },
    6: {
        ancient: '龟兹',
        modern: '库车',
        modernFull: '库车，新疆，中国',
        country: '中国',
        duration: '约两月',
        yearLabel: '贞观四年',
        phase: '西域 · 天山南路',
        benshi: '龟兹是西域乐舞与佛寺并盛的古国。鸠摩罗什从这里走向长安；玄奘反向而行，在此停留约两月，看克孜尔石窟，对勘不同传本。',
        fayuan: '龟兹小乘、大乘皆有，石窟壁画里的乐伎，后来进了唐人的坐部伎。佛与乐在同一座城里。',
        qinli: '王以礼相待，安排他住大寺。他第一次系统看到印度经由西域改写过的佛像与经本，知道中原所见并非全部。',
        dangshi: '七世纪龟兹仍能自守，丝路北道的财货与音乐都经此东去。',
        zhupi: {
            shi: '史实：停龟兹问学，记其寺窟与乐舞。',
            yi: '演义：小说不写龟兹。真正把西域写进中国人日常的，是这些乐与像，不是妖怪。'
        }
    },
    7: {
        ancient: '姑墨',
        modern: '阿克苏',
        modernFull: '阿克苏，新疆，中国',
        country: '中国',
        duration: '约半月',
        yearLabel: '贞观四年春夏',
        phase: '西域 · 天山南路',
        benshi: '北道上一座较小的绿洲。玄奘在此歇脚补装，打听逾越天山的路径。再往西，就要翻山进入西突厥的地面。',
        fayuan: '寺不多，僧人却熟路。他们告诉他哪条达坂能过、哪条雪谷要等。',
        qinli: '半月很短，用来修鞋、抄经、把高昌王的信再读一遍。山在西边，已经能看见。',
        dangshi: '姑墨常依龟兹，是北道补给点，不是大国。',
        zhupi: {
            shi: '史实：北道短停，为逾天山做准备。',
            yi: '演义：小说略过此城。西行不是一跳到西天，是一站一站把水袋灌满。'
        }
    },
    8: {
        ancient: '碎叶城',
        modern: '托克马克',
        modernFull: '托克马克，吉尔吉斯斯坦',
        country: '吉尔吉斯斯坦',
        duration: '约一月',
        yearLabel: '贞观四年夏',
        phase: '中亚 · 逾葱岭',
        benshi: '西突厥可汗庭所在的碎叶。玄奘翻过天山达坂，高寒、缺氧、路断，才走进这座胡汉商旅杂处的大城。可汗以客礼见他。',
        fayuan: '佛寺、祆祠、景教教堂同在一城。丝路不是一条教的路，是许多路叠在一起。',
        qinli: '翻山那二十日比过碛另一种苦。进城以后，他才知道中原以西还有另一种天下。',
        dangshi: '西突厥正盛，碎叶是其牙帐之一。唐与突厥的外交，日后会改写这条路的归属。',
        zhupi: {
            shi: '史实：至碎叶见西突厥，记其城与诸教并存。',
            yi: '演义：小说把西行写成一条向西的直线；史实要北绕碎叶，才能再折向西南。'
        }
    },
    9: {
        ancient: '石国',
        modern: '塔什干',
        modernFull: '塔什干，乌兹别克斯坦',
        country: '乌兹别克斯坦',
        duration: '约一月',
        yearLabel: '贞观四年夏秋',
        phase: '中亚 · 逾葱岭',
        benshi: '石国，粟特商胡的大城。玄奘在此看到佛寺与祆祠并立，商队比僧队更喧闹。他记下这座城的风土，也看出佛教在中亚已经不是唯一的声音。',
        fayuan: '佛寺仍在，多是过路僧的落脚处。本地更盛的是粟特人的祆教与商神。',
        qinli: '他第一次长时间处在「佛不是城里最大的事」的地方。这让他更急着到天竺去看源头。',
        dangshi: '石国周旋于突厥与波斯之间，靠贸易活命。',
        zhupi: {
            shi: '史实：记石国风土与多教并存。',
            yi: '演义：小说不写塔什干。史书里的西域，比一个西天要大得多。'
        }
    },
    10: {
        ancient: '康国',
        modern: '撒马尔罕',
        modernFull: '撒马尔罕，乌兹别克斯坦',
        country: '乌兹别克斯坦',
        duration: '约一月',
        yearLabel: '贞观四年秋至五年',
        phase: '中亚 · 逾葱岭',
        benshi: '康国即飒秣建，粟特腹心。玄奘记下王礼、市集、祆祠，也记下佛寺已经凋零。再往南，才是吐火罗与印度的方向。',
        fayuan: '佛教在此已退到角落。他不是来朝圣的，是来目击：法不常住，有国盛有国衰。',
        qinli: '被以客礼接待。他在札记里写得冷静——越冷静，越坚定要去那烂陀。',
        dangshi: '康国是粟特商网的心脏，东到长安、西到波斯，都有康国人的脚印。',
        zhupi: {
            shi: '史实：记飒秣建，佛寺已衰、祆祠正盛。',
            yi: '演义：小说把「西天」写成一个点；《西域记》写成一片正在变化的世界。'
        }
    },
    11: {
        ancient: '缚喝',
        modern: '巴尔赫',
        modernFull: '巴尔赫，阿富汗',
        country: '阿富汗',
        duration: '约三月',
        yearLabel: '贞观五年',
        phase: '中亚 · 逾葱岭',
        benshi: '缚喝号称小王舍城，大寺纳缚僧伽蓝，僧徒数千。玄奘在此停留约三月，把中亚佛教学到一个段落，再准备入雪山。',
        fayuan: '大乘、小乘同寺。这里是他进入北印度之前最重要的问学处之一。',
        qinli: '三月不是观光，是上课。他开始按天竺的方式讨论对法，为那烂陀做预习。',
        dangshi: '缚喝是大夏故地，城极古。七世纪时，它仍是中亚佛光最后的亮处之一。',
        zhupi: {
            shi: '史实：停缚喝大寺问学，见《西域记》。',
            yi: '演义：小说无此城。没有这些「无名」的学寺，就没有后来的译经。'
        }
    },
    12: {
        ancient: '梵衍那',
        modern: '巴米扬',
        modernFull: '巴米扬，阿富汗',
        country: '阿富汗',
        duration: '约半月',
        yearLabel: '贞观六年春',
        phase: '中亚 · 逾葱岭',
        benshi: '山谷里两尊大佛，一立一坐，玄奘亲眼量过、记下尺寸与金饰。一千多年后大佛被毁，他的这段文字成了最重要的目击档案。',
        fayuan: '窟寺环山，僧徒数千。大佛不是景点，是一城人的礼拜中心。',
        qinli: '他在窟中坐过。后来写《西域记》，把高度、颜色、仪式写得像给没到过的人画一张图。',
        dangshi: '梵衍那是逾大雪山前的佛国。唐以后道路改、信仰改，大佛仍立到二十一世纪。',
        zhupi: {
            shi: '史实：详记巴米扬大佛，是现存最早的完整目击之一。',
            yi: '演义：小说不写大佛。中国人关于西天的想象，有一页其实是这两尊石头。'
        }
    },
    13: {
        ancient: '迦毕试',
        modern: '喀布尔一带',
        modernFull: '喀布尔一带，阿富汗',
        country: '阿富汗',
        duration: '约一月',
        yearLabel: '贞观六年',
        phase: '中亚 · 逾葱岭',
        benshi: '迦毕试当雪山与印度之间。玄奘在此休整，打听健驮逻的路。再往东南，就是他在长安夜里想了无数遍的天竺。',
        fayuan: '寺多，僧从各方来。这里是把中亚与北印度缝在一起的针脚。',
        qinli: '翻山后来此，人已经很瘦。他写信、换装、问路，像把整个身心换成「要进印度」的版本。',
        dangshi: '迦毕试控商路，地方王靠过路的人吃饭，也靠过路的人传话。',
        zhupi: {
            shi: '史实：入印前在迦毕试停留问道。',
            yi: '演义：小说一过火焰山就近西天；史实还要再翻一座雪山。'
        }
    },
    14: {
        ancient: '布路沙布逻',
        modern: '白沙瓦',
        modernFull: '白沙瓦，巴基斯坦',
        country: '巴基斯坦',
        duration: '约一月',
        yearLabel: '贞观六年夏',
        phase: '天竺 · 求法',
        benshi: '健驮逻故都。佛像在这里第一次长出希腊式的脸与衣褶。玄奘巡礼塔寺，记下迦腻色迦大塔，等于走进中国佛像的老家。',
        fayuan: '千寺犹在，却已不如往昔。大乘、说一切有部在此都有根。',
        qinli: '他走得兴奋而心惊：源头比想象的更残、更杂、也更真。',
        dangshi: '贵霜已衰，健驮逻仍是亚洲艺术史的枢纽。',
        zhupi: {
            shi: '史实：记健驮逻塔寺与迦腻色迦遗迹。',
            yi: '演义：唐人画出的佛，骨子里有一张健驮逻的脸。小说不讲，美术史讲。'
        }
    },
    15: {
        ancient: '呾叉始罗',
        modern: '塔克西拉',
        modernFull: '塔克西拉，巴基斯坦',
        country: '巴基斯坦',
        duration: '约两月',
        yearLabel: '贞观六年至七年',
        phase: '天竺 · 求法',
        benshi: '呾叉始罗是南亚最古老的学城之一。玄奘在此停留约两月，修对法、习因明，把「巡礼」换成「上课」。',
        fayuan: '寺学仍在，规模已不如孔雀、贵霜之时。但它仍是北印度的学术门口。',
        qinli: '他在僧坊过日常：听讲、辩论、抄本。那烂陀的节奏，在这里先试了一遍。',
        dangshi: '七世纪此地政治已碎，学问还在。商路仍走旧日的大道。',
        zhupi: {
            shi: '史实：在呾叉始罗就学，为那烂陀做准备。',
            yi: '演义：取经不是到了就取走，是一城一城把学问读完。'
        }
    },
    16: {
        ancient: '迦湿弥罗',
        modern: '斯利那加',
        modernFull: '斯利那加，克什米尔，印度',
        country: '印度',
        duration: '约两年',
        yearLabel: '贞观七年至九年',
        phase: '天竺 · 求法',
        benshi: '玄奘在迦湿弥罗一住两年。雪季不能走，正好闭门读对法、抄孤本。国王供养，大德与他往复问难。这是西行里最长的一段「静」。',
        fayuan: '此地以说一切有部之学闻名，对法大论多从此出。没有这两年，后面的那烂陀会吃力得多。',
        qinli: '山里冬天极长。他把长安带出来的疑问，一张一张摊在桌上对。',
        dangshi: '迦湿弥罗相对安定，王室仍护佛。山挡住了平原上的许多乱。',
        zhupi: {
            shi: '史实：停两年专攻对法，见《慈恩传》。',
            yi: '演义：小说爱写打，不爱写读。真正的取经，有两年是在雪里翻书。'
        }
    },
    17: {
        ancient: '秣菟罗',
        modern: '马图拉',
        modernFull: '马图拉，北方邦，印度',
        country: '印度',
        duration: '约一月',
        yearLabel: '贞观九年秋',
        phase: '天竺 · 求法',
        benshi: '秣菟罗曾是佛像的另一处故乡，此时印度教已更盛。玄奘巡礼残寺，记下盛衰，再沿河走向曲女城。',
        fayuan: '寺约二十，僧约二千，已不是当年的中心。佛像的另一种脸——秣菟罗式——从这里传到东方。',
        qinli: '他在残垣里看出时间：法会迁，像还在。',
        dangshi: '城属戒日王势力范围，商路沿朱木拿河仍热闹。',
        zhupi: {
            shi: '史实：记秣菟罗寺像与佛教已衰。',
            yi: '演义：西天不是一座永远金光的庙，是一座会变迁的次大陆。'
        }
    },
    18: {
        ancient: '曲女城',
        modern: '卡瑙季',
        modernFull: '卡瑙季，北方邦，印度',
        country: '印度',
        duration: '约一月',
        yearLabel: '贞观九年冬',
        phase: '天竺 · 求法',
        benshi: '戒日王的都城。王闻唐僧之名，以礼延请。北印度这几年的政治中心、佛教外护，都在这座城里。玄奘第一次得到一位印度帝王的长期照应。',
        fayuan: '王城寺多，大会常常在此召集。没有戒日王，他后几年的游学不会这么顺。',
        qinli: '从偷偷出关的僧人，变成被印度大王客待的论师——他自己都觉得像换了一世。',
        dangshi: '戒日王是七世纪北印度最后的大统一者之一，对佛、对其他宗教都肯花钱。',
        zhupi: {
            shi: '史实：见戒日王，得王护持。',
            yi: '演义：太宗在东土「送行」；真正在西土护着他的，是戒日王。'
        }
    },
    19: {
        ancient: '波罗奈斯',
        modern: '瓦拉纳西',
        modernFull: '瓦拉纳西，北方邦，印度',
        country: '印度',
        duration: '约一月',
        yearLabel: '贞观十年春',
        phase: '天竺 · 求法',
        benshi: '恒河边的古城。城中印度教更盛，城外鹿野苑仍是佛初转法轮处。玄奘在苑中绕塔、抄铭、听本地僧人讲「就是在这里」。',
        fayuan: '鹿野苑寺数十，僧约三千。初转法轮的塔与阿育王柱，是佛教地理的原点之一。',
        qinli: '他在此不是辩论，是礼拜。走了七年，终于站到课本第一页的那块地上。',
        dangshi: '城属戒日王治下，香客与商船在恒河里并行。',
        zhupi: {
            shi: '史实：巡礼鹿野苑，记初转法轮遗迹。',
            yi: '演义：小说里的「西天」是雷音寺；史实里，法是从这座苑里转起来的。'
        }
    },
    20: {
        ancient: '摩揭陀',
        modern: '菩提伽耶',
        modernFull: '菩提伽耶，比哈尔邦，印度',
        country: '印度',
        duration: '约三月',
        yearLabel: '贞观十一年',
        phase: '天竺 · 求法',
        quote: '如来于此处成等正觉。',
        benshi: '菩提伽耶，佛成道处。金刚座、菩提树、大塔，玄奘在此停留约三月，绕行、坐禅、把每一处铭文抄下来。西行的心，在这里最静。',
        fayuan: '佛教第一圣地。树是前树的子孙，座是阿育王以来的纪念。天下僧人来此，都把这里当作「源头的源头」。',
        qinli: '他五体投地。三个月里，取经的「取」暂时让位给「证」——不是要证明自己，是要记住这片地。',
        dangshi: '摩揭陀故地，圣地靠各方布施维持。七世纪这里仍是亚洲朝圣的圆心。',
        zhupi: {
            shi: '史实：在菩提伽耶坐夏、详记成道处。',
            yi: '演义：小说把圣地收进「雷音」一座寺；史实是一棵树、一处金刚座、一片 Magadha。'
        }
    },
    21: {
        ancient: '那烂陀寺',
        modern: '那烂陀',
        modernFull: '那烂陀，比哈尔邦，印度',
        country: '印度',
        duration: '约五年',
        yearLabel: '贞观十一年至十六年',
        phase: '天竺 · 求法',
        quote: '僧徒数万，并俊才高学也。',
        benshi: '那烂陀是古代世界最大的僧寺学府。玄奘依止戒贤，五年听瑜伽、因明、声明，抄经、辩论，声名传到戒日王那里。他要带回长安的六百余部梵本，多在此集齐。',
        fayuan: '寺有八院、藏书极富，来自汉地、南海、吐蕃的学僧都有。大乘瑜伽行派的正脉，在此可以按日课学完。',
        qinli: '从行脚客变成「三藏」。日常是听讲、问难、抄叶。离开时，行李是经、是像、是舍利，也是一整套可以在长安开课的方法。',
        dangshi: '那烂陀靠王朝供养运转。它后来毁于战火；玄奘的记录，成了这所学府最完整的一幅画像。',
        zhupi: {
            shi: '史实：依戒贤学五年，为西行学业的高峰。',
            yi: '演义：大雷音寺的底本，与其说是一座神山，不如说是这所还在上课的大学。'
        }
    },
    22: {
        ancient: '波吒釐子城',
        modern: '巴特那',
        modernFull: '巴特那，比哈尔邦，印度',
        country: '印度',
        duration: '约一月',
        yearLabel: '贞观十六年',
        phase: '载经 · 东归',
        benshi: '故华氏城，孔雀、笈多的旧都。玄奘在此访阿育王遗迹，补抄那烂陀未尽之叶，开始把「求法」转成「载经」。',
        fayuan: '第三次结集传说在此。寺已不如古，碑与柱还在。',
        qinli: '五年课业刚完，他沿河走，像把印度的历史再温一遍，才肯回头。',
        dangshi: '城已不是帝国首都，仍是恒河上的大码头。',
        zhupi: {
            shi: '史实：访华氏城阿育王遗迹，补抄经本。',
            yi: '演义：取经「取到了」不是结束，是开始往东搬。'
        }
    },
    23: {
        ancient: '建志补罗',
        modern: '甘吉布勒姆',
        modernFull: '甘吉布勒姆，泰米尔纳德邦，印度',
        country: '印度',
        duration: '约两月',
        yearLabel: '贞观十六年至十七年',
        phase: '载经 · 东归',
        benshi: '南印度的学问城。玄奘南行至此，为的是因明与别派。这是他走得最南的一站，也是把「全印度」补完整的一笔。',
        fayuan: '陈那的因明传统在南印极深。寺百余，僧以万计，大乘小乘并盛。',
        qinli: '热、语言、饮食都与北印不同。他在此把逻辑学再加厚一层，才折回北路。',
        dangshi: '时为帕拉瓦王朝盛期，海上已通东南亚。南印的佛，会继续往东走，走得比玄奘更远。',
        zhupi: {
            shi: '史实：南行建志，问因明，为行程最南端。',
            yi: '演义：西天不是长安正西。地图一摊，才知道他还去过南印。'
        }
    },
    24: {
        ancient: '曲女城',
        modern: '卡瑙季',
        modernFull: '卡瑙季，北方邦，印度',
        country: '印度',
        duration: '约三月',
        yearLabel: '贞观十七年',
        phase: '载经 · 东归',
        benshi: '东归前，戒日王为他开无遮大会。十八日，玄奘立宗答辩，无有能破。这是他在印度作为论师的公开课，也是离开前的告别。',
        fayuan: '大会集僧俗数万。大乘的义，在此被放到整个北印度的耳朵里。',
        qinli: '从偷渡僧到主讲人。他知道该回家了——不是逃，是把五年加两年的课带回去。',
        dangshi: '戒日王晚年仍有力召集这样的会。再往后，北印度的政治地图就会改。',
        zhupi: {
            shi: '史实：曲女城无遮大会，玄奘立宗，见《慈恩传》。',
            yi: '演义：灵山印心是小说的高潮；史实的高潮是一场公开的辩论。'
        }
    },
    25: {
        ancient: '迦湿弥罗',
        modern: '斯利那加',
        modernFull: '斯利那加，克什米尔，印度',
        country: '印度',
        duration: '约三月',
        yearLabel: '贞观十七年',
        phase: '载经 · 东归',
        benshi: '东归再入迦湿弥罗，整理经夹，选择北路。出印度不是原路退回，是换一条更能走驮队的线。',
        fayuan: '旧识还在。他把那烂陀的所得与此地的对法再合一次。',
        qinli: '行李已重：贝叶、佛像、舍利。从此每一步都要护着这批东西。',
        dangshi: '山路季节很短，错过一场雪就要再等一年。',
        zhupi: {
            shi: '史实：东归取北道，在迦湿弥罗整装。',
            yi: '演义：取经回来的路上，小说仍在打怪；史实在保护书。'
        }
    },
    26: {
        ancient: '疏勒',
        modern: '喀什',
        modernFull: '喀什，新疆，中国',
        country: '中国',
        duration: '约一月',
        yearLabel: '贞观十八年',
        phase: '载经 · 东归',
        benshi: '再入故唐西缘的疏勒。玄奘在此歇驮队，算一算还剩多少路才能把梵本送进长安。葱岭已经在身后。',
        fayuan: '疏勒佛寺仍盛，是南道与北道的交会。东归的僧人在此能说汉语了。',
        qinli: '听人讲汉地的话，他才真觉得「在往家走」。经夹在骆驼上，比人金贵。',
        dangshi: '疏勒当帕米尔东口，唐在西域的经营正在加强。',
        zhupi: {
            shi: '史实：东归入疏勒，见《西域记》疏勒国。',
            yi: '演义：出关难，回家也难。小说把回家写成腾云，史实是一站一站护着书。'
        }
    },
    27: {
        ancient: '于阗',
        modern: '和田',
        modernFull: '和田，新疆，中国',
        country: '中国',
        duration: '约一月',
        yearLabel: '贞观十八年',
        phase: '载经 · 东归',
        benshi: '南道佛国于阗。玄奘不走来时的北道，改走于阗，为的是另一条更稳的驮路，也把南道风土补进《西域记》。',
        fayuan: '于阗以大乘闻名，佛画与玉一样出名。东归的人在此能得到补给和向导。',
        qinli: '他给太宗上表——出关时是犯人，现在要以取经僧的身份通知朝廷：我回来了。',
        dangshi: '于阗是南道枢纽。玉、佛、商队，三条线在此交。',
        zhupi: {
            shi: '史实：东归取于阗南道，并上表朝廷。',
            yi: '演义：私自出关的人，要用一驮贝叶换一张合法的归途。'
        }
    },
    28: {
        ancient: '敦煌',
        modern: '敦煌',
        modernFull: '敦煌，甘肃，中国',
        country: '中国',
        duration: '约一月',
        yearLabel: '贞观十八年',
        phase: '载经 · 东归',
        benshi: '再入敦煌。出关时两手空空，回来时驮着经、像、舍利。沙洲还是沙洲，人已经不是出关那一个。',
        fayuan: '莫高窟仍在。他此行所见的西天形象，会在往后的壁画里慢慢回来。',
        qinli: '河西的风是熟的。他在此等朝廷的回音，也整理一路的笔记。',
        dangshi: '东归已近唐境腹地，驿路重新变得密。',
        zhupi: {
            shi: '史实：东归再经敦煌，整队入河西。',
            yi: '演义：出关的敦煌是鬼门；回来的敦煌是家门口。'
        }
    },
    29: {
        ancient: '长安',
        modern: '西安',
        modernFull: '西安，陕西，中国',
        country: '中国',
        duration: '西行终点',
        yearLabel: '贞观十九年春（公元 645 年）',
        phase: '载经 · 东归',
        quote: '所将经像，无遗无缺。',
        benshi: '贞观十九年春，玄奘还都。太宗在洛阳见他，问西域事，命他写《大唐西域记》。此后十九年，他在慈恩译场把梵本译成汉语。西行结束，他把西边写成了可以核对的地理，不是一条单向的传奇。',
        fayuan: '大慈恩寺、译场、弟子。中国佛教的许多宗派，都要从这批译本里找根。',
        qinli: '出城是夜里偷偷走，进城是万人看经像。他没有把路走成神话，他把路写成了地理与目录。',
        dangshi: '朝廷需要西域情报，僧团需要新译本。一个人的私行，变成了国家的文化工程。',
        zhupi: {
            shi: '史实：贞观十九年还京，献经像，奉敕撰《西域记》，开译场。',
            yi: '演义：《西游记》让师徒成了神；《西域记》让中国人看见了真实的西边。本作品要讲的，是后面这一层。'
        }
    }
};

function getZhStation(id) {
    return zhStory[id] || null;
}

function getStationDisplay(location) {
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh';
    const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
    const zh = getZhStation(location.id) || {};

    if (lang === 'zh') {
        return {
            ancient: zh.ancient || location.name,
            modern: zh.modern || '',
            modernFull: zh.modernFull || '',
            country: zh.country || '',
            duration: zh.duration || location.duration,
            yearLabel: zh.yearLabel || `公元 ${location.year} 年`,
            phase: zh.phase || '',
            quote: zh.quote || '',
            benshi: zh.benshi || enhanced.description,
            fayuan: zh.fayuan || enhanced.buddhistContext || '',
            qinli: zh.qinli || enhanced.xuanzangExperience || '',
            dangshi: zh.dangshi || enhanced.historicalEvents || enhanced.historicalContext || '',
            zhupi: zh.zhupi || null,
            title: zh.ancient || location.name,
            subtitle: `今${zh.modern} · ${zh.country} · ${zh.yearLabel}`,
            duizhao: `古称${zh.ancient}，即今日${zh.modern}。`,
            mapCity: zh.ancient,
            mapModern: zh.modern,
            timelineCity: zh.ancient,
            imageCity: location.modernName.split(',')[0].trim().replace(/ /g, '_')
        };
    }

    const isVi = lang === 'vi';
    const en = (window.enStory && window.enStory[location.id]) || {};
    const phaseEn = {
        '出关 · 河西': 'Leaving the pass · Hexi',
        '西域 · 天山南路': 'Western Regions · southern Tianshan',
        '中亚 · 逾葱岭': 'Central Asia · over the Pamirs',
        '天竺 · 求法': 'India · seeking the Law',
        '载经 · 东归': 'Carrying the scriptures · return'
    };
    const modernName = isVi && enhanced.modernName_vi ? enhanced.modernName_vi : enhanced.modernName;
    const city = en.modern || (modernName || '').split(',')[0].trim();
    const country = (modernName || '').split(',').pop().trim();
    const ancient = en.ancient || enhanced.ancientName || location.name;
    return {
        ancient,
        modern: city,
        modernFull: modernName,
        country: country,
        duration: isVi && enhanced.duration_vi ? enhanced.duration_vi : enhanced.duration,
        yearLabel: `${location.year} CE`,
        phase: isVi ? '' : (phaseEn[zh.phase] || zh.phase || ''),
        quote: zh.quote || enhanced.quote || '',
        benshi: isVi
            ? (enhanced.expandedDescription_vi || enhanced.description_vi || enhanced.description)
            : (en.narration || enhanced.expandedDescription || enhanced.description),
        fayuan: isVi ? (enhanced.buddhistContext_vi || enhanced.buddhistContext) : (en.fayuan || enhanced.buddhistContext || ''),
        qinli: isVi ? (enhanced.xuanzangExperience_vi || enhanced.xuanzangExperience) : (en.qinli || enhanced.xuanzangExperience || ''),
        dangshi: isVi ? (enhanced.historicalEvents_vi || enhanced.historicalEvents) : (en.dangshi || enhanced.historicalEvents || enhanced.historicalContext || ''),
        zhupi: isVi ? null : (en.zhupi || null),
        title: ancient,
        subtitle: `${ancient}, today's ${city} · ${location.year} CE`,
        duizhao: en.duizhao || `${ancient} is today's ${city}.`,
        mapCity: ancient,
        mapModern: city,
        timelineCity: ancient,
        imageCity: location.modernName.split(',')[0].trim().replace(/ /g, '_')
    };
}

window.zhStory = zhStory;
window.getZhStation = getZhStation;
window.getStationDisplay = getStationDisplay;
