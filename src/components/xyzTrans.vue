<script>
import { Search } from '@element-plus/icons-vue'
export default
{
  name: "xyzTrans",
  data()
  {
    return{
      input1:'',
      Search:Search,
      activeNames:'',
      totalData:[
        {'id': 1, 'content': '纸浆', 'e': 'Paper pulp', 'r': 'Бумажная целлюлоза', 'f': 'Pate à papier', 'm': 'Pulpa kertas', 'w': 'Paperpulpo'},
        {'id': 2, 'content': '造纸用浆', 'e': 'Pulp for paper making', 'r': 'Целлюлоза для производства бумаги', 'f': 'Pate à papier', 'm': 'Pulpa untuk membuat kertas', 'w': 'Pulpo por paperfarado'},
        {'id': 3, 'content': '溶解浆', 'e': 'Dissolving pulp', 'r': 'Растворимая целлюлоза', 'f': 'Pate à dissoudre', 'm': 'Melarutkan pulpa', 'w': 'Solvanta pulpo'},
        {'id': 4, 'content': '风干浆', 'e': 'Air-dried pulp', 'r': 'Воздушно-сухая целлюлоза', 'f': 'Pate séchée à lair', 'm': 'Pulpa kering udara', 'w': 'Aersekigita pulpo'},
        {'id': 5, 'content': '制浆备料', 'e': 'Pulp preparation', 'r': 'Подготовка целлюлозы', 'f': 'Préparation de la pate', 'm': 'Penyediaan pulpa', 'w': 'Preparado de pulpo'},
        {'id': 6, 'content': '蒸煮漂白', 'e': 'Cooking and bleaching', 'r': 'Пропаривание и отбеливание', 'f': 'étuvage et blanchiment', 'm': 'Memasak dan pelunturan', 'w': 'Kuirado kaj blankigado'},
        {'id': 7, 'content': '浆料的筛选', 'e': 'Pulp screening', 'r': 'Сортировка целлюлозы', 'f': 'Tamisage de la pate', 'm': 'Pemeriksaan pulpa', 'w': 'Pulpa kribrado'},
        {'id': 8, 'content': '浆料的净化', 'e': 'Pulp purification', 'r': 'Очистка целлюлозы', 'f': 'Purification de la pate', 'm': 'Pembersihan pulpa', 'w': 'Pulpa purigo'},
        {'id': 9, 'content': '废纸化学浆', 'e': 'Waste paper chemical pulp', 'r': 'Макулатурная химическая целлюлоза', 'f': 'Pate chimique à base de vieux papiers', 'm': 'Pulpa kimia kertas buangan', 'w': 'Mal?parpapera kemia pulpo'},
        {'id': 10, 'content': '化学机械浆', 'e': 'Chemical mechanical pulp', 'r': 'Химическая механическая целлюлоза', 'f': 'Pate mécanique chimique', 'm': 'Pulpa mekanikal kimia', 'w': 'Kemia mekanika pulpo'},
        {'id': 11, 'content': '机械浆', 'e': 'Mechanical pulp', 'r': 'Механическая целлюлоза', 'f': 'Pate mécanique', 'm': 'Pulpa mekanikal', 'w': 'Mekanika pulpo'},
        {'id': 12, 'content': '盘磨机械浆', 'e': 'Plate mill mechanical pulp', 'r': 'Механическая целлюлоза', 'f': 'Pate mécanique de moulin à plaques', 'm': 'Pulpa mekanikal pengisar plat', 'w': 'Plata muelejo mekanika pulpo'},
        {'id': 13, 'content': '磨石磨木浆', 'e': 'Grinding stone grinding wood pulp', 'r': 'Древесная измельченная целлюлоза', 'f': 'Pate de bois broyée en meule', 'm': 'Pengisar batu pengisar pulpa kayu', 'w': 'Muelanta ?tono muelanta lignan pulpon'},
        {'id': 14, 'content': '造纸纸料纸', 'e': 'Paper stock paper', 'r': 'Бумажная масса', 'f': 'Papier de réserve', 'm': 'Kertas stok kertas', 'w': 'Papero papero'},
        {'id': 15, 'content': '纸板', 'e': 'Paperboard', 'r': 'Бумажный картон', 'f': 'Papier-carton', 'm': 'Papan kertas', 'w': 'Kartono'},
        {'id': 16, 'content': '配比(纸或纸板的)', 'e': 'Proportioning (of paper or board)', 'r': 'Пропорционирование (бумаги или картона)', 'f': 'Proportionnement (du papier ou du carton)', 'm': 'Pembahagian (kertas atau papan)', 'w': 'Proporcio (de papero a? tabulo)'},
        {'id': 17, 'content': '成形', 'e': 'Forming', 'r': 'Формирование', 'f': 'Formage', 'm': 'Membentuk', 'w': 'Formante'},
        {'id': 18, 'content': '纸层', 'e': 'Ply', 'r': 'Слои бумаги', 'f': 'Couches de papier', 'm': 'Lapis', 'w': 'Ply'},
        {'id': 19, 'content': '组成(纸或纸板的)', 'e': 'Composition (of paper or paperboard)', 'r': 'Композиция (из бумаги или картона)', 'f': 'Composition (du papier ou du carton)', 'm': 'Komposisi (kertas atau papan kertas)', 'w': 'Kunmeta?o (el papero a? kartono)'},
        {'id': 20, 'content': '纸幅', 'e': 'Paper width', 'r': 'Ширина бумаги', 'f': 'Largeur du papier', 'm': 'Lebar kertas', 'w': 'Papera lar?o'},
        {'id': 21, 'content': '纸页', 'e': 'Paper sheet', 'r': 'Лист', 'f': 'Feuille', 'm': 'Lembaran kertas', 'w': 'Paperfolio'},
        {'id': 22, 'content': '净纸幅宽', 'e': 'Net paper width', 'r': 'Ширина бумаги нетто', 'f': 'Largeur nette du papier', 'm': 'Lebar kertas bersih', 'w': 'Neta papera lar?o'},
        {'id': 23, 'content': '卷筒(纸或纸板的)', 'e': 'Roll (of paper or paperboard)', 'r': 'Рулон (из бумаги или картона)', 'f': 'Bobine (de papier ou de carton)', 'm': 'Gulung (kertas atau papan kertas)', 'w': 'Rulo (el papero a? kartono)'},
        {'id': 24, 'content': '尺寸(纸页的)', 'e': 'Size (of paper)', 'r': 'Размер (бумаги)', 'f': 'Taille (du papier)', 'm': 'Saiz (kertas)', 'w': 'Grandeco (de papero)'},
        {'id': 25, 'content': '纵向(纸的)', 'e': 'Lengthwise (of paper)', 'r': 'По длине (бумаги)', 'f': 'Dans le sens de la longueur (du papier)', 'm': 'Panjang (kertas)', 'w': 'La?longe (de papero)'},
        {'id': 26, 'content': '横向(纸的)', 'e': 'Horizontal (paper)', 'r': 'Горизонтальный (из бумаги)', 'f': 'Horizontal (du papier)', 'm': 'Mendatar (kertas)', 'w': 'Horizontala (papero)'},
        {'id': 27, 'content': 'Z向(纸或纸板的)', 'e': 'Z-direction (of paper or board)', 'r': 'Z-направление (бумаги или картона)', 'f': 'Direction Z (du papier ou du carton)', 'm': 'Arah Z (kertas atau papan)', 'w': 'Z-direkto (de papero a? tabulo)'},
        {'id': 28, 'content': '正面(纸的)', 'e': 'Front side (paper)', 'r': 'Лицевая сторона (бумаги)', 'f': 'Face avant (du papier)', 'm': 'Bahagian hadapan (kertas)', 'w': 'Anta?a flanko (papero)'},
        {'id': 29, 'content': '网面(纸的)', 'e': 'Web (paper)', 'r': 'Полотно (бумаги)', 'f': 'Bande (du papier)', 'm': 'Web (kertas)', 'w': 'Retejo (papero)'},
        {'id': 30, 'content': '损纸', 'e': 'Damaged paper', 'r': 'Поврежденная бумага', 'f': 'Papier endommagé', 'm': 'Kertas rosak', 'w': 'Difektita papero'},
        {'id': 31, 'content': '整饰完成', 'e': 'Finishing', 'r': 'Финишная обработка', 'f': 'Finition', 'm': 'Penamat', 'w': 'Finado'},
        {'id': 32, 'content': '加工(纸的)', 'e': 'Processing (paper)', 'r': 'Обработка (бумаги)', 'f': 'Traitement (du papier)', 'm': 'Pemprosesan (kertas)', 'w': 'Prilaborado (papero)'},
        {'id': 33, 'content': '浆板', 'e': 'Pulp board', 'r': 'Целлюлозный картон', 'f': 'Carton à pate', 'm': 'Papan pulpa', 'w': 'Pulpa tabulo'},
        {'id': 34, 'content': '湿浆板', 'e': 'Wet pulp board', 'r': 'Влажный целлюлозный картон', 'f': 'Carton humide', 'm': 'Papan pulpa basah', 'w': 'Malseka pulpa tabulo'},
        {'id': 35, 'content': '制浆机械设备', 'e': 'Pulping machinery and equipment', 'r': 'Машины и оборудование для варки целлюлозы', 'f': 'Machines et équipements pour la fabrication de la pate à papier', 'm': 'Mesin pulpa dan peralatan', 'w': 'Pulpa ma?inaro kaj ekipa?o'},
        {'id': 36, 'content': '拉木机', 'e': 'Wood pulling machine', 'r': 'Тянущие машины для древесины', 'f': 'Tireuses à bois', 'm': 'Mesin tarik kayu', 'w': 'Ligno-tira ma?ino'},
        {'id': 37, 'content': '圆锯机', 'e': 'Circular sawing machine', 'r': 'Круглопильные станки', 'f': 'Scies circulaires', 'm': 'Mesin menggergaji bulat', 'w': 'Cirkla segilma?ino'},
        {'id': 38, 'content': '卧式平衡圆锯机', 'e': 'Horizontal balanced circular sawing machine', 'r': 'Горизонтальные балансирные круглопильные станки', 'f': 'Scies circulaires horizontales équilibrées', 'm': 'Mesin menggergaji bulat seimbang mendatar', 'w': 'Horizontala ekvilibra cirkla segilma?ino'},
        {'id': 39, 'content': '排锯', 'e': 'Row saws', 'r': 'Пилорамы', 'f': 'Scie à chantourner', 'm': 'Gergaji baris', 'w': 'Vico segiloj'},
        {'id': 40, 'content': '移动式圆锯机', 'e': 'Mobile circular sawing machine', 'r': 'Мобильные циркулярные пилы', 'f': 'Scies circulaires mobiles', 'm': 'Mesin menggergaji bulat mudah alih', 'w': 'Po?telefona cirkla segilma?ino'},
        {'id': 41, 'content': '原木池劈木机', 'e': 'Log pool splitter', 'r': 'Раскалыватели бревен', 'f': 'Fendeurs de b?ches', 'm': 'Pembahagi kolam log', 'w': 'Log na?ejo spliter'},
        {'id': 42, 'content': '卧式劈木机', 'e': 'Horizontal wood splitting machine', 'r': 'Горизонтальные станки для раскалывания бревен', 'f': 'Fendeuses de b?ches horizontales', 'm': 'Mesin membelah kayu mendatar', 'w': 'Horizontala lignofendanta ma?ino'},
        {'id': 43, 'content': '去节机', 'e': 'Knuckle removal machine', 'r': 'Вязальные машины', 'f': 'Machines à détisser', 'm': 'Mesin penyingkiran buku jari', 'w': 'Foriga ma?ino de fingrobazartiko'},
        {'id': 44, 'content': '去皮', 'e': 'Debarking', 'r': 'Кора', 'f': 'écor?age', 'm': 'Debarking', 'w': 'Sen?eligado'},
        {'id': 45, 'content': '圆筒剥皮机', 'e': 'Cylinder peeling machine', 'r': 'Цилиндрические зачистные машины', 'f': 'éplucheuses à cylindres', 'm': 'Mesin mengelupas silinder', 'w': 'Cilindra sen?eliga ma?ino'},
        {'id': 46, 'content': '枝枉材圆筒剥皮机', 'e': 'Cylinder peeling machine for branches and bent wood', 'r': 'Цилиндрические очистители для веток и сучьев', 'f': 'éplucheuses à cylindres pour brindilles et branches', 'm': 'Mesin mengupas silinder untuk dahan dan kayu bengkok', 'w': 'Cilindra sen?eliga ma?ino por bran?oj kaj fleksita ligno'},
        {'id': 47, 'content': '环式剥皮机', 'e': 'Ring peeler', 'r': 'Кольцевые зачистные машины', 'f': 'éplucheuses à anneau', 'm': 'Pengupas cincin', 'w': 'Sen?eligilo de ringoj'},
        {'id': 48, 'content': '摆臂刺辊进料型环式剥皮机', 'e': 'Ring peeler with swing arm and stab roller feed', 'r': 'Кольцевые зачистные машины с поворотным рычагом и подачей ножевого ролика', 'f': 'Eplucheuses à anneaux avec bras pivotant et alimentation par rouleau à couteaux', 'm': 'Pengupas cincin dengan lengan hayun dan suapan penggelek tikam', 'w': 'Ringa sen?eligilo kun svingbrako kaj pikrulrula nutrado'},
        {'id': 49, 'content': '链刀型环式剥皮机', 'e': 'Chain knife type ring peeler', 'r': 'Кольцевые зачистные машины с цепным ножом', 'f': 'éplucheuses à anneaux avec couteau à cha?ne', 'm': 'Pengupas cincin jenis pisau rantai', 'w': '?entran?ilo tipo ringa sen?eligilo'},
        {'id': 50, 'content': '卡盘型环式剥皮机', 'e': 'Chuck type ring peeler', 'r': 'Кольцевые зачистные машины патронного типа', 'f': 'Eplucheuses à anneaux à mandrin', 'm': 'Pengupas cincin jenis chuck', 'w': 'Chuck-tipo ringa sen?eligilo'},
        {'id': 51, 'content': '刀式剥机皮', 'e': 'Knife type peeling machine', 'r': 'Ножевые очистители', 'f': 'éplucheuse à couteaux', 'm': 'Mesin kupas jenis pisau', 'w': 'Tran?ilo tipo sen?eliganta ma?ino'},
        {'id': 52, 'content': '刀盘', 'e': 'Knife plate', 'r': 'Ножевые диски', 'f': 'Disques à couteaux', 'm': 'Pinggan pisau', 'w': 'Tran?ila telero'},
        {'id': 53, 'content': '刀辊', 'e': 'Knife roller', 'r': 'Ножевые вальцы', 'f': 'Rouleaux à couteaux', 'm': 'Penggelek pisau', 'w': 'Tran?ilo rulilo'},
        {'id': 54, 'content': '飞刀', 'e': 'Flying knife', 'r': 'Летающие ножи', 'f': 'Couteaux volants', 'm': 'Pisau terbang', 'w': 'Fluga tran?ilo'},
        {'id': 55, 'content': '水力剥皮机', 'e': 'Hydraulic peeler', 'r': 'Гидравлические зачистные машины', 'f': 'éplucheuses hydrauliques', 'm': 'Pengupas hidraulik', 'w': 'Hidra?lika sen?eligilo'},
        {'id': 56, 'content': '削片', 'e': 'Chipping', 'r': 'Щепорезка', 'f': 'éplucheuse', 'm': 'Kepingan', 'w': 'Chipping'},
        {'id': 57, 'content': '削片机', 'e': 'Chipper', 'r': 'Измельчитель', 'f': 'Déchiqueteuse', 'm': 'Chipper', 'w': 'Chipper'},
        {'id': 58, 'content': '盘式削片机', 'e': 'Disc chipper', 'r': 'Дисковые измельчители', 'f': 'Déchiqueteuses à disque', 'm': 'Pemotong cakera', 'w': 'Diska ?izilo'},
        {'id': 59, 'content': '辊式削片机', 'e': 'Roller chipper', 'r': 'Вальцовые измельчители', 'f': 'Déchiqueteuses à rouleaux', 'm': 'Pemotong penggelek', 'w': 'Rul?ililo'},
        {'id': 60, 'content': '双锥盘削片机', 'e': 'Double Cone Disc Chipper', 'r': 'Дисковый измельчитель с двойным конусом', 'f': 'Déchiqueteuse à double c?ne', 'm': 'Pencicip Cakera Kon Berganda', 'w': 'Duobla Konusa Disko Chipper'},
        {'id': 61, 'content': '螺旋型双锥盘削片机', 'e': 'Spiral type double cone disc chipper', 'r': 'Спиральный тип двухконусного дискового измельчителя', 'f': 'Déchiqueteuse à double c?ne de type spirale', 'm': 'Pemotong cakera kon berkembar jenis lingkaran', 'w': 'Spirala tipo duobla konusa disko chipper'},
        {'id': 62, 'content': '板皮削片机', 'e': 'Plate peeler', 'r': 'Пластинчатый измельчитель', 'f': 'Broyeur à plaques', 'm': 'Pengupas pinggan', 'w': 'Sen?eligilo de teleroj'},
        {'id': 63, 'content': '料片筛', 'e': 'Flake Sieve', 'r': 'Просеиватели хлопьев', 'f': 'Tamis à flocons', 'm': 'Penapis Serpihan', 'w': 'Floka Kribrilo'},
        {'id': 64, 'content': '料片再碎机', 'e': 'Chip reshredder', 'r': 'Измельчители стружки', 'f': 'Déchiqueteurs de copeaux', 'm': 'Pecah semula cip', 'w': 'Chip-reshredder'},
        {'id': 65, 'content': '鼠笼式再碎机', 'e': 'Squirrel cage reshredder', 'r': 'Измельчители с беличьей клеткой', 'f': 'Déchiqueteurs à cage décureuil', 'm': 'Penghancur semula sangkar tupai', 'w': 'Sciurka?o reshredder'},
        {'id': 66, 'content': '锤式再碎机', 'e': 'Hammer reshredder', 'r': 'Молотковые измельчители', 'f': 'Broyeurs à marteaux', 'm': 'Pemukul semula', 'w': 'Martelo reshredder'},
        {'id': 67, 'content': '料片的筛分析', 'e': 'Sieve analysis of flakes', 'r': 'Ситовой анализ хлопьев', 'f': 'Analyse granulométrique des flocons', 'm': 'Analisis ayak serpihan', 'w': 'Kribrila analizo de flokoj'},
        {'id': 68, 'content': '辊式切草机', 'e': 'Roll type reed cutter', 'r': 'Роликовые язычковые резаки', 'f': 'Coupeurs à rouleaux', 'm': 'Pemotong buluh jenis gulung', 'w': 'Rultipa kano tran?ilo'},
        {'id': 69, 'content': '盘式切苇机', 'e': 'Disc type reed cutter', 'r': 'Дисковые язычковые резаки', 'f': 'Découpeurs de peignes à disque', 'm': 'Pemotong buluh jenis cakera', 'w': 'Diskotipa kano tran?ilo'},
        {'id': 70, 'content': '切布机', 'e': 'Cloth cutting machine', 'r': 'Резаки для ткани', 'f': 'Coupeurs de tissu', 'm': 'Mesin pemotong kain', 'w': '?tofa tran?ma?ino'},
        {'id': 71, 'content': '辊式蔗渣开包机', 'e': 'Roll type bagasse opening machine', 'r': 'Валковые разрыхлители багассы', 'f': 'Ouvreurs de bagasse à rouleaux', 'm': 'Mesin pembuka bagasse jenis gulung', 'w': 'Rulo tipo bagasa malferma ma?ino'},
        {'id': 72, 'content': '蔗渣松散机', 'e': 'Bagasse loosening machine', 'r': 'Машины для разрыхления багассы', 'f': 'Machines à détacher la bagasse', 'm': 'Mesin longgar bagasse', 'w': 'Bagason malfiksiga ma?ino'},
        {'id': 73, 'content': '锤式除髓机', 'e': 'Hammer type demulcent machine', 'r': 'Молотковый тип машины для обезжиривания', 'f': 'Dénoyauteuse à marteaux', 'm': 'Mesin demulsen jenis tukul', 'w': 'Martela tipo demulca ma?ino'},
        {'id': 74, 'content': '鼠笼式除姗机', 'e': 'Squirrel cage type de-pithing machine', 'r': 'Беличья клетка для обезволашивания', 'f': 'Dénoyauteuse à cage décureuil', 'm': 'Mesin de-pithing jenis sangkar tupai', 'w': 'Sciurka?o-tipa de-pithing-ma?ino'},
        {'id': 75, 'content': '辊式除尘机', 'e': 'Roller type de-pithing machine', 'r': 'Вальцовый станок', 'f': 'Dénoyauteuse à rouleaux', 'm': 'Mesin de-pithing jenis roller', 'w': 'Rulila tipo de-pithing ma?ino'},
        {'id': 76, 'content': '水膜除尘器', 'e': 'Water film dust collector', 'r': 'Пылеуловитель водяной пленки', 'f': 'Dépoussiéreur à film deau', 'm': 'Pengumpul habuk filem air', 'w': 'Akvofilma polvokolektilo'},
        {'id': 77, 'content': '风选机', 'e': 'Wind separator', 'r': 'Ветровые сепараторы', 'f': 'Séparateurs à vent', 'm': 'Pemisah angin', 'w': 'Vento apartigilo'},
        {'id': 78, 'content': '振动筛', 'e': 'Vibrating screen', 'r': 'Вибрационные грохоты', 'f': 'Cribles vibrants', 'm': 'Skrin bergetar', 'w': 'Vibra ekrano'},
        {'id': 79, 'content': '半振动筛', 'e': 'Semi-vibrating screen', 'r': 'Полувибрационные грохоты', 'f': 'Cribles semi-vibrants', 'm': 'Skrin separuh bergetar', 'w': 'Duonvibra ekrano'},
        {'id': 80, 'content': '摇振筛', 'e': 'Shaking screen', 'r': 'Встряхивающие грохоты', 'f': 'Cribles à secousses', 'm': 'Skrin bergegar', 'w': 'Ekrano tremante'},
        {'id': 81, 'content': '摇摆筛', 'e': 'Shaking screen', 'r': 'Качающиеся грохоты', 'f': 'Cribles à bascule', 'm': 'Skrin bergegar', 'w': 'Ekrano tremante'},
        {'id': 82, 'content': '料片仓', 'e': 'Chip bin', 'r': 'Бункеры для стружки', 'f': 'Bacs à copeaux', 'm': 'Tong cip', 'w': '?ipujo'},
        {'id': 83, 'content': '锥底木片仓', 'e': 'Cone bottom wood chip bin', 'r': 'Бункер для стружки с коническим дном', 'f': 'Bac à copeaux à fond conique', 'm': 'Tong serpihan kayu bawah kon', 'w': 'Konusa malsupra lignopecetoujo'},
        {'id': 84, 'content': '活底料片仓', 'e': 'Live-bottom chip bin', 'r': 'Бункеры для стружки с живым дном', 'f': 'Bacs à copeaux à fond vivant', 'm': 'Tong cip bawah langsung', 'w': 'Viva malsupra pecetoujo'},
        {'id': 85, 'content': '间歇蒸煮', 'e': 'Intermittent cooking', 'r': 'Прерывистая варка', 'f': 'Cuisson intermittente', 'm': 'Memasak sekejap-sekejap', 'w': 'Intermita kuirado'},
        {'id': 86, 'content': '连续蒸煮', 'e': 'Continuous cooking', 'r': 'Непрерывная варка', 'f': 'Cuisson continue', 'm': 'Memasak berterusan', 'w': 'Kontinua kuirado'},
        {'id': 87, 'content': '间接加热蒸煮', 'e': 'Indirect heating cooking', 'r': 'Приготовление с косвенным нагревом', 'f': 'Cuisson à chauffage indirect', 'm': 'Memasak pemanasan tidak langsung', 'w': 'Nerekta hejtado kuirado'},
        {'id': 88, 'content': '多级蒸煮', 'e': 'Multi-stage steaming', 'r': 'Многоступенчатое приготовление на пару', 'f': 'Cuisson à la vapeur en plusieurs étapes', 'm': 'Pengukusan pelbagai peringkat', 'w': 'Plurstadia vaporado'},
        {'id': 89, 'content': '蒸球', 'e': 'Steaming ball', 'r': 'Паровые шары', 'f': 'Boules de vapeur', 'm': 'Bebola mengukus', 'w': 'Vaporanta pilko'},
        {'id': 90, 'content': '燕球喷放轴头', 'e': 'Swallow ball spray release shaft head', 'r': 'Насадка-шарик для выпуска спрея', 'f': 'Boule davalement Tête de larbre de déclenchement du spray', 'm': 'Kepala aci pelepas semburan bola telan', 'w': 'Englutu pilkon ?pruca?on liberigas ?aftokapon'},
        {'id': 91, 'content': '立式蒸煮锅', 'e': 'Vertical steaming pot', 'r': 'Вертикальные кастрюли для приготовления на пару', 'f': 'Marmites à vapeur verticales', 'm': 'Periuk mengukus menegak', 'w': 'Vertikala vaporpoto'},
        {'id': 92, 'content': '蒸煮锅衬里', 'e': 'Steamer lining', 'r': 'Вкладыши для кастрюль', 'f': 'Doublures de cuiseur', 'm': 'Lapik pengukus', 'w': 'Tega?o de vapor?ipo'},
        {'id': 93, 'content': '装锅器', 'e': 'Pot filler', 'r': 'Наполнители для кастрюль', 'f': 'Remplisseurs de casseroles', 'm': 'Pengisi periuk', 'w': 'Potpleniga?o'},
        {'id': 94, 'content': '喷放锅', 'e': 'Spraying and releasing pot', 'r': 'Кастрюли для распыления и выпуска', 'f': 'Pots à vaporiser et à relacher', 'm': 'Menyembur dan melepaskan periuk', 'w': '?prucigi kaj liberigi poton'},
        {'id': 95, 'content': '喷放池', 'e': 'Spraying and releasing pool', 'r': 'Кастрюли для распыления и выпуска', 'f': 'Pots à vaporiser et à libérer', 'm': 'Menyembur dan melepaskan kolam', 'w': '?prucigado kaj liberiganta na?ejo'},
        {'id': 96, 'content': '立式连续蒸煮器', 'e': 'Vertical continuous steamer', 'r': 'Вертикальная пароварка непрерывного действия', 'f': 'Cuiseur à vapeur continu vertical', 'm': 'Pengukus berterusan menegak', 'w': 'Vertikala kontinua vapor?ipo'},
        {'id': 97, 'content': '横管式连续蒸煮器', 'e': 'Horizontal tube type continuous cooker', 'r': 'Пароварка непрерывного действия с поперечной трубкой', 'f': 'Cuiseur continu à tubes croisés', 'm': 'Pemasak berterusan jenis tiub mendatar', 'w': 'Horizontala tubtipa kontinua kuirilo'},
        {'id': 98, 'content': '斜管式连续蒸煮器', 'e': 'Inclined tube type continuous steamer', 'r': 'Наклонная трубчатая пароварка непрерывного действия', 'f': 'Cuiseur continu à tube incliné', 'm': 'Pengukus berterusan jenis tiub condong', 'w': 'Inklinita tubtipa kontinua vapor?ipo'},
        {'id': 99, 'content': '汽蒸室', 'e': 'Vapor steam chamber', 'r': 'Паровая пропарочная камера', 'f': 'Chambre de vaporisation', 'm': 'Ruang wap wap', 'w': 'Vapora vapor?ambro'},
        {'id': 100, 'content': '低压给料器', 'e': 'Low-pressure feeder', 'r': 'Питатели низкого давления', 'f': 'Alimentateurs à basse pression', 'm': 'Pengumpan tekanan rendah', 'w': 'Malaltprema man?ilo'},
        {'id': 101, 'content': '高压给料器', 'e': 'High pressure feeder', 'r': 'Питатели высокого давления', 'f': 'Alimentateurs à haute pression', 'm': 'Pengumpan tekanan tinggi', 'w': 'Altprema man?ilo'},
        {'id': 102, 'content': '格仓转子给料器', 'e': 'Gridded rotor feeder', 'r': 'Решетчатые роторные питатели', 'f': 'Alimentateurs à rotor grillagé', 'm': 'Pengumpan rotor berjejer', 'w': 'Kradrotora man?ilo'},
        {'id': 103, 'content': '螺旋给料器', 'e': 'Screw feeder', 'r': 'Шнековые питатели', 'f': 'Alimentateurs à vis', 'm': 'Pengumpan skru', 'w': '?ra?bo man?ilo'},
        {'id': 104, 'content': '料塞(横管式连续蒸煮器的)', 'e': 'Material plugs (for cross tube continuous steamers)', 'r': 'Плунжерные (для непрерывных поперечных трубчатых варочных аппаратов)', 'f': 'Bouchon (pour les cuiseurs à tubes continus)', 'm': 'Palam bahan (untuk pengukus berterusan tiub silang)', 'w': 'Materialaj ?topiloj (por transtubaj kontinuaj vapor?ipoj)'},
        {'id': 105, 'content': '排料器', 'e': 'Dischargers', 'r': 'Разгрузочные устройства', 'f': 'Déchargeurs', 'm': 'Pelepasan', 'w': 'El?utiloj'},
        {'id': 106, 'content': '喷放阀', 'e': 'Spray release valve', 'r': 'Распылительные клапаны', 'f': 'Vannes de décharge de pulvérisation', 'm': 'Injap pelepas semburan', 'w': 'Spray liberiga valvo'},
        {'id': 107, 'content': '冷喷放', 'e': 'Cold spray release', 'r': 'Выпуск холодного распыления', 'f': 'Vidange par pulvérisation à froid', 'm': 'Pelepasan semburan sejuk', 'w': 'Malvarma ?pruca?o liberigo'},
        {'id': 108, 'content': '磨木机', 'e': 'Wood grinder', 'r': 'Измельчители древесины', 'f': 'Broyeurs à bois', 'm': 'Pengisar kayu', 'w': 'Ligno muelilo'},
        {'id': 109, 'content': '连续磨木机', 'e': 'Continuous grinder', 'r': 'Шлифовальные машины непрерывного действия', 'f': 'Broyeurs continus', 'm': 'Pengisar berterusan', 'w': 'Kontinua muelilo'},
        {'id': 110, 'content': '间歇磨木机', 'e': 'Intermittent grinding machine', 'r': 'Шлифовальные машины периодического действия', 'f': 'Meuleuses intermittentes', 'm': 'Mesin pengisar sekejap-sekejap', 'w': 'Intermita muelilo'},
        {'id': 111, 'content': '水压磨木机', 'e': 'Water Pressure Mill', 'r': 'Машины для измельчения под давлением воды', 'f': 'Broyeurs à pression deau', 'm': 'Kilang Tekanan Air', 'w': 'Akva Premo Muelejo'},
        {'id': 112, 'content': '袋式磨木机', 'e': 'Bag type wood grinding machine', 'r': 'Мешковая мельница', 'f': 'Broyeur à sac', 'm': 'Mesin pengisar kayu jenis beg', 'w': 'Sako tipo ligna muelilo'},
        {'id': 113, 'content': '双袋式水压磨木机', 'e': 'Double bag type water pressure wood grinding machine', 'r': 'Мельница водяного давления с двойным мешком', 'f': 'Broyeur à double sac à pression deau', 'm': 'Mesin pengisar kayu tekanan air jenis beg dua', 'w': 'Duobla sako tipo akvo premo ligno muelanta ma?inon'},
        {'id': 114, 'content': '套缸型袋式磨木机', 'e': 'Casing type bag type wood grinding machine', 'r': 'Мельница рукавного типа', 'f': 'Broyeur à sac de type caisson', 'm': 'Mesin pengisar kayu jenis beg jenis sarung', 'w': 'Enferma?o tipo sako tipo ligno muelanta ma?inon'},
        {'id': 115, 'content': '压力磨木机', 'e': 'Pressure mill', 'r': 'Напорные мельницы', 'f': 'Moulins à pression', 'm': 'Kilang tekanan', 'w': 'Prema muelejo'},
        {'id': 116, 'content': '库式磨木机', 'e': 'Bank type wood grinding machine', 'r': 'Мельница для измельчения древесины банковского типа', 'f': 'Broyeur de bois à banc', 'm': 'Mesin pengisar kayu jenis bank', 'w': 'Banka tipo ligna muelilo'},
        {'id': 117, 'content': '链式磨木机', 'e': 'Chain type wood grinding machine', 'r': 'Цепная мельница', 'f': 'Moulin à cha?ne', 'm': 'Mesin pengisar kayu jenis rantai', 'w': '?ena tipo ligna muelilo'},
        {'id': 118, 'content': '单链C磨木机', 'e': 'Single Chain C Wood Grinder', 'r': 'Одноцепная С-образная мельница', 'f': 'Moulin à cha?ne simple en C', 'm': 'Pengisar Kayu Rantai Tunggal C', 'w': 'Ununura ?eno C Ligno Muelilo'},
        {'id': 119, 'content': '双链式磨木机', 'e': 'Double Chain Wood Grinder', 'r': 'Двухцепная мельница', 'f': 'Moulin à double cha?ne', 'm': 'Pengisar Kayu Rantai Berganda', 'w': 'Duobla ?ena Ligno Muelilo'},
        {'id': 120, 'content': '杠杆式磨木机', 'e': 'Lever Type Wood Grinder', 'r': 'Рычажные мельницы', 'f': 'Moulins à levier', 'm': 'Pengisar Kayu Jenis Tuas', 'w': 'Levilo Tipo Ligno Muelilo'},
        {'id': 121, 'content': '环式磨木机', 'e': 'Ring Type Wood Grinder', 'r': 'Кольцевая мельница', 'f': 'Moulin à anneau', 'm': 'Pengisar Kayu Jenis Cincin', 'w': 'Ringa Tipo Ligna Muelilo'},
        {'id': 122, 'content': '磨石', 'e': 'Grinding stone', 'r': 'Мелющие камни', 'f': 'Pierres meulières', 'm': 'Batu pengisar', 'w': 'Muel?tono'},
        {'id': 123, 'content': '陶瓷磨石', 'e': 'Ceramic grinding stone', 'r': 'Керамические шлифовальные камни', 'f': 'Meules en céramique', 'm': 'Batu pengisar seramik', 'w': 'Ceramika muel?tono'},
        {'id': 124, 'content': '磨石锐度', 'e': 'Grinding stone sharpness', 'r': 'Острота шлифовальных камней', 'f': 'Aff?tage des meules', 'm': 'Ketajaman batu pengisaran', 'w': 'Muel?tono akreco'},
        {'id': 125, 'content': '磨木机浆坑', 'e': 'Wood grinding machine pulp pit', 'r': 'Шлифовальные камни для дерева', 'f': 'Fosses daff?tage du bois', 'm': 'Lubang pulpa mesin pengisar kayu', 'w': 'Ligno muelanta ma?ino pulpo kavo'},
        {'id': 126, 'content': '刻石装置', 'e': 'Carving stone device', 'r': 'Устройства для резьбы по камню', 'f': 'Dispositifs de sculpture sur pierre', 'm': 'Alat ukiran batu', 'w': '?izi ?tona aparato'},
      ],
      tableData:[],
    }
  },
  methods:
      {
        textChanged()
        {
          let tempArr= [];
          const a = this.totalData;
          for(const i in a)
          {
            if(a[i].content.indexOf(this.input1)>=0)
            {
              tempArr.push(a[i]);
            }
          }
          this.tableData=tempArr;
        }
      }
}
</script>

