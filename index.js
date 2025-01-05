/**
 * **스택(Stack)이란?**
 * - 스택은 한쪽 끝에서만 데이터를 추가(push)하거나 제거(pop)할 수 있는 선형 자료구조입니다.
 * - LIFO(Last In, First Out) 원리를 따릅니다.
 *
 * **스택의 사용 사례**
 * 1. 텍스트 편집기의 되돌리기(Undo) 기능.
 * 2. 컴파일러에서 괄호/중괄호 매칭 검사.
 * 3. 접시나 책 더미처럼 한쪽 끝에서만 작업이 가능한 구조 모델링.
 * 4. 함수 호출 스택 관리(재귀 함수 호출 시 사용).
 * 5. 그래프 탐색(DFS: Depth First Search) 구현.
 *
 * **시간 복잡도**
 * - 삽입(Push): O(1)
 * - 제거(Pop): O(1)
 * - 탐색(Search): O(n)
 * - 맨 위 확인(Peek): O(1)
 * - 크기 확인(Size): O(1)
 */

/**
 * **괄호 매칭 문제**
 * - 문제: 주어진 문자열이 올바른 괄호 구조인지 확인합니다.
 *   (괄호 종류: (), [], {})
 *
 * **알고리즘**
 * 1. 빈 스택 `S`를 생성합니다.
 * 2. 문자열의 각 문자를 확인합니다:
 *    - 여는 괄호(`(`, `{`, `[`)라면 스택에 추가(push).
 *    - 닫는 괄호(`)`, `}`, `]`)라면:
 *      - 스택이 비어있거나 스택에서 꺼낸 값(pop)이 매칭되지 않으면 false 반환.
 * 3. 모든 문자를 확인한 후 스택이 비어 있으면 true, 아니면 false 반환.
 *
 * **시간 복잡도**
 * - 문자열의 길이가 `n`일 때 O(n).
 */

/**
 * 괄호 매칭 함수
 * @param {string} bracketString - 입력 문자열
 * @returns {boolean} 올바른 괄호 구조 여부
 */
function isValidBracketString(bracketString) {
  const stack = []; // 스택 초기화
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const bracket of bracketString) {
    if (['(', '{', '['].includes(bracket)) {
      // 여는 괄호라면 스택에 추가
      stack.push(bracket);
    } else {
      // 닫는 괄호일 경우
      if (stack.length === 0 || stack.pop() !== bracketMap[bracket]) {
        return false; // 매칭되지 않으면 false 반환
      }
    }
  }

  return stack.length === 0; // 스택이 비어있으면 true
}

/**
 * **사용 예제**
 * console.log(isValidBracketString("()[]{}")); // true
 * console.log(isValidBracketString("([{}])")); // true
 * console.log(isValidBracketString("(]"));     // false
 * console.log(isValidBracketString("((("));    // false
 */

/**
 * **스택(Stack)**
 * - 스택은 데이터를 LIFO(Last In, First Out) 방식으로 처리하는 자료구조입니다.
 * - 한쪽 끝에서만 삽입(push)과 제거(pop)이 가능합니다.
 *
 * **주요 메서드**
 * 1. `push(elem)` - 스택에 요소를 추가.
 * 2. `pop()` - 스택에서 요소를 제거하고 반환.
 * 3. `peek()` - 스택의 맨 위 요소를 반환(제거하지 않음).
 * 4. `isEmpty()` - 스택이 비어있는지 확인.
 * 5. `size()` - 스택에 있는 요소의 개수를 반환.
 * 6. `iterator()` - 스택의 요소를 순회하는 이터레이터 반환.
 */

class Stack {
  constructor() {
    this.list = []; // 내부 배열로 스택 구현
  }

  /**
   * 스택에 요소 추가
   * @param {*} elem - 추가할 요소
   */
  push(elem) {
    this.list.push(elem);
  }

  /**
   * 스택에서 요소 제거 및 반환
   * @returns {*} 제거된 요소
   * @throws {Error} 스택이 비어있는 경우
   */
  pop() {
    if (this.isEmpty()) throw new Error("Empty Stack Exception");
    return this.list.pop();
  }

