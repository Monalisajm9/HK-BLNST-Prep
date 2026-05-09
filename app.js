const DAILY_QUESTION_COUNT = 40;
const STORAGE_KEY = "hkBlnstPracticeAnsweredV1";

const basicLawCore = [
  ["bl001", "基本法：總則", "easy", "第1條", "香港特別行政區是中華人民共和國的甚麼部分？", ["不可分離的部分", "獨立政治實體", "臨時託管地", "聯邦成員國"], 0, "第1條訂明香港特別行政區是中華人民共和國不可分離的部分。"],
  ["bl002", "基本法：總則", "medium", "第2條", "香港依照《基本法》享有哪組權力？", ["行政管理權、立法權、獨立司法權和終審權", "外交權、防務權和制憲權", "宣戰權和締約權", "修改憲法權"], 0, "第2條列明香港享有行政管理權、立法權、獨立的司法權和終審權。"],
  ["bl003", "基本法：總則", "easy", "第5條", "香港原有資本主義制度和生活方式保持多少年不變？", ["二十年", "三十年", "五十年", "一百年"], 2, "第5條訂明保持原有資本主義制度和生活方式，五十年不變。"],
  ["bl004", "基本法：總則", "medium", "第7條", "香港境內土地和自然資源收入如何處理？", ["全歸香港特區政府支配", "全數上繳中央", "由區議會分配", "由外國機構管理"], 0, "第7條訂明土地和自然資源收入全歸香港特區政府支配。"],
  ["bl005", "基本法：總則", "medium", "第8條", "香港原有法律除抵觸《基本法》或經修改外，原則上如何處理？", ["予以保留", "全部廢止", "只保留刑事法", "交由外國法院審查"], 0, "第8條列明普通法、衡平法、條例、附屬立法和習慣法等予以保留。"],
  ["bl006", "基本法：總則", "hard", "第11條", "香港特區立法機關制定的任何法律，不得同哪一文件相抵觸？", ["《基本法》", "私人合約", "外國行政指引", "區議會議事規則"], 0, "第11條訂明香港特區立法機關制定的任何法律均不得同《基本法》相抵觸。"],
  ["bl007", "中央與特區關係", "easy", "第12條", "香港特區直轄於哪一方？", ["中央人民政府", "全國政協", "最高人民法院", "香港立法會"], 0, "第12條訂明香港特區直轄於中央人民政府。"],
  ["bl008", "中央與特區關係", "easy", "第13條", "中央人民政府負責管理與香港有關的哪類事務？", ["外交事務", "區議會日常事務", "所有民事訴訟", "土地行政"], 0, "第13條訂明中央人民政府負責管理與香港特區有關的外交事務。"],
  ["bl009", "中央與特區關係", "easy", "第14條", "中央人民政府負責管理香港的哪一項事務？", ["防務", "財政預算", "房屋政策", "公務員招聘"], 0, "第14條訂明中央人民政府負責管理香港特區的防務。"],
  ["bl010", "中央與特區關係", "medium", "第14條", "香港特區政府負責維持甚麼？", ["社會治安", "國家防務", "外交關係", "全國性法律制定"], 0, "第14條訂明香港特區政府負責維持香港特區的社會治安。"],
  ["bl011", "中央與特區關係", "medium", "第17條", "香港立法機關制定的法律須報哪一機關備案？", ["全國人大常委會", "最高人民法院", "外交部", "全國政協"], 0, "第17條訂明香港特區立法機關制定的法律須報全國人大常委會備案。"],
  ["bl012", "中央與特區關係", "hard", "第18條", "全國性法律在香港實施，一般須列於哪一附件？", ["附件三", "附件一", "附件二", "附件四"], 0, "第18條訂明全國性法律除列於附件三者外，不在香港特區實施。"],
  ["bl013", "中央與特區關係", "hard", "第19條", "香港法院對哪類國家行為無管轄權？", ["國防、外交等國家行為", "普通合約糾紛", "本地土地案件", "一般刑事案件"], 0, "第19條訂明香港法院對國防、外交等國家行為無管轄權。"],
  ["bl014", "中央與特區關係", "hard", "第22條", "中央各部門如需在香港設立機構，須經甚麼程序？", ["徵得香港特區政府同意並經中央人民政府批准", "只需通知區議會", "由法院自行批准", "只需外國領事同意"], 0, "第22條訂明中央各部門等如需在港設立機構，須徵得香港特區政府同意並經中央人民政府批准。"],
  ["bl015", "中央與特區關係", "medium", "第23條", "香港特區應自行立法禁止哪類行為？", ["叛國、分裂國家、煽動叛亂等", "所有示威活動", "所有新聞出版", "所有海外交流"], 0, "第23條列明香港應自行立法禁止叛國、分裂國家、煽動叛亂等行為。"],
  ["bl016", "居民權利義務", "easy", "第24條", "第24條主要處理哪項身份問題？", ["永久性居民及居留權", "立法會投票程序", "外匯基金管理", "公務員薪酬"], 0, "第24條列明香港永久性居民類別及居留權。"],
  ["bl017", "居民權利義務", "easy", "第25條", "香港居民在法律面前享有甚麼待遇？", ["一律平等", "按職級區分", "只限永久居民平等", "由行政機關逐案決定"], 0, "第25條訂明香港居民在法律面前一律平等。"],
  ["bl018", "居民權利義務", "easy", "第26條", "香港永久性居民依法享有甚麼政治權利？", ["選舉權和被選舉權", "外交任命權", "防務指揮權", "法律解釋權"], 0, "第26條訂明永久性居民依法享有選舉權和被選舉權。"],
  ["bl019", "居民權利義務", "medium", "第27條", "下列哪項屬第27條保障？", ["言論、新聞、出版自由", "不受任何法律限制", "自行發行法定貨幣", "拒絕遵守法院命令"], 0, "第27條保障言論、新聞、出版、結社、集會、遊行、示威等自由。"],
  ["bl020", "居民權利義務", "medium", "第28條", "第28條主要保障甚麼？", ["人身自由不受侵犯", "財政收入不上繳", "自由港地位", "外交談判權"], 0, "第28條訂明香港居民的人身自由不受侵犯。"],
  ["bl021", "居民權利義務", "medium", "第30條", "通訊自由和秘密可在甚麼情況下依法檢查？", ["公共安全和追查刑事犯罪需要，並依法律程序", "任何私人公司要求", "任何外國機構要求", "一般行政方便"], 0, "第30條列明例外為公共安全和追查刑事犯罪需要，並須依法律程序。"],
  ["bl022", "居民權利義務", "easy", "第31條", "香港居民享有遷徙自由，亦有甚麼自由？", ["旅行和出入境自由", "免除所有出入境管制", "自動取得外國國籍", "不受法院命令約束"], 0, "第31條保障遷徙、移居、旅行和出入境自由。"],
  ["bl023", "居民權利義務", "medium", "第35條", "居民有權對行政部門和行政人員行為向哪裏提起訴訟？", ["法院", "外國領事館", "私人仲裁會", "傳媒機構"], 0, "第35條訂明居民有權對行政部門和行政人員行為向法院提起訴訟。"],
  ["bl024", "居民權利義務", "hard", "第39條", "居民權利和自由的限制不得與哪項規定抵觸？", ["第39條第一款所列國際公約適用於香港的有關規定", "私人合約範本", "外國行政指引", "區議會內規"], 0, "第39條涉及相關國際公約適用於香港的規定。"],
  ["bl025", "政治體制", "easy", "第43條", "行政長官是香港特區的甚麼？", ["首長，代表香港特區", "立法會主席", "終審法院首席法官", "外交部代表"], 0, "第43條訂明行政長官是香港特區首長，代表香港特區。"],
  ["bl026", "政治體制", "medium", "第44條", "行政長官須由哪類人士擔任？", ["年滿40歲、通常居港連續滿20年並在外國無居留權的香港永久性居民中的中國公民", "任何香港居民", "任何中國公民", "由外國政府提名的人"], 0, "第44條列明行政長官的年齡、居港、國籍、永久居民及外國居留權要求。"],
  ["bl027", "政治體制", "easy", "第45條", "行政長官由哪一方任命？", ["中央人民政府", "終審法院", "立法會主席", "區議會"], 0, "第45條訂明行政長官由中央人民政府任命。"],
  ["bl028", "政治體制", "medium", "第46條", "行政長官任期多久？", ["五年，可連任一次", "三年，不可連任", "四年，可無限連任", "七年，可連任兩次"], 0, "第46條訂明行政長官任期五年，可連任一次。"],
  ["bl029", "政治體制", "hard", "第48條", "下列哪項屬行政長官職權？", ["簽署法案，公布法律", "審理刑事上訴", "直接修改《基本法》", "任命全國人大常委"], 0, "第48條列明行政長官多項職權，包括簽署法案及公布法律。"],
  ["bl030", "政治體制", "medium", "第60條", "香港特區政府首長是誰？", ["行政長官", "政務司司長", "立法會主席", "終審法院首席法官"], 0, "第60條訂明香港特區政府首長是行政長官。"],
  ["bl031", "政治體制", "easy", "第66條", "立法會是香港特區的甚麼機關？", ["立法機關", "司法機關", "外交機關", "軍事機關"], 0, "第66條訂明立法會是香港特區立法機關。"],
  ["bl032", "司法", "easy", "第80條", "香港各級法院是香港特區的甚麼機關？", ["司法機關", "行政機關", "立法機關", "財政機關"], 0, "第80條訂明各級法院是香港特區司法機關。"],
  ["bl033", "司法", "easy", "第82條", "香港終審權屬於哪一法院？", ["香港特區終審法院", "最高人民法院", "高等法院原訟法庭", "區域法院"], 0, "第82條訂明終審權屬於香港特區終審法院。"],
  ["bl034", "司法", "medium", "第85條", "香港法院獨立審判，不受甚麼干涉？", ["任何干涉", "只不受私人干涉", "只不受傳媒干涉", "只不受外國干涉"], 0, "第85條訂明法院獨立審判，不受任何干涉。"],
  ["bl035", "經濟", "medium", "第106條", "香港財政收入如何處理？", ["全部用於自身需要，不上繳中央", "固定上繳一半", "只用於防務", "由外國審計"], 0, "第106條訂明香港財政收入全部用於自身需要，不上繳中央人民政府。"],
  ["bl036", "經濟", "easy", "第108條", "香港實行甚麼稅制？", ["獨立稅制", "全國統一稅制", "只徵關稅", "各區自行定稅"], 0, "第108條訂明香港實行獨立稅收制度。"],
  ["bl037", "經濟", "easy", "第111條", "香港法定貨幣是甚麼？", ["港元", "人民幣", "美元", "澳門元"], 0, "第111條訂明港元為香港法定貨幣。"],
  ["bl038", "經濟", "easy", "第114條", "香港保持甚麼港地位？", ["自由港", "軍事港", "閉關港", "單一貿易港"], 0, "第114條訂明香港保持自由港地位。"],
  ["bl039", "對外事務", "medium", "第151條", "香港可用哪一名稱在適當領域發展對外關係？", ["中國香港", "香港共和國", "英屬香港", "南中國特區"], 0, "第151條訂明香港可用「中國香港」名義保持和發展對外關係。"],
  ["bl040", "解釋與修改", "hard", "第158條", "《基本法》解釋權屬於哪一機關？", ["全國人大常委會", "香港特區政府", "立法會", "終審法院首席法官"], 0, "第158條訂明《基本法》解釋權屬於全國人大常委會。"]
];

