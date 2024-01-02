function skillsMember()
{
    var skill = document.getElementById("skill").value;
    var skillList = document.getElementById("skillList");
    var skillListHTML = skillList.innerHTML;
    skillListHTML += "<li>" + skill + "</li>";
    skillList.innerHTML = skillListHTML;
}