class PeekingIterator {
    constructor(iterable) {
        this.iterator = iterable[Symbol.iterator]();
        this.peeked = null;
    }

    peek() {
        if (this.peeked !== null) {
            return this.peeked;
        } else {
            const next = this.iterator.next();
            if (!next.done) {
                this.peeked = next.value;
            }
            return null;
        }
    }

    next() {
        if (this.peeked !== null) {
            const result = this.peeked;
            this.peeked = null;
            return result;
        } else {
            return this.iterator.next().value;
        }
    }

    hasNext() {
        return this.peeked !== null || this.iterator.next().done;
    }
}
