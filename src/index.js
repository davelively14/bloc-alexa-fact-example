"use strict";
var Alexa = require("alexa-sdk");
var APP_ID = "amzn1.ask.skill.108a9678-6d6c-436b-bde7-4595a973a7b6";

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
                "The M1A1 Abrams main battle tank weighs 68 tons and can travel at speeds in excess of fifty-five miles per hour.",
                "The Abrams has a one hundred and twenty millimeter smoothbore cannon.",
                "The M1A1 Abrams powertrain consists of a Honeywel multi-fuel gas turbine capable of fifteen-hundred shaft horsepower.",
                "The Bradley Fighting Vehicle is equipped with the m two four two, twenty-five millimeter chain gun as its main weapon.",
                "The m two Bradley Infantry Fighting Vehicle can accomidate up to six infrantrymen in addition to the crew.",
                "The m three Bradley Cavalry Fighting Vehicle was designed to accomidate two scouts and additional communications equipment, surveillance gear, and ammunition.",
                "The m four Sherman medium tank, was the most numerous battle tank used by the United States in world war two.",
                "By nineteen fourty-four, the m four was inferior to the increasing numbers of German heavy tanks, but was able to continue fighting with mutual support from numerical superiority and with support from growing numbers of fighter-bombers and artillery pieces.",
                "The m sixty Patton was a main battle tank introduced in December 1960, becoming the Army\'s primary tank during the cold war.",
                "The m one one three is a fully tracked armored personnel carrier was developed by Food Machinery Corporation and first fielded by Army mechanized infantry units in Vietnam in April nineteen sixty-two.",
                "The m one one three introduced new aluminum armor that made the vehicle much lighter than earlier vehicles. It was thick enough to protect the crew and passengers against small arms fire, but light enough that the vehicle was air transportable and moderately amphibious.",
                "The M one nine one seven was America\'s first mass-produced tank, entering production shortly before the end of World War one and a near copy of the French Renault FT. However, u s manufacturers failed to produce any in time to participate in world war i.",
                "The Interim Armored Vehicle Striker is a family of eight-wheeled, armored fighting vehicles.",
                "The Stryker one hundred and five millimeter Mobile Gun System entered full production in two thousand seven.",
                "The first use of armored tanks on the battlefield was during the Battle of the Somme on fifteen September nineteen sixteen, with mixed, but still impressive results.",
                "The British Mark one was the world's first combat tank, entering service in August nineteen sixteen, and first used in action on the morning of fifteen September nineteen sixteen.",
                "Beginning about nineteen forty-two, most British tank units in world war two were equipped with vehicles supplied from the United States, such as the Stuart light tank or its replacement the Sherman.",
                "The Soviet B T tanks were a series of cavalry tanks produced in large numbers between nineteen thirty-two and nineteen forty-one. They were lightly armored, but reasonably well-armed for their time, and had the best mobility of all contemporary tanks of the world.",
                "The T thrity-four was a medium tank produced from nineteen forty to nineteen fifty-eight. Although its armor and armament were surpassed by later tanks of the era, it has been often credited as the most effective, efficient and influential design of World War two.",
                "The T seventy-two was the most common tank used by the Soviet Army from the nineteen seventies through the collapse of the Soviet Union."
            ],
            "SKILL_NAME" : "Armor Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me an armor fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
                "The M1A1 Abrams main battle tank weighs 68 tons and can travel at speeds in excess of fifty-five miles per hour.",
                "The Abrams has a one hundred and twenty millimeter smoothbore cannon.",
                "The M1A1 Abrams powertrain consists of a Honeywel multi-fuel gas turbine capable of fifteen-hundred shaft horsepower.",
                "The Bradley Fighting Vehicle is equipped with the m two four two, twenty-five millimeter chain gun as its main weapon.",
                "The m two Bradley Infantry Fighting Vehicle can accomidate up to six infrantrymen in addition to the crew.",
                "The m three Bradley Cavalry Fighting Vehicle was designed to accomidate two scouts and additional communications equipment, surveillance gear, and ammunition.",
                "The m four Sherman medium tank, was the most numerous battle tank used by the United States in world war two.",
                "By nineteen fourty-four, the m four was inferior to the increasing numbers of German heavy tanks, but was able to continue fighting with mutual support from numerical superiority and with support from growing numbers of fighter-bombers and artillery pieces.",
                "The m sixty Patton was a main battle tank introduced in December 1960, becoming the Army\'s primary tank during the cold war.",
                "The m one one three is a fully tracked armored personnel carrier was developed by Food Machinery Corporation and first fielded by Army mechanized infantry units in Vietnam in April nineteen sixty-two.",
                "The m one one three introduced new aluminum armor that made the vehicle much lighter than earlier vehicles. It was thick enough to protect the crew and passengers against small arms fire, but light enough that the vehicle was air transportable and moderately amphibious.",
                "The M one nine one seven was America\'s first mass-produced tank, entering production shortly before the end of World War one and a near copy of the French Renault FT. However, u s manufacturers failed to produce any in time to participate in world war i.",
                "The Interim Armored Vehicle Striker is a family of eight-wheeled, armored fighting vehicles.",
                "The Stryker one hundred and five millimeter Mobile Gun System entered full production in two thousand seven.",
                "The first use of armored tanks on the battlefield was during the Battle of the Somme on fifteen September nineteen sixteen, with mixed, but still impressive results.",
                "The British Mark one was the world's first combat tank, entering service in August nineteen sixteen, and first used in action on the morning of fifteen September nineteen sixteen.",
                "Beginning about nineteen forty-two, most British tank units in world war two were equipped with vehicles supplied from the United States, such as the Stuart light tank or its replacement the Sherman.",
                "The Soviet B T tanks were a series of cavalry tanks produced in large numbers between nineteen thirty-two and nineteen forty-one. They were lightly armored, but reasonably well-armed for their time, and had the best mobility of all contemporary tanks of the world.",
                "The T thrity-four was a medium tank produced from nineteen forty to nineteen fifty-eight. Although its armor and armament were surpassed by later tanks of the era, it has been often credited as the most effective, efficient and influential design of World War two.",
                "The T seventy-two was the most common tank used by the Soviet Army from the nineteen seventies through the collapse of the Soviet Union."
            ],
            "SKILL_NAME" : "American Armor Facts"
        }
    },
    "en-GB": {
        "translation": {
            "FACTS": [
                "The M1A1 Abrams main battle tank weighs 68 tons and can travel at speeds in excess of fifty-five miles per hour.",
                "The Abrams has a one hundred and twenty millimeter smoothbore cannon.",
                "The M1A1 Abrams powertrain consists of a Honeywel multi-fuel gas turbine capable of fifteen-hundred shaft horsepower.",
                "The Bradley Fighting Vehicle is equipped with the m two four two, twenty-five millimeter chain gun as its main weapon.",
                "The m two Bradley Infantry Fighting Vehicle can accomidate up to six infrantrymen in addition to the crew.",
                "The m three Bradley Cavalry Fighting Vehicle was designed to accomidate two scouts and additional communications equipment, surveillance gear, and ammunition.",
                "The m four Sherman medium tank, was the most numerous battle tank used by the United States in world war two.",
                "By nineteen fourty-four, the m four was inferior to the increasing numbers of German heavy tanks, but was able to continue fighting with mutual support from numerical superiority and with support from growing numbers of fighter-bombers and artillery pieces.",
                "The m sixty Patton was a main battle tank introduced in December 1960, becoming the Army\'s primary tank during the cold war.",
                "The m one one three is a fully tracked armored personnel carrier was developed by Food Machinery Corporation and first fielded by Army mechanized infantry units in Vietnam in April nineteen sixty-two.",
                "The m one one three introduced new aluminum armor that made the vehicle much lighter than earlier vehicles. It was thick enough to protect the crew and passengers against small arms fire, but light enough that the vehicle was air transportable and moderately amphibious.",
                "The M one nine one seven was America\'s first mass-produced tank, entering production shortly before the end of World War one and a near copy of the French Renault FT. However, u s manufacturers failed to produce any in time to participate in world war i.",
                "The Interim Armored Vehicle Striker is a family of eight-wheeled, armored fighting vehicles.",
                "The Stryker one hundred and five millimeter Mobile Gun System entered full production in two thousand seven.",
                "The first use of armored tanks on the battlefield was during the Battle of the Somme on fifteen September nineteen sixteen, with mixed, but still impressive results.",
                "The British Mark one was the world's first combat tank, entering service in August nineteen sixteen, and first used in action on the morning of fifteen September nineteen sixteen.",
                "Beginning about nineteen forty-two, most British tank units in world war two were equipped with vehicles supplied from the United States, such as the Stuart light tank or its replacement the Sherman.",
                "The Soviet B T tanks were a series of cavalry tanks produced in large numbers between nineteen thirty-two and nineteen forty-one. They were lightly armored, but reasonably well-armed for their time, and had the best mobility of all contemporary tanks of the world.",
                "The T thrity-four was a medium tank produced from nineteen forty to nineteen fifty-eight. Although its armor and armament were surpassed by later tanks of the era, it has been often credited as the most effective, efficient and influential design of World War two.",
                "The T seventy-two was the most common tank used by the Soviet Army from the nineteen seventies through the collapse of the Soviet Union."
            ],
            "SKILL_NAME" : "British Armour Facts"
        }
    },
    "de": {
        "translation": {
            "FACTS": [
                "Ein Jahr dauert auf dem Merkur nur 88 Tage.",
                "Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.",
                "Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.",
                "Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.",
                "Die Erde ist der einzige Planet, der nicht nach einem Gott benannt ist.",
                "Jupiter hat den kürzesten Tag aller Planeten.",
                "Die Milchstraßengalaxis wird in etwa 5 Milliarden Jahren mit der Andromeda-Galaxis zusammenstoßen.",
                "Die Sonne macht rund 99,86 % der Masse im Sonnensystem aus.",
                "Die Sonne ist eine fast perfekte Kugel.",
                "Eine Sonnenfinsternis kann alle ein bis zwei Jahre eintreten. Sie ist daher ein seltenes Ereignis.",
                "Der Saturn strahlt zweieinhalb mal mehr Energie in den Weltraum aus als er von der Sonne erhält.",
                "Die Temperatur in der Sonne kann 15 Millionen Grad Celsius erreichen.",
                "Der Mond entfernt sich von unserem Planeten etwa 3,8 cm pro Jahr."
            ],
            "SKILL_NAME" : "Weltraumwissen auf Deutsch",
            "GET_FACT_MESSAGE" : "Hier sind deine Fakten: ",
            "HELP_MESSAGE" : "Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?",
            "HELP_REPROMPT" : "Wie kann ich dir helfen?",
            "STOP_MESSAGE" : "Auf Wiedersehen!"
        }
    }
};

exports.handler = function(event, context, _callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    "LaunchRequest": function () {
        this.emit("GetFact");
    },
    "GetNewFactIntent": function () {
        this.emit("GetFact");
    },
    "GetFact": function () {
        // Get a random armor fact from the armor facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t("FACTS");
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(":tellWithCard", speechOutput, this.t("SKILL_NAME"), randomFact);
    },
    "AMAZON.HelpIntent": function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(":ask", speechOutput, reprompt);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
    }
};
