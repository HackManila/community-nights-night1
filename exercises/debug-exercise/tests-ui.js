(function () {
  "use strict";
  function run(suite) {
    const names=suite==="all" ? ["baseline","acceptance"] : [suite];
    const output=document.getElementById("check-results");
    output.replaceChildren();
    let passed=0, total=0;
    names.forEach(function (name) {
      window.runQuestChecks(window.QuestBoard,name).forEach(function (result) {
        total+=1; if (result.passed) passed+=1;
        const li=document.createElement("li");
        li.className=result.passed ? "pass" : "fail";
        const label=document.createElement("strong"); label.textContent=result.passed ? "PASS" : "FAIL";
        li.append(label,document.createTextNode(name+": "+result.name));
        if (result.error) { const detail=document.createElement("small"); detail.textContent=result.error; li.append(detail); }
        output.append(li);
      });
    });
    document.getElementById("check-summary").textContent=passed+" / "+total+" checks passed — "+suite+" suite";
  }
  document.querySelectorAll("button[data-suite]").forEach(function (button) { button.addEventListener("click",function () { run(button.dataset.suite); }); });
  run("baseline");
})();