  /**
   * 스택의 맨 위 요소 반환 (제거하지 않음)
   * @returns {*} 맨 위 요소
   * @throws {Error} 스택이 비어있는 경우
   */
  peek() {
    if (this.isEmpty()) throw new Error("Empty Stack Exception");
    return this.list[this.list.length - 1];
  }

  /**
   * 스택이 비어있는지 확인
   * @returns {boolean} 스택이 비어있으면 true
   */
  isEmpty() {
    return this.list.length === 0;
  }

  /**
   * 스택의 크기 반환
   * @returns {number} 스택 크기
   */
  size() {
    return this.list.length;
  }

  /**
   * 스택의 이터레이터 반환
   * @returns {Iterator} 이터레이터
   */
  iterator() {
    return this.list[Symbol.iterator]();
  }
}

/**
 * **사용 예제**
 */
const stack = new Stack();
stack.push(4); // 스택에 4 추가
stack.push(2); // 스택에 2 추가
stack.push(5); // 스택에 5 추가
console.log(stack.size()); // 출력: 3
console.log(stack.peek()); // 출력: 5 (맨 위 요소)
console.log(stack.pop());  // 출력: 5 (제거된 요소)
console.log(stack.pop());  // 출력: 2
console.log(stack.isEmpty()); // 출력: false
console.log(stack.pop());  // 출력: 4
console.log(stack.isEmpty()); // 출력: true

/**
 * **Queues**
 * - 큐(Queue)는 **FIFO(First In, First Out)** 원칙을 따르는 선형 자료구조입니다.
 * - 데이터를 한쪽 끝에서 삽입(Enqueue)하고, 반대쪽 끝에서 제거(Dequeue)합니다.
 * - 삽입과 제거는 고정된 순서로 이루어지며, 가장 먼저 들어온 데이터가 가장 먼저 처리됩니다.
 *
 * **Terminology**
 * - `Enqueue`: 데이터를 큐의 뒤쪽에 추가.
 * - `Dequeue`: 큐의 앞쪽에서 데이터를 제거.
 * - `Polling`: `Dequeue`와 유사한 작업.
 * - `Peek`: 큐의 앞쪽 데이터를 제거하지 않고 확인.
 *
 * **Usage**
 * 1. **대기열 모델링**:
 *    - 예: 영화관 줄 서기, 고객 서비스 대기열.
 * 2. **최근 추가된 요소 추적**:
 *    - 예: 가장 최근에 추가된 `x`개의 요소를 관리.
 * 3. **웹 서버 요청 관리**:
 *    - 요청을 먼저 도착한 순서대로 처리 (FCFS: First Come First Serve).
 * 4. **그래프 탐색**:
 *    - BFS(너비 우선 탐색) 알고리즘에서 큐를 사용.
 *
 * **시간 복잡도**
 * - `Enqueue`: O(1) - 끝에 데이터를 추가.
 * - `Dequeue`: O(1) - 앞에서 데이터를 제거.
 * - `Peek`: O(1) - 앞쪽 데이터 확인.
 * - `Contains`: O(n) - 큐에 특정 데이터 포함 여부 확인.
 * - `Removal`: O(n) - 특정 요소 제거.
 * - `IsEmpty`: O(1) - 큐가 비어있는지 확인.
 *
 * **큐 작업 예제**
 * 1. Enqueue(12): 큐에 12를 추가.
 * 2. Dequeue(): 큐의 앞에서 데이터를 제거.
 * 3. Enqueue(7): 큐에 7을 추가.
 * 4. Enqueue(-6): 큐에 -6을 추가.
 *
 * **Queue Example - BFS (Breadth-First Search)**
 * - 그래프 탐색에 큐를 사용하는 대표적인 알고리즘.
 * - 루트 노드에서 시작하여 너비를 기준으로 탐색.
 * 
 * **알고리즘 (의사 코드)**
 * Let Q be a Queue
 * While Q is not empty:
 *   node = Q.dequeue()  // 큐의 앞에서 노드를 제거
 *   For neighbour in neighbours(node):  // 현재 노드의 이웃을 확인
 *     If neighbour has not been visited:  // 방문하지 않은 경우
 *       neighbour.visited = true         // 방문 처리
 *       Q.enqueue(neighbour)             // 큐에 이웃 추가
 *
 * **주요 개념**
 * 1. 방문 처리:
 *    - `visited` 배열이나 `Set`을 사용해 중복 방문 방지.
 * 2. 이웃 처리:
 *    - 각 노드의 이웃을 큐에 추가하여 순차적으로 탐색.
 * 3. 큐의 역할:
 *    - 노드를 탐색 순서대로 저장하여 FIFO 방식으로 처리.
 */

