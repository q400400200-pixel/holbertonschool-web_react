interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number;
    brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major",
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor",
    };
}

const majorA: MajorCredits = { credits: 3, brand: "major" };
const majorB: MajorCredits = { credits: 4, brand: "major" };
const minorA: MinorCredits = { credits: 1, brand: "minor" };
const minorB: MinorCredits = { credits: 2, brand: "minor" };

console.log(sumMajorCredits(majorA, majorB));
console.log(sumMinorCredits(minorA, minorB));
