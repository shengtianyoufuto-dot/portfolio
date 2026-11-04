// ============================================================
// ⓪ カテゴリー（WORKSの絞り込みボタン）
//   label … ボタンとカード右上に表示される名前
//   text  … ボタンを押したときに表示される説明文（自由に書き換えてください）
//   cover … ALL に表示するカテゴリーのサムネイル。images/category フォルダに入れて 'images/category/ファイル名.jpg'
//           （空のときは、そのカテゴリーの1本目の作品のサムネイルを自動で使います）
//   カテゴリーを増やすときは、ここに1行追加して、作品の category に同じ名前を書きます。
// ============================================================
const categories = {
  all:      { label: 'ALL',       text: 'これまでに制作した作品の一覧です。' },
  sns:      { label: 'SNS',       text: 'Instagram・TikTokなど、SNS向けのショート動画。企画から撮影・編集まで担当しています。',
              cover: '＃' },   // 例: 'images/category/sns.jpg'
  roomtour: { label: 'ROOM TOUR', text: '物件の魅力が伝わるルームツアー動画。撮影・編集・テロップ制作を担当しています。',
              cover: '' },   // 例: 'images/category/roomtour.jpg'
  design:   { label: 'DESIGN',    text: 'バナーやサムネイルなど、SNS・Web向けのグラフィックデザインです。',
              cover: '' },   // 例: 'images/category/design.jpg'
  other:    { label: 'OTHER',     text: 'その他の制作物です。',
              cover: '' },   // 例: 'images/category/other.jpg'
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
//   使わない項目は '' のまま、または行ごと消してOKです。
// ============================================================
const works = [
  {
    title: 'IT部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696817418936601876',
    thumbnail: 'images/sns/sns01.jpg',
  },
  {
    title: 'コーポレート部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696816154635062548',
    thumbnail: 'images/sns/sns02.jpg',
  },
  {
    title: 'マンスリー部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696421522574937364',
    thumbnail: 'images/sns/sns03.jpg',
  },
  {
    title: 'マーケティング部 部署紹介動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7696074689931660564',
    thumbnail: 'images/sns/sns04.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7690897684890258708',
    thumbnail: 'images/sns/sns05.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7671206622827449620',
    thumbnail: 'images/sns/sns06.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7676434770192223509',
    thumbnail: 'images/sns/sns07.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7639642814724427029',
    thumbnail: 'images/sns/sns08.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7637432651980344596',
    thumbnail: 'images/sns/sns09.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7624435764977208593',
    thumbnail: 'images/sns/sns10.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7667509404400373012',
    thumbnail: 'images/sns/sns11.jpg',
  },
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    tiktok: 'https://www.tiktok.com/@bratto_recruit/video/7693482293389724949',
    thumbnail: 'images/sns/sns12.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    youtube: 'https://www.youtube.com/embed/PHBCDgUPTmE',
    thumbnail: 'images/roomtour/roomtour01.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    youtube: 'https://www.youtube.com/embed/OFkphFgNOkE',
    thumbnail: 'images/roomtour/roomtour02.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7689401925996973313',
    thumbnail: 'images/roomtour/roomtour03.jpg',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7686796512428444949',
    thumbnail: 'images/roomtour/roomtour04.jpg',
  },
  {
    title: 'キャンペーンバナー',
    category: 'design',
    description: 'グラフィックデザイン',
    image: '',
    url: '',
  },
  {
    title: 'その他の作品',
    category: 'other',
    description: '作品の説明',
    image: '',
    url: '',
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
  else if(w.tiktok){const m=String(w.tiktok).match(/\/video\/(\d+)/);if(m)w.embed='https://www.tiktok.com/player/v1/'+m[1];}
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
function render(filter='all'){
  grid.replaceChildren();
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
      const more=document.createElement('span');more.className='work-more';more.textContent=catLabel(w.category)+' をすべて見る →';visual.append(more);
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
        const open=autoplay=>{visual.classList.add('has-embed');btn.replaceWith(makeFrame(autoplay))};
        if(w.thumbnail){const img=document.createElement('img');img.src=w.thumbnail;img.alt='';img.loading='lazy';img.onerror=()=>{img.remove();btn.classList.add('no-thumb');visual.classList.remove('has-embed');btn.prepend(word)};btn.append(img)}
        const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.title||w.label;
        if(!w.thumbnail)btn.append(word);
        const play=document.createElement('span');play.className='work-play';play.setAttribute('aria-hidden','true');
        btn.append(play);btn.addEventListener('click',()=>open(true));visual.append(btn);
      }
      else if(w.embed){visual.classList.add('has-embed');visual.append(makeFrame(false))}
      else if(w.image){const img=document.createElement('img');img.src=w.image;img.alt=w.title;img.loading='lazy';visual.append(img)}
      else {const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.label;visual.append(word)}
    }
    const meta=document.createElement('div');meta.className='work-meta';
    const left=document.createElement('div');const heading=document.createElement('h3');heading.textContent=w.title;const detail=document.createElement('p');detail.textContent=w.description;left.append(heading,detail);
    const tag=document.createElement('span');tag.className='work-tag';tag.textContent=catLabel(w.category);meta.append(left,tag);card.append(visual,meta);grid.append(card);
  });
}
// TikTokプレーヤーの準備ができたら、サムネイルから開いた動画だけ再生します（ブラウザの設定で止められた場合は再生ボタンが表示されます）
window.addEventListener('message',e=>{
  let host='';try{host=new URL(e.origin).hostname}catch(err){return}
  if(!/(^|\.)tiktok\.com$/.test(host))return;
  let d=e.data;if(typeof d==='string'){try{d=JSON.parse(d)}catch(err){return}}
  if(!d||d.type!=='onPlayerReady')return;
  document.querySelectorAll('iframe[data-tiktok-autoplay]').forEach(f=>{
    if(f.contentWindow===e.source){f.removeAttribute('data-tiktok-autoplay');f.contentWindow.postMessage({type:'play','x-tiktok-player':true},'*')}
  });
});
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
if(contactEmail){const a=document.getElementById('emailLink');a.href='mailto:'+contactEmail;a.textContent='メールで問い合わせる ↗'}
document.getElementById('year').textContent=new Date().getFullYear();
