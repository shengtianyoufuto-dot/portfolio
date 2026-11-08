// ============================================================
// ⓪ カテゴリー（WORKSの絞り込みボタン）
//   label … ボタンとカード右上に表示される名前
//   text  … ボタンを押したときに表示される説明文（自由に書き換えてください）
//   cover … ALL に表示するカテゴリーのサムネイル。images/category フォルダに入れて 'images/category/ファイル名.jpg'
//           （空のときは、そのカテゴリーの1本目の作品のサムネイルを自動で使います）
//   カテゴリーを増やすときは、ここに1行追加して、作品の category に同じ名前を書きます。
// ============================================================
const categories = {
  all:      { label: 'すべて',       text: 'これまでに制作した作品の一覧です。' },
  sns:      { label: 'SNSショート',       text: 'Instagram・TikTokなど、SNS向けのショート動画。企画から撮影・編集まで担当しています。',
              cover: 'images/category/sns.jpg?v=3' },
  roomtour: { label: 'ルームツアー', text: '物件の魅力が伝わるルームツアー動画。撮影・編集・テロップ制作を担当しています。',
              cover: 'images/category/roomtour.jpg?v=4' },
  design:   { label: 'デザイン',    text: 'バナーやサムネイルなど、SNS・Web向けのグラフィックデザインです。',
              cover: 'images/category/design.jpg' },   // 「すべて」の一覧用（背景文字あり）
  other:    { label: 'その他',     text: 'その他の制作物です。',
              cover: 'images/category/other.jpg' },   // 「すべて」の一覧用（背景文字あり）
};

