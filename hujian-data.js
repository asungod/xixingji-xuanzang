// 国际专项赛 · 互鉴读法
// 中文说明据《大唐西域记》。阿文、孟文按同一史实边界写定。
// 七世纪的城不写成当时的伊斯兰城市。

const hujianArStops = {
    9: {
        ancient: '石国',
        modern: '塔什干',
        scriptName: 'الشاش',
        alsoScript: 'طشقند',
        alsoLabel: '今名',
        alsoEn: 'modern name',
        zh: '唐史称石国，《西域记》作赭时，阿拉伯地理书称沙什。玄奘看见的是粟特商城，佛寺与祆祠并立。成为伊斯兰城市，是八世纪以后的事。',
        en: 'Tang histories call it Shi; the Records use Zheshi, Arabic geography al-Shash. Xuanzang saw a Sogdian trading city. The Islamic city comes after the eighth century.',
        ar: 'رأى شوانزانغ الشاش مدينةً تجاريةً صغدية، تقوم فيها أديرة بوذية إلى جانب بيوت النار. المدينة الإسلامية التي يعرفها القارئ جاءت بعد القرن الثامن.'
    },
    10: {
        ancient: '康国',
        modern: '撒马尔罕',
        scriptName: 'سمرقند',
        scriptLabel: '撒马尔罕',
        zh: '《西域记》里的飒秣建，佛寺凋零、祆祠正盛；阿拉伯读者熟悉的学术名城，还要再过好几百年。',
        en: 'The city Arabic readers know as Samarqand appears in the Records as a Sogdian centre where fire temples outlasted the Buddhist monasteries. Its great scholarly era came centuries later.',
        ar: 'في سجل شوانزانغ كانت سمرقند مدينةً صغدية، بقيت بيوت النار بعد أفول الأديرة البوذية. المدينة العلمية الإسلامية جاءت بعد قرون.'
    },
    11: {
        ancient: '缚喝',
        modern: '巴尔赫',
        scriptName: 'بلخ',
        scriptLabel: '巴尔赫',
        zh: '缚喝即巴尔赫。玄奘在纳缚僧伽蓝停留问学，看见的是大寺。阿拉伯传统后来称巴尔赫为「众城之母」。这个尊称属于后来的城，不属于贞观年间的那座寺院。',
        en: 'Xuanzang studied at Nava Vihara, the great monastery of Balkh. Arabic tradition later called the same city the mother of cities. That title does not belong to the monastery he saw.',
        ar: 'درس شوانزانغ في بلخ بدير نو بهار الكبير. لقب «أم البلاد» اسمٌ عربي لاحق للمدينة، ولا يصف الدير الذي رآه في القرن السابع.'
    },
    12: {
        ancient: '梵衍那',
        modern: '巴米扬',
        scriptName: 'باميان',
        scriptLabel: '巴米扬',
        zh: '梵衍那即巴米扬。玄奘记下两尊大佛的尺寸和金饰。阿拉伯语读者也认得这个山谷。这份七世纪记录出自一位中国僧人之手，早于后来的地方史。',
        en: 'Xuanzang measured the Bamiyan Buddhas and wrote down their size. Arabic readers also know the valley. This seventh-century account comes from a Chinese monk, earlier than the later local histories.',
        ar: 'وصف شوانزانغ تمثالَي بوذا في باميان ودوّن مقاسهما. هذا وصف شاهدٍ صيني من القرن السابع، لا تاريخٌ محلي كُتب لاحقًا.'
    },
    13: {
        ancient: '迦毕试',
        modern: '喀布尔一带',
        scriptName: 'كابل',
        scriptLabel: '喀布尔',
        zh: '唐名迦毕试，今人多比定在喀布尔以北的古卡比萨，与今天的喀布尔城不是同一点。阿文名通行易认，地图上仍分作两处。',
        en: 'The Tang name Kapisa is usually placed at ancient Kapisa, north of today’s Kabul; it is not the same point as the modern city. The familiar Arabic name is easy to recognise, but the map keeps them apart.',
        ar: 'كابول اليوم قريبة من كابيسا التي سمّاها شوانزانغ جيا بي شي، والاسمان لا يقعان على نقطة واحدة. لا تُرسم المدينة الحالية في موضع المدينة القديمة.'
    },
    26: {
        ancient: '疏勒',
        modern: '喀什',
        scriptName: 'كاشغر',
        scriptLabel: '喀什',
        zh: '《西域记》里的疏勒仍是佛国与驿路；喀什成为伊斯兰城市，是十至十一世纪以后的事。',
        en: 'In the Records, Shule is still a Buddhist kingdom on the post road. Kashgar became an Islamic city only from the tenth and eleventh centuries.',
        ar: 'مرّ شوانزانغ بكاشغر في طريق العودة، وكانت مملكةً بوذية على طريق البريد. إسلام المدينة جاء في القرنين العاشر والحادي عشر.'
    },
    27: {
        ancient: '于阗',
        modern: '和田',
        scriptName: 'ختن',
        scriptLabel: '和田',
        zh: '于阗即和田。《西域记》写的是大乘佛国，也是玉石南道。后来的阿拉伯地理书也记和田玉。七世纪的宗教图景仍是佛寺。',
        en: 'Khotan in the Records is a Mahayana kingdom and a jade road. Later Arabic geographers also wrote about its jade. The seventh-century religious scene is Buddhist.',
        ar: 'ختن في سجله مملكةٌ بوذية من مذهب الماهايانا، وممرٌّ لليشم. ذكر الجغرافيون العرب اليشم لاحقًا. المشهد الديني في القرن السابع أديرة بوذية.'
    }
};

