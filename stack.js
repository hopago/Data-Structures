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

// Queues
