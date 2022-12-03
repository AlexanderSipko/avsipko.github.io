
const predict_number = {
    1: "Характерна для сильных, самоуверенных личностей с мощной волей и большими амбициями.Таких людей не напугать работой, ведь они очень энергичны (чем часто превосходят соперников). Не нарушают данных обещаний. Привыкли побеждать по жизни, предпочитая пустой болтовне активные поступки. Порой могут проявлять агрессию, пренебрегая мнением других людей. Это яркие лидеры, которые не зависят от окружающих.",
    2: "Число крайностей. Его обладатели в дате рождения по натуре весьма противоречивы – часто в них совмещаются совершенно разные качества. Зато они превосходно адаптируются к изменяющейся ситуации. Стремятся к гармонии, балансу во всём. Склонны к резким изменениям настроения, которые не вызваны внешними факторами, а их причина кроется во внутреннем состоянии.",
    3: "Ещё одна неоднозначная цифра, достаточно непростая. Такие особы тоже нередко меняют своё настроение, у них отсутствуют чётко выраженные моральные принципы. Ещё их отличает слабохарактерность: легко идут на поводу у окружающих, могут подстраиваться под ситуации, меняя своё мнение. Очень мнительны, тревожны, сильно подвержены стрессовым факторам. Главная проблема Троек – они почти не находятся в настоящем моменте, то мысленно возвращаясь в прошлое, то сбегая в будущее.",
    4: "Символ прочности в нумерологии. Эти люди всегда стоят на своём, отличаются храбростью, имеют чёткие жизненные принципы. Переубедить их в чём-либо – практически нереально. На них можно положиться в любой ситуации, зная, что они точно не подведут. По жизни ведут себя ответственно, исполнительно, верно и преданно. Могут быть очень религиозными. Ещё нумерологически цифра 4 – это символ гармонии (каждый из её углов связан с одной из стихий). Поэтому Четвёрок сложно вывести их состояния внутреннего равновесия.",
    5: "Пятёрка – неоднозначное и двойственное число, связано с энергией разрушений. Но изменения в лучшую сторону возможны благодаря накопленному опыту. Число 5 – олицетворение жизненного пути, преодолеваемого индивидом. Там не видать ни конца, ни краю, нужно учиться наслаждаться его процессом, получая нужные знания и умения. Также пятёрка – цифра рисковая, требующая от своих обладателей полагаться только на себя, на свой ум и суждения. Такие личности по характеру выдержанные, уравновешенные, терпеливые. Им главное не сдаваться и идти к намеченным целям – тогда всё получится.",
    6: "Надёжное, стабильное число, которое наделяет обладателей чувством собственного достоинства, верой в себя. Такие люди точно знают, что им нужно и как это получить. Предпочитают действовать медленно, но уверенно: не боятся потерять уйму времени на достижение желаемого. И их не напугать никакими трудностями или преградами. Для них главное в жизни – чтобы не покушались на их свободу. Их привлекает природа, они гармоничны, имеют творческие таланты, рассудительны, спокойны, но могут страдать от внутренних противоречий.",
    7: "Таинственное число. Скрывает в себе загадку, присущую каждому из нас. Семёркам очень нравится учиться: их привлекает новая информация, новые знания, в противном случае они рискуют заскучать. Также, находясь без действия и целей долгое время, они начинают поощрять свои негативные привычки. Поэтому обучение для них играет роль спасительного жилета. Эти личности самоотверженны и трудолюбивы, чего ожидают и от окружающих.",
    8: "Число 8 – это олицетворение финансового успеха. Такой человек может многого добиться в жизни, правда, лишь за счёт усердной работы. Его отличает сильная воля, умение добиваться поставленных целей. Благодаря сильному характеру Восьмёрки легко справляются с конкурентами, но делают это не так агрессивно, как Единицы, а более дипломатично. Стараются действовать миролюбиво, не в ущерб окружающим.",
    9: "Девятки невероятно настойчивы, целеустремлённые, сильные духом люди, которые не боятся принимать серьёзные решения. Им удаётся становиться успешными, а также с лёгкостью добиваться общественного признания. Часто их можно обнаружить на очень высоких постах. Девятка вобрала в себе все позитивные черты предшествующих цифр. Конечно, в нумерологии существуют и другие, более сложные, но интересные и информативные методики познания личности человека по дате рождения. Лучше всего если вы найдёте хорошую школу по данному направлению или будете лично обучаться у проверенного специалиста. Ведь вопрос «С чего начать самостоятельное обучение нумерологии?» — это хорошо, но любые знания всегда эффективнее получать под контролем опытных преподавателей."
}

