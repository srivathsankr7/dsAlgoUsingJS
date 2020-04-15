/* Min Stack
Solution
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2. */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
    this.size = 0;
    this.minSize = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.minSize == 0) {
        this.minStack.push(x);
        this.minSize++;
    } else if(this.minStack[this.minSize-1] >= x) {
        this.minStack.push(x);
        this.minSize++;
    }
    this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0) {
        if(this.stack[this.size-1] == this.minStack[this.minSize-1]) {
            this.minStack.pop();
            this.minSize--;
        }
        this.stack.pop();
        this.size--;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.size > 0) {
        return this.stack[this.size-1];
    }
    return 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minSize > 0) {
        return this.minStack[this.minSize-1];
    }
    return 0;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */