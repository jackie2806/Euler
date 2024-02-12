function findFirstRepeated(gifts) {
    let repeate = false;
    let numbRepeate;
  
    for (let i = 0; i < gifts.length; i++) {
      for (let j = i + 1; j < gifts.length; j++) {
        if (gifts[i] === gifts[j]) {
          if (!repeate || j < numbRepeate) {
            repeate = true;
            numbRepeate = j;
          }
        }
      }
    }
  
    if (repeate) {
      return gifts[numbRepeate];
    } else {
      return -1;
    }
  }