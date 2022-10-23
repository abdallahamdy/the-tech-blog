const { Article } = require('../models');

const articledata = [
  {
    title: 'Donec posuere',
    article_content: 'Lorem ipsum dolor sit amet, usu cu quem clita concludaturque, iracundia constituto ea est. Vero insolens recusabo nam eu, harum nullam nec id, sed ne unum regione copiosae. Cu has dicam bonorum, eam altera graeci fabellas et. Et qui aeque mollis, ne duo dicta omnesque. Usu ut agam nominati mandamus, error expetendis eum ut.',
    user_id: 10
  },
  {
    title: 'Morbi non.',
    article_content: 'Ut volutpat salutatus constituto nec, esse utroque phaedrum has ex. Ex vix vivendo deserunt. Reque legere nemore nec te, sit rebum aliquid docendi eu, quo te eius sententiae. Scripta dolores quo et, ei meis repudiare mel, eu idque doctus per. Pro ex corpora epicuri, vim regione integre cu, mea te sumo sint explicari. Nulla dolorem pericula ad eum, nam dicat perfecto ex, vim et quot vide principes. Duo an quis equidem, prodesset deterruisset nec in, idque debet forensibus est id',
    user_id: 8
  },
  {
    title: 'Donec diam.',
    article_content: 'Aperiam mandamus referrentur ea per, doctus posidonium reformidans at sit, nec ut habemus electram. Dicant imperdiet constituto eos ei. Ut blandit assueverit duo, alterum dissentiunt sit et, pro no fugit intellegam. At cum magna latine eleifend. Vim ex alii dicant. Nostro tincidunt per te, facilisi recusabo pro no.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    article_content: 'Fabellas interesset neglegentur ei nec. Esse primis definitionem ei has. Malis accumsan in eos, sed animal fastidii eligendi eu, cum ad nostrud singulis forensibus. Te modo sint intellegebat pro, delectus vulputate et quo. Ei dolor maiorum usu, ius quod liber eu.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget.',
    article_content: 'Semper splendide cum an, has no habeo dicit quidam. Cu aeterno nusquam pri. Mea eu paulo euripidis, et qui integre deserunt. Duo ea duis porro, sea paulo eruditi deleniti no.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum.',
    article_content: 'Eum nullam adipiscing ut, diam tritani oportere cu duo. Ex errem corrumpit neglegentur his, vitae singulis vix ei. Adolescens quaerendum nec cu, usu te labitur repudiandae dissentiunt. Sit vidisse alienum lobortis te, his omnes possit antiopam ad, ex sumo viris accumsan mel. Quo et decore tamquam.',
    user_id: 4
  },
  {
    title: 'In hac habitasse.',
    article_content: 'Wisi feugiat expetenda in usu, ut pro sumo noluisse aliquando, iusto singulis ne has. Ei enim inermis mea. Te his porro quodsi aperiam. Solum gloriatur constituam id his, te elit delectus vel. Nam debet mucius possim te.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec.',
    article_content: 'Mel ea laudem oporteat. Nam ea habeo liber vocibus. Paulo melius pro ne, in eam nisl idque, deserunt scriptorem theophrastus at per. Et veri utinam nec. No libris nostrum epicurei usu. His et zril putant.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    article_content: 'Te duo delicata sadipscing, his ad eros velit. Purto probo saperet ne sea. Cu quo meis labore percipitur, feugiat tacimates intellegat id vix, qui augue placerat id. No mel nulla splendide. In has noluisse tincidunt, qui meliore maluisset corrumpit an. Mei te errem solet. Ex sensibus postulant vix.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum.',
    article_content: 'Pri graeci doctus laboramus ne, ferri noster salutatus eu ius. Qui amet vitae elaboraret ei. No mei affert qualisque omittantur. No amet eros eum, his eirmod instructior interpretaris ex. Est quidam feugiat in, porro dictas nostrud qui ex, duo vidisse partiendo ei.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    article_content: 'Per aliquip urbanitas signiferumque ut, eu aperiam similique intellegam vis. Nec homero quaerendum sadipscing ad, impetus constituto qui te. Option disputationi qui cu. Eos nominavi singulis concludaturque at, qui soleat quaestio no.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio.',
    article_content: 'Pro diam quodsi corrumpit in. Vis cu agam quaeque consequuntur, nisl commodo lobortis nec ne, at eos possim gubergren dissentias. Vix debet mandamus eu, eam postea consulatu necessitatibus cu. Viris aliquid mandamus duo at, reque epicuri pro ei. Sed an detracto reformidans interpretaris, vix mazim homero fierent eu. Fastidii intellegebat vis ex.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    article_content: 'Has vidisse dolores iracundia no, has ad vero ullamcorper, cum ea omittam hendrerit inciderint. Te tritani percipit abhorreant qui, sit nostro commodo te, an graeci tacimates consequuntur cum. Ut sea movet debitis, et mea veri decore. Sit at habemus luptatum. Verear oporteat detraxit cum eu, cum purto putent eloquentiam no. Sea ut veritus nominati, usu cu minim ludus voluptua, perfecto iudicabit maluisset cu vis.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    article_content: 'Mel ea delicata forensibus, autem oratio ad mei. Sed mundi omittantur ei. Atqui iudico impedit ei sed, at natum ridens expetendis vel. Nec ad cibo nihil facilisi.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in.',
    article_content: 'Doming scribentur te vim, et vim quaeque sensibus, mel accusam menandri vulputate eu. Mea ea quodsi dolorum persecuti, mei mollis integre ad, te cum agam quodsi delenit. Ius hinc exerci deleniti ei. Id quis elit ornatus sit. Scribentur voluptatibus vis eu, deleniti petentium repudiare est ex, ea duo democritum omittantur.',
    user_id: 3
  },
  {
    title: 'Vestibulum ante.',
    article_content: 'Iusto oratio labitur no duo. In per altera lucilius, te scripta dolorem dissentias mei. Rebum fabellas est cu. Iuvaret facilis vis in, ex instructior reprehendunt eam. Ad mea erant omnium gloriatur, ad his doming hendrerit. Erant latine per ei.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    article_content: 'Iuvaret epicuri his ei, decore ullamcorper quo cu. Cum odio tibique convenire in, nec ne dicam detraxit atomorum, minim libris alienum vix at. Ludus possit volumus eos ne, vel ex liber omnium patrioque. Vim percipit senserit splendide ad, has tempor praesent efficiantur ut. Ei duo albucius iudicabit scriptorem, usu dicam civibus forensibus eu. No reque saepe convenire vis, ex eam alterum aliquam.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    article_content: 'Accusamus aliquando id cum, eum iusto noster deseruisse et. Sale dicat debitis has an. Duo harum fastidii insolens ei, ad nec augue affert oblique. Ei per nonumy altera, autem fastidii ex has, in vide vocibus legendos sea.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris.',
    article_content: 'Vel omnes nominavi signiferumque ea, ea decore nostrum assentior pro, ei pro falli detraxit. Ei eum nostro iisque qualisque, zril perfecto ius ei, nihil corpora suscipiantur no mel. Ex eam exerci deleniti, soleat quodsi alienum eu sea. Partem appareat ne eum, te mei consequat expetendis, mei in solum aperiri fabulas. At his iudico explicari, putant impedit interpretaris eum te, prima legendos sed eu.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    article_content: 'Dolore omittam posidonium ut duo. Ei erant vivendum adversarium qui, cu usu dicunt feugiat, accusata temporibus at per. In eos accusam apeirian, ne consulatu philosophia duo, errem repudiare ad sea. Ad recteque accommodare usu, ius veniam inciderint at. Nec doming appetere in. Ei vidisse euripidis eam. Te tale recusabo pertinacia nec, sed cu sint elitr vivendum, et enim intellegam cum.',
    user_id: 7
  }
];

const seedArticles = () => Article.bulkCreate(articledata);

module.exports = seedArticles;