// ============================================================
// ① 作品リスト
//   作品を増やすときは、下の { ... }, のかたまりを1つコピーして書き換えるだけでOKです。
//   上から順番に表示されます。
//
//   title       … 作品名
//   category    … 'sns' / 'roomtour' / 'design' / 'other'（上の ⓪ カテゴリーの名前）
//   description … 作品名の下に出る説明
//   youtube     … YouTubeのURL（共有リンク・埋め込みURL・ショート、どの形でもOK）
//                  → カードの中で動画が再生されます
//   tiktok      … TikTokの動画URL（https://www.tiktok.com/@アカウント/video/数字）
//   thumbnail   … 動画のサムネイル画像。images/sns フォルダに入れて 'images/sns/ファイル名.jpg'
//                  → サムネイルが表示され、クリックすると動画が再生されます（空なら動画プレイヤーをそのまま表示）
//   image       … 画像を表示したいとき。images フォルダに入れて 'images/ファイル名.jpg'
//   url         … 画像カードをクリックしたときに開くページ（なければ空のまま）
//   note        … 動画を開いたときに下に表示する説明文
//   info        … 動画を開いたときの紹介欄（reason 制作理由 / role 担当 / time 制作時間 / point 工夫箇所）。書いた項目だけ表示します
//   使わない項目は '' のまま、または行ごと消してOKです。
// ============================================================
const works = [
  {
    title: 'IT部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696817418936601876',
    note: 'IT部の部署紹介動画です。社員をアメコミのヒーロー風に登場させ、部署の雰囲気や仕事内容を楽しく伝えました。企画・撮影・編集を担当しています。',
    thumbnail: 'images/sns/sns01.jpg',
    info: { reason: '求職者にIT部の仕事内容や一緒に働く社員の雰囲気を知ってもらい、入社後に働くイメージを持ってもらうために制作しました。', role: '企画・撮影・編集', time: '撮影約3時間・編集約10時間', point: '冒頭でアメコミ映画のワンシーンを再現し、視聴者の目を引く導入にしました。その後も、社員の登場シーンに分身や高速移動の演出を取り入れ、ヒーロー映画のような世界観を保ちながら、IT部のメンバーをテンポよく紹介しました。' },
  },
  {
    title: 'コーポレート部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696816154635062548',
    note: 'コーポレート部の部署紹介動画です。明るいメンバーの人柄が伝わるよう、テンポのよいカットとテロップで仕上げました。企画・撮影・編集を担当しています。',
    thumbnail: 'images/sns/sns02.jpg',
    info: { reason: '求職者にコーポレート部の仕事内容や一緒に働く社員の雰囲気を知ってもらい、入社後に働くイメージを持ってもらうために制作しました。', role: '企画・撮影・編集', time: '撮影約1時間・編集約4時間', point: 'M-1グランプリの芸人紹介映像を参考に、メンバ1一人ひとりの個性が自然に伝わる登場シーンを考えました。撮影では、メンバー同士が普段どおりにやり取りする中で生まれる笑顔を捉え、部署の仲の良さや明るい雰囲気が伝わるように工夫しました。' },
  },
  {
    title: 'マンスリー部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696421522574937364',
    note: 'マンスリー部の部署紹介動画です。電話対応など実際の業務の様子を中心に、仕事の流れが分かる構成にしました。企画・撮影・編集を担当しています。',
    thumbnail: 'images/sns/sns03.jpg',
    info: { reason: '求職者にマンスリー部の仕事内容や一緒に働く社員の雰囲気を知ってもらい、入社後に働くイメージを持ってもらうために制作しました。', role: '企画・撮影・編集', time: '撮影約2時間・編集約10時間', point: '電話対応など実際の業務風景を中心に、仕事の流れが分かる構成にしました。登場するメンバーが多い中でも一人ひとりの個性が印象に残るよう、本人に「好きな言葉」を聞き、その言葉をそれぞれの紹介シーンに取り入れました。' },
  },
  {
    title: 'マーケティング部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696074689931660564',
    note: 'マーケティング部の部署紹介動画です。メンバーの掛け合いを活かして、部署の雰囲気が伝わるように編集しました。企画・撮影・編集を担当しています。',
    thumbnail: 'images/sns/sns04.jpg',
    info: { reason: '求職者にマーケティング部の仕事内容や一緒に働く社員の雰囲気を知ってもらい、入社後に働くイメージを持ってもらうために制作しました。', role: '企画・撮影・編集', time: '撮影約2時間・編集約3時間', point: '『コンフィデンスマンJP』のオープニングを参考に、目の錯覚を利用した演出を取り入れました。思わず二度見するような仕掛けで視聴者の目を引き、次に何が起こるのか気になる構成にしました。' },
  },
  {
    title: '大喜利大会 紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7690897684890258708',
    note: '9月の社内イベント「大喜利大会」の様子をまとめた動画です。お題と回答をテロップで見せ、会場の盛り上がりが伝わるようにしました。',
    thumbnail: 'images/sns/sns05.jpg',
    info: { reason: '社内イベントの様子を通じて、社員が楽しむ姿や交流の様子を紹介し、会社の明るく親しみやすい雰囲気を知ってもらうために制作しました。', role: '企画・撮影・編集', time: '撮影約1時間・編集約3時間', point: '『M-1グランプリ』や『IPPONグランプリ』の演出を参考に、社内の大喜利大会をお笑い番組風に紹介しました。どんな企画なのかがひと目で分かり、会場の楽しさも伝わるように工夫しました。' },
  },
  {
    title: 'もしも重力がなくなったら？',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7671206622827449620',
    note: '求人募集の動画です。「もしも重力がなくなったら？」という設定で、思わず見たくなる冒頭を意識して制作しました。',
    thumbnail: 'images/sns/sns06.jpg',
    info: { reason: '求人募集を、多くの人に見てもらうため。', role: '企画・編集', time: '編集約4時間', point: 'SNSで話題の、AIを使って「もしも」を解説する動画形式を取り入れました。「もしも重力がなくなったら?」という問いかけで視聴者の興味を引き、動画の最後に求人募集の案内へつなげる構成にしました。' },
  },
  {
    title: 'そんなもの持ってくるな選手権',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7676434770192223509',
    note: '社員企画「そんなもの持ってくるな選手権 Part2」の動画です。持ち寄った品へのリアクションを中心に、笑いどころが伝わるよう編集しました。',
    thumbnail: 'images/sns/sns07.jpg',
    info: { reason: '社員が参加する企画を通じて、社員同士の仲の良さや職場の明るい雰囲気を伝え、より多くの人に会社を知ってもらうために制作しました。', role: '企画・撮影・編集', time: '撮影約40分・編集約3時間', point: '持ち寄った品そのものに加え、それを見た社員の表情やリアクションにも注目して編集しました。品を見せた直後にリアクションを入れることで、何が面白かったのかが視聴者にも伝わるよう工夫しました。' },
  },
  {
    title: '絶景のはずが、求人募集!?',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7639642814724427029',
    note: '求人募集の動画です。オーロラの映像と組み合わせ、編集の幅を見せる演出にしました。',
    thumbnail: 'images/sns/sns08.jpg',
    info: { reason: '意外な展開をきっかけに視聴者の興味を引き、求人募集の案内を印象に残すために制作しました。', role: '企画・撮影・編集', time: '撮影約10分・編集約2時間', point: 'SNSで流行していた、写真を投げるとその絶景が目の前に現れる演出を参考にしました。オーロラが現れると見せかけて求人募集の画像を出すことで、視聴者の興味を引きながら、採用情報を印象に残せるよう工夫しました。' },
  },
  {
    title: 'ショートコント風 求人募集',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7637432651980344596',
    note: '社員紹介シリーズの動画です。季節感のある演出で、社員の人柄が伝わるようにしました。',
    thumbnail: 'images/sns/sns09.jpg',
    info: { reason: '求人募集を、気軽に見てもらえる形で届けるため。', role: '企画・撮影・編集', time: '撮影約20分・編集約2時間', point: 'ショートコント風に仕立て、会話のやり取りから「このあとどうなるんだろう」と気になる流れを作りました。最後のオチに求人募集の案内を組み込み、楽しみながら採用情報に触れられるよう工夫しました。' },
  },
  {
    title: '新入社員の1日紹介',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7624435764977208593',
    note: '新入社員の1日を紹介する動画です。出社から退社までの流れを追い、入社後の働き方がイメージできる構成にしました。',
    thumbnail: 'images/sns/sns10.jpg',
    info: { reason: '入社後の働き方を具体的にイメージしてもらうため。', role: '企画・撮影・編集', time: '撮影約3時間・編集約10時間', point: '写真に奥行きを持たせて立体的に見せる演出で、視聴者の興味を引くよう工夫しました。出社から退社までの場面を時系列に並べ、新入社員がどんな仕事をし、1日をどう過ごすのかが分かりやすい構成にしました。' },
  },
  {
    title: '七夕イベント 紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7667509404400373012',
    note: '七夕にあわせた社内企画の動画です。社員の願いごとを紹介し、会社の明るい雰囲気を伝えました。',
    thumbnail: 'images/sns/sns11.jpg',
    info: { reason: '季節の社内企画を通して、会社の明るい雰囲気を伝えるため。', role: '企画・撮影・編集', time: '撮影約1時間・編集約4時間', point: '「社員の七夕の願いをかなえる」という企画の中で、社員がMrs. GREEN APPLEになりきって登場する演出を取り入れました。人気アーティストのものまねで視聴者の興味を引きつつ、演じる社員の個性や遊び心も伝わるように工夫しました。' },
  },
  {
    title: '社内お食事会 紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7693482293389724949',
    note: '9月の社内イベント「お食事会」の様子をまとめた動画です。和やかな雰囲気が伝わるよう、会話の場面を中心に編集しました。',
    thumbnail: 'images/sns/sns12.jpg',
    info: { reason: '社内イベントを通して、社員同士の距離の近さを伝えるため。', role: '企画・撮影・編集', time: '撮影約2時間・編集約4時間', point: '冒頭はおしゃれなVlog風に仕立て、続きを見たくなる導入にしました。その後は、社員同士が会話を楽しんだり笑い合ったりする場面を中心に編集し、仲の良さやその場の楽しさが伝わるように工夫しました。' },
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    youtube: 'https://www.youtube.com/embed/PHBCDgUPTmE',
    note: 'BraTToなんばパークス前のルームツアー動画です。サムネイルでは、物件名や駅からの近さ、物件の魅力がひと目で伝わるように情報を整理しました。動画では室内を中心にテンポよくカットをつなぎ、短い時間でも部屋の広さや設備が分かるように工夫しました。',
    thumbnail: 'images/roomtour/roomtour01.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    youtube: 'https://www.youtube.com/embed/OFkphFgNOkE',
    note: 'BraTTo綾瀬ステーションフロントのルームツアー動画です。サムネイルでは、物件名や駅からの近さ、物件の魅力がひと目で伝わるように情報を整理しました。動画では室内を中心にテンポよくカットをつなぎ、短い時間でも部屋の広さや設備が分かるように工夫しました。',
    thumbnail: 'images/roomtour/roomtour02.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7689401925996973313',
    info: { reason: '物件の魅力を動画で分かりやすく伝え、お部屋探しをしている方に住んだときのイメージを持ってもらうために制作しました。', role: '撮影・編集・サムネ制作', time: '撮影約40分・編集約2時間', point: '視聴者の興味を引くため、案内役がワイプに登場し、室内の映像に合わせて物件を紹介する形式にしました。特に伝えたい設備や好条件は、テロップを大きくポップアップさせ、物件の魅力がひと目で伝わるように工夫しました。' },
    note: 'BraTTo長堀タワーのルームツアー動画です。縦型動画で、スマホでも部屋の雰囲気が伝わるように撮影・編集しました。',
    thumbnail: 'images/roomtour/roomtour03.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7686796512428444949',
    info: { reason: '物件の魅力を動画で分かりやすく伝え、お部屋探しをしている方に住んだときのイメージを持ってもらうために制作しました。', role: '撮影・編集・サムネ制作', time: '撮影約40分・編集約2時間', point: '視聴者の興味を引くため、案内役がワイプに登場し、室内の映像に合わせて物件を紹介する形式にしました。特に伝えたい設備や好条件は、テロップを大きくポップアップさせ、物件の魅力がひと目で伝わるように工夫しました。' },
    note: 'BraTTo月島カーサのルームツアー動画です。家具家電の配置や収納など、暮らしのイメージが湧くポイントを紹介しました。',
    thumbnail: 'images/roomtour/roomtour04.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7701656082673847573',
    info: { reason: '物件の魅力を動画で分かりやすく伝え、お部屋探しをしている方に住んだときのイメージを持ってもらうために制作しました。', role: '撮影・編集・サムネ制作', time: '撮影約40分・編集約2時間', point: '視聴者の興味を引くため、案内役がワイプに登場し、室内の映像に合わせて物件を紹介する形式にしました。特に伝えたい設備や好条件は、テロップを大きくポップアップさせ、物件の魅力がひと目で伝わるように工夫しました。' },
    note: 'BraTTo今池ルミナスのルームツアー動画です。室内の明るさや設備を中心に、テンポよく紹介しました。',
    thumbnail: 'images/roomtour/roomtour05.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7694605868926618901',
    info: { reason: '物件の魅力を動画で分かりやすく伝え、お部屋探しをしている方に住んだときのイメージを持ってもらうために制作しました。', role: '撮影・編集・サムネ制作', time: '撮影約40分・編集約2時間', point: '視聴者の興味を引くため、案内役がワイプに登場し、室内の映像に合わせて物件を紹介する形式にしました。特に伝えたい設備や好条件は、テロップを大きくポップアップさせ、物件の魅力がひと目で伝わるように工夫しました。' },
    note: 'BraTTo赤羽ジェネのルームツアー動画です。部屋の特徴が一目で分かるよう、テロップと構成を工夫しました。',
    thumbnail: 'images/roomtour/roomtour06.jpg',
  },
  {
    title: 'キャンペーンバナー',
    category: 'design',
    description: 'グラフィックデザイン',
    image: 'images/design/campaign-thumb.jpg?v=4',
    url: '',
    // summary … 一覧の上に表示する、キャンペーンバナー全体の制作概要
    summary: '毎月のキャンペーンを周知し、マンスリーマンションを探している方に、割引内容や開催期間をひと目で伝えるために制作しました。',
    // gallery … カードを押すと開く一覧。group ごとに見出しを付けて並べます（src は images/design フォルダの画像）
    //           note … そのキャンペーンの説明文（各キャンペーンの1枚目に書きます）
    //           info … note の代わりに、制作時間（time）・工夫した点（point）に分けて書けます。書いた項目だけ表示します
    gallery: [
      { group: '5月 新緑キャンペーン',     src: 'images/design/campaign-may-wide.jpg', size: '1140×270' ,
        info: {
          time: '2日',
          point: '新緑の山と湖を背景に、5月らしい爽やかさを表現しました。手前に鹿を、奥の山並みの向こうに会社のキャラクター「ブラロボ」を配置し、風景に奥行きと広がりを持たせました。また様々な箇所でストーリーを持たせ、遊び心を足す工夫しました。',
        } },
      { group: '5月 新緑キャンペーン',     src: 'images/design/campaign-may.jpg',      size: '740×370' },
      { group: '6月 入居応援キャンペーン', src: 'images/design/campaign-jun-wide.jpg', size: '1140×270' ,
        info: {
          time: '2日',
          point: '紫陽花や雨粒、虹で梅雨らしさを出し、明るい青紫で爽やかに仕上げました。右側の余白にはてるてる坊主を置き、顔を吹き出しに見立てて「梅雨でも安心！」を目立たせました。',
        } },
      { group: '6月 入居応援キャンペーン', src: 'images/design/campaign-jun.jpg',      size: '740×370' },
      { group: '7月 夏の快適ステイ応援キャンペーン', src: 'images/design/campaign-jul-wide.jpg', size: '1140×270' ,
        info: {
          time: '2日',
          point: 'プールの水面と浮き輪の「80%」で、ひと目で夏とわかるデザインにしました。エアコンのイラストと「すぐ快適！」の言葉で、暑い時期の引っ越しの不安をやわらげています。',
        } },
      { group: '7月 夏の快適ステイ応援キャンペーン', src: 'images/design/campaign-jul.jpg',      size: '740×370' },
      { group: '8月 花火のようにドーン！とお得な応援キャンペーン', src: 'images/design/campaign-aug-wide.jpg', size: '1140×270' ,
        info: {
          time: '1日',
          point: '夜空の花火と提灯で夏祭りのにぎわいを表現し、「ドーン！」の文字を大きく斜めに配置して、花火が打ち上がる勢いを出しました。早割や短期割などの特典は提灯に載せ、祭りの雰囲気を保ちながら、視線が右側の「最大80％OFF」へ自然に流れるよう工夫しました。',
        } },
      { group: '8月 花火のようにドーン！とお得な応援キャンペーン', src: 'images/design/campaign-aug.jpg',      size: '740×370' },
      { group: '9月 秋のお月見キャンペーン', src: 'images/design/campaign-sep-wide.jpg', size: '1140×270' ,
        info: {
          time: '1日',
          point: '夜空に大きな満月を配置し、月の中に「80％OFF」を載せることで、お月見の雰囲気と割引の大きさがひと目で伝わるようにしました。足元にはすすきやうさぎを添え、企業キャラに餅つきをさせることで、親しみやすいお月見の風景に仕上げました。',
        } },
      { group: '9月 秋のお月見キャンペーン', src: 'images/design/campaign-sep.jpg',      size: '740×370' },
      { group: '10月 秋の大感謝キャンペーン', src: 'images/design/campaign-oct-wide.jpg', size: '1140×270' ,
        info: {
          time: '1日',
          point: '紅葉と夕焼けで秋の深まりを表現し、筆文字風のタイトルで「感謝」の気持ちを伝わりやすくしました。紅葉の葉の中に「早割」「短期割」を入れ、割引の種類も一目でわかるようにしています。',
        } },
      { group: '10月 秋の大感謝キャンペーン', src: 'images/design/campaign-oct.jpg',      size: '740×370' },
      { group: '11月 勤労感謝キャンペーン', src: 'images/design/campaign-nov-wide.jpg', size: '1140×270' ,
        info: {
          time: '1日',
          point: '働く人のイラストと赤白の放射線で、明るく元気な印象にしました。「頑張るあなたへ」「家具家電付き」の吹き出しで、新生活を始める社会人に向けたメッセージにしています。',
        } },
      { group: '11月 勤労感謝キャンペーン', src: 'images/design/campaign-nov.jpg',      size: '740×370' },
    ],
  },
  {
    title: 'SNS投稿',
    category: 'design',
    description: 'SNS投稿画像のデザイン',
    image: 'images/design/snspost-thumb.jpg',
    url: '',
    galleryLayout: 'post',   // 縦長の投稿画像を3列で並べます
    // gallery … キャンペーンバナーと同じ書き方で、押すと開く一覧に並べる画像を書きます
    gallery: [
      { group: '新入社員紹介（コーポレート部）', src: 'images/design/snspost-intro01-1.jpg', note: 'Instagram向けの社員紹介シリーズです。表紙は「ジャポニカ学習帳」をイメージし、会社カラーのオレンジをメインに、紫陽花の写真と手書き風の文字を組み合わせました。2・3枚目はリングノート風にそろえ、ページをめくるような感覚でプロフィールやインタビューを読み進めながら、社員の人柄を知ってもらえるように工夫しました。' },
      { group: '新入社員紹介（コーポレート部）', src: 'images/design/snspost-intro01-2.jpg' },
      { group: '新入社員紹介（コーポレート部）', src: 'images/design/snspost-intro01-3.jpg' },
      { group: '社内大喜利大会（福利厚生）', src: 'images/design/snspost-ogiri-1.jpg', note: '社内イベントを紹介するInstagram投稿です。1枚目は赤と黄色の放射線に社員の笑顔を大きく配置し、「大喜利」の文字を一番目立たせて、思わずスワイプしたくなる表紙にしました。2枚目以降はお題・回答・キャラクターのツッコミを毎回同じ配置にして、続けて読みやすいシリーズにしています。' },
      { group: '社内大喜利大会（福利厚生）', src: 'images/design/snspost-ogiri-2.jpg' },
      { group: '社内大喜利大会（福利厚生）', src: 'images/design/snspost-ogiri-3.jpg' },
      { group: 'お盆休み 沖縄（福利厚生）', src: 'images/design/snspost-obon-1.jpg', note: '社員のお盆休みを紹介するInstagram投稿です。1枚目は沖縄の海や街の写真を重ね、南国の魚のイラストとオレンジの手書き風タイトルで、旅の楽しさがひと目で伝わる表紙にしました。2枚目以降は方眼ノートに写真を貼った旅日記風のデザインにして、1日ごとの出来事をコメントや矢印でたどれるようにしています。' },
      { group: 'お盆休み 沖縄（福利厚生）', src: 'images/design/snspost-obon-2.jpg' },
      { group: 'お盆休み 沖縄（福利厚生）', src: 'images/design/snspost-obon-3.jpg' },
    ],
  },
  {
    title: 'その他の作品',
    category: 'other',
    description: 'LINEスタンプ・リッチメニュー・ぬいぐるみ制作',
    image: 'images/other/other-thumb.jpg?v=4',
    url: '',
    galleryLayout: 'feature',   // 1枚ずつ、画像と説明を横に並べて見せます
    gallery: [
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-01.png', alt: 'LINEスタンプ「あっぱれ！」', note: '会社のキャラクターを使ったLINEスタンプを制作しました。「あっぱれ！」「助かりました」「おはようございます」など、仕事のやり取りでそのまま使える言葉を選び、キャラクターの表情やポーズ、背景の色で気持ちが伝わるようにしています。トーク画面で小さく表示されても読みやすいよう、文字は太く大きくしています。' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-02.png', alt: 'LINEスタンプ「てへ」' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-03.png', alt: 'LINEスタンプ「わかりました！」' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-04.png', alt: 'LINEスタンプ「今向かっています！」' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-05.png', alt: 'LINEスタンプ「充電切れそう…」' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-06.png', alt: 'LINEスタンプ「助かりました」' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-07.png', alt: 'LINEスタンプ「心の広さ2LDK以上だね！」' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-08.png', alt: 'LINEスタンプ「おはようございます」' },
      { group: 'LINEスタンプ', src: 'images/other/line-stamp-09.png', alt: 'LINEスタンプ「すみませんでした」' },
      { group: 'LINEリッチメニュー', src: 'images/other/richmenu-01.jpg', alt: '採用向けLINEのリッチメニュー', note: '採用向けLINE公式アカウントのリッチメニューを制作しました。上の大きな枠で採用サイトへ案内し、下の3つのボタンからInstagram・企業サイト・よくある質問へ進めるようにしています。会社のオレンジとキャラクターを大きく使い、トーク画面を開いたときにひと目で会社の雰囲気が伝わるようにしました。' },
      { group: 'ぬいぐるみ制作', src: 'images/other/plush-01.jpg', alt: 'キャラクターのぬいぐるみ', note: '会社のキャラクターをぬいぐるみにしました。イラストの四角い頭や画面のような顔、アンテナや蝶ネクタイなどの特徴をそのまま再現できるよう、デザインを立体に起こしました。' },
    ],
  },

  // ↓ 追加用のひな形（先頭の // を消して使ってください）
  // {
  //   title: '作品名',
  //   category: 'roomtour',
  //   description: '撮影・編集',
  //   youtube: 'https://youtu.be/xxxxxxxxxxx',
  // },
];

