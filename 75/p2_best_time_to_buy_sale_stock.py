from typing import *
import pytest


def solve(arr: List[int]) -> List[int]:
    l, r = 0, 1
    maxProfit: int = 0

    while r < len(arr):
        if arr[l] <= arr[r]:
            maxProfit = max(maxProfit, arr[r] - arr[l])
        else:
            l = r
        r += 1

    return [l, r]


if __name__ == "__main__":
    res = solve([7, 1, 5, 3, 6, 4, 7],)
    print(res)
