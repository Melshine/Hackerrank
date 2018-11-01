var _ = require("lodash");
function DNA(n, genes, health, s){
    var trie = new Trie();
    var o = _.zip(genes, health);
    o.forEach((gene, i) => {
      trie.add(...gene, i);
    })

    return s.reduce((m,strand) => {
      var score = trie.getHealth(...strand);
      m[0] = Math.min(m[0], score);
      m[1] = Math.max(m[1], score);
      return m;
    }, [Infinity, 0]);
}

class Node {
  constructor(char){
    this.char = char;
    this.children = {};
    this.health = [];
    this.active = false;
  }

  getHealth(start, end){
    var H = 0;
    for(let i=0; i<this.health.length; i++){
      if(this.health[i][0] > end) break;
      if(this.health[i][0] >= start){
        H += this.health[i][1];
      }
    }
    return H;
  }
}

class Trie {
  constructor(){
    this.root = new Node("");
  }

  add(word, health, index){
    var char, node = this.root;
    for(let i=0; i<word.length; i++){
      char = word.charAt(i);
      if(!_.has(node.children, char)){
        node.children[char] = new Node(char);
      }
      node = node.children[char];
    }
    node.active = true;
    node.health.push([index, health]);
  }

  getHealth(start, end, strand){
    var next_paths, paths = [this.root];
    var char, H = 0;
    for(let i=0; i<strand.length; i++){
      char = strand.charAt(i);
      next_paths = [this.root];
      for(let j=0; j<paths.length; j++){
        let path = paths[j];
        if(_.has(path.children, char)){
          if(path.children[char].active){
            H += path.children[char].getHealth(start,end);
          }
          next_paths.push(path.children[char]);
        }
      }
      paths = next_paths;
    }
    return H;
  }

}
