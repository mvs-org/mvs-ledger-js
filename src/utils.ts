export function splitPath(path: string): number[] {
    let result: number[] = [];
    let components = path.split("/");
    components.forEach(element => {
        let number = parseInt(element, 10);
        if (isNaN(number)) {
            return;
        }
        if (element.length > 1 && element[element.length - 1] === "'") {
            number += 0x80000000;
        }
        result.push(number);
    });
    return result;
}