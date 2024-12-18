/** 정적 배열 (Static Array)
 * 정적 배열은 언제, 어디서 사용될까?
 * 1) 순차적인 데이터를 저장하고 접근할 때
 * 2) 객체를 임시로 저장할 때
 * 3) 입출력(IO) 루틴에서 버퍼로 사용될 때
 * 4) 조회 테이블(Lookup Tables) 및 역조회 테이블(Inverse Lookup Tables)로 사용될 때
 * 5) 함수에서 여러 값을 반환하는 데 사용될 수 있음
 * 6) 동적 프로그래밍에서 하위 문제의 답을 캐싱하는 데 사용
 * 
 * 복잡도 (Complexity)
 *       | Static Array | Dynamic Array
 * -------------------------------------
 * 접근   |     O(1)     |     O(1)
 * 검색   |     O(n)     |     O(n)
 * 삽입   |     N/A      |     O(n)
 * 추가   |     N/A      |     O(1)
 * 삭제   |     N/A      |     O(n)
 */

// Static Array

var a = [44, 12, -5, 17, 6, 0, 3, 9, 100]; // 해당 배열의 요소는 배열의 인덱스에 의해 참조됨

// Dynamic Array (동적 배열)

// 배열의 크기를 자유롭게 늘리거나 줄일 수 있음
var a = [34, 4];
a.push(-7); // 배열 끝에 요소 추가
a.pop();    // 배열 끝에서 요소 제거

// 요소 추가 과정 요약
// 1. 초기 배열 크기: 2 (요소 2개: [34, 4])
// 2. 추가 요소 1개 삽입: [-7] -> 배열이 꽉 차면 크기를 2배로 증가 (4로 확장)
// 3. 현재 배열 크기: 4 (요소: [34, 4, -7, empty])
// 4. 추가 요소 2개 삽입 -> 배열이 다시 꽉 차면 크기를 2배로 확장 (8로 확장)
// 5. 배열 크기 확장 과정은 배열이 꽉 찰 때마다 반복적으로 수행됨.

// Dynamic Array Source Code
// TODO: hasNext(), next(), toString(),
class DynamicArray {
    constructor(capacity = 2) {
        if (capacity < 0) throw new Error("Illegal Capacity: " + capacity);

        this.capacity = capacity; // 초기 용량
        this.length = 0; // 현재 배열 크기
        this.arr = new Array(capacity); // 내부 배열
    }

    size() {
        return this.length; // 현재 배열의 크기 반환
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        return this.arr[index];
    }

    set(index, element) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        this.arr[index] = element;
    }

    next() {
        var index = 0;
        return this.arr[index++]
    }

    hasNext() {
        return index < this.length;
    }

    toString() {
        if (this.length === 0) return "[]";
        else {
            var sb = "[";

            for (let i = 0; i < this.length; i++) {
                if (i === this.length - 1) {
                    sb += (String(this.arr[i])) + "]"
                } else {
                    sb += (String(this.arr[i]) + ", ")
                }
            }

            return sb;
        }
    }

    push(element) {
        if (this.length === this.capacity) {
            this._resize(2 * this.capacity);
        }
        this.arr[this.length] = element;
        this.length++;
    }

    remove(rm_index) {
        if (rm_index >= this.length || rm_index < 0) {
            throw new Error("Index out of bounds");
        }

        const target = this.arr[rm_index]; // 삭제 대상 저장

        // 요소들을 한 칸씩 앞으로 이동
        for (let i = rm_index; i < this.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        // 마지막 요소 제거 및 길이 감소
        this.arr[this.length - 1] = null;
        this.length--;

        // 크기 최적화 (필요하면 용량 축소)
        if (this.length <= this.capacity / 4) {
            this._resize(Math.max(2, Math.floor(this.capacity / 2)));
        }

        return target;
    }

    pop() {
        if (this.length === 0) {
            throw new Error("Array is empty");
        }
        const element = this.arr[this.length - 1];
        this.arr[this.length - 1] = null;
        this.length--;

        if (this.length > 0 && this.length <= this.capacity / 4) {
            this._resize(Math.floor(this.capacity / 2));
        }

        return element;
    }

    clear() {
        for (let i = 0; i < this.length; i++) {
            this.arr[i] = null;
        }
        this.length = 0;
    }

    _resize(newCapacity) {
        const newArr = new Array(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
        this.capacity = newCapacity;
    }
}

const dynamicArray = new DynamicArray(2);
dynamicArray.push(1);
dynamicArray.push(2);
console.log(dynamicArray.size()); // 2
dynamicArray.push(3); // 크기가 2에서 4로 확장
console.log(dynamicArray.toString())
console.log(dynamicArray.size()); // 3
dynamicArray.pop();
console.log(dynamicArray.size()); // 2
dynamicArray.clear();
console.log(dynamicArray.size()); // 0

// Singly and Doubly Linked List

/** Linked List
 * 연결 리스트는 노드를 순차적으로 포함하는 리스트
 * 모든 노드는 다음 노드에 대한 포인터를 가지고 있다 === 마지막 node는 널 포인터 익셉션을 가지고 있다
 * Head: 첫 노드
 * Tail: 끝 노드
 * Pointer: 다른 노드에 대한 참조값
 * Node: 데이터와 포인터를 포함한 객체
 * Singly: 포인터, 다음 노드 / 메모리 소모가 작다, 이전 요소에 대한 접근 불가
 * Doubly: 포인터, 다음 노드, 이전 노드 / 이전 요소에 대한 접근 가능, 메모리 소모 2배
 */

/** Singly Linked List Insertion
 * 1. 삽입하고자 하는 위치의 이전 노드 탐색
 * 2. 이전 노드의 포인터 변경, 삽입 노드의 포인터를 다음 노드 값으로 변경
 */

/** Doubly Linked List Insertion
 * 1. 삽입 위치 직전까지 탐색
 * 2. 삽입 노드는 직전 노드와 다음 노드에 대한 포인터를 가진다
 * 3. 이전 노드의 다음 포인터를 삽입 노드로 만들고 다음 노드의 이전 포인터를 삽입 노드로 만든다
 */

/** Singly Linked List Removing
 * 1. 제거하려는 노드를 찾는다
 * 2. 삭제하려는 노드의 직전 노드의 다음 포인터를 삭제하려는 노드의 다음 노드로 바꿔준다
 * 3. C, C#의 경우 메모리 관리, JS의 경우 GC로 수집됨
 */

/** Doubly Linked List Removing
 * 1. 제거하려는 노드를 찾는다
 * 2. 삭제하려는 노드의 직전 노드의 다음 포인터를 삭제하려는 노드의 다음 노드로 바꿔준다
 * 3. 삭제하려는 노드의 다음 노드의 이전 포인터를 삭제하려는 노드의 이전 노드로 바꿔준다
 */

/* Complexity Table: Singly vs Doubly Linked List
    Operation	     Singly Linked List	   Doubly Linked List
    Remove at Head	      O(1)	                   O(1)
    Remove at Tail	      O(n)	                   O(1)
    Remove at Middle      O(n)	                   O(n)
 */

/** Doubly Linked List
 * 
 */

class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    toString() {
        return JSON.stringify(this.data);
    }
}

