// 西行记 · 朱批辨真 + 路线抉择
// 先交小说印象，再翻史书。出处只作极短锚点，便于追溯。

const bianzhenData = {
    quiz: {
        1: {
            id: 'q1',
            intended: 'yi',
            station: { zh: '长安', en: "Chang'an" },
            modern: { zh: '西安', en: "Xi'an" },
            impression: {
                zh: '唐太宗认玄奘为御弟，赐紫袈裟，奉旨西天取经。',
                en: 'Emperor Taizong made Xuanzang his sworn brother, gave him a purple robe, and sent him west by imperial order.'
            },
            hint: { zh: '戏文里最熟的开头。', en: 'The opening everyone knows from the novel and the stage.' },
            ask: { zh: '这一条，更近哪一层？', en: 'Which layer does this impression sit on?' },
            labels: {
                zh: { shi: '史实', yi: '演义', mix: '两者交织' },
                en: { shi: 'Chronicle', yi: 'Novel', mix: 'Both, interwoven' }
            },
            verdict: {
                zh: {
                    shi: '你标为史实。这条大众印象其实落在演义一层；翻史书便见分晓。',
                    yi: '你标为演义，正合此层。这是最熟悉的小说开头；史书里没有御弟，也没有奉旨。',
                    mix: '你标为交织：出关是真的，奉旨是后加的。'
                },
                en: {
                    shi: 'You marked it as chronicle. This familiar picture actually sits on the novel’s layer. Turn the history next.',
                    yi: 'This sits on the novel’s layer. You inked the story everyone knows; now open the chronicle.',
                    mix: 'You marked it as interwoven. The leaving is real; “by imperial order” was written in later.'
                }
            },
            shi: {
                zh: '贞观三年，边禁未弛，玄奘夜里私行。他不是钦差，是违禁求法的僧人。',
                en: 'In Zhenguan 3 travel west was banned. Xuanzang left Chang’an by night. He was not an imperial envoy; he broke the ban to seek the Law.'
            },
            yi: {
                zh: '百回本《西游记》把禁令改成敕命：御弟、金襕袈裟、奉旨取经。小说要给取经一个名分，史书要写清一个人为什么非走不可。',
                en: 'The hundred-chapter Journey to the West turns the ban into a commission: sworn brother, gold-threaded robe, an imperial quest. The novel needs a lawful departure; the chronicle needs the reason he had to go.'
            },
            cite: { zh: '《慈恩传》卷一', en: 'Biography of the Tripitaka Master, juan 1' }
        },
        3: {
            id: 'q3',
            intended: 'yi',
            station: { zh: '敦煌', en: 'Dunhuang' },
            modern: { zh: '敦煌', en: 'Dunhuang' },
            impression: {
                zh: '前面就是流沙河，八百里黄风，精怪挡路。',
                en: 'Ahead lies the River of Flowing Sand, eight hundred li of yellow wind, with spirits blocking the way.'
            },
            hint: { zh: '过关的想象，多半从这里来。', en: 'Most “pass-the-gate” pictures of the desert start here.' },
            ask: { zh: '这一条，更近哪一层？', en: 'Which layer does this impression sit on?' },
            labels: {
                zh: { shi: '史实', yi: '演义', mix: '两者交织' },
                en: { shi: 'Chronicle', yi: 'Novel', mix: 'Both, interwoven' }
            },
            verdict: {
                zh: {
                    shi: '你标为史实。戈壁是真的，精怪属于演义。',
                    yi: '你标为演义，正合此层。这是最熟悉的过关想象；史书里只有戈壁与渴。',
                    mix: '你标为交织：戈壁是真的，精怪是小说添的。'
                },
                en: {
                    shi: 'You marked it as chronicle. The Gobi is real; the spirits sit on the novel’s layer.',
                    yi: 'This sits on the novel’s layer. You inked the familiar ordeal; now open the chronicle.',
                    mix: 'You marked it as interwoven. The ground is real; the demons grew in the novel.'
                }
            },
            shi: {
                zh: '出沙洲入莫贺延碛，迷路断水，几乎渴死。真正的对手是渴，不是精怪。',
                en: 'Leaving Shazhou he entered the Moheyan wastes, lost the way, ran out of water, and nearly died of thirst. The adversary was thirst, not a spirit.'
            },
            yi: {
                zh: '小说把无人烟的戈壁，写成一条流沙河、一阵黄风，让精怪挡路。苦还在，只是把责任交给了妖怪。',
                en: 'The novel turns an empty desert into a river and a wind one can fight. The suffering remains; the blame is handed to demons.'
            },
            cite: { zh: '《慈恩传》卷一', en: 'Biography of the Tripitaka Master, juan 1' }
        },
        5: {
            id: 'q5',
            intended: 'mix',
            station: { zh: '高昌', en: 'Gaochang' },
            modern: { zh: '吐鲁番', en: 'Turpan' },
            impression: {
                zh: '火焰山热不可当，要借芭蕉扇才能过。',
                en: 'Flaming Mountain is too hot to cross without the palm-leaf fan.'
            },
            hint: { zh: '孙悟空最热闹的一回。', en: 'The noisiest episode of Sun Wukong’s road.' },
            ask: { zh: '这一条，更近哪一层？', en: 'Which layer does this impression sit on?' },
            labels: {
                zh: { shi: '史实', yi: '演义', mix: '两者交织' },
                en: { shi: 'Chronicle', yi: 'Novel', mix: 'Both, interwoven' }
            },
            verdict: {
                zh: {
                    shi: '你标为史实。吐鲁番的酷热是真的，芭蕉扇却属于演义。',
                    yi: '你标为演义，扇子确出自小说。火焰山的地望在吐鲁番，酷热是真的；史书里没有扇子。',
                    mix: '你标为交织，正对：吐鲁番的酷热是真的，芭蕉扇是小说添的。'
                },
                en: {
                    shi: 'You marked it as chronicle. The heat has a real geography; the fan sits on the novel’s layer.',
                    yi: 'You inked the novel’s fan first. The place-name can still be checked against the chronicle.',
                    mix: 'This sits on the interwoven layer: the heat is real; the fan grew in the novel.'
                }
            },
            shi: {
                zh: '吐鲁番的酷热是真的。这一站更要紧的是：高昌王麹文泰以国师之礼挽留他，玄奘绝食求去。',
                en: 'Turpan’s heat is real. What matters more at this stop: King Qu Wentai tried to keep Xuanzang as a royal teacher, and Xuanzang fasted until he was allowed to go.'
            },
            yi: {
                zh: '小说把酷热写成一座芭蕉扇可扇灭的山。史书里没有扇子，只有一位国王和一场绝食。',
                en: 'The novel turns heat into a mountain a fan can put out. The chronicle has no fan: it has a king and a hunger strike.'
            },
            cite: { zh: '《慈恩传》卷一', en: 'Biography of the Tripitaka Master, juan 1' }
        },
        21: {
            id: 'q21',
            intended: 'mix',
            station: { zh: '那烂陀', en: 'Nalanda' },
            modern: { zh: '那烂陀', en: 'Nalanda' },
            impression: {
                zh: '到了西天雷音寺，如来赐经，取经便算完成。',
                en: 'At Thunderclap Monastery in the Western Heaven the Buddha grants the scriptures, and the quest is done.'
            },
            hint: { zh: '「西天」两个字，常常停在这里。', en: 'This is where the words “Western Heaven” often stop.' },
            ask: { zh: '这一条，更近哪一层？', en: 'Which layer does this impression sit on?' },
            labels: {
                zh: { shi: '史实', yi: '演义', mix: '两者交织' },
                en: { shi: 'Chronicle', yi: 'Novel', mix: 'Both, interwoven' }
            },
            verdict: {
                zh: {
                    shi: '你标为史实。那烂陀确有其地；如来赐经是演义。',
                    yi: '你标为演义，雷音寺出自小说。这一站真正的史实，是一所僧寺学府。',
                    mix: '你标为交织，正对：那烂陀的学府是真的，雷音寺一次赐经是小说。'
                },
                en: {
                    shi: 'You marked it as chronicle. The place of study is real; the granting of scriptures sits on the novel’s layer.',
                    yi: 'You inked Thunderclap Monastery first. The university is in the chronicle.',
                    mix: 'This sits on the interwoven layer: there was a university, not a mountain that hands over the books once and for all.'
                }
            },
            shi: {
                zh: '那烂陀是僧寺，也是学府。玄奘依止戒贤五年，听瑜伽、因明，抄经、辩论。经是读来的，也是抄来的。',
                en: 'Nalanda was a monastic university. Xuanzang studied five years under Silabhadra: Yogacara, logic, copying and debate. The texts were read and copied, not bestowed in a single rite.'
            },
            yi: {
                zh: '小说把五年功课收成一座雷音、一次赐经。西天成了一个终点；史书里的那烂陀，是一所仍在讲学的学府。',
                en: 'The novel folds five years of study into one monastery and one gift of scripture. The West becomes a point; the chronicle is a school still in session.'
            },
            cite: { zh: '《西域记》卷九', en: 'Great Tang Records, juan 9' }
        },
        29: {
            id: 'q29',
            intended: 'yi',
            station: { zh: '长安', en: "Chang'an" },
            modern: { zh: '西安', en: "Xi'an" },
            impression: {
                zh: '取经回来，师徒成佛，功行圆满。',
                en: 'They return with the scriptures, become Buddhas, and the merit is complete.'
            },
            hint: { zh: '戏台上的大团圆。', en: 'The stage ending everyone expects.' },
            ask: { zh: '这一条，更近哪一层？', en: 'Which layer does this impression sit on?' },
            labels: {
                zh: { shi: '史实', yi: '演义', mix: '两者交织' },
                en: { shi: 'Chronicle', yi: 'Novel', mix: 'Both, interwoven' }
            },
            verdict: {
                zh: {
                    shi: '你标为史实。还都确有其事，成佛是演义。',
                    yi: '你标为演义，正合此层。大团圆是戏台的收束；史书里是还都、献经、开译。',
                    mix: '你标为交织：人回来了是真的，成佛是小说的事。'
                },
                en: {
                    shi: 'You marked it as chronicle. The return is real; becoming Buddha sits on the novel’s layer.',
                    yi: 'This sits on the novel’s layer. You inked the happy ending first; now open the chronicle.',
                    mix: 'You marked it as interwoven. The man came home; apotheosis is a later story.'
                }
            },
            shi: {
                zh: '贞观十九年春还京，献经像；太宗命撰《大唐西域记》。此后在慈恩译场译经，西行结束在书案上。',
                en: 'In spring of Zhenguan 19 he reached the capital, presented scriptures and images, was ordered to write the Great Tang Records, and opened the Ci’en translation hall. The road ended at a desk.'
            },
            yi: {
                zh: '《西游记》让师徒成佛；本作品讲的是史书那一层：一个人把走过的路，写成地理与目录。',
                en: 'Journey to the West makes the pilgrims into gods. This work is about the next layer: a man who wrote the road as geography and a catalogue.'
            },
            cite: { zh: '《慈恩传》卷六', en: 'Biography of the Tripitaka Master, juan 6' }
        }
    },
    choice: {
        3: {
            id: 'c3',
            historical: 'go',
            station: { zh: '敦煌', en: 'Dunhuang' },
            question: {
                zh: '出沙洲前，有人劝他回头。史书所记，正是此问。',
                en: 'Before leaving Shazhou, some urged him to turn back. This is the question the chronicle records.'
            },
            options: {
                zh: [
                    { id: 'back', label: '听劝东归', hint: '保住性命' },
                    { id: 'go', label: '独自过碛', hint: '宁向西死，不向东生' }
                ],
                en: [
                    { id: 'back', label: 'Turn east as advised', hint: 'Stay on the side of staying alive' },
                    { id: 'go', label: 'Cross the wastes alone', hint: 'Better die westward than live by returning' }
                ]
            },
            after: {
                zh: {
                    back: '若东归，私行到此为止，梵本却不会东来，《西域记》也不会存在。史料里他没有回头；真实选择是过碛，代价是迷路断水，几乎渴死在沙里。',
                    go: '史料里他过了碛，真实选择是不回头；代价是断水迷途、命悬一线，换来的是一条终于走通的路。'
                },
                en: {
                    back: 'One can imagine turning back: the crime of leaving would end, the Sanskrit books would not arrive, and the Records would not be written. The chronicle says he did not turn. His choice was the desert. The cost was getting lost and nearly dying of thirst.',
                    go: 'The chronicle has him cross the wastes. The real choice was not to return. The cost was a life hung on thirst; what it bought was a road that could be finished.'
                }
            },
            shi: {
                zh: '确有人劝他东归，玄奘没有回头。过碛是他一个人的选择，不是朝廷的护送。',
                en: 'There were people who advised return. Xuanzang did not. Crossing the wastes was one man’s choice, not an imperial escort.'
            },
            cite: { zh: '《慈恩传》卷一', en: 'Biography of the Tripitaka Master, juan 1' }
        },
        5: {
            id: 'c5',
            historical: 'go',
            station: { zh: '高昌', en: 'Gaochang' },
            question: {
                zh: '麹文泰要以国师之礼留他。史书所记，正是此问。',
                en: 'Qu Wentai would have kept him as a royal teacher. This is the question the chronicle records.'
            },
            options: {
                zh: [
                    { id: 'stay', label: '留下受供养', hint: '一城的寺与粮' },
                    { id: 'go', label: '绝食求去', hint: '经本还在更西' }
                ],
                en: [
                    { id: 'stay', label: 'Stay and accept patronage', hint: 'A city’s temples and grain' },
                    { id: 'go', label: 'Fast until he may leave', hint: 'The books still lie further west' }
                ]
            },
            after: {
                zh: {
                    stay: '若留下，高昌多一位高僧，长安少一部《西域记》。供养安稳，求法却停在半路。史料里他绝食求去；真实选择是走，代价是舍弃这份安稳。',
                    go: '史料里他绝食数日，麹文泰才放行。真实选择是走：代价是舍弃国师之礼，换来二十四封过所文书与继续西行的资格。'
                },
                en: {
                    stay: 'One can imagine staying: Gaochang would have gained a master, Chang’an would have lost the Records. Patronage is safety; the search for the Law would have stopped halfway. The chronicle has him fast until he could leave. The real choice was to go. The cost was refusing safety.',
                    go: 'The chronicle has him fast for days until the king sent him on. The real choice was to go. The cost was refusing the safety of a royal teacher’s seat, in exchange for letters of passage and the right to continue.'
                }
            },
            shi: {
                zh: '挽留是真的，绝食也是真的。他不是无人挽留，是不肯留下。',
                en: 'The invitation was real, and so was the fast. The West was not empty of patrons; he refused to be kept.'
            },
            cite: { zh: '《慈恩传》卷一', en: 'Biography of the Tripitaka Master, juan 1' }
        },
        21: {
            id: 'c21',
            historical: 'go',
            station: { zh: '那烂陀', en: 'Nalanda' },
            question: {
                zh: '五年课业已成，有人请他长住讲学。史书所记，正是此问。',
                en: 'After five years of study, some asked him to stay and teach. This is the question the chronicle records.'
            },
            options: {
                zh: [
                    { id: 'stay', label: '留下讲学', hint: '最好的学堂' },
                    { id: 'go', label: '载经东归', hint: '经要回到汉语里' }
                ],
                en: [
                    { id: 'stay', label: 'Stay and teach', hint: 'The finest school' },
                    { id: 'go', label: 'Carry the texts east', hint: 'The books have to enter Chinese' }
                ]
            },
            after: {
                zh: {
                    stay: '若留下，那烂陀多一位论师，唐土少一批梵本，学堂便成了终点。史料里他载经东归；真实选择是还都，代价是离开最好的学堂。',
                    go: '史料里他载经东归，真实选择是还都：代价是离开最好的学堂，把贝叶经一站一站护回长安。求法最终完成于长安译场。'
                },
                en: {
                    stay: 'One can imagine staying: Nalanda would have gained a master, Tang China would have lost a library of Sanskrit. The school would have been the end. The chronicle has him carry the texts east. The real choice was to return. The cost was leaving the finest school.',
                    go: 'The chronicle has him carry the texts east. The real choice was to return. The cost was leaving the finest school and guarding palm-leaf books, station by station. The search for the Law is completed in the translation hall at Chang’an.'
                }
            },
            shi: {
                zh: '那烂陀不是西行的句号；还都、献经、开译，才是句号。',
                en: 'Nalanda is not the full stop of the journey. The full stop is the return, the offering of texts, and the opening of the translation hall.'
            },
            cite: { zh: '《慈恩传》卷五', en: 'Biography of the Tripitaka Master, juan 5' }
        }
    },
    order: {
        quiz: [1, 3, 5, 21, 29],
        choice: [3, 5, 21]
    },
    seals: {
        q1: { glyph: '出', name: { zh: '违禁出关', en: 'Left against the ban' }, kind: 'zhu' },
        q3: { glyph: '碛', name: { zh: '过碛无怪', en: 'Wastes, no demons' }, kind: 'zhu' },
        q5: { glyph: '昌', name: { zh: '火焰有地', en: 'Heat has a place' }, kind: 'zhu' },
        q21: { glyph: '陀', name: { zh: '学堂非神山', en: 'A school, not a god-mountain' }, kind: 'zhu' },
        q29: { glyph: '还', name: { zh: '还都未成佛', en: 'Home, not apotheosis' }, kind: 'zhu' },
        c3: { glyph: '渴', name: { zh: '不还过碛', en: 'Did not turn back' }, kind: 'mo' },
        c5: { glyph: '去', name: { zh: '绝食西行', en: 'Fasted, then west' }, kind: 'mo' },
        c21: { glyph: '经', name: { zh: '载经东归', en: 'Carried the texts east' }, kind: 'mo' }
    }
};

window.bianzhenData = bianzhenData;