const tosts = [
    "Первый тост: До свидания! Трезвыми мы с вами сегодня не увидимся!",
    "Друзья мои, нельзя пить индивидуально, давайте будем напиваться коллективно. За великую силу коллектива!",
    "Давайте выпьем за то, чтобы у нас осталось столько горя, сколько капель останется в наших бокалах.",
    "Дорогой друг, желаю, чтобы у тебя всегда было легкое сердце и тяжелые карманы!",
    "Пусть в вашей жизни будут люди, за которых хочется выпить, а не те, из-за которых хочется напиться!",
    "Пьянству – бой! Так выпьем перед боем!", "Выпьем за тех, кто, отсутствуя, незримо присутствует здесь!", "Выпьем за нашу удачу, хоть иногда пусть бьется в наших силках птица счастья!", "Счастья! Добра и зеленого бабла!", "Дорогие друзья, давайте выпьем за страсть! Страсть как хочется выпить!", "Лучше поздно, чем не до дна!", "Ручки, ножки стали зябнуть – не пора ли нам дерябнуть?!", "Говорят, что молодость – это недостаток, который проходит. Мне же хочется, чтобы время проходило, а недостаток оставался. Выпьем за всех мужчин с таким недостатком!", "Чтобы ваши желания офигевали от ваших возможностей!", "Давайте выпьем за дружбу, ведь именно она умножает радости и разделяет печаль!", "Поскольку поводов пить больше нет, то давайте выпьем за «проводку»! Итак, пьем и думаем про водку!", "Будь здоров сто веков!", "Чтобы елось и пилось, чтоб хотелось и моглось, чтобы всюду и везде было с кем и было где!", "С наступающим алкогольным опьянением, товарищи!", "Рождение блага есть благо. Рождение может быть человека, идеи, дерева, злака, чувства… И вот сейчас я хочу выпить за рождение дружбы на этом вечере.", "Предлагаю выпить за понимание! Без него в нашей жизни было бы не так все мирно и гармонично.", "Я желаю тебе кучу денег, море любви и уйму времени, чтобы насладиться этим!", "Выпьем за честных и скромных людей! Тем более, что нас осталось так мало…", "Елки-палки, лес густой, Оштрафуют за простой! Выпьем, братцы, за мужчин Мы без видимых причин!", "С хорошей компанией, как говорится, грех не выпить. Так давайте не будем грешить, а, подняв бокалы, выпьем. Вздрогнули!", "Слабые женщины питают страсть к сильным мужчинам. Сильные мужчины питают страсть к женским слабостям. За единство противоположностей!", "Я хочу выпить за то, чтобы не видеть зла, не слышать зла, не помнить зла и не делать зла!", "Давайте выпьем за то, чтобы наши друзья ходили на банкеты, а наши враги – на костылях!", "Пусть всё всегда проходит мимо, Кроме здоровья, денег и интима!", "За свою семью рюмочку я пью!", "Выпьем за то, чтобы столы ломились от изобилия, а кровати – от любви!", "Еще Аристотель говорил, что у двух друзей одна душа на двоих. Так выпьем за единство наших душ!", "Бог дал день на выпивку, но никто не знает, что это за день. Так будем же пить ежедневно, чтобы не пропустить!", "За то, чтобы в глазах наших любимых не было слез и обмана!", "Водка – наш враг. Но кто сказал, что мы боимся врагов?!", "Ведя борьбу с зеленым змеем, В душе вполне мы все его клянем, Но долг всегда отдать умеем: Раз надо выпить, мы и пьем!", "С возрастом начинают изменять память, зрение, изменяет даже близкий человек, и только старые друзья остаются неизменными. За друзей!", "Кто друг для всех, того я другом не считаю. Так выпьем за узкий круг друзей!", "Состав пожеланий всегда одинаков: Побольше здоровья и денежных знаков!", "Пейте как мы, пейте с нами, пейте больше нас, пейте быстрее нас!", "Давайте выпьем за бизнес и секс, что по-русски означает: за успехи в делах и счастье в личной жизни!", "Выпьем за ВДВ – Веру, Доблесть и Везение!", "Говорят, что человек, достигший вершин власти, потерян для друзей. Поднимем бокалы за то, чтобы дружба не умирала даже у вершин власти!", "Давайте выпьем за то, что бы мы шли, на нас напали деньги и мы не могли от них отбиться!", "Нет такого понедельника, который не уступил бы место вторнику. Нет такого места, которого не уступил бы один джентльмен другому. За джентльменов!", "Совершим «опрокидон» за здоровье наших жен!", "Как много одиноких мужчин мечтает о хороших женах! Кстати, женатые мужчины – тоже… Так пусть же осуществятся наши мечты!", "Выпьем за жен и любовниц, за то, чтобы они никогда не встретились!", "Улыбки женщин ранят, манят, обжигают, и раненые мужики за женщин выпивают!", "Хорошая жена – спасение жизни. Так выпьем же за это!", "Выпьем за женщин, которые заставляют чаще биться наши сердца!", "Если вам изменяет память, радуйтесь, что не жена. Выпьем за наших верных жен!", "Неудачник хватается за любовь, как утопающий за соломинку. Истинный джентльмен всегда имеет под рукой спасательный круг женских сердец. За истинных джентльменов, то есть за нас!", "Выпьем за опьянение прекрасными женщинами, вином и песнями!", "Выпьем за нас, красивых. Ну, а если мы не красивые, то мужики зажрались!", "Любимого нужно холить и лелеять: от этого у него растет холка и лелейка!", "Если мужчина не поддается обольщению женщин, он просто чурбан. А ими хорошо только печь топить. Мы же выпьем сейчас за настоящих мужчин!", "Путь к сердцу мужчины лежит через его желудок. Так давайте скорее выпьем за мужчин, чтобы не мучить их желудки!", "Давайте выпьем за то, чтобы в вашем доме всегда была мука, а не мука. Чтобы у вас была норка на плечах, а не норка от крота на даче. За муку и норку!!! За достаток в вашем доме!", "За нас, красивых! За них, богатых!", "За нас, красивых! За вас, доверчивых…", "Поднимем бокалы за ВЛКСМ – за Всех Ласковых, Коммуникабельных, Смелых Мужчин!", "Примем дозу за мужчин, которые чуть красивее обезьяны, но при такой внешности имеют темперамент льва!", "Комментарии [12]", "«Выпьем за нас, красивых. Ну, а если мы не красивые, то мужики зажрались!» Хм, логичнее: «…Ну, а если мы не красивые, то мужики ещё трезвые!»", "Логичнее 🙂", "или «Мне столько не выпить!»", "Старый женский тост: «Красивыми мы были и остались, ведь главное не в изгибах наших тел! Пусть плачут те, кому мы не достались и сдохнут те кто нас не захотел!»", "Лариса, вы пьяны! Идите на свежий воздух!", "Чтобы жили все богато и у всех росла зарплата!", "Не женское дело тосты!", "А с каких пор, уважаемый, умение говорить тосты принадлежит гендеру?", "За любовь без памяти и за память о той любви.", "За нас красивых и в будущем богатых.", "За будущее наших детей.", "Едет Маша на тракторе «Стахановец», поле пашет. И вдруг откапывает могилу феодала. По древней традиции целует феодала, он оживает и говорит: Маша, Я исполню любых твоих 33 желания» Маша: «Не надо 33, исполни одно, но 33 раза»! На 3-м разе феодал умер! Так давайте выпьем за тех Маш, которые не дали возродиться феодализму!!!"
    
]

