
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(typeof matrix != 'object')
	{
		return [];
	}
	if(matrix.length == 0)
	{
		return [];
	}
	var arr = [];
	for(let i = 0; i < matrix.length; i++)
	{
		if(i%2 == 0)
		{
			matrix[i].sort(compareNumbers);
		}
		else{
			matrix[i].sort(compareNumbers_1);
		}
		
		for(let j = 0; j < matrix[i].length; j++)
		{
			arr.push(matrix[i][j]);
		}
	}
	
  return arr;
}
function compareNumbers(a, b) {
  return a - b;
}
function compareNumbers_1(a, b) {
  return b - a;
}