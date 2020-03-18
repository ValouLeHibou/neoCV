let ascensor = $("#ascensor").ascensor({
    childType: "section",
    ascensorFloorName: [
        "Home",
        "Formations", "Form-ECV", "Form-EEMI", "Form-EPITECH",
        "EXP", "EXP-BForBank", "EXP-MindMatcher", "EXP-microDON", "EXP-Aragon-eRH",
        "Competences", "Comp-DEV", "Comp-Design_Marketing",
        "Langue", "FR-ENG",
        "Hobby", "list",
        "Contact"
    ],
    time: 500,
    windowsOn: 0,
    direction: [
        [0, 0], // HOME
        [0, 1], // FORMATION
        [1, 1],
        [2, 1],
        [3, 1],
        [0, 2], // EXP
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [0, 3], // COMP
        [1, 3],
        [2, 3],
        [0, 4], // LANG
        [1, 4],
        [0, 5], // HOBBY
        [1, 5],
        [0, 6] // CONTACT
    ],
    keyNavigation: true,
    queued: "x",
    wheelNavigation: true,
    wheelNavigationDelay: 250
});

let ascensorInstance = ascensor.data('ascensor');   // Access instance
