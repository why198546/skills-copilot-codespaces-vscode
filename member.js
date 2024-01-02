function skillsmember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    if (member.style.display === "none") {
        member.style.display = "block";
        skills.style.display = "none";
    } else {
        member.style.display = "none";
        skills.style.display = "block";
        skills.style.marginTop = "5%";
        skillsmember
    }
}