const nslCore = [
  ["nsl001", "香港國安法：總則", "easy", "第1條", "《香港國安法》的立法目的包括維護甚麼？", ["國家安全", "個別行業利益", "外國司法管轄權", "私人商業安排"], 0, "第1條列明制定本法的目的包括維護國家安全等。"],
  ["nsl002", "香港國安法：總則", "medium", "第3條", "中央人民政府對香港有關國家安全事務負有甚麼責任？", ["根本責任", "只負諮詢責任", "完全沒有責任", "只負財政責任"], 0, "第3條訂明中央人民政府負有根本責任。"],
  ["nsl003", "香港國安法：總則", "medium", "第3條", "香港特區負有維護國家安全的甚麼責任？", ["憲制責任", "外交豁免責任", "私人合約責任", "外國委託責任"], 0, "第3條訂明香港特區負有維護國家安全的憲制責任。"],
  ["nsl004", "香港國安法：總則", "medium", "第4條", "維護國家安全應當尊重和保障甚麼？", ["人權", "任何非法行為", "外國制裁", "不受法律限制的自由"], 0, "第4條訂明維護國家安全應尊重和保障人權。"],
  ["nsl005", "香港國安法：總則", "hard", "第5條", "第5條列明的法治原則包括哪一項？", ["罪刑法定", "有罪推定", "不准辯護", "全部秘密審訊"], 0, "第5條列明罪刑法定等法治原則。"],
  ["nsl006", "香港國安法：總則", "hard", "第5條", "第5條關於時間效力的重點是甚麼？", ["不具有溯及力", "所有舊行為一律追溯", "由私人機構決定", "不需法律依據"], 0, "第5條體現不具有溯及力等法治原則。"],
  ["nsl007", "香港國安法：總則", "easy", "第6條", "維護國家主權、統一和領土完整是誰的共同義務？", ["包括香港同胞在內的全中國人民", "只限公務員", "只限執法人員", "只限司法機構"], 0, "第6條訂明這是包括香港同胞在內的全中國人民共同義務。"],
  ["nsl008", "香港國安法：機構職責", "medium", "第12條", "香港設立哪一機構負責維護國家安全事務？", ["香港特區維護國家安全委員會", "國際安全仲裁中心", "區議會國安小組", "終審委員會"], 0, "第12條訂明香港設立維護國家安全委員會。"],
  ["nsl009", "香港國安法：機構職責", "hard", "第13條", "港區國安委由誰擔任主席？", ["行政長官", "政務司司長", "保安局局長", "警務處處長"], 0, "第13條訂明港區國安委由行政長官擔任主席。"],
  ["nsl010", "香港國安法：機構職責", "hard", "第14條", "港區國安委作出的決定是否受司法覆核？", ["不受司法覆核", "必須由區議會覆核", "必須由外國法院覆核", "必須交私人仲裁"], 0, "第14條訂明港區國安委作出的決定不受司法覆核。"],
  ["nsl011", "香港國安法：機構職責", "medium", "第16條", "警務處設立維護國家安全部門，配備甚麼力量？", ["執法力量", "外交談判力量", "立法表決力量", "終審裁判力量"], 0, "第16條訂明警務處設立維護國家安全部門，配備執法力量。"],
  ["nsl012", "香港國安法：機構職責", "medium", "第18條", "律政司設立哪類部門負責國安犯罪案件檢控？", ["專門檢控部門", "外交審查部門", "土地註冊部門", "稅務評估部門"], 0, "第18條訂明律政司設立專門檢控部門。"],
  ["nsl013", "香港國安法：罪行", "easy", "第20條", "第20條主要處理哪一類犯罪？", ["分裂國家罪", "普通盜竊罪", "欠租糾紛", "交通違例"], 0, "第20條列明分裂國家罪相關行為。"],
  ["nsl014", "香港國安法：罪行", "medium", "第22條", "第22條主要處理哪一類犯罪？", ["顛覆國家政權罪", "一般民事侵權", "普通合約糾紛", "無牌擺賣"], 0, "第22條列明顛覆國家政權罪相關行為。"],
  ["nsl015", "香港國安法：罪行", "medium", "第24條", "第24條主要處理哪一類犯罪？", ["恐怖活動罪", "普通噪音滋擾", "公司註冊失誤", "一般民事債務"], 0, "第24條列明恐怖活動罪相關行為。"],
  ["nsl016", "香港國安法：罪行", "medium", "第29條", "第29條主要處理哪一類犯罪？", ["勾結外國或者境外勢力危害國家安全罪", "一般誹謗民事責任", "違例泊車", "欠租糾紛"], 0, "第29條列明勾結外國或者境外勢力危害國家安全罪。"],
  ["nsl017", "香港國安法：程序", "hard", "第41條", "國安犯罪案件審判原則上如何進行？", ["公開進行，但涉及國家秘密或公共秩序等可不公開", "一律私人審理", "一律不設辯護", "一律由外國法院審理"], 0, "第41條訂明審判公開進行，但在特定情況可不公開審理。"],
  ["nsl018", "香港國安法：程序", "hard", "第42條", "處理國安犯罪案件時，執法、司法機關應確保案件如何辦理？", ["公正、及時辦理", "無限期擱置", "交私人決定", "不受法律程序約束"], 0, "第42條要求執法、司法機關確保案件公正、及時辦理。"],
  ["nsl019", "香港國安法：駐港國安公署", "hard", "第48條", "中央人民政府在香港設立哪一機構？", ["駐香港特區維護國家安全公署", "外國安全代表處", "國際刑事法庭分庭", "區議會安全辦"], 0, "第48條訂明中央人民政府在香港設立維護國家安全公署。"],
  ["nsl020", "香港國安法：駐港國安公署", "hard", "第55條", "特定情形下哪一機構可對國安犯罪案件行使管轄權？", ["駐香港特區維護國家安全公署", "消費者委員會", "審計署", "平等機會委員會"], 0, "第55條訂明特定情形下駐港國安公署可對案件行使管轄權。"]
];