// 《西域记》卷十的顺序：奔那伐弹那、迦摩缕波、三摩呾吒、耽摩栗底、羯罗拿苏伐剌那。
// 迦摩缕波在今印度阿萨姆，不放入孟加拉读法。
const hujianEastStops = [
    {
        id: 'pundra',
        ancient: '奔那伐弹那',
        scriptName: 'পুণ্ড্রবর্ধন',
        head: '今孟加拉国马哈斯坦加尔',
        today: '今孟加拉国博格拉马哈斯坦加尔',
        todayEn: 'Mahasthangarh, Bogura, Bangladesh',
        todayBn: 'মহাস্থানগড়, বগুড়া, বাংলাদেশ',
        coords: [24.9614, 89.3428],
        zh: '《西域记》卷十：奔那伐弹那周四千余里，都城周三十余里，土地卑湿，伽蓝二十余所，僧徒三千余人。今地多定为孟加拉国博格拉的马哈斯坦加尔。这一站不在二十九站主线上。玄奘看见的是佛寺，不是后来的清真寺。',
        en: 'The Records describe Pundravardhana as a low, wet country with some twenty monasteries and about three thousand monks. The site is usually placed at Mahasthangarh in Bogura, Bangladesh. It is not one of the twenty-nine stops on the main playback.',
        bn: 'পুণ্ড্রবর্ধন আজকের বগুড়ার মহাস্থানগড়। শুয়ানজাং এখানে প্রায় বিশটি বৌদ্ধ বিহার ও তিন হাজার ভিক্ষু দেখেছিলেন। এটি মূল ঊনত্রিশ স্টপের বাইরে। তিনি মসজিদ দেখেননি।'
    },
    {
        id: 'samatata',
        ancient: '三摩呾吒',
        scriptName: 'সমতট',
        head: '今地未定，库米拉一带',
        today: '今地有争议，多指孟加拉国梅格纳河与库米拉一带',
        todayEn: 'Near Comilla, Bangladesh; the capital is not settled',
        todayBn: 'কুমিল্লা–মেঘনা অঞ্চল, বাংলাদেশ',
        coords: [23.421, 91.137],
        radius: 50000,
        zh: '《西域记》从迦摩缕波南行千二三百里到三摩呾吒：周三千余里，滨近大海，地遂卑湿，伽蓝三十余所。都城今地仍有讨论。地图以库米拉一带约 50 公里范围示意，不落成单一城点。',
        en: 'Samatata lay near the sea and was low and wet, with some thirty monasteries. Scholars still debate the capital. The map shows a range of roughly 50 km around Comilla, not a fixed city point.',
        bn: 'সমতট সমুদ্রের কাছে নিচু ভেজা দেশ ছিল, বিহার ছিল প্রায় ত্রিশটি। রাজধানী ঠিক কোথায়, তা নিয়ে পণ্ডিতেরা একমত নন। কুমিল্লা–মেঘনার কাছের চিহ্ন পড়ার সাহায্য, নিশ্চিত শহর নয়।'
    },
    {
        id: 'tamralipti',
        ancient: '耽摩栗底',
        scriptName: 'তাম্রলিপ্ত',
        head: '今印度西孟加拉邦塔姆卢克',
        today: '今印度西孟加拉邦塔姆卢克',
        todayEn: 'Tamluk, West Bengal, India',
        todayBn: 'তমলুক, পশ্চিমবঙ্গ, ভারত',
        coords: [22.300, 87.922],
        zh: '书中自三摩呾吒西行九百余里到耽摩栗底。国滨海隅，水陆交会，奇珍多聚于此。今地为印度西孟加拉邦塔姆卢克，不在今天的孟加拉国境内。玄奘记下这座海港，此后仍走陆路，没有从这里乘船回长安。',
        en: 'Tamralipti was a seaport where river and sea traffic met. It is today’s Tamluk in West Bengal, India, not inside Bangladesh. Xuanzang noted the port and continued overland. He did not sail home from here.',
        bn: 'তাম্রলিপ্ত আজকের তমলুক, পশ্চিমবঙ্গ, ভারত—বাংলাদেশ নয়। নদী ও সমুদ্র এখানে মিলত। শুয়ানজাং বন্দরটি লিখে স্থলপথেই এগিয়েছিলেন, এখান থেকে জাহাজে চাংআনে ফেরেননি।'
    },
    {
        id: 'karnasuvarna',
        ancient: '羯罗拿苏伐剌那',
        scriptName: 'কর্ণসুবর্ণ',
        head: '今印度西孟加拉邦穆尔希达巴德一带',
        today: '今印度西孟加拉邦穆尔希达巴德一带',
        todayEn: 'Near Murshidabad, West Bengal, India',
        todayBn: 'মুর্শিদাবাদ, পশ্চিমবঙ্গ, ভারত',
        coords: [24.15, 88.27],
        zh: '书中自耽摩栗底西北行七百余里到羯罗拿苏伐剌那，周四千四五百里，都城周二十余里，土地卑湿，家室富饶。今地多定在印度西孟加拉邦穆尔希达巴德一带，不在今天的孟加拉国境内。孟加拉语读者认得这个名字，今天的国境线是后来划定的。',
        en: 'Karnasuvarna was a rich, low-lying kingdom northwest of the port. It is usually placed near Murshidabad in West Bengal, India. Bengali readers know the name; the modern border is a later line.',
        bn: 'কর্ণসুবর্ণ বন্দরের উত্তর-পশ্চিমে নিচু ধনী রাজ্য। আজকের স্থান ভারতের পশ্চিমবঙ্গের মুর্শিদাবাদ এলাকা, বাংলাদেশ নয়। বাংলা নাম চেনা, আজকের সীমানা পরের রেখা।'
    }
];
