export default function getGoodDate(noDate,showTimes=false){
    const date = new Date(+noDate);
    const month = (date.getMonth() + 1).toString().padStart(2,"0");
    const day = date.getDate().toString().padStart(2,"0");
    const year = date.getFullYear();
    let str = `${year}-${month}-${day}`;
    if(showTimes){
        const hour = date.getHours().toString().padStart(2,"0");
        const minute = date.getMinutes().toString().padStart(2,"0");
        const second = date.getSeconds().toString().padStart(2,"0");
        str += ` ${hour}:${minute}:${second}`
    }
    return str;
}