<template>
  <div id="p-mainDiv">
    <div id="p-div01">
      <el-input v-model="input1" placeholder="" @change="textChanged()">
        <template #prepend>请输入待翻译的语料</template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
      <div id="p-div02">
        <!--        <el-collapse v-model="activeNames" style="width:92.5%;">-->
        <!--          <el-collapse-item title="检索信息内容01" name="1">-->
        <!--            <div>-->
        <!--              检索信息01详细内容。。。-->
        <!--            </div>-->
        <!--          </el-collapse-item>-->
        <!--          <el-collapse-item title="检索信息内容02" name="2">-->
        <!--            <div>-->
        <!--              检索信息02详细内容。。。-->
        <!--            </div>-->
        <!--          </el-collapse-item>-->
        <!--          <el-collapse-item title="检索信息内容03" name="3">-->
        <!--            <div>-->
        <!--              检索信息03详细内容。。。-->
        <!--            </div>-->
        <!--          </el-collapse-item>-->
        <!--        </el-collapse>-->
        <el-table :data="tableData" style="width: 92.5%">
          <el-table-column prop="id" label="序号" width="100" />
          <el-table-column prop="content" label="中文检索结果" width="200" />
          <el-table-column prop="e" label="英语" width="200" />
          <el-table-column prop="r" label="俄语" width="200" />
          <el-table-column prop="f" label="法语" width="200" />
          <el-table-column prop="m" label="马来语" width="200" />
          <el-table-column prop="w" label="世界语" width="200" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
#p-mainDiv
{
  height:auto;
  width:100%;
  display: flex;
  justify-content: center;
}
#p-div01
{
  width:70%;
  margin-top: 1.75rem;
}
#p-div02
{
  height:calc(0.55 * 100vh);
  margin-top: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 9px 0 black;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding-top: 1rem;
  background-color: white;
}

</style>
