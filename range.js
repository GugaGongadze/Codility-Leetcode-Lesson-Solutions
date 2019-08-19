function solution(S, P, Q) {
  var N = S.length, M = P.length;

  var impact = {A : 1, C : 2, G : 3, T : 4};

  var currCounter = {A : 0, C : 0, G : 0, T : 0};

  var counters = [];

  var minImpact = [];

  var i;

  for(i = 0; i <= N; i++) {
      counters.push({A: currCounter.A, C: currCounter.C, G: currCounter.G});
      currCounter[S[i]]++;
  }

  // for every query
  for(i = 0; i < M; i++) {
      var from = P[i], to = Q[i] + 1;

      // compare count of A at the start of query with count at the end of equry
      // if counter was changed then query contains A
      if(counters[to].A - counters[from].A > 0) {
          minImpact.push(impact.A);
      }
      // same things for C and others nucleotides with higher impact factor
      else if(counters[to].C - counters[from].C > 0) {
          minImpact.push(impact.C);
      }
      else if(counters[to].G - counters[from].G > 0) {
          minImpact.push(impact.G);
      }
      else { // one of the counters MUST be changed, so its T
          minImpact.push(impact.T);
      }
  }

  return minImpact;
}

const s = "GAGCCTA"
const p = [2, 5, 0]
const q = [4, 5, 6]

console.log(solution(s, p, q))
