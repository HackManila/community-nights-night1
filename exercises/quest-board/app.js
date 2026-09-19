/* Browser UI. Keep rules in game.js so they can be checked without clicking. */
(function () {
  "use strict";
  const game = window.QuestBoard;
  let state = game.createState();
  const byId = function (id) { return document.getElementById(id); };
  const list = byId("quest-list");

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function render() {
    const stats = game.summary(state);
    byId("xp").textContent = String(stats.xp);
    byId("completed").textContent = String(stats.completed);
    byId("pinned").textContent = String(stats.pinned);
    const quests = game.visibleQuests(state, { query: byId("search").value, category: byId("category").value, status: byId("status").value });
    byId("result-count").textContent = quests.length + (quests.length === 1 ? " quest" : " quests");
    byId("empty").hidden = quests.length !== 0;
    list.replaceChildren();
    quests.forEach(function (quest) {
      const card = element("article", "quest" + (quest.completed ? " done" : ""));
      card.dataset.questId = quest.id;
      const top = element("div", "quest-top");
      top.append(element("span", "category", quest.category), element("span", "reward", "+" + quest.xp + " XP"));
      const title = element("h2", "", quest.title);
      const description = element("p", "quest-description", quest.description);
      const actions = element("div", "quest-actions");
      const complete = element("button", "button", quest.completed ? "Completed" : "Complete quest");
      complete.type = "button";
      complete.dataset.action = "complete";
      complete.dataset.id = quest.id;
      complete.disabled = quest.completed;
      complete.setAttribute("aria-label", (quest.completed ? "Completed: " : "Complete: ") + quest.title);
      const pin = element("button", "pin", quest.pinned ? "Pinned" : "Pin quest");
      pin.type = "button";
      pin.dataset.action = "pin";
      pin.dataset.id = quest.id;
      pin.setAttribute("aria-pressed", String(quest.pinned));
      pin.setAttribute("aria-label", (quest.pinned ? "Unpin: " : "Pin: ") + quest.title);
      actions.append(complete, pin);
      card.append(top, title, description, actions);
      list.append(card);
    });
  }

  list.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");
    if (!button || !list.contains(button) || button.disabled) return;
    const id = button.dataset.id;
    const action = button.dataset.action;
    try {
      const result = action === "complete" ? game.completeQuest(state, id) : game.togglePin(state, id);
      state = result.state;
      render();
      byId("notice").textContent = result.message;
      // Re-rendering replaces the clicked node. Restore a useful keyboard focus.
      const card = Array.from(list.children).find(function (item) { return item.dataset.questId === id; });
      if (card) {
        const target = card.querySelector('button[data-action="' + action + '"]:not(:disabled)') || card.querySelector("button:not(:disabled)");
        if (target) target.focus();
      } else byId("status").focus();
    } catch (error) {
      console.error(error);
      byId("notice").textContent = "The action failed. Check the browser console, reproduce the problem, and inspect the change.";
    }
  });
  byId("filters").addEventListener("submit", function (event) { event.preventDefault(); });
  byId("search").addEventListener("input", render);
  byId("category").addEventListener("change", render);
  byId("status").addEventListener("change", render);
  byId("reset").addEventListener("click", function () {
    if (!window.confirm("Reset this local demo? Your in-memory XP, completion, pins, and filters will be cleared.")) return;
    state = game.createState();
    byId("filters").reset();
    render();
    byId("notice").textContent = "Demo reset. Your source code has not changed.";
  });
  render();
})();
