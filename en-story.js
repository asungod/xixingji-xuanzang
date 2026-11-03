// 西行记 · 英文讲解层（与中文说书对照，地名用 Xi'an 等通行写法）

const enStory = {
    1: {
        ancient: "Chang'an",
        modern: "Xi'an",
        narration: "Stop one. Chang'an, today's Xi'an. In 629, the twenty-seven-year-old monk Xuanzang slipped out of the Tang capital by night. He was not the emperor's envoy. He was a pilgrim who broke the travel ban to seek Sanskrit scriptures.",
        fayuan: "Chang'an was dense with Buddhist temples, and the Ci'en Temple would later be built on his account. The schools relied on different translations, and their disputes had no end; this was what forced him to go to India.",
        qinli: "He left the city by night: the death penalty might be spared, but punishment was certain. Some officials along the way looked the other way, and only so did he get out. At the moment he left, Chang'an's lights were behind him, and ahead lay only sand and night.",
        dangshi: "Taizong had only just settled the empire, and travel west was still forbidden. Buddhism flourished, yet genuine Sanskrit texts were very rare. The Great Tang Records on the Western Regions, which he later wrote, turned this road into China's own geography of the world.",
        zhupi: {
            shi: 'Chronicle: he left by night against the travel ban, not as Taizong’s envoy.',
            yi: 'Novel: Journey to the West makes him the emperor’s sworn brother, sent west by imperial order. The ban is rewritten as a commission.'
        }
    },
    2: {
        ancient: 'Liangzhou',
        modern: 'Wuwei',
        narration: "Stop two. Liangzhou, today's Wuwei in Gansu. Xuanzang stayed about a month, asking monks and caravans about wells in the desert. West of here, the posts grow scarce.",
        fayuan: "Liangzhou stood between the Central Plains and the Western Regions, and its temples held both Han and non-Han monks. He copied additional scriptures here and listened to caravans tell of losing their way in the dunes.",
        qinli: "He was still travelling in secret. Local monks hid him and provided for him. An old monk gave him a sketch marking springs; later, in the Moheyan desert, that sketch saved his life more than any scripture.",
        dangshi: "Liangzhou was a key garrison town where Tang troops held the Hexi corridor. The ban had not been relaxed; beyond it began a corridor even harder to police.",
        zhupi: {
            shi: 'Chronicle: he spent about a month in Liangzhou gathering grain and asking the road before leaving the pass.',
            yi: 'Novel: Liangzhou almost vanishes. The hardship is piled onto the Flowing Sand and the Flaming Mountain.'
        }
    },
    3: {
        ancient: 'Dunhuang',
        modern: 'Dunhuang',
        narration: "Stop three. Dunhuang, still Dunhuang today. Gateway to the Western Regions. He took water and grain, then walked into the Moheyan desert — eight hundred li without a soul.",
        fayuan: "The Mogao Caves were already the brightest point of Buddhist light on the Silk Road. Han, non-Han and Indian styles were layered on the same wall. Before leaving, he paid homage at the caves, a farewell to the predecessors of this road.",
        qinli: "Some urged him to turn back. He said he would rather die going west than live going east. After Dunhuang he lost the road and ran out of water, and nearly died in the sand; only the little water left and his resolve brought him to Yiwu.",
        dangshi: "Dunhuang was a great city on the western edge of the Tang empire, where caravans, envoys and monks divided between the northern and southern routes.",
        zhupi: {
            shi: 'Chronicle: leaving Shazhou he entered the wastes and nearly died of thirst (Biography, juan 1).',
            yi: 'Novel: the River of Flowing Sand and eight hundred li of yellow wind grow out of this Gobi.'
        }
    },
    4: {
        ancient: 'Yiwu',
        modern: 'Hami',
        narration: "Stop four. Yiwu, today's Hami. After the desert he could barely walk. The local king heard that a Tang monk had survived the sands, and took him in.",
        fayuan: "Yiwu's Buddhist temple was small, but it served as a way station for those crossing the desert. The monks had seen too many half-dead travellers; providing for them was daily routine, not ceremony.",
        qinli: "Twelve days alone: lost, parched, seeing marsh lights at night. In Yiwu he slept soundly for the first time in days.",
        dangshi: "Yiwu was a small oasis kingdom, balancing between Tang and the peoples to its north. It had to receive whoever came, or the trade road would fail.",
        zhupi: {
            shi: 'Chronicle: after the desert he was near death; the king of Yiwu took him in (Biography).',
            yi: 'Novel: the desert is full of spirits. In the chronicle the only adversaries are thirst and being lost.'
        }
    },
    5: {
        ancient: 'Gaochang',
        modern: 'Turpan',
        narration: "Stop five. Gaochang, today's Turpan. King Qu Wentai tried to keep him as a royal teacher. Xuanzang went on hunger strike until the king let him go, with horses, clothes, and twenty-four letters of passage.",
        fayuan: "Buddhist practice flourished in Gaochang, with the Bezeklik caves close by. Chinese and Western Regions styles met here; it was the first truly Buddhist realm he saw after leaving the pass.",
        qinli: "Kind treatment became a trap, harder to escape than the desert. He fasted for days before the king finally agreed in tears. Those twenty-four letters served as passports all the way.",
        dangshi: "Gaochang was the hub of the southern Tianshan road. Years later Tang would destroy it, but that was still to come; for now it was an independent Buddhist kingdom.",
        zhupi: {
            shi: 'Chronicle: Qu Wentai tried to keep him; Xuanzang fasted until the king sent him west with supplies.',
            yi: 'Novel: the Flaming Mountain sits in this Turpan basin. The banana-leaf fan cools a heat that is real.'
        }
    },
    6: {
        ancient: 'Kucha',
        modern: 'Kuqa',
        narration: "Stop six. Kucha, today's Kuqa. A kingdom of music and monasteries. Kumarajiva once went from here to Chang'an; Xuanzang was walking the other way, comparing manuscripts for two months.",
        fayuan: "Kucha had both Hinayana and Mahayana. The musicians painted in its cave murals later entered the Tang court's seated ensemble. Buddhism and music shared one city.",
        qinli: "The king received him with courtesy and lodged him in a great monastery. For the first time he systematically saw Indian Buddha images and texts as rewritten through the Western Regions, and knew that what the Central Plains had was not the whole.",
        dangshi: "In the seventh century Kucha could still hold its own; goods and music of the northern Silk Road passed through it eastward.",
        zhupi: {
            shi: 'Chronicle: he stayed in Kucha to study, and recorded its caves, temples, music and dance.',
            yi: 'Novel: Kucha is omitted. What entered Chinese daily life from the Western Regions was this music and these images, not demons.'
        }
    },
    7: {
        ancient: 'Gumo',
        modern: 'Aksu',
        narration: "Stop seven. Gumo, today's Aksu. A smaller oasis on the northern Silk Road. He repaired his kit and asked how to cross the Tianshan into the lands of the Western Turks.",
        fayuan: "There were few temples, but the monks knew the roads. They told him which pass could be crossed and which snow valley had to wait.",
        qinli: "Half a month was short: it went to mending shoes, copying scriptures, and rereading the king of Gaochang's letter. The mountains were west, already in sight.",
        dangshi: "Gumo usually depended on Kucha. It was a supply point on the northern road, not a great power.",
        zhupi: {
            shi: 'Chronicle: a short stop on the northern road, to prepare for the Tianshan crossing.',
            yi: 'Novel: this town is skipped. The western road is not a leap to India; it is filling the water-skin oasis by oasis.'
        }
    },
    8: {
        ancient: 'Suyab',
        modern: 'Tokmok',
        narration: "Stop eight. Suyab, near today's Tokmok in Kyrgyzstan. After the high passes he reached the Western Turk court. Buddhists, Zoroastrians and Nestorian Christians shared one city.",
        fayuan: "Buddhist temples, Zoroastrian fire shrines and Nestorian churches stood in one city. The Silk Road was not the road of one faith but many roads laid over one another.",
        qinli: "The twenty days of crossing the mountains were a different hardship from the desert. Only after entering the city did he understand that west of the Central Plains lay another world.",
        dangshi: "The Western Turks were at their height, and Suyab was one of their camps. Tang diplomacy with the Turks would later rewrite who held this road.",
        zhupi: {
            shi: 'Chronicle: at Suyab he met the Western Turks and recorded a city of several faiths.',
            yi: 'Novel: the road is a straight line west. The chronicle has to swing north to Suyab before turning southwest.'
        }
    },
    9: {
        ancient: 'Shi Kingdom',
        modern: 'Tashkent',
        narration: "Stop nine. The Shi Kingdom, today's Tashkent. Temples stood beside fire altars. Trade was louder than chanting. Xuanzang saw that Buddhism was no longer the only voice in Central Asia.",
        fayuan: "Buddhist temples remained, mostly lodgings for passing monks. Stronger locally were the Sogdians' Zoroastrian faith and their merchant gods.",
        qinli: "For the first time he stayed long where the Buddha was not the city's greatest concern. It made him more eager to reach India and see the source.",
        dangshi: "The Shi Kingdom maneuvered between the Turks and Persia and lived by trade.",
        zhupi: {
            shi: 'Chronicle: he recorded the Shi Kingdom’s customs and the coexistence of several religions.',
            yi: 'Novel: Tashkent is missing. The Western Regions in the chronicle are larger than a single Western Heaven.'
        }
    },
    10: {
        ancient: 'Kang Kingdom',
        modern: 'Samarkand',
        narration: "Stop ten. The Kang Kingdom, today's Samarkand, heart of Sogdiana. He recorded courts, markets and fire temples — and the decline of Buddhist monasteries. India still lay to the south.",
        fayuan: "Buddhism had withdrawn to a corner here. He had not come to make a pilgrimage but to witness: the Law does not abide forever; kingdoms rise and kingdoms fall.",
        qinli: "He was received with the courtesy due a guest. His notes are calm, and the calmer they are, the firmer his resolve to reach Nalanda.",
        dangshi: "Kang was the heart of the Sogdian trading network: from Chang'an in the east to Persia in the west, Kang merchants left their footprints.",
        zhupi: {
            shi: 'Chronicle: at Samarkand he found Buddhist monasteries in decline and fire temples in the ascendant.',
            yi: 'Novel: the Western Heaven is a single point. The Great Tang Records write a world already changing.'
        }
    },
    11: {
        ancient: 'Balkh',
        modern: 'Balkh',
        narration: "Stop eleven. Balkh, in today's Afghanistan, called a lesser Rajagriha. He studied three months in the great Nava Vihara, then prepared to enter the snow mountains.",
        fayuan: "Mahayana and Hinayana shared the monasteries. This was one of the most important places of study before he entered northern India.",
        qinli: "Three months were not for sightseeing but for classes. He began discussing Abhidharma in the Indian manner, rehearsing for Nalanda.",
        dangshi: "Balkh stood on ancient Bactrian ground, its city very old. In the seventh century it was still one of the last bright places of Buddhism in Central Asia.",
        zhupi: {
            shi: 'Chronicle: he studied at the great monastery of Balkh (Great Tang Records).',
            yi: 'Novel: this city is absent. Without these unnamed schools there would have been no later translations.'
        }
    },
    12: {
        ancient: 'Bamiyan',
        modern: 'Bamiyan',
        narration: "Stop twelve. Bamiyan. He measured the two colossal Buddhas with his own eyes and wrote down their height and gold. After they were destroyed, his pages became a primary record.",
        fayuan: "Cave monasteries ringed the mountains, with thousands of monks. The great Buddhas were not an attraction but the worship center of a whole town.",
        qinli: "He sat inside the caves. Later, in the Records, he wrote down height, color and ritual as if drawing a map for those who had never been there.",
        dangshi: "Bamiyan was a Buddhist realm before the crossing of the great snow mountains. After the Tang, roads and faiths changed, yet the Buddhas stood until the twenty-first century.",
        zhupi: {
            shi: 'Chronicle: he described the Bamiyan Buddhas in detail — one of the earliest complete eyewitness records.',
            yi: 'Novel: the colossi are missing. One page of the Chinese picture of the west is these two figures of stone.'
        }
    },
    13: {
        ancient: 'Kapisa',
        modern: 'Kabul area',
        narration: "Stop thirteen. Kapisa, north of today's Kabul. Between the snows and India. He rested, asked the road to Gandhara, and set his mind on the India he had pictured in Chang'an.",
        fayuan: "Monasteries were many, and monks came from every direction. This was the stitch that sewed Central Asia to northern India.",
        qinli: "He came here after the mountains, already very thin. He wrote letters, changed clothes and asked the road, as if turning his whole self into the version that was about to enter India.",
        dangshi: "Kapisa controlled the trade road; its local king lived off those who passed and relied on them to carry word.",
        zhupi: {
            shi: 'Chronicle: he paused in Kapisa to ask the road before entering India.',
            yi: 'Novel: once past the Flaming Mountain, India is near. The chronicle still has a snow range to cross.'
        },
        duizhao: 'Kapisa is usually placed north of today’s Kabul, not at the city itself.'
    },
    14: {
        ancient: 'Purushapura',
        modern: 'Peshawar',
        narration: "Stop fourteen. Purushapura, today's Peshawar, old capital of Gandhara. Here the Buddha first took a Greek face and draped robe. Xuanzang was walking into the hometown of Chinese Buddhist art.",
        fayuan: "A thousand monasteries still stood, though not as in former days. Both Mahayana and the Sarvastivada school had roots here.",
        qinli: "He walked on excited and shaken: the source was more broken, more mixed, and more real than he had imagined.",
        dangshi: "The Kushan empire had declined, but Gandhara remained a hinge of Asian art history.",
        zhupi: {
            shi: 'Chronicle: he recorded Gandharan stupas and the remains of Kanishka.',
            yi: 'Novel: it does not say so, but the Buddha of Tang painting has a Gandharan face. Art history does.'
        }
    },
    15: {
        ancient: 'Taxila',
        modern: 'Taxila',
        narration: "Stop fifteen. Taxila, one of South Asia's oldest schools. For two months he set pilgrimage aside and sat in class — logic, metaphysics, preparation for Nalanda.",
        fayuan: "The monastic schools remained, though smaller than in Mauryan or Kushan times. It was still the academic gateway to northern India.",
        qinli: "He lived the daily round in the monks' quarters: lectures, debate, copying. He rehearsed the rhythm of Nalanda here first.",
        dangshi: "In the seventh century the politics here had fragmented, but learning remained. Trade still followed the old highways.",
        zhupi: {
            shi: 'Chronicle: he studied at Taxila as preparation for Nalanda.',
            yi: 'Novel: fetching scripture is not arriving and taking it. It is finishing the books city by city.'
        }
    },
    16: {
        ancient: 'Kashmir',
        modern: 'Srinagar',
        narration: "Stop sixteen. Kashmir, around today's Srinagar. He stayed two years. Snow closed the passes; he copied rare books and debated masters. The quietest stretch of the whole journey.",
        fayuan: "The region was famous for Sarvastivada learning, and many great Abhidharma treatises came from here. Without these two years, Nalanda would have been far harder.",
        qinli: "Winters in the mountains were very long. He spread out the questions he had brought from Chang'an, one by one, and checked them against the texts.",
        dangshi: "Kashmir was relatively stable, and the royal house still protected Buddhism. The mountains blocked much of the turmoil of the plains.",
        zhupi: {
            shi: 'Chronicle: he stayed two years for Abhidharma (Biography).',
            yi: 'Novel: loves fighting, not reading. Two real years of the quest were turning pages in the snow.'
        }
    },
    17: {
        ancient: 'Mathura',
        modern: 'Mathura',
        narration: "Stop seventeen. Mathura. Once another home of the Buddha image, now more Hindu than Buddhist. He walked the ruins, noted the decline, and followed the river toward Kannauj.",
        fayuan: "Some twenty monasteries and two thousand monks remained, though it was no longer the center it had been. Another face of the Buddha image — the Mathura style — travelled east from here.",
        qinli: "In the ruined walls he read time: the assemblies had moved on, the images remained.",
        dangshi: "The city lay within Harsha's sphere, and trade along the Yamuna still thrived.",
        zhupi: {
            shi: 'Chronicle: he recorded Mathura’s images and that Buddhism was already in decline.',
            yi: 'Novel: the Western Heaven is a temple always in gold. The chronicle is a subcontinent that changes.'
        }
    },
    18: {
        ancient: 'Kanyakubja',
        modern: 'Kannauj',
        narration: "Stop eighteen. Kanyakubja, today's Kannauj, capital of King Harsha. The king received the Tang monk with honor. For the first time Xuanzang had a great Indian king as his patron.",
        fayuan: "The royal city had many monasteries, and great assemblies were often convened here. Without Harsha, his later years of study would not have gone so smoothly.",
        qinli: "From a monk who had slipped through the pass in secret, he became a scholar received as a guest by a great Indian king — even he felt it was another life.",
        dangshi: "Harsha was one of the last great unifiers of seventh-century northern India, and he spent freely on Buddhism and on other faiths.",
        zhupi: {
            shi: 'Chronicle: he met King Harsha and received his protection.',
            yi: 'Novel: Taizong “sends him off” in the east. The king who actually sheltered him in the west was Harsha.'
        }
    },
    19: {
        ancient: 'Varanasi',
        modern: 'Varanasi',
        narration: "Stop nineteen. Varanasi on the Ganges. In the city, Hindu rites; outside, Sarnath, where the Buddha first turned the Wheel of Dharma. Xuanzang walked the stupas and copied the inscriptions.",
        fayuan: "The Deer Park had dozens of monasteries and some three thousand monks. The stupa of the first turning of the Wheel and Ashoka's pillar are one of the origin points of Buddhist geography.",
        qinli: "Here he did not debate but worship. After seven years of walking, he stood at last on the ground that was the first page of the textbook.",
        dangshi: "The city was under Harsha's rule; pilgrims and trading boats moved side by side on the Ganges.",
        zhupi: {
            shi: 'Chronicle: he visited the Deer Park and recorded the site of the first turning of the Wheel.',
            yi: 'Novel: the Western Heaven is Thunderclap Monastery. In the chronicle the Dharma begins in this park.'
        }
    },
    20: {
        ancient: 'Magadha',
        modern: 'Bodh Gaya',
        narration: "Stop twenty. Magadha, at Bodh Gaya, where the Buddha attained awakening. For three months Xuanzang sat, circumambulated, and copied every inscription. Here the journey grew still.",
        fayuan: "The first holy site of Buddhism. The tree descends from earlier trees; the seat has been commemorated since Ashoka. Monks from everywhere came and treated it as the source of sources.",
        qinli: "He prostrated himself fully. For three months the 'fetching' of scriptures gave way to 'realizing' — not proving himself, but remembering this ground.",
        dangshi: "This was the old land of Magadha; the holy site was maintained by alms from many quarters. In the seventh century it was still the center of Asian pilgrimage.",
        zhupi: {
            shi: 'Chronicle: he spent the rains at Bodh Gaya and recorded the place of awakening in detail.',
            yi: 'Novel: the holy land is folded into one Thunderclap temple. The chronicle is a tree, a seat, a whole Magadha.'
        }
    },
    21: {
        ancient: 'Nalanda',
        modern: 'Nalanda',
        narration: "Stop twenty-one. Nalanda, the greatest monastic university of the ancient world. Five years under Silabhadra: Yogacara, logic, Sanskrit. Most of the six hundred Sanskrit texts he carried home were gathered here.",
        fayuan: "The monastery had eight courts and a very rich library, with student monks from the Chinese lands, the southern seas and Tibet. The main line of Mahayana Yogacara could be studied here through the daily curriculum.",
        qinli: "From a wandering pilgrim he became a 'Tripitaka master'. His days were lectures, questions and copying leaves. When he left, his baggage was scriptures, images and relics — and a whole method that could be taught in Chang'an.",
        dangshi: "Nalanda ran on royal patronage. It was later destroyed in war; Xuanzang's record became the fullest portrait of this institution.",
        zhupi: {
            shi: 'Chronicle: five years under Silabhadra — the academic peak of the western road.',
            yi: 'Novel: Thunderclap Monastery’s model is less a divine mountain than this university still in session.'
        }
    },
    22: {
        ancient: 'Pataliputra',
        modern: 'Patna',
        narration: "Stop twenty-two. Pataliputra, today's Patna, old Mauryan and Gupta capital. He visited Ashoka's remains and copied leaves Nalanda had not given him. Seeking the Law became carrying the Law.",
        fayuan: "The third council is said to have been held here. The monasteries were not what they had been, but inscriptions and pillars remained.",
        qinli: "His five years of study just finished, he followed the river as if reviewing India's history once more before he would turn back.",
        dangshi: "The city was no longer an imperial capital, but it remained a great landing on the Ganges.",
        zhupi: {
            shi: 'Chronicle: he visited Ashoka’s remains at Pataliputra and copied texts Nalanda had not given him.',
            yi: 'Novel: “the scriptures are fetched” is not the end. It is the start of carrying them east.'
        }
    },
    23: {
        ancient: 'Kanchipuram',
        modern: 'Kanchipuram',
        narration: "Stop twenty-three. Kanchipuram in the south. He came for Buddhist logic and other schools. This was the southernmost point of his Indian years.",
        fayuan: "Dignaga's tradition of Buddhist logic ran deep in South India. More than a hundred monasteries and tens of thousands of monks; Mahayana and Hinayana both flourished.",
        qinli: "The heat, the language and the food all differed from northern India. He added another layer to his logic here before turning back north.",
        dangshi: "It was the height of the Pallava dynasty, and the sea routes to Southeast Asia were open. Buddhism from South India would travel farther east than Xuanzang ever did.",
        zhupi: {
            shi: 'Chronicle: he went south to Kanchipuram for logic — the southernmost point of the journey.',
            yi: 'Novel: the Western Heaven is due west of Chang’an. Unfold the map and he also reached South India.'
        }
    },
    24: {
        ancient: 'Kanyakubja',
        modern: 'Kannauj',
        narration: "Stop twenty-four. Back at Kannauj. King Harsha held an assembly of eighteen days. Xuanzang stated his thesis; no one overturned it. A public lesson, and a farewell.",
        fayuan: "The assembly gathered tens of thousands of monks and laypeople. The meaning of Mahayana was set before the ears of all northern India.",
        qinli: "From a smuggled monk to the main speaker. He knew it was time to go home — not to flee, but to carry back five years plus two years of study.",
        dangshi: "In his later years Harsha could still convene such an assembly. After him, the political map of northern India would change.",
        zhupi: {
            shi: 'Chronicle: at the unobstructed assembly in Kannauj he stated his thesis (Biography).',
            yi: 'Novel: the climax is a seal of mind on Vulture Peak. The chronicle’s climax is a public debate.'
        }
    },
    25: {
        ancient: 'Kashmir',
        modern: 'Srinagar',
        narration: "Stop twenty-five. Kashmir again, on the way home. He packed the manuscripts and chose the northern road. Leaving India was not retracing his steps. It was protecting the books.",
        fayuan: "Old acquaintances were still there. He joined what he had gained at Nalanda with the Abhidharma of this place once more.",
        qinli: "His baggage was heavy now: palm-leaf texts, Buddha images, relics. From then on every step had to protect this load.",
        dangshi: "The season for the mountain roads was very short; miss the window before the snow and one had to wait another year.",
        zhupi: {
            shi: 'Chronicle: returning east he took the northern road and packed in Kashmir.',
            yi: 'Novel: the way home is still fighting demons. The chronicle is protecting the books.'
        }
    },
    26: {
        ancient: 'Shule',
        modern: 'Kashgar',
        narration: "Stop twenty-six. Shule, today's Kashgar. Back on the old Tang frontier. He rested the caravan and counted how far the Sanskrit leaves still had to travel to Chang'an.",
        fayuan: "Buddhism still flourished in Shule, where the southern and northern routes met. A monk returning east could speak Chinese here again.",
        qinli: "Hearing the speech of the Chinese lands, he truly felt he was going home. The scripture bundles on the camels were more precious than the men.",
        dangshi: "Shule stood at the eastern mouth of the Pamirs, and Tang's management of the Western Regions was strengthening.",
        zhupi: {
            shi: 'Chronicle: returning east he entered Shule (Great Tang Records, kingdom of Shule).',
            yi: 'Novel: leaving the pass is hard; coming home is also hard. The novel rides a cloud; the chronicle guards the books stop by stop.'
        }
    },
    27: {
        ancient: 'Khotan',
        modern: 'Hotan',
        narration: "Stop twenty-seven. Khotan, today's Hotan. He took the southern Silk Road, not the northern path of his going. From here he sent a memorial to the Tang court: I am coming home.",
        fayuan: "Khotan was famous for Mahayana; its Buddhist paintings were as renowned as its jade. Those returning east could obtain supplies and guides here.",
        qinli: "He sent a memorial to Taizong — a fugitive when he left the pass, now notifying the court as a scripture-seeking monk: I have returned.",
        dangshi: "Khotan was the hub of the southern route. Jade, Buddhism and caravans crossed here.",
        zhupi: {
            shi: 'Chronicle: he took the southern road through Khotan and sent a memorial to the court.',
            yi: 'Novel: a man who left against the ban now trades a load of palm-leaf books for a lawful way home.'
        }
    },
    28: {
        ancient: 'Dunhuang',
        modern: 'Dunhuang',
        narration: "Stop twenty-eight. Dunhuang again. He had left empty-handed. He returned with scriptures, images and relics. The oasis was the same. The man was not.",
        fayuan: "The Mogao Caves were still there. The images of the west he had seen on this journey would slowly return in later murals.",
        qinli: "The wind of Hexi was familiar. He waited here for word from the court and sorted the notes of the road.",
        dangshi: "Returning east, he was near the heartland of Tang; the post roads grew dense again.",
        zhupi: {
            shi: 'Chronicle: returning, he passed Dunhuang again and formed up for the Hexi corridor.',
            yi: 'Novel: Dunhuang on the way out is a ghost-gate. Dunhuang on the way home is the doorstep.'
        }
    },
    29: {
        ancient: "Chang'an",
        modern: "Xi'an",
        narration: "Stop twenty-nine. Chang'an, today's Xi'an. In the spring of 645 he reached the capital. Emperor Taizong received him in Luoyang, and ordered the Great Tang Records on the Western Regions. The road ended. What began was a record of the west that could be checked, not a one-way tale.",
        fayuan: "The Great Ci'en Temple, the translation court, his disciples. Many schools of Chinese Buddhism would trace their roots to this body of translations.",
        qinli: "He had left the city by night in secret; he entered it with crowds come to see the scriptures and images. He did not turn the road into myth; he wrote it as geography and catalogue.",
        dangshi: "The court needed intelligence on the Western Regions; the monastic community needed new translations. One man's private journey became a state cultural project.",
        zhupi: {
            shi: 'Chronicle: in Zhenguan 19 he reached the capital, presented scriptures and images, was ordered to write the Great Tang Records, and opened a translation court.',
            yi: 'Novel: Journey to the West makes the pilgrims gods. The Records let the Chinese see the real west. This work is about the latter.'
        }
    }
};

window.enStory = enStory;
