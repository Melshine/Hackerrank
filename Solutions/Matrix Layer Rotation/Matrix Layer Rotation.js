// Complete the matrixRotation function below.
function matrixRotation(matrix, r) {
    var m = matrix.length, n = matrix[0].length; // initiate m and n
    var rotate = Array(m).fill().map(_ => Array(n).fill()); // rotate matrix
    var frame_c_max = Math.min(m,n)/2; // maximum number of frame
    var list = Array(frame_c_max).fill().map(_ => []); // initiate list array that contains values for each frame

    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){
            var p = param(i,j);
            list[p.frame_v][(p.mij+r)%p.frame_c] = matrix[i][j];
        }
    }
    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){
            var p = param(i,j);
            rotate[i][j] = list[p.frame_v][p.mij];
        }
    }
    rotate.forEach(row => {
        console.log(row.join(" "));
    })
    
    function param(i,j){
        var ii = i >= m/2 ? (m-1) - i : i;
        var jj = j >= n/2 ? (n-1) - j : j;
        var frame_v = Math.min(ii,jj); // determine on which frame is (i,j)
        var frame_c = 2 * (m+n-2) - 8 * frame_v; // the number of elements that frame_v contains
        var mij = i + j - 2*frame_v;
        if(!(j == frame_v || i == (m-1) - frame_v)) mij = frame_c - mij;
        return {
            frame_v : frame_v,
            frame_c : frame_c,
            mij : mij
        }
    }
}
