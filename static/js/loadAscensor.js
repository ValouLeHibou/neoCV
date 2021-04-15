// ascensorInstance.prev();                            // Go to previous floor
// ascensorInstance.next();                            // Go to next floor
// ascensorInstance.scrollToFloor(4);                  // Go to floor Index
// ascensorInstance.scrollToFloor('content2');         // Go to floor Name

let ascensor = $("#ascensor").ascensor({
    childType: "section",
    ascensorFloorName: [
        "Home", "About",
        "Formations", "Form-ECV", "Form-EEMI", "Form-EPITECH", "Form-BAC",
        "EXP", "EXP-BForBank", "EXP-MindMatcher", "EXP-microDON", "EXP-Aragon", "EXP-Pc",
        "Competences", "Comp-HardSkills", "Comp-SoftSkills",
        "Langue", "ENG",
        "Hobbie", "Hobbie-List",
        "Contact"
    ],
    time: 500,
    windowsOn: 0,
    direction: [
        [0, 0], // HOME
        [1, 0], // ABOUT
        [0, 1], // FORMATION
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [0, 2], // EXP
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
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
