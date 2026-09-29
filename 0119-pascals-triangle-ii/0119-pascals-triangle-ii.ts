function getRow(rowIndex: number): number[] {
    if(rowIndex == 0) return [1]
  const length = rowIndex + 1;
  const row = [1, 1];
  for(let i = 1; i < rowIndex ; i ++) {
    let rem = row[0]
    for(let j = 1; j < i + 1 ; j ++) {
        const sum = rem + row[j];
        rem = row[j];
        row[j] = sum;
    }
    row.push(1);
  }
  return row;
};