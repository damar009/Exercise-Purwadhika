/*
if (n === 1) return 1;

    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
*/

function climbStairs(n) {
    let u3 = 0
    let u2 = 1
    let u1 = 1
    for(let i = 1; i <= n; i++){
        u3 = u2 + u1
        u2 = u3
        u1 = u2
    }
    return u1
}

console.log(climbStairs(4)); // Output: 2
// console.log(climbStairs(5)); // Output: 3