class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    clear() {
        let trav = this.head;
        while (trav) {
            let next = trav.next;
            trav.prev = null;
            trav.next = null;
            trav.data = null;
            trav = next;
        }
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    addFirst(element) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node(element, null, null);
        } else {
            this.head.prev = new Node(element, null, this.head);
            this.head = this.head.prev;
        }
        this.size++;
    }

    addLast(element) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node(element, null, null);
        } else {
            this.tail.next = new Node(element, this.tail, null)
            this.tail = this.tail.next;
        }
        this.size++;
    }

    getFirst() {
        if (this.isEmpty()) throw new Error("Empty List");
        else return this.head.data;
    }

    getLast() {
        if (this.isEmpty()) throw new Error("Empty List");
        else return this.tail.data;
    }

    removeFirst() {
        if (this.isEmpty()) throw new Error("Empty List");
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) this.tail = null;
        else this.head.prev = null;
        return data;
    }

    removeLast() {
        if (this.isEmpty()) throw new Error("Empty List");
        const data = this.tail.data;
        this.tail = this.tail.prev;
        this.size--;
        if (this.isEmpty()) this.head = null;
        else this.tail.next = null;
        return data;
    }

    remove(node) {
        if (node.prev === null) return this.removeFirst();
        if (node.next === null) return this.removeLast();
        node.next.prev = node.prev;
        node.prev.next = node.next;
        const data = node.data;
        node.data = null;
        node = node.prev = node.next = null;
        --this.size;
        return data;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) throw new Error("Invalid Index");
        let i, trav;
        if (index < this.size / 2) {
            for (i = 0, trav = this.head; i !== index; i++) {
                trav = trav.next;
            }
        } else {
            for (i = this.size - 1, trav = this.tail; i !== index; i--) {
                trav = trav.prev;
            }
        }
        return this.remove(trav)
    }

    removeTarget(object) {
        let trav = this.head;
        if (object === null) {
            for (trav = this.head; trav !== null; trav = trav.next) {
                if (trav.data === null) {
                    this.remove(trav)
                    return true;
                }
            }
        } else {
            for (trav = this.head; trav !== null; trav = trav.next) {
                if (object === trav.data) {
                    this.remove(trav)
                    return true;
                }
            }
        }
        return false;
    }

    indexOf(object) {
        let index = 0;
        let trav = this.head;
        if (object === null) {
            for (trav = this.head; trav !== null; trav = trav.next, index++) {
                if (trav.data === null) return index;
            }
        } else {
            for (trav = this.head; trav !== null; trav = trav.next, index++) {
                if (object === trav.data) return index;
            }
        }
        return -1;
    }

    contains(object) {
        return this.indexOf(object) !== -1;
    }

    iterator(start = 0) {
        let trav = this.head;
        let n = 0;

        while (n < start && trav !== null) {
            trav = trav.next;
            n++;
        }

        return {
            hasNext: () => {
                return trav !== null;
            },
            next: () => {
                if (trav === null) throw new Error("No more elements");
                const data = trav.data;
                trav = trav.next;
                return data;
            }
        };
    }
}
