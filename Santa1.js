function findFirstRepeated(gifts) {
    let repeat = false;
    let numbRepeat;
  
    for (let i = 0; i < gifts.length; i++) {
      for (let j = i + 1; j < gifts.length; j++) {
        
        if (gifts[i] === gifts[j]) {
          if (!repeat || j < numbRepeat) {
            repeat = true;
            numbRepeat = j;
          
         
          }
        }
      }
    }
  
    if (repeat) {
      return gifts[numbRepeat];
    } else {
      return -1;
    }
  }

  findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])
  findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])