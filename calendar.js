// Calendar demo: four completed memories and one plan, separate from favorites.
const memories = [
  {date:'2026-10-04', title:'A little coffee break', neighborhood:'West Village', image:'assets/coffee.svg', status:'completed'},
  {date:'2026-10-10', title:'A New York bagel morning', neighborhood:'Lower East Side', image:'assets/bagel.svg', status:'completed'},
  {date:'2026-10-17', title:'Central Park pause', neighborhood:'Central Park', image:'assets/park.svg', status:'completed'},
  {date:'2026-10-20', title:'West Village wander', neighborhood:'West Village', image:'assets/pigeon-watercolor.png', status:'completed'},
  {date:'2026-10-24', title:'Brooklyn Bridge Stroll', neighborhood:'Brooklyn', status:'planned'}
];
let month = 9;
let year = 2026;
const grid = document.getElementById('calendar-grid');
const dialog = document.getElementById('calendar-dialog');
function renderCalendar() {
  const name = new Date(year, month, 1).toLocaleString('en-US', {month:'long'});
  const label = document.getElementById('month-label');
  label.replaceChildren();
  const monthName = document.createElement('span'); monthName.textContent = name.toUpperCase();
  const yearLabel = document.createElement('span'); yearLabel.className = 'calendar-year'; yearLabel.textContent = year;
  label.append(monthName, yearLabel);
  grid.setAttribute('aria-label', `${name} ${year} calendar dates`);
  grid.replaceChildren();
  const start = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = Math.ceil((start + days) / 7) * 7;
  const prefix = `${year}-${String(month + 1).padStart(2, '0')}`;
  for (let cell = 0; cell < cells; cell++) {
    const day = cell - start + 1;
    if (day < 1 || day > days) {const blank = document.createElement('div');blank.className='calendar-blank';blank.setAttribute('aria-hidden','true');grid.appendChild(blank);continue;}
    const key = `${prefix}-${String(day).padStart(2,'0')}`;
    const memory = memories.find(item => item.date === key);
    const button = document.createElement('button');button.type='button';button.className='calendar-day';
    button.setAttribute('aria-label', `${name} ${day}, ${year}${memory ? `: ${memory.title}, ${memory.status}` : ': no quests'}`);
    const number = document.createElement('span');number.className='day-number';number.textContent=day;
    if (key === '2026-10-20') {number.classList.add('demo-today');button.setAttribute('aria-description','Selected day in the demo profile');}
    button.appendChild(number);
    if (memory) {
      if (memory.status === 'planned') {const ring=document.createElement('i');ring.className='planned-ring';button.appendChild(ring);}
      else if (memory.image) {const img=document.createElement('img');img.src=memory.image;img.alt='';img.className='calendar-stamp';button.appendChild(img);}
      else {const stamp=document.createElement('span');stamp.className='emoji-stamp';stamp.textContent=memory.icon;stamp.setAttribute('aria-hidden','true');button.appendChild(stamp);}
    }
    button.addEventListener('click',()=>openDay(name, day, memory));grid.appendChild(button);
  }
  const completed=memories.filter(item=>item.date.startsWith(prefix)&&item.status==='completed');
  document.getElementById('quest-count').textContent=completed.length;
  document.getElementById('neighborhood-count').textContent=`${new Set(completed.map(item=>item.neighborhood)).size} neighborhoods explored`;
}
function openDay(name, day, memory) {
  const content=document.getElementById('day-content');content.replaceChildren();
  const title=document.createElement('h2');title.id='day-title';title.textContent=`${name} ${day}, ${year}`;
  const details=document.createElement('p');details.textContent=memory ? `${memory.title} · ${memory.neighborhood}. ${memory.status === 'completed' ? 'Completed memory (demo).' : 'Planned adventure (demo), not completed.'}` : 'No quests for this date. Find your next little adventure in Explore.';
  const link=document.createElement('a');link.href='explore.html';link.className='dialog-action calendar-explore';link.textContent='Explore activities →';content.append(title,details,link);dialog.showModal();
}
document.getElementById('previous-month').addEventListener('click',()=>{if(--month<0){month=11;year--;}renderCalendar();});
document.getElementById('next-month').addEventListener('click',()=>{if(++month>11){month=0;year++;}renderCalendar();});
document.getElementById('close-day').addEventListener('click',()=>dialog.close());
let toastTimeout;
function announce(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('is-visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('is-visible'),3300);}
document.getElementById('settings-button').addEventListener('click',()=>announce('Demo profile: Phyllis. The calendar uses sample memories, with no login required.'));
document.getElementById('add-button').addEventListener('click',()=>{window.location.href='explore.html';});
renderCalendar();
