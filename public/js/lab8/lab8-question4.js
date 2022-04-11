function Node(value) {
    this.value = value;
    this.next = null;
};

function LinkedList() {
    this.root = null;

    this.add = function (val) {
        let n = new Node(val);
        n.next = this.root;
        this.root = n;
    };

    this.remove = function (number) {
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

    this.print = function () {
        let current = this.root;
        let r = '';
        while (current != null) {
            r = r + current.value;
            current = current.next;
        }
        console.log(`{${r.split("").reverse().join(",")}}`);

    }

}


let b = new LinkedList();

b.add(1);
b.add(2);
b.add(3);
b.add(4);
b.add(5);


b.print();

b.remove(2);

b.print();




let Node2 = {
    value: Number,
    next: this
};


let Linkedlist2 = {
    root: null,

    add: function(v) {
        let node = Node2;
        node.value = v;
        node.next = this.root;
        this.root = node;
    },

    print: function () {
        let current = this.root;
        let r = '';
        console.log(this.root)
        // while (current != null) {
        //     r = r + current.value;
        //     current = current.next;
        // }
        // console.log(`{${r.split("").reverse().join(",")}}`);
    }
}

Linkedlist2.add(12);
Linkedlist2.add(13);
Linkedlist2.add(16);
Linkedlist2.add(15);
Linkedlist2.print();
