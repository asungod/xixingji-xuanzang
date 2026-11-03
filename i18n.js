// Internationalization (i18n) System
// Supports English (en) and Vietnamese (vi)

const translations = {
    en: {
        // Navigation
        'nav.title': "Xuanzang's Journey (629-645 CE)",
        'nav.about': 'About',
        'nav.language': 'Language',
        
        // Controls
        'controls.play': 'Play Journey',
        'controls.pause': 'Pause',
        'controls.startYear': '629 CE',
        'controls.endYear': '645 CE',
        'controls.currentYear': 'Year: {year}',
        
        // Timeline
        'timeline.title': 'Journey Timeline',
        'timeline.phase1': 'Departure & Silk Road',
        'timeline.phase2': 'Central Asia',
        'timeline.phase3': 'India Study',
        'timeline.phase4': 'Return Journey',
        
        // Emotions
        'emotion.excited': 'Excited',
        'emotion.tired': 'Tired',
        'emotion.contemplative': 'Contemplative',
        'emotion.peaceful': 'Peaceful',
        'emotion.determined': 'Determined',
        'emotion.reverent': 'Reverent',
        'emotion.triumphant': 'Triumphant',
        
        // Info Panel
        'info.selectLocation': 'Select a location',
        'info.clickMarker': 'Click on any marker to see details about that stop',
        'info.modernName': 'Modern Name',
        'info.ancientName': 'Ancient Name',
        'info.country': 'Country',
        'info.duration': 'Duration',
        'info.arrival': 'Arrival',
        'info.departure': 'Departure',
        'info.travelTime': 'Travel Time from Previous',
        'info.description': 'Description',
        'info.historicalContext': 'Historical Context',
        'info.buddhistContext': 'Buddhist Context',
        'info.xuanzangExperience': "Xuanzang's Experience",
        'info.historicalEvents': 'Historical Events',
        'info.sources': 'Sources & References',
        'info.emotion': 'Emotion',
        'info.noImagesAvailable': 'Historical images not available',
        'info.imageLoadError': 'Image failed to load',
        
        // Summary Panel
        'summary.title': 'Journey Summary',
        'summary.duration': 'Duration:',
        'summary.distance': 'Distance:',
        'summary.current': 'Current:',
        'summary.progress': 'Progress:',
        'summary.details': 'Location Details',
        
        // Illustration Panel
        'illustration.title': 'Location Images',
        'illustration.previous': 'Previous image',
        'illustration.next': 'Next image',
        
        // Bookmark
        'bookmark.button': 'Bookmark',
        'bookmark.saved': 'Bookmarked',
        
        // Quote
        'quote.xuanzang': 'Xuanzang',
        
        // Search
        'search.placeholder': 'Search locations...',
        'search.label': 'Search journey locations',
        'search.noResults': 'No locations found',
        
        // Share
        'share.title': 'Share this location',
        'share.copyLink': 'Copy Link',
        'share.linkCopied': 'Link copied!',
        
        // Modal
        'modal.aboutTitle': "About Xuanzang's Journey",
        'modal.intro': 'In 629 Xuanzang left Chang’an (today’s Xi’an) against the travel ban, walked west for seventeen years, and came home with Sanskrit scriptures and the Great Tang Records. This map tells that chronicle stop by stop; the novel Journey to the West draws on it as fiction, not history.',
        'modal.keyFacts': 'At a glance:',
        'modal.duration': 'Seventeen years (629–645), by the traditional count. Ancient names first: Chang’an is Xi’an, Liangzhou is Wuwei.',
        'modal.distance': 'Who it is for: museum visitors, secondary-school history, cultural-centre talks, families.',
        'modal.purpose': 'Where: gallery kiosk, classroom screen, cultural-centre theme day, a browser at home.',
        'modal.legacy': 'Red notes separate the chronicle from the novel. The international track is mutual learning: he went west to study, and brought the scriptures home.',
        'modal.enLine': 'Xuanzang left Chang’an in 629 to learn Sanskrit, not to deliver a slogan. Arabic readings name the same cities again in a later tongue. Bengali readings add the eastern Indian countries left off the twenty-nine stops.',
        'nav.hujian': 'Bridges',
        'juan.how4': 'Open Bridges: Arabic readings give a later name for the same city; Bengali readings add the eastern Indian countries left off the twenty-nine-stop playback.',
        'modal.oss': 'Map engine adapted from NguyenTruongAnLab/xuanzang-journey (MIT). Place-names, storytelling and page design are original to this team.',
        
        // Map Style
        'mapStyle.switch': 'Map Style',
        'mapStyle.modern': 'Modern Map',
        'mapStyle.ancient': 'Ancient Style',
        
        // Basemap Layers
        'basemap.esriNatGeo': 'ESRI Nat Geo',
        'basemap.esriWorldImagery': 'ESRI World Imagery',
        'basemap.esriStreet': 'ESRI Street',
        'basemap.shadedRelief': 'Shaded Relief',
        
        // Accessibility
        'a11y.mapRegion': 'Interactive map showing Xuanzang\'s journey',
        'a11y.timelineSlider': 'Timeline slider to navigate through years',
        'a11y.playButton': 'Play or pause the journey animation',
        'a11y.languageButton': 'Switch language',
        'a11y.keyboardShortcuts': 'Keyboard Shortcuts',
        'a11y.arrowKeys': 'Arrow keys (← →) - Navigate timeline',
        'a11y.spaceKey': 'Space - Play/Pause',
        'a11y.tabKey': 'Tab - Navigate controls',
        'a11y.enterKey': 'Enter - Activate button',
        'panel.source': 'Based on the Great Tang Records on the Western Regions and the Biography of the Tripitaka Master. Red notes contrast the chronicle with the novel Journey to the West.',
        'panel.scene': 'For: museums · classrooms · cultural centres',
        'juan.track': 'CMIT international track · Digital empowerment · Mutual learning along the road west',
        'juan.enTitle': 'A Record of the Western Journey',
        'juan.enLine': 'He walked west to study, then carried the scriptures home. The Chinese chronicle, later Arabic names, and Bengali readings of eastern India stay side by side.',
        'juan.fu': 'Xuanzang’s pilgrimage · 629–645 CE',
        'juan.lian1': 'West from Chang’an, a hundred thousand li',
        'juan.lian2': 'East with palm-leaf scriptures',
        'juan.audienceTitle': 'Who it is for',
        'juan.audience': 'Museum visitors · classrooms · Arabic readers · Bengali readers',
        'juan.sceneTitle': 'Where it is used',
        'juan.scene': 'Gallery kiosk · classroom screen · cultural-centre theme day · a browser at home',
        'juan.howTitle': 'How to look',
        'juan.how1': 'Click a stop. Ancient names come first; modern names match today’s China: Chang’an is Xi’an.',
        'juan.how2': 'Read the red notes: chronicle from the Great Tang Records, novel from Journey to the West.',
        'juan.how3': 'Press Play Journey to walk all seventeen years and twenty-nine stops.',
        'juan.enter': 'Open the scroll',
        'juan.oss': 'Map engine adapted from NguyenTruongAnLab/xuanzang-journey (MIT). Place-names, storytelling, page design and chronicle/novel notes are original to this team.',
        'offline.banner': 'Basemap tiles need a network. Stops, the story text and audio still work offline.',
        'nav.listen': 'Listen',
        'nav.stop': 'Stop',
        'nav.fold': 'Close',
        'nav.unfold': 'Open',
        'nav.mulu': 'Index',
        'nav.juan': 'Scroll',
        'nav.voiceGroup': 'Narration',
        'nav.langGroup': 'Language',
        'nav.seal': 'Westward',
        'nav.panel': 'This stop',
        'mulu.title': 'Index · 29 stops',
        'illustration.stamp': 'Plates',
        'voice.zh': '中文',
        'voice.en': 'EN',
        'voice.bi': 'Bilingual',
        'bz.kickerQuiz': 'Vermilion notes',
        'bz.kickerReveal': 'Vermilion notes',
        'bz.kickerChoice': 'A choice on the road',
        'bz.kickerChoiceAfter': 'After the choice',
        'bz.peopleSay': 'What people usually say',
        'bz.nowCite': 'now',
        'bz.collect': 'Keep in the seal-book',
        'bz.toChoice': 'One more: the choice he faced',
        'bz.cue': 'Vermilion notes',
        'bz.cueAgain': 'Read the notes again',
        'bz.close': 'Close',
        'yinpu.kicker': 'Seal-book',
        'yinpu.title': 'Seals of the western road',
        'yinpu.empty': 'No seal yet. At Chang’an, Dunhuang, Gaochang, Nalanda and the return, set down a vermilion note: chronicle, novel, or both.',
        'yinpu.summary': 'Five vermilion notes of discernment, three ink seals of choice. I have read {n} places on the real western road.',
        'yinpu.zhuLabel': 'Vermilion notes · five',
        'yinpu.moLabel': 'Ink seals of choice · three',
        'yinpu.full': 'The path is complete. Chronicle is the road; the novel is the play. Keep both, and do not mistake one for the other.',
        'yinpu.open': 'Seals still open. Key stops will ask for another vermilion stroke.',
        'yinpu.btn': 'Notes {done}/{total}'
    },
    
    vi: {
        // Navigation
        'nav.title': 'Hành Trình Huyền Trang (629-645)',
        'nav.about': 'Giới Thiệu',
        'nav.language': 'Ngôn Ngữ',
        
        // Controls
        'controls.play': 'Bắt Đầu Hành Trình',
        'controls.pause': 'Tạm Dừng',
        'controls.startYear': '629',
        'controls.endYear': '645',
        'controls.currentYear': 'Năm: {year}',
        
        // Timeline
        'timeline.title': 'Thời Gian Hành Trình',
        'timeline.phase1': 'Khởi Hành & Con Đường Tơ Lụa',
        'timeline.phase2': 'Trung Á',
        'timeline.phase3': 'Học Tập Ở Ấn Độ',
        'timeline.phase4': 'Trở Về',
        
        // Emotions
        'emotion.excited': 'Phấn Khích',
        'emotion.tired': 'Mệt Mỏi',
        'emotion.contemplative': 'Trầm Tư',
        'emotion.peaceful': 'An Yên',
        'emotion.determined': 'Quyết Tâm',
        'emotion.reverent': 'Cung Kính',
        'emotion.triumphant': 'Chiến Thắng',
        
        // Info Panel
        'info.selectLocation': 'Chọn một địa điểm',
        'info.clickMarker': 'Nhấp vào điểm đánh dấu để xem chi tiết',
        'info.modernName': 'Tên Hiện Đại',
        'info.ancientName': 'Tên Cổ Đại',
        'info.country': 'Quốc Gia',
        'info.duration': 'Thời Gian Lưu Trú',
        'info.arrival': 'Đến',
        'info.departure': 'Rời Đi',
        'info.travelTime': 'Thời Gian Di Chuyển Từ Điểm Trước',
        'info.description': 'Mô Tả',
        'info.historicalContext': 'Bối Cảnh Lịch Sử',
        'info.buddhistContext': 'Bối Cảnh Phật Giáo',
        'info.xuanzangExperience': 'Trải Nghiệm Của Huyền Trang',
        'info.historicalEvents': 'Sự Kiện Lịch Sử',
        'info.sources': 'Nguồn & Tham Khảo',
        'info.emotion': 'Tâm Trạng',
        'info.noImagesAvailable': 'Không có hình ảnh lịch sử',
        'info.imageLoadError': 'Không tải được hình ảnh',
        
        // Summary Panel
        'summary.title': 'Tổng Quan Hành Trình',
        'summary.duration': 'Thời gian:',
        'summary.distance': 'Quãng đường:',
        'summary.current': 'Hiện tại:',
        'summary.progress': 'Tiến trình:',
        'summary.details': 'Chi Tiết Địa Điểm',
        
        // Illustration Panel
        'illustration.title': 'Hình Ảnh Địa Điểm',
        'illustration.previous': 'Ảnh trước',
        'illustration.next': 'Ảnh tiếp theo',
        
        // Bookmark
        'bookmark.button': 'Đánh Dấu',
        'bookmark.saved': 'Đã Đánh Dấu',
        
        // Quote
        'quote.xuanzang': 'Huyền Trang',
        
        // Search
        'search.placeholder': 'Tìm kiếm địa điểm...',
        'search.label': 'Tìm kiếm địa điểm trong hành trình',
        'search.noResults': 'Không tìm thấy địa điểm',
        
        // Share
        'share.title': 'Chia sẻ địa điểm này',
        'share.copyLink': 'Sao chép liên kết',
        'share.linkCopied': 'Đã sao chép liên kết!',
        
        // Modal
        'modal.aboutTitle': 'Về Hành Trình Huyền Trang',
        'modal.intro': 'Bản đồ tương tác này kể hành trình 17 năm (629–645) của nhà sư Huyền Trang: năm 629, ông rời Trường An (nay là Tây An) bất chấp lệnh cấm đi lại, sang Ấn Độ học Phật pháp, rồi mang kinh điển Phạn ngữ về; sau đó ông ghi lại chuyến đi trong Đại Đường Tây Vực Ký. Bản đồ kể từng trạm; tiểu thuyết Tây Du Ký lấy cảm hứng từ đó nhưng là hư cấu, không phải lịch sử.',
        'modal.keyFacts': 'Thông Tin Chính:',
        'modal.duration': 'Thời gian hành trình: 17 năm (629–645), theo cách tính truyền thống. Tên cổ trước: Trường An là Tây An, Lương Châu là Vũ Uy.',
        'modal.distance': 'Đối tượng: khách bảo tàng, lớp học lịch sử, buổi nói chuyện ở nhà văn hóa, gia đình.',
        'modal.purpose': 'Nơi dùng: kiosk triển lãm, màn hình lớp học, ngày chủ đề văn hóa, trình duyệt tại nhà. Mục đích: sang Ấn Độ học Phật pháp, rồi mang kinh điển về.',
        'modal.legacy': 'Bút son tách sử khỏi diễn nghĩa: sử theo Đại Đường Tây Vực Ký, diễn nghĩa theo Tây Du Ký. Đây là học hỏi lẫn nhau: sang Ấn Độ học Phật pháp, rồi mang kinh điển về.',
        'modal.oss': 'Công cụ bản đồ phỏng theo NguyenTruongAnLab/xuanzang-journey (MIT). Tên đất, kể chuyện và thiết kế trang do nhóm biên soạn; sử liệu từng trạm vẫn theo Đại Đường Tây Vực Ký.',
        
        // Map Style
        'mapStyle.switch': 'Kiểu Bản Đồ',
        'mapStyle.modern': 'Bản Đồ Hiện Đại',
        'mapStyle.ancient': 'Phong Cách Cổ Đại',
        
        // Basemap Layers
        'basemap.esriNatGeo': 'ESRI Địa Lý',
        'basemap.esriWorldImagery': 'ESRI Vệ Tinh',
        'basemap.esriStreet': 'ESRI Đường Phố',
        'basemap.shadedRelief': 'Bản Đồ Địa Hình',
        
        // Accessibility
        'a11y.mapRegion': 'Bản đồ tương tác hiển thị hành trình của Huyền Trang',
        'a11y.timelineSlider': 'Thanh trượt thời gian để điều hướng qua các năm',
        'a11y.playButton': 'Phát hoặc tạm dừng hoạt ảnh hành trình',
        'a11y.languageButton': 'Chuyển đổi ngôn ngữ',
        'a11y.keyboardShortcuts': 'Phím Tắt',
        'a11y.arrowKeys': 'Phím mũi tên (← →) - Điều hướng thời gian',
        'a11y.spaceKey': 'Space - Phát/Tạm dừng',
        'a11y.tabKey': 'Tab - Điều hướng các điều khiển',
        'a11y.enterKey': 'Enter - Kích hoạt nút',
        'panel.source': 'Dựa trên Đại Đường Tây Vực Ký và Tiểu sử Tam Tạng Pháp Sư. Bút son đối chiếu sử với Tây Du Ký.',
        'panel.scene': 'Dùng cho: bảo tàng · lớp học lịch sử · nhà văn hóa',
        'juan.track': 'CMIT quốc tế · Trao quyền số · Học hỏi lẫn nhau trên đường Tây hành',
        'juan.fu': 'Huyền Trang cầu pháp · 629–645',
        'juan.lian1': 'Tây xuất Trường An, mười vạn dặm',
        'juan.lian2': 'Đông quy với kinh lá bối',
        'juan.audienceTitle': 'Đối tượng',
        'juan.audience': 'Khách bảo tàng · lớp học lịch sử · bạn đọc tiếng Ả Rập · bạn đọc tiếng Bengal',
        'juan.sceneTitle': 'Nơi dùng',
        'juan.scene': 'Kiosk triển lãm · màn hình lớp học · ngày chủ đề văn hóa · trình duyệt tại nhà',
        'juan.howTitle': 'Cách xem',
        'juan.how1': 'Bấm một trạm. Tên cổ đứng trước; tên hiện nay theo địa danh Trung Quốc ngày nay: Trường An là Tây An.',
        'juan.how2': 'Bút son: sử theo Đại Đường Tây Vực Ký, diễn nghĩa theo Tây Du Ký.',
        'juan.how3': 'Bấm Bắt đầu hành trình để đi trọn 17 năm, 29 trạm.',
        'juan.how4': 'Mở Giao lưu: cách đọc tiếng Ả Rập cho thấy tên gọi sau này của cùng một thành phố; cách đọc tiếng Bengal bổ sung các nước Đông Ấn còn thiếu trong 29 trạm.',
        'juan.enter': 'Mở cuốn',
        'juan.oss': 'Công cụ bản đồ phỏng theo NguyenTruongAnLab/xuanzang-journey (MIT). Tên đất, kể chuyện, thiết kế trang và ghi chú sử – diễn nghĩa do nhóm biên soạn.',
        'offline.banner': 'Bản đồ nền cần mạng. Các trạm, lời kể và âm thanh vẫn dùng được khi ngoại tuyến.',
        'nav.listen': 'Nghe',
        'nav.stop': 'Dừng',
        'nav.fold': 'Đóng',
        'nav.unfold': 'Mở',
        'nav.hujian': 'Giao lưu',
        'nav.mulu': 'Mục lục',
        'nav.juan': 'Cuộn',
        'nav.voiceGroup': 'Lời kể',
        'nav.langGroup': 'Ngôn ngữ',
        'nav.seal': 'Tây hành',
        'nav.panel': 'Trạm này',
        'mulu.title': 'Mục lục · 29 trạm',
        'illustration.stamp': 'Minh họa',
        'voice.zh': '中文',
        'voice.en': 'EN',
        'voice.bi': 'Song ngữ',
        'bz.kickerQuiz': 'Bút son biện chân',
        'bz.kickerReveal': 'Bút son',
        'bz.kickerChoice': 'Lựa chọn trên đường',
        'bz.kickerChoiceAfter': 'Sau lựa chọn',
        'bz.peopleSay': 'Người ta thường nói',
        'bz.nowCite': 'nay',
        'bz.collect': 'Vào ấn phổ',
        'bz.toChoice': 'Còn một câu hỏi: ông đã chọn thế nào',
        'bz.cue': 'Bút son biện chân',
        'bz.cueAgain': 'Xem lại bút son',
        'bz.close': 'Đóng',
        'yinpu.kicker': 'Ấn phổ',
        'yinpu.title': 'Tây hành ấn phổ',
        'yinpu.empty': 'Chưa đóng ấn. Tại Trường An, Đôn Hoàng, Cao Xương, Nalanda và ngày trở về, hãy ghi một nét son: sử, diễn nghĩa hay cả hai.',
        'yinpu.summary': 'Năm ấn son biện chân, ba ấn mực lựa chọn. Tôi đã đọc {n} chỗ trên đường Tây hành thật.',
        'yinpu.zhuLabel': 'Ấn son biện chân · năm',
        'yinpu.moLabel': 'Ấn mực lựa chọn · ba',
        'yinpu.full': 'Đường đã trọn. Sử là lối đi, diễn nghĩa là vở diễn. Giữ cả hai, đừng nhầm lẫn.',
        'yinpu.open': 'Ấn vẫn còn mở. Các trạm then chốt sẽ mời bạn thêm một nét son.',
        'yinpu.btn': 'Bút son {done}/{total}'
    },

    zh: {
        'nav.title': '西行记 · 玄奘求法（629–645）',
        'nav.about': '说书',
        'nav.language': '语言',
        'controls.play': '开讲西行',
        'controls.pause': '暂停',
        'controls.startYear': '贞观三年',
        'controls.endYear': '贞观十九年',
        'controls.currentYear': '公元 {year} 年',
        'timeline.title': '西行时间',
        'timeline.phase1': '偷渡出关 · 丝路',
        'timeline.phase2': '西域诸国',
        'timeline.phase3': '天竺求法',
        'timeline.phase4': '载经东归',
        'emotion.excited': '振奋',
        'emotion.tired': '疲乏',
        'emotion.contemplative': '沉思',
        'emotion.peaceful': '安宁',
        'emotion.determined': '决意',
        'emotion.reverent': '礼敬',
        'emotion.triumphant': '凯旋',
        'info.selectLocation': '点选一处停驻',
        'info.clickMarker': '点击地图标记，听这一站的故事',
        'info.modernName': '今地名',
        'info.ancientName': '古地名',
        'info.country': '今属',
        'info.duration': '停留',
        'info.arrival': '抵达',
        'info.departure': '离开',
        'info.travelTime': '距上一站行程',
        'info.description': '本事',
        'info.benshi': '本事',
        'info.fayuan': '法缘',
        'info.qinli': '亲历',
        'info.dangshi': '当时',
        'nav.mulu': '目录',
        'nav.rujuan': '入卷',
        'nav.juan': '卷',
        'info.historicalContext': '史地背景',
        'info.buddhistContext': '佛寺与法缘',
        'info.xuanzangExperience': '玄奘亲历',
        'info.historicalEvents': '当时大事',
        'info.sources': '依据',
        'info.emotion': '心境',
        'info.noImagesAvailable': '暂无历史图像',
        'info.imageLoadError': '图像未能载入',
        'summary.title': '行程总览',
        'summary.duration': '历时：',
        'summary.distance': '里程：',
        'summary.current': '此刻：',
        'summary.progress': '进度：',
        'summary.details': '本站细目',
        'illustration.title': '本站图像',
        'illustration.previous': '上一张',
        'illustration.next': '下一张',
        'bookmark.button': '记下此站',
        'bookmark.saved': '已记下',
        'quote.xuanzang': '玄奘',
        'search.placeholder': '检索停驻…',
        'search.label': '检索西行地点',
        'search.noResults': '没有找到',
        'share.title': '分享此站',
        'share.copyLink': '复制链接',
        'share.linkCopied': '已复制',
        'modal.aboutTitle': '说书 · 西行记',
        'modal.intro': '贞观三年，长安（今西安）僧人玄奘违禁西行，十七年、五万余里、一百三十八国，求法东归，留下《大唐西域记》。这张交互地图逐站讲本事；小说《西游记》取材于此，不能倒过来当成历史。',
        'modal.keyFacts': '纲目：',
        'modal.duration': '历时十七年（629–645）。古地名与今地名对照：长安即今西安，凉州即今武威。',
        'modal.distance': '适用对象：博物馆观众、中学历史课堂、文化宫讲座、家庭亲子。',
        'modal.purpose': '应用场景：展厅一体机导览、课堂大屏说书、文化宫主题日。',
        'modal.legacy': '朱批辨史实与演义，不把小说当成历史。参赛主题为数媒国际专项赛「数字赋能·文明互鉴」：西行是去学，东归是把所学带回。',
        'modal.enLine': 'Xuanzang left Chang’an in 629 to learn Sanskrit, not to deliver a slogan. Arabic readings name the same cities again in a later tongue. Bengali readings add the eastern Indian countries left off the twenty-nine stops.',
        'nav.hujian': '互鉴',
        'juan.how4': '点「互鉴」：阿拉伯读法看七座城的后来名字，孟加拉读法补上主线没画的东印度四国。',
        'modal.oss': '地图引擎二次创作自开源项目 NguyenTruongAnLab/xuanzang-journey（MIT）。地名、说书、卷面，以及史实与演义的对照，均为创作组原创；站点史实仍依《大唐西域记》《大慈恩寺三藏法师传》。',
        'mapStyle.switch': '底图',
        'mapStyle.modern': '今图',
        'mapStyle.ancient': '古风',
        'basemap.esriNatGeo': '国家地理',
        'basemap.esriWorldImagery': '卫星影像',
        'basemap.esriStreet': '街道',
        'basemap.shadedRelief': '地貌晕渲',
        'a11y.mapRegion': '玄奘西行交互地图',
        'a11y.timelineSlider': '按年份拖动时间轴',
        'a11y.playButton': '播放或暂停行程',
        'a11y.languageButton': '切换语言',
        'a11y.keyboardShortcuts': '键盘',
        'a11y.arrowKeys': '左右方向键切换站点',
        'a11y.spaceKey': '空格 播放/暂停',
        'a11y.tabKey': 'Tab 切换控件',
        'a11y.enterKey': '回车 确认',
        'panel.source': '据《大唐西域记》《大慈恩寺三藏法师传》。朱批为说书对照，不替代原书。',
        'panel.scene': '适用：博物馆导览 · 课堂说书 · 文化宫讲座',
        'juan.track': '数媒国际专项赛 · 数字赋能·文明互鉴 · 西行求法，与沿途对读',
        'juan.enTitle': 'A Record of the Western Journey',
        'juan.enLine': 'He walked west to study, then carried the scriptures home. The Chinese chronicle, later Arabic names, and Bengali readings of eastern India stay side by side.',
        'juan.fu': '玄奘求法 · 贞观三年至十九年',
        'juan.lian1': '西出长安十万里',
        'juan.lian2': '东归贝叶五千言',
        'juan.audienceTitle': '适用对象',
        'juan.audience': '博物馆观众 · 中学课堂 · 阿拉伯语读者 · 孟加拉语读者',
        'juan.sceneTitle': '应用场景',
        'juan.scene': '展厅一体机跟着走 · 课堂大屏说书 · 文化宫主题日 · 家中打开网页按站听',
        'juan.howTitle': '怎么看',
        'juan.how1': '点地图站点，听这一站的本事。古地名在前，今地名对准今天的中国：长安即今西安。',
        'juan.how2': '看朱批：红笔是《大唐西域记》史实，墨批对照小说《西游记》。',
        'juan.how3': '点「开讲西行」，沿十七载、二十九站走一遍。',
        'juan.enter': '入卷',
        'juan.oss': '地图引擎二次创作自开源 NguyenTruongAnLab/xuanzang-journey（MIT）。地名、说书、卷面、史实与演义对照为创作组原创，站点史实仍依《大唐西域记》。',
        'offline.banner': '底图需联网加载；站点、说书与语音可离线使用。',
        'nav.listen': '听此站',
        'nav.stop': '止声',
        'nav.fold': '收卷',
        'nav.unfold': '展卷',
        'nav.mulu': '目录',
        'nav.juan': '卷',
        'nav.voiceGroup': '讲解语言',
        'nav.langGroup': '语言',
        'nav.seal': '西行',
        'nav.panel': '本站说书',
        'mulu.title': '西行目录 · 二十九站',
        'illustration.stamp': '插图',
        'voice.zh': '中文',
        'voice.en': 'EN',
        'voice.bi': '双语',
        'bz.kickerQuiz': '朱批辨真',
        'bz.kickerReveal': '朱批',
        'bz.kickerChoice': '路线抉择',
        'bz.kickerChoiceAfter': '抉择之后',
        'bz.peopleSay': '大家常这么说',
        'bz.nowCite': '今',
        'bz.collect': '收入印谱',
        'bz.toChoice': '还有一问：当时他怎么选',
        'bz.cue': '朱批辨真',
        'bz.cueAgain': '重温朱批',
        'bz.close': '合',
        'yinpu.kicker': '数字印章',
        'yinpu.title': '西行印谱',
        'yinpu.empty': '尚未落印。到长安、敦煌、高昌、那烂陀、东归长安，辨一辨哪些落在史实，哪些落在演义。',
        'yinpu.summary': '五枚辨真朱印，三枚抉择墨印。我读懂了 {n} 处真实西行。',
        'yinpu.zhuLabel': '辨真朱印 · 五枚',
        'yinpu.moLabel': '抉择墨印 · 三枚',
        'yinpu.full': '归途已完。史实是路，演义是戏。两者都要，只是不要认错。',
        'yinpu.open': '印未满。关键站会再请你落一笔朱批。',
        'yinpu.btn': '朱批 {done}/{total}'
    }
};