class Queue {
  constructor() {
    this.list = []
  }

  queue(firstElem) {
    this.list.push(firstElem)
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0
  }

  peek() {
    if (this.isEmpty()) throw new Error("Queue Empty")
    return this.list[this.list.length - 1];
  }

  poll() {
    if (this.isEmpty()) throw new Error("Queue Empty")
    return this.list.shift()
  }

  offer(elem) {
    this.list.push(elem)
  }

  iterator() {
    return this.list[Symbol.iterator]();
  }
}

/**
 * 우선순위 큐(Priority Queues, PQs)
 * 
 * - 우선순위 큐는 **추상 자료형(ADT)**으로, 일반 큐와 유사하지만 
 *   각 요소가 **우선순위**를 가지며, 이 우선순위에 따라 요소가 제거되는 순서가 결정됩니다.
 * - 요소는 반드시 **비교 가능**해야 하며, 최소값부터 최대값(최소 PQ) 또는 최대값부터 최소값(최대 PQ) 순으로 정렬됩니다.
 * 
 * **사용 예시:**
 * - 주요 연산: `poll()` (제거), `add()` (추가), `peek()` (확인)
 * - 과정: 요소를 추가한 후, 우선순위에 따라 가장 작은 값(또는 가장 큰 값)을 제거.
 * - 내부적으로 **힙(Heap)** 자료 구조를 사용하여 우선순위 정렬 유지.
 * 
 * **힙(Heap) 개요:**
 * - 힙은 **트리 기반 자료 구조**입니다.
 * - **힙 속성(Heap Invariant)**:
 *   - 부모 노드가 자식 노드보다 항상 작거나(최소 힙) 크도록(최대 힙) 정렬.
 * - 최소 힙(Min Heap): 부모 <= 자식
 * - 최대 힙(Max Heap): 부모 >= 자식
 * 
 * **주요 사용 사례:**
 * 1. **다익스트라 최단 경로 알고리즘**: 동적으로 가장 작은 가중치를 가져옴.
 * 2. **동적 우선순위 선택**: 최선/최악의 요소를 지속적으로 선택.
 * 3. **허프만 인코딩(Huffman Encoding)**: 인코딩 트리 생성.
 * 4. **BFS 알고리즘(A* 등)**: 가장 유망한 노드를 우선적으로 선택.
 * 
 * **이진 힙을 활용한 성능:**
 * - 힙 생성: `O(n)`
 * - 가장 높은 우선순위 요소 제거(Polling): `O(log(n))`
 * - 최상위 요소 확인(Peeking): `O(1)`
 * - 요소 추가(Adding): `O(log(n))`
 * - 단순 제거(Naive Removing): `O(n)`
 * - 해시 테이블로 제거 최적화(Advanced Removing): `O(log(n))`
 * - 단순 포함 여부 확인(Naive Contains): `O(n)`
 * - 해시 테이블로 포함 여부 확인(Contains with Hash Table): `O(1)`
 * 
 * **최소 PQ를 최대 PQ로 변환:**
* 우선순위 큐(Priority Queue, PQ)에서의 우선순위 규칙
 * 
 * **숫자의 경우:**
 * - 우선순위 큐가 최소 PQ(min PQ)일 때:
 *   - 숫자 `x`, `y`가 주어지면, **x <= y**라면 x가 y보다 먼저 큐에서 나옵니다.
 *   - 이를 부정하면, **x >= y**일 때 y가 x보다 먼저 큐에서 나옵니다.
 * - 반대로 최대 PQ(max PQ)에서는 비교 연산을 반대로 수행합니다.
 *   - **x >= y**일 때 x가 y보다 먼저 큐에서 나옵니다.
 *   - 이를 부정하면, **x <= y**일 때 y가 x보다 먼저 큐에서 나옵니다.
 * 
 * **문자열의 경우:**
 * - 문자열의 우선순위를 정할 때는 일반적으로 **사전 순서(lexicographical order)** 또는 **역순(negative lexicographical order)**을 사용합니다.
 * - 예를 들어, 문자열 `"apple"`, `"banana"`, `"cherry"`를 lexicographical 순서로 최소 PQ에 추가하면:
 *   - 우선순위는 `"apple" -> "banana" -> "cherry"`가 됩니다.
 * - 반대로, 같은 문자열을 negative lexicographical 순서로 최소 PQ에 추가하면:
 *   - 우선순위는 `"cherry" -> "banana" -> "apple"`이 됩니다.
 * 
 * **추가 설명:**
 * - **사전 순서(lex comparator)**: 문자열을 사전적 순서에 따라 정렬.
 *   - 예: `"apple" < "banana" < "cherry"`
 *   - 결과적으로 작은 값이 먼저 나옵니다.
 * - **역순(nlex comparator)**: 사전 순서의 반대로 정렬.
 *   - 예: `"cherry" > "banana" > "apple"`
 *   - 결과적으로 큰 값이 먼저 나옵니다.
 * 
 * **사용 예시:**
 * - lex comparator로 문자열을 추가할 경우:
 *   - `"apple", "banana", "cherry"`를 추가 → `"apple"`이 가장 먼저 나옴.
 * - nlex comparator로 문자열을 추가할 경우:
 *   - `"apple", "banana", "cherry"`를 추가 → `"cherry"`가 가장 먼저 나옴.
 * 
* 우선순위 큐(Priority Queue)에 효율적으로 요소 추가하기
 * 
 * **우선순위 큐의 구현 방식:**
 * 우선순위 큐는 다양한 힙 구조를 사용해 구현할 수 있습니다:
 * - **이진 힙(Binary Heap)**
 * - 피보나치 힙(Fibonacci Heap)
 * - 이항 힙(Binomial Heap)
 * - 페어링 힙(Pairing Heap) 등.
 * 
 * **이진 힙(Binary Heap):**
 * - **이진 힙**은 이진 트리(Binary Tree)이며, 힙 불변 조건(Heap Invariant)을 만족합니다.
 * - **힙 불변 조건**: 부모 노드의 값이 항상 자식 노드의 값보다 작거나 같음(최소 힙) 또는 큼(최대 힙).
 * - 모든 노드는 최대 두 개의 자식을 가집니다.
 * 
 * **완전 이진 트리(Complete Binary Tree):**
 * - 트리의 모든 레벨이 마지막 레벨을 제외하고 완전히 채워져야 합니다.
 * - 마지막 레벨은 왼쪽에서 오른쪽으로 차례로 채워져야 합니다.
 * 
 * **이진 힙의 표현:**
 * - **배열**을 사용해 이진 힙을 표현합니다.
 * - 예: 
 *   - 데이터 트리: `[9, 8, 7, 6, 5, 1, 2, 2, 2, 3, 4, 0, 1, 2, 1]`
 *   - 인덱스 트리: `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]`
 * 
 * **트리의 인덱스 관계:**
 * - 부모 노드의 인덱스를 `i`라 할 때:
 *   - 왼쪽 자식 인덱스: `2i + 1`
 *   - 오른쪽 자식 인덱스: `2i + 2`
 * 
 * **삽입(Insertion):**
 * 1. 데이터를 트리의 마지막 레벨에 추가합니다.
 * 2. **위로 거슬러 올라가며(Up-Heap)** 힙 속성을 만족하도록 부모와 교환(Swap)합니다.
 * 3. 루트 노드에 도달하거나 힙 속성이 만족되면 종료합니다.
 * 
 * **삽입 예시:**
 * 1. 초기 힙:
 *    ```
 *           5
 *         /   \
 *        7     8
 *       / \   /
 *      10 12 15
 *    ```
 *    배열: `[5, 7, 8, 10, 12, 15]`
 * 
 * 2. 값 `3` 추가:
 *    - 트리의 마지막 자리에 추가:
 *    ```
 *           5
 *         /   \
 *        7     8
 *       / \   / \
 *      10 12 15  3
 *    ```
 *    배열: `[5, 7, 8, 10, 12, 15, 3]`
 * 
 * 3. 힙 속성 만족을 위해 부모와 교환(1차 스왑):
 *    - `3` ↔ `8` 교환:
 *    ```
 *           5
 *         /   \
 *        7     3
 *       / \   / \
 *      10 12 15  8
 *    ```
 *    배열: `[5, 7, 3, 10, 12, 15, 8]`
 * 
 * 4. 힙 속성 만족을 위해 부모와 교환(2차 스왑):
 *    - `3` ↔ `5` 교환:
 *    ```
 *           3
 *         /   \
 *        7     5
 *       / \   / \
 *      10 12 15  8
 *    ```
 *    배열: `[3, 7, 5, 10, 12, 15, 8]`
 * 
 * 5. 결과:
 *    - 힙 속성을 만족하는 최종 트리.
 *    ```
 *           3
 *         /   \
 *        7     5
 *       / \   / \
 *      10 12 15  8
 *    ```
 *    배열: `[3, 7, 5, 10, 12, 15, 8]`
 * 
 * Instructions:
 * 
 * Poll(): 
 * - 삭제하려는 첫 번째 요소와 트리의 마지막 요소의 위치를 교환한 뒤, 트리의 마지막 요소가 된 첫 번째 요소를 제거한다.
 * - 제거 후 힙 불변성이 깨진 상태가 되므로, 최대 힙이라면 더 큰 값, 최소 힙이라면 더 작은 값을 따라 아래로 비교하며 이동한다.
 * 
 * Remove(element): 
 * - 삭제할 대상을 선형 탐색으로 찾아낸 뒤, 마지막 트리 요소와 자리를 교환한 후 삭제한다.
 * - 이후, Poll()과 동일하게 트리의 조건을 맞추기 위해 비교하며 위로 올라가거나 아래로 내려간다.
 * 
 * Removing Elements From Binary Heap in O(log(n)):
 * - 제거 알고리즘의 비효율성은 요소의 위치를 확인하기 위해 선형 탐색이 필요하다는 데서 발생한다.
 * 
 * 해결 방법:
 * 1. 모든 노드를 특정 인덱스에 매핑하여, 제거할 노드의 인덱스를 빠르게 찾는다.
 * 2. 힙에 중복된 값이 있을 경우, 하나의 값을 여러 위치에 매핑할 수 있다.
 * 3. 각 값에 대한 인덱스 집합 또는 트리 집합을 유지하여 효율적인 삭제를 수행한다.
 * 
 * Example:
 * Node Value    Position Value
 * 2             0, 2, 6
 * 7             1, 4
 * 11            3
 * 
 * - 버블 업(Bubble Up) 및 버블 다운(Bubble Down) 작업 중, 각 값의 인덱스를 매핑하여 저장한다.
 * - 특정 값을 교환할 수 있는 동일한 레벨의 노드와 자리를 바꾼 뒤 제거한다.
 * 
 * Question: 
 * - 중복된 노드를 제거하려고 할 때, 어느 노드를 제거해야 할까? 제거할 노드를 선택하는 것이 중요한가?
 * 
 * Answer: 
 * - 힙의 조건만 만족한다면 어느 노드를 제거하든 상관없다.
 * 
 * Instructions:
 * insert(3): 
 * - 트리의 바닥 레벨에 새로운 노드를 추가한다.
 * - 값과 인덱스를 매핑 테이블에 추가한다.
 * - 힙 불변성을 확인하고, 필요 시 버블 업(Bubble Up) 또는 버블 다운(Bubble Down) 작업을 수행한다.
 * 
 * remove(2): 
 * - 값이 2인 노드 중 아무 노드나 제거한다. 예를 들어, 상위 노드를 제거한다고 가정하면,
 *   마지막 노드와 교환한 후 인덱스도 변경한다.
 * - 이후, 버블 업 또는 버블 다운을 수행하여 힙 조건을 만족시킨다.
 * 
 * poll(): 
 * - Remove와 동일한 과정을 따른다.
 */

