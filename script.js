const ACCESS_GRANTED_STORAGE = "accessGranted";

const getWeekNumber = (start, now) => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const diff = now - start;

    return Math.floor(diff / msInWeek) + 1;
};

const showWeekContent = () => {
    const now = new Date();
    const weekNumber = getWeekNumber(startDate, now);

    const contentDiv = document.getElementById("week-content");

    if (weekNumber <= 0) {
        contentDiv.innerHTML = "<h2>It did not started yet...</h2>";
    } else if (weekNumber > weeks.length) {
        contentDiv.innerHTML = "<h2> What could possibly be here? </h2>";
    } else {
        const weekData = weeks[weekNumber - 1];
        contentDiv.innerHTML = `
            <h1>${weekData.title}</h1>
            ${weekData.html}
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginScreen = document.getElementById("login-screen");
    const weekContent = document.getElementById("week-content");
    const loginButton = document.getElementById("login-button");
    const passwordInput = document.getElementById("password-input");
    const loginError = document.getElementById("login-error");

    const grantAccess = () => {
        loginScreen.style.display = "none";
        weekContent.style.display = "block";
        showWeekContent();
    };

    if (sessionStorage.getItem(ACCESS_GRANTED_STORAGE)) grantAccess();

    loginButton.addEventListener("click", () => {
        const password = passwordInput.value.trim();

        if (password === "93, 93/93") {
            sessionStorage.setItem(ACCESS_GRANTED_STORAGE, true);
            grantAccess();
            return;
        }

        loginError.style.display = "block";
    });

    passwordInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") loginButton.click();
    });
});
