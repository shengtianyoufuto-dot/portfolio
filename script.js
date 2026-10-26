// ============================================================
// ⓪ カテゴリー（WORKSの絞り込みボタン）
//   label … ボタンとカード右上に表示される名前
//   text  … ボタンを押したときに表示される説明文（自由に書き換えてください）
//   カテゴリーを増やすときは、ここに1行追加して、作品の category に同じ名前を書きます。
// ============================================================
const categories = {
  all:      { label: 'ALL',       text: 'これまでに制作した作品の一覧です。' },
  sns:      { label: 'SNS',       text: 'Instagram・TikTokなど、SNS向けのショート動画。企画から撮影・編集まで担当しています。' },
  roomtour: { label: 'ROOM TOUR', text: '物件の魅力が伝わるルームツアー動画。撮影・編集・テロップ制作を担当しています。' },
  design:   { label: 'DESIGN',    text: 'バナーやサムネイルなど、SNS・Web向けのグラフィックデザインです。' },
  other:    { label: 'OTHER',     text: 'その他の制作物です。' },
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
//   image       … 画像を表示したいとき。images フォルダに入れて 'images/ファイル名.jpg'
//   url         … 画像カードをクリックしたときに開くページ（なければ空のまま）
//   使わない項目は '' のまま、または行ごと消してOKです。
// ============================================================
const works = [
  {
    title: 'SNS動画',
    category: 'sns',
    description: '企画・撮影・編集',
    youtube: '',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    youtube: 'https://www.youtube.com/embed/PHBCDgUPTmE',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    youtube: 'https://www.youtube.com/embed/OFkphFgNOkE',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7689401925996973313',
  },
  {
    title: 'ルームツアー動画',
    category: 'roomtour',
    description: '撮影・編集・テロップ制作',
    tiktok: 'https://www.tiktok.com/@bratto_group/video/7686796512428444949',
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
works.forEach((w,i)=>{
  counters[w.category]=(counters[w.category]||0)+1;
  if(!w.theme) w.theme=themes[Math.max(0,Object.keys(categories).indexOf(w.category)-1)%themes.length];
  if(!w.label) w.label=catLabel(w.category)+' WORK '+String(counters[w.category]).padStart(2,'0');
  w.embed='';w.thumb=w.image||'';
  if(w.youtube){w.embed=toEmbedUrl(w.youtube);const id=w.embed.split('/embed/')[1];if(id&&!w.image)w.thumb='https://i.ytimg.com/vi/'+id+'/hqdefault.jpg';}
  else if(w.tiktok){const m=String(w.tiktok).match(/\/video\/(\d+)/);if(m)w.embed='https://www.tiktok.com/player/v1/'+m[1];}
});

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
  list.forEach(w=>{
    const card=document.createElement('article');card.className='work-card';
    let visual;
    if(isAll){
      // ALL：サムネイルを表示し、クリックでそのカテゴリーへ移動
      visual=document.createElement('a');visual.className='work-visual work-jump '+w.theme;
      visual.href='#works-'+w.category;visual.setAttribute('aria-label',catLabel(w.category)+' の作品一覧を見る');
      const addImg=src=>{const img=document.createElement('img');img.src=src;img.alt='';img.loading='lazy';visual.prepend(img)};
      if(w.thumb){addImg(w.thumb)}
      else {
        const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.label;visual.append(word);
        // TikTokはサムネイルを取得できたら差し替えます（取得できなければ文字のまま）
        if(w.tiktok){fetch('https://www.tiktok.com/oembed?url='+encodeURIComponent(w.tiktok)).then(r=>r.json()).then(d=>{if(d.thumbnail_url){w.thumb=d.thumbnail_url;word.remove();addImg(d.thumbnail_url)}}).catch(()=>{})}
      }
      const more=document.createElement('span');more.className='work-more';more.textContent=catLabel(w.category)+' をすべて見る →';visual.append(more);
    } else {
      visual=document.createElement(w.url&&!w.embed?'a':'div');visual.className='work-visual '+w.theme;
      if(w.url&&!w.embed){visual.href=w.url;visual.target='_blank';visual.rel='noopener noreferrer';visual.setAttribute('aria-label',w.title+' を開く');}
      if(w.embed){visual.classList.add('has-embed');if(w.tiktok)visual.classList.add('is-vertical');const frame=document.createElement('iframe');frame.src=w.embed;frame.title=w.title;frame.loading='lazy';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;visual.append(frame)}
      else if(w.image){const img=document.createElement('img');img.src=w.image;img.alt=w.title;img.loading='lazy';visual.append(img)}
      else {const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.label;visual.append(word)}
    }
    const meta=document.createElement('div');meta.className='work-meta';
    const left=document.createElement('div');const heading=document.createElement('h3');heading.textContent=w.title;const detail=document.createElement('p');detail.textContent=w.description;left.append(heading,detail);
    const tag=document.createElement('span');tag.className='work-tag';tag.textContent=catLabel(w.category);meta.append(left,tag);card.append(visual,meta);grid.append(card);
  });
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
if(contactEmail){const a=document.getElementById('emailLink');a.href='mailto:'+contactEmail;a.textContent='メールで問い合わせる ↗'}
document.getElementById('year').textContent=new Date().getFullYear();
