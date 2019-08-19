function solution(A) {
  var pos = 0;
  var count = 0;

  for (var i = 0; i < A.length; i++) {
      if (A[pos] == A[i]) {
          count++;
      } else {
          count--;
          if (count == 0) {
              pos = i;
              count++;
          }
      }
  }

  var ret = 0;
  var cand = A[pos];

  var E = [];
  var N = [];

  var ec = 0;
  var nc = 0;
  for (var i = 0; i < A.length; i++) {
      if (A[i] == cand) {
          ec++;
      } else {
          nc++;
      }
      E[i] = ec;
      N[i] = nc;
  }

  for (var i = 0; i < A.length; i++) {
      if (E[i] > N[i] && ((nc - N[i]) < (ec - E[i]))) {
          ret++;
      }
  }

  return ret;
}


console.log(solution([4, 3, 4, 4, 4, 2]))
