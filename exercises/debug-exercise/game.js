/* Pure game state. No browser, network, storage, or package dependencies. */
(function (root) {
  "use strict";

  /** @typedef {{id:string,title:string,description:string,category:string,xp:number,completed:boolean,pinned:boolean}} Quest */
  /** @typedef {{xp:number,quests:Quest[]}} State */
  /** @typedef {{state:State,ok:boolean,message:string}} ActionResult */

  const SEED = [
    { id: "beacon", title: "Restore the beacon", description: "Bring the riverside signal tower back online before the night shift.", category: "exploration", xp: 30 },
    { id: "bridge", title: "Repair the footbridge", description: "Use salvaged materials to reconnect the two sides of the district.", category: "crafting", xp: 50 },
    { id: "shortcut", title: "Map a new shortcut", description: "Find a quieter route through the old market and chart the way.", category: "exploration", xp: 20 },
    { id: "signal", title: "Decode the signal", description: "Work out the pattern in the observatory’s repeating transmission.", category: "puzzle", xp: 40 },
    { id: "supplies", title: "Prepare the supplies", description: "Assemble a field kit for the team heading beyond the floodwall.", category: "crafting", xp: 25 },
    { id: "observatory", title: "Unlock the observatory", description: "Solve the last mechanism and open the district’s highest lookout.", category: "puzzle", xp: 60 }
  ];

  /** @returns {State} A fresh, independent state for a new local session. */
  function createState() {
    return { xp: 0, quests: SEED.map(function (quest) { return { ...quest, completed: false, pinned: false }; }) };
  }

  /** @param {State} state @param {{query?:string,category?:string,status?:string}} filters @returns {Quest[]} */
  function visibleQuests(state, filters) {
    const options = filters || {};
    const query = String(options.query || "").trim().toLowerCase();
    return state.quests.filter(function (quest) {
      const text = (quest.title + " " + quest.description).toLowerCase();
      const categoryMatches = !options.category || options.category === "all" || quest.category === options.category;
      const statusMatches = !options.status || options.status === "all" ||
        (options.status === "completed" && quest.completed) || (options.status === "available" && !quest.completed);
      return text.includes(query) && categoryMatches && statusMatches;
    }).sort(function (a, b) { return Number(b.pinned) - Number(a.pinned); });
  }

  /** @param {State} state @param {string} id @returns {ActionResult} */
  function togglePin(state, id) {
    const quest = state.quests.find(function (item) { return item.id === id; });
    if (!quest) return { state: state, ok: false, message: "Quest not found." };
    return {
      state: { ...state, quests: state.quests.map(function (item) { return item.id === id ? { ...item, pinned: !item.pinned } : item; }) },
      ok: true,
      message: quest.pinned ? "Quest unpinned." : "Quest pinned."
    };
  }

  /**
   * WORKSHOP FEATURE: implement completion after writing and reviewing your brief.
   * Keep the return shape used by togglePin. Do not mutate the input state.
   * See WORKSHOP.md and the acceptance checks for the observable requirements.
   * @param {State} state @param {string} id @returns {ActionResult}
   */
  function completeQuest(state, id) {
    const quest = state.quests.find(function (item) { return item.id === id; });
    if (!quest) return { state: state, ok: false, message: "Quest not found." };
    return {
      state: { ...state, xp: state.xp + quest.xp,
        quests: state.quests.map(function (item) { return item.id === id ? { ...item, completed: true } : item; }) },
      ok: true,
      message: quest.title + " completed. +" + quest.xp + " XP."
    };
  }

  /** @param {State} state */
  function summary(state) {
    return { xp: state.xp, completed: state.quests.filter(function (q) { return q.completed; }).length,
      pinned: state.quests.filter(function (q) { return q.pinned; }).length };
  }

  const api = { createState: createState, visibleQuests: visibleQuests, togglePin: togglePin, completeQuest: completeQuest, summary: summary };
  root.QuestBoard = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
