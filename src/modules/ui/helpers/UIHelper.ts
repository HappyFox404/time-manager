export function JoinClasses(...classes: string[]) : string | undefined {
    let result : string[] = [];
    classes.forEach(classElement => {
        const elements = classElement.split(' ');
        elements.forEach(element => {
            if (element.replace(/\s/g, "") !== '') {
                result.push(element);
            }
        });
    });
    if(result.length > 0)
        return result.join(' ');
    return undefined;
}