class PQueue {
  constructor(elements = []) {
    this.heap = [];
    this.nodeToIndexMap = new Map();

    elements.forEach((el) => this.add(el));
  }

  // 두 인덱스의 요소를 교환하는 메서드
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];

    // 인덱스 매핑을 업데이트
    this.nodeToIndexMap.set(this.heap[index1], index1);
    this.nodeToIndexMap.set(this.heap[index2], index2);
  }

  // 새로운 요소를 힙에 추가
  add(element) {
    if (element == null) throw new Error("요소는 null이 될 수 없습니다.");
    this.heap.push(element); // 힙 배열에 요소 추가
    this.nodeToIndexMap.set(element, this.heap.length - 1); // 인덱스 매핑
    this.swim(this.heap.length - 1); // 힙 조건을 유지하기 위해 swim 호출
  }

  // 루트 요소를 제거하고 반환
  poll() {
    if (this.isEmpty()) return null; // 힙이 비어 있으면 null 반환
    return this.removeAt(0); // 루트 요소 제거
  }

  // 루트 요소를 반환 (제거하지 않음)
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // 특정 요소가 힙에 포함되어 있는지 확인
  contains(element) {
    return this.nodeToIndexMap.has(element);
  }

  // 특정 요소를 제거
  remove(element) {
    if (!this.contains(element)) return false; // 요소가 없으면 false 반환
    const index = this.nodeToIndexMap.get(element);
    this.removeAt(index); // 해당 요소를 인덱스에서 제거
    return true;
  }

  // 특정 인덱스의 요소를 제거
  removeAt(index) {
    if (this.isEmpty()) return null;

    this.swap(index, this.heap.length - 1); // 마지막 요소와 위치 교환
    const removedElement = this.heap.pop(); // 마지막 요소 제거
    this.nodeToIndexMap.delete(removedElement); // 매핑에서 제거

    if (index < this.heap.length) {
      this.sink(index); // 힙 조건을 유지하기 위해 sink 호출
      if (this.heap[index] === removedElement) {
        this.swim(index); // 필요한 경우 swim 호출
      }
    }

    return removedElement;
  }

  // 힙 조건을 위로부터 유지 (올라감)
  swim(index) {
    let parent = Math.floor((index - 1) / 2); // 부모 노드 인덱스 계산
    while (index > 0 && this.less(index, parent)) {
      this.swap(index, parent); // 부모와 교환
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // 힙 조건을 아래로부터 유지 (내려감)
  sink(index) {
    while (true) {
      let smallest = index;
      const left = 2 * index + 1; // 왼쪽 자식 노드
      const right = 2 * index + 2; // 오른쪽 자식 노드

      if (left < this.heap.length && this.less(left, smallest)) {
        smallest = left; // 작은 값을 가진 자식 선택
      }
      if (right < this.heap.length && this.less(right, smallest)) {
        smallest = right;
      }

      if (smallest === index) break; // 더 이상 교환할 필요가 없으면 종료
      this.swap(index, smallest); // 교환
      index = smallest;
    }
  }

  // 두 인덱스의 값을 비교 (작은 값이 우선)
  less(i, j) {
    return this.heap[i] < this.heap[j];
  }

  // 힙이 비어 있는지 확인
  isEmpty() {
    return this.heap.length === 0;
  }

  // 힙의 크기를 반환
  size() {
    return this.heap.length;
  }

  // 현재 힙이 최소 힙 조건을 만족하는지 확인
  isMinHeap(index = 0) {
    if (index >= this.heap.length) return true;

    const left = 2 * index + 1; // 왼쪽 자식
    const right = 2 * index + 2; // 오른쪽 자식

    if (left < this.heap.length && !this.less(index, left)) return false;
    if (right < this.heap.length && !this.less(index, right)) return false;

    return this.isMinHeap(left) && this.isMinHeap(right);
  }
}

/** 유니온 파인드 (Union Find 또는 Disjoint Set Union, DSU)
 * 유니온 파인드는 여러 개의 집합으로 나뉘어진 요소들을 추적하는 데이터 구조입니다.
 * 주요 연산:
 *   - **Find**: 특정 요소가 속한 집합을 확인합니다. 이를 통해 두 요소가 같은 집합에 속해 있는지 확인할 수 있습니다.
 *   - **Union**: 두 집합을 하나로 병합합니다.
 * 
 * 유니온 파인드가 사용되는 경우:
 * 1. **크루스칼 최소 신장 트리 알고리즘 (Kruskal's MST)**:
 *    - 크루스칼 알고리즘에서 사이클을 감지하고 컴포넌트를 병합할 때 사용됩니다.
 * 2. **그리드 퍼콜레이션**:
 *    - 격자 구조에서 연결성을 확인하는 데 사용됩니다.
 * 3. **네트워크 연결성 확인**:
 *    - 네트워크에서 두 노드가 연결되어 있는지 추적합니다.
 * 4. **트리의 최소 공통 조상**:
 *    - 고급 알고리즘에서 트리를 사전 처리할 때 사용됩니다.
 * 5. **이미지 처리**:
 *    - 바이너리 이미지에서 연결된 구성 요소를 식별합니다.
 * 
 * 시간 복잡도:
 * - **구성**: O(n) (요소 수 `n`에 비례)
 * - **Union**: O(α(n)) (여기서 α(n)은 아커만 함수의 역함수로, 매우 느리게 증가합니다)
 * - **Find**: O(α(n))
 * - **집합 크기 가져오기**: O(1) (크기 배열을 유지할 경우)
 * - **연결 여부 확인**: O(α(n))
 * - **컴포넌트 개수 확인**: O(1) (별도의 카운트를 유지할 경우)
 */

/** Kruskal's Algorithm (크루스칼 알고리즘)
 * 그래프 G = (V, E)의 최소 신장 트리(MST)를 찾는 알고리즘.
 * 
 * 단계:
 * 1. 모든 간선을 가중치 기준 오름차순으로 정렬.
 * 2. 정렬된 간선을 하나씩 처리:
 *    - 간선이 연결하는 두 노드가 이미 같은 그룹에 속하면 해당 간선을 건너뜀.
 *    - 그렇지 않으면 간선을 MST에 추가하고 두 노드를 같은 그룹으로 병합.
 * 3. 모든 간선을 처리하거나 모든 노드가 연결되면 종료.
 */

/** 매핑 및 해시 테이블
 * - 각 노드에 고유한 정수를 매핑하여 해시 테이블에 저장.
 * - 예시:
 *   E -> 0
 *   F -> 1
 *   I -> 2
 *   D -> 3
 *   C -> 4
 *   A -> 5
 *   J -> 6
 *   L -> 7
 *   G -> 8
 *   K -> 9
 */

/** 배열 표현
 * - Union-Find 정보를 배열에 저장.
 * - 각 인덱스는 노드를 나타내며, 값은 해당 노드의 부모를 나타냄.
 * - 초기 상태:
 *   인덱스:  0  1  2  3  4  5  6  7  8  9
 *   값:      0  1  2  3  4  5  6  7  8  9
 */

/** Union 연산 예시: Union(C, K)
 * - C와 K를 병합하려면:
 *   - K의 값을 C의 값으로 업데이트 (또는 반대).
 *   - 균형을 유지하기 위해 작은 트리를 큰 트리에 병합.
 * - 병합 후:
 *   인덱스:  0  1  2  3  4  5  6  7  8  9
 *   값:      0  1  2  3  4  5  6  7  8  4
 * - K의 값이 4로 변경되며, 이는 C의 루트 값.
 */

/** Find 연산
 * - 특정 노드가 속한 그룹을 찾으려면:
 *   - 부모 포인터를 따라가며 자신을 가리키는 노드(루트 노드)에 도달.
 * - 예시:
 *   Find(K)는 4를 반환 (K의 루트).
 */

/** Union 연산
 * 1. 병합할 두 요소의 루트 노드를 찾음.
 * 2. 작은 트리를 큰 트리에 병합하여 균형 유지.
 * 3. 배열 값을 업데이트하여 병합 반영.
 */

/** 복잡도
 * - Find: O(α(n)), 여기서 α(n)은 매우 느리게 증가하는 Ackermann 역함수.
 * - Union: O(α(n)).
 * - 전체 크루스칼 알고리즘: O(E log E + E α(V)),
 *   여기서 E는 간선의 수, V는 노드의 수.
 */

/** Path Compression Union Find
 * 1. 기존의 방식(루트노드를 찾기 위해 데이터를 선형적으로 탐색했던 시간)이 아닌 루트 노드에 대한 참조를
 * 각 노드들에 남긴다.
 * 2. 그룹을 합칠 때 루트 노드에 대한 정보를 찾고 루트 노드에 대한 연결만 마치면 그룹을 쉽게 통합할 수 있다
 */

class Union {
  constructor(size = 0, sz = [], id = [], numComponents = 0) {
    this.size = size; // 전체 노드 개수
    this.sz = sz; // 각 트리의 크기를 저장하는 배열
    this.id = id; // 각 노드의 부모를 저장하는 배열
    this.numComponents = numComponents; // 연결된 컴포넌트의 개수
  }

  // 초기화 함수
  unionFind(size) {
    if (size <= 0) throw new Error("Size <= 0 is not allowed");
    this.size = this.numComponents = size;
    this.sz = Array.from({ length: size }, () => 1); // 트리 크기 초기화
    this.id = Array.from({ length: size }, (_, i) => i); // 자기 자신을 부모로 초기화
  }

  // 루트 노드 찾기 (경로 압축 포함)
  find(p) {
    let root = p;

    // 루트를 찾는 과정
    while (root !== this.id[root]) {
      root = this.id[root]; // 부모로 이동
    }

    // 경로 압축 과정
    while (p !== root) {
      let next = this.id[p]; // 현재 노드의 부모 저장
      this.id[p] = root; // 현재 노드를 루트에 직접 연결
      p = next; // 부모 노드로 이동
    }

    return root; // 최종 루트 반환
  }

  // 두 노드가 같은 컴포넌트에 속해 있는지 확인
  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  // 특정 노드가 속한 컴포넌트의 크기를 반환
  componentSize(p) {
    return this.sz[this.find(p)];
  }

  // 두 노드를 병합
  unify(p, q) {
    let root1 = this.find(p);
    let root2 = this.find(q);

    // 이미 같은 컴포넌트면 병합하지 않음
    if (root1 === root2) return;

    // 작은 트리를 큰 트리에 병합 (Weighted Union)
    if (this.sz[root1] < this.sz[root2]) {
      this.sz[root2] += this.sz[root1];
      this.id[root1] = root2; // 작은 트리를 큰 트리에 연결
    } else {
      this.sz[root1] += this.sz[root2];
      this.id[root2] = root1; // 작은 트리를 큰 트리에 연결
    }

    this.numComponents--; // 컴포넌트 개수 감소
  }

  // 현재 연결된 컴포넌트의 수 반환
  countComponents() {
    return this.numComponents;
  }
}

// 시간 복잡도:
// find: O(α(n)) - 경로 압축을 통해 거의 상수 시간에 가까움
// unify: O(α(n)) - 두 컴포넌트를 병합하는 과정
// connected: O(α(n)) - 두 노드의 루트를 비교
// componentSize: O(1) - 크기 배열 접근
// countComponents: O(1) - 컴포넌트 개수 반환
