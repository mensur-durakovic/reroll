import randomInt from "./randomInt";

export default function isActiveRandomizer(pickingClasses) {
    const length = pickingClasses.length;
    for (let i = 0; i < length; i += 2) {
        if (!pickingClasses.hasOwnProperty(i + 1)) {
            pickingClasses[i].isActive = true;
            break;
        }

        const randomPick = randomInt(1, 2);
        pickingClasses[i].isActive = randomPick === 1;
        pickingClasses[i + 1].isActive = randomPick === 2;
    }
}
