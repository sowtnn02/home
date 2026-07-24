data.forEach(row => {
  const vals = Object.values(row);
  // 自動清理字串中的多餘空格
  const fam = (vals[1] || '').trim(); 
  
  entries.forEach(e => {
    // 比對家庭名稱 (移除空格進行比對，提高容錯率)
    if (fam.replace(/\s+/g, '') !== e.family.trim().replace(/\s+/g, '')) return;

    for (let i = 0; i < 3; i++) {
      const child = (vals[2 + i*3] || '').trim();
      const squad = (vals[3 + i*3] || '').trim();
      const st = (vals[4 + i*3] || '').trim();
      
      if (squad === sub || squad === grp) {
        const k = `${e.family.trim()}|${e.child.trim()}`;
        statusMap[k] = { ...statusMap[k], filled:true, submitted:true, status:st };
      }
    }
  });
});

results.innerHTML += `<li style="background:#f9fbff;font-weight:bold;margin-top:10px;">🟢 ${sub}</li>`;
entries.forEach(e => {
  const k = `${e.family.trim()}|${e.child.trim()}`;
  const s = statusMap[k];
  let line;
  if (s.filled) {
    // 🟢 新增：判斷 填單錯誤 / 出席 / 請假
    if (s.status.includes('填單錯誤')) {
      line = `${s.family} _ ${s.child}：<span style="color:#e67e22; font-weight:bold;">⚠️ 填單錯誤</span>`;
    } else if (s.status.includes('出席')) {
      line = `${s.family} _ ${s.child}：<span class="status-present">✅ 出席</span>`;
    } else {
      line = `${s.family} _ ${s.child}：<span class="status-absent">❌ 請假</span>`;
    }
  } else if (s.submitted) {
    line = `${s.family} _ ${s.child}：<span class="status-unfilled">⚠️ 有填表，但未填此小隊</span>`;
  } else {
    line = `${s.family} _ ${s.child}：<span class="status-unfilled">未填寫</span>`;
  }
  results.innerHTML += `<li>${line}</li>`;
});
