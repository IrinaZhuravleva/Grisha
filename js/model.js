let tralivali;

const base = [{
    id: 0,
    question: 'море',
    answer: 'sea',
}, {
    id: 1,
    question: 'лес',
    answer: 'forest'
}, {
    id: 2,
    question: 'гора',
    answer: 'mountain'
}, {
    id: 3,
    question: 'мельница',
    answer: 'mill'
}, {
    id: 4,
    question: 'холм',
    answer: 'hill'
}, {
    id: 5,
    question: 'кит',
    answer: 'wale'
}, {
    id: 6,
    question: 'песок',
    answer: 'sand'
}, {
    id: 7,
    question: 'солнце',
    answer: 'sun'
}, {
    id: 8,
    question: 'луна',
    answer: 'moon'
}, {
    id: 9,
    question: 'ложка',
    answer: 'spoon'
}, {
    id: 10,
    question: 'мальчик',
    answer: 'boy'
},
{"id":11,"question":"1","answer":"one"},
{"id":12,"question":"2","answer":"two"},
{"id":13,"question":"3","answer":"three"},
{"id":14,"question":"4","answer":"four"},
{"id":15,"question":"5","answer":"five"},
{"id":16,"question":"6","answer":"six"},
{"id":17,"question":"7","answer":"seven"},
{"id":18,"question":"8","answer":"eight"},
{"id":19,"question":"9","answer":"nine"},
{"id":20,"question":"10","answer":"ten"},
{"id":21,"question":"цвет","answer":"colour"},
{"id":22,"question":"черный","answer":"black"},
{"id":23,"question":"синий","answer":"blue"},
{"id":24,"question":"коричневый","answer":"brown"},
{"id":25,"question":"серый","answer":"grey"},
{"id":26,"question":"зеленый","answer":"green"},{"id":27},{"id":28,"question":"оранжевый","answer":"orange"},{"id":29,"question":"розовый","answer":"pink"},{"id":30,"question":"красный","answer":"red"},{"id":31,"question":"фиолетовый","answer":"purple"},{"id":32,"question":"белый","answer":"white"},{"id":33,"question":"желтый","answer":"yellow"},{"id":34,"question":"о","answer":"about"},
{"id":35,"question":"выше, над","answer":"above"},{"id":36,"question":"добавь","answer":"add"},{"id":37,"question":"прилагательное","answer":"adjective"},{"id":38,"question":"наречие","answer":"adverb"},{"id":39,"question":"снова","answer":"again"},{"id":40,"question":"и","answer":"and"},{"id":41,"question":"ответ, ответь","answer":"answer"},{"id":42,"question":"спроси","answer":"ask"},{"id":43,"question":"заглавная буква","answer":"capital letter"},{"id":44,"question":"повтори под ритм","answer":"chant"},{"id":45,"question":"проверь","answer":"check"},{"id":46,"question":"выбери","answer":"choose"},{"id":47,"question":"обведи","answer":"circle"},{"id":48,"question":"закончи","answer":"complete"},{"id":49,"question":"правильный","answer":"correct"},{"id":50,"question":"посчитай","answer":"count"},{"id":51,"question":"крестик, зачеркни","answer":"cross"},{"id":52,"question":"опиши","answer":"describe"},{"id":53,"question":"сделай","answer":"do/make"},{"id":54,"question":".(точка)","answer":"dot"},{"id":55,"question":"нарисуй","answer":"draw"},{"id":56,"question":"каждый","answer":"each"},{"id":57,"question":"неправильный","answer":"false"},{"id":58,"question":"найди","answer":"find"},{"id":59,"question":"следуй, следи","answer":"follow"},{"id":60,"question":"из","answer":"from"},{"id":61,"question":"повелительное наклонение","answer":"imperative"},{"id":62,"question":"в","answer":"in"},{"id":63,"question":"соедини","answer":"join"},{"id":64,"question":"буква","answer":"letter"},{"id":65,"question":"слушай","answer":"listen (to)"},{"id":66,"question":"посмотри","answer":"look (at)"},{"id":67,"question":"соедини/сравни","answer":"match"},{"id":68,"question":"середина","answer":"middle"},{"id":69,"question":"отрицательный","answer":"negative"},{"id":70,"question":"следующий, затем","answer":"next"},{"id":71,"question":"существительное","answer":"noun"},{"id":72,"question":"поставь номер/номер","answer":"number"},
{"id":73,"question":"одно лишнее","answer":"odd-one-out"},
{"id":74,"question":"порядок/поставь по порядку","answer":"order"},{"id":75,"question":"картина/рисунок","answer":"picture"},{"id":76,"question":"стихотворение","answer":"poem"},{"id":77,"question":"укажи","answer":"point"},{"id":78,"question":"помни/вспомни","answer":"remember"},{"id":79,"question":"рифма","answer":"rhyme"},{"id":80,"question":"верно","answer":"right"},{"id":81,"question":"вопрос","answer":"question"},{"id":82,"question":"читай","answer":"read"},{"id":83,"question":"повтори","answer":"repeat"},{"id":84,"question":"скажи","answer":"say"},{"id":85,"question":"пой","answer":"sing"},{"id":86,"question":"звук","answer":"sound"},{"id":87,"question":"история","answer":"story"},{"id":88,"question":"таблица","answer":"table"},{"id":89,"question":"потом","answer":"then"},{"id":90,"question":"вещь","answer":"thing"},{"id":91,"question":"подумай","answer":"think"},{"id":92,"question":"галочка/отметь галочкой","answer":"tick"},{"id":93,"question":"поговори","answer":"talk"},{"id":94,"question":"правда","answer":"true"},{"id":95,"question":"подчеркни","answer":"underline"},{"id":96,"question":"используй","answer":"use"},{"id":97,"question":"слово","answer":"word"},{"id":98,"question":"напиши","answer":"write"},{"id":99,"question":"неверно","answer":"wrong"},{"id":100,"question":"тебя/себя","answer":"yourself"},{"id":101,"question":"Меня зовут Гриша","answer":"My name's Grisha"},{"id":102,"question":"Кто это?","answer":"Who is this?"},{"id":103,"question":"Как дела?","answer":"How are you?"},{"id":104,"question":"Я хорошо, спасибо","answer":"I'm fine, thank you"},{"id":105,"question":"Простите","answer":"I'm sorry"},{"id":106,"question":"могу/умею","answer":"can"},{"id":107,"question":"радуга","answer":"rainbow"},
{"id":108,"question":"What's your name?","answer":"Как тебя зовут?"},
{"id":109,"question":"ручка","answer":"pen"},
{"id":110,"question":"линейка","answer":"rooler"},
{"id":111,"question":"ластик","answer":"rubber"},
{"id":112,"question":"портфель","answer":"school bag"},
{"id":113,"question":"дверь","answer":"door"},
{"id":114,"question":"окно","answer":"window"},
{"id":115,"question":"Что это?","answer":"What's this?"},
{"id":116,"question":"Можно мне мой пенал?","answer":"Can I have my pencil case?"},
{"id":117,"question":"Могу я посмотреть твой карандаш?","answer":"Can I see your pencil?"},{"id":118,"question":"пожалуйста","answer":"please"},{"id":119,"question":"Вот (держите), пожалуйства","answer":"Here you aree"},{"id":120,"question":"открывай","answer":"open"},{"id":121,"question":"закрывай","answer":"close"},{"id":122,"question":"любить/нравиться","answer":"like"},{"id":123,"question":"кукла","answer":"doll"},{"id":124,"question":"медвежонок плюшевый","answer":"teddy"},{"id":125,"question":"воздушный змей","answer":"kite"},{"id":126,"question":"Этот мяч твой?","answer":"Is this your ball?"},{"id":127,"question":"Это мой велик","answer":"This is my bike"},{"id":128,"question":"но","answer":"but"},{"id":129,"question":"крошечный","answer":"tiny"},{"id":130,"question":"здесь","answer":"here"},{"id":131,"question":"любимый","answer":"favourite"},{"id":132,"question":"где","answer":"where"},{"id":133,"question":"тоже","answer":"too"},{"id":134,"question":"пушистый/меховой","answer":"furry"},{"id":135,"question":"толстый","answer":"fat"},{"id":136,"question":"возраст","answer":"age"},{"id":137,"question":"руки","answer":"arms"},{"id":138,"question":"ноги","answer":"legs"},{"id":139,"question":"нос","answer":"nose"},{"id":140,"question":"лицо","answer":"face"},{"id":141,"question":"уши","answer":"ears"},{"id":142,"question":"пальцы (на руках)","answer":"fingers"},{"id":143,"question":"пальцы (на ногах)","answer":"toes"},{"id":144,"question":"руки (кисти рук)","answer":"hands"},{"id":145,"question":"глаза","answer":"eyes"},{"id":146,"question":"Это мой рот","answer":"This is my mouth"},{"id":147,"question":"Это мои руки (кисти рук)","answer":"These are my hands"},{"id":148,"question":"давайте (что-то сделаем)","answer":"Let's"},{"id":149,"question":"надевать","answer":"put on"},{"id":150,"question":"солнцезащитный крем","answer":"sun cream"},{"id":151,"question":"сначала, во-первых","answer":"first"},{"id":152,"question":"сейчас","answer":"now"},{"id":153,"question":"несколько/какой-нибудь","answer":"some"},{"id":154,"question":"бумага","answer":"paper"},{"id":155,"question":"тело","answer":"body"},{"id":156,"question":"лапы","answer":"paws"},{"id":157,"question":"все, всё","answer":"all"},{"id":158,"question":"хвост","answer":"tail"},{"id":159,"question":"вырежь","answer":"cut out"},{"id":160,"question":"согни","answer":"fold"},
{"id":161,"question":"приклей","answer":"stick"},
{"id":162,"question":"учитель","answer":"teacher"},{"id":163,"question":"ученик","answer":"pupil/student"},{"id":164,"question":"домохозяйка","answer":"housewife"},{"id":165,"question":"пожарный","answer":"fireman"},{"id":166,"question":"пилот","answer":"pilot"},{"id":167,"question":"врач","answer":"doctor"},{"id":168,"question":"фермер","answer":"farmer"},{"id":169,"question":"Он пилот","answer":"He's a pilot"},{"id":170,"question":"Она медсестра?","answer":"Is she a nurse?"},{"id":171,"question":"он","answer":"he"},{"id":172,"question":"она","answer":"she"},{"id":173,"question":"профессия","answer":"job"},{"id":174,"question":"я сейчас иду","answer":"I'm coming"},{"id":175,"question":"мясо","answer":"meat"},{"id":176,"question":"добрый","answer":"kind"},{"id":177,"question":"снова, еще раз","answer":"again"},{"id":178,"question":"есть/кушать","answer":"eat"},
{"id":179,"question":"счастливая семья","answer":"happy family"},
{"id":180,"question":"качели(для двоих)","answer":"seesaw"},
{"id":181,"question":"горка(на детской площадке)","answer":"slide"},
{"id":182,"question":"сетка/сеть","answer":"net"},{"id":183,"question":"качели","answer":"swing"},
{"id":184,"question":"дерево","answer":"tree"},{"id":185,"question":"мороженое","answer":"ice cream"},
{"id":186,"question":"Где куст?","answer":"Where is a bush?"},{"id":187,"question":"хорошая попытка","answer":"good try"},
{"id":188,"question":"для меня","answer":"for me"},{"id":189,"question":"для каждого","answer":"for everyone"},
{"id":190,"question":"так весело","answer":"so much fun"},{"id":191,"question":"играть","answer":"play"},{"id":192,"question":"хороший/милый","answer":"nice"},{"id":193,"question":"классный","answer":"cool"},
{"id":194,"question":"его","answer":"his"},
{"id":195,"question":"её","answer":"her"},{"id":196,"question":"их","answer":"their"},{"id":197,"question":"помогать","answer":"help"},{"id":198,"question":"бассейн","answer":"pool"},{"id":199,"question":"дядя","answer":"uncle"},{"id":200,"question":"тетя","answer":"aunt"},{"id":201,"question":"двоюродный брат/сестра","answer":"cousin"},{"id":202,"question":"Это книга Тома","answer":"This is Tom's book"},{"id":203,"question":"Давайте найдем!","answer":"Let's find"},{"id":204,"question":"другие","answer":"others"},{"id":205,"question":"Где они?","answer":"Where are they?"},{"id":206,"question":"Я не знаю","answer":"I don't know"},{"id":207,"question":"больше людей","answer":"more people"},{"id":208,"question":"много любви","answer":"lots of love"},{"id":209,"question":"не как любой другой","answer":"not like any other"},{"id":210,"question":"бросать","answer":"throw"},{"id":211,"question":"всё ещё","answer":"still"},{"id":212,"question":"кухня","answer":"kitchen"},{"id":213,"question":"гостиная","answer":"living room"},{"id":214,"question":"столовая","answer":"dining room"},{"id":215,"question":"спальня","answer":"bedroom"},{"id":216,"question":"ванная комната","answer":"bathroom"},{"id":217,"question":"верхний этаж","answer":"upstairs"},{"id":218,"question":"нижний этаж","answer":"downstairs"},{"id":219,"question":"дом/здания","answer":"house"},{"id":220,"question":"квартира","answer":"flat"},{"id":221,"question":"сертификат","answer":"certificate"},{"id":222,"question":"за хорошую работу","answer":"for good work"},{"id":223,"question":"идти/ехать","answer":"go"},{"id":224,"question":"показывать","answer":"show"},{"id":225,"question":"входить","answer":"come into"},
{"id":226,"question":"звезда","answer":"star"},
{"id":227,"question":"молодец(отлично сделано)","answer":"well done"},{"id":228,"question":"идите за мной","answer":"follow me"},{"id":229,"question":"через/сквозь","answer":"through"},{"id":230,"question":"стол","answer":"table"},{"id":231,"question":"стул","answer":"chair"},{"id":232,"question":"хотеть","answer":"want"},{"id":233,"question":"балкон","answer":"balcony"},{"id":234,"question":"сад","answer":"garden"},{"id":235,"question":"наш","answer":"our"},{"id":236,"question":"футболка","answer":"T-shirt"},{"id":237,"question":"брюки","answer":"trousers"},{"id":238,"question":"шорты","answer":"shorts"},{"id":239,"question":"туфли","answer":"shoes"},{"id":240,"question":"пальто","answer":"coat"},{"id":241,"question":"шляпа","answer":"hat"},{"id":242,"question":"Это её платье","answer":"This is her dress"},{"id":243,"question":"Это его носки","answer":"These are his socks"},{"id":244,"question":"класть","answer":"put"},{"id":245,"question":"корзина","answer":"basket"},{"id":246,"question":"каждый день","answer":"every day"},{"id":247,"question":"примерять(одежду)","answer":"put on"},{"id":248,"question":"футбольная команда","answer":"football team"},{"id":249,"question":"одежда","answer":"clothes"},{"id":250,"question":"примерять(одежду)","answer":"try on"},{"id":251,"question":"коробка для завтрака","answer":"lunch box"},{"id":252,"question":"бутерброд","answer":"sandwich"},{"id":253,"question":"напиток","answer":"drink"},{"id":254,"question":"печенье","answer":"biscuit"},{"id":255,"question":"помидор","answer":"tomato"},{"id":256,"question":"картофель","answer":"potato"},{"id":257,"question":"виноград","answer":"grape"},{"id":258,"question":"У меня есть яблоко","answer":"I have got an apple"},{"id":259,"question":"У меня нет груши","answer":"I have not got a pear"},{"id":260,"question":"время ланча(обеда)","answer":"lunchtime"},{"id":261,"question":"вынимать/получать","answer":"get"},{"id":262,"question":"делиться","answer":"share"},{"id":263,"question":"со мной","answer":"with me"},{"id":264,"question":"цыпленок","answer":"chick"},{"id":265,"question":"сыр","answer":"cheese"},{"id":266,"question":"вода","answer":"water"},{"id":267,"question":"сегодня","answer":"today"},{"id":268,"question":"длинный","answer":"long"},{"id":269,"question":"короткий","answer":"short"},{"id":270,"question":"блондин","answer":"blond"},{"id":271,"question":"коричневые волосы","answer":"brown"},{"id":272,"question":"кудрявый","answer":"curly"},{"id":273,"question":"прямой","answer":"straight"},{"id":274,"question":"квадрат","answer":"square"},{"id":275,"question":"круг","answer":"circle"},{"id":276,"question":"треугольник","answer":"triangle"},{"id":277,"question":"прямоугольник","answer":"rectangle"},{"id":278,"question":"новый","answer":"new"},{"id":279,"question":"там","answer":"over there"},{"id":280,"question":"друг","answer":"friend"},{"id":281,"question":"сторона","answer":"side"},{"id":282,"question":"одинаковый","answer":"same"},{"id":283,"question":"ровный/гладкий","answer":"smooth"},{"id":284,"question":"только/только что","answer":"just"},{"id":285,"question":"считать","answer":"count"},{"id":286,"question":"зубы","answer":"teeth"},{"id":287,"question":"дорогой(человек)","answer":"dear"},{"id":288,"question":"великолепный","answer":"great"},{"id":289,"question":"лучший","answer":"best"},{"id":290,"question":"высокий","answer":"tall"},
{"id":291,"question":"рассказывать о","answer":"tell about"},
{"id":292,"question":"слон","answer":"elephant"},
{"id":293,"question":"жираф","answer":"giraffe"},{"id":294,"question":"обезьяна","answer":"monkey"},{"id":295,"question":"тигр","answer":"tiger"},{"id":296,"question":"змея","answer":"snake"},{"id":297,"question":"попугай","answer":"parrot"},{"id":298,"question":"лев","answer":"lion"},{"id":299,"question":"Я люблю(мне нравится)","answer":"I like"},{"id":300,"question":"Я не люблю(мне не нравится)","answer":"I don't like"},{"id":301,"question":"но","answer":"but"},{"id":302,"question":"забавный, смешной","answer":"funny"},{"id":303,"question":"слышать","answer":"hear"},{"id":304,"question":"рычать","answer":"growl"},{"id":305,"question":"приходить","answer":"come"},{"id":306,"question":"шипеть","answer":"hiss"},{"id":307,"question":"пронхительно кричать","answer":"squawk"},{"id":308,"question":"человек/мужчина","answer":"man"},{"id":309,"question":"верно, правильно","answer":"true"},{"id":310,"question":"язык","answer":"tongue"},{"id":311,"question":"верхняя часть","answer":"top"},{"id":312,"question":"шея","answer":"neck"},{"id":313,"question":"совсем","answer":"at all"},{"id":314,"question":"лист/листья","answer":"leaf/leaves"},{"id":315,"question":"угадывать","answer":"guess"},{"id":316,"question":"Не пойми это неправильно!","answer":"Don't get it wrong"},{"id":317,"question":"итак","answer":"so"},{"id":318,"question":"рис","answer":"rice"},{"id":319,"question":"морковь","answer":"carrot"},{"id":320,"question":"йогурт","answer":"yogurt"},{"id":321,"question":"хлеб","answer":"bread"},{"id":322,"question":"молоко","answer":"milk"},{"id":323,"question":"сок","answer":"juice"},{"id":324,"question":"Ты любишь мороженое?","answer":"Do you like ice cream?"},{"id":325,"question":"Что ты любишь?","answer":"What do you like?"},{"id":326,"question":"затем","answer":"then"},{"id":327,"question":"заканчивать","answer":"finish"},{"id":328,"question":"здесь","answer":"here"},{"id":329,"question":"Не опаздывай!","answer":"Don't be late"},{"id":330,"question":"кровать","answer":"bed"},{"id":331,"question":"кафе","answer":"cafe"},{"id":332,"question":"десерт","answer":"dessert"},{"id":333,"question":"или","answer":"or"},{"id":334,"question":"голодный","answer":"hungry"},{"id":335,"question":"меню","answer":"menu"},{"id":336,"question":"песочный замок","answer":"sandcastle"},{"id":337,"question":"пляж","answer":"beach"},{"id":338,"question":"краб","answer":"crab"},{"id":339,"question":"море","answer":"sea"},{"id":340,"question":"лодка","answer":"boat"},{"id":341,"question":"ракушка","answer":"shell"},{"id":342,"question":"ракетка","answer":"bat"},{"id":343,"question":"Это хорошая идея","answer":"That's a good idea"},{"id":344,"question":"ждать","answer":"wait"},{"id":345,"question":"вместе","answer":"together"},{"id":346,"question":"удивительный","answer":"wonderful"},{"id":347,"question":"добро пожаловать/пожалуйста","answer":"welcome"},{"id":348,"question":"Не забудь","answer":"Don't forget"},{"id":349,"question":"очень","answer":"very"},{"id":350,"question":"бегать","answer":"run"},{"id":351,"question":"летать","answer":"fly"},{"id":352,"question":"ходить","answer":"walk"},{"id":353,"question":"плавать","answer":"swim"},{"id":354,"question":"взбираться/карабкаться","answer":"climb"},{"id":355,"question":"играть в футбол","answer":"play football"},{"id":356,"question":"действие","answer":"action"},{"id":357,"question":"Приятно встретиться с вами","answer":"Nice to meet you"},{"id":358,"question":"умный","answer":"clever"},{"id":359,"question":"глупый","answer":"silly"},{"id":360,"question":"что-нибудь","answer":"anything"},{"id":361,"question":"от ... до...","answer":"from ... to ..."},{"id":362,"question":"если","answer":"if"},{"id":363,"question":"пытаться","answer":"try"},{"id":364,"question":"этот/эта/это","answer":"this"},{"id":365,"question":"заставить тебя улыбаться","answer":"make you smile"},{"id":366,"question":"коврик","answer":"rug"},{"id":367,"question":"буфет/шкаф для посуды","answer":"cupboard"},{"id":368,"question":"полка","answer":"shelf"},{"id":369,"question":"подушка","answer":"pillow"},{"id":370,"question":"одеяло","answer":"blanket"},{"id":371,"question":"парта/рабочий стол","answer":"desk"},{"id":372,"question":"11","answer":"eleven"},{"id":373,"question":"12","answer":"twelve"},{"id":374,"question":"13","answer":"thirteen"},{"id":375,"question":"14","answer":"fourteen"},{"id":376,"question":"15","answer":"fifteen"},{"id":377,"question":"16","answer":"sixteen"},{"id":378,"question":"17","answer":"seventeen"},
{"id":379,"question":"письмо","answer":"letter"},
{"id":380,"question":"18","answer":"eighteen"},{"id":381,"question":"19","answer":"nineteen"},{"id":382,"question":"20","answer":"twenty"},{"id":383,"question":"убираться","answer":"tidy up"},{"id":384,"question":"чистый/прибранный/опрятный","answer":"tidy"},{"id":385,"question":"больше","answer":"more"},{"id":386,"question":"получить","answer":"get in"},{"id":387,"question":"мусорная корзина","answer":"bin"},
{"id":388,"question":"консервная банка","answer":"tin"}
];

let data;

if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem('data'));
        
} else {
    data = base;
    localStorage.setItem('data', JSON.stringify(data));
}

function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}


 