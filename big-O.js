/** 빅오 표기법
 * 빅오 표기법은 최악의 경우 복잡도의 상한을 제공하며, 입력 크기가 임의로 커질 때 성능을 수량화하는 데 도움을 줍니다.
 */

/*
  빅오 표기법 (Big-O Notation)
  강한 성능을 이해하고, 네 코드가 어느 정도의 효율성을 가지는지 파악하자. 빅오는 코드를 극한 상황에서 평가하고, 그 복잡도를 알 수 있게 해 주는 지표야. 이걸 정확히 알아야 진정으로 문제를 지배할 수 있는 힘이 생기는 거지.
*/

/**
 * Constant Time: O(1)
 * - 상수 시간: 입력 크기와 상관없이, 항상 같은 시간에 완료되는 작업을 의미한다. 예: 배열에서 특정 인덱스의 값을 읽는 것.
 */
function accessFirstElement(array) {
    return array[0];
}

/**
 * Logarithmic Time: O(log(n))
 * - 로그 시간: 입력 크기가 커질수록 작업 시간은 천천히 증가한다. 대규모 데이터를 이진 탐색으로 반씩 줄여나가는 강력한 전략. 예: 이진 탐색.
 */
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (array[middle] === target) return middle;
        else if (array[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
}

/**
 * Linear Time: O(n)
 * - 선형 시간: 입력 크기에 정비례해서 시간이 늘어난다. 배열의 모든 요소를 순차적으로 검색하는 경우. 예: 순차 탐색.
 */
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}

/**
 * Linearithmic Time: O(n log(n))
 * - 선형 로그 시간: 입력 크기에 로그가 곱해지는 형태. 데이터 정렬에서 많이 보이는 복잡도. 예: 병합 정렬, 퀵 정렬.
 */
function mergeSort(array) {
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    return result.concat(left, right);
}

/**
 * Quadratic Time: O(n^2)
 * - 제곱 시간: 두 개의 중첩된 루프가 있는 경우. 입력 크기가 커질수록 시간도 기하급수적으로 증가한다. 예: 버블 정렬.
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

/**
 * Exponential Time: O(2^n)
 * - 지수 시간: 입력 크기가 조금만 증가해도 실행 시간이 폭발적으로 늘어나는 경우. 예: 피보나치 수열을 재귀로 구현한 경우.
 */
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Factorial Time: O(n!)
 * - 팩토리얼 시간: 거의 모든 경우를 시도해야 하는 상황. 매우 큰 입력 크기에서는 불가능한 수준. 예: N개의 요소를 모든 가능한 순서로 나열하는 문제.
 */
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

/*
    Examples

    let i = 0;
    let j = 0;
    while (i < 3 * n) { // O(n)
        console.log("Do something")

        while (j <= 50) console.log("Do something") // O(1)
        while (j < n*n*n) console.log("Do something") // O(n^3)
        i += 1
    }
    
    O(n^4)
 */

