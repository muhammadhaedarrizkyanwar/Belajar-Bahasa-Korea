// ===== EDIT DI SINI =====
// jalur: "PAS" | "SNBT" | "TKA". Isi url dengan tautan Drive, PDF, atau video.
const MATERI = [
  {jalur:"PAS",  judul:"Matematika: Fungsi Kuadrat",    ket:"Ringkasan + 10 soal", url:"#"},
  {jalur:"PAS",  judul:"Biologi: Sistem Pencernaan",    ket:"Ringkasan + kuis",    url:"#"},
  {jalur:"SNBT", judul:"Penalaran Umum: Pola Bilangan", ket:"Latihan 15 soal",     url:"#"},
  {jalur:"SNBT", judul:"Literasi Bahasa Indonesia",     ket:"Teks + pembahasan",   url:"#"},
  {jalur:"TKA",  judul:"Matematika Wajib",              ket:"Kisi-kisi + soal",    url:"#"},
  {jalur:"TKA",  judul:"Bahasa Inggris",                ket:"Latihan membaca",     url:"#"}
];
// jawab = nomor opsi yang benar, dimulai dari 0
const SOAL = [
  {jalur:"PAS", tanya:"Akar-akar dari x² − 5x + 6 = 0 adalah ...", opsi:["2 dan 3","1 dan 6","−2 dan −3","2 dan −3"], jawab:0, bahas:"Faktorkan: (x − 2)(x − 3) = 0, jadi x = 2 atau x = 3."},
  {jalur:"PAS", tanya:"Enzim yang memecah pati menjadi gula di mulut adalah ...", opsi:["Pepsin","Amilase","Lipase","Tripsin"], jawab:1, bahas:"Amilase di air liur memulai pencernaan karbohidrat."},
  {jalur:"SNBT", tanya:"Pola bilangan 2, 6, 18, 54, ... Angka berikutnya adalah ...", opsi:["108","162","148","216"], jawab:1, bahas:"Setiap angka dikali 3, jadi 54 × 3 = 162."},
  {jalur:"SNBT", tanya:"Semua siswa rajin lulus ujian. Budi tidak lulus ujian. Kesimpulannya ...", opsi:["Budi siswa rajin","Budi bukan siswa rajin","Budi pasti lulus nanti","Tidak dapat disimpulkan"], jawab:1, bahas:"Jika rajin maka lulus. Budi tidak lulus, maka Budi tidak rajin (kontraposisi)."},
  {jalur:"TKA", tanya:"Jika 3x + 5 = 20, maka x = ...", opsi:["3","5","15","25/3"], jawab:1, bahas:"3x = 15, jadi x = 5."},
  {jalur:"TKA", tanya:"She ___ to school every day.", opsi:["go","goes","going","gone"], jawab:1, bahas:"Subjek orang ketiga tunggal di simple present memakai verb + s: goes."}
];