function makeQuestion(seed, variant) {
  const [baseId, category, difficulty, ref, q, options, answer, explain] = seed;
  const isScenario = variant === 1;
  return {
    id: `${baseId}-${variant + 1}`,
    category,
    difficulty: isScenario && difficulty !== "hard" ? "hard" : difficulty,
    ref,
    q: isScenario ? `情境題：督察級考生需要判斷「${ref}」的重點。下列哪一項最正確？` : q,
    options,
    answer,
    explain: isScenario ? `${explain} 這類題目重點是把條文套用到職權、程序或情境判斷。` : explain
  };
}

const questions = [...basicLawCore, ...nslCore].flatMap((seed) => [makeQuestion(seed, 0), makeQuestion(seed, 1)]);

const todayKey = new Date().toLocaleDateString("en-CA");
const state = {
  category: "今日題包",
  current: 0,
  answered: JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
};

const els = {
  answeredCount: document.querySelector("#answeredCount"),
  accuracyText: document.querySelector("#accuracyText"),
  resetProgress: document.querySelector("#resetProgress"),
  categorySelect: document.querySelector("#categorySelect"),
  practiceCategory: document.querySelector("#practiceCategory"),
  practiceProgress: document.querySelector("#practiceProgress"),
  practiceQuestion: document.querySelector("#practiceQuestion"),
  practiceOptions: document.querySelector("#practiceOptions"),
  practiceFeedback: document.querySelector("#practiceFeedback"),
  prevQuestion: document.querySelector("#prevQuestion"),
  nextQuestion: document.querySelector("#nextQuestion"),
  shufflePractice: document.querySelector("#shufflePractice")
};

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed || 1;
  return () => {
    value = Math.imul(1664525, value) + 1013904223;
    return ((value >>> 0) / 4294967296);
  };
}