// YouTubeのURL（watch / youtu.be / shorts / embed）から埋め込み用URLを作ります
function toEmbedUrl(link){
  const m=String(link).match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
  return m?'https://www.youtube.com/embed/'+m[1]:'';
}
function catLabel(key){return (categories[key]&&categories[key].label)||String(key).toUpperCase()}
// 色やラベルは自動で割り振ります（指定すればそちらが優先されます）
const themes=['v1','v2','v3','v4'];
const counters={};
// 画像パスの入力欄が空・「#」「＃」だけのときは「画像なし」として扱います
function cleanSrc(v){v=String(v||'').trim();return /^[#＃]*$/.test(v)?'':v}
Object.values(categories).forEach(c=>{if('cover' in c)c.cover=cleanSrc(c.cover)});
works.forEach((w,i)=>{
  w.thumbnail=cleanSrc(w.thumbnail);w.image=cleanSrc(w.image);
  counters[w.category]=(counters[w.category]||0)+1;
  if(!w.theme) w.theme=themes[Math.max(0,Object.keys(categories).indexOf(w.category)-1)%themes.length];
  if(!w.label) w.label=catLabel(w.category)+' WORK '+String(counters[w.category]).padStart(2,'0');
  w.embed='';w.thumb=w.thumbnail||w.image||'';
  if(w.youtube){w.embed=toEmbedUrl(w.youtube);const id=w.embed.split('/embed/')[1];if(id&&!w.thumbnail&&!w.image)w.thumb='https://i.ytimg.com/vi/'+id+'/hqdefault.jpg';}
  else if(w.tiktok){const m=String(w.tiktok).match(/\/video\/(\d+)/);if(m)w.embed='https://www.tiktok.com/player/v1/'+m[1]+'?rel=0';} // rel=0：おすすめ動画を同じアカウントのものに限定
});

// TikTokのサムネイルを取得します（同じ作品は1回だけ問い合わせ、結果を使い回します）
function tiktokThumb(w){
  if(!w.tiktok)return Promise.resolve('');
  if(!w._thumbReq)w._thumbReq=fetch('https://www.tiktok.com/oembed?url='+encodeURIComponent(w.tiktok)).then(r=>r.json()).then(d=>d.thumbnail_url||'').catch(()=>'');
  return w._thumbReq;
}

// ============================================================
// ③ ファーストビューの斜めに流れるサムネイル
//   works の作品を数列に振り分け、右上から下へ流れるように表示します
//   （サムネイルが無い作品は色付きのカードで表示）。
//   heroSpeed … 流れる速さ（1秒あたりに進むピクセル数）。小さいほどゆっくりになります。
//   heroColumns … 列の数
// ============================================================
const heroSpeed = 28;
const heroColumns = 2;
// ファーストビューで流す動画（videos フォルダに入れて、ここに並べます）
//   src … 動画ファイル（音声なし・軽量化したmp4がおすすめ）
//   poster … 読み込み前や「動きを減らす」設定のときに表示する静止画
//   1本目・3本目…は左の列、2本目・4本目…は右の列に並びます。
//   空にすると、これまでどおり works のサムネイルが流れます。
const heroVideos = [
  { src: 'videos/hero-01.mp4?v=2', poster: 'videos/hero-01.jpg?v=2' },
  { src: 'videos/hero-02.mp4', poster: 'videos/hero-02.jpg' },
  { src: 'videos/hero-03.mp4', poster: 'videos/hero-03.jpg' },
  { src: 'videos/hero-04.mp4', poster: 'videos/hero-04.jpg' },
];
let heroVideoObserver;
function buildHeroMarquee(){
  const box=document.querySelector('.hero-marquee');
  if(!box||!works.length)return;
  const makeTile=w=>{
    if(w._video){
      // 動画のタイル（音声なし・ループ再生。画面に見えているものだけ再生します）
      const tile=document.createElement('div');tile.className='marquee-tile is-video';
      const v=document.createElement('video');
      v.muted=true;v.defaultMuted=true;v.loop=true;v.playsInline=true;
      ['muted','loop','playsinline','disablepictureinpicture'].forEach(k=>v.setAttribute(k,''));
      v.preload='none';if(w.poster)v.poster=w.poster;v.src=w.src;
      tile.append(v);return tile;
    }
    const tile=document.createElement('div');
    tile.className='marquee-tile '+w.theme+(w.tiktok?' is-vertical':'');
    const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.title||w.label;tile.append(word);
    return tile;
  };
  const setImg=(tile,src)=>{
    if(!src)return;
    const img=document.createElement('img');img.alt='';img.decoding='async';img.src=src;
    img.onload=()=>{const word=tile.querySelector('.work-placeholder');if(word)word.remove()};
    img.onerror=()=>img.remove();
    tile.prepend(img);
  };
  const stage=document.createElement('div');stage.className='marquee-stage';
  box.replaceChildren(stage);
  const pairs=[];
  const source=heroVideos.length?heroVideos.map(v=>Object.assign({_video:true},v)):works;
  for(let c=0;c<heroColumns;c++){
    // 列ごとに作品をずらして並べ、隣の列と同じ作品が並ばないようにします
    const list=source.filter((w,i)=>i%heroColumns===c);
    const items=list.length?list:source;
    const col=document.createElement('div');col.className='marquee-col';
    const track=document.createElement('div');track.className='marquee-track';
    const group=document.createElement('div');group.className='marquee-group';
    track.append(group);col.append(track);stage.append(col);
    // 1グループが表示範囲より長くなるまで作品を繰り返します
    const tiles=[];
    for(let n=0;n<30&&(n===0||group.getBoundingClientRect().height<stage.offsetHeight);n++){
      items.forEach(w=>{const t=makeTile(w);t._work=w;tiles.push(t);group.append(t)});
    }
    // 同じグループをもう1つ並べ、半分進んだところで最初に戻すと継ぎ目なくループします
    const clone=group.cloneNode(true);track.append(clone);
    const clones=[...clone.children];
    tiles.forEach((t,i)=>pairs.push([t,clones[i]]));
    // 速さが一定になるよう、グループの長さから1周の時間を決めます
    track.style.setProperty('--marquee-duration',(group.getBoundingClientRect().height/heroSpeed).toFixed(2)+'s');
  }
  // 動画は画面に見えている間だけ再生し、見えなくなったら一時停止します（「動きを減らす」設定では静止画のまま）
  if(heroVideoObserver)heroVideoObserver.disconnect();
  const videos=[...box.querySelectorAll('video')];
  videos.forEach(v=>{v.muted=true});
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(videos.length&&!reduce&&'IntersectionObserver' in window){
    heroVideoObserver=new IntersectionObserver(entries=>entries.forEach(e=>{
      const v=e.target;
      if(e.isIntersecting){if(v.preload!=='auto')v.preload='auto';const p=v.play();if(p)p.catch(()=>{})}
      else v.pause();
    }),{rootMargin:'120px 0px'});
    videos.forEach(v=>heroVideoObserver.observe(v));
  }
  pairs.forEach(([t,c])=>{
    const w=t._work;
    if(!w||w._video)return;
    const apply=src=>{setImg(t,src);setImg(c,src)};
    if(w.thumb)apply(w.thumb);else tiktokThumb(w).then(apply);
  });
}
buildHeroMarquee();
// 画面幅が大きく変わったとき（PCでウィンドウを広げた等）だけ作り直します
let heroWidth=window.innerWidth,heroTimer;
window.addEventListener('resize',()=>{clearTimeout(heroTimer);heroTimer=setTimeout(()=>{if(Math.abs(window.innerWidth-heroWidth)>40){heroWidth=window.innerWidth;buildHeroMarquee()}},250)});

// ② 公開前に、ご自身の連絡先メールアドレスを入力してください。
const contactEmail = '';
const grid = document.getElementById('workGrid');
// ALL には、各カテゴリーの最初の作品を1つずつ表示します
function pickForAll(){
  return Object.keys(categories).filter(k=>k!=='all').map(k=>works.find(w=>w.category===k)).filter(Boolean);
}
// ============================================================
// ④ SNSショートの下に出す、公式アカウントへのリンク
//   url を空にすると、押せないカード（矢印なし）として表示します
// ============================================================
//   カテゴリーごとに、見出し（title）と並べるリンク（links）を書きます
const tiktokLink    = { name: 'TikTok',    sub: '企業公式アカウント', icon: 'images/icons/tiktok.png',    url: 'https://www.tiktok.com/@bratto_recruit' };
const instagramLink = { name: 'Instagram', sub: '企業公式アカウント', icon: 'images/icons/instagram.png', url: 'https://www.instagram.com/bratto_recruit/' };
const snsLinkSets = {
  sns:    { title: '掲載作品以外の動画はこちら', links: [tiktokLink, instagramLink] },
  design: { title: '掲載作品以外の投稿はこちら', links: [instagramLink] },
};
const snsLinkBox=document.getElementById('snsLinks');
function renderSnsLinks(filter){
  if(!snsLinkBox)return;
  const set=snsLinkSets[filter];
  snsLinkBox.hidden=!set;
  snsLinkBox.replaceChildren();
  if(!set)return;
  const title=document.createElement('p');title.className='sns-links-title';title.textContent=set.title;
  const list=document.createElement('div');list.className='sns-links-grid'+(set.links.length===1?' is-single':'');
  snsLinkBox.append(title,list);
  set.links.forEach(l=>{
    const card=document.createElement(l.url?'a':'div');card.className='sns-link'+(l.url?'':' is-disabled');
    if(l.url){card.href=l.url;card.target='_blank';card.rel='noopener noreferrer';card.setAttribute('aria-label',l.name+'（'+l.sub+'）を開く')}
    const img=document.createElement('img');img.className='sns-link-icon';img.src=l.icon;img.alt='';img.width=64;img.height=64;
    const txt=document.createElement('span');txt.className='sns-link-text';
    const n=document.createElement('strong');n.textContent=l.name;const sub=document.createElement('span');sub.textContent=l.sub;txt.append(n,sub);
    card.append(img,txt);
    if(l.url){const ar=document.createElement('span');ar.className='sns-link-arrow';ar.setAttribute('aria-hidden','true');ar.textContent='↗';card.append(ar)}
    list.append(card);
  });
}
function render(filter='all'){
  grid.replaceChildren();
  renderSnsLinks(filter);
  const isAll=filter==='all';
  const list=isAll?pickForAll():works.filter(w=>w.category===filter);
  // 縦型動画（TikTok）だけのカテゴリーは、9:16のカードで横に並べます
  const allVertical=!isAll&&list.length>0&&list.every(w=>w.tiktok);
  grid.classList.toggle('is-vertical',allVertical);
  // 横型と縦型（TikTok）が混ざるカテゴリーは、縦型を9:16の細いカードにして並べます
  const mixed=!isAll&&!allVertical&&list.some(w=>w.tiktok);
  grid.classList.toggle('is-mixed',mixed);
  list.forEach(w=>{
    const card=document.createElement('article');card.className='work-card'+(mixed?(w.tiktok?' is-tall':' is-wide'):'');
    let visual;
    if(isAll){
      // ALL：サムネイルを表示し、クリックでそのカテゴリーへ移動
      visual=document.createElement('a');visual.className='work-visual work-jump '+w.theme;
      visual.href='#works-'+w.category;visual.setAttribute('aria-label',catLabel(w.category)+' の作品一覧を見る');
      const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.label;
      // 画像が読み込めなかったときは、文字の表示に戻します
      const addImg=src=>{const img=document.createElement('img');img.src=src;img.alt='';img.loading='lazy';img.onerror=()=>{img.remove();if(!word.isConnected)visual.prepend(word)};visual.prepend(img)};
      const cover=categories[w.category]&&categories[w.category].cover;
      if(cover){addImg(cover)}
      else if(w.thumb){addImg(w.thumb)}
      else {
        visual.append(word);
        // TikTokはサムネイルを取得できたら差し替えます（取得できなければ文字のまま）
        if(w.tiktok){tiktokThumb(w).then(url=>{if(url&&word.isConnected){word.remove();addImg(url)}})}
      }
      const more=document.createElement('span');more.className='work-more';more.textContent=catLabel(w.category)+'をすべて見る →';visual.append(more);
    } else {
      visual=document.createElement(w.url&&!w.embed?'a':'div');visual.className='work-visual '+w.theme;
      if(w.url&&!w.embed){visual.href=w.url;visual.target='_blank';visual.rel='noopener noreferrer';visual.setAttribute('aria-label',w.title+' を開く');}
      // TikTokのプレーヤーは autoplay=1 を付けると再生できなくなるため、YouTubeのときだけ付けます
      // （TikTokはサムネイルを押したあと、プレーヤーの準備ができた時点で再生の合図を送ります）
      const makeFrame=autoplay=>{const frame=document.createElement('iframe');const auto=autoplay&&!w.tiktok;frame.src=w.embed+(auto?(w.embed.includes('?')?'&':'?')+'autoplay=1':'');if(autoplay&&w.tiktok)frame.dataset.tiktokAutoplay='1';frame.title=w.title;frame.loading=autoplay?'eager':'lazy';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;return frame};
      if(w.embed&&(w.thumbnail||w.tiktok)){
        // サムネイル（TikTokでサムネイルが無いときは作品名のカード）を表示し、押したときだけ動画のプレーヤーを読み込みます
        // ※TikTokのプレーヤーを一度にたくさん読み込むと表示されなくなることがあるため、1本ずつ読み込みます
        visual.classList.add('has-cover');if(w.tiktok)visual.classList.add('is-vertical');
        if(w.thumbnail)visual.classList.add('has-embed');
        const btn=document.createElement('button');btn.type='button';btn.className='work-cover'+(w.thumbnail?'':' no-thumb');btn.setAttribute('aria-label',w.title+' を再生');
        // 再生が終わったら（TikTok）、サムネイルと再生ボタンの表示に戻します。もう一度押すと最初から再生します
        const open=autoplay=>{visual.classList.add('has-embed');const f=makeFrame(autoplay);if(w.tiktok)f._restore=()=>{if(f.isConnected){f.replaceWith(btn);if(!w.thumbnail)visual.classList.remove('has-embed')}};btn.replaceWith(f)};
        if(w.thumbnail){const img=document.createElement('img');img.src=w.thumbnail;img.alt='';img.loading='lazy';img.onerror=()=>{img.remove();btn.classList.add('no-thumb');visual.classList.remove('has-embed');btn.prepend(word)};btn.append(img)}
        const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.title||w.label;
        if(!w.thumbnail)btn.append(word);
        const play=document.createElement('span');play.className='work-play';play.setAttribute('aria-hidden','true');
        btn.append(play);btn.addEventListener('click',()=>openVideo(w,btn,makeFrame));visual.append(btn);
      }
      else if(w.embed){visual.classList.add('has-embed');visual.append(makeFrame(false))}
      else if(w.gallery&&w.gallery.length){
        // 押すとバナーの一覧（ギャラリー）を開くカード
        visual.classList.add('has-gallery');
        const btn=document.createElement('button');btn.type='button';btn.className='work-gallery-open';btn.setAttribute('aria-label',w.title+'の一覧を開く');
        if(w.image){const img=document.createElement('img');img.src=w.image;img.alt='';img.loading='lazy';btn.append(img)}
        const more=document.createElement('span');more.className='work-more';more.textContent=w.gallery.length+'点を見る →';btn.append(more);
        btn.addEventListener('click',()=>openGallery(w,btn));visual.append(btn);
      }
      else if(w.image){const img=document.createElement('img');img.src=w.image;img.alt=w.title;img.loading='lazy';visual.append(img)}
      else {const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.label;visual.append(word)}
    }
    const meta=document.createElement('div');meta.className='work-meta';
    const left=document.createElement('div');const heading=document.createElement('h3');heading.textContent=w.title;const detail=document.createElement('p');detail.textContent=w.description;left.append(heading,detail);
    if(isAll){
      // 「すべて」の一覧：作品名の代わりに「〇〇をすべて見る →」のボタンを表示します
      const go=document.createElement('a');go.className='work-go';go.href='#works-'+w.category;go.textContent=catLabel(w.category)+'をすべて見る →';
      meta.append(go);card.classList.add('is-jump');   // 写真からボタンまで、カード全体を押せるようにします
    } else meta.append(left);
    card.append(visual,meta);grid.append(card);   // 右側の小さなカテゴリー名は表示しません
  });
}
// TikTokプレーヤーの準備ができたら、サムネイルから開いた動画だけ再生します（ブラウザの設定で止められた場合は再生ボタンが表示されます）
window.addEventListener('message',e=>{
  let host='';try{host=new URL(e.origin).hostname}catch(err){return}
  if(!/(^|\.)tiktok\.com$/.test(host))return;
  let d=e.data;if(typeof d==='string'){try{d=JSON.parse(d)}catch(err){return}}
  if(!d)return;
  if(d.type==='onStateChange'&&Number(d.value)===0){
    document.querySelectorAll('iframe').forEach(f=>{if(f.contentWindow===e.source&&f._restore)f._restore()});
    return;
  }
  if(d.type!=='onPlayerReady')return;
  document.querySelectorAll('iframe[data-tiktok-autoplay]').forEach(f=>{
    if(f.contentWindow===e.source){f.removeAttribute('data-tiktok-autoplay');f.contentWindow.postMessage({type:'play','x-tiktok-player':true},'*')}
  });
});
// バナーなどの一覧を大きく表示する画面（ギャラリー）
let galleryBox,galleryReturn;
function openGallery(w,from){
  if(!galleryBox){
    galleryBox=document.createElement('div');galleryBox.className='gallery';galleryBox.hidden=true;
    galleryBox.innerHTML='<div class="gallery-backdrop" data-close></div><div class="gallery-panel" role="dialog" aria-modal="true" aria-labelledby="galleryTitle"><button type="button" class="gallery-close" data-close aria-label="閉じる">×</button><div class="gallery-scroll" tabindex="-1"><p class="gallery-eyebrow">DESIGN</p><h3 class="gallery-title" id="galleryTitle"></h3><div class="gallery-body"></div></div></div>';
    document.body.append(galleryBox);
    galleryBox.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeGallery()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!galleryBox.hidden)closeGallery()});
  }
  galleryReturn=from;
  galleryBox.querySelector('.gallery-panel').classList.remove('is-video','is-video-wide');
  galleryBox.querySelector('.gallery-panel').classList.toggle('is-post',w.galleryLayout==='post');
  galleryBox.querySelector('.gallery-panel').classList.toggle('is-feature',w.galleryLayout==='feature');
  galleryBox.querySelector('.gallery-eyebrow').textContent=w.category==='other'?'OTHER':'DESIGN';
  galleryBox.querySelector('.gallery-title').textContent=w.title;
  const body=galleryBox.querySelector('.gallery-body');body.replaceChildren();
  if(w.summary){
    const box=document.createElement('div');box.className='video-spec gallery-spec gallery-summary';
    const it=document.createElement('div');it.className='video-spec-item';
    const h=document.createElement('h5');h.textContent='制作概要';const tx=document.createElement('p');tx.textContent=w.summary;
    it.append(h,tx);box.append(it);body.append(box);
  }
  const groups=[];w.gallery.forEach(g=>{let grp=groups.find(x=>x.name===(g.group||''));if(!grp){grp={name:g.group||'',items:[]};groups.push(grp)}grp.items.push(g)});
  groups.forEach(grp=>{
    const sec=document.createElement('section');sec.className='gallery-group';
    if(grp.name){const h=document.createElement('h4');h.textContent=grp.name;sec.append(h)}
    const list=document.createElement('div');list.className='gallery-list';
    if(grp.items.length>1&&grp.items.every(g=>/\.png$/i.test(g.src)))list.classList.add('is-stamps');
    grp.items.forEach(g=>{
      const fig=document.createElement('figure');fig.className='gallery-item'+(/\.png$/i.test(g.src)?' is-png':'');
      const img=document.createElement('img');img.src=g.src;img.alt=g.alt||((grp.name?grp.name+' ':'')+(g.size||''));img.loading='lazy';fig.append(img);
      list.append(fig);
    });
    sec.append(list);
    // スマホのSNS投稿：横にスワイプして画像を切り替えます。今何枚目かを点で表示します
    if(w.galleryLayout==='post'&&grp.items.length>1){
      const dots=document.createElement('div');dots.className='gallery-dots';dots.setAttribute('aria-hidden','true');
      grp.items.forEach((_,i)=>{const d=document.createElement('span');if(i===0)d.className='is-active';dots.append(d)});
      list.addEventListener('scroll',()=>{const i=Math.round(list.scrollLeft/(list.scrollWidth/grp.items.length));[...dots.children].forEach((d,k)=>d.classList.toggle('is-active',k===i))},{passive:true});
      sec.append(dots);
    }
    const info=(grp.items.find(g=>g.info)||{}).info;
    if(info){
      const box=document.createElement('div');box.className='video-spec gallery-spec';
      [['time','制作時間'],['point','工夫した点']].forEach(([k,label])=>{
        if(!info[k])return;
        const it=document.createElement('div');it.className='video-spec-item';
        const h=document.createElement('h5');h.textContent=label;const tx=document.createElement('p');tx.textContent=info[k];
        it.append(h,tx);box.append(it);
      });
      sec.append(box);
    }
    const note=info?'':(grp.items.find(g=>g.note)||{}).note;
    if(note){const pnote=document.createElement('p');pnote.className='gallery-note';pnote.textContent=note;sec.append(pnote)}
    body.append(sec);
  });
  galleryBox.hidden=false;document.documentElement.classList.add('is-gallery-open');
  const panel=galleryBox.querySelector('.gallery-scroll');panel.scrollTop=0;panel.focus();
}
// 動画を大きく表示する画面（ギャラリーと同じ枠を使います）
function openVideo(w,from,makeFrame){
  openGallery({title:w.title,category:w.category,gallery:[]},from);
  const panel=galleryBox.querySelector('.gallery-panel');
  panel.classList.add('is-video');panel.classList.toggle('is-video-wide',!w.tiktok);
  galleryBox.querySelector('.gallery-eyebrow').textContent=catLabel(w.category);
  const body=galleryBox.querySelector('.gallery-body');
  const wrap=document.createElement('div');wrap.className='video-player'+(w.tiktok?' is-vertical':'');
  if(w.thumbnail)wrap.style.backgroundImage='url("'+w.thumbnail+'")';   // 動画を読み込むまでサムネイルを表示
  // 再生が終わったら（TikTok）、サムネイルと再生ボタンに戻し、押すと最初から再生します
  const cover=document.createElement('button');cover.type='button';cover.className='work-cover';cover.setAttribute('aria-label',w.title+' をもう一度再生');
  if(w.thumbnail){const img=document.createElement('img');img.src=w.thumbnail;img.alt='';cover.append(img)}
  const play=document.createElement('span');play.className='work-play';play.setAttribute('aria-hidden','true');cover.append(play);
  const start=()=>{const f=makeFrame(true);if(w.tiktok)f._restore=()=>{if(f.isConnected)f.replaceWith(cover)};wrap.replaceChildren(f)};
  cover.addEventListener('click',start);
  body.append(wrap);start();
  const text=w.note||w.description;
  if(w.info){
    const box=document.createElement('div');box.className='video-info video-spec';
    [['reason','制作理由'],['role','担当'],['time','制作時間'],['point','工夫箇所']].forEach(([k,label])=>{
      if(!w.info[k])return;
      const sec=document.createElement('div');sec.className='video-spec-item';
      const h=document.createElement('h4');h.textContent=label;const p=document.createElement('p');p.textContent=w.info[k];
      sec.append(h,p);box.append(sec);
    });
    body.append(box);
  }
  else if(text){const box=document.createElement('div');box.className='video-info';
    const p=document.createElement('p');p.className='gallery-note';p.textContent=text;box.append(p);body.append(box)}
}
function closeGallery(){
  galleryBox.querySelector('.gallery-body').replaceChildren();   // 動画を止めるため、中身を消します
  galleryBox.hidden=true;document.documentElement.classList.remove('is-gallery-open');
  if(galleryReturn)galleryReturn.focus();
}
// 絞り込みボタンと説明文を作ります
const filterBox=document.getElementById('filters');
const filterText=document.getElementById('filterText');
function selectFilter(key){
  filterBox.querySelectorAll('button').forEach(b=>{const on=b.dataset.filter===key;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
  filterText.textContent=(categories[key]&&categories[key].text)||'';
  render(key);
}
Object.keys(categories).forEach(key=>{
  const b=document.createElement('button');b.type='button';b.dataset.filter=key;b.textContent=categories[key].label;
  b.addEventListener('click',()=>{location.hash=key==='all'?'works':'works-'+key});filterBox.append(b);
});
// URLの #works-roomtour などに合わせて表示を切り替えます（ブラウザの「戻る」にも対応）
function applyHash(scroll){
  const m=location.hash.match(/^#works-(\w+)$/);
  const key=m&&categories[m[1]]?m[1]:'all';
  selectFilter(key);
  if(scroll&&(m||location.hash==='#works'))document.getElementById('works').scrollIntoView({behavior:'smooth'});
}
window.addEventListener('hashchange',()=>applyHash(true));
applyHash(false);
if(contactEmail&&document.getElementById('emailLink')){const a=document.getElementById('emailLink');a.href='mailto:'+contactEmail;a.textContent='メールで問い合わせる ↗'}
document.getElementById('year').textContent=new Date().getFullYear();

// ファーストビュー下の「My Portfolio」を、画面の左端から右端までちょうど届く大きさに合わせます
(function(){
  const el=document.querySelector('.hero-bigtext');
  if(!el)return;
  const fit=()=>{
    const cs=getComputedStyle(el);
    const avail=el.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);
    el.style.fontSize='100px';
    const span=document.createElement('span');span.textContent=el.textContent;span.style.whiteSpace='nowrap';
    el.textContent='';el.append(span);
    const w=span.getBoundingClientRect().width;
    el.textContent=span.textContent;
    if(w>0)el.style.fontSize=(100*avail/w).toFixed(2)+'px';
  };
  fit();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
  let t;window.addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(fit,150)});
})();