// Current language state
let currentLanguage = 'zh';

// Initialize i18n system
function initI18n() {
    const storedLang = localStorage.getItem('xuanzang-language');
    if (storedLang && translations[storedLang]) {
        currentLanguage = storedLang;
        return;
    }
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('vi')) currentLanguage = 'vi';
    else if (browserLang.startsWith('en')) currentLanguage = 'en';
    else currentLanguage = 'zh';
}

// Get translation for a key
function t(key, params = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key] || key;
    
    // Replace parameters
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
}

// Change language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('xuanzang-language', lang);
        updateUILanguage();
    }
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Update all UI elements with translations
function updateUILanguage(options) {
    // Update navbar
    const navTitle = document.querySelector('.navbar-brand');
    if (navTitle) navTitle.textContent = t('nav.title');
    
    const aboutBtn = document.getElementById('aboutNavBtn') || document.querySelector('[data-bs-target="#aboutModal"]');
    if (aboutBtn) aboutBtn.textContent = t('nav.about');
    const muluBtn = document.getElementById('muluBtn');
    if (muluBtn) muluBtn.textContent = t('nav.mulu');
    
    // Update controls
    const playBtn = document.getElementById('playBtn');
    if (playBtn && !window.isPlaying) {
        playBtn.textContent = t('controls.play');
    }
    
    // Update timeline labels
    const startYear = document.querySelector('.timeline-controls .me-2');
    if (startYear) startYear.textContent = t('controls.startYear');
    
    const endYear = document.querySelector('.timeline-controls .ms-2');
    if (endYear) endYear.textContent = t('controls.endYear');
    
    // Update modal
    const modalTitle = document.querySelector('#aboutModal .modal-title');
    if (modalTitle) modalTitle.textContent = t('modal.aboutTitle');
    
    const modalBody = document.querySelector('#aboutModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <p>${t('modal.intro')}</p>
            <p lang="en">${t('modal.enLine')}</p>
            <p><strong>${t('modal.keyFacts')}</strong></p>
            <ul>
                <li>${t('modal.duration')}</li>
                <li>${t('modal.distance')}</li>
                <li>${t('modal.purpose')}</li>
                <li>${t('modal.legacy')}</li>
            </ul>
            <p class="small text-muted mb-0">${t('modal.oss')}</p>
        `;
    }
    
    // Update info panel if visible
    const locationTitle = document.getElementById('locationTitle');
    if (locationTitle && locationTitle.textContent === t('info.selectLocation')) {
        locationTitle.textContent = t('info.selectLocation');
        document.getElementById('locationInfo').textContent = t('info.clickMarker');
    }
    
    // Update summary panel
    const summaryTitle = document.getElementById('summaryTitle');
    if (summaryTitle) summaryTitle.textContent = t('summary.title');
    
    const summaryTotalDuration = document.getElementById('summaryTotalDuration');
    if (summaryTotalDuration) summaryTotalDuration.textContent = t('summary.duration');
    
    const summaryTotalDistance = document.getElementById('summaryTotalDistance');
    if (summaryTotalDistance) summaryTotalDistance.textContent = t('summary.distance');
    
    const summaryCurrentLocation = document.getElementById('summaryCurrentLocation');
    if (summaryCurrentLocation) summaryCurrentLocation.textContent = t('summary.current');
    
    const summaryProgress = document.getElementById('summaryProgress');
    if (summaryProgress) summaryProgress.textContent = t('summary.progress');
    
    const summaryDetailsTitle = document.getElementById('summaryDetailsTitle');
    if (summaryDetailsTitle) summaryDetailsTitle.textContent = t('summary.details');
    
    // Update illustration panel
    const illustrationTitle = document.getElementById('illustrationTitle');
    if (illustrationTitle) illustrationTitle.textContent = t('illustration.title');
    
    const carouselPrev = document.getElementById('carouselPrev');
    if (carouselPrev) carouselPrev.setAttribute('aria-label', t('illustration.previous'));
    
    const carouselNext = document.getElementById('carouselNext');
    if (carouselNext) carouselNext.setAttribute('aria-label', t('illustration.next'));
    
    // Update bookmark button
    const bookmarkText = document.getElementById('bookmarkText');
    if (bookmarkText) {
        const isBookmarked = bookmarkText.textContent === t('bookmark.saved') || 
                           document.getElementById('bookmarkBtn')?.classList.contains('btn-warning');
        bookmarkText.textContent = isBookmarked ? t('bookmark.saved') : t('bookmark.button');
    }
    
    // Update current year display
    if (window.journeyData && window.currentStepIndex !== undefined) {
        const currentLocation = window.journeyData[window.currentStepIndex];
        if (currentLocation) {
            const currentYearEl = document.getElementById('currentYear');
            if (currentYearEl) {
                currentYearEl.textContent = t('controls.currentYear', { year: currentLocation.year });
            }
        }
    }
    
    if (typeof applyChromeI18n === 'function') applyChromeI18n();
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : currentLanguage;

    // Trigger custom event for other components to update
    if (!(options && options.silent)) {
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
    }
}

// Get available languages
function getAvailableLanguages() {
    return Object.keys(translations);
}