function shuffle(items, seed = Date.now()) {
  const random = seededRandom(seed);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function interleaveDaily(items, seed) {
  return shuffle(items, seed).sort((a, b) => hashString(`${todayKey}-${a.id}`) - hashString(`${todayKey}-${b.id}`));
}

function getDailyQuestions() {
  const seed = hashString(todayKey);
  const basicLaw = questions.filter((item) => item.id.startsWith("bl"));
  const nsl = questions.filter((item) => item.id.startsWith("nsl"));
  return interleaveDaily([...shuffle(basicLaw, seed).slice(0, 28), ...shuffle(nsl, seed + 7).slice(0, 12)], seed).slice(0, DAILY_QUESTION_COUNT);
}

const dailyQuestions = getDailyQuestions();

function difficultyLabel(difficulty) {
  return { easy: "基礎", medium: "中等", hard: "較難" }[difficulty] || difficulty;
}

function filteredQuestions() {
  if (state.category === "今日題包") return dailyQuestions;
  if (state.category === "全部") return questions;
  return questions.filter((item) => item.category === state.category || item.difficulty === state.category);
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.answered));
}

function updateStats() {
  const records = Object.values(state.answered);
  const correct = records.filter((record) => typeof record === "boolean" ? record : record.correct).length;
  els.answeredCount.textContent = records.length;
  els.accuracyText.textContent = `準確率 ${records.length ? Math.round((correct / records.length) * 100) : 0}%`;
}

