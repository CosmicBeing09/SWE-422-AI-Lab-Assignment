import Board from './board.js';

export default class Player {
    constructor(maxDepth = -1) {
        this.maxDepth = maxDepth;
        this.nodesMap = new Map();
    }
    getBestMove(board, maximizing = true, callback = () => {}, depth = 0) {
        
        if(depth == 0) this.nodesMap.clear();
        
        if(board.isTerminal() || depth === this.maxDepth ) {
            if(board.isTerminal().winner === 'x') {
                return 100 - depth;
            } else if (board.isTerminal().winner === 'o') {
                return -100 + depth;
            } 
            return 0;
        }
        if(maximizing) {
          
            let best = -100;
          
            board.getAvailableMoves().forEach(index => {
              
                const child = new Board([...board.state]);
          
                child.insert('x', index);
               
                const nodeValue = this.getBestMove(child, false, callback, depth + 1);
                
                best = Math.max(best, nodeValue);
                
               
                if(depth == 0) {
                    
                    const moves = this.nodesMap.has(nodeValue) ? `${this.nodesMap.get(nodeValue)},${index}` : index;
                    this.nodesMap.set(nodeValue, moves);
                }
            });
            
            if(depth == 0) {
                let returnValue;
                if(typeof this.nodesMap.get(best) == 'string') {
                    const arr = this.nodesMap.get(best).split(',');
                    const rand = Math.floor(Math.random() * arr.length);
                    returnValue = arr[rand];
                } else {
                    returnValue = this.nodesMap.get(best);
                }
               
                callback(returnValue);
                return returnValue;
            }
           
            return best;
        }

        if(!maximizing) {
			
			let best = 100;
			
			board.getAvailableMoves().forEach(index => {
				 
                const child = new Board([...board.state]);

				child.insert('o', index);
			
				let nodeValue = this.getBestMove(child, true, callback, depth + 1);
				
				best = Math.min(best, nodeValue);
				
				
				if(depth == 0) {
				
					const moves = this.nodesMap.has(nodeValue) ? this.nodesMap.get(nodeValue) + ',' + index : index;
					this.nodesMap.set(nodeValue, moves);
				}
			});
			
			if(depth == 0) {
                let returnValue;
				if(typeof this.nodesMap.get(best) == 'string') {
					const arr = this.nodesMap.get(best).split(',');
					const rand = Math.floor(Math.random() * arr.length);
					returnValue = arr[rand];
				} else {
					returnValue = this.nodesMap.get(best);
				}
				
				callback(returnValue);
				return returnValue;
			}
			return best;
		}
    }
}