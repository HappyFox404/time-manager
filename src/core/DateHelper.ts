export function GetStringDate(date : Date) : string | null {
    if(date !== null) {
        return date.toISOString().split('T')[0];
    }
    return null;
}

export function GetFormatStringDateToNormallize(date: string) : string | null{
    const objDate = new Date(date);
    return objDate.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });;
}