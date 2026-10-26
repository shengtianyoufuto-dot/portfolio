// ① 作品を追加するときは、下の配列に1件追加します。
// image: 'images/作品名.jpg' とすると、ご自身の画像を表示できます。
// url: 作品のYouTubeや公開ページのURLを指定できます。
const works = [
  {title:'SNSショート動画',category:'video',description:'企画・撮影・編集',label:'VIDEO WORK 01',theme:'v1',image:'',url:''},
  {title:'ルームツアー動画',category:'video',description:'撮影・編集・テロップ制作',label:'VIDEO WORK 02',theme:'v2',image:'',url:''},
  {title:'キャンペーンバナー',category:'design',description:'グラフィックデザイン',label:'DESIGN WORK 01',theme:'v3',image:'',url:''},
  {title:'SNSサムネイル',category:'design',description:'SNS用クリエイティブ',label:'DESIGN WORK 02',theme:'v4',image:'',url:''}
];
// ② 公開前に、ご自身の連絡先メールアドレスを入力してください。
const contactEmail = '';
const grid = document.getElementById('workGrid');
function render(filter='all'){
  grid.replaceChildren();
  works.filter(w=>filter==='all'||w.category===filter).forEach(w=>{
    const card=document.createElement('article');card.className='work-card';
    const visual=document.createElement(w.url?'a':'div');visual.className='work-visual '+w.theme;
    if(w.url){visual.href=w.url;visual.target='_blank';visual.rel='noopener noreferrer';visual.setAttribute('aria-label',w.title+' を開く');}
    if(w.image){const img=document.createElement('img');img.src=w.image;img.alt=w.title;img.loading='lazy';visual.append(img)}
    else {const word=document.createElement('span');word.className='work-placeholder';word.textContent=w.label;visual.append(word)}
    const meta=document.createElement('div');meta.className='work-meta';
    const left=document.createElement('div');const heading=document.createElement('h3');heading.textContent=w.title;const detail=document.createElement('p');detail.textContent=w.description;left.append(heading,detail);
    const tag=document.createElement('span');tag.className='work-tag';tag.textContent=w.category.toUpperCase();meta.append(left,tag);card.append(visual,meta);grid.append(card);
  });
}
render();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');render(button.dataset.filter);
}));
if(contactEmail){const a=document.getElementById('emailLink');a.href='mailto:'+contactEmail;a.textContent='メールで問い合わせる ↗'}
document.getElementById('year').textContent=new Date().getFullYear();
