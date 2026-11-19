import { FIREBASE_CONFIG, EMAIL_DIIZINKAN } from "./config.js";
const V = "10.12.2", BASE = "https://www.gstatic.com/firebasejs/" + V + "/";
const root = document.documentElement;
const hal = location.pathname.split("/").pop() || "index.html";
const diLogin = hal === "login.html";
const belumIsi = !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey.indexOf("ISI") === 0;
const boleh = function (e) { return !EMAIL_DIIZINKAN.length || EMAIL_DIIZINKAN.some(function (x) { return x.toLowerCase() === (e || "").toLowerCase(); }); };
function pesan(t) { var m = document.getElementById("pesan"); if (m) m.textContent = t; }
function siap() { root.classList.add("siap"); }
const ERR = {
  "auth/popup-closed-by-user": "Jendela login ditutup sebelum selesai.",
  "auth/popup-blocked": "Popup diblokir browser. Izinkan popup lalu coba lagi.",
  "auth/unauthorized-domain": "Domain ini belum didaftarkan di Firebase (Authentication > Settings > Authorized domains).",
  "auth/operation-not-allowed": "Login Google belum diaktifkan di Firebase."
};
async function jalan() {
  if (belumIsi) {
    if (diLogin) { pesan("Isi config.js dengan konfigurasi Firebase dulu (lihat README)."); }
    siap(); return;
  }
  const app = await import(BASE + "firebase-app.js");
  const A = await import(BASE + "firebase-auth.js");
  const auth = A.getAuth(app.initializeApp(FIREBASE_CONFIG));
  if (diLogin) {
    if (new URLSearchParams(location.search).get("x")) pesan("Akun itu tidak diizinkan masuk.");
    document.getElementById("masuk").onclick = async function () {
      pesan("");
      try { await A.signInWithPopup(auth, new A.GoogleAuthProvider()); }
      catch (e) { pesan(ERR[e.code] || ("Gagal masuk: " + e.code)); }
    };
  }
  A.onAuthStateChanged(auth, async function (u) {
    if (u && !boleh(u.email)) { await A.signOut(auth); location.replace("login.html?x=1"); return; }
    if (diLogin) { if (u) location.replace("index.html"); else siap(); return; }
    if (!u) { location.replace("login.html"); return; }
    var d = document.querySelector("nav div");
    if (d && !d.querySelector(".out")) {
      var b = document.createElement("button");
      b.className = "out"; b.textContent = "Keluar"; b.title = u.email || "";
      b.onclick = async function () { await A.signOut(auth); location.replace("login.html"); };
      d.appendChild(b);
    }
    siap();
  });
}
jalan().catch(function (e) { var g = document.getElementById("gate"); if (g) g.textContent = "Login gagal dimuat: " + (e && e.message ? e.message : e); });