const omar_h = [
    '<p>Не делай зла — вернется бумерангом, Не плюй в колодец — будешь воду пить, Не оскорбляй того, кто ниже рангом, А вдруг придется, что-нибудь просить. Не предавай друзей, их не заменишь, И не теряй любимых — не вернешь, Не лги себе — со временем проверишь, Что этой ложью сам себя ты предаёшь. </p>', '<p>Дарить себя — не значит продавать. И рядом спать — не значит переспать. Не отомстить — не значит все простить. Не рядом быть — не значит не любить. </p>', '<p>Не завидуй тому, кто силен и богат, за рассветом всегда наступает закат. С этой жизнью короткою, равною вдоху, Обращайся, как с данной тебе напрокат. </p>', '<p>Кто понял жизнь тот больше не спешит, Смакует каждый миг и наблюдает, Как спит ребёнок, молится старик, Как дождь идёт и как снежинки тают. В обыкновенном видит красоту, В запутанном простейшее решенье, Он знает, как осуществить мечту, Он любит жизнь и верит в воскресенье, Он понял то, что счастье не в деньгах, И их количество от горя не спасет, Но кто живёт с синицею в руках, Свою жар-птицу точно не найдет Кто понял жизнь, тот понял суть вещей, Что совершенней жизни только смерть, Что знать, не удивляясь, пострашней, Чем что-нибудь не знать и не уметь. </p>', '<p>Чтоб мудро жизнь прожить, знать надобно немало, Два важных правила запомни для начала: Ты лучше голодай, чем что попало есть, И лучше будь один, чем вместе с кем попало. </p>', '<p>Можно соблазнить мужчину, у которого есть жена. Можно соблазнить мужчину, у которого есть любовница. Но нельзя соблазнить мужчину, У которого есть любимая женщина. </p>', '<p>Не смешно ли весь век по копейке копить, Если вечную жизнь все равно не купить? Эту жизнь тебе дали, мой милый, на время, — Постарайся же времени не упустить. </p>', '<p>Мы больше в этот мир вовек не попадем, вовек не встретимся с друзьями за столом. Лови же каждое летящее мгновенье — его не подстеречь уж никогда потом. </p>', '<p>Я думаю, что лучше одиноким быть, Чем жар души «кому-нибудь» дарить. Бесценный дар отдав кому попало, Родного встретив, не сумеешь полюбить. </p>', '<p>Как часто, в жизни ошибаясь, теряем тех, кем дорожим. Чужим понравиться стараясь, порой от ближнего бежим. Возносим тех, кто нас не стоит, а самых верных предаем. Кто нас так любит, обижаем, и сами извинений ждем. </p>', '<p>Мы источник веселья — и скорби рудник. Мы вместилище скверны — и чистый родник. Человек, словно в зеркале мир — многолик. Он ничтожен — и он же безмерно велик! </p>', '<p>В одно окно смотрели двое. Один увидел дождь и грязь. Другой — листвы зелёной вязь, весну и небо голубое. В одно окно смотрели двое. </p>', '<p>Чем ниже человек душой, тем выше задирает нос. Он носом тянется туда, куда душою не дорос. </p>', '<p>Красивым быть – не значит им родиться, Ведь красоте мы можем научиться. Когда красив душою Человек – Какая внешность может с ней сравниться? </p>', '<p>Кто жизнью бит, тот большего добьется. Пуд соли съевший выше ценит мед. Кто слезы лил, тот искренней смеется. Кто умирал, тот знает, что живет! </p>', '<p>Сорваный цветок должен быть подарен, начатое стихотворение — дописано, а любимая женщина — счастлива, иначе и не стоило браться за то, что тебе не по силам. </p>', '<p>Слышал я, что в раю, мол, сады и луга, Реки меда, кисельные, мол, берега. Дай мне чашу вина! Не люблю обещаний. Мне наличность презренная дорога. </p>', '<p>Скупец, не причитай, что плохи времена. Все, что имеешь, — трать. Запомни: жизнь одна. Сколь злата ни награбь, а в мир иной отсюда Не унесешь, представь, и горсточки зерна. </p>', '<p>Коль можешь, не тужи о времени бегущем, Не отягчай души ни прошлым, ни грядущим. Сокровища свои потрать, пока ты жив; Ведь все равно в тот мир предстанешь неимущим. </p>', '<p>Из всех, которые ушли в тот дальний путь. Назад вернулся ли хотя бы кто-нибудь? Не оставляй добра на перекрестке этом: К нему возврата нет, — об этом не забудь. </p>'
]


        function getYourNumber(props) {
            /// predict your date number
            function get_sum(num) {
                return [...num].map( item => {return (item*1 > 0)? item*1: 0 }).reduce( (add, a) => add + a);
            }
            let number = get_sum(props);

            while (number > 9) {
                number = get_sum(number.toString())
            }
            return number;
        };

        function handlerChang() {
           
            let text = document.querySelector("#date--1").value
            let number = getYourNumber(text)
            let state = predict_number[number]
            let answer = document.querySelector(".answer")

            let innerHTML = ` 
                <p>Ваша цифра: ${number}</p>
                <hr>
                <p>${state}</p>
                `
            answer.innerHTML = innerHTML
            answer.classList.add("predict--text");
          }



