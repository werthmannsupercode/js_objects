// Lev1_2
console.log("%cLev1_2", 'color: orange');

let person = {
    ism: "Michaela Werthmann",
    alter: "35 Jahre",
    sagNameAlter: () => {
        alert(person.ism + ", " + person.alter);
        console.log(person.ism + ", " + person.alter);
    }
}

// person.sagNameAlter();
console.log(person.ism + ", " + person.alter)

//Lev1_4
console.log("%cLev1_4", 'color: orange');

let unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

console.log(Object.values(unsereHaustiere[0].names) + " " + Object.values(unsereHaustiere[1].names))

unsereHaustiere[1].names = ["Bello", "Rex", "Lotti"];
console.log(unsereHaustiere[1].names);

// Lev1_5
console.log("%cLev1_5", 'color: orange');

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// Lev1_6
console.log("%cLev1_6", 'color: orange');

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];


console.log('"' + myMusic[0].artist + '"');
console.log(`Von ${myMusic[1].artist}: "${myMusic[1].medium[3]}"`);
console.log(`Von ${myMusic[1].artist}: ${myMusic[1].gold}`);
console.log(`${myMusic[2].release_year} und ${myMusic[3].release_year}`);
console.log(`Von ${myMusic[3].artist}: "${myMusic[3].medium[2]}"`);
console.log(`Von ${myMusic[3].artist} das Wort: ${myMusic[3].title.slice(17, 21)}`);
console.log(`Von ${myMusic[2].artist} das Wort: ${myMusic[2].title.slice(13, 15)}`);
console.log(`Von ${myMusic[1].artist} das Wort: ${myMusic[1].artist.slice(5, 11)}`);

myMusic.push({
    artist: "Haindling",
    title: "Bayern",
    release_year: 1999, medium: ["CD", "Download"], gold: false
});

console.log(myMusic);

// Lev1_7
console.log("%cLev1_7", 'color: orange');

let lev1_7 = document.getElementById('lev1_7');
let i = 0;
let c = "";

myMusic.forEach((elt) => {
    console.log(elt.artist);

    lev1_7.innerHTML += elt.artist + "<br>" + elt.title + "<br>" + elt.medium + "<br><br>";
})

// Lev1_8
console.log("%cLev1_8", 'color: orange');

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach((elt) => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.address.city);
    console.log(elt.emails);
})

// Lev2_1
console.log("%cLev2_1", 'color: orange');

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let arrName = [];
let arrPreiseGramEuro = [];
let arrVeraenderung = [];

edelMetallPreise.forEach((elt) => {
    arrName.push(elt.name);
})

console.log(arrName);

edelMetallPreise.map((elt) => {
    console.log(elt.name);
})

edelMetallPreise.forEach((elt) => {
    arrPreiseGramEuro.push(elt.preiseGramEuro);
})

console.log(arrPreiseGramEuro);

edelMetallPreise.map((elt) => {
    console.log(elt.preiseGramEuro);
})

edelMetallPreise.forEach((elt) => {
    arrVeraenderung.push(elt.veraenderung);
})

console.log(arrVeraenderung);

edelMetallPreise.map((elt) => {
    console.log(elt.veraenderung);
})

let result = edelMetallPreise.filter(elt => elt.preiseGramEuro > 50);
console.log(result);

// Lev2_2
console.log("%cLev2_2", 'color: orange');

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

singers.sort(function (a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }

    if (nameA > nameB) {
        return 1;
    }

    return 0;
})

console.log(singers);


