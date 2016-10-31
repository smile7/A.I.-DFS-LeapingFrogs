# A.I. Course
# Leaping Frogs

This is a game, where the player can reorganise the position of some frogs in order to reach the goal.
There are N frogs on the left, that can move only to the right and N frogs on the right that can move only to the left. Between the frogs there is an empty space.
  
  e.g.   LLL_RRR
  
The frogs can move only to the next empty position or to jump through 1 frog and go to empty position.
  
  e.g.   LL_LRRR or L_LLRRR or LLLR_RR or LLLRR_R
  
The goal is to switch the initial positions of the frogs.

         RRR_LLL
        
This project finds a solution to the problem using Depth-First Search.
Input is N - number of frogs on the one side.
Language used - JavaScript so it's not very fast. Can handle ~15 frogs on the one side.