// часы

function update_clock() {
    let date = new Date();
    let houres = date.getHours();
    let minutes = date.getMinutes();
    let secods = date.getSeconds();

    if (houres < 10 ) houres = "0" + houres;
    if (minutes < 10 ) minutes = "0" + minutes;
    if (secods < 10 ) secods = "0" + secods;
    document.querySelector("#clock").textContent =  `${houres}:${minutes}:${secods}`
}
// update time every second
setInterval(update_clock, 1000)

//


// случайное значение Да или Нет
function getYesOrNo() {
    return (Math.random( ) > 0.5)? 1:0 
}


function renderYesOrNo() {
    let answer = getYesOrNo()
    let count_push = YesOrNo.dataset.number
    let yes = count_push.split("//")[0]
    let no = count_push.split("//")[1]

    if (answer === 1) {
        answer = "Да!"
        yes = yes*1 + 1
    } else {
        answer = "Нет!"
        no = no*1 + 1
    }
    YesOrNo.dataset.number = `${yes}//${no}`
    answer = `${answer}`
    
    YesOrNo.innerHTML = `${answer}`
   
    !(YesOrNo.classList.contains("predict--date")) ? YesOrNo.classList.add("predict--date"):PaymentResponse;

    let butYesOrNo = document.querySelector(".renderYesOrNo")
    butYesOrNo.textContent = `Да-${yes} / Нет-${no}`
}



