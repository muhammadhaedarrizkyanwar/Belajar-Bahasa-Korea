// ===== ISI PELAJARAN: edit/tambah di sini =====
// baris: [Korea, romanisasi, arti, (teks untuk suara, opsional)]
const LEVEL = ["Level 0 · Hangul", "Level 1 · Dasar", "Level 2 · Menengah"];
const PELAJARAN = [
{id:"vokal",lv:0,judul:"1. Vokal dasar",tipe:"Bunyi",ringkas:"Hangul punya 10 vokal dasar. Hafalkan ini dulu.",
 catatan:["Dibaca kiri ke kanan dan atas ke bawah; satu blok = satu suku kata.","ㅇ di awal suku kata tidak berbunyi, jadi 아 dibaca \"a\"."],
 baris:[["ㅏ","a","a","아"],["ㅑ","ya","ya","야"],["ㅓ","eo","eo (antara o dan e pepet)","어"],["ㅕ","yeo","yeo","여"],["ㅗ","o","o","오"],["ㅛ","yo","yo","요"],["ㅜ","u","u","우"],["ㅠ","yu","yu","유"],["ㅡ","eu","eu (e pepet, bibir datar)","으"],["ㅣ","i","i","이"]]},
{id:"konsonan",lv:0,judul:"2. Konsonan",tipe:"Bunyi",ringkas:"14 konsonan dasar dan 5 konsonan ganda (tegang).",
 catatan:["Konsonan ditiup (ㅊ ㅋ ㅌ ㅍ) diucapkan dengan hembusan napas.","Konsonan ganda (ㄲ ㄸ ㅃ ㅆ ㅉ) diucapkan tegang, tanpa hembusan."],
 baris:[["ㄱ","g/k","g / k","가"],["ㄴ","n","n","나"],["ㄷ","d/t","d / t","다"],["ㄹ","r/l","r / l","라"],["ㅁ","m","m","마"],["ㅂ","b/p","b / p","바"],["ㅅ","s","s","사"],["ㅇ","-/ng","diam di awal, ng di akhir","아"],["ㅈ","j","j","자"],["ㅊ","ch","ch (ditiup)","차"],["ㅋ","k","k (ditiup)","카"],["ㅌ","t","t (ditiup)","타"],["ㅍ","p","p (ditiup)","파"],["ㅎ","h","h","하"],["ㄲ","kk","kk (tegang)","까"],["ㄸ","tt","tt (tegang)","따"],["ㅃ","pp","pp (tegang)","빠"],["ㅆ","ss","ss (tegang)","싸"],["ㅉ","jj","jj (tegang)","짜"]]},
{id:"vokal2",lv:0,judul:"3. Vokal gabungan",tipe:"Bunyi",ringkas:"Vokal lanjutan hasil gabungan vokal dasar.",
 catatan:["ㅐ dan ㅔ di ucapan sehari-hari hampir sama bunyinya.","ㅢ dibaca \"ui\"."],
 baris:[["ㅐ","ae","ae","애"],["ㅒ","yae","yae","얘"],["ㅔ","e","e","에"],["ㅖ","ye","ye","예"],["ㅘ","wa","wa","와"],["ㅙ","wae","wae","왜"],["ㅚ","oe","oe","외"],["ㅝ","wo","wo","워"],["ㅞ","we","we","웨"],["ㅟ","wi","wi","위"],["ㅢ","ui","ui","의"]]},
{id:"batchim",lv:0,judul:"4. Batchim & kata pertama",tipe:"Arti",ringkas:"Konsonan di bawah blok (batchim) dan kata-kata pertamamu.",
 catatan:["Batchim hanya punya 7 bunyi akhir: k, n, t, l, m, p, ng.","ㄱ ㅋ ㄲ → k; ㅅ ㅈ ㅊ ㅌ ㅆ ㅎ → t; ㅍ → p."],
 baris:[["문","mun","pintu"],["책","chaek","buku"],["밥","bap","nasi"],["물","mul","air"],["밤","bam","malam"],["꽃","kkot","bunga"],["강","gang","sungai"],["한국","hanguk","Korea"]]},
{id:"salam",lv:1,judul:"5. Salam & perkenalan",tipe:"Arti",ringkas:"Kalimat pertama yang paling sering dipakai.",
 catatan:["Akhiran -요 dan -ㅂ니다 membuat bahasa jadi sopan.","Gunakan 가세요 untuk orang yang pergi, 계세요 untuk orang yang tinggal."],
 baris:[["안녕하세요","annyeonghaseyo","Halo / selamat (sopan)"],["안녕히 가세요","annyeonghi gaseyo","Selamat jalan (untuk yang pergi)"],["안녕히 계세요","annyeonghi gyeseyo","Selamat tinggal (untuk yang tinggal)"],["감사합니다","gamsahamnida","Terima kasih"],["죄송합니다","joesonghamnida","Mohon maaf"],["네","ne","Ya"],["아니요","aniyo","Tidak"],["처음 뵙겠습니다","cheoeum boepgesseumnida","Senang bertemu (pertama kali)"],["저는 민수입니다","jeoneun minsuimnida","Saya Minsu"],["잘 부탁드립니다","jal butakdeurimnida","Mohon bantuannya / salam kenal"]]},
{id:"asli",lv:1,judul:"6. Angka asli Korea",tipe:"Arti",ringkas:"Dipakai untuk jumlah benda, usia, dan jam.",
 catatan:["Contoh: 두 명 (2 orang), 세 시 (jam 3)."],
 baris:[["하나","hana","1"],["둘","dul","2"],["셋","set","3"],["넷","net","4"],["다섯","daseot","5"],["여섯","yeoseot","6"],["일곱","ilgop","7"],["여덟","yeodeol","8"],["아홉","ahop","9"],["열","yeol","10"]]},
{id:"sino",lv:1,judul:"7. Angka Sino-Korea",tipe:"Arti",ringkas:"Dipakai untuk tanggal, uang, nomor telepon, dan menit.",
 catatan:["Contoh: 이천 원 (2.000 won), 오 월 (bulan Mei)."],
 baris:[["일","il","1"],["이","i","2"],["삼","sam","3"],["사","sa","4"],["오","o","5"],["육","yuk","6"],["칠","chil","7"],["팔","pal","8"],["구","gu","9"],["십","sip","10"]]},
{id:"kosakata",lv:1,judul:"8. Kosakata sehari-hari",tipe:"Arti",ringkas:"Kata benda yang sering muncul.",
 catatan:["Belajar kata bersama contoh kalimat lebih cepat nempel."],
 baris:[["물","mul","air"],["밥","bap","nasi / makanan"],["학교","hakgyo","sekolah"],["친구","chingu","teman"],["집","jip","rumah"],["사람","saram","orang"],["책","chaek","buku"],["시간","sigan","waktu"],["돈","don","uang"],["커피","keopi","kopi"],["한국","hanguk","Korea"],["인도네시아","indonesia","Indonesia"]]},
{id:"pola",lv:1,judul:"9. Partikel & pola kalimat",tipe:"Arti",ringkas:"Urutan kalimat Korea: Subjek – Objek – Kata kerja.",
 catatan:["Kata kerja selalu di akhir kalimat.","은 dipakai setelah huruf berakhir konsonan, 는 setelah vokal. Begitu juga 이/가 dan 을/를."],
 baris:[["은/는","eun/neun","Penanda topik"],["이/가","i/ga","Penanda subjek"],["을/를","eul/reul","Penanda objek"],["에","e","ke / pada (tujuan, waktu)"],["에서","eseo","di (tempat kegiatan)"],["저는 학생입니다","jeoneun haksaengimnida","Saya pelajar"],["이것은 책입니다","igeoseun chaegimnida","Ini adalah buku"],["저는 밥을 먹어요","jeoneun babeul meogeoyo","Saya makan nasi"],["학교에 가요","hakgyoe gayo","Pergi ke sekolah"],["집에서 공부해요","jibeseo gongbuhaeyo","Belajar di rumah"]]},
{id:"kerja",lv:2,judul:"10. Kata kerja bentuk sopan",tipe:"Arti",ringkas:"Mengubah kata kerja dasar jadi bentuk -요.",
 catatan:["Bentuk kamus berakhir -다 (가다, 먹다). Buang -다, tambah 아요 jika vokal terakhir ㅏ/ㅗ, selain itu 어요.","하다 menjadi 해요. Beberapa kata kerja tidak beraturan, misalnya 듣다 menjadi 들어요."],
 baris:[["가요","gayo","pergi"],["와요","wayo","datang"],["먹어요","meogeoyo","makan"],["마셔요","masyeoyo","minum"],["봐요","bwayo","melihat / menonton"],["해요","haeyo","melakukan"],["공부해요","gongbuhaeyo","belajar"],["자요","jayo","tidur"],["읽어요","ilgeoyo","membaca"],["들어요","deureoyo","mendengar"]]},
{id:"tanya",lv:2,judul:"11. Bertanya & berbelanja",tipe:"Arti",ringkas:"Kalimat praktis untuk bertahan di Korea.",
 catatan:["주세요 artinya \"tolong beri\", sangat berguna saat memesan atau membeli."],
 baris:[["이거 주세요","igeo juseyo","Tolong beri saya ini"],["얼마예요?","eolmayeyo","Berapa harganya?"],["어디예요?","eodiyeyo","Di mana?"],["이게 뭐예요?","ige mwoyeyo","Ini apa?"],["화장실이 어디예요?","hwajangsiri eodiyeyo","Toilet di mana?"],["맛있어요","masisseoyo","Enak"],["좋아요","joayo","Bagus / suka / oke"],["모르겠어요","moreugesseoyo","Saya tidak tahu / tidak mengerti"],["천천히 말해 주세요","cheoncheonhi malhae juseyo","Tolong bicara pelan-pelan"],["다시 한번 말해 주세요","dasi hanbeon malhae juseyo","Tolong ulangi sekali lagi"]]},
{id:"waktu",lv:2,judul:"12. Lampau, akan, dan negasi",tipe:"Arti",ringkas:"Mengatur waktu dan menyangkal dalam kalimat.",
 catatan:["Lampau: 았/었어요. Akan: (으)ㄹ 거예요.","안 + kata kerja = tidak. 못 + kata kerja = tidak bisa."],
 baris:[["갔어요","gasseoyo","pergi (lampau)"],["먹었어요","meogeosseoyo","makan (lampau)"],["했어요","haesseoyo","melakukan (lampau)"],["갈 거예요","gal geoyeyo","akan pergi"],["먹을 거예요","meogeul geoyeyo","akan makan"],["안 가요","an gayo","tidak pergi"],["못 가요","mot gayo","tidak bisa pergi"],["어제 학교에 갔어요","eoje hakgyoe gasseoyo","Kemarin saya pergi ke sekolah"],["내일 한국어를 공부할 거예요","naeil hangugeoreul gongbuhal geoyeyo","Besok saya akan belajar bahasa Korea"]]}
];

// ===== fungsi bantu =====
const KEY = "kk-selesai";
function baca(){ try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e){ return []; } }
function simpan(a){ try { localStorage.setItem(KEY, JSON.stringify(a)); } catch(e){} }
function bicara(t){ if(!("speechSynthesis" in window)) return; var u=new SpeechSynthesisUtterance(t); u.lang="ko-KR"; u.rate=.8; speechSynthesis.cancel(); speechSynthesis.speak(u); }
function el(t,c,x){ var e=document.createElement(t); if(c) e.className=c; if(x!==undefined) e.textContent=x; return e; }
function acak(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
