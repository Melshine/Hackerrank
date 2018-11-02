// activityNotifications function
function activityNotifications(expenditure, d) {
    var trailing = expenditure.slice(0,d);
    var expenditure = expenditure.slice(d);

    var activity = new Activity(trailing);
    var count = 0
    for(let i=0; i<expenditure.length; i++){
      if(expenditure[i] >= 2*activity.median) count++;
      activity.add(expenditure[i]);
    }

    return count;
}

class Activity {
  constructor(exp){
    this.freq = freq(exp);
    this.exp = exp;
    this.length = exp.length;
  }

  // return the median
  // if length is odd just return the indice i such as sum >= n/2
  // if length is even we need the next indice j and compute the mean between i and j
  get median(){
    var j, i = -1, sum = 0, n = this.length;
    do{
      i++;
      sum += this.freq[i];
    } while(sum < n/2)
    if(n%2 == 1 || sum > n/2) return i;
    j = i+1;
    while(j <= 201 && this.freq[j] == 0) j++;
    return (i+j)/2;
  }

  // update the array, adding new element and removing the last one
  add(v){
    var last = this.exp[0];
    this.exp.shift();
    this.exp.push(v);
    this.freq[last]--;
    this.freq[v]++;
  }
}

// Return frequencies array
function freq(values){
  var arr = Array(201).fill(0);
  values.forEach(v => {
    arr[v]++;
  })
  return arr;
}