function renderPractice() {
  const list = filteredQuestions();
  if (state.current >= list.length) state.current = 0;
  const item = list[state.current];
  const record = state.answered[item.id];
  const answered = typeof record === "boolean" ? record : record?.correct;
  const picked = typeof record === "boolean" ? undefined : record?.pick;

  els.practiceCategory.innerHTML = `${item.category} · ${item.ref} <span class="difficulty ${item.difficulty}">${difficultyLabel(item.difficulty)}</span>`;
  els.practiceProgress.textContent = `${state.current + 1} / ${list.length}`;
  els.practiceQuestion.textContent = item.q;
  els.practiceOptions.innerHTML = "";
  els.practiceFeedback.textContent = "選一個答案，系統會即時解釋。";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    if (answered !== undefined) {
      button.disabled = true;
      if (index === item.answer) button.classList.add("correct");
      if (answered === false && index === picked) button.classList.add("wrong");
    }
    button.addEventListener("click", () => choosePractice(item, index));
    els.practiceOptions.appendChild(button);
  });

  if (answered !== undefined) els.practiceFeedback.innerHTML = `<strong>${answered ? "答對。" : "答錯。"}</strong> ${item.explain}`;
  els.prevQuestion.disabled = state.current === 0;
  els.nextQuestion.disabled = state.current === list.length - 1;
}

function choosePractice(item, index) {
  const ok = index === item.answer;
  state.answered[item.id] = { correct: ok, pick: index };
  saveProgress();
  updateStats();
  renderPractice();
}

function renderCategories() {
  const categories = ["今日題包", "全部", "easy", "medium", "hard", ...new Set(questions.map((item) => item.category))];
  els.categorySelect.innerHTML = categories.map((category) => `<option value="${category}">${difficultyLabel(category)}</option>`).join("");
  els.categorySelect.value = state.category;
}

function resetProgress() {
  state.answered = {};
  localStorage.removeItem(STORAGE_KEY);
  updateStats();
  renderPractice();
}

els.categorySelect.addEventListener("change", (event) => {
  state.category = event.target.value;
  state.current = 0;
  renderPractice();
});

els.prevQuestion.addEventListener("click", () => { state.current -= 1; renderPractice(); });
els.nextQuestion.addEventListener("click", () => { state.current += 1; renderPractice(); });
els.shufflePractice.addEventListener("click", () => {
  state.current = Math.floor(Math.random() * filteredQuestions().length);
  renderPractice();
});
els.resetProgress.addEventListener("click", resetProgress);

renderCategories();
renderPractice();
updateStats();
