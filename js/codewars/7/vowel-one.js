const vowelOne = s => 
s.replace(/[^aeiou]/gi, '0').replace(/\D/gi, '1')
