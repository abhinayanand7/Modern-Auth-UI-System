// script.js

// PASSWORD TOGGLE
function togglePassword(inputId, icon){
    const input = document.getElementById(inputId);

    if(input.type === "password"){
        input.type = "text";
        icon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }else{
        input.type = "password";
        icon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
}

// REGISTER VALIDATION
const registerForm = document.getElementById("registerForm");

if(registerForm){
    registerForm.addEventListener("submit", function(e){
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validation checks
        if(!fullName || !email || !password || !confirmPassword){
            alert("⚠️ Please fill all fields!");
            return;
        }

        if(password.length < 6){
            alert("⚠️ Password must be at least 6 characters!");
            return;
        }

        if(password !== confirmPassword){
            alert("❌ Passwords do not match!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("⚠️ Please enter a valid email!");
            return;
        }

        setTimeout(() => {
            alert("✅ Registration Successful 🚀");
            window.location.href = "login.html";
        }, 1000);
    });
}

// LOGIN VALIDATION
const loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        if(!email || !password){
            alert("⚠️ Please fill all fields!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("⚠️ Please enter a valid email!");
            return;
        }

        if(password.length < 6){
            alert("⚠️ Password must be at least 6 characters!");
            return;
        }

        setTimeout(() => {
            alert("✅ Login Successful! Welcome Back 🚀");
            // Uncomment below to redirect to dashboard
            // window.location.href = "dashboard.html";
        }, 500);
    });
}