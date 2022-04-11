
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.root = null;
    };
    
    add = function (val) {
        let n = new Node(val);
        n.next = this.root;
        this.root = n;
    };

    remove = function (number) {
        let current = this.root;
        let deleteNode = null;

        while (current != null) {
            if (current.next != null) {
                if (current.next.value == number) {
                    current.next = current.next.next;
                    break;

                }

            }

            current = current.next;
        }
        this.root = current;

    };

    print = function () {
        let current = this.root;
        let r = '';
        while (current != null) {
            r = r + current.value;
            current = current.next;
        }
        console.log(`{${r.split("").reverse().join(",")}}`);

    };
}


let b = new LinkedList();

b.add(1);
b.add(2);
b.add(3);
b.add(4);
b.add(5);


b.print();

// b.remove(2);

// b.print();

