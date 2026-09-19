/* The same checks run in tests.html or with `node check.cjs`. No packages. */
(function (root) {
  "use strict";
  function assert(condition, message) { if (!condition) throw new Error(message); }
  function same(actual, expected, message) { assert(JSON.stringify(actual) === JSON.stringify(expected), message); }
  function check(name, run) { return { name: name, run: run }; }

  function definitions(game) {
    return {
      baseline: [
        check("A new session has six unique quests and zero XP", function () { const s = game.createState(); assert(s.xp === 0 && s.quests.length === 6, "Wrong initial state"); assert(new Set(s.quests.map(q => q.id)).size === 6, "IDs must be unique"); }),
        check("Fresh sessions do not share mutable quest objects", function () { const a = game.createState(); a.quests[0].pinned = true; assert(!game.createState().quests[0].pinned, "A previous session changed the seed data"); }),
        check("Search ignores case and surrounding whitespace", function () { const q = game.visibleQuests(game.createState(), {query:"  BEACON  "}); assert(q.length === 1 && q[0].id === "beacon", "Expected one beacon quest"); }),
        check("Category filtering combines with search", function () { const s = game.createState(); assert(game.visibleQuests(s,{category:"puzzle"}).length === 2,"Expected two puzzles"); assert(game.visibleQuests(s,{category:"puzzle",query:"beacon"}).length === 0,"Filters should combine"); }),
        check("A new session has no completed quests", function () { assert(game.visibleQuests(game.createState(),{status:"completed"}).length === 0,"New quests should not be completed"); }),
        check("Pinning moves the quest to the top", function () { const s = game.togglePin(game.createState(),"signal").state; assert(game.visibleQuests(s,{})[0].id === "signal", "Pinned quest should be first"); }),
        check("Pinning twice unpins without awarding XP", function () { let s = game.togglePin(game.createState(),"signal").state; s=game.togglePin(s,"signal").state; assert(!s.quests.find(q=>q.id==="signal").pinned && s.xp===0,"Pin action changed the wrong state"); }),
        check("Pinning preserves the input state", function () { const s=game.createState(); const before=JSON.stringify(s); game.togglePin(s,"beacon"); assert(JSON.stringify(s)===before,"Pin mutated input state"); }),
        check("Pinning an unknown ID is a harmless rejected action", function () { const s=game.createState(); const r=game.togglePin(s,"unknown"); assert(r.ok===false,"Unknown pin should not succeed"); same(r.state,s,"Unknown pin changed state"); }),
        check("Filtering does not reorder the stored quest array", function () { const s=game.togglePin(game.createState(),"signal").state; const before=JSON.stringify(s); game.visibleQuests(s,{}); assert(JSON.stringify(s)===before,"Filtering mutated stored state"); })
      ],
      acceptance: [
        check("Completing an available quest succeeds and marks it completed", function () { const r=game.completeQuest(game.createState(),"beacon"); assert(r.ok===true && r.state.quests.find(q=>q.id==="beacon").completed,"The beacon quest should be completed successfully"); }),
        check("Completion awards exactly the quest’s stated XP", function () { const r=game.completeQuest(game.createState(),"beacon"); assert(r.state.xp===30,"Expected 30 XP after completing the beacon"); }),
        check("Repeating completion cannot award XP twice", function () { const first=game.completeQuest(game.createState(),"beacon"); assert(first.state.xp===30,"First completion must award 30 XP before checking duplicates"); const second=game.completeQuest(first.state,"beacon"); assert(second.state.xp===30 && second.ok===false,"Repeated completion must be rejected without another reward"); same(second.state,first.state,"Repeated action changed state"); }),
        check("Different quests each award their own XP", function () { let s=game.completeQuest(game.createState(),"beacon").state; s=game.completeQuest(s,"bridge").state; assert(s.xp===80 && game.summary(s).completed===2,"Expected two completed quests and 80 XP"); }),
        check("Completing an unknown ID is a harmless rejected action", function () { const s=game.createState(); const r=game.completeQuest(s,"unknown"); assert(r.ok===false,"Unknown quest must not succeed"); same(r.state,s,"Unknown quest changed state"); }),
        check("Completion preserves prior state, other quests, and pin status", function () { const s=game.togglePin(game.createState(),"beacon").state; const before=JSON.stringify(s); const r=game.completeQuest(s,"beacon"); assert(r.ok && r.state.quests[0].pinned,"Completion must preserve the pin"); assert(JSON.stringify(s)===before,"Completion mutated its input state"); same(r.state.quests.slice(1),s.quests.slice(1),"Unrelated quests changed"); }),
        check("Status filters and progress reflect the completed quest", function () { const s=game.completeQuest(game.createState(),"beacon").state; assert(game.visibleQuests(s,{status:"completed"}).length===1,"Expected one completed quest"); assert(game.visibleQuests(s,{status:"available"}).length===5,"Expected five available quests"); assert(game.summary(s).completed===1,"Progress should report one completion"); }),
        check("Completing every quest twice awards each reward only once", function () { let s=game.createState(); const ids=s.quests.map(q=>q.id); const total=s.quests.reduce((sum,q)=>sum+q.xp,0); ids.forEach(id=>{s=game.completeQuest(s,id).state;}); ids.forEach(id=>{s=game.completeQuest(s,id).state;}); assert(s.xp===total && game.summary(s).completed===6,"Expected exactly 225 XP and six completed quests"); })
      ]
    };
  }

  function runChecks(game, suite) {
    const groups=definitions(game);
    if (!Object.prototype.hasOwnProperty.call(groups,suite)) throw new Error("Unknown suite: "+suite);
    return groups[suite].map(function (test) {
      try { test.run(); return { name:test.name, passed:true }; }
      catch (error) { return { name:test.name, passed:false, error:error.message }; }
    });
  }
  root.runQuestChecks=runChecks;
  if (typeof module!=="undefined" && module.exports) module.exports=runChecks;
})(typeof globalThis!=="undefined" ? globalThis : this);
