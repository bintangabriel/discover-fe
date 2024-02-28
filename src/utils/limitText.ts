export const limitText = (content:string, limit:number):string => {
    const words = content.split(' ');

    if (words.length <= limit){
      return content;
    }
    return words.slice(0, limit).join(' ') + '...';

  }