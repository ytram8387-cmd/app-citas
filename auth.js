import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFfpYas6CvMRrzOElhM0JNYsVfDqWYM6A",
  authDomain: "app-citas-f58aa.firebaseapp.com",
  projectId: "app-citas-f58aa",
  storageBucket: "app-citas-f58aa.firebasestorage.app",
  messagingSenderId: "980723496232",
  appId: "1:980723496232:web:c729885dd8ee4b5dae4c1d"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔥 REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Completa los campos");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "index.html"; // login
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// 🔥 LOGIN
window.login = async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Completa los campos");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "citas.html"; // 🔥 CORREGIDO
  } catch (error) {
    alert("Error: " + error.message);
  }
};