// рандомный тост
function renderTost() {
    let renderT = document.querySelector("#id--RenderTost")
    !(renderT.classList.contains("predict--date")) ? renderT.classList.add("predict--date"):PaymentResponse;
    
    var rand = Math.random()*tosts.length | 0;
    var rValue = tosts[rand];
    renderT.textContent = rValue
}

// рандомный тост
function renderOmar() {

    // если локальной переменной нет то передаем в нее массив если есть но она пустая то повторяем
    if (localStorage.getItem('test') == null) {
        localStorage.setItem('test', JSON.stringify(omar_h));
    } else if (JSON.parse(localStorage.test).length == 1) {
        localStorage.setItem('test', JSON.stringify(omar_h));
    }

    // читаем массив и получаем случайную фразу после этого удалаем ее из локальной переменной
    var omarH = JSON.parse(localStorage.test)
    var rand = Math.random()*omarH.length | 0;
    var rValue = omarH[rand];
    omarH.splice(rand, 1)
    localStorage.test = JSON.stringify(omarH)

    let renderO = document.querySelector("#id--RenderOmar")
    !(renderO.classList.contains("predict--date")) ? renderO.classList.add("predict--date"):PaymentResponse;
    renderO.innerHTML = rValue
}  

document.addEventListener("DOMContentLoaded", function(){
    localStorage.removeItem('test')
})
