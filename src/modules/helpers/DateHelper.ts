export function GetStringDate(date : Date) : string | null {
    if(date !== null) {
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);

        const today = date.getFullYear()+"-"+(month)+"-"+(day) ;

        console.log(today)

        return today;
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