module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.stack = []
        this.undoStack = []
        this.redoStack = []
        this.top = -1
    }

    write(c) {
        // TODO: answer here
        this.undoStack.push(c)
        this.top++;
        this.stack.push(c)

    }

    read() {
        // TODO: answer here
        let result = "";

        for(let i = 0; i < this.stack.length; i++) {
            result += this.stack[i]
        }
        if (result === "") {
            return ""
        } else {
            return result
        }
        
    }

    undo() {
        // TODO: answer here
        if (this.undoStack.length === 0) {
            return ""
        } else {
            let c = this.undoStack.pop();
            this.redoStack.push(c);
            this.stack.pop();
        }
    }
    
    redo() {
        // TODO: answer here
        if(this.redoStack.length === 0) {
            return ""
        }
        let c = this.redoStack.pop();
        this.undoStack.push(c);
        this.stack.push(c);
    }
}
