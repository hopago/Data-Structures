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
