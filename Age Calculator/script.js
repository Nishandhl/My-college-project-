function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dob) {
        result.innerHTML = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        result.innerHTML = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        <h2>Your Age</h2>
        <p><strong>${years}</strong> Years</p>
        <p><strong>${months}</strong> Months</p>
        <p><strong>${days}</strong> Days</p>
    `;
}